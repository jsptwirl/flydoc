---
title: 基于apaas平台word&#038;excel设置的套打
date: 2021-07-23T15:49:16
---

# 基于apaas平台word&excel设置的套打 实现方案

使用过程中，若有问题请联系：行业组件部-王娟

### 一、适用场景

基于已有模板的，补充业务相关的数据；如 合同、订货单、发货单、对账单  
![图片1](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9F%BA%E4%BA%8Eapaas%E5%B9%B3%E5%8F%B0wordexcel%E8%AE%BE%E7%BD%AE%E7%9A%84%E5%A5%97%E6%89%93-%E5%9B%BE%E7%89%871.png)

### 二、前置条件

使用套打组件的前提条件是必须按照《模板输出组件部署手册》中指明的部署步骤部署完毕，并做相关参数配置之后才能使用，适用于Saas模式，专属云模式和独立部署模式。

### 三、业务逻辑

![图片2](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9F%BA%E4%BA%8Eapaas%E5%B9%B3%E5%8F%B0wordexcel%E8%AE%BE%E7%BD%AE%E7%9A%84%E5%A5%97%E6%89%93-%E5%9B%BE%E7%89%872.png)

#### 1、安装组件

此步骤一般由开发人员完成，请根据《模板输出组件部署手册》文档部署组件并验证组件的完整性。同时需要注意组件的升级，建议升级到最新的组件版本，以便获得更多的功能和更好的体验。

#### 2、确认打印（输出）的实体或者数据

项目的实施人员与客户的关键用户讨论需求，确认需要套打输出的实体或者数据，以及用户的操作位置（按钮）等。

#### 3、确定套打关键字

因为一种数据（实体）可能可以按多种模板数据，组件默认查找模板的规则是套打关键字，所以配置人员需要制定套打关键字，以便让数据和模板关联起来。实际应用过程中，建议使用实体表名作为模板关键字。

#### 4、开发套打数据的领域接口

这是配置/开发人员最重要的工作，开发一个领域接口，让套打微服务可以调用此接口获取需要套打的数据。这个接口的输入、输出及逻辑是必须符合套打微服务的需求，否则会发生错误。  
\*由于现有套打微服务的异常处理机制未完善，因此如果接口写的不规范，可能有意想不到的错误出现。

#### 5、编辑模板

目前模板支持word模板，Excel模板。模板一般由客户的管理员或者关键业务人员编辑和确认，模板的具体编辑规则在后续章节有详细的说明，务必按该说明编写模板。

#### 6、上传并配置模板

编写模板后，可以通过模板管理界面上传到服务上。用户使用套打按钮输出文档时，将会读取这些模板文件。

#### 7、配置按钮

开发人员或者实施人员需要根据客户的需求，在指定的位置上增加按钮或者其他人机互动的元素，以便弹出组件内置的“模板选择”界面，同时传入相关参数，以便套打微服务能够正确识别并处理用户的操作。

#### 8、用户使用套打

最终用户使用上述配置的按钮或者其他人机交互元素，实现Word套打（模板输出）。

### 四、用户使用套打过程

我们在套打管理页面上增加了一个“套打测试”的按钮，可以在这里试一下套打用户过程。  
![图片3](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9F%BA%E4%BA%8Eapaas%E5%B9%B3%E5%8F%B0wordexcel%E8%AE%BE%E7%BD%AE%E7%9A%84%E5%A5%97%E6%89%93-%E5%9B%BE%E7%89%873.png)

1.进入套打管理列表  
2.选择一行需要套打的数据  
3.点击工具栏上的“套打测试”按钮，系统会弹出“套打模板选择”界面，系统会自动筛选需要的模板，并显示。  
![图片4](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9F%BA%E4%BA%8Eapaas%E5%B9%B3%E5%8F%B0wordexcel%E8%AE%BE%E7%BD%AE%E7%9A%84%E5%A5%97%E6%89%93-%E5%9B%BE%E7%89%874.png)  
4.选择“模板名称”、“打开方式”和“输出格式”后，点击“输出”按钮即可。  
![图片5](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9F%BA%E4%BA%8Eapaas%E5%B9%B3%E5%8F%B0wordexcel%E8%AE%BE%E7%BD%AE%E7%9A%84%E5%A5%97%E6%89%93-%E5%9B%BE%E7%89%875.png)

5.完成后，在“输出结果”中就会有生成的文件，用户点击此文件即可下载。

\*目前“打开方式”只支持“下载”，“输出格式”只支持“Word”，未来会开放更多的功能。

### 五、模板管理

