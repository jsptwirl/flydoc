---
title: aiscenephoto(本地识别控件，仅支持智慧100)
date: 2023-05-24T18:21:10
---

# aiscenephoto(端侧店头/翻拍/SKU,仅支持智慧100)

* 编辑：谭锦标
* 校对：彭率
* 时间：2023-06-14
* 状态：已完成
* 适用范围：智慧100V6.2

基于产品租户<font>智慧100V6.2</font>开户，使用APP<font>智慧100 V6.2.1及后续版本</font>，采用该控件进行端侧识别，为<font>阻断式控件</font>，<font>暂不支持拼接功能和提交后调度识别</font>，持续维护更新<font>(需在上线该功能后才能使用)</font>

## 一、总体设计

aiscenephoto可以用于获取用户照片的控件，支持包括一组单张拍照和多张拍照，暂不支持拼接拍照

![AI场景拍照控件流转流程图](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_4ec7ce26-2931-474b-b81b-af8296c07cec.png)

点击[这里](http://apaas.wxchina.com:8881/wp-content/uploads/AI场景拍照控件流转流程图.pdf)跳转查看高清大图

### 1.1控件介绍

一个格子代表一组图片，右上角的红圈数字代表图片张数。  
执行步骤分别是：

![puhuo1](http://apaas.wxchina.com:8881/wp-content/uploads/puhuo1.png)

![puhuo1](http://apaas.wxchina.com:8881/wp-content/uploads/puhuo2.png)

1.sku：翻拍-->sku识别  
2.店头：翻拍--》店头识别

### 1.2相机介绍

拍照设置：  
1.角度检测：陀螺仪垂直检测+斜拍检测，在该检测开启的情况下完成拍摄，可以使图片处于最佳的识别角度。陀螺仪垂直检测需要保持手机处于垂直状态，斜拍检测需要正对货架。  
2.模糊检测：检测当前画面是否模糊（可点击屏幕重新聚焦），如果画面为纯色背景，都属于模糊，该功能必须运用在货物拍摄的场景。  
3.开启闪光：开启闪光灯

多张可以支持拍摄50张图片。

## 二、aiscenephoto控件UI协议

### 2.1协议介绍

由于IDE暂不支持该控件的基础配置，所以协议需要手写。

### 2.2具体协议

```json
{ 
"type": "aiscenephoto", //相机类型
"code": "",//由ide生成
"name": "场景",
"title": "场景拍照",
"maxnumber": "8",//可以拍摄组数的最大数量，不填写默认为一组
"watermark": "",//水印信息
"detecttype": "1",// 1为货架，2为冰柜，3为地堆;4为店头;（必须按规定填写,默认为关闭）
"fakedetect": "1",//0或不填为关闭翻拍，1为开启翻拍;（必须按规定填写，默认为0）
"singlequantity": "1",//单拍的数量，不写该字段默认30，最大不能超过50；最少不能小于1，超过50则为50，不按规定默认为30（必须按规定填写）
"guideurl":"",//配置相机内置拍照指引页面，只可配置为有效的http/https链接，其余配置不兼容
"eventlist": [
    {
        "trigger": "onclickdetectdetail", //跳转识别详情
        "handler": "1299160880931541089"//识别详情的code
    }
]
}
```

### 2.3字段介绍

#### onclickdetectdetail 点击跳转识别详情页

#### maxnumber 可保存拍照控件最大组数，默认为1可拍一组

#### Watermark 支持照片水印 ,Watermark 自定义照片的水印

#### detecttype 1为货架，2为冰柜，3为地堆;4为店头(必须按规定填写,其余配置会导致异常)

#### fakedetect 1为检测翻拍，0为不检测翻拍，默认为不检测翻拍

#### singlequantity 单拍的数量，不写该字段默认30，最大不能超过50；最少为1，超过50则为50，不按规定默认为30（店头拍照模式下只能拍1张）

#### guideurl 拍照控件相机内置拍照指引，可以配置http/https链接加载自定义拍照指引内容

#### Value Component

* fileinfo  
用于使用flycode提交图片的时候获取本地图片位置信息  
获取文件的本地信息，包含完整路径和时间戳

  ```
  [ [{
    "filePath":,
     "source": ,
        "identityId":,
        "datetime": ,
        "httpUrl" :  ,
         "storage":,
        "watermark":
  } ]]
  ```

* allfileinfo  
用于使用flycode提交图片的时候获取本地图片位置信息  
获取文件的本地信息，包含完整路径和时间戳

  ```
  [[{
    "filepath": "",
    "datetime": "",
    "watermark": "广州市天河区",
    "storage": “storage”,
    "isFake": "",
     "httpUrl": ""，
     "source":"",
     "detectResult": "",
     "priceResult"：""，
      "identityId": “"
  }]]
  ```

* deleteInfo  
用于使用flycode提交图片的时候获取被用户主动删除和在AI识别过程中经用户确认删除的本地图片位置信息  
获取文件的本地信息，包含完整路径和时间戳

  ```
  [[{
    "filepath": "",
    "datetime": "",
    "watermark": "广州市天河区",
    "storage": “storage”,
    “isQualified": “",
    "isFake": “",
    "unqualifiedReason": “",
    "mergeId": “",
     "httpUrl": "", 
     "detectResult": “",
      "identityId": “"
  }]]
  ```
* AI识别结果空值判断
  ```
  var newphoto = aiscenephoto;
  if(typeof newphoto == 'string'){
  newphoto = JSON.parse(newphoto);
  appData = newphoto[newphoto.length-1].detectResult;
  if(appData=='' ||appData=="" || appData==null){ return; }
  业务逻辑 }
  ```

## 三、接入流程

### 3.1第一步：配置pl\_globalconfig表

#### 3.1.1配置AIAccount

示例(信息仅供参考)：  
{"username":"...","password":"...","url":"[https://ai.xtion.net","account":"...","accessKey](https://ai.xtion.net)":"..."}  
username：账号  
password：密码  
url:请求地址  
account：租户  
accessKey：公钥  
注意：上线前请确认生产环境对应的信息。

# 3.2第二步：UI协议

具体参考：协议介绍

### 3.3第三步:配置点击跳转到识别详情界面

关键在于Onclickdetectdetail 事件，示例如下：

#### 1.获取识别结果

```js
var appData = IN.__linkparam[0].appData
var data = []
for (var i = 0;i < appData.length;i++) {
  data.push(JSON.parse(appData[i]))
}
Page.getCtrl("datatemp").value = JSON.stringify(data);
Page.getCtrl("status").value = "非稽查";
 
```

#### 2.配置跳转链接

![tiaozhuan1](http://apaas.wxchina.com:8881/wp-content/uploads/tiaozhuan1.png)

#### 3.配置识别详情页面，支持单拍和拼接，若要根据需求具体修改UI，需要自己改源码

[x-retail-appeal](http://apaas.wxchina.com:8881/wp-content/uploads/x-retail-appeal.zip "x-retail-appeal")

![shensu1](http://apaas.wxchina.com:8881/wp-content/uploads/shensu1.png)  
![shensu2](http://apaas.wxchina.com:8881/wp-content/uploads/shensu2.png)

```js
##### 设置appData
/*
function success(res){
  var appData = Page.getCtrl('appData').getValue();
  if(typeof appData =='string'){
    appData = JSON.parse(appData);
  }
  var data = {
    "user": System.user(),
    "context": System.context(),
    "type":"skuhn",
    "displayRules":res.richtext_display_rules,
    "appData":appData
  };
  console.log(data);
  Page.getCtrl('product').value = JSON.stringify(res.richtext_display_rules);
  Page.getCtrl('web').value = {"data": JSON.stringify(data) };

 // Page.applyLayout();
}
function error(err) {
    console.log(err);
}

Model.submitData('陈列协议-查询详情', {
    "kx_cost_customerapply": {
        "id": Page.getCtrl('协议id').value
    }
},null, success, error);
*/

var appData2 = Page.getCtrl('appData').getValue();

if(appData2==''||appData2==null){
appData2={};
}

if(typeof appData2 =='string'){
    appData2 = JSON.parse(appData2);
}

/*
  {
        "skuCode": "SKU00000060",
        "skuName": "0003308",
        "actualName": "海之言黑加仑PET500(15入)",
        "layerDetail": "1",
        "layerCountDetail": [
          {
            "layer": 1,
            "count": 1
          }
        ],
        "series": "",
        "unit": "瓶",
        "type": 2,
        "locations": [
          {
            "xmin": "0.286",
            "ymin": "0.108",
            "xmax": "0.512",
            "ymax": "0.776",
            "layer": 1
          }
        ],
        "lineColor": "#00C9934C",
        "skuCount": 1,
        "skuType": 1,
        "layerOutCount": null,
        "skuGoldLocationDetection": false,
        "brand": "统一",
        "subBrand": "统一"
      },
*/
var product=[];
var skuInfo=appData2.skuInfo;
if(skuInfo!=''&&skuInfo!=null){
if(typeof skuInfo =='string'){
    skuInfo = JSON.parse(skuInfo);
}
var stringlist='';
if(skuInfo.length>0){
for(var i=0;i<skuInfo.length;i++){
var productUtil= {"productcode":''+skuInfo[i].skuCode, "tn_shelf_start":''+skuInfo[i].layerDetail,"tn_fridge_start":''+skuInfo[i].layerDetail, "tn_shelf_end":"","productname":''+skuInfo[i].actualName,"tn_fridge_layout":"",   "tn_shelf_layout":"","brand":''+skuInfo[i].brand,"tn_fridge_end":"","tn_other":""};
  product.push(productUtil);  
}
}
}
 // Page.alert(AlertType.info,JSON.stringify(skuInfo)+'------'+stringlist);
var data={
  "user": System.user(),
  "context": System.context(),
  "type": "skuDetail",
  "displayRules": [ ],
  "appData": appData2
};

  Page.getCtrl('product').value = JSON.stringify(product);
  Page.getCtrl('web').value = {"data": JSON.stringify(data) };

//Page.alert(AlertType.info,data);

// Page.alert(AlertType.info,'执行了value设置'+JSON.stringify(data));
```