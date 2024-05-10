---
title: FilterControls
date: 2020-05-20T16:12:56
---

# Filter Controls

## Summary

### Search

|Type|Name|Usage|
|---|---|---|
|searchbar|搜索框|用于关键字模糊匹配|

### Sort

|Type|Name|Usage|
|---|---|---|
|sortbutton|排序按钮|单个排序条件选择，以按钮形式展现|
|sortbox|排序盒子|罗列多个预定好的排序条件，只能选择其中一个|

> 排序控件的值的类型，均为枚举类型 `sort`

## Protocol

### filtertextinput

```json
{
    "type": "filtertextinput",
    "title": "",
    "historyenable": "",
    "placeholder": ""
}
```

* historyenable

  指定是否支持历史记录，默认值为0，表示不支持。

  如果值为1，表示支持历史记录，则当用户在输入的时候，需要能够显示当前表单所对应的本地历史搜索记录；同时用户在完成录入进行搜索的时候需要把此次搜索条件记录下来。

### sortbutton

```json
{
    "type": "sortbutton",
    "title": "",
    "text": "销量",
    "value": ""
}
```

### sortbox

```Json
{
    "type": "sortbox",
    "title": "排序",
    "style": "full | fold",
    "options": [
        {
            "component": "date",
            "text": "最新",
            "value": "desc"
        },
        {
            "component": "sales",
            "text": "最畅销",
            "value": "desc"
        }
    ]
}
```