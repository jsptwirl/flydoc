---
title: ArrayRowCtrl 行控件-属性说明
date: 2020-05-09T17:50:59
---

# 属性说明

## get checked

获取行控件的勾选状态

|返回类型|可空|说明|
|---|---|---|
|Bool|否|返回行控件是否勾选，注意，若行控件不支持勾选能力，该属性永远返回false|

### 实现情况

|支持的控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>已实现</font>|<font>已实现</font>|<font>已实现</font>|
|表格 table|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|折叠列表 accordion|<font>未实现</font>|<font>未实现</font>|<font>未实现</font>|
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未实现</font>|
|分组列表 sectionlist|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|

## set checked

设置该行是否选中

|输入类型|可空|说明|
|---|---|---|
|Bool|否||

```js
//设置文本控件的值
listCtrl.getRowAtIndexPath(IndexPath(0, 1)).checked = false;
```

### 实现情况

|支持的控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>已实现</font>|<font>已实现</font>|<font>已实现</font>|
|表格 table|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|折叠列表 accordion|<font>未实现</font>|<font>未实现</font>|<font>未实现</font>|
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未实现</font>|
|分组列表 sectionlist|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|