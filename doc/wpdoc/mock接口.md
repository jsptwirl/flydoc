---
title: mock接口
date: 2020-07-03T18:06:37
---

# 3.3.2. Mock接口

当前端列表控件需要store对象的数据，在flycode逻辑未写好前，可以自定义数据返回作为测试使用。

**例子**: mock一个查询门店的接口，返回门店信息列表

```js
OUT.store=[{"storeid":"1","storename":"门店1"},{"storeid":"2","storename":"门店2"}];
```

出参：

```json
{
    "resp_data": {
        "store": [
            {
                "storename": "门店1",
                "storeid": "1"
            },
            {
                "storename": "门店2",
                "storeid": "2"
            }
        ]
    }
}
```