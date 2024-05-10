---
title: DataProcess
date: 2020-05-22T14:50:33
---

# DataProcess

数据操作相关的行为

```json
{
    "type": "",
    "code": "",
    "isshowhint": "1",
    "processhint": "请稍候...",
    ......
}
```

**以下属性为所有数据处理相关的行为共有的属性**

* isshowhint

  是否显示提示信息，用于控制是否在行为执行过程中显示提示信息，`bool` 类型，默认值为 `1` ，表示需要显示。

* processhint

  数据处理过程中显示的文字信息，`string` 类型，默认值为 `请稍候...`