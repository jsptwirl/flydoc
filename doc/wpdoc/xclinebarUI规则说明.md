---
title: xclinebarUI规则说明
date: 2020-05-20T13:40:32
---

# xclinebarUI规则说明

简化版

![](http://apaas.wxchina.com:8881/wp-content/uploads/axialPlaneSimple.png)

选中样式

![](http://apaas.wxchina.com:8881/wp-content/uploads/axialPlaneSelect.png)

## 图例显示规则

柱线图的图例统一显示在图表与标题之间，具体数值如下

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E7%94%A8%E4%BE%8BUI%E8%AF%B4%E6%98%8E.png)

线状图用例标识和柱状图的用例标识的颜色，与其对应的数据列使用的颜色一致。

markline标识的颜色与markline的颜色一致。

## x轴显示规则

x轴显示在图表区域的最下方，由一条轴线和下方的行标题组成。

![](http://apaas.wxchina.com:8881/wp-content/uploads/x%E8%BD%B4UI%E8%AF%B4%E6%98%8E.png)

1. 行标题由N个（N = x轴的data数据个数）**数据单元** 组成。
2. 每个标题放置在对应的数据单元中，居中显示。
3. 一个数据单元小的宽度为 40pt ，当 `图标区域的宽度 < 数据单元的宽度 * 数据单元个数` 时，行标题可以左右滑动来查看。

## y轴显示规则

## 数据列显示规则