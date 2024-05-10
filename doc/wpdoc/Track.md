---
title: Track
date: 2020-09-22T09:51:34
---

# Track

轨迹控件主要是用来显示一个时间段内某个人的位置信息。

## Protocol

```json
{
    "type": "track",
    "name": "peopleTrajecttory",
    "code": "30000000000001",
    "flex": "1",
    "template": [
        {
            "name":"planline",
            "datakey":"plandata",
            "icon":"",
            "title":"",
            "countable":"",
            "points":[
                {
                    "type":"attendance",
                    "icon":"",
                    "contentlayout":{
                        "type":"layout"
                    }
                }
            ],
            "eventlist":[
                {
                    "handler":"",
                    "trigger":"itemclicked"
                }
            ]
        },
        {
            "name":"actualline",
            "datakey":"actualdata",
            "icon":"",
            "title":"",
            "countable":"",
            "points":[
                {
                    "type":"attendance",
                    "icon":"",
                    "contentlayout":{
                        "type":"layout"
                    }
                }
            ],
            "eventlist":[
                {
                    "handler":"",
                    "trigger":"itemclicked"
                }
            ]
        }
    ],
    "eventlist": [
        {
            "handler": "",
            "trigger": "plandataonload",
            "trigger": "actualdataonload"

        }
    ]
}
```

* template

  轨迹类型模版，标准产品暂时只有计划路线和实际路线

* datakey

  由于有多个template，所有数据会有多组，datakey用来绑定当前模版绑定哪个数据。

* icon

  模版标题处的图标

* title

  模版的标题

* countable

  是否需要统计数量

* points

  连线点的类型数组定义

|type|点类型,例如:考勤点，拜访点，轨迹点|
|---|---|
|icon|点显示的图标|
|contentlayout|点对应的详情view|
|eventlist|详情view的点击事件|

* eventlist

|trigger|说明|
|---|---|
|plandataonload|计划轨迹数据加载|
|actualdataonload|实际轨迹数据加载|

## Hint

contentlayout的视图显示的内容根据字段绑定从数据源中获取