---
title: xcrank
date: 2020-05-20T14:04:55
---

# xcrank 排序指示器

使用生动化的

![](http://apaas.wxchina.com:8881/wp-content/uploads/rank.png)

## 协议说明

```json
{
    "type": "xcrank",
    "value": "70",
    "style": "text",
    "fontsize": "14",
    "fontweight": "normal"
}
```

### value

当前的序号值，只接受大于1的正整数，空的时候不显示为 `-`

### style

控制前三名显示样式，目前支持以下样式：

|值|说明|
|---|---|
|cup|使用奖杯图标|
|crown|使用皇冠图标|
|medal|使用奖牌图标|
|text|使用文字的不同颜色|

具体的前三名的颜色值分别为：

|排名|颜色值|
|---|---|
|1|F5BA48|
|2|AEB3C5|
|3|F59E74|

### fontsize

数字字体大小，前三名图像和字体显示大小会有所不同，具体关系如下，具体关系如下

|style|icon height|font size（前三名）|
|---|---|---|
|cup|floor(fontsize \* 1.45)|floor(fontsize \* 0.78)|
|crown|floor(fontsize \* 1.45)|floor(fontsize \* 0.78)|
|medal|floor(fontsize \* 1.67)|floor(fontsize \* 0.78)|
|text|无|fontsize|

## 取值与赋值规则

参看 xcprogress