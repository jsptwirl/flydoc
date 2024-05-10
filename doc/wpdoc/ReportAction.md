---
title: ReportAction
date: 2020-05-20T17:37:43
---

# ReportAction

报表行为，专用于报表相关的数据获取的行为。

\[TOC\]

## rp\_optionrequest 选项数据获取

专门用于报表的筛选条件获取，一次调用获取一个条件的选项值，当有多个筛选条件时，需要多次调用。

> 由于报表数据的获取会依赖于筛选选项值，所以在实际处理中，需要先执行完所有的选项值获取后，才能执行报表数据获取。

### Protocol

```Json
{
    "type": "rp_optionrequest",                  // 请求报表筛选条件的选项值
    "datacode": "918757352000327733",           // 筛选参数的code
    "conditionctrlcode": "918757352000327733"    // 对应的展示控件的code
}
```

* paramcode

  该选项数据的code，用于接口请求的入参

* conditionctrlcode

  选项值所对应的展示控件的code，由于选项值得返回字段已经约定好，因此就不再在这里进行具体的绑定说明，不同种类的控件根据自身需求去固定的字段获取值即可，具体绑定说明参看下方。

  > 由于在报表数据获取的时候，会默认获取这些筛选条件的值作为入参，其中控件值与维度的对应关系就会默认使用 `rp_optionrequest` 中的对应关系。
  >
  > **为了方便配置，目前用作报表筛选的控件的code与其所关联的参数的code保持一致，因此在之后的报表数据获取筛选参数时，可以直接使用控件的code作为参数**

### Interface

请求方式：`POST`

URL：`api/teapi/report/biengine/report/initparam`

#### Request

```Json
{
    'paramcode': "918757352000327733"
}
```

* paramcode

  即事件中配置的 `paramcode` 属性

#### Response

```Json
[
    {
        "text": "近三月",
        "key": "RECENTLYTHREEMONTH",
        "id": "RECENTLYTHREEMONTH"
    },
    {
        "text": "近一周",
        "key": "RECENTLYONEWEEK",
        "id": "RECENTLYONEWEEK",
        "isselected": "1"
    }
]
```

返回的选项值可以被下拉框，单选框等选项类控件接收。目前只接受单选。

* isselected

  是否为默认选中的值，`0` 表示不是默认值， `1` 表示为默认选中值。

  该字段值默认为 `0`

  如果所有选项都没有设置为值，那么会默认使用第一个选项作为默认值。

## rp\_dimensionrequest 报表维度数据获取

用于报表维度切换的选项数据获取

```json
// POST  
// api/teapi/report/getdims
{
    "type": "rp_dimensionrequest",
    "reportcode": "907526770180362314",
    "setter": {
        "datatype": "1",
        "ctrlcode": "871635456321354",
        "properties": [
            {
                "name": "elementcode",
                "ctrl": {
                    "code": "",
                    "component": "key"
                }
            },
            {
                "name": "alias",
                "ctrl": {
                    "code": "",
                    "component": "text"
                }
            },
            {
                "name": "isselected",
                "ctrl": {
                    "code": "",
                    "component": "isselected"
                }
            }
        ]
    }
}
```

* reportcode

  报表的code，目前一个报表唯一关联一个可选的维度选项列表

* setter

  数据接收的相关设置，由于接口是专用的，因此基本上除了ctrlcode可以设置之外，其他的都可以直接原样生成，无需配置

### Request

```json
{
    "reportcode":"907526770180362314"
}
```

### Response

```json
[
    {
        "elementcode": "4234523452345.866456585656",
        "elementname": "bi_dim_date.year",
        "alias": "按年"
    },
    {
        "elementcode": "4234523452345.323524523452",
        "elementname": "bi_dim_date.month",
        "alias": "按月",
        "isselected": "1"
    }
]
```

## rp\_datarequest 报表数据获取

用于获取报表显示数据

### Protocol

```Json
{
    "type": "rp_datarequest",
    "reportctrlcode": "928547827523653725",    //报表控件code
    "datacode": "907526770180362314",
    "filtercode": "928547827523653724",         //作废
    "slices": [
        {
            "code": "545613345463214",
            "value": "",
            "component": ""
        }
    ],
    "dimensions": [
        {
            "code": "871635456321354",
            "value": "",
            "component": ""
        }
    ]
}
```

* reportctrlcode

  报表数据所对应的报表控件code，获取到的数据将会赋值到该控件

