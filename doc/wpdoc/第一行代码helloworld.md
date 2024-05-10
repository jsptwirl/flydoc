---
title: 第一行代码：helloworld
date: 2020-07-03T17:29:46
---

# 2\. 第一行代码

以下示例中，将演示flycode的重要特点 —— js语法与sql语法相结合的数据查询操作，我们把这种语句称为**FlyQL(flycode查询语言)**。

示例场景说明：

* 假设已经建立了业务对象 门店(kx\_store)，并且有 ID(storeid)和 门店名称(storename)的属性。
* 编写业务逻辑: 获取ID为1的门店，将门店名称修改为“示例门店1”，后保存。

```js
// 查询门店表，获得ID为1的门店
var temp = SELECT storeid, storename FROM kx_store WHERE storeid = 1;

// 修改门店名称
temp[0].storename = '示例门店1';

// 保存
DB.save(temp[0]);
```