---
title: Page 表单对象
date: 2020-05-19T18:27:56
---

# Page 表单对象

表单对象用于对表单进行操作，例如设置表单标题

## 表单属性

表单属性提供了一组可获取和设置的表单特性，用于对表单进行快捷操作。本质上属性就是不带参数的方法。

大部分的属性都可以用于获取和设置，一部分只能获取，或者只能设置。

|属性|简要说明|实现情况|
|---|---|---|
|status|表单状态|未实现|
|title|表单标题|未实现|
|params|表单参数|未实现|

\[【详情】\]( [http://apaas.wxchina.com:8881/2020/05/19/501/](http://apaas.wxchina.com:8881/2020/05/19/501/))

## 表单控制

|方法|简要说明|实现情况|
|---|---|---|
|statusIs|判断表单状态|✅|
|setTitle|设置表单标题|✅|
|getLinkParams|获取表单传参|✅|
|applyLayout|刷新表单布局|✅|

[【详情】](表单控制.md)

## 表单值存取

|方法|简要说明|实现情况|
|---|---|---|
|getValue|获取单个表单内存值|✅|
|getValues|获取多个表单内存值|✅|
|setValue|设置单个表单内存值|✅|
|setValues|设置多个表单内存值|✅|
|getCtrl|获取控件对象|✅|
|getPickerCtrl|获取选项控件对象|✅|
|getArrayCtrl|获取数组控件对象|✅|

[【详情】](表单值存取.md)

## 表单事件调用

|方法|简要说明|实现情况|
|---|---|---|
|callEvent|调用广播事件|✅|
|runEvent|调用表单事件|✅|
|constraintCheck|检查表单合法性|✅|
|openProgress|显示进度框|✅|
|closeProgress|关闭进度框|✅|
|setLoadStatus|设置表单数据加载状态|部分实现 ✅|
|alert|弹出对话框|✅|
|linkToPage|链接到指定表单（名称）|移动端✅|
|linkToPageCode|链接到指定表单（code）|移动端✅|
|returnToPage|返回到指定表单（名称）|移动端✅|
|returnToPageCode|返回到指定表单（code）|移动端✅|
|returnToPageCount|返回指定层级的表单|移动端 ✅|
|link|链接到指定表单（code）|Web ✅|
|return|返回到上一级表单|Web ✅|

[【详情】](表单事件调用.md)