---
title: query查询基础
date: 2020-07-03T17:43:07
---

# 3.1.2.1. 查询基础

## 3.1.2.1.1. FlyQL基础

* 以 **"select"** 开头(全大写或全小写)，**";"** 结尾的语句，被识别为FlyQL。
* FlyQL的查询结果是一个 **业务对象数组** 或者 **业务视图**(如合并查询语句union等，无法被识别为业务对象的，将会以业务视图返回)，可赋给中间变量供后续处理，或直接赋给输出对象。

---

**例**: 查询门店信息，赋予temp变量

```js
var temp = SELECT storeid, storename FROM kx_store;

OUT.kx_store = temp;
```

OUT.kx\_store的结构如下:

```json
[
    {
        "storeid":"3242334",
        "storename":"测试门店1"
    }
]
```

---

## 3.1.2.1.2. 关联查询 join

关联查询时，需要配置对应到输出对象属性的别名，输出对象中的关联对象规则详见 **业务对象输入输出** 章节

---

**例**: 查询门店信息，并关联出门店所属的营销区域名称

```js
var temp = SELECT kx_store.storeid, kx_store.storename, kx_salearea.saleareaname as saleareaid__saleareaname
    FROM kx_store
    LEFT JOIN kx_salearea ON kx_store.saleareaid = kx_salearea.saleareaid;

OUT.kx_store = temp;
```

OUT.kx\_store的结构如下:

```json
[
    {
        "storeid":"3242334",
        "storename":"测试门店1",
        "saleareaid__saleareaname":"测试区域1"   // 主对象字段 加两个下划线 加从对象字段
    }
]
```

---

## 3.1.2.1.3. 合并查询 union

flycode支持union等合并查询操作，合并查询的结果**只能是业务视图，业务视图不能进行增删改**。

---

**例**: 查询门店/渠道商信息，并合并

```js
// 查询终端信息的storeid,storename 合并 渠道信息的channelid,channelname，合并后，字段名以第一个查询字段为准(此规则与sql标准相同)
var temp = SELECT storeid, storename 
    FROM kx_store
UNION
    SELECT channelid, channelname
    FROM kx_channel;

OUT.kx_store = temp;
```

输出结果:

```json
"OUT":{
    "kx_store":[
        {
            "storeid":"",
            "storename":"门店1"
        },
        {
            "storeid":"",
            "storename":"渠道1"
        },
        ...
    ]
}
```

---