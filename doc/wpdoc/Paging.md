---
title: Paging
date: 2020-05-22T15:48:41
---

# Paging 分页协议

分页是处理大量数据加载的一种技术手段，会由多个环节共同形成一个分页请求。

通常是由控件发起分页请求，其中包含需要请求的分页序号 `__pageindex` ，然后由数据请求行为 `datarequest` 根据其分页大小属性 `pagesize` 的设置，包装出分页请求对象 `__paging` ，并将该对象附加在数据入参之中进行数据请求。

请求数据在返回后，由 `datarequest` 根据setter设置进行分配。

由于发起分页事件可以由支持分页的控件发出，也可以由 `filter` 控件发出，所以分页的信息分成两部分村粗

* pageindex 页码

  由控件负责存储

* pagesize 分页大小

  由数据请求事件负责存储

时序图如下

![](http://apaas.wxchina.com:8881/wp-content/uploads/List%E5%8F%91%E8%B5%B7%E5%88%86%E9%A1%B5.png)

![](http://apaas.wxchina.com:8881/wp-content/uploads/Filter%E5%8F%91%E8%B5%B7%E5%88%86%E9%A1%B5.png)

## Related Protocol 相关协议

* 支持分页的控件

  **数组值控件** 均支持分页，如 `list` , `table`

  部分 **选项值控件** 的选项支持分页，如 `picklist` 等，具体参看控件定义。

  这部分控件均有一个叫 `pageable` 的属性用于决定是否支持分页：

  ```json
  {
    "type": "list",
    "pageable": "1"
  }
  ```

  当 `pageable = 0` 时，不传递 `__pageindex` ，默认值为 `0`

  > 所有支持分页的控件，如 `list` 需要在其实现中自行储存当前的 `__pageindex` ，并根据 `pageable` 的设置决定是否传递该值；
  >
  > 在该控件接收到 `__paging` 参数对象时，需要根据其中的 `__pageindex` 决定其数据更新行为，并同时更新其存储的 `__pageindex` 的值。如果没有接收到 `__paging` ，默认将 `__pageindex` 设置为0

* 支持分页的事件

  目前只有 `datarequest` 事件支持分页，该事件有一个叫 `pagesize` 的属性决定是否支持分页，以及分页大小

  ```json
  {
    "type": "datarequest",
    "pagesize": "20"
  }
  ```

  `pagesize = 0` 表示不支持分页，默认值为 `20`

  根据不同的 `pagesize` 的值，以及事件传参所传递的 `__pageindex` 的值，该事件的处理如下

|无 `__pageindex`|有 `__pageindex = n`|
|---|---|---|
|pagesize = 0\|空|不组装 `__paging`|不组装 `__paging`|
|pagesize > 0|组装 `__paging`，`__pageindex = 0`|组装 `__paging`，`__pageindex = n`|

## \_\_paging 数据结构

### 请求数据（入参）

```Json
{
    "bizdata":{ },
    "__paging":{
        "__pageindex": "0",
        "__pagesize": "20"
    }
}
```

* \_\_paging

  分页对象

* \_\_pageindex

  请求的页码

* \_\_pagesize

  分页大小

### 返回数据（出参）

```Json
{
    "bizdata1": [],
    "bizdata2": [],
    "__paging":{
        "__pageindex": "0",
        "__pagesize": "20",
        "__itemcount": "90"
    }
}
```

* \_\_itemcount

  总的数据条数，可以不返回，此时前端只能根据返回数据是否为空来判断数据是否已经取完。