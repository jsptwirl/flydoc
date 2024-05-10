---
title: flag标记语法
date: 2020-07-03T17:44:42
---

# 3.1.2.3. 标记语法

## 3.1.2.3.1. 分页标记

则会根据前端提供的分页信息，自动组装分页相关的sql语句。

**API**

```js
// 在flyQL语句结尾加上 paging 或 PAGING的标记，则引擎会自动对结果进行分页,并统计数据总条数
var temp = SELECT xx FROM xxx paging;
```

---

**例子**: 查询门店信息，并分页

```js
var temp = SELECT storeid, storename FROM kx_store PAGING;
OUT.kx_store = temp;
```

输出结果：

```json
"OUT": {
    "kx_store":[
        {
            "storeid":"",
            "storename":""
        }
        ...//5条记录
    ],
    "__paging":{    // 有分页时，输出会增加一个内置对象__paging
        "__pageindex":"0",  // 第1页
        "__pagesize":"5",   // 每页条数
        "__itemcount":"105" // 数据总条数
    }
}
```

---

**由于平台根据已有sql自动统计数据总条数，在某些场景中可能影响性能，用户可自定义统计条数的sql语句**

**例子**: 查询门店信息，并分页，数据总条数设置

```js
// 自定义统计条数的sql语句
var cc = SELECT count(1) as c FROM kx_store;
var itemcount = cc[0].c;

// PAGING后加上数据总数变量，平台则会使用以上统计结果
var temp = SELECT storeid, storename FROM kx_store PAGING(itemcount);

OUT.kx_store = temp;
```

输出结果：

```json
"OUT": {
    "kx_store":[
        {
            "storeid":"",
            "storename":""
        }
        ...//5条记录
    ],
    "__paging":{    // 有分页时，输出会增加一个内置对象__paging
        "__pageindex":"0",  // 第1页
        "__pagesize":"5",   // 每页条数
        "__itemcount":"105" // 数据总条数
    }
}
```

---

## 3.1.2.3.2. 动态排序标记

* 该标记会根据前端提供的动态排序信息，自动组装动态排序相关的sql语句。
* 该标记生成的排序与SQL语句中的 order by 互相叠加

前端提供的动态排序信息，与入参对象平行一起传递:

```json
{
    "kx_store":{    // 业务对象
        "storename":""
    },
    "__sorting":[   // 前端提供的动态排序信息
        {
            "key":"排序的字段名",
            "type":"asc或desc"
        },
        ...
    ]
}
```

**API**

```js
// 在flyQL语句结尾加上 sorting 或 SORTING的标记，则引擎会自动对结果进行排序
var temp = SELECT xx FROM xxx sorting;
```

---

**例**: 查询门店信息，当用户在表格控件上点击storename的列头时，动态切换排序语句

```js
var temp = SELECT storeid, storename FROM kx_store order by storeid desc SORTING;
OUT.kx_store = temp;
```

```sql
-- 1. 默认返回的列表按照 storeid降序排列
-- 2. 当用户单击表格控件上的storename列头，切换为 storeid降序和storename升序排列，
-- flycode引擎遇到 SORTING标记 后，则会生成如下sql语句去执行
SELECT storeid, storename FROM kx_store order by storeid desc, storename asc
```

```sql
-- 当用户再次单击表格控件上的storename列头，切换为 storename降序排列
-- flycode引擎遇到 SORTING标记 后，则会生成如下sql语句去执行
SELECT storeid, storename FROM kx_store order by storeid desc, storename desc
```

输出结果：

经过排序后的结果

*提示：分页和排序标记仅仅是一个标记，可以同时使用，且不分前后顺序；如:句末加paging sorting同等于 sorting paging;*

---

## 3.1.2.3.3. 数据权限标记

* 该标记是控制数据权限的，会根据该标记动态拼装过滤SQL，达到权限控制的效果
* 数据权限标记置于SQL的最后（与分页、排序同等，不分先后顺序）

* 数据权限标记分4种情况：

  1. 不使用权限标记，则该SQL默认所有相关业务实体都检查权限

  2. 标记“NORULE”，则该SQL的所有相关业务实体都不检查权限

  3. 标记白名单“RULE(\["A","B"\])”,则该SQL只对A和B业务主数据进行权限控制（注意：当使用白名单，字典实体默认存在白名单中）
  4. 标记黑名单“NORULE(\["A","B"\])”,则该SQL会忽略A和B业务主数据的权限控制

**例子**：终端实体(kx\_store)关联了营销区域(pl\_salearea)，其中营销区域为主数据，登录的岗位绑定了只能看本营销区域的数据的权限规则

```sql
    --1.原始SQL
    select * from kx_store NORULE; 等同于 select * from kx_store NORULE(["pl_salearea"]);
    --转化后SQL
    select * from kx_store;

    --2.原始SQL
    select * from kx_store; 等同于 select * from kx_store RULE(["pl_salearea"]);
    --转化后SQL
    select kx_store.* from kx_store kx_store
    left join pl_salearea pl_salearea on kx_store.saleareaid = pl_salearea.orgstructid
    where pl_salearea.codepath = '123456789';
```

## 3.1.2.3.4. 平台字段标记(NOPLAT)

平台业务对象对应的数据库表, 总是包含几个平台内置的字段.

platcreatetime: 数据的创建时间

platupdatetime: 数据的更新时间

platcreateop: 数据创建的操作人的成员id

platupdateop: 数据创建的更新人的成员id

platstatus: 数据状态 1: 正常 2: 逻辑删除了

* NOPLAT 标记会忽略 platstatus 条件 ，一般使用在离线下载的逻辑上

* 不使用此标记时, 所有的查询默认不会将\[逻辑删除\]状态的数据查询出来.
* NOPLAT标记写在SQL的最后（与分页、排序同等，不分先后顺序）

**例子**

```sql
    --原始SQL
    select * from kx_store a
    left join pl_salearea b on a.salesareaid = b.id
    where a.id = '1111' NOPLAT;
    --转换后的SQL
    select * from kx_store a
    left join pl_salearea b on a.salesareaid = b.id
    where a.id = '1111';
    --假如不加NOPLAT的转化SQL：
    select * from kx_store a
    left join pl_salearea b on a.salesareaid = b.id and b.platstatus = 1
    where a.id = '1111' and a.platstatus = 1;
```