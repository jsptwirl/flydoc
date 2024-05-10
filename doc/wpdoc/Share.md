---
title: Share
date: 2020-05-22T15:56:05
---

# Share

分享行为，在手机端可以以图片形式分享到微信等应用，在web端直接生成PDF文件下载到本地

```json
{
    "code": "897995503285964871",
    "type": "share",
    "desc": "分享指定的控件",
    "provider": "somectrlcode",
    "imagewidth": ""
}
```

* provider

  分享内容的提供者，可以是需要分享的控件的code，也可以是整个表单*（使用指定的关键字 `__page`）*

  默认值为 `__page` ，即分享整个表单可分享的内容。

* imagewidth

  分享出去的图片的宽度，没有设置的时候，默认为当前显示的宽度。只在分享的内容是图片的时候有效。

  通常用在希望分享出去的图片更宽一点，内容能更紧凑一点

## 分享内容说明

目前所有的分享都以图片形式进行，需要支持分享内容的控件包括：

|控件|手机端|web端|
|---|---|---|
|webview|完整截图|pdf|
|InteractiveWebView|完整截图|pdf|
|\_\_page|完整截图|pdf|
|photo|控件中指定的一张或多张照片||
|richtexteditor|完整截图|pdf|