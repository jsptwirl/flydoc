---
title: Import导入
date: 2020-09-10T13:39:18
---

# Import 导入

用于使用excel进行批量数据导入

> 建议导入的action后面不要配置其他相关的行为。

## 协议

```json
{
    "type": "dataimport",
    "desc": "导入行为",
    "condition": "",
    "servicetype": "background/forground/micro",
    "logiccode": "934961275815989347",
    "microclass": "myImportMicroService",
    "template": "imp_usermgr",
    "templatename": "人员模版",
    "extraparam": [
        {
            "title": "当数据重复时如何处理",
            "paramkey": "_dataaddmode",
            "requesturl": "customerurl",//协议保留，IDE删除
            "tips": "",
            "options": [
                {
                    "key": "1",
                    "text": "覆盖"
                },
                {
                    "text": "追加",
                    "key": "2"
                },
                {
                    "text": "放弃",
                    "key": "3"
                }
            ]
        },
    ],
    "onsuccess": "success event code", // 一定要在导入窗口没有关闭的情况下自动执行
    "getter": [],
    "setter": []
}
```

### servicetype

用于指定当前导入行为的种类，不同种类的导入方式，需要配置的属性有所不同。

目前导入分为一下三类：

* background 后端导入

  默认值，使用flycode直接将excel数据导入后台数据库中。

  该种方式需要配置 `logiccode` 属性指定调用的flycode接口

* forground 前端导入

  使用flycode将excel数据进行解析，但并不存储，而是直接以出参形式返回给调用端。

  这种方式需要配置 `logiccode` 属性指定调用的flycode接口，同时还需要配置 `setter` 属性，用于出参与控件的绑定。

  > 目前前端导入的场景基本是使用数据绑定到表格中进行编辑，目前只支持完全覆盖的方式？，只有editortable，不支持追加或者更新数据的方式。

* micro 微服务导入

  使用微服务的方式进行后端数据导入。

  这种方式需要配置 `microclass` 属性，指定调用的微服务的类名。

### logiccode

导入使用到的flycode接口的code

### microclass

导入使用到的微服务接口的类名

### template & templatename

导入使用的数据模板的key值和name值

### extraparam

附加参数，用于配置附加的其他参数，目前支持两种参数

* 自定义接口URL

  用于指定一些项目自定义了请求地址

* 重复数据处理规则

  用于实施自定义重复数据处理规则

  > 新版导入重复处理规则的配置与处理，参看下方说明

### getter

当导入接口需要额外提供业务数据作为入参时，需要配置该属性。

此处的getter和datasubmit的getter用处一致，用于获取表单中的业务数据，用于组装接口入参。IDE根据`logiccode` 的入参列表提供配置选项。

> 如果使用的是微服务导入方式，又需要提供额外业务参数时，需要提供一个空的flycode接口，并且配置到`logiccode` 属性中 ，用于IDE获取入参配置信息

### setter

前端导入需要配置该属性，用于出参的赋值绑定，与datarequest的setter功能一致。

## 数据处理策略

在旧的协议中，策略支持实施自定义key和text，以及策略的数量。但在实践中实际最多使用三种常见策略。因此在兼容旧协议的基础上，IDE做出以下优化：

1. 策略不再支持手动添加修改，只支持在固定列表中选择0~3个，可选策略如下：

|text|key|
|---|---|
|覆盖|1|
|追加|2|
|放弃|3|

2. 如果是前端导入，则处理策略只能在以下两种策略中二选一，这两种策略将配合setter，处理导入的前端数据

|text|key|说明|
|---|---|---|
|全覆盖|10|使用新导入的数据完全替换现有数据|
|全追加|11|直接将导入数据全部添加到现有数据之后|

## 导入接口说明

```java
// 使用flycode
var api = "/biz/imexport/impExcel?mocode=1202501684010553360&lgcode=1202501684010553354"

// 使用微服务
var api = "/biz/imexport/impExcel?microclass=myImportMicroService"
```

### 入参

```json

{
    "impfile": {
        "fileurl": "40f/att/20200724/8009999/40f0e37e-c02c-4a0a-84f8-4da5f38b6a81.xlsx",
        "filename": "产品导入.xlsx",
    "sheetnames": "["产品管理"]",
        "_dupstrategy": "3"
    },
    "kx_kq_product": {
        "productstatus": "1"
    }
```

### 出参

#### 后端导入出参

```json
{
      "resp_data": "24e35ec5485e46e5bea33a6b6f050fd4"
}
```

#### 前端导入出参

前端导入将会直接返回数据

```json
{
    "bizdata": [
        {
            "key1": "value1",
            "key2": "value2",
            ......
        }
    ]
}
```

## 进度查询接口说明

### 返回示例

```json
{
    "resp_data": [{
        "finishdateformat": null,
        "imperrortotalitem": null,
        "impignoretotalitem": null,
        "importstate": "running",
        "finishdate": "0",
        "filesize": null,
        "initdateformat": "2020-07-02 18:03:53",
        "impFinishItem": "490",
        "fatalerrormsg": null,
        "finishRate": "9",
        "filename": "营销组织模版.xlsx",
        "dynamicid": "8b54245382884fe1b71fb33a3cc22204",
        "imptotalitem": "4949",
        "errorfileurl": null,
        "haserrorfile": null,
        "initdate": "1593684233424"
    }, {
        "finishdateformat": "2020-07-24 11:11:49",
        "imperrortotalitem": "5",
        "impignoretotalitem": "0",
        "importstate": "complete",
        "finishdate": "1595560309355",
        "initdateformat": "2020-07-24 11:11:26",
        "filesize": "11KB",
        "fatalerrormsg": "",
        "filename": "产品导入.xlsx",
        "dynamicid": "7e7695a5651343b8b98ff4b0182a0ec9",
        "imptotalitem": "5",
        "errorfileurl": "43c/att/20200724/8009999/43c37e0a-7dee-4847-b0b3-fd5cf7feeafc.xlsx",
        "haserrorfile": "2",
        "initdate": "1595560286172"
    }]
}
```

## UI示例

### 文件导入流程

![](http://apaas.wxchina.com:8881/wp-content/uploads/import-1.png)

### 导入列表

![](http://apaas.wxchina.com:8881/wp-content/uploads/importlist.png)