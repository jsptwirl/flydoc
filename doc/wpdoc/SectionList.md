---
title: SectionList
date: 2020-05-20T15:56:57
---

# Section List

支持分组和多模板的列表

![](http://apaas.wxchina.com:8881/wp-content/uploads/SectionListMobile.png)

![](http://apaas.wxchina.com:8881/wp-content/uploads/SectionListWeb.png)

## Protocol

```json
{
    "type": "sectionlist",
    "name": "shoppingcart",
    "code": "300000000000001",
    "flex": "1",
    "pageable": "1",
    "refreshable": "1",
    "headerview": {
        "type": "layout",
        "name": "productrow",
        "flexdirection": "vertical",
        "eventlist": [
            {
                "handler": "",
                "trigger": "onclicked"
            }
        ],
        "content": []
    },
    "rows": [
        {
            "type": "row",
            "name": "productrow",
            "flexdirection": "vertical",
            "clickable": "1",
            "deletable": "1",
            "eventlist": [
                {
                    "handler": "",
                    "trigger": "onclicked"
                },
                {
                    "handler": "",
                    "trigger": "ondelete"
                }
            ],
            "content": []
        },
        {
            "type": "row",
            "name": "giftrow",
            "clickable": "0",
            "flexdirection": "vertical",
            "eventlist": [],
            "content": []
        }
    ],
    "eventlist": [
        {
            "handler": "",
            "trigger": "onload"
        },
        {
            "handler": "",
            "trigger": "onrefresh"
        }
    ]
}
```

* pageable

  是否支持分页。

  > 为了保障分组的完整性，分页是按section进行分页的

* refreshable

  是否支持下拉刷新，如果支持，下拉时会触发 `onrefresh` 事件

  > web暂不支持

* headerview

  分组标题的UI定义，里面通常放一个 `layout` 控件

* rows

  行模板的UI定义，支持定义多个模板，使用模板的 `name` 属性与数据的 `__row_template` 字段进行匹配，进而决定使用哪个模板显示行

  * clickable

    是否支持点击。默认值为1。**(仅移动端支持)**

    支持点击时，点击行会触发 `onclicked` 事件

  * deletable

    是否支持删除，默认为0，表示不支持。**（仅移动端支持）**

    如果支持，手机端需要实现左滑或长按删除，web端需要显示出自带的删除按钮。当用户确认删除时，会触发当前行的 `ondelete` 事件

## Operations

### List Operations

* pageindex

  获取当前的分页数据页码

* focusIndex

  获取当前的焦点行。

  > 焦点行即最近一次用户点击所处的行，即点击子控件时，焦点行为该子控件所在的行

### Row Operations

* insert

  支持在指定位置插入一行或多行数据

  **一次只支持在一个分组中插入数据**

* delete

  支持删除指定位置的一行或多行数据，如果导致分组数据清空，则自动删除分组

* move

  支持将指定位置的一行移动到另一行。

## Data Format

通常从后台直接获取到的是一个一维数组，其分组信息和模板信息都隐藏在数据中，需要经过处理，转换成本控件能识别的结构，在传给控件赋值。

由于转换关系较为复杂，目前只支持flycode进行数据转换，纯配置的数据转换定义暂不支持。

具体的转换后的格式应该如下所示

```json
[
    {
        "__sectionlist_header": {...}
        "__sectionlist_rows": [
            {
                "__row_template": "rowname",
                ...
            }
        ]
    }
]
```

此结构为一个二维数组结构，第一层是组，第二层是行。

* \_\_sectionlist\_header

  header view 所需的数据，均放置在该节点下。

  *一个分组只能有一个 header view，因此此处不是数组*

  该节点可以没有，当没有时将会直接在 \_\_sectionlist\_rows 节点中取第一条数据进行填充。

* \_\_sectionlist\_rows

  具体的内容行的数据，放置在该节点下。

* \_\_row\_template

  如果支持多模板行，需要在行数据中插入该字段，用于指定该行信息使用哪个模板来显示。

  其值为模板的name。

> 第一组数据中如果缺失 \_\_sectionlist\_rows 节点，那么数据会被认为没有分组，直接使用组数据作为行数据

**以购物车数据为例**

原始数据

```json
{
    "products": [
        {
            "promotionid": "",
            "promotionname": "",
            "isgift": "0",
            "id": "nopromotion_product_1",
            "name": "无活动产品1",
            "number": "20",
            "unit": "箱"
        },
        {
            "promotionid": "promotion_1",
            "promotionname": "活动1",
            "isgift": "0",
            "id": "promotion_1_product_1",
            "name": "活动1产品1",
            "number": "10",
            "unit": "箱"
        },
        {
            "promotionid": "promotion_1",
            "promotionname": "活动1",
            "isgift": "1",
            "id": "promotion_1_gift_1",
            "name": "活动1赠品1",
            "number": "10",
            "unit": "瓶"
        }
    ]
}
```

转换后的数据

```json
[
    {
        "__sectionlist_rows": [
            {
                "__row_template": "productrow",
                "promotionid": "__none",
                "promotionname": "无活动",
                "isgift": "0",
                "id": "nopromotion_product_1",
                "name": "无活动产品1",
                "number": "20",
                "unit": "箱"
            }
        ]
    },
    {
        "__sectionlist_rows": [
            {
                "__row_template": "productrow",
                "promotionid": "promotion_1",
                "promotionname": "活动1",
                "isgift": "0",
                "id": "promotion_1_product_1",
                "name": "活动1产品1",
                "number": "10",
                "unit": "箱"
            },
            {
                "__row_template": "giftrow",
                "promotionid": "promotion_1",
                "promotionname": "活动1",
                "isgift": "1",
                "id": "promotion_1_gift_1",
                "name": "活动1赠品1",
                "number": "10",
                "unit": "瓶"
            }
        ]
    }
]
```