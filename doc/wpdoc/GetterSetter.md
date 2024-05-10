---
title: GetterSetter
date: 2020-05-22T15:46:40
---

# Getter & Setter

## Getter 说明

getter 用于数据请求或者提交时的入参获取

getter支持使用多个数据对象对入参数据进行包装

```json
"getter": [
    {
        "name": "searchconditions",
        "datatype": "0",
        "rowprior": "0",
        "ctrl": {
            "code": "",
            "scope": ""
        },
        "properties": [
            {
                "name": "storename",
                "value": "",
                "alias": "customername",
                "ctrl": {
                    "code": "ctrl_filtertextinput_storename",
                    "component": ""
                }
            }
        ],
        "dynamicproperties": [
            {
                "name": "distributionprice",
                "titleproperty": "type",
                "valueproperty": "price"
            }
        ]
    }
]
```

### name

入参对象名称，入参在组装数据时使用该名称作为对象名称

### alias

【暂不实现】

新的绑定关系名，如果配置了该值，则需要将该数据以别名的方式获取。

### datatype

数据类型，指定该入参对象的数据结构，`0` 表示为单对象数据，`1` 表示为数组型数据

### rowprior

行内优先，用于确认当前的事件在取值时优先查找触发该事件的控件所在行。

默认值为0，表示常规处理

值为1时，优先从所在行取值，此时datatype只能为0，且ctrl属性不能配置。

> 目前只在web端使用

### ctrl

用于指定该入参对象的数据来源容器，通常为数组型控件，例如列表，表格等。

filter作为一种特殊的容器，在获取其中的控件值时也需要在此配置filter的code，此时scope属性无效。

* code

  入参数据来源容器控件的code，不配置该值表示来入参对象中的属性值来源的控件均不在数组型控件或者filter中。

* scope

  提交数据的范围，用于数组类型数据的控件提供数据的范围依据，对于普通的非数组类型的数据无效。

|Value|Introduction|
|---|---|
|modified|修改项，指只提交有修改的数据项，修改的含义是指和初始数据有差异|
|checked|勾选项，指只提交用户勾选了的数据，需要对应控件具备勾选功能，例如表格|
|focused|焦点项，指只提交当前焦点所在位置，例如列表每一行都有一个收藏按钮，点击后就会收藏按钮所在的这一行。|
|all|全部项|

  > 由于modified 和 checked 需要控件能记忆数据，如果控件不能一次性获取全部数据，而是依靠搜索条件动态从数据源获取的，则每次搜索都会清空之前记录。

### properties

入参对象属性的详细规则

* name

  属性名称，该名称作为入参对象属性的名称，如果ctrl.code并未配置，则该名称还同时用作查询内存属性值的key。

* value

  默认值，支持逻辑表达式，使用规则参看下方的**数据获取链路**说明

* ctrl

  入参对象属性来源控件

  * code

    控件的code

  * component

    对应该控件中的元素，具体参看各个对象的定义，当为空时，默认为 `value` 元素

### dynamicproperties

动态属性，指明字段中那些属性是动态属性，**动态属性只对绑定了控件的属性起效**。

通常与setter中的dynamicproperties属性配对配置。

具体的数据格式请参看setter以及table中的相关描述。

#### 数据获取链路

优先级由高到低排列如下：

1. 事件传参
2. 控件值
3. 内存值
4. 默认值

> 当链路节点中获取不到值，或者获取到的是空值时，即需要向下一级链路取值

#### 范围数据提交校验规则

对于数组型控件的数据校验遵循以下两点

1. 根据提交数据范围，有需要提交的数据行时，所有需要提交的数据行，都需要对行内的所有控件进行校验。有任一控件校验不通过，即视为该数组型控件数据校验不合法。
2. 根据提交数据范围，没有需要提交的数据行时，检查该数组型控件本身是否是必填。如果为必填，则判断数据校验不合法。
3. 其他情况均为校验合法。

### Setter 说明

setter 用于数据请求行为之中，用于指定请求回来的数据如何存储使用。

setter 目前的设计是可以同时接受多个数据对象，每个数据对象都有自身。

