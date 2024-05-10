---
title: AI离线识别
date: 2021-07-19T17:46:12
---

# AI离线识别 实现方案

使用过程中，若有问题请联系：行业组件部-王娟

### 一、适用场景

有涉及到AI拍照的项目几乎都适用。当拜访门店在负一楼等网络较差的地段，业务员进行AI拍照可能就会无法立即进行识别，这时就需要AI离线识别了。  
AI离线识别，其实应该说是AI延迟识别，网络不好时，图片会先保存到本地，当网络好时，拍照记录会通过离线队列生成到数据库，然后我们就需要找到未识别的记录，然后通过后台调度去调用AI对应的识别结果，以得到对应的结果。

### 二、基础知识

#### 1、常见的识别功能

•翻拍检测（注：对着照片拍就是翻拍的一种）  
•产品（主产品、竞品）SKU识别  
•拼接（多张图片拼接一张）

#### 2、识别流程

（假设上面三种场景都需要）

```
翻拍+SKU识别
 •拍照后，先进行翻拍检测：
   –翻拍：提醒照片翻拍，是否保留？
     •不保留：删除照片（重新拍照）
     •保留：保留照片，进行SKU
   –非翻拍，进行SKU识别
拼接+翻拍+SKU识别
 •拼接拍照
   –检测翻拍
     •翻拍：提醒照片翻拍，是否保留？
         –不保留：删除照片（重新拍照）
         –保留：保留照片，进行SKU识别
    •非翻拍，拼接照片
         –拼接失败
         –拼接成功
           •进行SKU识别
```

#### 3、非正常情况

弱网或者无网的情况，可能会出现问题。会导致图片无SKU信息，点击图片时，可能会点不开，提示“图片正在识别，请稍候再试”；或者点开后没有具体的SKU信息。

##### 3.1 图片上传失败