模板管理一般来说都是客户的关键业务人员、IT人员或者我方的实施人员负责维护。  
模板管理的功能在不同项目上可能根据项目的需要，挂接到不同的菜单目录下，在三纤开发环境下，是挂在【客户反馈信息】下的。  
![图片6](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9F%BA%E4%BA%8Eapaas%E5%B9%B3%E5%8F%B0wordexcel%E8%AE%BE%E7%BD%AE%E7%9A%84%E5%A5%97%E6%89%93-%E5%9B%BE%E7%89%876.png)

在这个界面上可以新增，修改对应的模板信息（不是编辑模板本身）。模板的信息如下：（目前不支持删除等其他操作）  
![图片7](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9F%BA%E4%BA%8Eapaas%E5%B9%B3%E5%8F%B0wordexcel%E8%AE%BE%E7%BD%AE%E7%9A%84%E5%A5%97%E6%89%93-%E5%9B%BE%E7%89%877.png)

这里需要关注的是“接口领域”和“接口编码”这两个字段，分别是领域模型中的modelcode和modellogiccode两个字段，详见下图：  
![图片8](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9F%BA%E4%BA%8Eapaas%E5%B9%B3%E5%8F%B0wordexcel%E8%AE%BE%E7%BD%AE%E7%9A%84%E5%A5%97%E6%89%93-%E5%9B%BE%E7%89%878.png)

### 六、配置套打按钮

用户操作需要按钮或者其他人机交互元素，在组件中包含了一个样例，就是模板管理列表中的“测试套打”按钮。  
![图片9](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9F%BA%E4%BA%8Eapaas%E5%B9%B3%E5%8F%B0wordexcel%E8%AE%BE%E7%BD%AE%E7%9A%84%E5%A5%97%E6%89%93-%E5%9B%BE%E7%89%879.png)

1、新建表单事件，事件类型是“链接”  
![图片10](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9F%BA%E4%BA%8Eapaas%E5%B9%B3%E5%8F%B0wordexcel%E8%AE%BE%E7%BD%AE%E7%9A%84%E5%A5%97%E6%89%93-%E5%9B%BE%E7%89%8710.png)

2、配置链接的参数如下  
![图片11](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9F%BA%E4%BA%8Eapaas%E5%B9%B3%E5%8F%B0wordexcel%E8%AE%BE%E7%BD%AE%E7%9A%84%E5%A5%97%E6%89%93-%E5%9B%BE%E7%89%8711.png)

3、其中需要处理传入参数  
![图片12](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9F%BA%E4%BA%8Eapaas%E5%B9%B3%E5%8F%B0wordexcel%E8%AE%BE%E7%BD%AE%E7%9A%84%E5%A5%97%E6%89%93-%E5%9B%BE%E7%89%8712.png)  
其中关键的是groupkey，大部分情况下都是写死（因为每个界面呈现的应该是同一种数据，所以groupkey大部分情况是固定的）  
recid也是必须传入的，表示数据的关键字。  
4、最后按钮绑定该事件即可

### 七、开发套打数据接口

这一步骤对于开发来说是最难的，这个接口也是最难调试的。微服务会通过套打模板配置读取接口信息，并调用接口。接口的输入参数和输出结构都必须符合微服务的要求，否则都会发生不知名的错误。  
套打组件部署后，会有一个套打接口的事例，详见【业务领域】-【CRM-套打】-【套打管理-实施】-【测试用的套打数据源】中可以查看具体的样例。  
![图片13](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9F%BA%E4%BA%8Eapaas%E5%B9%B3%E5%8F%B0wordexcel%E8%AE%BE%E7%BD%AE%E7%9A%84%E5%A5%97%E6%89%93-%E5%9B%BE%E7%89%8713.png)

#### 1、接口的入参

![图片14](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9F%BA%E4%BA%8Eapaas%E5%B9%B3%E5%8F%B0wordexcel%E8%AE%BE%E7%BD%AE%E7%9A%84%E5%A5%97%E6%89%93-%E5%9B%BE%E7%89%8714.png)

```
参数必须是
{
“printdataparam”:{
    “templateid”:”xxxx”,
“recid”:”xxxxx”,
“doctype”:”d”
}
}
其中templateid就是选择对应套打模板的主键Id，recid就是要套打的数据的主键，doctype指定输出的文件格式，d表示Word，e表示Excel，p表示PDF。必须是这种结构，否则无法获取数据。
```

#### 2、输出的结构

Word版：  
![图片15](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9F%BA%E4%BA%8Eapaas%E5%B9%B3%E5%8F%B0wordexcel%E8%AE%BE%E7%BD%AE%E7%9A%84%E5%A5%97%E6%89%93-%E5%9B%BE%E7%89%8715.png)

