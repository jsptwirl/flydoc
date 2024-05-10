---
title: ReportDataStructure
date: 2020-05-20T17:38:26
---

# Report Data Structure

报表数据结构说明

## Basic 基础数据结构

# Pie

```json
"protocols": {
    "fieldname": "name",
    "field": "bi_fact_store_struct.storecount",
},
"datas": [
    {
        "name": "T_Q渠道类型1",
        "bi_fact_store_struct.storecount": "1"
    },
    {
        "name": "T_s测试渠道类型123",
        "bi_fact_store_struct.storecount": "3"
    }
]
```

### protocols.fieldname

指定数据名称的字段名

### protocols.field

指定数据的字段名

### datas

数据数组

# Lines

```json
"protocols": {
    "yAxis": [
        {
            "axialdirection": 1,
            "name": "拜访完成率"
        }
    ]
},
"datas": [
    {
        "group": "拜访完成率",
        "seriesdatas": [
            {
                "xname": "2月",
                "yname": "0"
            },
            {
                "xname": "3月",
                "yname": "0.14893617021276595"
            }
        ]
    }
]
```

### protocols.yAxis

对y轴数据的定义

* name

  数据列的名称，与 **datas.group** 的值相对应。

* axialdirection

  指定该列数据对应的第几个Y轴，从1开始计算。例如目前手机端只支持两条Y轴，则1表示左边的，2表示右边的。

### datas

数据

* group

  数据列的名称，用于关联对应 **protocols.yAxis** ，不过由于基本数据是按顺序排列的，因此也可以忽略该属性，直接按顺序进行对应。

* seriesdatas

  该列的实际数据

  * xname

  在x轴上的值，当有多列数据时，只看第一列的数据的该值即可。

  * yname

  在y轴上的值。

  目前会统统将该字段的字符串转为double数字处理。

# LineBar

```json
"protocols": {
    "header": "web_业绩版_终端客户情况",
    "yAxis": [
        {
            "axialdirection": 1,
            "name": "客户总数"
        },
        {
            "axialdirection": 2,
            "name": "客户活跃率"
        }
    ]
},
"datas": [
    {
        "group": "客户总数",
        "seriesdatas": [
            {
                "xname": "1月",
                "yname": "16"
            }
        ]
    },
    {
        "group": "客户活跃率",
        "seriesdatas": [
            {
                "xname": "1月",
                "yname": "0.75"
            }
        ]
    }
]
```