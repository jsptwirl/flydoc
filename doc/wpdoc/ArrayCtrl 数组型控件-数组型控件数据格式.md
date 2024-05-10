---
title: ArrayCtrl 数组型控件-数组型控件数据格式
date: 2020-05-09T17:45:47
---

# 数组型控件数据格式

数组型控件数据格式分两种，有分组形式和无分组形式

有分组格式如下，注意，section和row这两个key应该根据实际的数组型控件而定

```json
[
    {
        "section":{
            "sectionKey1":"value",
            "sectionKey2":"value"
        },
        "row":[
            {
                "rowKey1":"value",
                "rowKey2":"value"
            },
            {
                //下一行的数据
            }
        ]
    },
    {
        //下一个分组的数据
    }
]
```

无分组格式

```json
[
    {
        "rowKey1":"value",
        "rowKey2":"value"
    },
    {
         //下一行的数据
    }
]
```