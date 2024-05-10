---
title: Customrequest
date: 2020-05-22T15:45:58
---

# Customrequest

自定义请求，用于执行一个自定义的http接口

```json
{
    "type": "customrequest",
    "uri": "XXfunction/XXapi",
    "getter": [...],
    "setter": [...]
}
```

* uri

  用于指定该自定义接口的uri。该行为会自动在其前面添加当前的使用的服务器地址的前缀。

* getter

  与 `link` 行为的 `param` 参数功能一致

* setter

  与 `recivelink` 行为的 `param` 参数功能一致

> 默认使用post方式，多个请求是同步执行的，一个请求执行结束后才执行下一个