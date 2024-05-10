---
title: aisplicephoto（拼接控件,部分功能仅智慧100支持）
date: 2021-02-19T11:29:25
---

# aisplicephoto

* 编辑：谭锦标
* 校对：彭率
* 时间：2021-02-19
* 状态：已完成
* 适用范围：智慧100V6.0

智慧100 V6.0及以后版本，识别默认采用该控件，持续维护更新

## 一、总体设计

aisplicephoto可以用于获取用户照片的控件，包括一组单张拍照和拼接拍照可以拍照,<font>不支持外部传参压缩</font>

### 1.1控件介绍

一个格子代表一组图片或者一张拼接图片，右上角的红圈数字代表图片张数，拼接则展示‘拼’字。  
执行步骤分别是：

![puhuo1](http://apaas.wxchina.com:8881/wp-content/uploads/puhuo1.png)  
![puhuo2](http://apaas.wxchina.com:8881/wp-content/uploads/puhuo2.png)

1.单张：上传--->翻拍-->sku识别-->图片处理  
2.拼接：上传-->拼接-->获取拼接结果-->图片处理

### 1.2相机介绍

![mix_camera1](http://apaas.wxchina.com:8881/wp-content/uploads/mix_camera1.png)

拍照设置：<font>仅支持智慧100</font>  
1.角度检测：陀螺仪垂直检测+斜拍检测，在该检测开启的情况下完成拍摄，可以使图片处于最佳的识别角度。陀螺仪垂直检测需要保持手机处于垂直状态，斜拍检测需要正对货架  
2.模糊检测：检测当前画面是否模糊（可点击屏幕重新聚焦），如果画面为纯色背景，都属于模糊，该功能必须运用在货物拍摄的场景  
3.开启闪光：开启闪光灯

单拍模式：  
可以拍摄50张图片

拼接模式：  
可以拍摄50张拼接图片，橙色的遮罩层为重叠区域，满足一定条件才可拍摄下一张。拼接模式下，在图片浏览界面只能删除图片集合的最后一张或者整组图片

## 二、aisplicephoto控件UI协议

### 2.1协议介绍

由于IDE暂不支持该控件的基础配置，所以协议需要手写

### 2.2具体协议

```json
{ 
"type": "aisplicephoto", //相机类型
"code": "native-aisplicephoto-7688253576892495",
"name": "主货架”"//名称
"maxnumber": "8",//可以拍摄组数的最大数量，不填写默认为一组
"source": "2",//照片来源 ：0相机//目前仅支持从相机拍照获取图片
"watermark": "",//水印信息（拼接模式不支持，如需搭配拼接模式，此处请保持为空）
"detecttype": "1",// 1为货架，2为冰柜，3为地堆;（必须按规定填写，不填写会报错）
"fakedetect": "1",//0或不填为关闭翻拍，1为开启翻拍，仅支持单拍;（必须按规定填写，默认为0）
"cameraopentype": "2", //相机类型：0：拼接 1：单拍 2：单拍+拼接；不写该字段，未赋值，不按规定赋值，默认为2（必须按规定填写）
"singlequantity": "1",//单拍的数量，不写该字段默认30，最大不能超过50；最少不能小于1，超过50则为50，不按规定默认为30（必须按规定填写）
"splicequantity": "10",//拼接的数量，不写该字段默认30，最大不能超过50；最少不能小于1，超过50则为50，不按规定默认为30（必须按规定填写）
"onclickdetectdetails": "1299160880931541089",//识别详情的code
"arearateScale":"0.3",//拼接重合区域参数，有效范围为0.3至1.0，默认为0.3
"shakecheck":"0",//拍照控件角度检测开关是否开启，0关闭，1开启，默认为0
"fuzzycheck":"1",//拍照控件模糊检测开关是否开启，0关闭，1开启，默认为1
"cameraobliqueType":"2",//斜拍检测灵敏度，等级为1-3，默认为2
"asynctip ":"(取消则提交后识别)",//修改图片上传、识别失败、拼接失败时弹窗提示语,详见下文
"guideurl":"",//配置相机内置拍照指引页面，只可配置为有效的http/https链接，其余配置不兼容
"eventlist": [
    {
        "trigger": "onclickdetectdetail", //跳转识别详情
        "handler": "1299160880931541089"//识别详情的code
    }],
}
```

### 2.3字段介绍

#### onclickdetectdetail 点击跳转识别详情页

#### maxnumber 可保存拍照控件最大组数，默认为1可拍一组

#### Watermark 单张模式时支持照片水印，拼接模式不支持水印 ,Watermark 自定义照片的水印，只在 watermarkcomposite == attached 时有效

#### detecttype 1为货架，2为冰柜，3为地堆;（必须按规定填写，不填写会报错）

#### fakedetect 1为检测翻拍，0为不检测翻拍，默认为不检测翻拍面

以下功能<font>仅支持智慧100</font>

#### arearateScale (仅支持智慧100包)拼接重合区域参数，有效范围为0.3至1.0，默认为0.3

#### shakecheck 拍照控件角度检测开关是否开启，0关闭，1开启，默认为0

#### fuzzycheck 拍照控件模糊检测开关是否开启，0关闭，1开启，默认为1

#### asynctip 修改图片上传、识别失败、拼接失败时弹窗提示语，例如图片上传失败弹窗提示语：

* 场景一："asynctip":"===测试配置效果！！！"  
  配置效果：图片上传失败,请点击重试===测试配置效果！！！
* 场景二："asynctip":""  
  配置效果：图片上传失败,请点击重试
* 场景三：未配置  
  配置效果：图片上传失败,请点击重试(取消则提交后识别)

#### guideurl 拍照控件相机内置拍照指引，可以配置http/https链接加载自定义拍照指引内容

#### Value Component(getValue()取值与fileInfo一致)

* fileinfo  
用于使用flycode提交图片的时候获取本地图片位置信息  
获取文件的本地信息，包含完整路径和时间戳

  ```
  [ [{
    "filepath": "",
    "datetime": "",
    "watermark": "广州市天河区",
    "storage": "storage"
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
    “isQualified": “",
    "isFake": “",
    "unqualifiedReason": “",
    "mergeId": “",
     "httpUrl": "", 
     "detectResult": “",
     "priceResult": “",
  "cameraType": “",
  "identityId": “"
  }]]
  ```

  以下功能<font>仅支持智慧100</font>

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
     "priceResult": “",
  "cameraType": “",
  "identityId": “"
  }]]
  ```

* aiSdkStatistics  
用于使用flycode提交图片的时候获取当前控件成功调用AI平台接口的次数信息

  ```
  "fakeNum": "", //调用翻拍接口的次数
  "skuNum": "", //调用sku识别接口的次数
  "spliceNum":""， //调用图片拼接接口的次数
  ```
* AI识别结果空值判断
  ```
  var newphoto = aispilcePhoto;
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

