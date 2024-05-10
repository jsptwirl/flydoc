---
title: List
date: 2020-05-20T16:00:35
---

# List

列表控件，适用于展示一组结构相同的数据。同时列表控件还支持链接，选择等功能。

![listSample2](http://apaas.wxchina.com:8881/wp-content/uploads/listSample2.png)

![listSample1](http://apaas.wxchina.com:8881/wp-content/uploads/listSample1.png)

## Protocol

```Json
{
    "type": "list",
    "code": "300000000000001",
    "flex": "1",
    "checkable": "0",
    "isradio": "0",
    "pageable": "1",
    "indicatortype": "0",
    "rows": {
        "type": "row",
        "flexdirection": "vertical",
        "eventlist": [
            {
                "handler": "handler_linkdetail",
                "trigger": "onclicked"
            }
        ],
        "content": [ "..." ]
    },
    "eventlist": [
        {
            "handler": "",
            "trigger": "onload"
        },
        {
            "handler": "",
            "trigger": "onrefresh"
        }
    ]
}
```

* onload

  列表初始化加载事件，通常绑定一个含有datarequest行为的事件，该行为的返回值为其提供数据。

* onrefresh

  手动刷新事件，通常绑定一个含有datarequest行为的事件，该行为的返回值为其提供数据。

* onclicked

  点击事件，是当某一行被点击的时候所执行的事件。

  当selectable==1，且clickEvent没有绑定事件的时候，点击一整行都可以选中或者取消选中；

  当selectable==1，且clickEvent绑定了事件的时候，只有点击checkbox区域才可以选中或者取消选中，点击其余位置继续执行点击事件。

* pageable

  是否支持分页，Bool值，默认为 `1` ，

* checkable

  是否可以选择，支持表达式，在数据中可以通过设置内置的 `__ischecked` 参数来控制某一行是否选中。

  * 默认值为0，表示不能选择
  * 1，表示可以进行选择

* isradio

  是否支持单选，Bool值，默认为 `0` 多选

  存在checkable: '1'时，交互模式为单选交互

* indicatortype

  行标识图标，在行最右面显示的图标

|值|含义|
|---|---|
|0|没有标识图标|
|1|详情标识|

### Rows

对于列表中每一行的具体的属性和内容

列表具体的显示内容，和普通的页面配置一致，可以使用所有的简单控件。

## Operations

### List Operations

* pageIndex

  获取当前的分页数据页码

* checkNumber

  获取当前勾选行的数量

* focusIndex

  获取当前的焦点行。

  > 焦点行即最近一次用户点击所处的行，即点击子控件时，焦点行为该子控件所在的行

### Row Operations

* insert

  支持在指定位置插入一行或多行数据

  **一次只支持在一个分组中插入数据**

* append

  支持在末位添加一行或多行数据

* delete

  支持删除指定位置的一行或多行数据，如果导致分组数据清空，则自动删除分组

* move

  支持将指定位置的一行移动到另一行。

## Value

### Value Format

```json
{
  "ref": [
    {
      "key1": "value1",
      "key2": "value2",
      ......
    },
    {
      "key1": "value1",
      "key2": "value2",
      ......
    },
    ......
  ]
}
```

### Set Value & Get Value

请参看datasets类型的Ctrl的数据规则

## Template

行模板，主要用于方便用户快捷配置

* default

  通用的列表显示，由一个图标，和一组左右分布的字符串组成

* store

  专门用于门店显示

* customer

  用于可以完全自定义显示内容的方式

## UI Sample

## UI Annotation

## Test Sample