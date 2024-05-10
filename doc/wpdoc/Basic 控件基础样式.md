---
title: Basic 控件基础样式
date: 2020-05-19T19:46:20
---

## Basic 控件基础样式

基础样式是指控件只显示最基本的交互元素。

通常输入类控件放置在表格，列表，或者搜索条内的之后，默认的显示方式就是基本样式。

## 支持基础样式的控件

### 表格 EditorTable

|控件|说明|
|---|---|
|teblecell||
|address||
|attachment|手机端暂不支持|
|checkbutton||
|currency||
|datepicker||
|daterange||
|dropdownbox||
|number||
|numberinputrange||
|memberpicker||
|periodicpicker||
|phonenumber||
|photo||
|picklist||
|picktree/cascade||
|text||
|textinput||
|textinputarea||
|objpicker|暂未实现|
|objmultipicker|暂未实现|

# UI样例说明

## Web端基本说明

对于web端来说，控件基本都有readonly，normal，hover，highlight，error这几种状态，

大部分的控件的原则基本相同，基本的原则如下

**readonly**：显示文字部分，没有边框，没有图标。

**normal**：显示一个边框，也可能包含一个图标。

**hover**：边框颜色加深，并且如果可以清除内容的，会在右边显示清除icon。

**highlight**：边框会在hover的基础上加上阴影。

**error**：边框颜色变为红色，显示一个错误标记，点击可以弹出具体的错误信息。

![](http://apaas.wxchina.com:8881/wp-content/uploads/Basic%E6%8E%A7%E4%BB%B6%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F-%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F_%E9%80%9A%E7%94%A8%E8%AF%B4%E6%98%8E.png)

*也有部分控件的部分样式不同，会在下方具体说明。*

## 输入类

这类控件通常使用键盘输入，包括文本输入，电话输入，大文本框，数字输入等，这些控件当内容过多时会做打点处理。

### 非数字输入

这类文本输入对齐方式默认为左对齐。

![](http://apaas.wxchina.com:8881/wp-content/uploads/Basic%E6%8E%A7%E4%BB%B6%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F-%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F_%E8%BE%93%E5%85%A5%E7%B1%BB.png)

样式分别为normal，readonly，error。下方的所有样例都是如此。

### 数字输入

数字的对齐默认为右对齐，且数字范围输入控件会显示两个独立的输入框。

![](http://apaas.wxchina.com:8881/wp-content/uploads/Basic%E6%8E%A7%E4%BB%B6%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F-%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F_%E6%95%B0%E5%AD%97%E8%BE%93%E5%85%A5.png)

### 日期输入

日期作为一个特殊的输入，输入时有图标标记，同时支持时间区间的选择样式。

![](http://apaas.wxchina.com:8881/wp-content/uploads/Basic%E6%8E%A7%E4%BB%B6%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F-%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F_%E6%97%A5%E6%9C%9F%E8%BE%93%E5%85%A5.png)

## 选择类

选择类的控件通常右边会有一个对应的图标，目前除了人员和对象有特殊图标外，其他的均为一个向下箭头。

### 单选

如果选项内容国长，打点

![](http://apaas.wxchina.com:8881/wp-content/uploads/Basic%E6%8E%A7%E4%BB%B6%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F-%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F_%E9%80%89%E6%8B%A9%E7%B1%BB.png)

### 多选

选择类控件通常还会有多选的场景，当多选时其样式会很不一样，会显示一个添加按钮，用于添加选项。同时选项会有背景色，hover时会显示删除按钮。

如果内容过多可以换行。控件的placeholder文本会显示添加按钮中。

![](http://apaas.wxchina.com:8881/wp-content/uploads/Basic%E6%8E%A7%E4%BB%B6%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F-%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F_%E9%80%89%E6%8B%A9%E7%B1%BB_%E5%8D%95%E9%80%89%E5%A4%9A%E9%80%89.png)

## 特殊类

还有一些控件，由于其各种特性使得其显示方式会比较特殊，列举如下

### 勾选按钮

由于勾选按钮不会存在error状态，因此只有可输入和只读两种样式如下：

![](http://apaas.wxchina.com:8881/wp-content/uploads/Basic%E6%8E%A7%E4%BB%B6%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F-%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F_%E5%8B%BE%E9%80%89.png)

### 地址

地址由于在只读时也能点击查看地图详情，因此只读时会显示一个图标。

如果显示不下地址，打点。

![](http://apaas.wxchina.com:8881/wp-content/uploads/Basic%E6%8E%A7%E4%BB%B6%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F-%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F_%E5%9C%B0%E5%9D%80.png)

### 照片

web端也支持使用photo控件上传图片，样式类似于多选，过多的图片可以换行。

如果已经达到照片数量的上限将不再显示添加按钮。

![](http://apaas.wxchina.com:8881/wp-content/uploads/Basic%E6%8E%A7%E4%BB%B6%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F-%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F_%E7%85%A7%E7%89%87.png)

### 附件

附件由于可能很大，并且支持下载，因此有多种显示的状态，并且一个附件占一行，如果已经达到附件数量的上限将不再显示上传按钮，具体参看如下

![](http://apaas.wxchina.com:8881/wp-content/uploads/Basic%E6%8E%A7%E4%BB%B6%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F-%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F_%E9%99%84%E4%BB%B6.png)