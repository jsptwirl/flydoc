---
title: Picktree
date: 2020-05-20T16:33:45
---

# Picktree

选择树，例如部门，行政区域等，与控件 `cascade` 的协议和功能基本一致，只是显示方式不同，Picktree目前只应用于web端，手机端请使用 `cascade` 控件

![](http://apaas.wxchina.com:8881/wp-content/uploads/PicktreeNormal.png)  
![](http://apaas.wxchina.com:8881/wp-content/uploads/PicktreeShowcase.png)

## Protocol

```json
{
    "type": "picktree",
    "code": "ctrlcode_picktree",
    "title": "行政区域",
    "searchable": "0",
    "multiselectable": "0",
    "islazyload": "0",
    "intermediateselectmode": "disable",
    "showcase": "1",
    "displaystyle": "input/tree",
    "hiddenclearbtn": "1",
        "expandmodel": "allexpand",
    "autofillvalue": "1",
    "eventlist": [
        {
            "handler": "handler_loadoptions",
            "trigger": "onload"
        },
        {
            "handler": "",
            "trigger": "onvaluechange"
        }
    ]
}

{
    "type": "datarequest",
    "desp": "获取行政区域",
    "logiccode": "832886477808603136",
    "mode": "2",
    "pagingsize": "",
    "sorter": [],
    "getter": [],
    "setter": [
        {
            "name": "region",
            "datatype": "1",
            "ctrl": {
                "code": "ctrlcode_picktree",
                "scrop": ""
            },
            "properties": [
                {
                    "name": "region_key",
                    "ctrl": {
                        "code": "",
                        "component": "key"
                    }
                },
                {
                    "name": "region_name",
                    "ctrl": {
                        "code": "",
                        "component": "text"
                    }
                },
                {
                    "name": "region_id",
                    "ctrl": {
                        "code": "",
                        "component": "id"
                    }
                },
                {
                    "name": "region_parentid",
                    "ctrl": {
                        "code": "",
                        "component": "parentid"
                    }
                },
                {
                    "name": "region_isselected",
                    "ctrl": {
                        "code": "",
                        "component": "isselected"
                    }
                }
            ]
        }
    ]
}
```

* searchable

  是否允许搜索，bool类型，默认值为 `1` ，支持搜索

  目前只支持对 `text` 值进行搜索，并且支持对非叶子节点的搜索。

* multiselectable

  是否允许多选，bool类型，默认值为 `0` ，即单选

* showcase

  是否显示已选择选项的列表。

* intermediateselectmode

  * 用于指定非叶子节点的选择模式，默认为 `disable`

|Value|Meaning|
|---|---|
|disable|不能选择中间节点|
|shortcut|中间节点不参与取值，但可以作为叶子节点选择的快捷方式影响叶子节点选择|
|individual|中间节点独立取值，此时选择某个中间节点不会影响其子节点的选择状态|
|gather|中间节点的选择会影响子节点选择，同时与子节点一起参与取值|
|related|中间节点的选择会影响子节点选择，取值时只取分支中的最高的节点值（为兼容已有表单，这种取值规则只有多选时有效，单选时，相当于individual模式）|


  从实现角度看

|功能点|disable|shortcut|individual|gather|related|
|---|---|---|---|---|---|
|中间节点能选择（多选）||✅|✅|✅|✅|
|中间节点参与取值|||✅|✅|✅|
|父节点选中时子节点参与取值||✅||✅||
|单选时有效|✅||✅|||
|中间节点的选择状态影响子节点||✅||✅|✅|
|子节点的选择状态影响父节点||✅||✅|✅|

* hiddenclearbtn

  禁止清除，控制是否能清除已选择的数据，只在单选时起效

  导航树模式下不生效

* islazyload

  是否使用懒加载，默认值为0，表示不使用

  使用懒加载时，前端将不会在表单加载时就加载选项，而是在点击了指定控件后才加载

  web端懒加载方式：

  1. 在下拉模式下，点击下拉框后才调用onload加载事件加载数据
  2. 在导航树模式下懒加载不生效

* expandmodel

  > 只在web端实现

  节点展开控制，控制默认展开选项的方式

|value|说明|
|---|---|
|noexpand|不展开|
|rootexpand|展开根节点|
|allexpand|全部展开（输入样式时的默认值）|

  > 1：只在web端实现
  >
  > 2：如果是tree，导航树模式下，如果有付值的话，将会自动展开到选中项的位置

* displaystyle

  显示样式，支持两种样式

|值|说明|
|---|---|
|input|输入样式，使用下拉方式进行选则|
|tree|树样式，直接以导航树形式显示选项，用于导航场景，此时不支持多选|

* autofillvalue

  参看datatree的对应属性

## Component

### Value Component

|name|value\_single\_sel|value\_multi\_sel|meaning|
|---|---|---|---|
|text|天河区|\["天河区","白云区"\]|显示名称|
|textpath|广东省.广州市.天河区|\["广东省.广州市.天河区","广东省.广州市.白云区"\]|显示名称|
|key|111|\["111","112"\]|实际值|
|keypath|1.11.111|\["1.11.111","1.11.112"\]|实际值|
|id|11101|\["11101","11102"\]|id值|
|idpath|10001.11001.11101|\["10001.11001.11101","10001.11001.11102"\]|id值|
|fullvalue|参看下方说明|参看下方说明|参看下方说明|

### Option Component

与Value Component 基本一致，增加了一个 `parentid`

|name|value|meaning|required|
|---|---|---|---|
|text|天河区|显示值|YES|
|textpath|广东省.广州市.天河区|显示值路径||
|key|111|key值|YES|
|id|11101|id值|YES|
|keypath|1.11.111|key 路径值||
|idpath|10001.11001.11101|id 路径值||
|parentid|10001|父节点id值|YES|
|isselected|1|是否默认选中，Bool类型，默认为不选中|NO|

### 重要提示

控件数据源（options）支持缓存其他字段信息并提供uiflycode通过fullValue取值，  
但该方式不属于标准支持，因该使用方式引发的相关问题，需要项目组人员自行处理

非标准使用冗余字段可能带来的问题：  
1、所有业务关键信息放一个很大的{key, text}存储在一个字段，然后数据库表字段长度溢出（避免该问题，需要配置人员有一定的开发设计基础）

## Value

所有的选项值类型的控件，如果直接获取其 `value` 就相当于获取 `key`

如果想要获取完整值，需要使用专用的 `fullvalue` 作为 `component`

* fullvalue

```json
// 单选
{
    "text": "天河区",
    "textpath": "广东省.广州市.天河区",
    "key": "111",
    "ketpath": "1.11.111",
    "id": "11101",
    "idpath": "10001.11001.11101"
}

// 多选
[
    {
        "text": "天河区",
        "textpath": "广东省.广州市.天河区",
        "key": "111",
        "ketpath": "1.11.111",
        "id": "11101",
        "idpath": "10001.11001.11101"
    },
    {
        "text": "深圳市",
        "textpath": "广东省.深圳市",
        "key": "12",
        "ketpath": "1.12",
        "id": "12101",
        "idpath": "10001.12001",
        "isselected": "1"
    }
]
```

备注：Web端9.4版本后，fullvalue支持额外字段

```
// 单选
{
    "text": "天河区",
    "textpath": "广东省.广州市.天河区",
    "key": "111",
    "ketpath": "1.11.111",
    "id": "11101",
    "idpath": "10001.11001.11101"
    "其他额外字段": 'any'
    ...
}

// 多选
[
    {
        "text": "天河区",
        "textpath": "广东省.广州市.天河区",
        "key": "111",
        "ketpath": "1.11.111",
        "id": "11101",
        "idpath": "10001.11001.11101"
        "其他额外字段": 'any'
        ...
    },
    {
        "text": "深圳市",
        "textpath": "广东省.深圳市",
        "key": "12",
        "ketpath": "1.12",
        "id": "12101",
        "idpath": "10001.12001",
        "isselected": "1"
        "其他额外字段": 'any'
        ...
    }
]
```

## Event Trigger

* onload
* onvaluechange

## Web端细节备注

* 下拉树同一节点下超过20条出现"加载更多"，导航树同一节点下超过100条出现"加载更多"