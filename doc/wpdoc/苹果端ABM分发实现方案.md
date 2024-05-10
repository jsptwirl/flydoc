---
title: 苹果端ABM分发实现方案
date: 2021-07-07T18:53:44
---

# 苹果端ABM分发实现方案

使用过程中，若有问题请联系：行业组件部-王娟

## 业务背景

​ 苹果官方有六大账号：“Apple ID”、“个人账号”、“公司账号”、“企业账号”、“其他账号”及“ABM 系统”六种账号是苹果对于不同开发者的身份所提供的不同账号。开发者可通过“个人账号”、“公司账号”、“企业账号”、“其他账号”及“ABM 系统账号“发布App。

### 一、证书的类型概念

**1、个人开发者账号**

**优点：**

①申请速度快（1 – 3 个工作日完成）

②自身 App 可上架至 App Store 供用户下载

**缺点：**

①苹果审核相对严格

②只显示个人开发者名称，缺少公信力

③iTC 后台无法创建更多开发者协同账号

④测试设备数量限制 100 台

**适用范围：**

①独立开发者或小团队

②节省注册申请时间

③无需体现公司背景

**2、公司开发者账号**  
**优点：**

①有公司背书，用户在 App Store 下载较为放心

②iTC 后台可以创建更多开发者协同账号，参加的相关开发等成员可以集中管理

③申请过程中获得的邓白氏编码，相当于企业的一张英文名片

**缺点：**

①需要邓白氏编码和公司开发者账号双重申请，一般需要 2 – 8 个工作日

②苹果审核相对严格

③测试设备数量限制 100 台

**适用范围：**

①公司或工作室等集体性账号

②分发过程中需要进行成员协作

③需要彰显公司信息，打造系列产品，树立产品背书形象

**3、企业开发者账号**

**优点：**

①可自行分发部署 App，不需要苹果审核，直接上架到企业网站或内部渠道

②可自定义登录账号、自定义支付方式

③iTC后台可以创建更多开发者协同账号，集中管理成员权限及产品开发

④申请过程中获得的邓白氏编码，相当于企业的一张英文名片

⑤无测试设备限制，适合大型、敏捷团队开发，迭代版本快

**缺点：**

①需要邓白氏编码和企业开发者账号双重申请，但通过率极低

②只在企业内部分发使用，无法借助 App Store 流量

③不能显示公司信息

④目前违规滥用情况较多，封号严重

**适用范围：**

①企业内部管理

②无需上线 App Store 供大众用户使用的产品

**4、ABM 系统**

**优点：**

①2019 年 10 月中国区启动，是全新的分发平台

②相比企业开发者账号，资质审核没有那么严格

③App 的开发只需预审和机审，适合公司、企业内部管理使用

④iTC 后台可以创建更多开发者协同账号，集中管理成员权限及产品开发

**缺点：**

①要邓白氏编码和企业开发者账号双重申请

②只在企业内部使用

③不能显示公司信息

④有下载量的限制，与公司规模相关联（企业员工数\*1.5±）

**适用范围：**

①企业内部管理

②无需上线 App Store 供大众用户使用的产品

③无“企业开发者账号”的相关开发者

**5、其他账号**

其他账号包括三大类行组织机构可特殊申请：非营利、被认可的教育机构和政府组织。

**6、Apple ID**

苹果帐户（Apple ID）是苹果公司为其产品（如iWork、iTunes Store和Apple Store）所引入的认证系统。Apple ID作为一个集全功能于一身的用户帐户，允许用户访问苹果的各种资源。因为一个Apple ID可以被用于由苹果提供的多个产品和服务，它也可以称为Apple账户、MobileMe账户、Mac账户、iTunes Store账户和iChat账户。

**账号申请入口**

1、Apple ID 直接通过苹果官网即可注册

2、个人账号、公司账号、企业账号：建议下载 Developer 应用程序，进行注册。

