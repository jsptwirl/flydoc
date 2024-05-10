---
title: SortButton
date: 2020-05-20T16:27:48
---

# SortButton

专门用于触发排序的按钮控件，通常只能配置在filter控件中。

![](http://apaas.wxchina.com:8881/wp-content/uploads/SortButtonSample.png)

## Protocol

```json
{
    "type": "sortbutton",
    "code": "sortbuttoncode",
    "text": "销量",
    "value": "",
    "valuesets": "",
    "color": "0x2E2E2E",
    "eventlist": [
        {
            "trigger": "onclicked",
            "handler": "delhandler"
        }
    ]
}
```

* value

  排序按钮的值有以下3种：

|value|meaning|
|---|---|
|desc|降序|
|asc|升序|
|nil|无排序|


  默认值为 `nil`

  > 无论 `valuesets` 中是否有 `nil` , 该控件的默认值均为 `nil`

* valuesets

  用于指定排序按钮的取值范围，使用以上3种值中的一个或多个，使用 `|` 分割符连接，来确定控件的取值范围。例如：`desc|asc` 表示控件只有两种取值，当点击该按钮时，该控件的值在这两个值之间来回切换。

  默认情况下，也就是该属性为空的情况下，使用全部值，即 `desc|asc|nil`

* color

  用于控制 `desc` 和 `asc` 两种值的显示颜色，`nil` 始终显示为灰色 `#6B6B6B`

## Value

直接返回value值，如：`"desc"` ，或者 `"nil"`