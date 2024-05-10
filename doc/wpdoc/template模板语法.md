---
title: template模板语法
date: 2020-07-03T17:43:51
---

# 3.1.2.2. FlyQL模板语法

在sql查询语句中可以穿插动态模板 **{js语句}**，运行时根据模板条件组装语句，实现**动态SQL**。

**API**

```js
// 动态参数引用: { }
// 动态条件语句: {#if } {#endif}
```

---

**例1**: 查询门店信息，查询条件门店名称来自输入参数

```js
// 假设输入参数 kx_store.storename 为前端输入的门店名称
// IN 为输入对象的集合，可参考 业务对象/输入/输出 章节
var temp = SELECT storeid, storename FROM kx_store
    WHERE storename = {IN.kx_store.storename};
```

**例2**: 查询当前登录人所负责的门店

```js
// SESSION.mbcode 为当前登录人成员编号
// 门店列表查询过滤出当前责任人等于当前登录人的记录
var temp = SELECT storeid, storename FROM kx_store
    WHERE princial = {SESSION.mbcode};
```

**例3**: 根据入参是否存在动态拼接语句

```js
// 若IN.kx_store.storename不为空，则加入条件语句
var temp = SELECT storeid, storename FROM kx_store
{#if IN.kx_store.storename != null}
    WHERE storename = {IN.kx_store.storename}
{#endif}
```

---