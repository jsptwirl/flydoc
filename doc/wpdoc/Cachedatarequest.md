---
title: Cachedatarequest
date: 2020-05-22T15:30:06
---

# Cachedatarequest 缓存数据搜索

缓存数据搜索行为不同于一般的数据搜索，后者是从已经归档的数据中获取符合制定条件的数据；而前者是在指定控件的当前完整数据集中进行筛选，筛选过程中需要完整保留尚未归档（存储）的数据。

因此缓存数据搜索有以下几点要求：

1. 目前该事件只能由 `filter` 控件触发
2. 适用于需要进行编辑输入的数组型控件
3. 支持缓存数据的数组型控件，需要有一个普通的数据获取行为 `datarequest`
4. 支持缓存数据的数组型控件，需要缓存完整数据，以供筛选。
5. 支持缓存数据的数组型控件，需要能提供数据行是否被修改的判断能力。

## Protocol

### Control

支持缓存数据的控件目前有 `table` , `accordion` 两个，这些控件都有一个属性用于指明是否需要支持缓存数据搜索：

```json
{
    "cacherequestable": "0"
}
```

* cacherequestable

  指明控件是否需要支持缓存数据搜索。Bool 值，默认为 `0`

### Action

缓存数据搜索是由 `cachedatarequest` 事件实际负责执行

```json
{
    "type": "cachedatarequest",
    "containerctrlcode": "832886477808603136",
    "relaterequestcode": "586655877452365687",
    "conditions": {
        "ctrlcode": "ctrlcode_filter",
        "properties": [
            [
                {
                    "name": "storename",
                    "value": "",
                    "comparison": "contain",
                    "ctrl": {
                        "code": "ctrl_filtertextinput_storename",
                        "component": ""
                    }
                }
            ],
            [
                {
                    "name": "__ismodified",
                    "value": "",
                    "comparison": "equal",
                    "ctrl": {
                        "code": "ctrl_checkbutton_ismodify",
                        "component": ""
                    }
                }
            ]
        ]
    },
    "sortconditions": {
        "ctrlcode": "ctrlcode_table",
        "properties": [
            [
                {
                    "name": "storename",
                    "ctrl": {
                        "code": "ctrl_table_storename",
                        "component": ""
                    }
                }
            ]
        ]
    }
}
```

* containerctrlcode

  用于指定缓存数据来源控件，该控件负责提供完整的缓存数据以供筛选

* relaterequestcode

  用于指定该数据来源控件的数据获取action，通常就是该控件 `onload` 事件中的 `datarequest`

  需要从该关联行为中得到其中的 `setter` 用于缓存数据筛选后的赋值映射

* conditions

  筛选条件，目前只支持search，不支持sort

  * ctrlcode

    指定 `filter` 控件code

  * properties

    筛选的属性和筛选控件之间的关系，和 `datarequest` 中的getter类似，但不同之处在于这里的属性有两层数组组成，第一层之间是 **AND** 关系，第二层的条件之间是 **OR** 关系

  * comparison

    对比方式，有以下取值

|value|field type|meaning|
|---|---|---|
|equal|string|相等|
|contain|string|包含|
|large|double|大于等于|
|less|double|小于等于|
|after|date|大于等于|
|before|date|小于等于|

* sortconditions

  排序条件，和conditions的使用方式基本一致，用于对搜索结果进行排序。

  更多的排序的信息参看[sorting](Sorting.md)中的说明。

### 修改项处理约定

在实际的应用中，缓存搜索通常需要进行数据行是否修改的筛选，为此约定了一个叫 `__ismodified` 的字段用于存储和对比。

即在从 `containerctrlcode` 请求回来的原始数据中，会增加一个叫 `__ismodified` 的字段，该字段的的取值为 `0` 或 `1` ，分别表示未修改和已修改。如果要对该字段进行筛选，就要在 `filter` 中配置一个 `checkbutton` 控件，并设好该控件的选项为 `0` 和 `1` 。然后就可以在 `properties` 中将该控件与字段 `__ismodified` 进行关联。

进行搜索时，该字段搜索需要进行特殊处理，即，当控件值为 `1` 时，需要对 `__ismodified` 字段进行搜索；当控件值为 `0` 时，需要从搜索条件中移除该字段。

## 处理时序