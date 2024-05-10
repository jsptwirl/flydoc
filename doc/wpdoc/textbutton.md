---
title: textbutton
date: 2020-05-20T16:18:44
---

# textbutton 文本按钮框

不能直接输入值，可以触发点击事件，然后通过外部设置值的按钮

```json
{
  "type": "textbutton",
  "code": "textbutton-9001284347634553",
  "titlewidth": "110",
  "titleflex": "",
  "title": "标题",
  "placeholder": "",
  "name": "",
  "icon": "refresh",
  "hiddenclearbtn": "1",
  "tips": "aaaa",
  "maxlength": "50",
  "eventlist": [
    {
      "trigger": "onvaluechange",
      "handler": "1207215468667080803"
    },
    {
      "trigger": "onclicked",
      "handler": "1207215468667080803"
    }
  ]
}
```

# ObjPicker

```json
{
    "type": "objpicker",
    "title": "标题",
    "placeholder": "",
    "eventlist": [
        {
          "trigger": "onvaluechange",
          "handler": "1207215468667080803"
        },
        {
          "trigger": "onclicked",
          "handler": "1207215468667080803"
        }
    ]
}
```