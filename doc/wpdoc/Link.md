---
title: Link
date: 2020-05-22T15:59:06
---

# Link

链接到指定的表单

```json
{
    "type": "link",
    "condition": "",
    "pagecode": "",
    "mode": "popup",
    "pagesize": {
        "width": "60%",
        "height": "200"
    },
    "param": {
        "name": "__linkparam",
        "datatype": "0",
        "ctrl": {
            "code": "ctrl_calendar",
            "scope": "focus"
        },
        "properties": [
            {
                "name": "__calendar_date",
                "value": "",
                "ctrl": {
                    "code": "",
                    "component": ""
                }
            },
            {
                "name": "__pagestatus",
                "value": "2",
                "ctrl": {
                    "code": "",
                    "component": ""
                }
            },
            {
                "name": "__pagetitle",
                "value": "le:user('name')+'请假单'",
                "ctrl": {
                    "code": "",
                    "component": ""
                }
            }
        ]
    }
}
```

### pagecode

page的code。支持逻辑表达式，可以通过逻辑表达式计算出转跳到的页面。

### mode

|名称|取值|描述|
|---|---|---|
|推入|push|将下一个page推入到当前的导航控制器中，默认值|
|替换|replace|使用下一个page，替换当前page|
|弹窗|popup|创建新的导航器，以弹窗形式展现在当前page之上，下一个page作为新导航器的第一个界面（手机端暂不支持弹窗中跳转）|
|新建|present|创建新的导航器，以全屏形式展现在当前page之上，下一个page作为新导航器的第一个界面（web端表现为在新的浏览器页签中打开）|

### pagesize

指定链接目标表单显示大小，目前只在弹窗模式下起效。

通过分别指定 `width` 和 `height` 来设置page的大小，这两个维度接受以下取值：

* 0或者空值

  代表在该维度的尺寸需要根据内容大小自适应。

* 正整数

  取值范围为 `(0, +∞]` ，代表该维度的具体的dp值。

* 百分比

  取值范围为 `[0%, 100%]` ，代表该维度在所占可显示区域的百分比。

  IDE可以提供以下几种默认取值

|显示文本|实际值|
|---|---|
|大|80%|
|中|50%|
|小|30%|