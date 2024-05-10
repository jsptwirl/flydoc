---
title: aPaaS 插件开发者指南
date: 2022-08-01T08:40:16
---

# aPaaS 插件开发者指南

## 快速开始

本章节将阐述插件开发的**最简实践**

插件状态图：  
![插件状态图](http://apaas.wxchina.com:8881/wp-content/uploads/%E6%8F%92%E4%BB%B6%E7%8A%B6%E6%80%81%E5%9B%BE.png)

### 1.依赖插件核心包

首先，我们需要将插件核心包依赖加入到插件项目中

**方法1：**

> git仓库

可以通过 **gradle** 或者 **maven** 进行项目依赖，或者将源码构建成jar包再依赖到我们的项目中

**方法2：**

配置maven私有仓库

```xml
<repositories>
    <repository>
        <id>xuanwu.repo</id>
        <url>http://172.16.3.104:8081/nexus/content/groups/public/</url>
    </repository>
</repositories>
```

并加入依赖

```xml
<dependency>
  <groupId>com.xuanwu.apaas</groupId>
  <artifactId>plugin-core</artifactId>
  <version>2.2.0</version>
  <type>pom</type>
  <scope>provided</scope>
</dependency>
```

### 2.暴露插件类

然后，我们通过 **@PluginExport** 标记一个类，则可以将这个类暴露给外部调用  
注解的参数是插件类的**简写名称**，用于给外部调用时指定

```java
@PluginExport("服务1")
public class Test {

}
```

这样，一个插件就写好了

### 3.编写插件功能

接下来，我们来为插件添加一些实际的功能

```java
@PluginExport("服务1")
public class Test {

    public void hello(){
        System.out.println("这是2.0版本");
    }

}
```

这里我们编写了一个叫 **hello** 的功能，其作用是输出一个字符串  
这样，我们的插件就有了功能了

> 方法并不是只能空参数和空返回值，我们**支持任意类型参数和返回值**

### 4.上传&安装插件

然后，将写好的插件构建成jar包（fat-jar，需要将所有**依赖的类库**打包到jar包里的/lib目录，插件核心包不需要打包）

```js
//Gradle打包配置参考
jar {
    manifest {
        manifestContentCharset 'utf-8'
        metadataCharset 'utf-8'
        manifest {
            attributes "Class-Path": configurations.compile.collect { "lib/${it.name}" }.join(' ')
        }

        into('lib') { //将第三方jar放入lib目录中
            from configurations.compile
        }
    }
}
```

暂时没有UI界面可以操作，请调用 **upload** 接口进行插件上传  
然后调用 **install** 接口对租户安装指定插件（不知道插件code的可以先调用 **list** 接口查询插件信息）

> 接口文档详见 [插件管理接口文档](http://apaas.wxchina.com:8881/2022/08/01/插件管理接口文档/)

### 5.使用插件

最后，我们就可以再 **IDE** 中使用 **flycode** 进行插件的使用了

```js
var TEST = PLUGIN.load("测试用插件");//使用最新版（使用前记得安装最新版）
var SERVER_1 = TEST.get("服务1");//就是@PluginExport注解内的参数
SERVER_1.hello();
```

```js
var TEST = PLUGIN.load("测试用插件", "1.0.1");//使用指定版本
var SERVER_1 = TEST.get("服务1");//就是@PluginExport注解内的参数
SERVER_1.hello();
```

> 注意，PLUGIN是flycode内置的插件管理器，此处PLUGIN.load方法作用是获取插件实例，它的参数是插件的name和version，name是一个唯一值，详情请参考接口文档  
> 插件实例的get方法是一个内置方法，通过这个方法获取指定的类

输出结果（业务服务控制台日志）:

```java
这是2.0版本
```

```java
这是1.0.1版本
```

## 注解的使用

本章节详细阐述所有完整的功能

### @PluginComponent

> 类标记

最基础的注解，表示插件组件，插件加载器需要实例化的类，**所有使用了下文注解的类**都要标记该注解才能工作

### @PluginExport

> 类标记  
> 参数: 1.暴露给外部调用的简写名（可空）；2.暴露模式：单例或者原型，详情看下文的“多重获取对象方式说明”。

被标记的插件类会**暴露**给外部调用（换句话说，不标记该注解的类，外部无法调用）  
可以指定简写名称，不指定则会使用全限定名  
该注解**包含了@PluginComponent**，被标记该注解的类也属于组件

### @PluginMethodHide

> 方法标记

被标记的插件方法会被**隐藏**，外部将无法调用  
此注解仅对标记了 **@PluginExport** 的类的方法有意义

### @PluginWired

> 属性标记  
> 参数：指定实现类的全限定名（可空）

插件连线，被标记的成员可以被**注入到所属对象**中  
所属对象和被注入者均必须被 **@PluginComponent** 标记  
根据**类型匹配**，有多个实现类时可以指定具体类的**全限定名**  
如果不指定实现类则会**自动**选择一个实现类

### @PluginConfig

> 属性标记  
> 参数：插件-租户的配置的键名（可空）

被标记的成员会被赋予**租户配置**的指定键名的值  
如果不指定键名则会使用成员的**变量名**  
注意：必须统一使用 **String** 类型存储值  
租户配置信息存储在数据库中，可以通过接口进行配置，详情参考接口文档

### @PluginResource

> 属性标记  
> 参数：资源配置键值对（可空）

被标记的插件资源会在插件加载时被注入  
根据被标记的成员**类型**来赋予不同的资源  
目前支持的成员类型列表详情见下一章节  
可以指定配置信息，格式为 **"key1=value1,key2=value2..."**

## 支持的资源

### 数据源

类型：javax.sql.DataSource  
参数：

|键名|说明|
|---|---|
|scope|数据库范围，可选平台库还是租户库（可传："platform", "tenant"）|
|type|租户数据库的类型，可选只读、读写、报表，数据库范围为"tenant"时才需要传该值（可传："read", "readAndWrite", "report", "custom"）|
|name|租户数据库的名称（租户数据库类型为"custom"时才需要传该值）|

## 插件的生命周期

插件支持在服务运行时**热插拔**，本章节将阐述插件的生命周期的各个阶段，以及开发者能够做的事  
![](http://apaas.wxchina.com:8881/wp-content/uploads/%E6%8F%92%E4%BB%B6%E7%8A%B6%E6%80%81%E5%9B%BE.png)

### 1.待装载

我们使用了**懒加载**机制，插件上传到服务器中（或服务启动完成时），不会马上就被加载，而是处于**待装载**状态  
只有当 **flycode** 首次通过 **Plugin.load** 方法调用插件时，才会进行加载  
加载完成后，会触发插件的回调事件，我们可以通过实现 **PluginLifeCycle** 接口的 **beforeLoad** 和 **afterLoad** 方法来分别在插件加载前、后做一些**准备工作**，如插件的初始化等

```java
public class MyCycle implements PluginLifeCycle {

    @Override
    public void beforeLoad() {
        System.out.println("插件即将加载");
    }

    @Override
    public void afterLoad() {
        System.out.println("插件被加载了");
    }

}
```

### 2.服务中

插件在加载完毕后，会进行**服务中**状态，该状态可以接受 **flycode** 对插件内各种功能方法的调用，开发者可以通过 **PluginContextManager** 类的静态方法 **getContext** 来获取上下文

```java
@PluginExport("服务1")
public class Test {

    public void hello(){
        System.out.println("这是2.0版本");
        System.out.println("上下文：" + JSON.toJSONString(PluginContextManager.getContext()));
    }

}
```

每一次不同的请求都会有**不同的上下文**可以获取（通过ThreadLocal实现），但插件的功能方法本身**“不是线程安全”**的，这里需要我们按照**实际需求**实现线程安全

### 3.已卸载

如果在运行时对插件进行**热更新**，系统会将插件**卸载**，此时会触发回调事件，开发者可以通过实现 **PluginLifeCycle** 接口的 **beforeUnload** 方法来在插件卸载前做一些**收尾工作**，如资源释放等

```java
public class MyCycle implements PluginLifeCycle {

    @Override
    public void beforeUnload() {
        System.out.println("插件被卸载了");
    }

    @Override
    public void beforeLoad() {
        System.out.println("插件即将加载");
    }

    @Override
    public void afterLoad() {
        System.out.println("插件被加载了");
    }

}
```

此后，插件会变成**待装载**状态  
如果在运行时对插件进行**卸载**，系统也会执行上述操作，但插件的状态将变成**已卸载**

## 父子插件特性

> 在开发中，有时候会遇到需要代码复用或定制化的场景，重写一个新插件又太冗余，这里我们引入一种新特性，允许开发中使用子插件继承、覆盖父插件

1. 在**上传插件**时可以指定插件的父插件（具体参考接口文档）
2. 子插件会**继承**父插件的所有class文件，并且父插件中与子插件同名的class（全限定名）会被子插件**覆盖**
3. 插件只能拥有**一个**父插件（父插件也可以拥有它的父插件）
4. 租户使用子插件时，只需要安装**子插件**，不需要安装父插件
5. 子插件的租户配置**不会继承**父插件

## 多种获取对象方式

> ① 在开发中，有时候我们会想设计一些非单例的组件，即类似于spring的“prototype”

我们只需要将 **@PluginExport** 的 **mode** 参数设置成“prototype”即可

```java
@PluginExport(value = "pro", mode = "prototype")
public class PrototypeTest {

    @PluginConfig
    private String haha;
    @PluginResource("scope=tenant,type=read")
    private DataSource dataSource;
    @PluginWired
    private O2 o2;

    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void foo(){
        System.out.println(haha);
    }

    public void foo2(){
        System.out.println(dataSource);
    }

    public void o2foo(){
        o2.foo();
    }
}
```

对于 **@PluginSpringExport** 则没有该参数，直接使用spring自带的 **@Scope** 设置即可

```java
@PluginSpringExport("springpro")
@Component
@Scope("prototype")
public class SpringPrototypeTest {

    @PluginConfig
    private String haha;
    @PluginResource("scope=tenant,type=read")
    private DataSource dataSource;

    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void foo(){
        System.out.println(haha);
    }

    public void foo2(){
        System.out.println(dataSource);
    }
}
```

> ② 如果不想创建对象，只想调用静态方法怎么办

在 **flycode** 先load出插件，再使用插件的 **staticCall** 方法即可，该方法有三个参数：

1. 插件类名称，这里的名称是 **@PluginExport** 的简写名或者全限定名
2. 方法名，被调用的静态方法的方法名
3. 参数列表，静态方法的参数，请根据实际方法的参数个数传

```js
var TEST1 = PLUGIN.load("darhaot0");
TEST1.staticCall("插件类名", "静态方法名", "参数1", "参数2");//参数可以是任意类型，任意数量
```

## 与Spring集成

> 考虑到大部分开发者的编码习惯，我们允许开发中使用Spring框架，下面介绍如何在插件中集成Spring

### 使用方法

总所周知，第一步就是加入Spring框架的**相关依赖**，这一步就不再赘述

接下来，在我们的**Spring入口类**上标记 **@PluginSpringPrimarySource** 注解

```java
@PluginSpringPrimarySource
@EnableCaching
@EnableScheduling
public class PluginSpringApplication {
}
```

这个入口类和我们之前写Spring应用程序不同点是：

1. 不写 **main** 方法，因为启动Spring的任务交给了**容器**来执行
2. 不写 **@SpringApplication** 注解（也不写该注解内包含的三个注解） ，因为**容器**已经包含了该注解的入口类
3. 可以有**多个**入口类，也可以没有入口类，所有入口类都会生效（父插件中的入口类也会生效）

然后，我们在需要**暴露**给外部使用的类上标记 **@PluginSpringExport** 注解，参数可以添加简写名，不填写简写名则会使用**全限定名**

```java
@PluginSpringExport("springDT")
@Component
public class SpringSupportPlugin {

    @Autowired
    private SpringModel model;

    public void foo(){
        model.foo();
    }

    public void foo2(){
        model.foo2();
    }

}
```

### 与插件注解集成

> **Spring组件** 中可以使用任意 **插件自带** 的注解

```java
@Component
public class SpringModel {

    /**
     * 测试：Spring组件中使用插件注解
    */
    @PluginConfig
    private String aaa;

    public void foo(){
        System.out.println("SPRING");
    }

    public void foo2(){
        System.out.println("SPRING：" + aaa);
    }

}
```

### 插件注解手动注入的使用

有时候spring的bean创建过程会依赖到插件的注解，但插件注解的赋值环节在spring启动之后  
这时候，我们可以使用 **PluginSpringInjector** 工具类的 **inject** 方法来手动注入插件注解  
可以将指定对象的 **@PluginConfig、@PluginResource** 注解进行赋值  
可以用于spring组件对这些注解值的依赖的场景，使用该方法将自身传入，设置注解值

```java
/*
* 这个组件中的bean创建需要依赖dataSource，如果不手动注入，则会报NPE（因为插件注解的赋值环节在spring启动之后）
*/
@Configuration
public class Config {

    //注入的时机可以选择在Config组件创建之后但Bean未创建之前
    @PostConstruct
    public void init() throws Exception {
        System.out.println("OOPS:init");
        PluginSpringInjector.inject(this);//<<<关键代码：将自身传入即可
    }

    /**
     * 资源：javax.sql.DataSource
    */
    @PluginResource("scope=tenant,type=read")
    private DataSource dataSource;

    @Bean("sqlSessionFactory")
    public SqlSessionFactory sqlSessionFactory() throws Exception {
        System.out.println("OOPS:bean实例化");
        MybatisSqlSessionFactoryBean sqlSessionFactory = new MybatisSqlSessionFactoryBean();
        sqlSessionFactory.setDataSource(dataSource);
        MybatisConfiguration configuration = new MybatisConfiguration();
        configuration.setJdbcTypeForNull(JdbcType.NULL);
        configuration.setMapUnderscoreToCamelCase(true);
        configuration.setCacheEnabled(false);
        sqlSessionFactory.setConfiguration(configuration);
        return sqlSessionFactory.getObject();
    }
}
```

### 关于Spring支持的注意事项

1. 暂不支持在**插件组件**中使用 **Spring** 注解
2. 暂不支持编写Spring配置文件
3. 使用Spring支持的插件，包名需要以 **"com.xuanwu"** 开头
4. 打包插件jar文件时一般情况下**无需打包**Spring框架的相关依赖（容器已包含大部分Spring依赖）
5. 不能同时在一个类上标记 **@PluginExport** 和 **@PluginSpringExport** 注解

> 详情参考文末附录完整范例

## 注意事项

### 1.插件方法的封装

容器只允许用户调用插件的**非静态公有**方法，使用其他修饰符修饰的方法都无法被调用，我们可以利用这一机制来管控插件的方法暴露

### 2.打包要求与类加载隔离机制

插件包要求打包成fat-jar，详情查看文章开头的“快速开始”章节。  
容器维护一个共享lib目录，插件加载后，容器会从插件jar的lib目录中提取共享lib目录还不存在的jar，放到共享lib目录中。  
其中“还不存在”的定义是lib的jar文件名不存在。  
容器会使用共享加载器加载这些lib。  
不同的插件如果引用了同一个lib，则会使用共享加载器加载这些lib的类。  
这一机制允许了插件、容器之间有相同的但**不同版本**的类或依赖的同时，又节省了重复加载相同依赖所消耗的内存。  
注意：即使两个类有相同的全限定名，在它们之间也**无法互相调用**！故在开发中应该避免编写或引入有重复全限定名的类，否则可能会出现冲突。  
PS: 容器的jdk版本是8，请使用jdk8进行打包插件。

### 3.注解扫描相关规则

插件jar包里的lib包内的spring的相关注解会被扫描，但插件的注解和接口不会。所以请不要将插件注解和接口写在lib的jar里面。

## 附录

### 概念模型

> [https://www.processon.com/view/link/61d815d47d9c0806a8961189](https://www.processon.com/view/link/61d815d47d9c0806a8961189)

### 接口文档

> [插件管理接口文档](http://apaas.wxchina.com:8881/2022/08/01/插件管理接口文档/)