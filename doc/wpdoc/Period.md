---
title: Period
date: 2020-05-20T16:48:32
---

# Period

时期选择控件，允许用通过描述性的选项，来选择一段时间区间。

例如以下情形

|描述|取值（格式化之后）|
|---|---|
|今年|2017-1-1 00:00,2017-12-31 00:00|
|前天|2017-5-8 00:00,2017-5-8 11:59|

同时也允许用户进行自定义时间区间，此时的行为就和DateRange一致，只不过

![sample1](http://apaas.wxchina.com:8881/wp-content/uploads/PeriodSample.png)

## Protocol

```json
{
    "type": "period",
    "title": "时期选择",
    "value": "",
    "customizable": "1",
    "max": "",
    "min": "",
    "unit": "day",
    "format": "",
    "displaystyle": "dropdown",
    "options": [
        {
            "text": "过去7天",
            "key": "day(-7, -1)"
        },
        {
            "text": "过去30天",
            "key": "day(-30, -1)"
        },
        {
            "text": "上个月",
            "key": "month(-1)"
        }
    ]
}
```

* customizable

  是否可以自定义，Bool值

  当该值为1的时候，需要自动在选项中增加 `Customer` 选项

* max, min, unit, format

  这些属性和 `daterange` 中的含义一致，并且只在自定义选项中起效

* displaystyle

  显示模式，目前支持两种取值

|取值|含义|
|---|---|
|dropdown|下拉显示，类似于 `dropdownbox`|
|button|按钮显示，类似于 `selectbox` 的 button 模式|

* options

  选项集合，目前该控件只支持固定选项，不支持动态选项

  * text

    显示文字，用于描述时期

  * key

    时期的实际值，为了和其他选择控件的协议保持一致，依然使用 `key` 作为属性名称。

    该值接受日期描述格式进行赋值

## Component & Value

取值方式参看[daterange](daterange.md)