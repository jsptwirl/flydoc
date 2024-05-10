---
title: NumberInputRange
date: 2020-05-20T16:51:28
---

# NumberInputRange

![](http://apaas.wxchina.com:8881/wp-content/uploads/NumberRangeSample.png)

## Protocol

```json
{
    "type": "numberinputrange",
    "displaystyle": "calliper|input",
    "value": "{ \"min\": \"15\", \"max\": \"100\" }",
    "minus": "0",
    "decimaldigits": "0",
    "upperlimit": "",
    "lowerlimit": "",
    "thousandsseparators": "0",
    "unit": "个"
}
```

> minus, decimaldigits, upperlimit, lowerlimit, thousandsseparators, unit等属性参看number控件

* displaystyle

显示样式

|值|说明|
|---|---|
|input|默认值，输入框模式|
|calliper|滑块模式|

> 滑块模式下，upperlimit和lowerlimit必需设置，否则无法显示，且默认状态下的最大值 = upperlimit，最小值 = lowerlimit

## Component

可以通过值选项单独获取或设置最大值和最小值

|name|value|meaning|
|---|---|---|
|min|15|最小值|
|max|100|最大值|

## 必填校验

数字范围控件的必填校验规则是，必须最大最小值同时设置才算有值。

## Value

```Json
{
    "min": "15",
    "max": "100"
}
```