---
title: Call
date: 2020-05-22T15:55:18
---

# Call

事件呼叫行为，按key查找

```json
{  
    "code": "897995503285964871",
    "type": "call",
    "pagecode": "",
    "key": "__pageprocesscomplate",
    "desc": "拜访表单处理完成事件"
    "param": {}
}
```

* key

  指定调用的key，系统将会广播改key，所有当前存在的页面都会收到该广播，并执行与该key一致的事件（handler中）。

* pagecode

  【废弃属性】

  默认情况下向所有表单广播，也可以通过该属性向指定的某一个表单进行广播

* param

  call支持附带参数

  ```json
  "param":               //call支持参数
  { 
    "datatype": "0", //需要根据datatype打包，拆包打包的datatype需要一致
    "ctrl": {
        "code": "",
        "scope": ""
    },
    "name": "kx_product",
    "properties": [
        {
            "ctrl": {
                "component": "",
                "code": ""
            },
            "name": "productid",
            "value": "le:uuid()"
        },
        { //在当前表单的文本控件获取新建的产品名字
            "ctrl": {
                "component": "",
                "code": "883266839692709975"
            },
            "name": "productname",
            "value": ""
        }
    ]
  }
  ```