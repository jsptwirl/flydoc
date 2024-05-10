---
title: Icon
date: 2020-05-20T17:20:23
---

# Icon

图标控件，用于展示应用内置图标的控件。

![iconSample1](http://apaas.wxchina.com:8881/wp-content/uploads/iconSample1.png)

## 属性说明

```Json
{
    "type": "icon",
    "code": "1112120000013",
    "iconfont": "",
    "value": "position_gray",
    "color": "",
    "fontsize": "",
    "width": "",
    "height": "",
    "bgcolor": "",
    "bgstyle": ""
}
```

### iconfont

图标字体，相当于图标集，目前只支持默认

|value|说明|
|---|---|
|def\_web|web端内置图标库。|
|def\_mobile|手机端端内置图标库。|

当iconfont为空时，web端的默认值为 `def_web`， 手机端的默认值为 `def_mobile`

### fontsize

图标字体大小，默认值为14，该值决定了图标的大小

> width 和 height 决定了图标控件的大小，具体表现是，width 和 height 决定了背景大小，而图标居中，大小由 fontsize 决定

### bgcolor

指定背景颜色，当 `bgstyle == none` 时，该设置无效

### bgstyle

指定背景样式，有以下取值

|取值|显示文本|含义|示例|
|---|---|---|:---:|
|none|无背景|默认值，直接显示图标，此时控件的尺寸就是图标的尺寸|![](http://apaas.wxchina.com:8881/wp-content/uploads/icon.png)|
|circle|圆形|使用高度的一半作为圆角半径|![](http://apaas.wxchina.com:8881/wp-content/uploads/icon_circle.png)|
|round|圆角矩形|默认圆角dp为3|![](http://apaas.wxchina.com:8881/wp-content/uploads/icon_rrect.png)|
|rectangle|矩形|无圆角|![](http://apaas.wxchina.com:8881/wp-content/uploads/icon_rect.png)|

## 取值

简单文本信息，即为图标的名称

如果名称前面有 `#` 前缀，则代表是Unicode码，使用图标字体库中的图标字体。此时使用宽高的最小值作为字体大小（如果有背景，还要按比例缩放，参看下方示例）。

## 赋值

使用图标的名称进行赋值

## Icon 缩放示例

> 废弃，使用fontsize控制图标大小

当有背景的时候，需要自动等比缩放图标的尺寸，使其宽高都不大于控件宽高的一半。

示例如下

![](http://apaas.wxchina.com:8881/wp-content/uploads/icon_size.png)