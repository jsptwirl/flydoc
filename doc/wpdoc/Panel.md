---
title: Panel
date: 2020-05-20T16:10:58
---

# Panel

Panel是一种聚合控件，基本上是 `layout` 的增强模式，提供常用的一些功能，方便配置。

## Protocal 协议详解

```json
{
    "type": "panel",
    "title": "",
    "mode": "",
    "foldstatus": "",
    "flexdirection": "",
    "content": [

    ]
}
```

### hidden

与其他控件的hidden属性一样，用于控制是否显示控件，由于Panel内部还有其他控件，所以如果hidden=1，同时需要隐藏其内部的控件。

### title

通常情况下，该属性均为空，此时的`Panel`对于用户来说基本是透明的，如果设置了该属性，则认为需要显示标题。

### foldstatus

表示Panel的折叠状态，取值如下：

如果可以折叠，则`title`属性不能为空。

|取值|说明|
|:---|:---|
|空|默认值，表示当前为展开状态，不可折叠|
|0|表示当前为展开状态，可折叠|
|1|表示当前为折叠状态，可展开|

### mode

参看layout的mode属性

### content

参看layout的content属性

## UI 效果图

Panel的UI根据不同的displayMode属性，以及标题，折叠状态等，有以下几种效果

![img](http://apaas.wxchina.com:8881/wp-content/uploads/panelSample1.png)

### UI详细参数说明

下图为有标题状态，可折叠状态下的UI的详细参数，不可折叠时只需去除折叠按钮。

![img](http://apaas.wxchina.com:8881/wp-content/uploads/panelAnnotation1.png)

详细说明：

1. card状态下，其水平方向上有默认的margin，因此其水平方向上的各个参数和plain有细微差别，不过其垂直方向和plain基本保持一致。
2. 按钮点击区域，会局限在折叠图表附近，而不是整个标题行，这样会减少用户误点的可能。
3. 按钮点击区域会略大于图表大小，具体就是标题行的整个高度为基准的正方形区域，这样能兼顾UI的美观和点击的方便。（点击区域的规则同样适用的展开状态下的Panel）
4. 折叠和展开应尽量提供动画效果，以提供更加友好的操作体验。
5. 折叠和展开会导致Panel的尺寸发生变化，因此会触发其上级布局的尺寸变化，以及其下方的Ctrl的位置变化。

## Animation

![img](http://apaas.wxchina.com:8881/wp-content/uploads/panelAnimation1.gif)