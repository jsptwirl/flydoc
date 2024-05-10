---
title: xcpie
date: 2020-05-20T13:59:53
---

# xcpie

![](http://apaas.wxchina.com:8881/wp-content/uploads/pie1.png)

## 协议

```json
{
    "type": "xcpie",
    "title": "考勤概览",
    "datatitle": "次数",
    "hollow": "0",
    "palette": "",
    "showlegend": "1",
    "showpercentage": "1"
}
```

### hollow

空心圆，默认值为 `0` ，表示绘制为实心圆

为 `1` 时绘制为空心圆环，圆环宽度为圆半径的二分之一

### palette

调色板，确定每个data显示的图形颜色，控件会依次应用调色板上的颜色，如果数据超过调色板的颜色数量，则会循环使用颜色。

具体参看 [调色板](http://apaas.wxchina.com:8881/technology/144) 说明。

### showlegend

是否显示图例，默认为 1，显示 。

### showpercentage

是否显示百分比，默认为 1，显示 。

## 配置赋值

该图表支持使用setter进行赋值，具体设置如下：

```json
{
    "kx_chartdata": {
        "piedata": "[ { \"series0\": \"21\", \"xaxis\": \"迟到\" },{\"series0\": \"40\",\"xaxis\": \"早退\" } ]"
    }
}
```

```json
"setter": [
    {
        "name": "kx_chartdata",
        "datatype": "0",
        "ctrlcode": "",
        "properties": [
            {
                "name": "piedata",
                "alias": "",
                "ctrl": {
                    "code": "piechart_control_code",        
                    "component": ""
                }
            }
        ]
    }
]
```

## UIFlyCode赋值

```js
var pie = Page.getCtrl('pieCtrl');

// 序列化字符串赋值
var serializeStrValue = "[ { \"series0\": \"21\", \"xaxis\": \"迟到\" },{\"series0\": \"40\",\"xaxis\": \"早退\" } ]";
pie.value = serializeStrValue;
```