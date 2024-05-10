---
title: aiphoto
date: 2021-02-03T14:21:02
---

# aiphoto (智慧100 不再更新该控件，部分功能仅智慧100支持)

本文档将介绍如何在IDE上面配置aiphoto控件实现手机端拍摄照片并且进行照片sku识别功能

## 在IDE上找到 aiphoto 二开控件并且熟悉它的自定义属性

![image](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9B%BE%E7%89%871.png)

## 在IDE的表单内如何配置使用 aiphoto 控件

![image](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9B%BE%E7%89%872.png)  
![image](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9B%BE%E7%89%873.png)

## aiphoto 协议

```JSON
    {
        "type": "aiphoto",
        "code": "aiphoto-photo-4228395978799728",
        "eventlist": [
            {
                "trigger": "onload",
                "handler": "loadrule-one"
            },
            {
                "trigger": "jumpdetail",
                "handler": "1301446361031512158"
            }
        ],
        "name": "货架拍照",
        "jumpdetail": "1356516825390780512",
        "titlewidth": "110",
        "titleflex": "",
        "title": "端架拍照",
        "placeholder": "",
        "name": "",
        "maxnumber": "1",
        "source": "0",
        "watermark": "fly:return NOW.serviceTime().formatByTemplate() + ' ' + System.user().userinfoName",
        "watermarkposition": "bottom",
        "watermarkstyle": "clear",
        "hidden": "0",
        "readonly": "0",
        "required": "0",
        "fakedetect": "1",
        "detecttype": "1",//翻拍检测是否开启，0关闭，1开启，默认为0，
        "offlinedetect": "1",//开启离线识别，0关闭，1开启，默认为0
        "cameraobliquetype": "2",//斜拍检测灵敏度检测，等级为1-3，数字越大要求越严格，默认为2
        "nonblockingtips":"0",////非阻塞式用户提示,0或控为阻断式，1为非阻断式。默认为0。
        "aicompress":"0",////ai图片压缩等级系数，等级为0-2，默认为0，0为1200，大小500k以内；1为2800或原图，大小1.5M以内；2为原图，不压缩。
        "htmlopentype": "2",
        "pricedetect":"1"
    }
```

* maxnumber  
可保存拍照控件最大组数，默认为1 可拍一组。
* source  
  照片来源

|值|说明|
|---|---|
|0|默认值，从相机获取|
|1|从相册获取|
|2|从相机或者相册获取|

* watermark  
照片水印信息
* watermarkposition  
  指定水印显示位置

|值|说明|
|---|---|
|bottom|默认值，下方，左对齐，占据左边三分之二的区域|
|center|居中，左对齐，占据左边三分之二的区域|
|top|上方，左对齐，占据左边三分之二的区域|
|•|•|

* watermarkstyle  
  水印显示的样式

|值|说明|
|---|---|
|clear|默认值，直接覆盖在图片之上，白色，黑色阴影|
|darken|将使用dark blend模式，白色，黑色阴影|
|translucent|半透明，在clear的基础上添加60%的透明度|
|•|•|

> *字体大小目前为统一的算法：max(11, ceil(image.width/25))*

~~- watermarkcomposite ~~（⚠️已于智慧100V5.2废弃）  
水印合成方式

> *attached 模式下，watermarkposition 和 watermarkstyle 将不支持配置，使用其默认值来实现。*

* hidden  
  是否隐藏

|值|说明|
|---|---|
|0|默认值，隐藏拍照控件|
|1|显示拍照控件|

* readonly  
  可编辑状态

|值|说明|
|---|---|
|0|默认值，可编辑|
|1|不可编辑|

* required  
  是否必填

|值|说明|
|---|---|
|0|默认值，可选|
|1|必填|

* detecttype  
  识别类型，需配置该字段才能使用AI相机进行拍照，否则只会调用普通相机。

|值|说明|
|---|---|
|0|不开启SKU识别|
|1|货架SKU识别|
|2|冰柜SKU识别|
|3|水堆SKU识别|

* fakedetect  
  是否开启翻拍检测

|值|说明|
|---|---|
|0|默认项， 关闭翻拍检测|
|1|开启翻拍检测|

