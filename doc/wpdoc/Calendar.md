---
title: Calendar
date: 2020-05-20T17:04:57
---

# Calendar

日历控件用于使用日历进行单个日期选择，其功能类似于 `date` 控件，只不过 `calendar` 在表单中显示更多的信息，并且只能选择天。

![](http://apaas.wxchina.com:8881/wp-content/uploads/CalendarSample.png)

**带cell的日历**

![](http://apaas.wxchina.com:8881/wp-content/uploads/CalendarSample2.png)

**Day 模式**

![](http://apaas.wxchina.com:8881/wp-content/uploads/CalendarSimpleDay.png)

## Protocol

```json
{
    "type": "calendar",
    "value": "day(0)",
    "lowerlimit": "year(-1)",
    "upperlimit": "year(1)",
    "displaymode": "month|week",
    "hinttype": "dot",
    "eventlist": [
        {
            "trigger": "onload",
            "handler": ""
        },
        {
            "trigger": "onclicked",
            "handler": ""
        }
    ]
}
```

* value

  使用日期表达式设置默认选中的日期，默认为当天

* range

  用于指定所能选择的日期的范围，默认不限制

* displaymode

  显示模式，指定可以以哪几种显示模式进行显示，可以指定一个或多个模式，以 `|` 竖线分割。

  默认显示为指定模式中的第一个模式，空值代表只支持显示为月模式。

|模式值|名称|含义|
|---|---|---|
|week|周模式|以周为单位显示，左右滑动切换周|
|month|月模式|以月为单位显示，左右滑动切换月|
|year|年模式|暂时不支持|
|day|日模式|暂时不支持，以极简的显示单日的模式显示，左右点击切换天，中间点击弹出月模式的日历。（该模式下不支持配置cells，不支持与其他模式组合）|

  > 模式切换时，如果cells为空，或者cells的显示模式不是follow，则需要根据实际显示的大小，调整控件的大小，然后重新布局。

* hinttype

  快捷提示类型，用于指定直接显示在日历上的提示内容的类型。默认值为 `dot`

|type|含义|
|---|---|
|dot|显示一个小圆点|
|text|显示一段简短的文字|

  > 快捷提示是日历内置的特有显示内容，具体配置方式见下方说明

* celldisplaymode

  > 【废弃】

  详细内容显示模式，目前支持两种显示

|value|说明|
|---|---|
|popup|使用一个弹出框显示其内容，弹框大小根据其内容多少决定**（暂不实现）**|
|follow|详细内容显示在日历下方，即日历控件会分为两个显示部分，上方为日期显示，下方为内容显示。日期显示部分剩余就是内容显示区域，这要求日历控件本身的大小要足够同时显示这两部分内容|

* cells

  > 【废弃】

  详细内容的显示定义，这部分内容在选中某一天之后，根据其对应的数据进行显示。

  当配置了这部分内容后，点击某一天就不再触发 `onclick` 事件。

  > 目前设置为数组结构，预留多模板的支持

* eventlist

|trigger|说明|
|---|---|
|onload|加载时触发|
|onclicked|点击某一天，且cells内容为空时触发|

### Value

约定的字段 \_\_calendar\_date 可用于获取日期的时间戳

## Hint Component

目前日历只提供flycode方案进行数据赋值，快捷提示的内容也来源于日历控件的数据之中，其数据字段与显示的绑定关键字定义如下

|关键字|含义|值示例|
|---|---|---|
|\_\_calendar\_hint\_date|对应的日期，以时间戳为值|1515811194|
|\_\_calendar\_hint\_color|显示的颜色，默认为black|red|
|\_\_calendar\_hint\_text|显示内容，hinttype==dot时会忽略该值|233|

### 后台返回的数据结构

```json
[
    {
        "visitedate": "1503474204557",
        "storename": "天河好又多",
        "visitesummary": "xxxxxxxxx",
        "visitestatus": "1"
    },
    {
        "visitedate": "1503474254235",
        "storename": "天河7-11",
        "visitesummary": "xxxxxxxxx",
        "visitestatus": "0"
    }
]
```