* datacode

  报表数据的code

* filtercode

  获取报表数据的筛选条件所在的filter控件的code，在执行该事件时，会到该filter中，遍历其所有的子控件，取出这些控件的 `value` 值作为数据请求的入参

* slices

  切片定义（即筛选条件定义），用于指定报表数据获取的入参中的切片信息

  * code

    切片的code，同时也是该切片对应的筛选条件的控件code，使用该code去获取控件的值

  * component

    指定从控件中获取的值的类型，与通用的 `getter` 中的定义一致

  * value

    为该切片指定一个默认值，与 `getter` 中的定义一致

### Interface

请求方式：`POST`

URL：`api/teapi/report/biengine/report`

#### Request

```Json
// request
{
    "reportcode": "910390432830197847",
    "drill": {
        "dimobjectcode": "872640719498645580",
        "propertycode": "872640719498645584",
        "membervalue": "华南大区"
    },
    "pdrill": [],
    "slices": [
        {
            "code": "918757352000327733",
            "value": "RECENTLYONEWEEK"
        }
    ],
    "switchdim":{
        "elementcode":"872640719498645580.872640719498645564"
    }
}
```

* reportcode

  报表数据code，使用事件配置的 `datacode` 属性值

* slices

  报表的筛选条件，通过遍历绑定的filter中的控件来获取

  * code

    参数的code，直接使用控件的code即可

  * value

    控件的值，直接获取控件的默认取值，即 `value` 值，如果获取到的不是一个字符串，则需要转换为字符串之后使用。

> TODO: 联动的时候，也是调用该方法，不过此时会有钻取信息需要加入，该协议还在制定中。。。。。

#### Response

```Json
// response
{
    ......
}
```

请参看[报表数据结构说明](ReportDataStructure.md)

## rp\_datadrill 报表数据钻取

### Protocol

```json
{
    "type": "rp_datadrill",
    "reportctrlcode": "300000000000003", 
    "datacode": "907526770180362314",
    "filtercode": "928547827523653724", //作废
    "slices": [
        {
            "code": "545613345463214",
            "value": "",
            "component": ""
        }
    ]
}
```

各个属性与 `rp_datarequest` 的属性配置相同。

不同之处在于请求数据的组装以及请求回来的数据的使用

### Interface

请求方式：`POST`

URL：`api/teapi/report/biengine/report/drill`

#### Request

```json
{
    "reportcode": "910390432830197847",
    "drill": {
        "dimobjectcode": "872640719498645580",
        "propertycode": "872640719498645584",
        "membervalue": "华南大区"
    },
    "pdrill": [],
    "slices": [
        {
            "code": "918757352000327733",
            "value": "RECENTLYTHREEMONTH"
        }
    ]
}
```

* reportcode & slices

  与 `rp_datarequest` 的入参一致

* drill

  钻取维度信息，从约定的事件传参中获取

|参数|约定传参关键字|
|---|---|
|dimobjectcode|\_\_report\_dimobjectcode|
|propertycode|\_\_report\_propertycode|
|membervalue|\_\_report\_membervalue|

* pdrill

  父级钻取维度信息，例如支持多重展开的表格，每一重暂开的信息的格式均与 `drill` 相同。

  从约定关键字 `__report_pdrill` 中获取

#### Response

```json
// response
{
    ......
}
```

请参看[报表数据结构说明](ReportDataStructure.md)

## rp\_export

报表数据导出

```json
{
    "type": "rp_export",
    "datacode": "909973059585314889",
    "reportctrlcode": "925995501218828360",
    "slices": [
        {
            "code": "545613345463214",
            "value": "",
            "component": ""
        }
    ],
}
```

* datacode

  报表数据的code

* reportctrlcode

  报表控件的code，需要根据该控件实际的类型决定导出行为

  * 图表类型

    由前端生成图片导出

  * 表格类型

    调用接口生成excel文件导出

### 导出接口

URL：`api/teapi/report/biengine/report/exportexcel`

#### Request

```json
{
    "reportcode":"938318419474911280",
    "dimslevel": [
        {
            "dimobjectcode": "872640719498645580",
            "level": "2"
        }
    ],
    "slices":[]
}
```

* reportcode

  即datacode

* dimslevel

  维度信息，由报表控件负责提供当前短裤钻取到的维度信息

  * dimobjectcode

    维度的code

  * level

    该维度钻取到的层数

* slices

  搜索信息，与 `rp_datarequest` 中的一致