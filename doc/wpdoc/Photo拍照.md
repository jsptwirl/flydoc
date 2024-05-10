---
title: Photo拍照
date: 2020-05-11T14:36:06
---

# Photo拍照

用于获取用户照片的控件，可以拍照或者从手机相册中选取， web端可以直接上传图片

![](http://apaas.wxchina.com:8881/wp-content/uploads/photo-Sample1.png)

## Protocol

```json
{
    "type": "photo",
    "code": "ctrl_photo_contractphoto",
    "title": "合同拍照",
    "maxnumber": "1",
    "compression": "2",
    "source": "0",
    "enablevideo": "0",
    "watermark": "fly:datetime()",
    "watermarkposition": "",
    "watermarkstyle": "",
    "watermarkcomposite": "",
    "consecutive": "0",
    "storage": "",
    "eventlist": [
        {
            "handler": "handler_checkprerequisite",
            "trigger": "ontake"
        },
        {
            "handler": "handler_loaddetail",
            "trigger": "onvaluechanged"
        }
    ]
}
```

* maxnumber  
可保存拍照控件最大张数，默认为1可拍一张
* compression  
  
  压缩程度

|取值|说明|图片大致大小|
|---|---|---|
|0|最大压缩|10K左右|
|1|1级压缩（默认值）|30K左右|
|2|2级压缩|90K左右|
|3|3级压缩|200K左右|
|4|4级压缩|500K左右|
|5|5级压缩|1M左右|
|10|无压缩|原图|

* enablevideo

  【暂不实现】

  是否可以拍摄视频，bool型数据，默认为 0

  视频也会根据 compression 的设置进行适当的压缩。

  目前视频的最大长度默认为 15s，未来可能会开放设置。

  视频也会根据 watermark的设置添加水印。
* source  
  
  照片来源

|取值|说明|
|---|---|
|0|默认值，从相机获取|
|1|从相册获取|
|2|从相机或者相册获取|

* watermark  
  
照片水印，支持返回String类型值的flycode，返回值即为水印需要显示的内容，可以在返回的字符串中插入换行符\\n 来达到换行的效果。  
  
如果该属性为空，默认使用当前的时间作为水印（默认水印获取失败时不返回错误信息）。  
  
水印同时支持返回错误提示信息，即当水印无法正常生成时，可以通过返回指定格式的字符串，来标识获取水印失败。当水印获取失败后，  
  
错误提示字符串的格式为：\_\_error: +hit message，例如：

  ```
     json
  "__error:尚不能获取地址信息，请稍候再试。"
  "__error:请先选择需要投放的终端。"
  ......
  ```

  水印生成的时机  
  
用户在每次确认获取的照片时（即使用相机拍摄成功并确定使用照片时，或者使用相册确定选择了某张照片时），生成该照片的水印。  
  
如果水印获取失败，即返回了错误信息时，需要显示该错误信息，并中断后续的操作。此时需要提供一个提示选项，让用户选择放弃此次获取的图片，或者再次尝试获取水印。  
  
直到正确获取水印后才能真正使用照片。

* watermarkposition  
  
指定水印显示位置，默认值为 bottom

|值|说明|
|---|---|
|bottom|下方，左对齐，占据左边三分之二的区域|
|center|居中，左对齐，占据左边三分之二的区域|
|top|上方，左对齐，占据左边三分之二的区域|
|||
* watermarkstyle  
  
  水印显示的样式，默认值为 clear

|值|说明|
|---|---|
|clear|直接覆盖在图片之上，白色，黑色阴影|
|darken|将使用dark blend模式，白色，黑色阴影|
|translucent|半透明，在clear的基础上添加60%的透明度|

字体大小目前为统一的算法：max(11, ceil(image.width/25))

* watermarkcomposite  
  
水印合成方式，默认值为 水印显示的样式，默认值为 blended。

|值|说明|
|---|---|
|blended|水印直接合成在原始图片上|
|attached|水印存储在照片的值当中，需要在显示的时候临时合成|

* consecutive  
  
临时属性，用于标记是否使用连续拍照相机。主要是用于过度期间测试新相机功能。等新相机稳定后则去除该属性。默认值为 `0` ，即使用旧相机。

* storage  
  
附件（图片，文件等）在后台的存储位置，用于指导所提交的数据中的附件的最终位置，影响其存储生命周期。

|值|标题|说明|
|---|---|---|
|storage|默认|默认值，兼容旧环境|
|storage-3m|临时|3分钟|
|storage-1d|1天|24小时|
|storage-1y|1年|365天|

详情请参看 [阿里云存储服务](http://172.16.0.141/aPaaS-OpenDoc/Markdown/blob/master/BizEngine/baseServ/file3rd.md)

## Value Format

```Json
[
    {
        "source": "xxxxx.jpg",
        "datetime": "845623154531",
        "watermark": "广州市天河区",
        "storage": "storage"
    }
]
```

* source

  存储图片文件的名称。

* datetime

  照片拍摄的时间的时间戳

* watermark

  照片的水印，只在 `watermarkcomposite == attached` 时有效

* storage

  照片存储位置。

  取值时，直接使用控件属性 `storage` 的值；赋值时优先使用该值进行图片下载。

## Value Component

* fileinfo

  获取文件的本地信息，包含完整路径和时间戳

  ```
  json
  [
    {
        "filepath": "",
        "datetime": "",
        "watermark": "广州市天河区",
        "storage": "storage"
    }
  ]
  ```

## 图片的上传与下载

## 交互

![](http://apaas.wxchina.com:8881/wp-content/uploads/photo-Animation1.gif)

![](http://apaas.wxchina.com:8881/wp-content/uploads/photo-Animation2.gif)