---
title: Image
date: 2020-05-20T17:17:58
---

# Image

用于显示图片的控件，可以用于展示产品示意图，或者显示头像等，只接受一个图片地址，自动下载显示，并能根据名称自动缓存图片。

![imageSample1](http://apaas.wxchina.com:8881/wp-content/uploads/imageSample1.png)

### Protocol

```json
{
    "type": "image",
    "value": "http://xxxxxx.png",
    "width": "100",
    "height": "100",
    "aspectratio": "",
    "thumbenable": "0",
    "enlargeable": "0",
    "masktype": "",
    "displaymode": "",
    "eventlist": [
        {
            "trigger": "onclicked",
            "handler": "213213254545"
        }
    ]
}
```

* value

  支持两种格式：

  1. 完整路径

     根据完整的路径直接下载图片，图片根据文件名称进行缓存。

  2. 相对路径

     根据通用的图片路径组装规则进行组装，然后下载。

     相对路径目前是以json形式提供，通常都是由业务行为获取然后赋值。

     即：**缩略图**`IP + "/thumbs" + "/img" + 相对路径` ，**原图**`IP + "/file" + "/img" + 相对路径`

     本地缓存需要避免文件名可能重复的问题。

* thumbenable

  是否显示缩略图，默认为 `0`。

  如果可以显示，会先加载缩略图。此时 如果 enlargeable == 1 ，那么将不会自动下载大图，需要点击查看时下载原图；否则将在缩略图加载后，自动根据实际情况加载原图

  只有相对路径支持缩略图显示

* enlargeable

  是否能显示大图，默认为 `0`，如果可以显示，则点击后可以全屏显示大图，同时会屏蔽 `onclicked` 事件。

* masktype

  遮罩层样式，默认值为 `round`

|值|显示文本|含义|
|---|---|---|
|none|无，即矩形，默认值||
|round|圆角矩形|默认的圆角半径为5|
|circle|圆形||

* aspectratio

  主要用于移动端，float类型的值，指明宽高比，即其值为 `宽度/高度`，用于控制控件尺寸 ，例如 `aspectratio == 2` 表示宽度为高度的两倍。默认值为空，表示不设置固定的宽高比，根据控件的其他flex属性决定控件尺寸

* displaymode

  只在aspectratio有值的情况下有效，如果aspectratio没有值，则默认使用 `aspectfit` 方式

|值|含义|
|---|---|
|fill|拉伸图片，完整显示图片并充满显示区域，默认值|
|aspectfill|保持宽高比拉伸图片，需要充满显示区域，同时居中显示|
|aspectfit|保持宽高比拉伸图片，需要完整显示图片，同时居中显示|

### 图片加载时序

* 本地已缓存图片

  ![imageLoadFlow1](http://apaas.wxchina.com:8881/wp-content/uploads/imageLoadFlow1.png)

* 本地已缓存缩略图片

  ![imageLoadFlow2](http://apaas.wxchina.com:8881/wp-content/uploads/imageLoadFlow2.png)

* 本地未缓存图片

  ![imageLoadFlow3](http://apaas.wxchina.com:8881/wp-content/uploads/imageLoadFlow3.png)

### UI Sample

![imageSample2](http://apaas.wxchina.com:8881/wp-content/uploads/imageSample2.png)

### UI Annotation

### Sample