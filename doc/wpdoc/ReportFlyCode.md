---
title: ReportFlyCode
date: 2020-05-20T17:39:13
---

# Report Fly Code

关于使用FlyCode控制报表的定义

## ReportModel

```js
var ReportModel = {
  // 数据请求
  // - input: 请求的入参，不同的请求有不同的入参要求
  // - success: 成功请求后调用的方法
  // - fail: 请求失败后调用的方法
  request: function (input, success, fail) {},
  requestDrill: function (input, success, fail) {},
  requestOptions: function (input, success, fail) {},
  requestDimensions: function (input, success, fail) {},
  export: function (input) {}
}
```

* request

  报表数据请求，入参格式请参看 [rp\_datarequest](ReportAction.md)

* requestDrill

  报表钻取数据请求，入参格式请参看 [rp\_datadrill](ReportAction.md)

* requestOptions

  报表筛选选项数据请求，入参格式请参看 [rp\_optionrequest](ReportAction.md)

* requestDimensions

  报表维度切换数据请求，入参格式请参看 [rp\_dimensionrequest](ReportAction.md)

## Report

```js
var Report = {
  setDrillValue: function (name, value)
}
```