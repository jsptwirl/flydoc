---
title: Sorting
date: 2020-05-22T15:49:07
---

# Sorting

排序用于数组型数据控件，需要根据一定条件进行按顺序显示数据时使用。

## Related Protocol 相关协议

### 排序控件

* sortbutton

  目前唯一一个专门用于排序的控件，不能单独使用，只能放置在filter中使用。

* filter

  用于集中显示搜索和排序的控件，可以用于容纳 `sortbutton`

* table

  当table支持排序时，其所有列的表头均会自动支持点击排序。目前同一时间只支持一列排序

> filter 和 table 叫做排序容器，对于一个需要显示排序数据的控件，只能有一个排序容器与之对应，table 控件就是其自己的排序容器，所以如果table自身支持排序，则与之关联的filter中就不能有排序控件

### 排序的事件

目前由 `datarequest` 事件支持排序，排序的值的来源

```json
// filter
{
    "type": "datarequest",
    "sorter": {
        "ctrlcode": "ctrl_filter",
        "properties": [
            {
                "name": "storename",
                "value": "",
                "ctrl": {
                    "code": "ctrl_sortbutton",
                    "component": ""
                }
            }
        ]
    }
}

// table
{
    "type": "datarequest",
    "sorter": {
        "ctrl": {
            "code": "ctrl_table",
            "scrop": ""
        },
        "properties": [
            {
                "name": "storename",
                "ctrlcode": "ctrl_productname"
            }
        ]
    }
}
```

* ctrl

  排序条件所在的容器，用于之后请求事件

* properties

  类似于getter中的properties，用于指明控件与属性的绑定关系，不同之处在于，事件不会单独向这些控件索取值，而是直接向排序容器索取值，然后再组装，详见下方说明

> 组装排序数据时，没有参与排序的，即没有排序值的控件，不需要组装进\_\_sorting中

## 排序数据处理说明

### 排序处理时序

![](http://apaas.wxchina.com:8881/wp-content/uploads/FilterSortSequence.png)

***说明***

1. sortcontainer 需要对外提供获取完整排序条件的接口，该接口返回所有排序值不为 `nil` 的控件值，示例如下：

   ```json
   {
       "ctrlcode_name": "asc",
       "ctrlcode_price": "desc"
   }
   ```

2. datarequest 事件需要根据 sorting 中的映射定义，将获取到的数据映射到对应的对象属性中，例如：

   ```json
   {
       "__sorting": [
           {
               "key": "name",
               "type": "asc"
           },
           {
               "key": "price",
               "type": "desc"
           }
       ]
   }
   ```

3. 最终的请求入参结构如下

   ```Json
   {
       "bizdata": { ... },
       "__paging": { ... },
       "__sorting": [
           {
               "key": "name",
               "type": "asc"
           },
           {
               "key": "price",
               "type": "desc"
           }
       ]
   }
   ```

## 自动排序规则

对于infotable这类的新的控件，提供简化的排序配置方法：infotable负责提供排序信息，datarequest事件获取到该排序信息，然后组装到最终的请求中。