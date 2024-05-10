---
title: CheckButton
date: 2020-05-20T17:42:01
---

# CheckButton

用于标记一个Bool状态的控件，只有固定的两个值

![](http://apaas.wxchina.com:8881/wp-content/uploads/checkbutton.png)

## Protocol

```json
{
    "type": "checkbutton",
    "title": "",
    "text": "是否已铺货",
    "value": "0",
    "checkvalue": "1",
    "uncheckvalue": ""
}
```

* value

  取值为 `checkvalue` 和 `uncheckvalue` 指定的值中的一个，默认为 `uncheckvalue` 的值

* checkvalue

  勾选时所代表的值，可以不设置，默认为 `1`

* uncheckvalue

  未勾选时所代表的值，可以不设置，默认为空串 `""`