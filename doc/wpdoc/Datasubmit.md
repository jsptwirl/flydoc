---
title: Datasubmit
date: 2020-05-22T15:37:34
---

# Datasubmit

## Data Submit 数据提交

```json
{
    "type": "datasubmit",
    "code": "",
    "logiccode": "111111111111",
    "queue": "0",
    "mode": "network",
    "storage": "storage",
    "getter": [],
    "setter": []
}
```

数据提交的属性中，名字和datarequest一致的，其含义也一致，可以直接参考[Datarequest](Datarequest.md)。

不过以下几个属性是数据提交中没有的：`sorter` , `pagesize` 。也就是说数据提交是没有排序或者分页的属性的。

### mode

调用请求是否放入队列，主要用于网络数据上传。

|Value|Meaning|
|---|---|
|0|本地|
|1|网络|
|2|本地+网络|

数据提交特有的属性有：

### queue

调用请求是否放入队列，主要用于网络数据上传。

|Value|Meaning|
|---|---|
|0|即时执行|
|1|放入队列执行|

### mode和queue组合

|mode和queue的组合|queue = 0|queue = 1|
|---|---|---|
|mode = 0|执行本地提交|执行本地提交|
|mode = 1|执行网络提交|执行队列提交|
|mode = 2|先执行网络提交行为，成功后再执行本地行为|先执行本地行为，成功后再将网络请求放入队列|