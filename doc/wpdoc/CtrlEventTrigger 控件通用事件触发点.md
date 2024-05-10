---
title: CtrlEventTrigger 控件通用事件触发点
date: 2020-05-20T15:10:39
---

# Ctrl Event Trigger

## onload

所有的控件都有 `onload` 事件

该事件在控件被加载(渲染)的时候调用

> `page` 页面的 `onload` 事件在表单加载(此时控件还未开始加载)时调用

## onrefresh

所有支持刷新内容的控件都有该事件

例如：list，table等

## onvaluechange

所有的录入型控件都有 `onvaluechange` 事件

该事件在控件的值发生改变时调用，注意，只有是在用户直接输入导致的值改变才会调用，其他方式（例如事件赋值等）造成的值改变，不触发该事件（Web端因历史原因需要特殊处理，请看备注）

录入型控件有：

textinput, textinputarea, filtertextinput, currencyinput, datepicker, photo, attachment, location, picklist, selectbox, cascade

### web端备注

* V9.4.0后的版本后，onvaluechange有0.5秒的防抖(新改版的控件有效)，不支持配置
* 因历史原因，web端部分控件事件赋值等方式赋值也会触发值改变事件（editortable内的控件除外），如果赋值的值等于控件的值则不触发（防止配置错误的uiflycode引起死循环）

|事件/uiflycode赋值行为赋值能触发值改变事件的控件|
|---|
|checkbutton|
|picktree|
|datatree|
|dropdownbox|
|memberpicker|
|daterange|
|date/datepicker|
|textbutton|
|switch|
|selectbox|
|cascade|

## onblur

焦点移出事件，目前输入型控件支持

textinput, textinputarea, filtertextinput, currency,number

## onloadoptions

所有的选项值控件都有 `onloadoptions` 事件

该事件在控件的选项为空，且用户点击了控件，需要显示选项时调用。

***暂时不可用***

## onloadsuboptions

所有的级联选项值控件都有 `onloadsuboptions` 事件

该事件在控件的当前需要加载的选项层的选项为空时调用。该事件需要将子选项层的parentid，也就是当前选中的选项的id，作为参数传入，约定的参数名为 `__optionid`

***暂时不可用***

## onclicked

所有的可点击控件具有该事件

该事件在用户点击控件后触发

可点击控件有：

button，rows

## onchecked

所有的数组值容器控件均有这个事件

该事件在控件可选择行的情况下，用户点击行（list），或者点击对应的checkbox（table）时，触发该事件。该事件需要将当前选中的行的数量用参数传出，约定的参数名为 `__checkednumber`