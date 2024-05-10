---
title: Date
date: 2020-05-20T16:58:48
---

# Date

日期选择控件，允许用户选择一个时间点，目前支持现在到某天，或者某分钟两种选择模式

![sample1](http://apaas.wxchina.com:8881/wp-content/uploads/DateSample.png)

![](http://apaas.wxchina.com:8881/wp-content/uploads/DateSample2.png)

## Protocol

```Json
{
    "type": "date",
    "title": "签约日期",
    "value": "moment().",
    "displaystyle": "normal|slider",
    "lowerlimit": "",
    "upperlimit": "",
    "unit": "day",
    "customoptions": [
        {
            "text": "上午",
            "key": "hour[7, 11]"
        },
        {
            "text": "下午",
            "key": "hour[13，17]"
        }
    ],
    "format": "auto",
    "hiddenclearbtn": "0"
}
```

* displaystyle

  显示样式【目前只实现了normal】模式

|样式名称|说明|
|---|---|
|normal|普通模式，即各系统默认的显示模式。年,月选择通常使用下拉框，或者滚轮。|
|slider|游标模式，使用游标选择，适合选项值较少的情况。|
|adjuster|微调模式，使用增减按钮，以unit为单位微调日期|
|calendar|日历模式，通常是弹出选择界面，方便用户快速选择日期。|

* lowerlimit

  下限，所能选取的日期的最小值，日期描述格式（详细请参看下方定义）

  默认值为空，表示不限制

* upperlimit

  上限，所能选取的日期的最大值，日期描述格式

  默认值为空，表示不限制，upperlimit不为空的时候，其值不能小于lowerlimit

  > 目前web端由于框架限制，当 unit 为 year，pureyear是，上下限设置暂时无效

* unit

  选择单位，决定了控件能够控制的时间精度。支持以下单位

|单位|含义|显示值示例|
|---|---|---|
|year|年|2018|
|pureyear|年（不包含其他时间单位）|2018年|
|month|月|2018-10|
|puremonth|月（不包含其他时间单位）|10月|
|day|天，默认值|2018-10-01|
|week|年周，以年为上级单位【暂未实现】|2018-10-01 至 2018-10-07|
|hour|小时【暂不实现】|2018-10-01 10|
|minute|分钟|2018-10-01 10:10|
|quarter|刻钟，以15分钟为最小单位【暂未实现】|2018-10-01 10:15|

* customoptions

  【暂不支持】

  自定义单位，在unit的基础上进一步自定义更小的时间单位，例如协议中示例的上午和下午的定义。

  * text

    自定义选项的显示名

  * key

    自定义选项所代表的时间值，使用[时间表达式](../../Appendix/时间表达式.md)表达，其单位应小于 `unit` 所规定的时间单位

  > 自定义单位目前只在unit = year / month / day 时有效

* value

  使用[时间表达式](../../Appendix/时间表达式.md)，默认值为 `day(0)` ，表示当前时间，空值表示没有默认的日期值，需要显示placeholder

* format

  值显示的格式化方式

  `unit = day` 时，默认值为 `yyyy-MM-dd`

  `unit = minute` 时，默认值为 `yyyy-MM-dd hh:ss`

  完整取值选项为：

|标题|值|示例|
|---|---|---|
|年|yyyy|2018|
|月|yyyy-MM|2018-01|
|日|yyyy-MM-dd|2018-01-10|
|时|yyyy-MM-dd HH|2018-01-10 10|
|分|yyyy-MM-dd HH:mm|2018-01-10 10:25|
|秒|yyyy-MM-dd HH:mm:ss|2018-01-10 10:25:55|


  如果值为 `auto` ，可用于自动格式化过去的时间，具体规则如下

|距离当前的时间|显示的时间内容|示例|
|---|---|---|
|当天 且 小于 2分钟|显示刚刚|刚刚|
|当天 且 小于 1小时|mm分钟前|20分钟前|
|当天 且 大于等于一小时|上午/下午 h:mm|下午 6:00|
|昨天|昨天 a h:mm|昨天 下午 6:22|
|前天|前天 a h:mm|前天 上午 9:10|
|前天之前|yyyy-MM-dd HH:mm|2017-06-23 18:40|

* hiddenclearbtn

  是否能清除已选择的数据，默认值为 `0` ，表示可以清除。

## Value

`date` 为单值控件，其值为所选日期的时间戳的字符串

```Json
1503474204557
```

> 小于unit指定的单位的部分的值为未定义的值，无意义，例如 unit=day 时，值里面的时分秒数据无意义，可以是任何值
>
> Web端: 小于unit指定的单位的部分的值为开始值(startOf), 如2021年2月的值为: 2021:02:01 00:00:00的时间戳

如果单位是 `pureyear` ，其默认返回值为单纯的年份：

```json
2019
```

如果单位是 `puremonth`，其默认返回值为单纯的月份：

```json
2
```

## Component

以下除了 `text` ，其余的只用于取值，不用于赋值

|类型|返回值示例|说明|
|---|---|---|
|text|2018-10-22|返回控件的显示字符串，即根据format格式化之后的字符串|
|rangetext|2018-10-01, 2018-10-31|【暂不支持】根据unit的值，生成对应的起止时间的文本|
|rangevalue|1503474204557, 1503478656884|【暂不支持】根据unit的值，生成对应的起止时间的时间戳|
|year|2018|返回年份数字|
|month|10|返回月份数字|
|day|22|返回日数字|
||||
||||