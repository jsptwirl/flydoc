---
title: Picklist
date: 2020-05-20T16:35:22
---

# Picklist

选择列表，用于大数量的简单选项（key-value）选择，支持单选或多选，支持搜索，不支持静态选项。

picklist可以像list控件一样进行赋值和显示选项（目前只支持行模板），又能像dropdownbox一样进行取值。

UI请参看picktree，不同之处在于选项列表不是树形结构。

# 协议

```json
{
    "type": "picklist",
    "title": "所属供货商",
    "multiselectable": "0",
    "pageable": "1",
    "filtertitle": "产品名称/销售区域",
    "loadevent": "24234234234",
    "eventlist": [
        {
            "handler": "",
            "trigger": "onvaluechange"
        },
        {
            "handler": "",
            "trigger": "onload"
        }
    ],
    "usetemplate": "",
    "template": {
        "style": "gridrow",
        "basicfields": [
            {
                "fieldtype": "rt_image",
                "title": "产品图片"
            },
            {
                "fieldtype": "rt_title",
                "title": "产品名称"
            }
        ],
        "attachedfields": [
            {
                "fieldtype": "rt_attachedinfo_1",
                "title": "销售区域"
            },
            {
                "fieldtype": "rt_attachedinfo_2",
                "title": "销售单位"
            }
        ]
    }
}
```

## 属性说明

### multiselectable 是否多选

默认值为 `0` ，表示单选，此时不会出现勾选框

### pageable 选项分页

用于指定选项是否支持分页。具体分页规则与List 控件一致，默认值为 `0` ， 即不分页。

### filtertitle 内置筛选条件标题

用于配置选项列表自带搜索框的标题，用于提示用户输入可搜索的内容，默认值为：“请输入”。

当确定搜索时，将根据 pageable 的不同有不同的处理。

当不支持分页时，即代表当前已经获取到了所有的选项，因此搜索可以自动在前端进行，此时会自动在所有选项的的字段中进行like匹配搜索；

> 手机端暂不支持分页

当支持分页时，在触发搜索后会自动执行onload事件，因此应该在onload事件中配置选项加载的行为。作为入参，搜索条件可以通过该控件的component：`filtertext` 获取，示例如下：

```json
"getter": [
    {
        "name": "searchconditions",
        "datatype": "0",
        "ctrl": {
            "code": "",
            "scope": ""
        },
        "properties": [
            {
                "name": "searchtext",
                "value": "",
                "ctrl": {
                    "code": "picklist_ctrl_code",
                    "component": "filtertext"
                }
            }
        ]
    }
]
```

### usetemplate 启用模版

用于指定是否启用选项行模版，默认值为‘0’，即不启用

### template 选项行模板

如果要自定义选项的显示，目前就只能配置行模板，具体参看 [行模板](http://apaas.wxchina.com:8881/technology/219/)

如果没有配置行模板，就会使用默认的样式，即只显示一个text字段。

# 赋值与取值

## 选项加载规则

当picklist作为setter的目标控件时，则认为是更新其选项，此时的setter的datatype应该是数组值。其配置方式是dropdownbox和list控件配置赋值的方式的融合，支持分页加载。

其中 text 和 key 必须要指定，相当于dropdownbox。

其他字段，也就是在template中指定的字段类似list的赋值方式赋值。

> 由于picklist可以配置在其他数组型控件中，因此此处在查找 picklistctrl 这个控件时，应该是先在 page 中查找，没找到，则依次在 page 中的数组型控件的子控件中查找。

```json
"setter": [
    {
        "name": "kx_store",
        "datatype": "1",
        "ctrlcode": "picklistctrl",
        "properties": [
            {
                "name": "storeid",
                "ctrl": {
                    "code": "",
                    "component": "key"
                }
            },
            {
                "name": "storename",
                "ctrl": {
                    "code": "",
                    "component": "text"
                }
            },
            {
                "name": "storename",
                "ctrl": {
                    "code": "rt_title",
                    "component": ""
                }
            },
            {
                "name": "storeaddress",
                "ctrl": {
                    "code": "rt_subtitle",
                    "component": ""
                }
            }
        ]
    }
]
```

## 赋值规则

当picklist作为setter的一个属性字段的关联控件时，则认为是给该控件赋值，其配置方式，以及接受的数据格式示例如下：

```json

// 给控件进行简单赋值，类似下拉框
"setter": [
    {
        "name": "kx_product",
        "datatype": "1",
        "ctrlcode": "picklistctrl",
        "properties": [
            {
                "name": "productid",
                "ctrl": {
                    "code": "picklistctrl",
                    "component": "key"
                }
            },
            {
                "name": "productname",
                "ctrl": {
                    "code": "picklistctrl",
                    "component": "text"
                }
            }
        ]
    }
]

// 如果需要
```

## 取值规则

取值方式与dropdownbox一致

```json
"getter": [
    {
        "name": "kx_product",
        "datatype": "0",
        "ctrl": {
            "code": "",
            "scope": ""
        },
        "properties": [
            {
                "name": "productid",
                "value": "",
                "ctrl": {
                    "code": "picklistctrl",
                    "component": ""
                }
            }
        ]
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