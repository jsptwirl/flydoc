---
title: Text
date: 2019-08-09T11:34:14
---

# Text

Text 控件用于展示普通的文本信息，不可编辑。

Text 支持简单的字体，排版和颜色等style设置

## Protocol 协议

```
{
    "type": "text",
    "linenumber": "",
    "bgcolor": "",
    "color": "",
    "textalign": "",
    "bordervisible": "0"
}
```

### linenumber 最大显示行数

指定Text内容的最大显示行数。

0，默认值，表示不限制行数。

其他正整数，表示最多能显示几行。