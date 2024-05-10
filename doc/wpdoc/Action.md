---
title: Action
date: 2020-05-19T16:59:47
---

# Action

行为是指完成一项特定任务的指令，是表单能够配置的逻辑的基本单元。

目前表单提供了多种的行为，通过这些行为的组合，可以实现丰富的表单逻辑。

根据行为的作用分为以下几类

* Data Process 数据处理

|name|function|
|---|---|
|datarequest|数据请求，用于表单中控件值，控件选项等数据的获取|
|datasubmit|数据提交，用于存储指定的表单中的数据|
|cachedatarequest|缓存数据请求，用于从缓存数据中筛选获取数据|
|packagesubmit|打包提交|
* Page Functions 表单逻辑

|name|function|
|---|---|
|refresh|刷新，重新加载表单或控件|
|alert|弹框提示|
|eventlink|调用当前page的某个event|
|ctrlevent|触发当前page的某个控件绑定的event|
|call|发出事件调用广播|

* Page Navigation 表单导航

|name|function|
|---|---|
|link|链接|
|recivelink|接收链接参数|
|return|返回上一表单|

* Flycode

  调用 `Flycode` 的专用行为，可以将一些零散的，不方便配置的逻辑，放置其中，然后插入到行为执行队列中去。

* Particular Action 特殊行为

  对应于特定场景和表单的行为，不能随意配置，只能应用于特定的场景

  * 工作流事件

|name|function|
|---|---|
|af\_preaddflow|发起审批流程，用于在业务表单发起指定的类型的审批流程|
* 报表事件

|name|function|
|---|---|
|rp\_optionrequest|报表选项值获取|
|rp\_datarequest|报表数据获取|

## Common Attribute

所有的事件都具有以下属性

```json
{
    "type": "datarequest",
    "desc": "刷新列表",
    "condition": "",
    "failhint": ""
}
```

* desc

  行为描述，仅用于描述行为的用途

* condition

  行为执行的条件，当条件为 `空`，或者条件中的表达式的结果是 `true` 时，行为才能被执行。

* failhint

  行为执行失败的提示内容标题，空值的时候显示由具体行为返回的错误信息，如果最终提示信息为空，则表示不需要显示提示。

  提示信息为一个弹出的信息框，包含提示内容和一个 `确定` 按钮。