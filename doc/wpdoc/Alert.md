---
title: Alert
date: 2020-05-22T15:53:55
---

# Alert

警告信息，用于显示提示或警告信息。

```json
{
    "type": "alert",
    "condition": "",
    "message": "确定要启用选中的终端吗？",
    "choices": [
        {
            "title": "确定",
            "handler": "22222222222"
        },
        {
            "title": "取消",
            "handler": ""
        }
    ],
    "buttons": [
        {
            "title": "确定",
            "handler": ""
        },
        {
            "title": "取消",
            "handler": ""
        }
    ]
}
```

* message

  显示内容，支持字符串表达式

* choices

  定义提示的按钮操作。

  **当没有配置任何按钮时，alert显示为一个3秒后自动消失的消息框**

  * title

  按钮标题

  * handler

  按钮对应的执行事件，如果没有配置则不执行任何事件

> alert事件不会阻塞事件执行，因此配置在alert之后的事件将会继续执行

* buttons

  旧协议内容。

  有且只有两个按钮，点击确定继续执行事件，点击取消中止当前事件