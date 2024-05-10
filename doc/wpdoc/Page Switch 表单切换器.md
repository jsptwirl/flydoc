---
title: Page Switch 表单切换器
date: 2020-05-19T19:29:29
---

## Page Switch 表单切换器

### protocol

```json
{
    "pageinfo": {
        "title": "店面工作",
        "type": "10"  //pageswitch，页面同级切换
    },
    "pageswitch": {
        "mode": "1", //切换的方式，1 通过segment控件切换，且segment在导航栏上，适用于手机端
                    //          2 tab控件切换，适用于手机端和web端
                   //           6 通过列表控件切换，适用于web端 或 pad
        "menu": [], //父表单的菜单，ui显示的菜单为父表单菜单+当前子表单菜单
        "pagerefs": [//引用的page，默认显示第一个
            {
                "pagecode": "",//引用的pagecode
                "title": "",//引用的page的title
                "functioncode": "234234233234",
                "icon": ""
            }
        ],
        "eventlist": [
            {
                "trigger": "onload",
                "handler": "handler_pageswitch_onload"
            }
        ]
    }
}
```

## 参数传递

switch page 需要在加载子表单时，自动将自身接收到的传参，全部自动传递给子表单