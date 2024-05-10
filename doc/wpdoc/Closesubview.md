---
title: Closesubview
date: 2020-05-22T15:58:05
---

# Closesubview 关闭子视图

用于关闭当前最顶层的子视图，如果当前没有子视图，则该行为不产生任何效果。

```json
{
    "type": "closesubview",
    "condition": ""
}
```

## getter & setter

支持使用getter取值，所取得的值可以用于setter进行赋值

> 相当于datarequest事件中的getter和setter，不同之处在于此处getter获取到的值直接用于setter赋值，而不是作为入参调用接口来获取setter需要的值。