3、ABM 系统：[https://business.apple.com/](https://business.apple.com/)

### 二、现有的问题痛点

1、企业证书逐步限制申请

​ 在 2019 年下半年，苹果停止了企业账号的申请和审批，同时苹果对于各类签名开始收紧管控力度，大量苹果企业签名（Apple Developer Enterprise Program）被清理，大量依靠苹果企业签分发的 App 都无法使用。很多开发者转向矩阵部署开发者账号的超级签名。但由于超级签也有多种限制，价格也水涨船高，普通开发者账号的申请也日益艰难，因此 App 的快速批量分发成了开发者们很是棘手的问题。

2、个人证书数据安全问题（例如个人离职后，通过个人证书部署企业应用，导致企业资产受损）

3、项目发布频繁、故障类Fixed问题紧急处理等，需要缩短上价时间，快速分发IOS应用包

### 三、ABM的价值

1、一个企业证书可以打N个包  
2、每一个ABM包可以自定义图标、LOGO、名称等  
3、ABM可快速发布下载，不需上架APPstore

## 解决方案

​ 由客户注册ABM账号后，下载兑换码。由实施人员填入模板excel，通过兑换码管理页面导入到数据库里。在实施人员将jar包部署到服务器上后。如下图，用户在浏览器上访问下载页面，微服务从数据库中随机取一个有效兑换码对应的url跳转链接，让浏览器重定向到该链接，会跳转到iTunes Store下载app。

![图片1](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%871.png)

### 一、上架app及下载兑换码的具体步骤

#### （一）、注册ABM账号

**1.** 登录注册网站

[https://business.apple.com/#enrollment](https://business.apple.com/#enrollment)

**2.** 点击“立即注册”

**3.** 输入并检查以下组织信息：

•数据通用编号系统 D-U-N-S 编号（即邓白氏编码）（邓白氏申请步骤可自行网上查询或参考如下链接：[https://juejin.im/post/6844903778596945928](https://juejin.im/post/6844903778596945928)）  
**【注意】D-U-N-S 编号必须与组织的法定名称和地址相匹配。**  
•所在的国家或地区  
•电话号码（系统会根据您输入的 D-U-N-S 编号所提供的信息来预填电话号码。也可以输入新的电话号码。）  
•网站网址 (URL)  
**【注意】此域名用于预填管理式 Apple ID。但是，如果组织的网站网址 (URL) 不同于其注册域名，那么在创建管理式 Apple ID 并将其分配给 Apple 商务管理的其他用户之前，可将这个 URL 更改为组织的注册域名。请勿使用所创建的域名，否则会导致已创建的所有管理式 Apple ID 都无法正常工作。**  
•时区和语言

**\- 输入并检查信息：**  
•代表组织注册的人员的姓氏和名字  
**【注意】此姓名必须是合法登记的人名。若姓名为“IT 协调员”或“Apple 部署”等名称，系统会将其退回并让更正信息。**  
•工作电子邮件地址，该地址不能与 iTunes 或 iCloud 帐户关联，且未在其他任何 Apple 服务或网站上作为 Apple ID 使用。  
•职务/职称

**\- 输入并检查验证联系人信息：**  
•姓名  
•工作电子邮件地址  
•职务/职称

**4.** 点按“继续”，仔细检查信息，然后点按“提交”。

**5.** 查看来自 Apple 商务管理的电子邮件，找到主题为“您的注册正在审核中”的邮件。

在审核过程中，苹果会通过电话联系验证联系人，并要求该联系人确认有关注册人所在组织的信息，然后才能批准注册。  
**【注意】要确保能收到来自http://apple.com域名的邮件。苹果也会通过电话沟通，若有未接来电，请尽快回电，以便注册过程可以顺利进行。**

#### （二）、确认注册和授予管理员访问权限

Apple 联系验证联系人并确认好信息之后，该联系人将收到来自 Apple 商务管理的主题为“感谢您确认您的组织”的邮件。然后，该联系人即可完成以下任务。

**1.** 打开来自 Apple 商务管理的主题为“感谢您确认您的组织”的邮件。

**2.** 查看邮件并执行以下操作之一：

•点按“确认为\[人名\]”按钮，让此人成为ABM的管理员。这是最初在ABM中注册的人的名字。

•如果不希望此人成为管理员，点按“另选他人”链接，输入其他人的信息，然后点按“提交”  
**【注意】最多只可以向四个经理授予管理员访问权限。**

**3.** 验证联系人须勾选相应复选框，签署 ABM 条款与条件。

此任务完成后，被选中作为管理员的人将收到来自 ABM的主题为“注册完成”的邮件。

#### （三）、完成注册流程

验证联系人批准之后，将收到通知注册已批准的邮件。然后创建自己的管理式 Apple ID 并同意所有条款与条件。

**1.** 打开来自 Apple 商务管理的主题为“注册完成”的邮件。

**2.** 点按邮件中的“开始操作”按钮打开 Safari 浏览器或默认浏览器。要查看受支持的浏览器列表，请参阅 Apple 商务管理的计划要求。

**3.** 输入一个电子邮件地址，以便作为管理式 Apple ID 使用。  
**【注意】确保这个电子邮件地址之前没有将其作为 Apple ID 用于 iTunes 或 iCloud 帐户，或任何其他 Apple 服务或网站即可。输入安全密码，然后确认密码。**

**4.** 确认名字，然后输入出生日期。

**5.** 输入已启用短信的手机号码，然后选择如何获取二次验证。

**6.** 点按“提交”。系统会要求验证电子邮件地址和手机号码。

**7.** 点按您收到的邮件中的链接，以验证您的电子邮件地址。

**8.** 输入您手机上收到的短信验证码，然后点按“验证”。

**9.** 接受条款与条件。必须接受所有条款才能继续操作。

需要指出的是，ABM 只是用于分发的系统，不是开发 App 的系统，开发打包 App 还是要用个人开发者账号或公司开发者账号。开发者可以打包后提交到 ABM 账号进行内部分发。目前 ABM 系统还处在内部测试中，只有极少数的企业能够通过定邀获取使用资格。蝉大师会和开发者一同关注 ABM 系统的最新进展，第一时间同步最新消息。

#### (四)、申请上架验证及客户上线工作

1. 登陆AppStore开发者站点（[https://appstoreconnect.apple.com/），申请上架流程与正常的上架流程一样，唯一不同的地方是分发方式的选择，如下图，在“价格与销售范围”栏中的分发方式选择第三项（如果上架到App](https://appstoreconnect.apple.com/），申请上架流程与正常的上架流程一样，唯一不同的地方是分发方式的选择，如下图，在“价格与销售范围”栏中的分发方式选择第三项（如果上架到App) Store则选择的为第一项），然后再填入组织ID即可。然后提交审核申请。

![图片2](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%872.jpg)

备注：组织ID获取方式，登陆ABM账号管理站点（[https://business.apple.com/#main/settings/enrollmentinfo](https://business.apple.com/#main/settings/enrollmentinfo)）

![图片3](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%873.jpg)

1. 审核通过后，选择发布（如果自动发布则省略此步骤）
2. 发布后便可以在ABM账号站点中（[https://business.apple.com/#main/b2bapps）中看到自动App（注意可能会有一定延迟，但不会太久），如下图](https://business.apple.com/#main/b2bapps）中看到自动App（注意可能会有一定延迟，但不会太久），如下图)。

![图片4](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%874.jpg)

1. 选中自定义App后，可以选择具体的分发方式，如下图

![图片5](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%875.jpg)

1. 目前已经验证可以使用兑换码的方式分发。但是需要注意的是每个兑换码都是一次性的，不同的用户需要使用不同的兑换码。下载下来的兑换码文件如下：

![图片6](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%876.jpg)

1. 兑换码的使用方法有一下几种：

Ø 方式一：可以直接使用safari浏览器打开连接，可以自动安装。

Ø 方式二：打开 iPhone 中的 App Store 点击右上角的头像, 在账户中选择「兑换礼品卡或代码」，输入兑换码后点击右上角兑换即可。

Ø 方式三：打开 App Store 在 Today 页面拖到底部，点击兑换按钮，输入兑换码后点击右上角兑换即可。

**【注意】本方案的使用方式是：用户使用浏览器访问微服务，微服务将浏览器重定向访问该链接，会自动跳转到iTunes Store，点击兑换，即可自动安装好app。**

### 二、数据库及ide兑换码管理页面的配置

#### 1、数据库

**创建业务实体**

方法一（不建议）：如果想单独使用微服务和业务对象。可直接执行com\_t\_appversionurl.sql，完成兑换码表创建。但这种方法，ide里面是不认这个表。

方法二：在ide业务实体里，导入“业务实体-com\_t\_appversionurl.json”。

**注意: ide直接导入的json无法入到数据库里，通过对照上面json导入的实体，自己手动重新一个个加字段，新建一个com\_t\_appversionurl**

![图片7](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%877.png)

#### 2、创建业务领域

在ide业务领域里，导入“业务行为-2021-03-17.json”，完成业务领域的创建。

![图片8](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%878.png)

#### 3、创建业务UI

在业务UI里，导入“业务UI-2021-03-17.json”，完成业务UI的创建。

![图片9](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%879.png)

#### 4、上传导入模板

在文件管理里，导入“兑换码导入模板.xlsx”，完成导入模板的上传。

![图片10](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%8710.png)

记得在兑换码管理页面UI里面，检查模板关联正确性。

![图片11](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%8711.png)

![图片12](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%8712.png)

#### 5、配置导航、挂功能点

在功能配置里面先配置好导航，新增节点。再在关联功能里面，新增功能，关联UI。

![图片13](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%8713.png)

#### 6、页面菜单权限配置

用SFA管理员登录，在职位管理里，设置职位权限，勾选配置的页面。完成给该职位的人员页面访问权限的配置。

![图片14](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%8714.png)

![图片15](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%8715.png)

![图片16](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%8716.png)

然后就可以在这里更新、导入兑换码了。

![图片17](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%8717.png)

导入时，选择覆盖导入代表相同下载地址的数据会覆盖，复原未使用的状态。放弃导入，指的检测到与库里数据相同的数据跳过，不处理。

**注意：**

​ **本方案下，用户需要事先在APP Stroe下载好iTunes Store。用户初次使用，不会操作，会浪费很多兑换码（就是从我们这拿了兑换码链接，却没有安装软件，兑换码不算失效，但数据库里已经标为失效，用过了），需提前做好安装操作培训。**

​ **可以让客户去查下ABM账户下哪些兑换码还是有效状态，通过这个页面，导入，将浪费的兑换码更新为有效状态，继续用。**

### 三、jar包和静态资源部署

#### 1、上传

将“link-appstore-Install.zip”上传到服务器目录下，解压缩，进入目录；

```
unzip link-appstore-Install.zip
cd link-appstore-Install
cd link-appstore
```

#### 2、修改配置

##### 1) bootstrap.yml

可以看到这几个文件：

![图片18](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%8718.png)

```
vi bootstrap.yml
```

![图片19](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%8719.png)

修改服务器所处环境（dev/test/prod），以及修改nacos所在的ip、端口号。

##### 2)nacos

文件夹中，“请将这段配置复制到nacos里.txt”里的内容就是nacos里需要添加的配置内容。

![图片20](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%8720.png)

**修改里面的安卓下载地址androidUrl。**

**修改数据库账号、密码和url：username、password、jdbc-url。**

登录nacos，添加新配置。

![图片21](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%8721.png)

![图片22](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%8722.png)

将修改后的配置复制进“配置内容”。

Data ID:根据开发、测试、生产环境，分别填：

```
link-appstore-dev.yml
link-appstore-test.yml
link-appstore-prod.yml
```

点发布，完成nacos配置。

##### 3）nginx

修改nginx配置文件

```
cd /usr/local/openresty/nginx/conf/
vi nginx.conf
#在nginx.conf里，添加下面的配置
server {
                listen 7000;
                location /linkappstore/ {
                    proxy_pass http://127.0.0.1:10060/;
                }
        }
```

#### 3、启动jar包

回到服务器文件夹下，输入：

```
sh deploy.sh start 
```

实现启动jar包。

另：sh deploy.sh restart对应重启，sh deploy.sh stop对应停止jar包。

这台服务器的域名拼上/linkappstore/linkappstore/download，就是下载页面访问地址了。

如：这台服务器域名为pmmdev-interface.wilmar.cn，下载页面访问地址为：

[https://pmm.wilmar.cn/linkappstore/linkappstore/download](https://pmm.wilmar.cn/linkappstore/linkappstore/download)

**访问前需先下载好iTunes Store**

![图片23](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%8723.png)

#### 4、自定义下载页面

##### 1）图片

文件夹下 static/images文件夹下放置的是页面图片。

如果想要替换，将新图片命名成一样的直接替换，重启jar包即可替换。

![图片24](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%8724.png)

##### 2）页面标题

文件夹下 templates/文件夹下放置的是下载页面html。

如果想要替换页面标题（现在的是“益海嘉里”），修改下面这个地方即可：

```
cd templates
vi downloadpro.html
```

![图片25](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%8725.png)

##### 3）页面字段及链接

打开nacos修改配置，如下图对应关系：

![图片26](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%8726.png)

上图的，androidName、androidDesc、iosName、iosDesc分别对应安卓、ios的版本和版本描述。androidUrl是安卓下载地址。

另，iosUrlSuffix不用修改，是兑换码获取路径。

ios下载链接是自动拼的。如果域名特殊，ios下载按钮点击报错，可以修改iosUrl，自己填写完整的获取兑换码的访问链接。

openTest设置为on可打开测试接口。

### 组件包下载（百度网盘，也可到SVN获取）

ABM分发-链接：[https://pan.baidu.com/s/1SciiUL7cS18Q8ssIFmfb6Q](https://pan.baidu.com/s/1SciiUL7cS18Q8ssIFmfb6Q)  
提取码：g4bs  
直接下载：  
[COM-BC001-FC001 苹果端ABM分发](http://apaas.wxchina.com:8881/wp-content/uploads/COM-BC001-FC001-苹果端ABM分发.zip "COM-BC001-FC001 苹果端ABM分发")  
视频讲解：  
[周涛《苹果端ABM分发》](http://apaas.wxchina.com:8881/wp-content/uploads/周涛《苹果端ABM分发》.zip "周涛《苹果端ABM分发》")