### 3.2第二步：UI协议

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

### 3.4第四步：web拼接控件

需要加入一个二开控件，才能在web后台查看图片集合。注意，如果是列表则需要在协议加个title。

[dist](http://apaas.wxchina.com:8881/wp-content/uploads/dist.zip "dist")

![pinjie1](http://apaas.wxchina.com:8881/wp-content/uploads/pinjie1.png)  
![pinjie2](http://apaas.wxchina.com:8881/wp-content/uploads/pinjie2.png)

### 3.5第五步：配置离线调度

拼接控件可以在未识别完成的情况下，提交数据，所以需要配置离线调度，完成接下来的步骤。  
注意：

#### 1.pl\_globalconfig表需要配置AIAccount配置，例如智慧100的配置：

```json
{"username": "*****","password": "*****","url":"https://ai.xtion.net","photoprefix":"https://xtionai-storage-test.oss-cn-shenzhen.aliyuncs.com","account":"*****","accessKey":"*********"}。
```

username为账号，password为密码，url为请求地址，photoprefix为oss上传地址，account为租户，accessKey为公钥，都是必填。

#### 2.getOssUrl方法 获取ossUrl 视业务上oss生成条件而定。

智慧100 5.1的离线调度示例如下(仅供参考，具体使用需要根据业务场景，ai\_visit\_result\_compute表是智慧100特有的表)：

```js

var account = FLY.call("globalconfigmgr.getGlobalConfigByKey", { pl_globalconfig: { key: "AIAccount" } }).confjson;
FLY.log(account)
var emptyResult = {
   "taskId": "",
   "imageInfo": {
      "isVision": null,
      "width": null,
      "height": null,
      "distance": null,
      "agreementCheck": true
   },
   "layerNum": 0,
   "skuInfo": [],
   "ownSkuInfos": [],
   "ownSkuTypeNum": 0,
   "ownSkuNum": 0,
   "ownPurity": "",
   "plumpness": "",
   "isOwnFreezer": null,
   "shelfDistributionRate": "",
   "ownDisplayLayerNum": 0,
   "goldLocationDetection": false,
   "centralizedDetection": false,
   "notCentralizedLayer": [],
   "competeSkuInfos": [],
   "competeSkuTypeNum": 0,
   "competeSkuNum": 0,
   "otherSkuNum": 0,
   "allSkuNum": 0,
   "otherSkuInfos": [],
   "imageUrl": "",
   "layerOut": [],
   "bizType": null
}
var token = '';
var request_url = account.url;
var token_type = account.type || 'ai';
var token_username = account.username;
var token_password = account.password;
var photo_prefix = account.photoprefix;
var account = account.account;

var now = new Date();
var endtime = now.Format('yyyy-MM-dd HH:mm:ss');
var begintime = new Date(new Date().getTime() - 3600000).Format('yyyy-MM-dd HH:mm:ss');
var noDetects =
   SELECT
kkv.ID,
   kkv.shelfdisplay,
   kkv.boxdisplay,
   kkv.popad,
   kkv.submitter,
   kkv.storeid,
   kkv.submittertime,
   position.orgstructid as positionid
FROM
kx_kq_vividinspection kkv
LEFT JOIN pl_orgstruct org on kkv.submitter = org.orgstructid
LEFT JOIN pl_orgstruct position on position.orgstructid = org.parentorgstructid
WHERE

   (kkv.shelfdisplay LIKE '%"detectResult":""%'
or kkv.boxdisplay LIKE '%"detectResult":""%'
or kkv.popad LIKE '%"detectResult":""%')
and submittertime between { begintime } and { endtime }
order by kkv.submittertime asc norule;

//请求AI接口
//调用并获取token
var fresptoken = get_new_token();
FLY.log('fresptoken-----' + fresptoken);

var allSuccess = true;
for (var i = 0; i < noDetects.length; i++) {
   var kx_kq_vividinspection = BO.new('kx_kq_vividinspection')
   var ai_visit_result_compute = BO.new('ai_visit_result_compute');
   kx_kq_vividinspection.id = noDetects[i].id
   ai_visit_result_compute.id = FLY.genId();
   var identityIdArr = []

   //货架
   if (noDetects[i].shelfdisplay != null && noDetects[i].shelfdisplay != '') {
      var detectResult = detect(noDetects[i].shelfdisplay, 1);
      //结果为空 则还在识别中
      kx_kq_vividinspection.shelfdisplay = detectResult[0]
      //结果数组大小为1是 可认为存在识别中的数据 不需要将结果更新/插入  ai_visit_result_compute
      if (detectResult.size == 1) {
         allSuccess = false;
      } else {
         ai_visit_result_compute.shelf = JSON.stringify(detectResult[1])
         if (detectResult[2] != null && detectResult[2].length > 0) {
            identityIdArr = identityIdArr.concat(detectResult[2])
         }
      }
   } else {
      ai_visit_result_compute.shelf = '[]'
   }

   //冰柜
   if (noDetects[i].popad != null && noDetects[i].popad != '') {
      var detectResult = detect(noDetects[i].popad, 2);
      //结果为空 则还在识别中
      kx_kq_vividinspection.popad = detectResult[0]
      if (detectResult.size == 1) {
         allSuccess = false;
      } else {
         ai_visit_result_compute.freezer = JSON.stringify(detectResult[1])
         if (detectResult[2] != null && detectResult[2].length > 0) {
            identityIdArr = identityIdArr.concat(detectResult[2])
         }
      }
   } else {
      ai_visit_result_compute.freezer = '[]'
   }

   //地堆
   if (noDetects[i].boxdisplay != null && noDetects[i].boxdisplay != '') {
      var detectResult = detect(noDetects[i].boxdisplay, 3);
      //结果为空 则还在识别中
      kx_kq_vividinspection.boxdisplay = detectResult[0]
      if (detectResult.size == 1) {
         allSuccess = false;
      } else {
         ai_visit_result_compute.waterheap = JSON.stringify(detectResult[1])
         if (detectResult[2] != null && detectResult[2].length > 0) {
            identityIdArr = identityIdArr.concat(detectResult[2])
         }
      }

   } else {
      ai_visit_result_compute.waterheap = '[]'
   }
   DB.update(kx_kq_vividinspection)

   if (allSuccess) {
      ai_visit_result_compute.jsonhandledstatus = 10010;
      ai_visit_result_compute.identityids = JSON.stringify(identityIdArr);
      ai_visit_result_compute.storeid = noDetects[i].storeid;
      ai_visit_result_compute.membercode = noDetects[i].submitter;
      ai_visit_result_compute.endshelf = '[]';
      ai_visit_result_compute.display = '[]';
      ai_visit_result_compute.cold = '[]';
      ai_visit_result_compute.submittime = new Date(+noDetects[i].submittertime).Format('yyyy-MM-dd');
      ai_visit_result_compute.jsonhandledstatus = 10010;
      ai_visit_result_compute.positionid = noDetects[i].positionid;

      // 同一个人 同一天 同一家店 只能有一条拜访记录
      var hasRecord = SELECT
      id
      FROM
      ai_visit_result_compute
      WHERE
      storeid = { ai_visit_result_compute.storeid }
      and membercode = { ai_visit_result_compute.membercode }
      and submittime = { ai_visit_result_compute.submittime }
      norule;
      if (hasRecord != null && hasRecord.length > 0) {
         ai_visit_result_compute.id = hasRecord[0].id;
         ai_visit_result_compute.reportstatus = 2;
         DB.update(ai_visit_result_compute)
      } else {
         ai_visit_result_compute.reportstatus = 0;
         DB.insert(ai_visit_result_compute)
      }
   }

}

function detect(sourceImages, type) {
   var allSuccess = true;
   var resultJsonArr = [];
   var identityIdArr = [];
   var jsonArr = JSON.parse(sourceImages);
    FLY.log('sourceImages-----' + sourceImages)
   outLoop:
   for (var i = 0; i < jsonArr.length; i++) {
      var photoGroup = jsonArr[i]
      var cameraType = photoGroup[0].cameraType;
      FLY.log('photoGroup-----' + photoGroup)
      var imageUrls = [];
      var photoGroupJson = [];
      var targetIdentityIdArr = [];
      innerLoop:
      for (var j = 0; j < photoGroup.length; j++) {
         var photoInfo = photoGroup[j];
         FLY.log('test-1')
         if (photoInfo.detectResult != null && photoInfo.detectResult != "") {
            FLY.log('有识别结果,识别结果为---' + photoInfo.detectResult);
            photoGroupJson.push(JSON.parse(photoInfo.detectResult))
            targetIdentityIdArr.push(photoInfo.source.split('.')[0])
            continue innerLoop;
         }
         FLY.log('photoInfo-----' + photoInfo)
         var ossUrl = getOssUrl(photoInfo, photo_prefix, account)
         var identityId = photoInfo.source.split('.')[0];
         if (cameraType == 0) {
            var param = {
               "imageUrl": ossUrl,
               "identityId": identityId
            }
            var orgRes = getDetectResult(identityId);
            //存在识别结果
            if (orgRes != null && orgRes != '') {
               FLY.log('拿到sku识别结果')
               if (orgRes.handledStatus == 10010) {
                  allSuccess = false;
                  continue innerLoop;
               } else if (orgRes.handledStatus == 10030) {
                  var resultData = orgRes.resultData;
                  var resultDataJson = JSON.parse(resultData);
                  resultData.originUrl = ossUrl;
                  photoGroup[j].detectResult = resultData;
                  photoGroup[j].httpUrl = resultDataJson.imageUrl;
                  photoGroupJson.push(resultDataJson)
                  targetIdentityIdArr.push(identityId)
               } else if (orgRes.handledStatus == 10040 || orgRes.handledStatus == 10050) {
                  emptyResult.originUrl = ossUrl;
                  photoGroup[j].detectResult = JSON.stringify(emptyResult);
                  photoGroup[j].httpUrl = ossUrl;
                  photoGroupJson.push(emptyResult)
                  targetIdentityIdArr.push(identityId)
               }
               photoGroup[j].isFake = false;
            } else {
               var detectResult = skuDetect(param, type);
               photoGroupJson.push(detectResult)
               targetIdentityIdArr.push(identityId)
               photoGroup[j].detectResult = JSON.stringify(detectResult)
               photoGroup[j].httpUrl = detectResult.imageUrl;
               //调用翻拍 翻拍识别结果是 true为翻拍 false为非翻拍
               var fakephotoRes = fakePhotoDetect(ossUrl);
               if (fakephotoRes == null || fakephotoRes == '') {
                  fakephotoRes = false;
               }
               //isRemake isFake 是是否合格 true 不合格 false为为合格
               photoGroup[j].isFake = fakephotoRes;
            }
         } else {
            var map = {
               "url": ossUrl
            }
            imageUrls.push(map)
         }

      }

      //识别
      if (cameraType == 1) {
         var mergeId = photoGroup[0].mergeId;
         if (mergeId != null && mergeId !== '') {
            var mergeRes = getMergeResult(mergeId);
            FLY.log('test-----mergeRes');
            if (mergeRes != null && mergeRes != '') {
               FLY.log('拿到拼接识别结果')
               if (mergeRes.status == 10010) {
                  //还在识别中
                  allSuccess = false;
                  continue outLoop;
               } else if (mergeRes.status == 10030) {
                  var resultUrl = mergeRes.resultUrl;
                  var splitArr = resultUrl.split('/');
                  var time = splitArr[5];
                  var timestamp = new Date(time.substring(0, 4) + '/' + time.substring(4, 6) + '/' + time.substring(6, 8)).getTime;
                  var source = splitArr[7];
                  var identityId = source.split('.')[0];
                  var detectResult = skuDetect({ "imageUrl": resultUrl, "identityId": identityId }, type);
                  photoGroup = [{
                     "source": source,
                     "datetime": timestamp,
                     "mergeId": mergeRes.mergeId,
                     "httpUrl": detectResult.imageUrl,
                     "detectResult": JSON.stringify(detectResult),
                     "cameraType": cameraType,
                     "isFake": false
                  }]
                  targetIdentityIdArr = [identityId]
                  photoGroupJson = [detectResult]
                  identityIdArr = identityIdArr.concat(targetIdentityIdArr);
                  resultJsonArr[i] = photoGroupJson;
                  jsonArr[i] = photoGroup
                  continue;
               }
            }

            photoGroup[0].detectResult = 'mergeFailure';
            jsonArr[i] = [photoGroup[0]];
            resultJsonArr[i] = [];
            continue;

         } else {
            var mergeRes = mergeimage(imageUrls);
            FLY.log('mergeRes-----' + JSON.stringify(mergeRes))
            if (mergeRes == null || mergeRes == '') {
               FLY.log('拼接失败');
               for (var j = 0; j < photoGroup.length; j++) {
                  photoGroup[j].detectResult = "mergeFailure"
               }
               jsonArr[i] = photoGroup
               resultJsonArr[i] = [];
               continue;
            } else {
               photoGroup[0].mergeId=mergeRes;
               FLY.log('photoGroup-----' + JSON.stringify(photoGroup[0]))
            }
         }
      }
            FLY.log('photoGroup-----' + JSON.stringify(photoGroup[0]))
      identityIdArr = identityIdArr.concat(targetIdentityIdArr);
      resultJsonArr[i] = photoGroupJson;
      jsonArr[i] = photoGroup
   }
   var result = allSuccess ? [JSON.stringify(jsonArr), resultJsonArr, identityIdArr] : [JSON.stringify(jsonArr)]
   return result;
}

function getOssUrl(photo, photoprefix, account) {
   var datetime = photo.datetime;
   var source = photo.source;
   var url = photoprefix + '/' + source.substring(0, 3) + '/img/' + Date.parseDate(datetime).Format("yyyyMMdd") + '/' + account + '/' + source;
   return url
}

//封装AItoken
function get_new_token() {
   var url = request_url + "\/api\/ai\/auth\/login";
   var rst1 = {
      "url": url,
      "method": "post",
      "bodyType": "json",
      "headerMap": {
         "Content-Type": "application/json"
      },
      "bodyMap": {
         "username": token_username,
         "password": token_password
      }
   };
   try {
      var openrst = FLY.call("aisdktask.httpcall", rst1);
      //FLY.log(openrst)
      return JSON.parse(JSON.parse(openrst).resp_data.result).data.token;
   }
   catch (e) {
      FLY.log(e);
      return '';
   }
}
function skuDetect(param, type) {
   FLY.log('param----' + param)
   var url = "";
   var typeStr = "";
   switch (type) {
      case 1:
         url = request_url + "\/api\/ai\/shelf\/syncdetect";
         typeStr = "shelf";
         break;
      case 2:
         url = request_url + "\/api\/ai\/freezer\/syncdetect";
         typeStr = "freezer";
         break;
      case 3:
         url = request_url + "\/api\/ai\/waterheap\/syncdetect";
         typeStr = "waterheap";
         break;
   }
   var rst1 = { "url": url, "method": "post", "bodyType": "json", "headerMap": { "Content-Type": "application/json", "token": fresptoken }, "bodyMap": param };
   try {
      var openrst = FLY.call("aisdktask.httpcall", rst1);

      var json = JSON.parse(JSON.parse(openrst).resp_data.result).data;
      json.type = typeStr;
      json.originUrl = param.imageUrl;
      FLY.log('detectres----' + json)
      return json;
   } catch (e) {
      FLY.log(e);
      return '';
   }
}

//拼接
function mergeimage(imageUrls) {
   var url = request_url + "\/api\/ai\/image\/mergeimage";
   var rst1 = { "url": url, "method": "post", "bodyType": "json", "headerMap": { "Content-Type": "application/json", "token": fresptoken }, "bodyMap": { "imageData": imageUrls } };
   try {
      var openrst = FLY.call("aisdktask.httpcall", rst1);
      FLY.log('拼接结果-----' + openrst)
      var result = JSON.parse(JSON.parse(openrst).resp_data.result);
      if (result.status != 1) {
         return '';
      }
      return result.data;
   } catch (e) {
      FLY.log(e);
      return '';
   }

}
//翻拍
function fakePhotoDetect(url) {
   var url = request_url + "\/api\/ai\/thirdparty\/ocr\/bussiness\/fakephoto";
   var rst1 = { "url": url, "method": "post", "bodyType": "json", "headerMap": { "Content-Type": "application/json", "token": fresptoken }, "bodyMap": { "url": url } };
   try {
      var openrst = FLY.call("aisdktask.httpcall", rst1);
      FLY.log('拼接结果-----' + openrst)
      var result = JSON.parse(JSON.parse(openrst).resp_data.result);
      if (result.status != 1) {
         return '';
      }
      return result.data;
   } catch (e) {
      FLY.log(e);
      return '';
   }

}

function getDetectResult(identityId) {
   var url = request_url + "\/api\/ai\/task\/findskuresult";
   var rst1 = { "url": url, "method": "post", "bodyType": "json", "headerMap": { "Content-Type": "application/json", "token": fresptoken }, "bodyMap": { "identityId": identityId } };
   try {
      var openrst = FLY.call("aisdktask.httpcall", rst1);
      FLY.log('获取sku结果-----' + openrst)
      var result = JSON.parse(JSON.parse(openrst).resp_data.result);
      if (result.status != 1) {
         return '';
      }
      var data = result.data;
      if (data != null && data.length > 0) {
         return data[0]
      } else {
         return '';
      }
   } catch (e) {
      FLY.log(e);
      return '';
   }
}

function getMergeResult(mergeId) {
   var url = request_url + "\/api\/ai\/image\/getmergeinfo";
   var rst1 = { "url": url, "method": "post", "bodyType": "json", "headerMap": { "Content-Type": "application/json", "token": fresptoken }, "bodyMap": { "mergeId": mergeId } };
   try {
      var openrst = FLY.call("aisdktask.httpcall", rst1);
      FLY.log('获取拼接结果-----' + openrst)
      var result = JSON.parse(JSON.parse(openrst).resp_data.result);
      if (result.status != 1) {
         return '';
      }
      return result.data;
   } catch (e) {
      FLY.log(e);
      return '';
   }
}
```

### 3.6第六步：识别结果保存到数据库

查看拼接控件的历史纪录需要有识别结果，否则点击会显示正在识别中，拼接图片在离线调度的情况下有可能出现拼接失败，记录不会删除，但是点击会显示拼接失败。

#### 3.6.1方案一

通过调用allFileInfo获取识别结果等数据，上传到数据库，该方案存在字符串过长的问题，需要打开数据库字符限制，具体事例如下(仅供参考，具体看业务)：

```js

console.log('生动化检查上传数据开始');
var membercode =SESSION.mbcode;
var submit_time =Date.parseDate(NOW.time()).Format('yyyy-MM-dd');
var visitid = Page.getCtrl('拜访id').getValue();
console.log(membercode,submit_time, visitid);
var IN = {
  'ai_visit_result_compute':{
    "visitid": visitid,
    "id":'',
    "storeid":Page.getCtrl('终端ID').value,
    "membercode":membercode,"submittime":submit_time,
    "value":'', 
    "shelf":'',
    "endshelf":'',
    "display":'',
    "freezer":'',
    "cold":'',
    "waterheap":'',
    "identityids":'',
    "reportstatus":'',
    "jsonhandledstatus":''
    }
}

console.warn('submittttttttttttttttttttt')
var identityids = [];
var fileInfo = Page.getCtrl('主货架').getValue(CtrlValueGetter('allFileInfo'));
var fileInfo1 = Page.getCtrl('端架').getValue(CtrlValueGetter('allFileInfo'));
var fileInfo2 = Page.getCtrl('二次陈列').getValue(CtrlValueGetter('allFileInfo'));
var fileInfo3 = Page.getCtrl('冰柜').getValue(CtrlValueGetter('allFileInfo'));
var fileInfo4 = Page.getCtrl('冷藏柜').getValue(CtrlValueGetter('allFileInfo'));
var fileInfo5 = Page.getCtrl('地堆').getValue(CtrlValueGetter('allFileInfo'));

function setFileInfo(fileInfo){
  var list = [];
  if (fileInfo != null && fileInfo.length > 0) {
      if (typeof(fileInfo) == 'string') {
                var json = eval('(' + fileInfo + ')');
        list = json.map(function(f) {
          if(Array.isArray(f)) {
            return f.map(function(data) {
              identityids.push(data.identityId)
              return filterSkuInfo(data.detectResult)
            }).filter(function(l) {
                return !!l;
            })
          } else {
            identityids.push(data.identityId)
            return filterSkuInfo(f.detectResult).filter(function(l) {
                return !!l;
            })
          }
        })
        /*
                for (var j = 0; j < json.length; j++) {
                    list.push(filterSkuInfo(json[j].detectResult))
                }*/
            } else if (Array.isArray(fileInfo)) {
        list = fileInfo.map(function(f) {
          if(Array.isArray(f)) {
            return f.map(function(data) {
              return filterSkuInfo(data.detectResult).filter(function(l) {
                return !!l;
            })
            })
          } else {
            return filterSkuInfo(f.detectResult).filter(function(l) {
                return !!l;
            })
          }
        })
        /*
                for (var j = 0; j < fileInfo.length; j++) {
           list.push(filterSkuInfo(fileInfo[j].detectResult))
                }*/
            }
        }
  return list.filter(function(l) {
    return Array.isArray(l) ? l.length > 0 : !!l;
})
}

function filterSkuInfo(str) {
    var other = str;
    if(typeof str == "string" ) {
      if( str=="" ||str==''){

    }else{
      other = JSON.parse(str);
        delete other.skuInfo;
    }
    }
    return other;
}
var shelf = setFileInfo(fileInfo);
var endshelf = setFileInfo(fileInfo1);
var display = setFileInfo(fileInfo2);
var freezer = setFileInfo(fileInfo3);
var cold = setFileInfo(fileInfo4);
var waterheap = setFileInfo(fileInfo5);     

if(shelf.length <1&&endshelf.length <1&&display.length <1&&freezer.length <1&&cold.length <1&&waterheap.length <1){
    IN.ai_visit_result_compute.reportstatus = "3";
  IN.ai_visit_result_compute.jsonhandledstatus = "10000";
}else{
  IN.ai_visit_result_compute.reportstatus = "0";
  IN.ai_visit_result_compute.jsonhandledstatus = "10010";
}

IN.ai_visit_result_compute.shelf = JSON.stringify(shelf);
IN.ai_visit_result_compute.endshelf = JSON.stringify(endshelf);
IN.ai_visit_result_compute.display = JSON.stringify(display);
IN.ai_visit_result_compute.freezer = JSON.stringify(freezer);
IN.ai_visit_result_compute.cold = JSON.stringify(cold);
IN.ai_visit_result_compute.waterheap = JSON.stringify(waterheap);
IN.ai_visit_result_compute.identityids = JSON.stringify(identityids);
//发起网络请求
//Model.submitData('ai本地表提交', IN, detectResultList, success, fail, null)
Model.submitData('ai本地表提交', IN)
console.log(IN);
console.log('发起请求222');
```

#### 4.6.2方案二

通过阿里云的dataworks配置，进行每隔一段时间一次数据同步。

## 五、水印的处理（暂不支持）

水印支持的种类  
内置水印  
【暂不支持】  
内置水印只需要通过简单勾选就能进行常见的水印配置，目前支持的内置水印选项有：

|选项|表达式示例|说明|
|:---|:---|:---|
|时间|datetime:yyyy-MM-dd HH:mm|拍照的时间，支持配置具体的时间格式|
|定位|location|当前的定位地址|
|人员|username|当前账号的人员名称|
|表单名称|pagename|当前控件所在的表单名称|
|控件值|ctrlvalue:34562523452345|指定控件的值，可以配置多个|

每个水印选项由一对大括号 {} 包裹，每个水印选项在显示时占据一行的位置  
// 内置水印示例  
// 包含一个控件值,定位和时间  
wm:{ctrlvalue:34562523452345}{location}{datetime}时间  
默认的表达为 {datetime} ，用于获取拍照时的时间，多张拍照时，每张照片的时间单独获取。  
默认的时间格式为 yyyy-MM-dd HH:mm 。  
也支持配置指定的时间格式，只需要在 : 后面加上指定格式即可，如：{datetime:MM-dd}

定位  
表达式为 {location} ，表示当前的定位地址。将会直接读取拍照控件自身的定位信息。  
多张拍照时，使用统一的定位地址。  
如果 watermarkrequired == 1 ，那么如果当前还在定位中，或者获取地址失败时，后不能进行拍照。  
关于定位的详细说明，参看下方说明。

人员姓名  
表达式为 {location} ，当前登录人员的姓名。

表单名称  
表达式为{pagename} ，当前表单的名称。

控件值  
指定控件的值，目前只支持text和textinput控件。  
flycode水印  
支持返回String类型值的flycode，返回值即为水印需要显示的内容，可以在返回的字符串中插入换行符 \\n 来达到换行的效果。  
如果该属性为空，默认使用当前的时间作为水印（默认水印获取失败时不返回错误信息）。  
水印同时支持返回错误提示信息，即当水印无法正常生成时，可以通过返回指定格式的字符串，来标识获取水印失败。当水印获取失败后，  
错误提示字符串的格式为： **error: + hit message ，例如：  
"**error:尚不能获取地址信息，请稍候再试。"  
"\_\_error:请先选择需要投放的终端。"  
……

水印生成的时机  
用户在每次确认获取的照片时（即使用相机拍摄成功并确定使用照片时，或者使用相册确定选择了某张照片时），生成该照片的水印。  
如果水印获取失败，即返回了错误信息时，需要显示该错误信息，并中断后续的操作。此时需要提供一个提示选项，让用户选择放弃此次获取的图片，或者再次尝试获取水印。直到正确获取水印后才能真正使用照片。  
全局水印设置  
当前控件没有设置水印的时候，使用全局水印设置。  
全局水印的选项包含除了 控件值 之外的其他内置水印选项，处理方式与内置水印一致。  
全局水印的显示  
当使用全局水印配置时，会在拍照时直接显示在相机界面，如果包含定位信息，还会控制是否能拍照。

此时水印信息会在每次打开相机时刷新，停留在拍照界面时不刷新。  
![shuiyin1](http://apaas.wxchina.com:8881/wp-content/uploads/shuiyin1.png)  
注意，目前，新的水印方式只对全局设置的水印有效，其他方式，如配置控件的watermark属性，依然使用旧的方式显示水印；

## 六、FAQ

### 6.1配置完第一步后，点击新增拍摄按键没有反应？

1.确认pl\_globalconfig表的AIAccount和AIswitch是否配置完成。  
2.如果是新配置的职位需确认是否有遗漏信息，若信息遗漏可能导致无法获取;AIAccount表里面的信息，导致点击新增没有反应。