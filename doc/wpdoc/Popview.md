---
title: Popview
date: 2020-05-20T16:08:14
---

# Popview 弹出框

一类转用于弹窗的容器视图，只在page的 [View 视图层](../../../Page/View.md)的subviews中使用，不能在其他容器中配置。

![](http://apaas.wxchina.com:8881/wp-content/uploads/popview.png)

```json
{
    "type": "popview",
    "code": "popview1_code",
    "title": "编辑信息",
    "needconfirm": "1",
    "confirmtitle": "确定",
    "eventlist": [
        {
            "trigger": "onopen",
            "handler": ""
        },
        {
            "trigger": "onclose",
            "handler": ""
        },
        {
            "trigger": "onconfirm",
            "handler": ""
        }
    ],
    "content": []
}
```

### needconfirm 是否需要确认

用于指定是否显示确认按钮，默认值为1，需要显示。

当不需要时，确认按钮所在的功能条将不会显示。

### confirmtitle 确认按钮标题

用于自定义确认按钮的标题，默认值为`确认`。

### resetwhenopen 打开时清空数据

***注：此设置手机端不生效，暂不实现。***

bool值，用于设置每次打开时是否清空内部子控件的数据，默认值为1，表示清空。

清空操作将会在onopen事件执行之前执行。

### onopen 打开事件

每次当弹出框打开时触发。

> 配置在 popview 中的控件的onload事件和主视图一样，都是在表单加载时触发，子视图打开不会再次触发onload事件，如果需要打开时加载控件数据，请在onopen事件中配置。

### onclose 关闭事件

当点击关闭时触发的事件，通常无需配置。如果配置了相应事件，将会先执行事件，再关闭窗口。

### onconfirm 确认事件

当点击确认按钮时触发的事件。将会先执行事件，成功后，再自动关闭窗口。