---
title: link链接按钮控件
date: 2020-11-04T09:59:38
---

# link链接按钮控件

使用单纯的文字来作为一个按钮功能的控件，一般用于取代放在旧表格的按钮控件，支持配置对齐方式，支持配置下划线，以及一般的控件样式配置。

```
{
    "type": "link",
    "code": "link-123456",
    "name": "",
    "eventlist": [
        {
            "trigger": "onclicked",
            "handler": "xxxx"
        }
    ],
    "value": "按钮文字",
    "linenumber": "",
    "color": "",
    "fontsize": "",
    "fontweight": "",
    "textalign": "",
    "underline": "0"
}
```

### 版本要求

* web端引擎包 >= V9.2.3

### 属性说明

**value**  
控件值，用于设置该按钮显示的文字，可用于取值和赋值。

**linenumber**  
最大显示行数，指定内容的最大显示行数。  
0，默认值，表示不限制行数。  
其他正整数，表示最多能显示几行，超出用省略号...表示。

**underline**  
下划线，bool值，控制是否显示下划线，默认值为 0，表示不显示。

**textalign**  
指定文字对齐方式，支持left，center，right三种取值，默认值为left。

**fontsize**  
控制字体大小，默认值为14。

**fontweight**  
字重，目前只支持三种字体设置。  
normal：常规，默认值  
bold：粗体

**color**  
字体颜色。

### 配置效果

![](http://apaas.wxchina.com:8881/wp-content/uploads/link.png)