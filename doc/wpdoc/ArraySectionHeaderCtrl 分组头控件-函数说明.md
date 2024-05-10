---
title: ArraySectionHeaderCtrl 分组头控件-函数说明
date: 2020-05-09T17:53:26
---

# 函数说明

## **getCtrl(ctrlName)**

获取行控件中的子控件

|参数|类型|可空|说明|
|---|---|---|---|
|ctrlName|String|否|子控件的名字|

|返回类型|可空|说明|
|---|---|---|
|Ctrl|可|返回行控件的子控件，若子控件不存在，返回null，注意，目前通过该方法返回的子控件，不完全具有Ctrl的能力，目前只支持getValue、setValue|

### 实现情况

|支持的控件|iOS|Android|Web|
|---|---|---|---|
|分组列表 sectionlist|<font>未检测</font>|<font>未检测</font>|<font>未检测</font>|

## getValue(key)

获取行控件中绑定的值

|参数|类型|可空|说明|
|---|---|---|---|
|key|String|否|绑定值对应的key|

|返回类型|可空|说明|
|---|---|---|
|String／Dictionary|可|返回对应key绑定的值，若key不存在，返回null|

### 实现情况

|支持的控件|iOS|Android|Web|
|---|---|---|---|
|分组列表 sectionlist|<font>未检测</font>|<font>未检测</font>|<font>未检测</font>|

## setValue(key, newValue)

设置行控件中绑定的值

|参数|类型|可空|说明|
|---|---|---|---|
|key|String|否|绑定值对应的key|
|newValue|String／Dictionary|可|绑定值对应的值|

|返回类型|可空|说明|
|---|---|---|
|无|||

### 实现情况

|支持的控件|iOS|Android|Web|
|---|---|---|---|
|分组列表 sectionlist|<font>未检测</font>|<font>未检测</font>|<font>未检测</font>|

## getValues(keys)

获取行控件中多个绑定的值

|参数|类型|可空|说明|
|---|---|---|---|
|keys|Array|可|绑定值对应的keys，Array形如\[String\]，当keys为null时，获取所有绑定的值|

|返回类型|可空|说明|
|---|---|---|
|Dictionay|可|返回对应key绑定的值，若key不存在，返回null|

### 实现情况

|支持的控件|iOS|Android|Web|
|---|---|---|---|
|分组列表 sectionlist|<font>未检测</font>|<font>未检测</font>|<font>未检测</font>|