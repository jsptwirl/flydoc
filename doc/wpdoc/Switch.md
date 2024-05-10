---
title: Switch
date: 2020-05-20T16:26:24
---

# Switch

用于提供一个用作开关功能的控件。

![img](http://apaas.wxchina.com:8881/wp-content/uploads/SwitchSample.png)

## Protocal

```json
{
    "type": "switch",
    "text": "同意以上协议",
    "displaystyle": "checkbox|slider",
    "ontext": "222",
        "offtext": "333"
}
```

* displaystyle

  默认值为 slider，即滑块样式；checkbox为勾选框样式。

* ontext

  打开状态显示的文本

* offtext

  关闭状态显示的文本

## Value

`1` 表示打开(选中)状态，`0` 为关闭(未选中)状态。

默认值为 `0`