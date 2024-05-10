---
title: Ultra Web View
date: 2021-04-13T18:21:59
---

# Ultra Web View

web内容显示控件，支持显示一个URL对应的内容，内置大量交互支持函数。

## Protocol

```json
{
    ...
    "type": "ultrawebview",
    "value": "http://.....",
    "cangoback":"1",
    "needcheckvideofeature":"1",
    ...
}
```

## 属性说明

* value

  对应展示页面的URL

* canGoBack

  是否展示返回按钮，默认为false，该返回按钮点击返回历史页面的上一页（如果存在上一页）

* needcheckvideofeature（仅Android）

  是否需要视频播放检测，默认为false，如果webview中需要使用到视频播放功能，建议开启该项能力。

  本wenbview采用的腾讯的X5浏览器，在视频播放/性能/兼容性等方面有更好的表现，但需要在**首次安装**的时候，

  需要下载内核代码，下载完之后需要杀掉应用重新启动。

  开启该属性功能之后，会在webview内部增加相应提示显示内容URL

* urlencode

  链接是否含中文，即链接地址是否需要转码，空或"0"代表不转码，"1"代表需要转码，默认为""

## 设计规划

[整体预期设计稿](xtionJsAPI.md)

## 内置函数（已实现）

### 1、地理位置

获取地理位置（注：定位功能存在耗时情况，建议使用toast显示，防止误操作）

```js
xtion.getLocation(function(res, error){
    if(typeof(error) != 'undefined'){
      /// 定位失败error不为空
      var errorCode = error.code;
      var errorMessage = error.message;
      return;
    }
    var latitude = res.latitude;
    var longitude = res.latitude;
    var address = res.address;
 });

/// type为预留参数 可不填如上
xtion.getLocation('type',function(res, error){
});
```

### 2、界面操作

#### 关闭当前页面

```js
xtion.closeWindow();
```

### 3、参数传递

#### 获取内存值

```js
xtion.getPageCache("key",function(result){
    console.log(result);
});
```

#### 设置内存值

```js
xtion.setPageCache('key', value)  
```

#### 获取设备信息

```js
xtion.getDeviceInfo(function(res){
  //系统版本 Android 10 | iOS 14
  var systemVersion = res.systemVersion;
  //设备型号
  var deviceInfo = res.deviceInfo
  //软件版本  9.0.6.20092001
  var softVersion = res.softVersion
  //token
  var token = res.token
});
```

#### 获取网络状态

```js
xtion.getNetworkStatus(function(res){
    // 返回网络状态
    var networkStatus = res.networkStatus;      
    // 返回网络类型 2g,3g,4g,5g,wifi
    var networkType = res.networkType;
});
```

#### 执行页面Handler(调用页面配置的事件)

```js
/// 该方法存在三个入参 
/// 第一个入参 customHandler为事件的code，
/// 第二个入参 为一个Map类型的参数，该参数会在执行事件的时候自动带入到页面内存，执行事件完毕从页面内存清除
/// 第三个入参 callback 该回调参数会在事件执行完毕回调JS层，注：如果执行事件中存在异步UIFlycode操作将不会等待其执行完毕
xtion.executeHandler("customHandler",{'customParam':'AAAAAAA'},function(){
    console.log("executeHandler complete");
});
```

### 4、平台拍照功能

#### 获取图片

```js
/// photoConfig是图片配置对象，现已提供默认初始化函数获取配置对象，PhotoDefaultConfig.camera()获取默认相机参数
/// PhotoDefaultConfig.album()获取默认相册参数，获取到配置对象后，也可以自行进行配置调整，具体参数如下
/// function(res，error) 是一个回调函数，在获取到图片之后会执行该回调，res是回调传递给H5页面的图片数据信息

/// res 格式为[{'filePath':'','file' : 'base64Data','watermark':'预留','watermarkcomposite':'预留'...},..]
/// filePath 为本地图片路径，H5页面可以使用该路径加载本地图片

/// error 为错误信息，当发生拍照/从相册取图失败时候不为空，例如没有拍照权限/相册权限等
/// 注意该函数只用于获取图片，此时图片还在本地，如需上传至OSS服务器，需要自行进行上传操作

/// 配置参数属性如下 属性跟photo控件保持一致
/// 详情可以查看http://183.63.72.242:6150/UserInterfaceDoc/Ui-Protocol/blob/master/aPaaS/Content/Widgets/WidgetsList/Inputer/Photo.md
/// 除上述属性外，新增如下属性支持：
/// checkwatermark 检测水印的完整性 字符串类型 默认为"0" 在配置全局水印信息的情况下，如果配置是需要定位地址显示，会在强制在定位数据结果回来之后再进行水印合成操作，
/// 如果获取定位失败，将会导致当前拍照/从相册取图的操作失败，并且提示‘水印生成失败，请重新拍照！’
///
var PhotoConfig = function(){
    this.__metaname = "PhotoConfig";
    this.source = "0"; // 调用设备类型，0为相机， 1为相册
    this.maxnumber = "9"; // 可保存拍照控件最大张数，默认为1可拍一张，最多不能设置大于20的数量。
    this.compression = "2"; // 压缩级别 1~10 默认为2
    this.watermarkrequired = "0"; // 是否需要水印
    this.watermarkposition = "bottom";
    this.watermarkstyle = "clear";
    this.watermarkcomposite = "blended";
    this.checkwatermark = "0";
    /// 不全部罗列，
}

var PhotoDefaultConfig = {
    camera(){
        var config = new PhotoConfig();
        config.source = "0";
        return config;
    },

    album(){
        var config = new PhotoConfig();
        config.source = "1";
        return config;
    }
}

/// 调用示范
xtion.getPhoto(PhotoDefaultConfig.camera(), function(res, error){
  if(error != null) return;
  /// 获取图片数据
  for (i = 0; i < res.length; i++) {
    var photoInfo = res[i];
    /// 获取图片本地路径
    var filePath = photoInfo.filePath;
    }
})
```

### 5、H5拍照

直接使用H5的方式定义拍照即可

* 注意：目前Android平台仅支持 单张拍照，不支持一次拍摄多张及相册选择的操作

### 6、导航

#### 使用平台导航能力

* 注：自动显示当前手机内置已安装的地图软件，打开第三方导航，默认为从当前定位到目标定位的路径指示
* 注：传入的经纬度坐标，请使用**gcj02**坐标系  
  
  高德为gcjo2，百度默认为bd-09，是在gcj02的基础上进行再偏移，若为百度地图获取到的经纬度，需要转换成gcj02再传入到该函数

```js
/// toLatitude 目标维度
/// toLongitude 目标经度
/// toAddress 目标地址
xtion.navigationToMap(toLatitude, toLongitude, toAddress);
```

### 7\. 页面路由及刷新

Page添加getWebViewCtrl(name) 方法用于获取WebViewCtrl，WebViewCtrl添加如下方法，

1. ultrawebview是否可以返回的方法：canGoBack()

2. 返回ultrawebview的上一页的方法：goBack()

3. ultrawebview是否可以前进的方法：canGoForward()

4. ultrawebview前进一页的方法：goForward()
5. ultrawebview刷新的方法：reload()

```js
// 使用onreturn事件实现点击app导航栏返回按钮，返回ultrawebview上一页的功能，举例：
var can = Page.getWebViewCtrl('ultrawebview').canGoBack(); 

 if (can) { 

      Page.getWebViewCtrl('ultrawebview').goBack(); 

 } else { 

     Page.returnToPageCount(1); 

}

// 刷新页面的方法举例
Page.getWebViewCtrl('ultrawebview').reload();
```