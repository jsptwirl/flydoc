---
title: Cascade
date: 2020-05-20T17:03:31
---

# Cascade

级联筛选框

* 手机端UI

  ![](http://apaas.wxchina.com:8881/wp-content/uploads/cascadeMobile.png)

* Web端UI

  ![](http://apaas.wxchina.com:8881/wp-content/uploads/cascadeWeb.png)

* 多选UI

  ![](http://apaas.wxchina.com:8881/wp-content/uploads/cascadeMutilSel.png)

* 支持非子节点选择需要弹出新的界面选择（手机端）

  ![](http://apaas.wxchina.com:8881/wp-content/uploads/cascadeMutilSel1.png)

## Protocal

```json
{
    "type": "cascade",
    "code": "ctrlcode_region",
    "title": "行政区域选择",
    "placeholder": "",
    "multiselectable": "0",
    "intermediateselectmode": "",
    "textstyle": "simple",
    "eventlist": [
        {
            "handler": "",
            "trigger": "onvaluechange"
        },
        {
            "handler": "handler_getregionoption",
            "trigger": "onload"
        }
    ]
}
```

multiselectable, intermediateselectmode，searchable

参看[picktree](http://apaas.wxchina.com:8881/technology/195/)

hideroot

是否隐藏根节点，默认值为'0'

主要用于当根节点只有一个节点时，不用显示的场景。

如果设置了隐藏根节点，则无论是显示，选择，还是提交的值中，都不会包含根节点信息。

textstyle

|Value|Meaning|Single Selection Sample|Multi Selection Sample|
|---|---|---|---|
|summary|简要显示|天河区|天河区，白云区|
|full|完整显示|广东省 广州市 天河区|广东省 广州市 天河区，广东省 广州市 白云区|

### hiddenclearbtn

参看 [日期控件](http://apaas.wxchina.com:8881/technology/183/) 的对应属性

## Component

参看[picktree](http://apaas.wxchina.com:8881/technology/195/)

## Value

参看[picktree](http://apaas.wxchina.com:8881/technology/195/)

## Event Trigger

* onload
* onvaluechange