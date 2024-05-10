---
title: FragmentEditor 片段编辑器
date: 2020-05-20T14:28:24
---

# FragmentEditor 片段编辑器

片段编辑器，可以动态添加或者删除一组控件的控件，属于数组型控件，可以通过 `datarequest` 事件进行数据设置，不过不支持分页，不支持搜索，可以通过flycode进行数据的存取。

每组控件都被放置在一个`fragment` 里面，一个 `fragment` 类似于 `layout` ，为子控件提供最外层的布局能力。

> web端建议使用新的EditorTable替代该控件

# UI 示例

## Mobile 示例

### 不带片段标题

![](http://apaas.wxchina.com:8881/wp-content/uploads/dp_mobile.png)

### 带片段标题

![](http://apaas.wxchina.com:8881/wp-content/uploads/dp_mobile_titled.png)

## Web 示例

![dp_web](http://apaas.wxchina.com:8881/wp-content/uploads/dp_web.png)

# Protocol

```json
{
    "type": "fragmenteditor",
    "title": "片段编辑器",
    "readonly": "0",
    "upperlimit": "20",
    "lowerlimit": "",
    "initnumber": "0",
    "addmode": "auto",
    "addtitle": "添加",
    "cleanable": "1",
    "searchable": "0",
    "style": "table/list/card",
    "eventlist": [
        {
            "trigger": "onload",
            "handler": ""
        },
        {
            "trigger": "onnew",
            "handler": ""
        },
        {
            "trigger": "onclean",
            "handler": ""
        },
        {
            "trigger": "onvaluechange",
            "handler": ""
        }
    ],
    "fragment": {
        "flexdirection": "",
        "deletable": "1",
  //      "primarykeys": ["id","type"],
        "titlekey": "name",
        "eventlist": [
            {
                "trigger": "ondelete",
                "handler": ""
            },
            {
                "trigger": "onedit",
                "handler": ""
            }
        ],
        "content": []
    }
}
```

## 属性说明

### readonly 只读

默认为0，表示非只读

当值为1时，将会忽略 cleanable 以及 addmode 属性，此时不会有删除按钮，清除按钮，以及添加按钮出现。同时也会将行布局设置为紧凑模式，行内的子控件设置为只读模式。

### upperlimit 最大数量

最多可以添加的 fragment 的数量，默认值为 `20` ，`0` 表示无限制；空的时候使用默认值。

当数量达到最大值后，将会隐藏添加按钮。

### lowerlimit 最小数量

表示最少需要添加的 fragment 的数量，默认值为空，表示没有限制；`0` 也表示没有限制。

当小于数量限制时，应该给出对应提示，并且在提交数据时阻止提交

### initnumber 初始数量

表示初始状态下预先生成的 fragment 数量，默认值为 `0`，即不预生成 fragment。

### cleanable 可清除

是否允许清除所有数据，默认值为 `0` ，表示不能清除。

值为1时且有数据时，需要显示一个清除按钮。点击后会调用 `onclearn` 事件，成功后自动清除所有数据。

### searchable 可搜索

【web端】

用于设置是否需要内置的搜索功能，默认为0，表示不需要

如果设置为1，则会自动显示一个搜索框，搜索时会自动在显示的字段中进行模糊匹配。搜索不会影响对控件值做出的修改。

### addmode 添加模式

新增模式，有以下取值

|值|说明|新增按钮|是否触发onnew|
|---|---|---|---|
|none|不能直接新增，只能外部设置数据。|无|否|
|auto|默认值，点击新增按钮后自动新增一个panel放置在最后位置。|有|否|
|custom|点击新增按钮后不作处理，等待外部数据设置。|有|是|

> `custom` 模式下的外部数据设置，通常就是设置在 `onadd` 关联的事件当中，详细参看 **外部内容配置** 说明。

### addtitle 添加按钮标题

用于设置添加按钮的标题，默认为空

### style 片段显示模式

|value|说明|web|mobile|
|---|---|---|---|
|plain|简约模式||支持，默认值|
|card|卡片模式|||
|free|自由模式|||
|grid|网格模式|||
|table|\== grid|支持，默认值||
|list|\== free|支持||
|||||

> 原则上，网格模式下，不支持水平滑动，即列数较多的情况不建议使用网格模式
>
> free模式下，固定给

### fragment

控件组容器，相当于一个layout，用于盛放子控件，根据其 `mode` 的不同属性，决定其显示的UI。

### deletable 可删除

是否允许删除行，bool类型，默认值为 `1` ，表示可以删除，需要显示删除按钮。

点击删除按钮时，会先触发 `ondelete` 事件，如果没有关联事件，或者事件成功执行完毕后，自动删除当前行。

### editable

> 废弃，通过判断onedit是否配置了事件来确定是否可编辑.
>
> 可编辑的含义并非值该行内的控件是否可编辑，而是指是否能触发编辑事件，通常编辑事件是链接到一个详情表单进行编辑，需要在onedit事件中定义。

是否允许编辑行，bool类型，默认值为 `0` ，表示不能编辑，web需要显示编辑按钮，手机端不显示编辑按钮，但会让整个fragment接受点击。点击会触发 `onedit` 事件。

#### primarykeys 片段主键字段

> 暂不实现，使用flycode函数samecheck来实现

用于配置用于检测是否为重复添加的数据的字段名，如果没有配置，则不进行重复检测；如果配置了，则在添加或编辑时，需要进行重复检测，检测到已有的数据后，需要提示用户无法添加并放弃修改。

#### titlekey 片段标题字段

用于配置一个字段，表示该字段的值用于显示到片段的标题上。默认为空，即没有标题。

该属性在 `list` 和 `table` 模式下无效

### serialize 序列化

用于设置序列化取值或赋值时，控件与字段的对应关系。

name 为字段名，ctrlcode 为控件code。

## Event List

支持的事件触发点有以下几种：

### 编辑器事件

|trigger|触发时机|用途示例|
|---|---|---|
|onload|控件加载|可以配置Datarequest行为，用于初始化数据|
|onadd|点击新增按钮|详细说明请参看下方的 **外部内容配置** 说明。|
|onclean|点击清除按钮|清除所有数据|

### 片段事件

注意此事件的插入位置，将ondelete/onedit事件写在fragmenteditor控件的“fragment”字段下的“eventlist”字段下才会生效。

|trigger|触发时机|用途示例|
|---|---|---|
|ondelete|点击删除按钮|删除某行时做出对应的响应，该行为会自动将删除的行的数据传递出去。|
|onedit|点击编辑按钮，或者在手机端点击行|当配置了可编辑行为时，点击编辑按钮，或者点击行（手机端）做出该响应，该行为会自动传递编辑按钮所在行的数据出去。|

# 取值

片段编辑器本质上也是一个数组型控件，因此其取值方式与其他例如 list 控件基本一致。区别在于 `scrop` 属性对该控件无效。

## 序列化取值

片段编辑器除了支持普通的 getter 取值外，还支持序列化数据取值

> 序列化取值应该最终让所有的容器控件都支持，但目前先让片段编辑器试验支持

为了方便描述，约定以下取值和赋值都是基于以下数据进行描述：

```json
// 片段控件code
"fragmentEditorCtrlCode"

// 子控件code
"textCtrlCode" // 用于接收name值
"numberCtrlCode" // 用于接收number值

// 原始值
[
    {
        "id": "1",
        "name": "product one",
        "number": "100"
    }
]

// 序列化关系
[
    {
        "name": "id",
        "ctrlcode": ""
    },
    {
        "name": "name",
        "ctrlcode": "textCtrlCode"
    },
    {
        "name": "number",
        "ctrlcode": "numberCtrlCode"
    }
]
```

自动序列化之后将变成一个json格式的字符串，如下：

```json
// serialize 字段有值得情况下，使用其中的对应关系对控件值进行重绑定
"[{"id": "1", "name": "product one", "number": "100"}]"

// serialize 字段没有值得情况下，直接使用控件的 name ，控件 name 为空时使用控件code
"[{"id": "1", "textCtrlCode": "product one", "numberCtrlCode": "100"}]"
```

## 配置取值示例

```json
// 获取序列化数据
{
    "getter": [
        {
            "name": "summary data",
            "datatype": "0",
            "ctrl": {
                "code": "",
                "scope": ""
            },
            "properties": [
                {
                    "name": "serializeData",
                    "value": "",
                    "ctrl": {
                        "code": "fragmentEditorCtrlCode",
                        "component": ""
                    }
                }
            ]
        }
    ]
}

// 获取数组型数据
{
    "getter": [
        {
            "name": "all data",
            "datatype": "1",
            "ctrl": {
                "code": "fragmentEditorCtrlCode",
                "scope": ""
            },
            "properties": [
                {
                    "name": "id",
                    "value": "",
                    "ctrl": {
                        "code": "",
                        "component": ""
                    }
                },
                {
                    "name": "productname",
                    "value": "",
                    "ctrl": {
                        "code": "textCtrlCode",
                        "component": ""
                    }
                }
            ]
        }
    ]
}
```

## flycode 取值示例

```js
// 获取序列化数据
Page.getArrayCtrl('fragmentEditorCtrl').getSerializedValue(scope, getter)

// 获取数组数据
Page.getArrayCtrl('fragmentEditorCtrl').getInScope(scope，getter，isExhaustive)
```

# 赋值

片段编辑器本质上也是一个数组型控件，因此其赋值方式与其他例如 list 控件基本一致。

## 序列化赋值

与序列化取值配对使用，方便一些场景的赋值。

赋值时，首先会将序列化的字符串转换为json数据，然后会根据serialize属性配置的对应关系，将字段值绑定到指定的控件上，如果没有指定绑定关系的，将会作为内存值自动存储。

## 配置赋值示例

```json
// 序列化数据赋值
{
    "setter": [
        {
            "name": "kx_store",
            "datatype": "0",
            "ctrlcode": "",
            "properties": [
                {
                    "name": "serializeData",
                    "alias": "",
                    "ctrl": {
                        "code": "fragmentEditorCtrlCode",
                        "component": ""
                    }
                },
                {
                    "name": "otherData",
                    "alias": "",
                    "ctrl": {
                        "code": "otherCtrlCode",
                        "component": ""
                    }
                }
            ]
        }
    ]
}

// 数组值数据赋值
// 参看list，table等
```

## flycode 赋值示例

```js
// 序列化数据赋值
var serializeData = "[{"id": "1", "name": "product one", "number": "100"}]"
//Page.getCtrl('fragmentEditorCtrl').value = serializeData
Page.getArrayCtrl('fragmentEditorCtrl').setSerializedValue(serializeData, setter)

// 数组数据赋值
var data = [
    {
        "id": "1",
        "name": "product one",
        "number": "100"
    }
]
Page.getArrayCtrl('fragmentEditorCtrl').setData(data, getter)
```

# 外部数据添加，删除与编辑

由于数据的添加，删除与编辑情况较为复杂，因此，目前只支持使用flycode进行实现。

```js
var rowData = {
    "id": "1",
    "name": "product one",
    "number": "100"
}

// 数据添加
Page.getArrayCtrl('fragmentEditorCtrl').append(rowsData, pos, setter)

// 数据修改
Page.getArrayCtrl('fragmentEditorCtrl').update(rowsData, [1,3], setter)

// 数据删除
Page.getArrayCtrl('fragmentEditorCtrl').delete([1])
```