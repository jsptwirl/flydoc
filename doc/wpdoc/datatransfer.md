---
title: datatransfer
date: 2020-05-22T15:58:30
---

# 数据转移

用于表单内部进行批量数据转移，目前只支持对象和对象之间的数据转移，即数组型控件不支持

## 协议

```json
{
    "type": "datatransfer",
    "getter": [
        {
            "name": "__transferdata",
            "datatype": "",
            "ctrl": {
                "code": "",
                "scope": ""
            },
            "properties": [
                {
                    "name": "storename",
                    "value": "",
                    "ctrl": {
                        "code": "ctrl1",
                        "component": ""
                    }
                },
                {
                    "name": "storetype",
                    "value": "",
                    "ctrl": {
                        "code": "",
                        "component": ""
                    }
                }
            ]
        }
    ],
    "setter": [
        {
            "name": "__transferdata",
            "datatype": "",
            "ctrlcode": "",
            "properties": [
                {
                    "name": "storename",
                    "ctrl": {
                        "code": "ctrl2",
                        "component": ""
                    }
                },
                {
                    "name": "storetype",
                    "ctrl": {
                        "code": "ctrl3",
                        "component": ""
                    }
                }
            ]
        }
    ]
}
```

在该行为中，getter 和 setter 的属性只有 properties 是起效的，其余属性将会被忽略。不过为了与现有的getter和setter结构保持一致，并预留将来的更多可能，这些忽略的属性将暂时在协议中保留。

该行为会根据getter在page中获取值，然后根据setter，在page中进行赋值。

例如上方协议所示，将会把ctrl1的值赋值给ctrl2，同时会把内存值storetype赋值给ctrl3。

> datatransfer 行为的 getter 与 link 事件的 param 功能一致，setter 与 receivelink 事件的 param 功能一致