单拍会提醒：“图片上传失败，是否重试（不重试则离线提交）”，下面是取消和确定按钮。  
![图片1](http://apaas.wxchina.com:8881/wp-content/uploads/AI%E7%A6%BB%E7%BA%BF%E8%AF%86%E5%88%AB-%E5%9B%BE%E7%89%871.png)  
拼接会提醒：“获取拼接图片失败，请重试（不重试则离线提交）”，下面是取消和确定按钮。  
![图片2](http://apaas.wxchina.com:8881/wp-content/uploads/AI%E7%A6%BB%E7%BA%BF%E8%AF%86%E5%88%AB-%E5%9B%BE%E7%89%872.png)  
如果中途失败的话，也会提示类似信息：“XXX，是否重试（不重试则离线提交）”，下面是取消和确定按钮。  
•确定：（使用者自认为网络好）尝试重新上传  
•取消：离线提交

##### 3.2 数据返回不及时

数据库里面存的AI图片是json格式，而其中的一个重要的属性是detecResult，里面存放的是sku数据，识别后正常情况下应该是要有的。  
用AI拍照控件拍照后，进行AI识别的流程（个人理解，有网时）：  
•a. 将图片上传到OSS云空间，  
•b. AI服务器对图片进行操作（拼接、翻拍检测、sku识别），  
•c. 返回对应的结果到图片的json中的对应的属性中。  
（这些内容可能不是很明显，但是还是可以从控件中看出现，图片框最下面会显示一些标志，比如：正在拼接、拼接完成正在识别、识别完成等。）  
但是当网络不好时，数据的传递可能会出现问题，比如b步骤后，没有及时将返回结果写到对应的json属性中，它就会一直显示为识别。这是就需要后台进行处理了（AI离线识别）。  
![图片3](http://apaas.wxchina.com:8881/wp-content/uploads/AI%E7%A6%BB%E7%BA%BF%E8%AF%86%E5%88%AB-%E5%9B%BE%E7%89%873.png)  
注意：虽然很多时候我们都会将AI拍照控件设置为必填，但是只要是拍了照，它即认为是已经填了内容的，而不管关键的json的属性是否有值。

### 三、AI项目开发流程

#### 1、明确需求，设计数据库表结构

注意：需要查看config表里面是否有AIconfig记录，即对于的AI 的配置信息，比如这个项目的AI数据库的信息（账号、密码、租户名等）。  
这个一般会有，如果没有的话，让AI相关的同事帮忙配置一下。

##### 图片类型

在IDE里面新建实体，直接使用图片类型来存储图片，其实数据库里面使用的是 varchar ，没有进行长度限制，因此最大长度是1G（详见：[https://www.postgresql.org/docs/13/datatype-character.html](https://www.postgresql.org/docs/13/datatype-character.html)）  
即10485760个字符。（这个长度应该够了吧？！加入1张照片内容是1万字符，那么可以拍1000张，然而你真的需要拍这么多照片吗？）  
![图片4](http://apaas.wxchina.com:8881/wp-content/uploads/AI%E7%A6%BB%E7%BA%BF%E8%AF%86%E5%88%AB-%E5%9B%BE%E7%89%874.png)

![图片5](http://apaas.wxchina.com:8881/wp-content/uploads/AI%E7%A6%BB%E7%BA%BF%E8%AF%86%E5%88%AB-%E5%9B%BE%E7%89%875.png)

#### 2、配置AI控件

•选择哪种AI控件：普通aiphoto？拼接aisplicephoto？  
•配置一些关键的属性（开启翻拍校验、SKU识别等

#### 3、编写提交的离线脚本

保证没网的时候能够进行离线提交（先提交到队列中，等网络好的时候会自动提交）。

#### 4、编写离线识别调度

保证未识别完成or未识别的图片能够有sku数据。

### 四、AI相关表

是AI数据库通过数据同步对接过来的，数据可能有一定的延迟。  
如果涉及到识别后的一些业务处理的话，我们就必须保证实施数据库有对应的AI的数据（可能会因为各种原因没有对接过来），因此我们需要对一些表结构有一定了解（注：最后面的部分字段可能是好来新增的）。  
AI相关表的表名都以 ait 开头（当然不同可能也有一些定制化的表）。  
![图片6](http://apaas.wxchina.com:8881/wp-content/uploads/AI%E7%A6%BB%E7%BA%BF%E8%AF%86%E5%88%AB-%E5%9B%BE%E7%89%876.png)

#### ai\_task识别任务表

表结构说明：

|attnum|field|type|length|lengthvar|notnull|comment|
|---|---|---|---|---|---|---|
|1|platcreatetime|timestamp|8|0|f|平台固定字段，记录创建时间|
|2|platupdatetime|timestamp|8|0|f|平台固定字段，记录修改时间|
|3|platcreateop|int8|8|\-1|f|平台固定字段，创建人id|
|4|platupdateop|int8|8|\-1|f|平台固定字段，修改人id|
|5|platstatus|int4|4|\-1|f|平台固定字段，记录状态 1. 正常 2. 逻辑删除 3. 异常数据|
|6|task\_id|int8|8|\-1|t|任务Id|
|7|tenant\_id|int8|8|\-1|f|租户Id|
|8|original\_imgurl|varchar|\-1|\-1|f|请求信息中的图片URL|
|9|handle\_imgurl|varchar|\-1|\-1|f|处理后图片的新URL|
|10|create\_time|timestamp|8|0|f|创建时间|
|11|update\_time|timestamp|8|0|f|更新时间|
|12|handled\_status|int8|8|\-1|f|10010代表未处理，10020代表已经发送到队列，10030代表以及处理成功，10040代表处理失败|
|13|biz\_from|varchar|\-1|204|f|业务来源|
|14|biz\_type|int4|4|\-1|f|1待定， 2待定，3货架 ，4冰柜 ，5水堆|
|15|request\_mode|int4|4|\-1|f|1同步 2异步|
|16|parameters|varchar|\-1|204|f|扩展字段|
|17|display\_agreement|varchar|\-1|204|f|陈列协议|
|18|batch\_id|varchar|\-1|204|f|batch\_id|
|19|identity\_id|varchar|\-1|204|f|identity\_id|
|20|store\_info|varchar|\-1|\-1|f|终端信息|
|21|if\_deal|int4|4|\-1|f|
|22|task\_type|varchar|\-1|204|f|
|23|expire\_time|timestamp|8|\-1|f|

查询数据：  
![图片7](http://apaas.wxchina.com:8881/wp-content/uploads/AI%E7%A6%BB%E7%BA%BF%E8%AF%86%E5%88%AB-%E5%9B%BE%E7%89%877.png)

#### aitanalysis\_data识别结果表

表结构说明：

|attnum|field|type|length|lengthvar|notnull|comment|
|---|---|---|---|---|---|---|
|1|platcreatetime|timestamp|8|0|f|平台固定字段，记录创建时间|
|2|platupdatetime|timestamp|8|0|f|平台固定字段，记录修改时间|
|3|platcreateop|int8|8|\-1|f|平台固定字段，创建人id|
|4|platupdateop|int8|8|\-1|f|平台固定字段，修改人id|
|5|platstatus|int4|4|\-1|f|平台固定字段，记录状态 1. 正常 2. 逻辑删除 3. 异常数据|
|6|data\_id|int8|8|\-1|t|主键|
|7|original\_data|varchar|\-1|\-1|f|原始数据|
|8|vector\_data|varchar|\-1|\-1|f|向量数据|
|9|hierarchy\_data|varchar|\-1|\-1|f|分层数据|
|10|result\_data|varchar|\-1|\-1|f|结果数据|
|11|extra\_data|varchar|\-1|\-1|f|扩展字段|
|12|task\_id|int8|8|\-1|f|任务id|
|13|create\_time|timestamp|8|0|f|创建时间|
|14|tenant\_id|int8|8|\-1|f|租户id|

查询数据：  
![图片8](http://apaas.wxchina.com:8881/wp-content/uploads/AI%E7%A6%BB%E7%BA%BF%E8%AF%86%E5%88%AB-%E5%9B%BE%E7%89%878.png)

### 五、AI拍照控件及照片属性说明

有两个控件：aiphoto、aisplicephoto。

#### 1、aiphoto普通AI控件

aiphoto控件实现手机端拍摄照片并且进行照片sku识别功能  
详见：aiphoto普通AI控件

##### 功能

每个拍照框只能拍一张照片。  
翻拍+sku识别

##### 常用属性介绍

•maxnumber 可保存拍照控件最大组数，默认为1 可拍一组。  
•source 照片来源

|值|说明|
|---|---|
|0|默认值，从相机获取|
|1|从相册获取|
|2|从相册获取|

•detecttype 识别类型，需配置该字段才能使用AI相机进行拍照，否则只会调用普通相机。一般使用1。

|值|说明|
|---|---|
|0|不开启SKU识别|
|1|货架SKU识别|
|2|冰柜SKU识别|
|3|水堆SKU识别|

•fakedetect 是否开启翻拍检测

|值|说明|
|---|---|
|0|默认项， 关闭翻拍检测|
|1|开启翻拍检测|

•htmlopentype 识别结果详情页

|值|说明|
|---|---|
|1|IDE配置页面，需手动进行页面定制，否则不会进行跳转。IDE配置页面参数信息请参考智慧100V5.1开发环境|
|2|默认值，AI-SDK内置页面 ，不支持定制，页面样式请参考景田|

•pricedetect 价签识别功能(仅支持智慧100包)

|值|说明|
|---|---|
|0|默认值，关闭控件支持价签识别功能|
|1|开启控件支持价签识别功能|

#### 2、aisplicephoto拼接控件

aisplicephoto可以用于获取用户照片的控件，包括一组单张拍照和拼接拍照可以拍照。  
详见：aiphoto普通AI控件

##### 功能

支持拼接，多张图片拼成一张。  
一个框可以单拍很多张（可配置）。  
同时也可以实现aiphoto的功能。  
拼接+翻拍+sku识别

##### 常用属性介绍

•onclickdetectdetail 点击跳转识别详情页  
•maxnumber 可保存拍照控件最大组数，默认为1可拍一组。  
•compression压缩程度

|取值|说明|图片大致大小|图片指导尺寸|
|---|---|---|---|
|0|最大压缩|10K左右|•|
|1|1级压缩（默认值）|30K左右|•|
|2|2级压缩|90K左右|•|
|3|3级压缩|200K左右|•|
|4|4级压缩|500K左右|•|
|5|5级压缩|1M左右|•|
|10|无压缩|原图|•|

•detecttype 1为产品识别，0为不产品识别，默认为产品识别  
•fakedetect 1为检测翻拍，0为不检测翻拍，默认为不检测翻拍  
•htmlopentype 1为IDE配置页面打开识别结果详情页，2为AISDK页面打开识别结果详情页，此项为1时需要手动配置跳转的页面，否则不会进行跳转。默认值为跳转AISDK页面

#### 3、图片属性介绍

对图片属性进行分析，以便了解它的结构（不同包可能会有些差异）。

```
photo普通照片
[
    [
        {
            "filePath": "/storage/emulated/0/Android/data/com.xuanwu.apaas.app/files/Pictures/com.xuanwu.apaas.app/TakePhoto/fd9c3296-26e7-46e2-8660-936268035d5f.jpg",
            "datetime": "1619670811116",
            "source": "fd9c3296-26e7-46e2-8660-936268035d5f.jpg",
            "watermark": ""
        }
    ]
]
datetime：时间戳
source：图片数据来源
aiphoto
[
    [
        {
            "filePath": "/storage/emulated/0/Android/data/com.xuanwu.apaas.app/files/Pictures/com.xuanwu.apaas.app/TakePhoto/fd9c3296-26e7-46e2-8660-936268035d5f.jpg",
            "datetime": "1619670811116",
            "source": "fd9c3296-26e7-46e2-8660-936268035d5f.jpg",
            "isFake": false,
            "identityId": "fd9c3296-26e7-46e2-8660-936268035d5f",
            "watermark": "",
            "detectResult": ""
        }
    ]
]
isFake：是否翻拍，true为翻拍，false为非翻拍。
identityId：图片id（必须，如果没有，请检查包是否正常）
detectResult：图片识别结果（可能会没有这个属性，也可能会为空；没有则需要后台离线调度补。）
aisplicephoto待处理
[
    [
        {
            "filePath": "/storage/emulated/0/Android/data/com.xuanwu.apaas.app/files/Pictures/com.xuanwu.apaas.app/TakePhoto/8bdca59b-2c77-4147-85ad-d6d585ef146d.jpg",
            "datetime": "1619663627856",
            "source": "8bdca59b-2c77-4147-85ad-d6d585ef146d.jpg",
            "isFake": false,
            "cameraType": 1,
            "mergeId": "",
            "identityId": "8bdca59b-2c77-4147-85ad-d6d585ef146d",
            "watermark": "",
            "detectResult": "",
            "priceResult": "",
            "offline": 1
        }
    ],
    [
        {
            "filePath": "/storage/emulated/0/Android/data/com.xuanwu.apaas.app/files/Pictures/com.xuanwu.apaas.app/TakePhoto/06f635d1-7746-47a4-bf7b-751b84e6afb2.jpg",
            "datetime": "1619663633033",
            "source": "06f635d1-7746-47a4-bf7b-751b84e6afb2.jpg",
            "isFake": false,
            "cameraType": 1,
            "mergeId": "",
            "identityId": "06f635d1-7746-47a4-bf7b-751b84e6afb2",
            "watermark": "",
            "detectResult": "",
            "priceResult": "",
            "offline": 1
        }
    ]
]
cameraType：区分是否拼接。1为拼接，0为非拼接
mergeId：拼接后的图片id（可能会没有这个属性，也可能会为空；没有则需要后台离线调度补。）
offline：用于区分在线和离线的标识。1为离线，0或者没有这个属性则为在线。（个人自定义的一个属性，如果后期与默认字段冲突，可以稍加修改。）
aisplicephoto成功
拼接，并且识别后的结果数据是这样的：（多个json和）
[
    [
        {
            "filePath": "/storage/emulated/0/Android/data/com.xuanwu.apaas.app/files/Pictures/com.xuanwu.apaas.app/TakePhoto/168487e0-eb9b-46a3-a217-2c08181f0f24.jpg",
            "datetime": 1619625600000,
            "source": "168487e0-eb9b-46a3-a217-2c08181f0f24.jpg",
            "isFake": false,
            "cameraType": 1,
            "identityId": "33c0b84abea74323bbd5e904ac3c892f",
            "httpUrl": "https://xtionai-hlhg.oss-cn-shenzhen.aliyuncs.com/33c/img/20210429/10071/33c0b84abea74323bbd5e904ac3c892f.jpg",
            "mergeId": "1387597508942893056",
            "detectResult": "因篇幅原因，省略识别结果内容数据",
            "priceResult": "",
            "offline": 1
        }
    ]
]
httpUrl：为拼接图片URL。（离线的话可能会没有这个字段，成功后需要反写这个字段）
detectResult：成功的话，这个字段一般都会比较长，这里省略。
aisplicephoto失败
[
    [
        {
            "filePath": "/storage/emulated/0/Android/data/com.xuanwu.apaas.app/files/Pictures/com.xuanwu.apaas.app/TakePhoto/8bdca59b-2c77-4147-85ad-d6d585ef146d.jpg",
            "datetime": "1619663627856",
            "source": "8bdca59b-2c77-4147-85ad-d6d585ef146d.jpg",
            "isFake": false,
            "cameraType": 1,
            "mergeId": "",
            "identityId": "8bdca59b-2c77-4147-85ad-d6d585ef146d",
            "watermark": "",
            "detectResult": "mergeFailure",
            "priceResult": "",
            "offline": 1
        }
    ],
    [
        {
            "filePath": "/storage/emulated/0/Android/data/com.xuanwu.apaas.app/files/Pictures/com.xuanwu.apaas.app/TakePhoto/06f635d1-7746-47a4-bf7b-751b84e6afb2.jpg",
            "datetime": "1619663633033",
            "source": "06f635d1-7746-47a4-bf7b-751b84e6afb2.jpg",
            "isFake": false,
            "cameraType": 1,
            "mergeId": "",
            "identityId": "06f635d1-7746-47a4-bf7b-751b84e6afb2",
            "watermark": "",
            "detectResult": "mergeFailure",
            "priceResult": "",
            "offline": 1
        }
    ]
]
detectResult：失败的话，这个字段的值是mergeFailure。
```

### 六、AI接口说明

#### 1、常用接口

1.登录接口：login  
2.翻拍识别接口：fakephoto  
3.获取已经sku识别完成的结果：findskuresult  
4.货架SKU同步识别接口：syncdetect  
5.拼接异步识别接口：mergeimage  
6.查询拼接识别结果接口：getmergeinfo

#### 2、调用顺序说明

说明：  
1.识别前需检测是否已经有识别接口，因为调用识别接口是按照调用次数付费的，而识别结果是存在AI对应数据库里面的（调用无需付费）。  
2.识别拼接有两个步骤：（1）将多张拼接成一张图片（2）识别拼接后的图片  
3.mergeimage：相当于拼接+自动识别，注意每次调用拼接接口都会返回不同的结果（即使入参一样）。  
我们的调用顺序和前端识别的流程类似（上面的顺序即为调用顺序）。假如上面的功能都有的话，顺序是这样的：  
翻拍+SKU识别：登录-->检测翻拍-->查询图片是否已识别过-->如果没有，进行识别。  
翻拍+拼接+SKU识别：登录-->检测翻拍-->是否拼接过-->如果已经拼接，查询是否已经识别（如果没有，进行识别）；如果未拼接，则进行拼接。

#### 3、测试说明

以好来化工实施环境为例进行演示。统一说明：  
•测试工具：Postman  
•请求方式：POST  
•Content-Type: application/json

#### 4、状态码说明

识别、拼接等需要用到状态（handledStatus，常用于拼接和获取拼接识别结果接口中，因为这两个操作比较耗时，可能需要等待10010，10020；而且容易出现错误10040，10050 ），这里统一说明下：  
10010，10020 待处理  
10030 完成  
10040，10050 失败

#### 5、AI后台

不管是手机端在线识别还是调度调用接口识别，这里都能看到相关数据。  
![图片9](http://apaas.wxchina.com:8881/wp-content/uploads/AI%E7%A6%BB%E7%BA%BF%E8%AF%86%E5%88%AB-%E5%9B%BE%E7%89%879.png)  
![图片10](http://apaas.wxchina.com:8881/wp-content/uploads/AI%E7%A6%BB%E7%BA%BF%E8%AF%86%E5%88%AB-%E5%9B%BE%E7%89%8710.png)  
获取AI后台登录账号密码的两种方式：  
1.直接找AI同事问。  
2.写代码获取

```
var account = FLY.call("globalconfigmgr.getGlobalConfigByKey", {
    pl_globalconfig: {
        key: "AIAccount"
    }
}).confjson;
FLY.log(account);
输出：
{
    url=https://ai.xtion.net,
    username=10071,
    password = 123456,
    photoprefix = https://xtionai-storage-test.oss-cn-shenzhen.aliyuncs.com,
    accessKey=0929e0ccc7e0458780eba375582ab8b3, 
    account=10071
}
对应值说明：
{
    url=后台访问地址,
    username=账号,
    password = 密码,
    photoprefix = AI拼接图片域名,
    accessKey=0929e0ccc7e0458780eba375582ab8b3, 
    account=AI数据库
}
```

#### 6、图片URL问题

因为接口会涉及到图片URL问题，因此你需要对URL的构成有一定的了解。  
（如果运气好的话，在web端的URL没有进行特殊处理，F12可以看到对应的图片URL）

```
示例图片json：
[
    [
        {
            "filePath": "",
            "datetime": "1619670811116",
            "source": "fd9c3296-26e7-46e2-8660-936268035d5f.jpg",
            "isFake": false,
            "cameraType": 0,
            "identityId": "fd9c3296-26e7-46e2-8660-936268035d5f",
            "watermark": "",
            "detectResult": "",
            "priceResult": ""
        }
    ]
]
```

图片URL应该是这样的：  
[https://apaas-storage-test.oss-cn-beijing.aliyuncs.com/fd9/img/20210429/1011038/fd9c3296-26e7-46e2-8660-936268035d5f.jpg](https://apaas-storage-test.oss-cn-beijing.aliyuncs.com/fd9/img/20210429/1011038/fd9c3296-26e7-46e2-8660-936268035d5f.jpg)  
拼接规则  
[https://域名/identityId前3个字符/img/时间戳datetime转日期/实施数据库名（租户名）/identityId.jpg](https://域名/identityId前3个字符/img/时间戳datetime转日期/实施数据库名（租户名）/identityId.jpg)

注意：  
1.一般实施环境和生产环境的域名是不一样的（资源存在阿里云不同的OSS对象存储的桶中），上线时要对应改一下（如果不知道可以问下搭建环境的运维同事）。  
2.AI拼接的照片的域名也是不一样的（identityId也是不一样的，中间不带-），比如实施环境是这个：  
xtionai-storage-test.oss-cn-shenzhen.aliyuncs.com，例如是这样的：  
[https://xtionai-hlhg.oss-cn-shenzhen.aliyuncs.com/ad1/img/20210429/10071/ad17626f593c4f1e8ae63987314cabcb.jpg](https://xtionai-hlhg.oss-cn-shenzhen.aliyuncs.com/ad1/img/20210429/10071/ad17626f593c4f1e8ae63987314cabcb.jpg)

附：时间戳在线转换工具：[https://tool.lu/timestamp/](https://tool.lu/timestamp/)

#### 7、接口测试案例

```
1.登录接口
https://ai.xtion.net/api/ai/auth/login
入参来源：上面FLY.call获取的账号密码。
入参：
{
    "username": "10071",
    "password": "123456"
}
返回结果：
里面的token即为调用其他接口的请求头。
（tenantId是AI数据库租户名）
出参：
{
    "status": 1,
    "traceId": "ruuFZBU-RSCalt2BAq-QRQ",
    "data": {
        "tenantId": 10071,
        "tenantName": "黑人牙膏",
        "username": null,
        "token": "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjQ5NDAyNDEsIkxvZ2luVXNlciI6eyJ0b2tlbklkIjpudWxsLCJ0cmFjZUlkIjpudWxsLCJ1c2VyTmFtZSI6bnVsbCwidGVuYW50SWQiOjEwMDcxLCJ0ZW5hbnROYW1lIjoi6buR5Lq654mZ6IaPIiwiYWNjb3VudElkIjoxMDA3MSwiY2xpZW50VmVyc2lvbiI6bnVsbCwiY2xpZW50VHlwZUNvZGUiOiI0IiwidXNlck5hbWUxIjpudWxsLCJ1c2VyTmFtZTIiOm51bGwsInVzZXJOYW1lMyI6bnVsbCwidGFza1R5cGVzIjpbIlNIRUxGX0xBWUVSIiwiRlJFRVpFUl9MQVlFUiIsIldBVEVSSEVBUF9MQVlFUiIsIlNIRUxGX0xBWUVSIiwiRlJFRVpFUl9MQVlFUiIsIldBVEVSSEVBUF9MQVlFUiIsIklNQUdFX01FUkdFIiwiSU1BR0VfTUVSR0VfUFJFRElDVElPTiIsIkJMVVJfREVURUNUIiwiRkFLRV9QSE9UTyIsIkZBS0VfUEhPVE8iLCJGQUtFX1BIT1RPIl19fQ.oGcdTWGFiti6BorZwQuPAbEnjH-IU1pRYmipZb2P9lk",
        "tokenExpires": "1624940241771",
        "refreshToken": "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjUwMjY2NDEsIkxvZ2luVXNlciI6eyJ0b2tlbklkIjpudWxsLCJ0cmFjZUlkIjpudWxsLCJ1c2VyTmFtZSI6bnVsbCwidGVuYW50SWQiOjEwMDcxLCJ0ZW5hbnROYW1lIjoi6buR5Lq654mZ6IaPIiwiYWNjb3VudElkIjoxMDA3MSwiY2xpZW50VmVyc2lvbiI6bnVsbCwiY2xpZW50VHlwZUNvZGUiOiI0IiwidXNlck5hbWUxIjpudWxsLCJ1c2VyTmFtZTIiOm51bGwsInVzZXJOYW1lMyI6bnVsbCwidGFza1R5cGVzIjpbIlNIRUxGX0xBWUVSIiwiRlJFRVpFUl9MQVlFUiIsIldBVEVSSEVBUF9MQVlFUiIsIlNIRUxGX0xBWUVSIiwiRlJFRVpFUl9MQVlFUiIsIldBVEVSSEVBUF9MQVlFUiIsIklNQUdFX01FUkdFIiwiSU1BR0VfTUVSR0VfUFJFRElDVElPTiIsIkJMVVJfREVURUNUIiwiRkFLRV9QSE9UTyIsIkZBS0VfUEhPVE8iLCJGQUtFX1BIT1RPIl19fQ.MZCfq2_KpiKucWnf18VtPmVkhybt7lT0oqLJ61HGzmY",
        "cloudserv": {
            "storage": {
                "provider": "aliyun",
                "storageendpoint": "oss-cn-shenzhen.aliyuncs.com",
                "storagebucket": "xtionai-hlhg",
                "storageurl": "xtionai-hlhg.oss-cn-shenzhen.aliyuncs.com"
            }
        }
    }
}
2.翻拍识别接口
https://ai.xtion.net/api/ai/imagequality/fakephoto
入参来源：按照规则拼接图片。
[
    [
        {
            "filePath": "",
            "datetime": "1619670811116",
            "source": "fd9c3296-26e7-46e2-8660-936268035d5f.jpg",
            "isFake": false,
            "cameraType": 0,
            "identityId": "fd9c3296-26e7-46e2-8660-936268035d5f",
            "watermark": "",
            "detectResult": "",
            "priceResult": ""
        }
    ]
]
入参：
{
    "url": "https://apaas-storage-test.oss-cn-beijing.aliyuncs.com/fd9/img/20210429/1011038/fd9c3296-26e7-46e2-8660-936268035d5f.jpg"
}
出参：
{
    "status": 1,
    "traceId": "I0OtMgfjTg2yKVtY9CoHvw",
    "data": true
}
分析：data为true为翻拍，false为非翻拍。
调度操作：将data值反写到图片的 isFake 属性中。
3.获取已经sku识别完成的结果
https://ai.xtion.net/api/ai/search/fetch/findskuresult
入参：
{
    "batchId": "",
    "identityId": "fd9c3296-26e7-46e2-8660-936268035d5f"
}
出参：
{
    "status": 1,
    "traceId": "jXRMu2A2TnmyOtFNotzY1A",
    "data": [
        {
            "batchId": null,
            "identityId": "fd9c3296-26e7-46e2-8660-936268035d5f",
            "originalImgurl": "https://apaas-storage-test.oss-cn-beijing.aliyuncs.com/fd9/img/20210429/1011038/fd9c3296-26e7-46e2-8660-936268035d5f.jpg",
            "handledStatus": 10030,
            "dataId": "1409389543953666048",
            "bizType": 3,
            "resultData": "{}"
        }
    ]
}
分析：data为返回结果，只有当转态值 handledStatus 为10030时，才是正常的，其中的resultData为识别结果。
调度操作：将 resultData 值反写到图片的 detectResult 属性中。
4.货架SKU同步识别接口
https://ai.xtion.net/api/ai/shelf/syncdetect
注：priceDetect为1时识别价签，好像是好来新功能，不保证其他项目可用。
入参：
{
    "imageUrl": "https://apaas-storage-test.oss-cn-beijing.aliyuncs.com/fd9/img/20210429/1011038/fd9c3296-26e7-46e2-8660-936268035d5f.jpg",
    "identityId": "fd9c3296-26e7-46e2-8660-936268035d5f",
    "priceDetect": "1"
}
出参：
省略了几个长值的数据是这样的（skuInfo、ownSkuInfos、layerOut）
{
    "status": 1,
    "traceId": "laIhsClbQiuwxg6lx9kLUg",
    "data": {
        "taskId": "1409389533040087040",
        "imageInfo": {
            "isVision": 0,
            "width": "900",
            "height": "1200",
            "distance": "0.68",
            "direction": 0
        },
        "layerNum": 4,
        "skuInfo": [],
        "ownSkuInfos": [],
        "ownSkuTypeNum": 11,
        "ownSkuNum": 21,
        "ownPurity": "75%",
        "plumpness": null,
        "isOwnFreezer": false,
        "shelfDistributionRate": "22%",
        "ownDisplayLayerNum": 3,
        "goldLocationDetection": true,
        "centralizedDetection": true,
        "notCentralizedLayer": null,
        "competeSkuInfos": [],
        "competeSkuTypeNum": 6,
        "competeSkuNum": 7,
        "otherSkuNum": 0,
        "allSkuNum": 28,
        "otherSkuInfos": [],
        "imageUrl": "https://xtionai-hlhg.oss-cn-shenzhen.aliyuncs.com/bac/img/20210628/10071/bace8faecffb4228a4507b133322491d.jpg",
        "layerOut": [],
        "bizType": 3
    }
}
分析：data为识别结果。
调度操作：将data值反写到图片的 detectResult 属性中。
5.拼接异步识别接口
https://ai.xtion.net/api/ai/merge/mergeimage
入参说明：需要拼接的一组照片的URL放到数组中，入参。
[
    [
        {
            "filePath": "/storage/emulated/0/Android/data/com.xuanwu.apaas.app/files/Pictures/com.xuanwu.apaas.app/TakePhoto/8bdca59b-2c77-4147-85ad-d6d585ef146d.jpg",
            "datetime": "1619663627856",
            "source": "8bdca59b-2c77-4147-85ad-d6d585ef146d.jpg",
            "isFake": false,
            "cameraType": 1,
            "identityId": "8bdca59b-2c77-4147-85ad-d6d585ef146d",
            "watermark": "",
            "priceResult": "",
            "mergeId": "",
            "offline": 1
        }
    ],
    [
        {
            "filePath": "/storage/emulated/0/Android/data/com.xuanwu.apaas.app/files/Pictures/com.xuanwu.apaas.app/TakePhoto/06f635d1-7746-47a4-bf7b-751b84e6afb2.jpg",
            "datetime": "1619663633033",
            "source": "06f635d1-7746-47a4-bf7b-751b84e6afb2.jpg",
            "isFake": false,
            "cameraType": 1,
            "identityId": "06f635d1-7746-47a4-bf7b-751b84e6afb2",
            "watermark": "",
            "priceResult": "",
            "mergeId": "",
            "offline": 1
        }
    ]
]
入参：
{
    "imageData": [
        {
            "url": "https://apaas-storage-test.oss-cn-beijing.aliyuncs.com/8bd/img/20210429/1011038/8bdca59b-2c77-4147-85ad-d6d585ef146d.jpg"
        },
        {
            "url": "https://apaas-storage-test.oss-cn-beijing.aliyuncs.com/06f/img/20210429/1011038/06f635d1-7746-47a4-bf7b-751b84e6afb2.jpg"
        }
    ],
    "priceDetect": 1
}
出参：
{
    "status": 1,
    "traceId": "jMATcpyvShqvDBUY74xVaw",
    "data": "1409395756049240064"
}
分析：data为非空说明拼接成功，返回的为拼接图片的mergeId。
调度操作：将 data 值反写到图片的 mergeId 属性中。
6.查询拼接识别结果接口
https://ai.xtion.net/api/ai/search/merge/getmergeinfo
入参：
{
    "mergeId": "1409395756049240064"
}
出参：
{
    "status": 1,
    "traceId": "QNHbvqrRRT2Mzyj9uJz-MQ",
    "data": {
        "mergeId": "1409395756049240064",
        "resultUrl": "https://xtionai-hlhg.oss-cn-shenzhen.aliyuncs.com/945/img/20210628/10071/94507f5ba23343c6921edeebfff5f7b2.jpg",
        "commitTime": "2021-06-28 14:18:28",
        "finishTime": "2021-06-28 14:18:51",
        "status": 10030,
        "tenantId": 10071,
        "mergeSkuData": {
            "status": 1,
            "traceId": null,
            "data": {}
        }
    }
}
分析：data为返回结果，只有当转态值 status 为10030时，才是正常的，其中的 mergeSkuData 为识别结果。
调度操作：将 mergeSkuData 值反写到图片的 detectResult 属性中。
```

### 七、AI离线调度

文件详见：Step-2：业务领域配置  
为每个记录表写一个离线调度，权责清晰，如果出现问题排查起来也比较容易。  
（当然一些通用的方法也可以写成全局函数，然后统一去调用就行了。）

#### 文件说明

1-提交-业务行为代码 ：3个拍照步骤的提交逻辑。  
2-调度-业务行为代码：3个步骤的离线识别的调度。  
3-调度-业务行为代码-纯flycode：1,2为可导入的，和2一样，这个纯flycode形式的。

#### 调度时间间隔

|拍照框数量，3个步骤，拍照框数量|项目|图片字段数量|
|---|---|---|
|拍照采集|12|
|促销活动|8|
|竞品采集|7|

#### 分析

先简单分析下，一条记录最多能产生多少照片。  
假设：以拍照采集为例，12个拍照框必填，并且每个拍照框的每组照片都没有识别完成（最坏的情况）。  
一条记录照片数量：单拍 x 拍照控件最大组数 x 拍照框 = 30x8x12 = 2880张，单次调2880次（识别）接口。  
一条记录照片数量：拼接的数量 x 拍照控件最大组数 x 拍照框 = 50x8x12 = 4800张，单次调98次（拼接）接口。  
一条记录有2880张照片，有点恐怖，调度应该会超时，调接口本来就比较慢，而且需要循环那么多次。  
当然这是最坏的情况，实际上12个拍照框只有2个是必填的，单拍或者拼接数量也比较少达到最大值的，12个框当拍到后面时，前面的一些已经在线识别完成了，不需要再调度处理了。

#### 结论

正常情况下，未识别完成的照片在100张左右，因此建议设置为毎3或5分钟一次，对于拼接或拼接识别这种需要等待的，这个时间段应该也已经处理完了，处理两次就能有结果，这样提交后10分钟左右应该就能有识别结果。

#### 文件查看顺序说明

1.拍照采集-AI离线识别-调度-简单：因为表的照片字段比较多，比较麻烦，这里先简单化：只处理一个表的一个字段。  
2.拍照采集-AI离线识别-调度：基于1，循环处理12个拍照框。  
3.拍照采集-AI离线识别-处理mergeFailure：这个一个补充的调度，因为拼接经常会出现问题，比如识别错误、卡队列等，可能就会导致很多照片被误判为 mergeFailure，因此等AI同事处理好问题后，就需要去处理一下这个错误数据。

#### 离线调度说明

这里只介绍编写步骤（流程），详情请看对应的程序。  
1.（login）获取token。  
2.查询最近没有识别结果的记录（我这里的查询逻辑设置的是查询1天内没有识别结果的记录，然后也可以设置为几个小时内的）。  
3.遍历照片字段，找到未识别记录。  
4.（fakephoto）调用翻拍接口，检测翻拍（注：好来这个项目没有开启这个功能，示例代码没有这个。）  
5.判断照片是否是拼接的  
–非拼接：先检测是有结果（findskuresult），没有结果就进行识别（syncdetect）。  
–拼接：先判断是否已经拼接，如果没有进行拼接（mergeimage），如果拼接了，获取识别结果（getmergeinfo）  
一些相关的其他业务逻辑（如果需要的话）。

### 八、字符太长引起的问题

AI识别结果字段通常都会比较大，而且照片识别到越多产品，信息量就越大，之前有看到有个拍照框有55万+字符（好来化工产品是黑人牙膏、牙刷……），这可能会引起一系列的问题。下面是我遇到过的一些问题，以及解决方法。

#### 1、前端入参到后端字符超长

##### 报错信息

报错信息为：入参校验失败，入参值超过了最大长度限制！最长为：10000字符  
![图片11](http://apaas.wxchina.com:8881/wp-content/uploads/AI%E7%A6%BB%E7%BA%BF%E8%AF%86%E5%88%AB-%E5%9B%BE%E7%89%8711.png)

##### 解决办法

找到对应的配置，把这个值设置的大一点就行了。具体值视情况而定（1张照片字符数\*照片张数）。  
登录项目对应的nacos后台配置网站，找到biz开头的属性，将对应的值设置的大一点（默认应该是 10000）。

#### 2.web端导出字符超长

##### 报错信息

单元格的长度超出32,767个字符。

##### 解决办法

该问题常见于AI识别的图片字段，我们需要将冗余字段属性置为空（其实图片导出工具能用到的字段就只有：datetime和source属性，也就是说其实其它都是冗余字段，特别是识别结果字段detectResult）。  
去除对象属性的两种方法：

```
1.delete obj.name; 主动删除不需要的属性。
2.obj.name = undefined; 平台会忽略值undefined的属性。
// 导出时，去除图片json的冗余字段
if(tpds!=null && tpds.length>0){
  for(var i = 0; i < tpds.length; i++){
    var pic = tpds[i].display_photo;
    //FLY.log("pic:"+pic);
    if(pic!=null && pic!=''){
      //FLY.log("pic不为空");
      pic = JSON.parse(pic);
      for(var j = 0; j < pic.length; j++){
        for(var k = 0; k < pic[j].length; k++){
          pic[j][k].filePath = '';
          pic[j][k].watermark = '';
          pic[j][k].detectResult = '';
          pic[j][k].filePath = undefined;
          pic[j][k].watermark = undefined;
          pic[j][k].detectResult = undefined;
          delete pic[j][k].isFake;
          delete pic[j][k].cameraType;
        }
      }
      tpds[i].display_photo = JSON.stringify(pic);
      //FLY.log("tpds[i].display_photo:"+tpds[i].display_photo);
     }
  }
}
```

#### 3、图片导出工具不能导出AI照片

##### 错误情况

在使用导出工具导出Excel中的图片时，发现AI拼接的照片不能成功导出。

##### 分析

其实我们可以想象的图片导出工具的逻辑：根据登录者的环境信息，利用图片datetime和source属性拼接图片URL，但是之前已经提到过了，拼接后的照片的URL和普通照片的域名是不同的，这样就导致它找不到对应图片了。  
从该工具的开发人员处了解到：该工具支持两种类型的图片json，  
•datetime和source信息数组  
•URL数组。  
因为我们可以统一使用URL数组来解决这个问题。

##### 解决办法

通过定义一个全局函数来处理这个导出的照片字段。  
可以处理单层数组和双重数组，通过httpUrl属性来判断是否是拼接照片（有就是拼接照片），然后拼接URL，返回对应数组。  
使用时注意下要替换前面这3个全局变量。

```
var ImageUtils = {

}

// 全局变量
var photoprefix = "http:\/\/apaas-storage-test.oss-cn-beijing.aliyuncs.com";
var photoprefix_ai = "http:\/\/xtionai-hlhg.oss-cn-shenzhen.aliyuncs.com";
var account = "1011038";

/*
 * 作用：解析图片字段，返回所包含的URL数组（字符串），常用于导出图片
 * param: field 图片字段（字符串），如: obj.tn_adulttoothpaste
 * return: URL数组（字符串），如: ["url1","url2"];如果字段为空，返回空数组 []
 * 例子：测试图片工具类
 */
ImageUtils.getOssUrl = function(field){
  var arr = [];
  if (field == '' || field == null || field == undefined) {
    //字段为空，返回空数组
    return [];
  }
  field = JSON.parse(field);
  for (var i = 0; i < field.length; i++) {
    // 双重数组
    if(field[0].length != undefined){
      for(var j = 0; j< field[i].length; j++){
        var httpUrl = field[i][j].httpUrl;
        if(httpUrl!=undefined && httpUrl!=null && httpUrl!=''){
           arr.push(httpUrl);
        }else{

        var datetime = field[i][j].datetime;
        var source = field[i][j].source;
        var url = photoprefix + '/' + source.substring(0, 3) + '/img/' + Date.parseDate(datetime).Format("yyyyMMdd") + '/' + account + '/' + source;
          arr.push(url);
        }
      }
    }else{// 单层数组
        var httpUrl = field[i].httpUrl;
        if(httpUrl!=undefined && httpUrl!=null && httpUrl!=''){
           arr.push(httpUrl);
        }else{
          var datetime = field[i].datetime;
          var source = field[i].source;
          var url = photoprefix + '/' + source.substring(0, 3) + '/img/' + Date.parseDate(datetime).Format("yyyyMMdd") + '/' + account + '/' + source;
          arr.push(url);
        }
    }
  }

  //FLY.log("arr:" + arr);
  //FLY.log("arr:" + JSON.stringify(arr));
  return JSON.stringify(arr);
};
返回形式（直接赋值给对应字段即可）：
["http://apaas-storage-test.oss-cn-beijing.aliyuncs.com/42c/img/20210322/1011038/42cc5935-4f79-4e1a-b035-8178ac23ece7.jpg","http://apaas-storage-test.oss-cn-beijing.aliyuncs.com/42c/img/20210322/1011038/42cc5935-4f79-4e1a-b035-8178ac23ece7.jpg"]
```

文件下载：  
[COM-BC011-FC001 AI离线识别](http://apaas.wxchina.com:8881/wp-content/uploads/COM-BC011-FC001-AI离线识别.zip "COM-BC011-FC001 AI离线识别")  
视频讲解：  
[颜升《AI离线识别》](http://apaas.wxchina.com:8881/wp-content/uploads/颜升-AI离线识别.wmv)