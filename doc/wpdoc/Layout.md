---
title: Layout
date: 2020-05-20T16:11:53
---

# Layout

布局 `Layout`，是专门用于控件。

支持布局容器的相关属性，请参看[Flex Layout 布局类枚举值](../../Appendix/EnumValue.md)

## Protocal

```json
{
    "type": "layout",
    "bgcolor": "",
    "bgimage": "",
    "mode": "",
    "flexdirection": "",
    "shape": "",
    "shadow": "0",
    "borderwidth": "",
    "bordercolor": "",
    "bordersides": "left|top|bottom|right",
    "eventlist": [
        {
            "trigger": "onclicked",
            "handler": "delhandler"
        }
    ],
    "content": []
}
```

### bgcolor

背景色，layout的默认背景色为透明。

### bgimage

【暂未实现】

背景图片，当设置了该值时，bgcolor将会被忽略。

目前只支持设置内置的图片，不支持图片下载

### shape

layout 的形状，支持以下几种取值

|value|说明|
|---|---|
|rect|矩形，默认值|
|roundrect|圆角矩形，圆角半径为8|
|round|圆形，会使用长宽中较小的一个值的一半作为圆角大小|

### border 边框

* width

  边框宽度，默认值为空，空或者0表示没有边框。

* color

  边框颜色，默认值为lightgray

* sides

  可见边的设置，默认值为 `left|top|bottom|right` ，没有设置的边不显示边框

  > 当shape == rect时，设置sides才生效，否则四边都会显示。

### shadow

阴影，默认为空，表示无阴影。

当值为1时表示有阴影，使用20%透明度的黑色，10dp的阴影半径，（0，5）的阴影偏移

> 当shadow == 1，且bgcolor和bgimage都为空时，需要默认使用白色作为背景色

### eventlist

`Layout` 只支持点击事件

## mode

**请参看[样式控制](../../../Layout/控件样式控制.md)**