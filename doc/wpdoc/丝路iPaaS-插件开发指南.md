---
title: 丝路iPaaS-插件开发指南
date: 2022-08-02T07:43:07
---

|版本|更新时间|更新说明|作者|
|---|---|---|---|
|v1.0|2021/12/1|初始版本||
|v1.1|2021/1/20|增加插件版本说明||

# 1.插件规范

* 开发语言：Java（JDK8）
* 打包工具：Maven

# 2.获取SDK

```xml
<!-- 配置私服仓库 -->
<repositories>
    <repository>
        <id>xuanwu.repo</id>
        <url>http://172.16.3.104:8081/nexus/content/groups/public/</url>
    </repository>
</repositories>

<!-- 引入依赖 -->
<dependencies>
    <dependency>
        <groupId>com.xuanwu.ipaas</groupId>
        <artifactId>plugin-sdk</artifactId>
        <version>2.1.0</version>
    </dependency>
</dependencies>
```

# 3.连接管理

在插件中，当需要用到连接（如数据库连接、会话token）的时候，可以实现ConnectSPI接口中的getConnection方法，填充获取连接的逻辑代码，平台会自动管理连接对象，不建议在插件中自行创建连接或实现连接池。  
**如果插件无需使用连接，可以不实现这个接口。**

```dart
@Slf4j
public class ConnectionFactory implements ConnectSPI {

    /**
     *
     * @param 在 编排管理系统->应用账号管理 创建的账号所包含的字段，会封装为map传入该方法
     * @return 一个Connection对象 有三个属性：
     *          1. 连接对象
     *          2. 过期时间  到期毫秒数，设置为null代表永不过期(不建议)
     *          3. 连接类型，有两种：
     *                        ConnectType.CONNECT - 连接（如数据库连接）
     *                        ConnectType.SESSION - 会话（如接口鉴权token）
     */
    @Override
    public Connection getConnection(Map<String, Object> input) {
        try {
            log.info("参数： " + JsonUtils.toJSONString(input));

            String server = String.valueOf(input.get("server"));
            String username = String.valueOf(input.get("username"));
            String admin = String.valueOf(input.get("admin"));

            String response = HttpClientUtils.httpPost(server + "/api/auth/login", input, null);

            log.info("getConnection response = " + response);

            // 解析token
            String token = JsonUtils.get(response, "data").get("token").asText(); // token
            // 解析过期时间
            Long expired = JsonUtils.get(response, "data").get("tokenExpires").asLong(); // 过期时间

            // 返回会话连接
            return new Connection(token, expired, ConnectType.SESSION);
        } catch (Exception e) {
            throw PluginException.asPluginException(PluginErrorCode.CONNECT_CREATE_ERROR, "获取token失败 : ", e);
        }
    }

}
```

# 4.行为管理

在插件中，实现了ActionSPI接口的action方法便被视为一个行为，可以在编排系统中使用；一个插件包可以包含多个行为，即多个实现ActionSPI接口的类。

```java
@Slf4j
public class DemoAction implements ActionSPI {

    /**
     *
     * @param connection 连接：实现ConnectSPI接口中生成的连接，这里自动作为参数传入
     * @param input 行为入参：执行当前行为需要的参数，封装在一个map中传入，对应plugin.json中的input{}配置；这里只管定义和使用，实际怎么传入在使用编排管理系统时再考虑
     * @return 通过ResultMap.success()返回数据，对应plugin.json中的output{}配置
     */
    @Override
    public Map<String, Object> action(Connection connection,  Map<String, Object> input) {
        try {
            log.info("接口入参： " + JsonUtils.toJSONString(input));
            if (connection == null)
                throw PluginException.asPluginException(PluginErrorCode.CONNECT_NOT_FOUND_ERROR, "xx插件[xx接口]调用失败：连接不能为空");
            if (input.get("phoneNumber") == null)
                throw PluginException.asPluginException(PluginErrorCode.PLUGIN_PARAM_ERROR, "xx插件[xx接口]调用失败：缺失参数");

            //获取会话
            String token = (String)connection.getConnection();

            // 设置请求头 token
            Map<String, String> headers = new HashMap<>();
            headers.put("token", token);

            // 发送POST请求
            String response = HttpClientUtils.httpPost("http://localhost/sendMsg", input, headers);
            log.info("response = " + response);

            // 返回数据
            return ResultMap.success(JsonUtils.parseObject(response, Map.class));

        } catch (Exception e) {
            return ResultMap.failed(PluginErrorCode.RESULT_EXCEPTION.getCode(), e.getMessage());
        }

    }

}
```

# 5.通用类库

在SDK中提供了一些通用工具类库，建议使用这些内置工具类，而不是使用第三方工类。如：

* **JsonUtils**：可满足json使用时的大部分场景
* **HttpClientUtils**：提供HTTP调用接口，并且做了缓存处理
* **ResultMap**：Map工具类

# 6.资源配置

开发者需要在插件resource目录下创建一个plugin.json文件，用来定义插件中行为的相关配置，例如：

