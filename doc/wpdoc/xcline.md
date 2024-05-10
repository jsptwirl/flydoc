---
title: xcline
date: 2020-05-20T13:58:44
---

# xcline

只支持一个数据系列的简化版线图，支持多种样式搭配。

主要用于数据生动化，不用于实际显示数据交互。

![](http://apaas.wxchina.com:8881/wp-content/uploads/xline_fill.png)

## 协议

```json
{
    "type": "xcline",
    "title": "下属门店销售金额概览",
    "color": "blue",
    "style": "smooth",
    "fill": "none",
    "eventlist": [
        {
            "trigger": "onclicked", //暂不支持
            "handler": ""
        }
    ]
}
```

### color 线条颜色

线条颜色，默认为blue，线条固定显示为 2pt 宽度的线条。

### style 线条样式

设置线条的显示样式，支持以下取值

|值|说明|
|---|---|
|distinct|显示为折线|
|smooth|显示为曲线，默认值|

![](http://apaas.wxchina.com:8881/wp-content/uploads/xline_style.png)

### fill 填充样式

设置线条下方的填充样式，支持以下取值

|值|说明|
|---|---|
|none|无填充，默认值|
|gradient|渐变填充，以linecolor为起始色，white为终止色|
|transgradient|透明渐变填充，以linecolor为起始色，white为终止色，30%的透明度|
|solid|单色填充，使用linecolor进行填充|
|transsolid|透明单色填充，使用linecolor进行填充，30%的透明度|

![](http://apaas.wxchina.com:8881/wp-content/uploads/xline_fill.png)

## 序列化赋值

参考 [pie](http://apaas.wxchina.com:8881/2020/05/20/xcpie)

## 配置赋值

参考 [pie](http://apaas.wxchina.com:8881/2020/05/20/xcpie)

## UIFlyCode赋值

参考 [pie](http://apaas.wxchina.com:8881/2020/05/20/xcpie)