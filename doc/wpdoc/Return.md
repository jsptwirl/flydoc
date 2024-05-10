---
title: Return
date: 2020-05-22T16:00:01
---

# Return

返回到某一表单

```json
{
    "type": "return",
    "condition": "",
    "pagecode": "",
    "pagecount": "1"
}
```

* pagecode

  指定要返回的page的code，为空的时候需要根据 `pagecount` 的值来判断返回路径，默认值为空

* pagecount

  指定要返回的page级数，例如 `pagecount = 1` 表示返回到上一级表单。

  只有当 `pagecode` 为空的时候才会使用 `pagecount` 来判断返回路径。

  当 `pagecode` 和 `pagecount` 均为空的时候，表示返回上一级表单。