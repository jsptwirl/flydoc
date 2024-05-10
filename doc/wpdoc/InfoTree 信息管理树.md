---
title: InfoTree 信息管理树
date: 2020-05-20T14:40:43
---

# InfoTree

用于展示树型结构数据的一个数组型控件，适用于树形结构的数据管理操作，例如部门，营销区域等。目前只支持web端

目前该控件不支持排序，不支持个性化。

![](http://apaas.wxchina.com:8881/wp-content/uploads/infotree.png)

```json
{
    "code": "",
    "name": "",
    "type": "infotree",
    "checkable": "",
    "datastructure": {
        "id": "",
        "pid": "",
        "idpath": ""
    },
    "treecol": {
        "code": "",
        "name": "",
        "type": "expendablecell",
        "title": "部门",
        "width": "",
        "onclick": ""
    },
    "cols": [
        {
            "type": "tablecell"
        },
        ......
    ],
    "eventlist": [
        {
            "trigger": "onload",
            "handler": ""
        },
        {
            "trigger": "onrefresh",
            "handler": ""
        },
        {
            "trigger": "onloadmore",
            "handler": ""
        },
        {
            "trigger": "onclickrow",
            "handler": ""
        },
        {
            "trigger": "oncheck",
            "handler": ""
        }
    ],
    "rowoperations": [
        {
            "text": "编辑",
            "icon": "",
            "handler": "handler_edit",
            "hidden": "",
            "functioncode": ""
        },
        {
            "text": "删除",
            "icon": "",
            "handler": "handler_del",
            "hidden": "le: {status} == '2'",
            "functioncode": ""
        }
    ]
}
```

## 属性说明

### checkable

可勾选，用于确定是否可以勾选行。

默认值为 1，表示可勾选

### datastructure

数据结构，用于标识数据中代表树形结构的相关字段

* id

  代表数据的唯一id的字段

* pid

  代表数据父节点id的字段

* idpath

  代表数据完整id路径的字段，用于提高前端处理部分逻辑的效率，可以不配置。

### treecol

固定放置一个类型为 `expendablecell` 的控件，作为该树列表的主列。

该列会固定冻结显示在左边。

* title & width

  参看 `tablecell` 控件

* onclick

  点击事件，用于配置点击文字时触发的事件。

  当没有配置该属性时，该列显示为普通黑色文本；如果配置了，则显示为link样式。

### cols

参看 `tablecell` 控件

## Eventlist 事件列表

事件列表。

onload，onrefresh， oncheck，onclickrow，这些事件参看 `tablecell` 控件

### onloadmore

加载更多事件，当展开一个尚未加载子节点数据的节点时，或者在第一层节点还有更多数据时点击`加载更多数据` 按钮时触发。

具体的数据处理规则参看[树型结构数据分级加载方案](../../Actions/DataProcess/树型结构数据分级加载方案.md)