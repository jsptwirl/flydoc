---
title: ArrayCtrl 数组型控件-属性说明
date: 2020-05-09T17:33:45
---

# 属性说明

## get checkedNumber

获取数组型控件勾选的数量

|返回类型|可空|说明|
|---|---|---|
|Int|否|返回数组型控件勾选的数量|

**实现情况：**

|支持的控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>已实现</font>|<font>已实现</font>|<font>未检测</font>|
|表格 table|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|折叠列表 accordion|<font>未实现</font>|<font>未实现</font>|<font>未实现</font>|
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未实现</font>|

## get pageIndex

获取数组型控件的当前分页索引

|返回类型|可空|说明|
|---|---|---|
|Int|否|返回数组型控件的当前分页索引|

**实现情况：**

|支持的控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>已实现</font>|<font>未实现</font>|<font>未检测</font>|
|表格 table|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|折叠列表 accordion|<font>未实现</font>|<font>未实现</font>||
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未实现</font>|

## get rowNumber

获取数组型控件的总行数

|返回类型|可空|说明|
|---|---|---|
|Int|否|返回数组型控件的总行数|

**实现情况：**

|支持的控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>已实现</font>|<font>已实现</font>|<font>未检测</font>|
|表格 table|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|折叠列表 accordion|<font>已实现</font>|<font>已实现</font>||
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未实现</font>|

## get sectionNumber

获取数组型控件的总分组数

|返回类型|可空|说明|
|---|---|---|
|Int|否|返回数组型控件的总分组数，注意，若分组型控件不支持分组，该属性永远返回1|

### 实现情况

|支持的控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>已实现</font>|<font>未实现</font>|<font>未检测</font>|
|表格 table|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|折叠列表 accordion|<font>未实现</font>|<font>未实现</font>||
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未实现</font>|