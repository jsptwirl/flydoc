---
title: Datarequest
date: 2020-05-22T15:28:57
---

# Datarequest

用于获取数据，执行错误将会中止整个Event事件执行

```json
{
    "type": "datarequest",
    "logiccode": "832886477808603136",
    "mode": "2",
    "pagesize": "20",
    "pagesource": "table_ctrlcode",
    "nestedlevel": "1",
    "sorter": "sort_ctrlcode",
    "getter": [...],
    "setter": [...]
}
```

* logiccode

  事件所对应的业务行为

* mode

  表示执行行为的主体，有以下3种取值：

|Value|Meaning|
|---|---|
|0|网络 【废弃】|
|1|网络行为，即需要通过model code和logic code来确定调用接口，进行网络操作|
|2|本地，需要执行对应的本地SQL|

* sorter

  排序规则来源控件，用于配置用来获取排序规则的控件，目前只支持infotable，请参看 [Sorting](Sorting.md)

* getter & setter

  出入参的处理规则，请参看 [Getter & Setter](GetterSetter.md)

* pagesize

  数据分页大小，用于控制分页数据每次请求的数据量，详细信息请参看 [Paging](Paging.md)

  如果当前环境变量有该变量，如表格可以用户自主设置分页大小，此时将忽略该属性值，使用环境变量中的分页大小值。

* pagesource

  分页数据来源，用于配置数据请求时分页信息（pagesize和pageindex）的来源。

  该属性默认为空，此时走旧逻辑，读取事件的pagesize，以及控件传递的pageindex。

  如果配置了该属性，就直接从该属性指定的控件中（目前只支持infotable）获取分页信息。

* nestedlevel

  数据嵌套层数，用于控制树形结构数据每次请求的数据层数，取值如下：

|值|说明|
|---|---|
|空|默认值，表示不是树形结构数据，将不组装\_\_nesting对象结构|
|0|表示不限制层数，由接口逻辑自行控制返回的数据层数|
|n|表示需要返回指定的n层数据|

## 返回数据中的提示信息

### 成功返回时的提示

由于有些时候数据操作的提示信息需要动态组装，并且需要支持多语言翻译，因此定义 `__dataprocessresult` 数据对象，在数据操作的返回结果中返回，用于约定数据处理成功后的提示信息：

```json
{
    "bizdata1": [
        {
            "productname": "产品1",
            "productprice": "{'level1': '15', 'level2': '20'}"
        },
        {
            "productname": "产品2",
            "productprice": "{'level1': '20', 'level2': '60'}"
        }
    ],
    "bizdata2": { ... },
    "__paging": { ... },
    "__dynamicproperties": [
        {
            "orgproperty": "productprice",
            "titles": [
                {
                    "title": "一级经销商价格",
                    "name": "level1",
                },
                {
                    "title": "二级经销商价格",
                    "name": "level2",
                }
            ]
        }    
    ],
    "__dataprocessresult": [
        {
            "message": "成功删除\(successnum)条门店数据，失败\(failnum)条！",
            "type": "info",
            "params": {
                "successnum": "58",
                "failnum": "3"
            }
        }
    ]
}
```

`__dataprocessresult` 为约定好的对象名称，如果返回数据中有这个对象，则需要根据规则显示提示信息，如果没有该对象则不需要显示。

* message

  提示信息的内容，允许使用占位符 `\(***)` 。

  提示信息支持多语言，在多语言字典中会完整存储 message 的信息，包括其中的占位符。

  在实际处理过程中，需要先将该内容翻译，再替换占位符内容；占位符内容不支持多语言。

  占位符需要根据其中的变量名，在params中找到对应的值进行替换，如果出现找不到对应变量的情况，直接将占位符替换为空串。

* type

  提示信息类型，取值如下：

|值|说明|
|---|---|
|info|普通提示信息，3S后自动消失|
|warning|警告信息，带一个确定按钮|

* params

  参数字典，用于message中的占位符替换

> 当有多个提示信息时，需要根据信息的type，将相同类型的信息进行拼接合并显示；即先分别将所有的信息进行翻译和占位符替换操作，然后将类型相同的信息用回车符拼接。
>
> 当同时有多个类型的信息时，先显示warning，用户点击确认后再显示info。

***【目前可暂时只实现单个信息的情况】***

### 失败返回时的提示信息

当数据请求失败时，其返回的数据结构如下：

```json
{
    "error_type": 600,
    "error_code": "出现异常",
    "error_params": null
}
```

* error\_type

  标识当前的异常种类，对于前端处理错误提示信息来说，目前只需要处理 `600` 和 `非600` 的情况。

* error\_code

  具体的异常信息。

  当 `error_type == 600` 且该字段不为空时，使用该字段的信息作为错误提示信息。

  当 `error_type != 600` 或者该字段为空时，统一使用 `出现异常，请联系管理员!` 作为错误提示信息。

  > 处理多语言时，该字段的处理方式与 `__dataprocessresult` 中的 `message` 字段一样。

* error\_params

  参数字典，用于error\_code中占位符的替换。

  > 使用方式与 `__dataprocessresult` 中的 `param` 字段一样，只是只会有一组参数。
  >
  > 另外目前该字段还没有投入使用。

### 返回的数据无法识别时的提示信息

当有数据返回，但是无法识别其中的信息时，统一使用 `网络请求返回数据格式错误，请联系管理员!`