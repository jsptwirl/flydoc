---
title: xcbar
date: 2020-05-20T13:57:02
---

# xcbar

只显示一个系列的数据，支持放置在数组型控件中，只支持序列化赋值

![](http://apaas.wxchina.com:8881/wp-content/uploads/XCBarSample.png)

# 协议

```json
{
    "type": "xcbar",
    "title": "销售金额",
    "color": "blue",
    "style": "smooth",
    "direction": "vertical",
    "eventlist": [
        {
            "trigger": "onclicked",
            "handler": ""
        }
    ]
}
```

## 属性说明

### color 柱状颜色

柱图的颜色，默认值为 blue 。

### style 柱状样式

【暂不支持】

设置柱状的显示样式，支持以下取值

|值|说明|
|---|---|
|distinct|显示矩形，默认值|
|smooth|显示圆角矩形，圆角半径为矩形宽度的一半|

![](http://apaas.wxchina.com:8881/wp-content/uploads/XCBarStyle.png)

### direction 方向

设置柱状的显示方向，支持以下取值

|值|说明|
|---|---|
|vertical|垂直，默认值|
|horizontal|水平，适合x轴title教长的情况|

# 赋值

## 序列化赋值

参看 \[xcpie\]([http://apaas.wxchina.com:8881/2020/05/20/xcpie/](http://apaas.wxchina.com:8881/2020/05/20/xcpie/) )

## 配置赋值

参看 \[xcpie\]([http://apaas.wxchina.com:8881/2020/05/20/xcpie/](http://apaas.wxchina.com:8881/2020/05/20/xcpie/) )

## UIFlyCode赋值

参看 \[xcpie\]([http://apaas.wxchina.com:8881/2020/05/20/xcpie/](http://apaas.wxchina.com:8881/2020/05/20/xcpie/) )