```json
"setter": [
    {
        "name": "kx_store",
        "datatype": "1",
        "ctrlcode": "",
        "properties": [
            {
                "name": "storeid",
                "alias": "customerid",
                "ctrl": {
                    "code": "",
                    "component": ""
                }
            },
            {
                "name": "distributionprice",
                "alias": "",
                "ctrl": {
                    "code": "ctrl_price",
                    "component": ""
                }
            }
        ],
        "dynamicproperties": [
            {
                "name": "distributionprice",
                "titleproperty": "name",
                "valueproperty": "price"
            }
        ]
    }
]
```

* name

  数据对象名，用于多个对象数据中进行数据区分

* datatype

  数据类型，`0` 表示为单对象数据，`1` 表示为数组型数据

  > 所有的数组型数据都应该与一个可以接收数组型数据的控件关联
  >
  > 此时的数据均当做关联控件的***范围值***，由该控件负责管理这些数据。
  >
  > 范围值目前有两种：
  >
  >   * 选项范围值
  >     用于选项类控件，如下拉框等

  >   * 内容范围值

  >     用于数组值控件，如列表，表格等

* ### rowprior

  行内优先，用于确认当前的事件在赋值时优先查找触发该事件的控件所在行。

  默认值为0，表示常规处理

  值为1时，优先从所在行赋值，此时datatype只能为0。

  > 目前只在web端使用

* ctrlcode

  当数据为数组时，需要设置该属性，用于设置接收该数组数据的控件code。

* properties

  数据对象属性列表，用于指定数据对象中的具体属性，以及其可能包含的控件绑定关系

  如果数据类型是单对象，则帮定的关系是直接绑定到具体的一个控件上；如果是数组类型的对象，则绑定到数组对象对应的控件的子项上，可能是选项的一个字段，或者是子控件

  * name

    属性名称

  * alias

    新的绑定关系名，如果配置了该值，则需要将该数据以 `newname` 所指定的值作为 key ，设置内存对象。

    目前该属性只在receivelink 以及 eventlink 的setter中起效

  * ctrl

    绑定控件的相关信息，当没有配置该信息时表示该属性作为内存属性存储

    * code

      控件的code，当数据用于 ***选项范围值*** 时，不用配置该项

    * component

      值选项，当控件的值是一个复合值是，用于指定该数据是复合值中的哪一部分

* dynamicproperties

  > 该属性用于旧的table控件来绑定动态列，在新的editortable中不再使用该机制，直接由控件自身来控制

  动态字段设置，用于指定数据中的动态字段，**动态属性只对绑定了控件的属性起效**。

  动态字段是指该字段的值是一个json格式的对象数组的字符串，该数组中的每一个对象其实代表了一个字段，如果该字段绑定了一个控件那么该控件将会根据数组元素的个数进行复制。

  如果该字段的值为空，或者是一个空数组，则代表该动态列没有任何数据，此时会完全隐藏动态列。

  具体的动态字段如何实现，需要具体的容器控件去实现，目前只有table需要实现，请参看对应协议。

  * name

    指定动态字段的名称，需要从 `properties` 属性中进行选择。

  * titleproperty

    指定对象中表示该字段标题的属性，当该动态字段绑定了一个控件时，该控件的标题就应该动态生成。

  * valueproperty

    指定对象中表示该字段值的属性。

  动态属性的数据示例如下：

  ```json
  // 原始数据
  "bizdata": [
      {
          "productname": "产品1",
          "productprices": "[\
              {\
                  'name': '一级经销商',\
                  'price': '15'\
              },\
              {\
                  'name': '二级经销商',\
                  'price': '20'\
              }\
          ]"
      }
  ]

  // 相当于以下数据
  // 这个结构只是方便理解生成的，实际的并不会产生一个productprices__1字段。
  "bizdata": [
      {
          "productname": "产品1",
          "productprices__1": "{ 'name': '一级经销商', 'price': '15' }",
      "productprices__2": "{ 'name': '二级经销商', 'price': '20' }",
      }
  ]
  ```