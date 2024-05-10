---
title: Packagesubmit
date: 2020-05-22T15:38:04
---

# Packagesubmit

打包提交，在pageareacode所指向的表单区域的所有表单中，找到提交数据的行为，通过该行为来获取提交数据，然后打包，进行一次性提交。

提交数据行为的查找，是通过表单的 submitaction 属性，找事件中找到对应的 datasubmit

```json
{
    "type": "packagesubmit",
    "condition": "",
    "pageareacode": "",
    "queue": "0",
    "mode": "2"
}
```

* pageareacode

  表单容器的code，通常是 tabpagearea 的code

* mode

  与 `datasubmit` 的 `mode` 属性有相同的取值和含义，不同之处在于当mode==2时，本地语句将会一条条的执行，且如果某个子上传行为不支持本地操作，也就是sql属性为空的话，就直接忽略该子表单的本地存储行为