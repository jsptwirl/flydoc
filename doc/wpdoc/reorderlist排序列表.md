---
title: reorderlist排序列表
date: 2020-05-20T15:58:12
---

# 排序列表

用于对一组数据进行拖动排序的控件，单纯显示内容并排序，不支持数据分页，不支持搜索，不支持刷新，不支持数据编辑。

> 因此建议排序列表的数据不超过20条为宜

## UI示例

目前web端和移动端的样式为固定样式，具体的flex示例参看下方布局说明

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E6%8E%92%E5%BA%8F%E6%9C%89%E7%82%B9%E5%87%BB%E4%BA%8B%E4%BB%B6.jpg)

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E6%8E%92%E5%BA%8F%E6%97%A0%E7%82%B9%E5%87%BB%E4%BA%8B%E4%BB%B6.jpg)

![](http://apaas.wxchina.com:8881/wp-content/uploads/web%E7%AB%AF%E6%8E%92%E5%BA%8F.jpg)

## Protocol

```json
{
      "type": "reorderlist",
      "flex": "1",
    "indexable": "1",
      "eventlist": [
          {
              "trigger": "onload",
              "handler": ""
          },
          {
              "trigger": "onreordered",
              "handler": ""
          }
      ],
      "rows": {
        "type": "row",
        "flexdirection": "horizontal",
        "eventlist": [
            {
                "handler": "handler_linkdetail",
                "trigger": "onclicked"
            }
        ],
        "content": [ "..." ]
    },
}
```

* indexable

  bool类型，是否支持自动序号显示，默认值为1，如果可以，则会在每一行显示一个自动序号，该序号列为自增的序号，从1开始计算。当进行拖动排序时，自动更新序号。

  在取值时，无论是否显示序号，都可以通过 `__autoindex` 关键字作为name值，来获取该序号值。

* rows

  与list控件的rows属性一致

  > 布局实现上，默认为水平布局

## 事件说明

### onreordered

点击确定按钮时触发

### onclicked

查看模式下点击行触发，排序状态下不触发

## 支持放置的控件说明

排序控件只用于显示和排序，因此目前只支持以下控件放置，并且会自动设置这些控件为只读模式：

|type|name|
|---|---|
|text|文本|
|textinput|文本输入|
|icon|图标|
|image|图片|
|address|地址|
|datepicker|时间|
|dynamictext|动态文本|