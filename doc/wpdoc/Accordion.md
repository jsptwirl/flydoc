---
title: Accordion
date: 2020-05-20T15:59:29
---

# Accordion 折叠列表

![](http://apaas.wxchina.com:8881/wp-content/uploads/accordionSample1.png)

## Protocol

```Json
{
    "type": "accordion",
    "code": "ctrl_accordion_productlist",
    "spread": "0",
    "rows": {
        "headview": { // 行布局
            "type": "layout",
            "content": [
                {
                    "type": "layout",
                    "flexdirection": "horizontal",
                    "content": [
                        {
                            "type": "text",
                            "code": "ctrl_text_brandname",
                            "flex": "0"
                        }
                    ]
                }
            ]
        },
        "contentview": { // 行内容布局
            "type": "layout",
            "flexdirection": "vertical",
            "flex": "0",
            "content": [
                {
                    "type": "textinput",
                    "code": "ctrl_textinput",
                    "title": "货架排面数量",
                    "required": "1",
                    "eventlist": [
                        {
                            "handler": "handler_updateextrainfo",
                            "trigger": "onunload"
                        }
                    ]
                }
            ]
        }
    }
}
```

* spread

  控制展开的的方式。

|值|名称|含义|
|---|---|---|
|single|单行|默认值，一次只能展开一行，初始不展开|
|multi|多行|可以同时展开多行，初始不展开|
|all|全部|可以同时展开多行，初始所有行全部展开|

* headview

  列表行布局view，里面是一个layout布局

  注：headview内部的layout布局或者panel面板如果flex(控件弹性比例)设置成大于0的数值，在对应layout/panel显示区域的点击，将无法展开当前行，因此如非特殊情况，建议将headview内部的layout布局或者panel面板的flex设置为0或者空

* contentview

  内容的view，里面放一个layout布局

## Value

### Value Formart

折叠列表接收数组类型的数据

```json
[
    {
        "key1": "value1",
        "key2": "value2",
        "key3": "value3",
        "key4": "value4"
    },
    {
        "key1": "value1",
        "key2": "value2",
        "key3": "value3",
        "key4": "value4"
    }
    ......
]
```