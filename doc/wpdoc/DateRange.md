---
title: DateRange
date: 2020-05-20T16:57:26
---

# DateRange

提供选择一个时间段的能力的控件。

![](http://apaas.wxchina.com:8881/wp-content/uploads/DateRangeSample.png)

![](http://apaas.wxchina.com:8881/wp-content/uploads/DateRangeSample2.png)

## Protocol

```json
{
    "code": "",
    "type": "daterange",
    "title": "合同有效期",
    "displaystyle": "normal|calliper",
    "unit": "day",
    "value": "year(-1, 1)",
    "lowerlimit": "day(0)",
    "upperlimit": "day(0)",
    "mindiff": "",
    "maxdiff": "",
    "format": "HH:ss",
    "defranges": [
        {
            "text": "上周",
            "range": "week(-1, -1)"
        },
        {
            "text": "近三个月",
            "range": "month(-3, -1)"
        }
    ],
    "customoptions": [
        {
            "text": "上午",
            "key": "thishour(7, 11)"
        },
        {
            "text": "下午",
            "key": "thishour(13，17)"
        }
    ]
}
```

* lowerlimit，upperlimit，unit，format，displaystyle，customoptions

  这些属性请参考 [datepicker](Date.md) ，其含义和用途都是一致，只不过在 `daterange` 中这些属性会同时作用于开始时间和结束时间

  （web端: DateRange 暂不支持 unit 配置 month, year 属性）

* value

  和 `datepicker` 一样，支持时间表达式，具体参考 [datepicker](Date.md)

* mindiff

  (web端暂不支持)

  所能选择结束时间和开始时间最小差值，单位与 `unit` 保持一致，正整数，默认

  值为 `nil`

  示例如下：

  * `unit == day && maxdiff == 2` 意味着结束日期必须在开始日期的两天之后
  * `mindiff = nil` 表示开始时间和结束时间可以是相同的值

* maxdiff

  (web端暂不支持)

  所能选择结束时间和开始时间最大差值，单位与 `unit` 保持一致，正整数，默认值为 `nil`

  `maxdiff` 不为空的时候，其值不能小于 `mindiff`

  示例如下：

  * `unit == month && maxdiff == 0` 意味着结束时间必须与开始日期在同一月
  * `maxdiff = nil` 表示不限制

> 无论 mindiff 和 maxdiff 如何配置，都要保证 **结束时间 > 开始时间**

* defranges

  快捷范围集，用于配置快捷选中指定时间段的按钮集合。

  示例

|---|---|
|||

## 场景举例

**选择任意时间段**

```Json
{ "lowerlimit": "", "upperlimit": "", "mindiff": "0", "maxdiff":""}
```

**只能选择当天开始之后的60天范围内的某一天**

```Json
{ "lowerlimit": "day(0)", "upperlimit": "day(59)", "mindiff": "0", "maxdiff":"0"}
```

**只能选择当天开始之后的30天范围内的某7天**

```Json
{ "lowerlimit": "day(0)", "upperlimit": "day(29)", "mindiff": "6", "maxdiff":"6"}
```

**只能选择指定日期之后的1-3天时间**

```Json
{ "lowerlimit": "2017-07-02", "upperlimit": "", "mindiff": "0", "maxdiff":"2"}
```

## Component

|name|value|meaning|取值|赋值|
|---|---|---|---|---|
|start|1503474204557|开始时间戳|✅|✅|
|end|1503474204558|结束时间戳|✅|✅|
|text|"2018-10-01,2018-10-31"|格式化值|✅|✅|
|starttext|"2018-10-01"|开始时间格式化值|✅|✅|
|endtext|"2018-10-31"|结束时间格式化值|✅|✅|
||||||

> text 的取值受 format 属性影响，也就是说取值时，显示成什么格式就能获取到什么格式的数据；在赋值时就不用参看 format 属性，直接将字符串转换为日期
>
> 以上值选项目前只在手机端支持，web端暂不支持。

## Value

```json
{
    "start": "1503474204557",
    "end": "1503474204558"
}
```

## 两端统一性说明

start end:如果获取时间格式为2020-03-15，则获取的时间戳转为日期格式为：start：2020-03-15 00:00:00 end:2020-03-15 23:59:59  
即时间戳:

```json
{
    "start": "1584201600000",
    "end":"1584287999000"
}
```

添加说明：如果格式是：2020 2020-03 2020-03-16这样的，配置component为starttext，endtext，text取时间日期的，需要取到的值为：以text为例：“2020-01-01,2020-01-31”, 或“2020-03-01, 2020-03-31”, “2020-03-01 00:00:00, 2020-03-31 23:59:59”...

> 通过外部手段给控件进行赋值时，只要满足控件的限制条件，且用户没有手动更改过值，那么取值时就和赋值时保持一致。