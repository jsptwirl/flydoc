---
title: eventlink
date: 2020-05-22T15:54:55
---

## eventlink

事件链接，接收call行为的参数，然后调用当前表单的一个指定事件。

```json
{
    "type": "eventlink",
    "key": "refreshlist",
    "code": "interface_refreshlist",
    "handler": "handler_refreshlist",
    "desc": "刷新列表监听事件",
    "param": {
        "datatype": "0",
        "name": "kx_product",
        "ctrlcode": "",
        "properties": [
            {
                "name": "__pagestatus",
                "alias": "",
                "ctrl": {
                    "code": "",
                    "component": ""
                }
            },
            {
                "name": "reportinfo",
                "alias": "",
                "ctrl": {
                    "code": "reportA",
                    "component": ""
                }
            }
        ]
    }
}
```

* key

  接收的key

* handler

  链接的事件code

* param

  主要接受call行为传递过来的参数。

  * datatype

    0 代表单对象，1 代表数组值。

  * ctrlcode

    接收传参的数组型控件code

    如果为空，表示传参由表单的基本控件接收，此时的datatype必须为 0

    如果有值，则分两种情况：

    1. 当 datatype为0时，则使用参数更新数组控件的焦点行（没有焦点行则直接在尾部添加一条数据）。
    2. 当 datatype为1时，则使用参数在数组控件的尾部新增数据。