Excel版：  
![图片16](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9F%BA%E4%BA%8Eapaas%E5%B9%B3%E5%8F%B0wordexcel%E8%AE%BE%E7%BD%AE%E7%9A%84%E5%A5%97%E6%89%93-%E5%9B%BE%E7%89%8716.png)  
aPaas平台的每一个领域接口都可以输出多个对象。因此此接口也可以输出多个对象。如果是Word套打模板，其中htmlfields这个数组是必须的。  
htmlfields数组的作用是标记哪些字段是富文本字段（也即html字段）  
每一行的htmlfields包含两个字段mainfieldname和subfieldname。其中mainfieldname必须，表示主表（表头）字段。如果subfieldname非空，则表示明细表中某个字段为富文本字段。  
例如 :mainfieldname :’detail’, ’sbufieldname’: ’productcode’，意思就是明细表中每一个行的productcode字段都是富文本字段。  
除了htmlfields数组外，其他一级属性包含两种类型的数据。  
如果是字典类型，则认为是表头数据（主表数据），建议不要存在多个字典类型的数据，否则后面的字典与前面的字典的key重复，就会有错误 。  
如果是数组类型，则表示明细表的数据。

### 八、模板编写

详见例子  
word版  
![图片17](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9F%BA%E4%BA%8Eapaas%E5%B9%B3%E5%8F%B0wordexcel%E8%AE%BE%E7%BD%AE%E7%9A%84%E5%A5%97%E6%89%93-%E5%9B%BE%E7%89%8717.png)  
Excel版  
![图片18](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9F%BA%E4%BA%8Eapaas%E5%B9%B3%E5%8F%B0wordexcel%E8%AE%BE%E7%BD%AE%E7%9A%84%E5%A5%97%E6%89%93-%E5%9B%BE%E7%89%8718.png)

注意以下几项：  
1、关键字为{},所以占位符就是{xxxx}  
2、如果字段为富文本字段，则占位符变为{*xxx}就是字段名称前面多一个*  
3、明细字段按{main.sub}方式，明细数据必须包含在loop和endloop之间，否则报错。  
4、Loop的格式为loop({xxxx}),只能是普通字段，不能是富文本字段(废话，肯定是表格字段）  
5、Endloop格式为endloop()。  
6、Loop和endloop之间只能包含表头字段和与改loop字段相关表格字段，不能跨表格处理。  
7、不支持嵌套loop  
8、Word支持嵌套表格，也即表格里面还有表格。但嵌套表格不能有循环（loop-endloop）  
9、富文本字段定义涉及两个地方，一个是接口返回富文本字段，另外word模板也要加\*号，否则会报错。  
10、Excel不支持图片控件以及丰富文本

### 九、部署安装

#### 1、程序Jar包

由组件管理员下发最新版本，目前最新版本V1.0.3，假设包名为：printserver-1.0.3.jar

#### 2、微服务定义

方法名：flycode调用时标记  
服务名：[http://127.0.0.1:28083](http://127.0.0.1:28083) 端口支持自定义，需要和部署的服务配置端口一样  
路径： /ltc/printserver/printdata 固定  
![图片19](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9F%BA%E4%BA%8Eapaas%E5%B9%B3%E5%8F%B0wordexcel%E8%AE%BE%E7%BD%AE%E7%9A%84%E5%A5%97%E6%89%93-%E5%9B%BE%E7%89%8719.png)

#### 3、配置文件

linux命令：vim printserver-1.0.3.jar，找到application.properties文件修改参数配置  
![图片20](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9F%BA%E4%BA%8Eapaas%E5%B9%B3%E5%8F%B0wordexcel%E8%AE%BE%E7%BD%AE%E7%9A%84%E5%A5%97%E6%89%93-%E5%9B%BE%E7%89%8720.png)

#### 4、服务启动脚本

见文档“printserver.sh”  
注意：  
1.Jar包与服务启动脚本放在同一部署目录下  
2.修改服务启动脚本里的jar包名，需要保持跟Jar包名称一致  
3.修改服务启动脚本的权限：chmod +x printserver.sh

#### 5、运维日志

见当前部署目录下的logs目录文件

### 组件包下载（百度网盘，也可到SVN获取）

基于apaas平台word&excel设置的套打-链接:[https://pan.baidu.com/s/1vWlow0d4iuaL3RGIZcsdVA](https://pan.baidu.com/s/1vWlow0d4iuaL3RGIZcsdVA)  
提取码：jh45

视频讲解：[《基于apaas平台word&excel设置的套打》](http://apaas.wxchina.com:8881/wp-content/uploads/黄冰纯《基于apaas平台wordexcel设置的套打》.wmv "黄冰纯《基于apaas平台word&excel设置的套打》")