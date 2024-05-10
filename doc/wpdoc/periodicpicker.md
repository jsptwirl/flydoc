---
title: periodicpicker
date: 2020-05-20T16:47:11
---

# periodicpicker 周期选择

用于选择一个时间周期，例如：每月1号，每年10月3日早上8点，每天早上8:30等等

## UI 示例

根据 combinedunit 所包含单位数量增减选择列

![](http://apaas.wxchina.com:8881/wp-content/uploads/periodicpicker.png)

## 协议说明

```json
{
    "type": "periodicdicker",
    "combinedunit": "day-minute"
}
```

### combinedunit

支持选择的最小时间单位和最大时间单位，目前支持的单位组合有

|值|标题|取值范围|取值示例|显示示例|
|---|---|---|---|---|
|hour|时|0 - 23|16|每天下午4点|
|day|日期|1 - 31|16|每月16号|
|month|月|1 - 12|10|每年10月|
|hour-minute|时-分|hour：0 - 23，minute：0 - 59|8:30|每天早上8点30|
|day-minute|天-分|day, hour, minute 取值范围同上|10 8:30|每月10号早上8点30|
|month-minute|月-分|month,day, hour, minute 取值范围同上|1-1 23:59|每年1月1号晚上11点59分|

> 所有单位为day的值，如果设置的值大于28时，需要进行特殊处理：
>
> 后台服务：当月的天数小于设置的值（例如设置为每月30号，但当前月为二月，只有28天），此时对应的业务逻辑需要自动将其处理为当月最后一天（也就是28号）。
>
> 前端界面：只要日期大于28，就需要给出提示，具体UI如下
>
> ![](http://apaas.wxchina.com:8881/wp-content/uploads/periodicpicker2.png)

## Value

控件返回的值是一个字符串