* htmlopentype  
  识别结果详情页

|值|说明|
|---|---|
|1|IDE配置页面，需手动进行页面定制，否则不会进行跳转。IDE配置页面参数信息请参考智慧100V5.1开发环境|
|2|默认值，AI-SDK内置页面 ，不支持定制，页面样式请参考景田|

以下功能<font>仅支持智慧100</font>

* offlinedetect  
  离线识别功能

|值|说明|
|---|---|
|0|默认值，关闭控件支持离线识别功能|
|1|开启控件支持离线识别功能|

> *开启离线识别后，照片水印合成方式为attached，且不支持修改。*

* cameraobliquetype  
  角度检测灵敏度

|值|说明|
|---|---|
|1|宽松角度检测|
|2|默认值，标准角度检测|
|3|严格角度检测|

> *此选项需要用户在手机端AI拍照界面开启角度检测才会生效。*

* pricedetect  
  价签识别功能(仅支持智慧100包)

|值|说明|
|---|---|
|0|默认值，关闭控件支持价签识别功能|
|1|开启控件支持价签识别功能|

## Event Trigger

* onload
* onvaluechange  
****该事件在控件的值发生改变时调用(拍照或删除)。  
注意，只有是在用户直接输入导致的值改变才会调用，其他方式（例如事件赋值等）造成的值改变，不触发该事件。AIPhoto会在拍照与删除时调用值改变事件。****

**推荐配置方案：**

```js
let len = Page.getValue('photoLen'); //获取原拍照控件数量
var aiphoto = Page.getCtrl('冰冻化拍照').getValue(CtrlValueGetter('allFileInfo')); //获取aiphoto控件值
 if (aiphoto == '' || aiphoto == "" || aiphoto == null || Number(len)>aiphoto .length || Number(len)==aiphoto .length) {
    Page.setValue('photoLen', photo.length)
    return
  } else {
//页面跳转逻辑
} //在此进行判断aiphoto数量是否为新增还是删除，避免在删除时触发页面跳转
```

* jumpdetail  
  点击跳转事件，点击已识别的图片跳转到AI识别详情页,传递的内容为AI识别结果detectResult  
**推荐配置方案：**
  ```js
  var appData = IN.__linkparam[0].appData
  var data = []
  for (var i = 0;i < appData.length;i++) {
  data.push(JSON.parse(appData[i]))
  }
  Page.getCtrl("datatemp").value = JSON.stringify(data);
  ```

## Value Component

* fileInfo  

  > *用于使用flycode提交图片的时候获取本地图片位置信息*

获取文件的本地信息，包含完整路径和时间戳

```JSON
[
  {
      "filePath": "",
      "datetime": "",
      "watermark": "广州市天河区",
      "source": "",
      "identityId":"",
      "isFake":""
  }
] 
```

* allFileInfo  

  > *用于使用flycode提交图片的时候获取本地图片位置信息*

获取文件的本地信息，包含完整路径和时间戳，以及AI识别结果

```JSON
[
  {
      "filepath": "",
      "datetime": "",
      "watermark": "广州市天河区",
      "source": "",
      "identityId":"",
      "isFake":"",
      "isQualified":"",
      "unqualifiedReason":"",
      "detectResult":"",
      "priceResult": “"
  }
] 
```

* onvaluechange

  > AIPhoto已不支持该方式取值

* 取值使用AI识别结果时需特别注意，需要对AI识别结果进行空值判断，避免无AI识别结果导致逻辑异常。

  ```JSON
  var newphoto = aiphoto ;
  if(typeof newphoto == 'string'){
  newphoto = JSON.parse(newphoto);
  appData = newphoto[newphoto.length-1].detectResult;
  if(appData=='' ||appData=="" || appData==null){ return; }
  业务逻辑 }
  ```

* filepath/localPath 图片本地路径

* datetime/createtime 图片生成日期

* filetype 文件类型

* httpUrl 图片url

* watermark 水印信息

* source/fileName 图片的udid信息，即图片名

* identityId udid唯一编码

* isFake 是否翻拍

* isQualified 是否合格

* unqualifiedReason 不合格原因
* detectResult 识别结果