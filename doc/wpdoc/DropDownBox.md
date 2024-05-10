---
title: DropDownBox
date: 2020-05-20T16:55:57
---

# DropDownBox

选择框

![](http://apaas.wxchina.com:8881/wp-content/uploads/DropDownBoxSample.png)

## Protocal

```Json
// 静态选项
{
    "type": "dropdownbox",
    "code": "ctrlcode_storelevel",
    "title": "终端级别",
      "searchable": "0",
    "hiddenclearbtn": "0",
    "multiselectable": "0",
    "value": "",
    "islazyload": "",
    "eventlist": [
        {
            "handler": "",
            "trigger": "onload"
        },
        {
            "handler": "",
            "trigger": "onvaluechange"
        },
        {
            "handler": "",
            "trigger": "onloadoptions"
        }
    ],
    "options": [
        {
            "text": "level1",
            "key": "1",
            "isselected": "1",
            "status": "1"
        },
        {
            "text": "level2",
            "key": "2",
            "isselected": "0",
            "status": "1"
        }
    ]
}
```

### searchable

是否允许搜索，bool类型，默认值为 `1` ，支持搜索

目前只支持对 `text` 值进行搜索。

### hiddenclearbtn

参看 [日期控件](../Inputer/Date.md) 的对应属性

### multiselectable

多选，目前只在web端实现

### islazyload

是否使用懒加载，默认值为0，表示不使用

使用懒加载时，前端将不会在表单加载时就加载选项，而是在点击了控件后才调用onload事件

## Component

### Value Component

|name|value|meaning|
|---|---|---|
|text|leve1|显示名称|
|key|1|实际值|
|value|同key|同key|
|fullvalue|复合值|同时包含key和value的值, 如 "{"text": "调休假", "key": "1"}"|

> 当没有设置Component时，默认值为key

```
var ctrl = Page.getCtrl("dropdownCtrl");
ctrl.value = "1";
ctrl.setValue("level1", CtrlSetter("text"));
ctrl.getValue(CtrlValueGetter(“fullvalue”))
```

### Option Component

|name|value|meaning|
|---|---|---|
|text|leve1|显示名称|
|key|1|实际值|
|value|同key|同key|
|isselected|0/1|是否默认选中，Bool类型 （web端实现）|
|~~status~~|1|1：启用；2：停用，停用的选项不能再次被选中 （暂不实现）|
|required|0/1|是否必须选中，1代表必须选中，0或者空表示正常处理（web端实现，单选不支持）|

> 备注：
>
> 1. 如果给控件通过component设置为“key”(“value”,“”都等同与key)给控件赋值，控件不显示对应的值，但是取值时可以通过component设置为“key”(“value”,“”都等同与key)来取得原来赋的值。

```
Page.getPickerCtrl("")
```

### value

所有的选项值类型的控件，如果直接获取其 `value` 就相当于获取 `key`

如果想要获取完整值，需要使用专用的 `fullvalue` 作为 `component`

```json
// 单选
{
    "text": "leve1",
    "key": "1"
}

// 多选
[
    {
        "text": "leve1",
        "key": "1"
    },
    {
        "text": "leve2",
        "key": "2"
    }
]
```

备注：Web端9.4版本后，fullvalue支持额外字段

```
// 单选
{
    "text": "leve1",
    "key": "1",
    "其他额外字段": 'any'
    ...
}

// 多选
[
    {
        "text": "leve1",
        "key": "1",
        "其他额外字段": 'any'
        ...
    },
    {
        "text": "leve2",
        "key": "2"
        "其他额外字段": 'any'
        ...
    }
]
```

### Component

|name|single value|multi value|
|---|---|---|
|value|"1001"|\["1001", "1002"\]|
|text|"天河区经销商"|\["天河区经销商", "荔湾区经销商"\]|
|key|"1001"|\["1001", "1002"\]|
|fullvalue|{"text": "天河区经销商", "key": "1001"}|\[{"text": "荔湾区经销商","key": "1001"},{"text":"leve2","key": "1002"}\]|

### 重要提示

控件数据源（options）支持缓存其他字段信息并提供uiflycode通过fullValue取值，  
但该方式不属于标准支持，因该使用方式引发的相关问题，需要项目组人员自行处理

非标准使用冗余字段可能带来的问题：  
1、所有业务关键信息放一个很大的{key, text}存储在一个字段，然后数据库表字段长度溢出（避免该问题，需要配置人员有一定的开发设计基础）

# 选项类控件赋值处理规则

选项类控件有以下几种途径进行赋值，以下优先级逐步提升

1：直接在控件协议的value上赋值

2：在控件的选项中添加isselected字段赋值

3：通过外部设置value进行赋值

同级别的，后赋值的覆盖前一个赋值，例如控件先使用flycode设了值，又通过setter绑定了值，这两个都属于外部赋值，就用setter的覆盖前一个flycode的值；

不同级别的，按级别高低赋值，例如，在表单onload事件中用setter给控件赋值后，才加载控件的选项options，而选项中又有isselected字段，此时将忽略isselected字段，以外部赋值优先。

# web端选项类控件自动搜索规则

web端的选项类控件（dropdownbox）都支持自动搜索，即支持在输入框中输入内容进行搜索。

目前只支持全量获取了选项的控件进行前端快捷搜索，该搜索自动对text值进行模糊匹配。支持单选和多选的搜索。

# web端备注

1. 如果数据源数据重复，前端不做过滤，实施去修改数据源
2. 9.4下拉框控件底层重构，交互样式以9.4后的版本问主