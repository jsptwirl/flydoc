---
title: Page Info 表单信息
date: 2020-05-19T16:49:46
---

## Page Info 表单信息

```json
"pageinfo": {
    "code": "907788671254663213",
    "title": "品项检查",
    "type": "5",
    "returnalertmessage": "",
    "eventlist": [
        {
            "trigger": "onload",
            "handler": ""
        },
        {
            "trigger": "onunload",
            "handler": ""
        },
        {
            "trigger": "onreturn",
            "handler": ""
        }
    ]
}
```

* title

  表单标题

* type

  表单类型，参看下方定义

* returnalertmessage

  点击返回时的提示语，如果配置了 onreturn 事件，将会忽略该属性

* eventlist

  * onload

  页面首次加载，将要显示时触发的事件

  * onunload

  页面消失时调用

  * onreturn

  点击页面返回按钮时触发，目前只在手机端有效

## Page Type 页面类型

根据page的

|名称|类型编码|说明|
|---|---|---|
|normal page|1|普通表单|
|menu page|2|入口表单|
|work flow page|3|Tab表单流|
|Master-Detail page|4|主从表单|
|List Page|5||
|approval flow|6|审批列表页面|
|report page|7|报表|
|login page|8|登陆页面|
|approval page|9|审批详情页面|
|switch page|10||
|Tree+List page|11||
||||
|Bluetooth Print Page|50|蓝牙打印表单|
||||
|customer page|99|定制页面|

## Page Status 页面状态

通常页面状态由传参决定，使用系统变量 \_\_pagestatus 来传递或者获取页面状态

|名称|编码|说明|
|---|---|---|
|新增状态|1||
|编辑状态|2||
|查看状态|3||

### 查看状态

当表单为查看状态时，将会默认进行以下操作：

1：将表单设为只读，所有子控件自动递归继承该状态。（除了搜索框和按钮）

2：将表单显示模式设置为紧凑模式，所有子控件自动递归继承该模式。（除了搜索框和按钮）