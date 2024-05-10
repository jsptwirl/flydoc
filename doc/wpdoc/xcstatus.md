---
title: xcstatus
date: 2020-05-20T14:03:29
---

# xcstatus 状态指示器

![](http://apaas.wxchina.com:8881/wp-content/uploads/status.png)

目前支持的状态有三种：

|状态名|说明|状态颜色值|单位颜色值|
|---|---|---|---|
|rise|refvalue < value|green|lightgreen|
|stay|refvalue = value|darkgray|lightgray|
|down|refvalue > value|red|lightred|

## 协议说明

```json
{
    "type": "xcstatus",
    "title": "今日拜访量",
    "refvalue": "100",
    "value": "70",
    "unit": "家",
    "fontsize": "14",
    "fontweight": "normal",
    "style": "arrow"
}
```

### refvalue

用于对比当前值，确定状态，可以为空，空的时候状态固定位 `stay`

### value

当前值，空的时候不进行运算，状态为 `stay` ，显示为 `-`

### unit

参看 giprogress

### fontsize

会控制当前值的显示的字体大小，同时还会影响图标和单位的显示大小，公式如下

```js
arrow height = floor(fontsize * 0.7)
triangle height = floor(fontsize * 0.36)
unit font size = max(floor(fontsize * 0.6), min(fontsize, 12))
```

### style

控制显示样式，目前支持以下样式：

|值|说明|
|---|---|
|arrow|文字前方使用箭头表示状态|
|triangle|默认值，文字前方使用三角表示状态|
|text|使用文字的不同颜色表示状态|

## 取值与赋值规则

参看 xcprogress