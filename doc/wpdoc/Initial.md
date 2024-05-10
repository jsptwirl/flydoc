---
title: Initial
date: 2020-05-19T17:00:28
---

# Initial

页面初始化的时候调用的事件放置的区域，目前的设计是该区域只能放置 `Recivelink` 这一种行为。

## Receivelink

接收传参，用于将上个页面传过来的参数与当前页面中的控件进行绑定

```json
{
    "type": "receivelink",
    "condition": "",
    "param": {
        "datatype": "0",
        "name": "__linkparam",
        "ctrlcode": "",
        "properties": [
            {
                "name": "__pagestatus",
                "value": "2",
                "ctrl": {
                    "code": "",
                    "component": ""
                }
            },
            {
                "name": "reportinfo",
                "ctrl": {
                    "code": "reportA",
                    "component": ""
                }
            }
        ]
    }
}
```

* param

  目前param的处理与 `datarequest` 的 `setter` 基本一致

  但目前只接受一个对象，所以 `name` 的值固定为 `__linkparam`

由于该行为的特殊性，在使用时做出以下约定

1\. 一个page最多只能有一个接收传参行为  
  
2\. 该行为目前只能配置在事件的initial节点中