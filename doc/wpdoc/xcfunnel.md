---
title: xcfunnel
date: 2020-05-20T13:37:28
---

# xcfunnel

![](http://apaas.wxchina.com:8881/wp-content/uploads/funnelFull.png)

![](http://apaas.wxchina.com:8881/wp-content/uploads/funnelHalf.png)

## 协议

```json
{
    "type": "xcfunnel",
    "title": "销售漏斗",
    "palette": "contrast",
    "style": "full",
    "data": [
        {
            "value": "10000",
            "name": "接洽客户"
        },
        {
            "value": "8000",
            "name": "展示"
        }
    ],
    "eventlist": [
        {
            "trigger": "onclickdetail",
            "handler": ""
        }
    ]
}
```

### palette 调色板

参看 [xcpie](xcpie.md)

### style 漏斗样式

设置漏斗的显示样式，支持以下取值

|值|名称|说明|
|---|---|---|
|equal|等比显示|等比显示，例如图1|
|scale|按比例显示|按比例显示，例如图2|
|ladder|梯状显示|显示为阶梯状，例如图3，4|

### data

参考 [pie](xcpie.md)

## 序列化赋值

参考 [pie](xcpie.md)

## 配置赋值

参考 [pie](xcpie.md)

## UIFlyCode赋值

参考 [pie](xcpie.md)

## 点击效果及UI说明

参看 [xcline](xcline.md)

![](http://apaas.wxchina.com:8881/wp-content/uploads/funnelClick.png)