---
title: Refresh
date: 2020-05-22T15:55:43
---

# Refresh

刷新事件，目前与call、eventlink组合使用，接受后一页面向前一页面传参

```json
{ 
    "type": "refresh",
    "param": {}
}
```

* param

  refresh接收的参数

```json
"param": {
        "datatype": "0", //需要根据datatype拆包，拆包打包的datatype需要一致
        "name": "kx_product",
        "ctrlcode": "882838950048305222", //列表控件
        "optype": {//当ctrlcode不为空且为容器类控件有效，
        //取值有：insert 从头插入； append 从尾加入；
        //       insertorupdate：与key配合使用，存在的刷新，不存在的在头插入
        //       insertorupdateordelete：与key配合使用，存在的刷新，原数据不存在于新数据的删除，新数据不存在于原数据的从头插入
        //       refresh：清空所有，加入新数据
        //       refreshindex：刷新某一行，某一行由容器控件记录，比如点击时记录
        //默认为空，效果与refresh一致
            "type":"insert",
            "key":""
        },
        "properties": [
            {
                "ctrl": {
                    "component": "",
                    "code": ""
                },
                "name": "productid"
            },
            {
                "ctrl": {
                    "component": "",
                    "code": "882838950048305221"
                },
                "name": "productname"
            }
        ]
    }
```