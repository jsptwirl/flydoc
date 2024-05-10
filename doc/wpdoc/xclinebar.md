---
title: xclinebar
date: 2020-05-20T13:53:52
---

# xclinebar 柱线图表

指使用平面坐标系x轴，y轴等为基准的，图形化(支持柱，线两种)的展示多组数据的方式。

柱线图表通常由一个x轴，一个或两个y轴，共同定义一个平面坐标系，在其内部，可以使用线图，柱图等图形来表示一组或多组数据。

> 柱线图中，柱图数据对应左边的y轴；线图在没有柱图时对应左边的y轴，有柱图时对应右边的y轴。
>
> 柱线图中的数据依次根据bars和lines中的series序列进行赋值。

[![](http://apaas.wxchina.com:8881/wp-content/uploads/axialPlane-1.png)](http://apaas.wxchina.com:8881/2020/05/20/xclinebar/axialplane-2/)

# 协议

```json
{
    "type": "xclinebar",
    "code": "axialplane_control_code",
    "title": "柱线点混合图",
    "showlegend": "1",
    "showxaxis": "1",
    "showyaxis": "1",
    "palette": "sequential",
    "xaxis": {
        "title": "日期"
    },
    "showtypes": [ "bar", "line" ],
    "bar": {
        "style": "smooth",
        "showvalue": "1",
        "direction": "vertical",
        "yaxistitle": "销售额",
        "yaxisformatter": "{value}元",
        "series": [
            {"title": "累计1"},
            {"title": "累计2"}
        ]
    },
    "line": {
        "style": "smooth",
        "showvalue": "0",
        "yaxistitle": "完成率",
        "yaxisformatter": "{value}%",
        "series": [
            {"title": "完成率"}
        ]
    },
    "eventlist": [
        {
            "trigger": "onload",
            "handler": ""
        },
        {
            "trigger": "onclicked",
            "handler": ""
        },
        {
            "trigger": "onclickdetail",
            "handler": ""
        }
    ]
}
```

## 属性说明

### showlegend 显示图例

是否显示图例，bool型数据，默认值为 `1`， 表示显示。

图例显示规则参看 \[UI说明\](xclinebarUI规则说明.md ) 。

### showxaxis 显示x轴

是否显示x轴，bool型数据，默认值为 `1`， 表示显示。

### showyaxis 显示y轴

是否显示y轴，bool型数据，默认值为 `1`， 表示显示。

### palette 调色板

调色板，用于确定各个数据序列的显示颜色。

调色板的颜色会先依次使用在柱图上，再依次使用在线图上

具体参看 [调色板](调色板.md) 说明。

### showtypes

用于IDE控制配置信息，用于控制是否包含对应的图表元素，前端和手机端可以无需理会。

默认值都为空，表示不包含。

### bar 柱状图信息

设置柱图数据显示的相关属性

* style

  【暂不支持】

  参看 [xcbar](xcbar.md) ， 默认值为 `smooth`

* showvalue

  控制所有柱图是否显示数据，默认值为 `1` ，表示需要显示

* direction

  柱图方向，默认值为垂直方向，如果配置了水平方向，将不会支持线图的显示。

* yaxistitle y轴标题

  y轴的标题，不能为空

* yaxisformatter y轴数据格式

  y轴数据显示规则，支持简单的表达式，用于设置y轴数据的实际显示值。

  表达式规则如下：`{value} + [suffix]` 。其中 `{value}` 表示值的字符串形式，`suffix` 是一个跟在值后面的字符串，可以为空。

  该属性可以为空，空的时候表示为默认值 `{value}`

  ```
  // 百分比
  {value}%

  // 货币，千分位+单位
  {value.ts3}万元
  ```

* series

  柱图的数据序列的相关属性，如果该属性为空，表示没有柱状数据。

  数据列的显示规则请参看 [数据列显示规则](#数据列显示规则) 。

  * title

    数据列的标题，不能为空

### line 线状图信息

设置线图数据显示的相关属性，相关属性参看 bar

### xaxis x轴

设置x轴的相关属性。目前只支持配置一条x轴，且必须要有一条。

* title

  x轴的标题，可以为空，表示没有标题

x轴的UI显示规则参看 [x轴显示规则](#x轴显示规则) 。

## 事件说明

### onclicked 点击事件

【暂不支持】

点击整个报表控件时触发，不自动附带传递参数

### onclickdetail 数据点击事件

【暂不支持】

点击某个数据行的详细信息时候触发，默认传递该数据行的数据

> 如果同时配置了 onclicked 和 onclickdetail ，将会只响应 onclicked 事件。

## y轴数据计算规则
[# 赋值说明

## 配置赋值

支持对x轴，图表数据，以及参考线数据等进行配置。

完整的数据结构如下：

```json
{
    "kx_chartdata": [
        {
            "datename": "周一",
            "date": "136542145315",
            "value1": "3500",
            "value2": "4000",
            "value3": "25"
        },
        {
            "datename": "周二",
            "date": "136542148654",
            "value1": "1500",
            "value2": "2100",
            "value3": "41"
        }
    ]
}
```

使用setter进行赋值，具体设置如下：

```json
"setter": [
    {
        "name": "kx_chartdata",
        "datatype": "0",
        "ctrlcode": "axialplane_control_code", // 报表控件的code
        "properties": [
            {// xaxis的内存值，可用于点击传参
                "name": "date",
                "alias": "",
                "ctrl": {
                    // code 和 component 同时为空表示该值是一个内存值
                    "code": "",  
                    "component": ""
                }
            },
            {// 设置xaxis的显示值
                "name": "datename",
                "alias": "",
                "ctrl": {
                    // code 为空，component 不为空表示该值会绑定到一个可显示的数据项中
                    "code": "",  
                    "component": "xaxis"  // xaxis 代表横轴
                }
            },
            // 设置各个serie的值
            {
                "name": "value1",
                "alias": "",
                "ctrl": {
                    "code": "", 
                    "component": "series0"   // 对应"series"字段中的第一个柱状图或线图
                }
            },
            {
                "name": "value2",
                "alias": "",
                "ctrl": {
                    "code": "",
                    "component": "series1"  // 对应"series"字段中的第二个柱状图或线图
                }
            },
            {
                "name": "value3",
                "alias": "",
                "ctrl": {
                    "code": "",
                    "component": "series2" // 对应"series"字段中的第三个柱状图或线图
                }
            }
        ]
    }
]
```

## flycode赋值

```js
// 原始数据赋值
var rawData = [ 
  {
      "datename": "周一",
      "date": "136542145315",
      "value1": "3500",
      "value2": "4000",
      "value3": "25"
  },
  {
      "datename": "周二",
      "date": "136542148654",
      "value1": "1500",
      "value2": "2100",
      "value3": "41"
  }
];
var setter = ArrayCtrlSetter("chartsetter");
setter.append("datename", null, "xaxis");
setter.append("date", null, null);
setter.append("value1", null, "series0");
setter.append("value2", null, "series1");
setter.append("value3", null, "series2");
chartCtrl.reload(rawData, setter);
```]()