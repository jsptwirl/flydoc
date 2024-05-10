---
title: Export导出
date: 2020-09-10T13:41:05
---

# Export 导出

将后台数据批量导出到excel文件中进行下载。

> 不支持图片文件直接导出

## 协议

```json
{
  "type": "dataexport",
  "desc": "导出行为",
  "condition": "",
  "servicetype": "background/micro",
  "logiccode": "934961275815989347",
  "microclass": "myImportMicroService",
  "filename": "组织人员-人员管理",
  "sheetname": "组织人员-人员管理",
  "colselectable": "1",
  "getter": []
}
```

### servicetype

用于指定当前导出行为的种类，不同种类的导出方式，需要配置的属性有所不同。

目前导入分为以下两类：

* background 后端导出

  默认值，使用flycode将后台数据导出到excel文件中。

  该种方式需要配置 `logiccode` 属性指定调用的flycode接口

* micro 微服务导出

  使用微服务接口将后台数据导出到excel文件中。

  这种方式需要配置 `microclass` 属性，指定调用的微服务的类名。

### logiccode

导入使用到的flycode接口的code

### microclass

导入使用到的微服务接口的类名

### filename

导出文件名

IDE在输入完文件名后，如果sheetname为空，则自动使用文件名填充sheetname

### sheetname

导出表名

### colselectable

支持自定义导出列。默认值为0，表示不可以自定义。

如果值为1，表示支持自定义，此时导出时会先让用户选择需要导出的列，默认选中全部列。

> 如果是微服务导出，且要支持自定义导出列的话，需要提供一个空的flycode接口，并且配置到`logiccode` 属性中 ，用于IDE获取出参配置信息

### getter

当导出接口需要额外提供业务数据（如搜索条件）作为入参时，需要配置该属性。

此处的getter和datarequest的getter用处一致，用于获取表单中的数据，用于组装接口入参。IDE根据`logiccode` 的入参列表提供配置选项。

> 如果使用的是微服务导入方式，又需要提供额外业务参数时，需要提供一个空的flycode接口，并且配置到`logiccode` 属性中 ，用于IDE获取入参配置信息

## 导出接口说明

```java
// 使用flycode
var api = "/biz/imexport/expExcel?mocode=893405830819483679&lgcode=936136208466186330"

// 使用微服务
var api = "/biz/imexport/expExcel?microclass=myExportMicroService"
```

### 入参

```json
{
    "expfile": {
        "filename": "客户管理-终端管理.csv",
        "filetype": "2",
        "sheetname": "客户管理-终端管理",
        "__fields": [ "code", "name", "address" ]
    },
    "kx_kq_store": {
        "productstatus": "1"
    }
```

### 出参

将会返回导出任务ID

```json
{
      "resp_data": "24e35ec5485e46e5bea33a6b6f050fd4"
}
```

## 进度查询

```
/queue/impexp/expStatus?id=24e35ec5485e46e5bea33a6b6f050fd4
```

### 返回示例

```json
{
    "resp_data": [
    {
      "exportstate": "running",
      "finishdateformat": null,
      "expsuctotalitem": null,
      "finishdate": "0",
      "filesize": null,
      "initdateformat": "2020-07-24 11:25:10",
      "fatalerrormsg": null,
      "finishRate": "100",
      "filename": "产品管理-产品.xlsx",
      "dynamicid": "b5414734c8104be883fa7d38b89da470",
      "expFinishItem": "680",
      "exportfileurl": null,
      "exptotalitem": "679",
      "initdate": "1595561110397"
    }, 
    {
      "exportstate": "complete",
      "finishdateformat": "2020-07-24 11:11:09",
      "fatalerrormsg": "",
      "filename": "产品管理-产品.csv",
      "dynamicid": "43c13807a7c447e2962b2b92c243b401",
      "exportfileurl": "79d/att/20200724/8009999/79dcce70-dcc1-4f8b-9808-e57e3273c557.csv",
      "exptotalitem": "679",
      "expsuctotalitem": "679",
      "finishdate": "1595560269540",
      "initdate": "1595560257288",
      "initdateformat": "2020-07-24 11:10:57",
      "filesize": "98KB"
    }]
}
```

## UI示例

### 文件导出流程

![](http://apaas.wxchina.com:8881/wp-content/uploads/export-1.png)

### 导出列表

![](http://apaas.wxchina.com:8881/wp-content/uploads/exportlist.png)