```json
{
    "version": "1.0.1", //插件包版本号
    "versionnote": "", //版本说明 非必填
    "action":[ // 行为列表
        {
            "resourcename": "demo连接", //资源名称 
            "resourcekey": "demoConnect123456", //资源key
            "resourcetype": "2", //资源类型 1 行为，2 连接
            "accounttype": "xuanwu-demo", //帐号类型 资源类型为2时不可为空
            "uri": "com.xuanwu.ipaas.plugin.demo.spi.ConnectionFactory", //类全限定名
            "descr": "", //资源描述 非必填
            "config": //连接类型的资源可以不用定义config内容
            {
                "input":
                {},
                "output":
                {}
            }
        },
        {
            "resourcename": "demo行为", //资源名称
            "resourcekey": "demokey123456", //资源key
            "resourcetype": "1", //资源类型 1 行为，2 连接
            "accounttype": "xuanwu-demo", //该行为需要用到的连接帐号类型
            "uri": "com.xuanwu.ipaas.plugin.demo.spi.DemoAction",//类全限定名
            "descr": "", //资源描述 非必填
            "config": 
            {
                // 行为入参 入参暂时只支持单层的Map、list类型 
                "input": 
                {
                    "properties":
                    [
                        {
                            "key": "url", //参数字段key 
                            "title": "图片id", //参数名称
                            "type": "paramselect", //前端参数类型，如文本框、下拉框等 后续会出个对照表，大部分情况下是paramselect
                            "datatype": "String", //参数数据类型，如String、Long、Map、List等
                            "defaultvalue": "", //参数默认值
                            "required": "true", //是否必传
                            "helptxt": "图片路径" //备注
                        },
                        {
                            "key": "options",
                            "title": "参数选项",
                            "type": "paramselect",
                            "datatype": "Map",
                        }
                    ]
                },
                 // 行为出参
                "output":
                {
                    "properties":
                    [
                        {
                            "key": "status",
                            "title": "状态",
                            "datatype": "Integer",
                            "type": "paramselect"
                        },
                        {
                            "key": "data",
                            "title": "返回数据",
                            "datatype": "Map",
                            "type": "paramselect"
                        },
                        {
                            "key": "error",
                            "title": "错误输出",
                            "datatype": "Map",
                            "type": "paramselect",
                            "properties":
                            [
                                {
                                    "key": "errorcode",
                                    "title": "错误编码",
                                    "datatype": "String",
                                    "type": "paramselect"
                                },
                                {
                                    "key": "errormsg",
                                    "title": "错误信息",
                                    "datatype": "String",
                                    "type": "paramselect"
                                }
                            ]
                        }
                    ]
                },
                "error": // 自定义错误码
                [
                    {
                        "errorcode": "5001",
                        "errortitle": "错误名称",
                        "errormsg": "错误描述，详细描述什么情况会出现这个异常"
                    }
                ]
            }
        }
    ]
}
```

# 7.版本管理

插件的版本统一依赖插件包plugin.json文件中指定的版本号做管理，如果更新插件后无法兼容旧版本，必须更新版本号。  
**某些保持版本号的情况：**

* 测试过程中产生的中间结果，无意义，可不修改版本号，直接覆盖；
* 生产过程中出现问题，需要覆盖来修复大面积的问题；
* 忘记修改版本号；

上述情况在上传过程中会检测版本号是否重复，若重复会提示是否要需要覆盖。

**版本号规则：**

* xx.xx.xx，如2.1.1，版本号应递增。

**删除规则：**

* 已被使用的版本无法删除，需要先在编排管理系统中解除使用。

# 8.插件打包

**如果插件使用了平台没用到的依赖包或与平台使用的版本不兼容，需要将依赖包也编译到插件包中。可以使用maven-shade-plugin插件打包，例如：**

```xml
<dependencies>
    <dependency>
        <groupId>com.ibeetl</groupId>
        <artifactId>beetl</artifactId>
        <version>3.7.0.RELEASE</version>
    </dependency>
</dependencies>

<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <configuration>
                <source>8</source>
                <target>8</target>
            </configuration>
        </plugin>
        <!--  ***将插件依赖的第三方包也编译到Jar包中*** -->
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-shade-plugin</artifactId>
            <version>3.1.1</version>
            <executions>
                <execution>
                    <phase>package</phase>
                    <goals>
                        <goal>shade</goal>
                    </goals>
                    <configuration>
                        <artifactSet>
                            <includes>
                                <include>com.ibeetl:beetl:3.7.0.RELEASE </include>
                            </includes>
                        </artifactSet>
                    </configuration>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>
```

如果插件使用了本地jar包（无法直接通过网络下载），可以将jar包安装到本地仓库中再使用上述方式打包，相关命令：

```markdown
# -Dfile       本地jar包文件
# -DgroupId    指定包结构
# -DartifactId 指定项目名
# -Dversion    指定版本
mvn install:install-file -Dfile=C:\XXX-1.0.jar -DgroupId=XXX.XXX -DartifactId=XXX -Dversion=1.0 -Dpackaging=jar  
```

平台依赖第三方包参考：

|groupId|artifactId|version|
|---|---|---|
|com.xuanwu.ipaas|plugin-sdk|2.1.0|
|org.springframework|spring-\*|5.3.14|
|org.postgresql|postgresql|42.3.1|
|mysql|mysql-connector-java|8.0.27|
|com.ibm.db2|jcc|11.5.7.0|
|com.oracle.database.jdbc|ojdbc8|21.4.0.0.1|
|org.elasticsearch|elasticsearch|7.15.1|
|org.apache.httpcomponents|httpclient|4.5.13|
|org.apache.commons|commons-lang3|3.12.0|
|com.fasterxml.jackson.core|jackson-\*|2.13.1|
|com.baomidou|mybatis-plus|3.5.0|
|org.slf4j|slf4j-api|1.7.32|
|org.redisson|redisson|3.16.4|

# 9.插件上传

可通过编排管理系统的资源管理页面上传插件包

# 10.演示工程

[plugin-demo](http://apaas.wxchina.com:8881/wp-content/uploads/plugin-demo.zip "plugin-demo")

# 11.其它

插件中行为的默认加载方式为单例模式，连接的加载方式默认为多例模式，可以使用@Resource注解修改默认加载方式：

```java
@Resource(type = LoadType.PROTOTYPE)
public class TestAction implements ActionSPI {

    @Override
    public Map<String, Object> action(Connection connection,  Map<String, Object> input) {}
}
```