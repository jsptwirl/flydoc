---
title: ShortVideo 短视频
date: 2021-03-19T09:53:34
---

# ShortVideo 短视频

一个支持采集和播放15s以内的视频的控件。

视频采集后输出为mp4格式的文件，其缓存，上传，下载方式与photo控件保持一致。

目前一个短视频控件只支持采集或播放一个视频，固定采集分辨率为1280 x 720 pixel，画面比例固定为16：9，默认拍摄时采集音频信息，支持横向拍摄，支持前置和后置摄像头切换。

短视频控件不支持配置在任何数组型控件中，不支持水印，不支持从相册选取。

## 配置支持

|客户端|是否支持配置|
|---|---|
|app端|支持|
|web端|支持，但仅支持播放|

## Protocol

```json
{
    "type": "shortvideo",
    "code": "",
    "title": "活动记录",
    "required": "", // web端不支持
    "readonly": "", // web端不支持
    "hidden": "",
    "storage": "" // web端不支持
}
```

* storage

  参看photo控件的定义

## Value

```json
[
    {
        "source": "xxxxx.mp4",
        "datetime": "845623154531",
        "latitude": "123.12345",
          "longitude": "123.12345",
          "address": "广州市天河区体育西路101号32楼",
        "storage": "storage"
    }
]
```

* source

  存储短视频文件的名称。

* datetime

  拍摄的时间的时间戳

* latitude , longitude, address

  拍摄的位置信息，控件将会默认自动在开始拍摄时获取定位信息。

  该信息不强制要求成功获取。

* storage

  视频存储位置。参看photo控件