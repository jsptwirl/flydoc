---
title: xcprogress
date: 2020-05-20T14:02:42
---

# xcprogress 进度条

## 协议说明

```json
{
    "type": "xcprogress",
    "title": "今日拜访量",
    "refvalue": "100",
    "value": "70",
    "unit": "家",
    "style": "line",
    "linewidth": "6",
    "template": "none",
    "linecolor": "",
    "colormap": [
        {
            "limit": "60%",
            "color": "red-yellow"
        },
        {
            "limit": "100%",
            "color": "green-blue"
        }
    ]
}
```

### refvalue 参照值

用于计算的除数，也会显示在参照值label上。

可以为空，表示需要外部设置该值，默认为空。

### value 值

用于计算的被除数，也会显示在实际值label上。

可以为空，表示需要外部设置该值， 默认为空。

### unit 单位

该控件的值的单位，用于显示，默认为空。

### style 显示样式

|值|说明|
|---|---|
|line|显示为线装进度条，默认值|
|circle|显示为环状进度条|
|arch|显示为圆拱|

### linewidth 线宽

指精度条的线宽，默认值为 6pt

### template 显示模板

内置的显示模板，具体参看下方说明，默认值为 `simplify`

### colormap 颜色表

用于控制在不同的值的情况下，进度条的颜色。当没有配置时，默认使用 green

颜色表的值必须按照显示的顺序排列。

* limit

  颜色起效的边界值的上限，下限为上一个颜色值的上限，如果是第一个值，则下限为0%。

  目前只支持百分比。

  例如 `60%` 指 `[prev limit, 60%]`

* color

  当前条件下的颜色值，详细可参看颜色值设置说明

示例：进度完成60%以下为黄色，90%以下为蓝色，其余为是绿色，则 colormap 属性的值为：

```json
"colormap": [
    {
        "limit": "60%",
        "color": "yellow"
    },
    {
        "limit": "90%",
        "color": "blue"
    },
    {
        "limit": "100%",
        "color": "green"
    }
]
```

## 取值与赋值规则

### Component 分量值

|component 值|作用|
|---|---|
|refvalue|给 refvalue 属性赋值，会触发重新计算和绘制|

### 序列化值

|序列化值示例|说明|取值关键字|
|---|---|---|
|70|给当前值赋值|value或者空|
|{"value": "70", "refvalue": "100"}|同时给当前值和参考值赋值|fullvalue|

## 显示模板说明

显示模板是一组内置的显示样式，示例如下，在模板工作下，显示文字的颜色，大小，还有位置都是有控件自主控制，不能设置。

![](http://apaas.wxchina.com:8881/wp-content/uploads/progress.png)

|模板值|显示说明|
|---|---|
|percent\_ref|显示百分比，参照值，进度条|
|value\_ref|显示当前值，参照值，进度条|
|percent|显示百分比，进度条|
|value|显示当前值，进度条|
|simplify|显示进度条，默认值|

> 标题和单位是否显示不通过这个属性控制，直接设置对应属性为空既可隐藏标题。

### 字体设置规则

在 `line` 模式下，字体大小固定

在 `circle` 模式下，字体需要根据圆环大小动态计算，规则如下：

```
主要值的字体大小 = max(floor(圆环直径/3), 11)
其他值的字体大小 = max(floor(主要值的字体大小/2), 8)
```