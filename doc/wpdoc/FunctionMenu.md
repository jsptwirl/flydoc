---
title: FunctionMenu
date: 2020-05-20T17:27:09
---

# Function Menu

功能菜单

```Json
{
    "type": "functionmenu",
    "code": "300000000005555",
    "dataitems": [
        {
            "icon": "",
            "title": "工作",
            "pagecode": "",
            "hidden": "",
            "dataitems": [
                {
                    "title": "今日拜访",
                    "icon": "",
                    "subtitle": "",
                    "pagecode": "3196098397675000030",
                    "hidden": ""
                },
                {
                    "title": "统计",
                    "icon": "",
                    "subtitle": "",
                    "pagecode": "3196098397675000020",
                    "hidden": ""
                }
            ]
        },
        {
            "icon": "",
            "title": "我",
            "pagecode": "",
            "hidden": "",
            "dataitems": [
                {
                    "icon": "",
                    "title": "下载管理",
                    "pagecode": "buildin:settingdownloadmanager",
                    "hidden": ""
                },
                {
                    "icon": "",
                    "title": "退出",
                    "pagecode": "buildin:settinglogout",
                    "hidden": ""
                }
            ]
        }
    ]
}
```

* dataitems

  数据项，用于配置具体的功能项，目前支持两级

* dataitems.icon

  功能项的图标

* dataitems.title

  功能项的标题

* dataitems.pagecode

  功能项所关联的表单

* dataitems.hidden

  功能项的隐藏条件，支持flycode