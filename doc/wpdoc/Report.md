---
title: Report
date: 2020-05-20T17:36:48
---

# Report

报表控件

![sample1](http://apaas.wxchina.com:8881/wp-content/uploads/ReportSample1.png)

![sample1](http://apaas.wxchina.com:8881/wp-content/uploads/ReportSample2.png)

## Protocol

```Json
{
    "type": "report",
    "title": "",
    "code": "333333333",
    "reportdesccode": "desc_code",
    "ignoredeffilter": "1",
    "columns": [
        {
            "field": "salesareaname",
            "sortable": "1",
            "clickable": "1"
        }
    ],
    "eventlist": [
        {
            "trigger": "onload",
            "handler": "load_report_data_event"
        },
        {
            "trigger": "onclickdata",
            "handler": ""
        },
        {
            "trigger": "onextend",
            "handler": ""
        },
        {
            "trigger": "onsort",
            "handler": ""
        }
    ]
}
```

* reportdesccode

  由于报表配置的特殊性，报表控件的大部分相关配置都在单独的报表配置器里配置，这部分信息我们称之为**报表描述**，该信息需要在实际显示报表时才会动态的整合进其所在的表单中。该属性就是记录报表对应的报表描述的code。

* ignoredeffilter

  忽略协议片段中的filter的配置，bool值，默认为0

* columns

  报表数据列的字段描述，目前只用于表格类报表排序配置。

* eventlist

  报表的事件列表通常是在报表描述中记录，如果报表协议和报表描述中存在同一事件的配置，则优先使用报表描述中的配置。

  * onload

    和大部分控件的onload事件一样，该事件在报表加载的时候调用，用于获取报表的显示数据，只不过该事件通常在报表描述中配置，并且调用报表专用的数据获取事件。

    **参考下方的 *Report Data***

    该事件触发时所传递的事件参数约定如下：

    ```json
    {
        "__triggerctrlcode": "920846561091653697"      //报表code
    }
    ```

  * onsort

    报表控件中，表格类型的报表独有的事件，在点击可排序的表头时触发，会默认传递以下参数

    ```json
    {
      "__triggerctrlcode": "920846561091653697",      //报表code
      "__report_sortinfo": [
        {
          "__report_indicatoralias": "拜访完成率",         //指标别名
          "__report_sorttype": ""
        }
      ]
    }
    ```

    **TODO：这部分的传参由于接口还未定义好，所以需要之后等切口入参确定后再修改**

  * onextend

    报表控件中，表格类型的报表独有的事件，当用户在点击表格中可暂开（钻取）的显示内容的时候触发。

    该事件触发时所传递的事件参数约定如下：

    ```json
    {
      "__triggerctrlcode": "920846561091653697",      //报表code

      // 以下为Report控件的value
      "__report_indicatoralias": "拜访完成率",         //指标别名
      "__report_drill": {
          "dimobjectcode": "920846561091653697", //维度对象code
          "propertycode": "920846561091653700",  //属性code
          "membervalue": "现代渠道.商超"          //维度值
      },
      "__report_pdrill": [ 
          {
              "dimobjectcode": "920846561091653688", //维度对象code
              "propertycode": "920846561091653790",  //属性code
              "membervalue": "饮料.哇哈哈"           //维度值
          }
      ] //只在有多重展开时才传递，存储的是前置维度值
    }
    ```

  * onclickdata

    报表控件特有的事件，当用户点击显示内容时触发，传递的参数与 `ondrill` 保持一致

    ​

## Report Desc Content

报表描述是单独在报表配置页面进行配置，对报表进行详细设置的协议。

实际解析过程中需要将该描述与报表所在表单的协议进行融合。

### Interface

`post` `api/teapi/protocol/uiprotocol/getprotocolfragments`

#### Request

```json
{
    "codes": ["920484487849185322"]
}
```

* codes

  报表描述文件的code，可以一次获取多个

#### Response

```json
{
    "code": "910390432830197843",
    "pagedescr": "终端拜访统计",
    "type": "7",
    "title": "终端拜访统计",
    "report": {
        "code": "928547827523653725",
        "type": "report",
        "eventlist": [
            {
                "handler": "928547827523653723",
                "trigger": "onload"
            }
        ]
    },
    "filter": {
        "type": "filter",
        "code": "928547827523653724",
        "eventlist": {
            "code": "928547827523653723",
            "trigger": "onvaluechange"
        },
        "searchcondition": {
            "basic": [
                {
                    "type": "selectbox",
                    "code": "918757352000327733",
                    "placeholder": "请选择",
                    "eventlist": [
                        {
                            "handler": "928547827523653722",
                            "trigger": "onload"
                        }
                    ]
                }
            ]
        }
    },
    "handlers": [
        {
            "code": "928547827523653723",
            "actions": [
                {
                    "type": "rp_datarequest",
                    "datacode": "910390432830197847",
                    "reportctrlcode": "928547827523653725",
                    "filtercode": "928547827523653724"
                }
            ]
        },
        {
            "code": "928547827523653722",
            "actions": [
                {
                    "type": "rp_conditionrequest",
                    "datacode": "918757352000327733",
                    "conditionctrlcode": "918757352000327733"
                }
            ]
        }
    ]
}
```

### 合并规则说明

#### report

报表协议，合并协议时目前只使用描述文件的title覆盖报表的title；

使用描述文件的eventlist合并进报表的eventlist中，如果出现冲突，即同一个trigger两边都有关联事件，此时就需要将描述文件中的事件中行为插入到报表表单中的对应的事件的头部。

#### filter

该filter为该报表专用的filter，插在报表的前面显示。

如果报表配置在cardboard中，就需要在依次根据filter中的子控件的code，在该表单中查找是否有相同的code的控件，如果有，则需要将filter中的该控件去除。

#### exportButton

如果有导出按钮，则将该按钮放置在filter的前面

#### handlers

直接整合进报表所在表单的handlers中。

如果报表配置在cardboard中，且cardboard配置的统一的filter，则需要将其中的报表事件所关联的自有filter自动替换为统一filter

## Report Drill 报表钻取

报表的钻取是由事件 `rp_datadrill` 进行处理的，该行为最终会将钻取到的数据传递给其绑定的报表控件。

报表控件需要提供专门的接收钻取数据的接口，该接口负责将钻取数据附加到报表中，并更新钻取层级导航按钮，旧的数据依然会缓存在报表中，因此向上钻取时直接使用缓存数据，不再触发该事件。

## Value 报表取值

报表也支持取值，当用户点击了报表内容时，report控件才有值，此时的值就是用户点击的维度指标的相关信息，其完整结构如下：

```json
{
    "__report_indicatoralias": "拜访完成率",         //指标别名
    "__report_field": "拜访完成率",             
    "__report_drill": {
        "dimobjectcode": "920846561091653697", //维度对象code
        "propertycode": "920846561091653700",  //属性code
        "membervalue": "现代渠道.商超"          //维度值
    },
    "__report_pdrill": [ 
        {
            "dimobjectcode": "920846561091653688", //维度对象code
            "propertycode": "920846561091653790",  //属性code
            "membervalue": "饮料.哇哈哈"            //维度值
        }
    ] //只在有多重展开时才传递，存储的是前置维度值
}
```

当报表数据刷新后，需要置空报表值

各个字段的取值约定如下：

|字段名|取值方式|
|---|---|
|\_\_report\_indicatoralias|reportdefine. measuregroup\[当前点击行\]. measures\[当前点击指标\]. alias，reportdefine. rows\[当前点击行\]. attributealias|
|\_\_report\_field|点击列的field值|
|\_\_report\_dimobjectcode|reportdefine. rows\[当前点击分组\]. dimobjectcode|
|\_\_report\_propertycode|reportdefine. rows\[当前点击分组\]. code|
|\_\_report\_membervalue|报表缓存的当前分组的维度值|
|\_\_report\_pdrill|报表缓存的前置分组的维度值|

## Report Data

```json
{
    "resp_data": {
        "widgettype": "pie",
        "protocols": {
            "header": "终端客户结构分析",
            "footer": null,
            "event": null,
            "tooltip": null,
            "label": null,
            "fieldname": "name",
            "field": "bi_fact_store_struct.storecount"
        },
        "datas": [
            {
                "bi_fact_store_struct.storecount": "1",
                "name": "交通运输渠道"
            },
            {
                "bi_fact_store_struct.storecount": "31",
                "name": "传统渠道"
            },
            {
                "bi_fact_store_struct.storecount": "3",
                "name": "批发渠道"
            },
            {
                "bi_fact_store_struct.storecount": "1",
                "name": "教育渠道"
            },
            {
                "bi_fact_store_struct.storecount": "1056",
                "name": "现代渠道"
            },
            {
                "bi_fact_store_struct.storecount": "1",
                "name": "酒店渠道"
            },
            {
                "bi_fact_store_struct.storecount": "1",
                "name": "餐饮渠道"
            }
        ],
        "reportdefine": {
            "metamodelcode": "829609839767532617",
            "reportcode": "920846561091653729",
            "reportname": "终端客户结构分析",
            "subtotallocation": 0,
            "needsubtotal": "true",
            "drillstype": 0,
            "widgettype": "pie",
            "themeids": [
                "920591526390796301"
            ],
            "rows": [
                {
                    "code": "920846561091653700",
                    "elementname": "bi_dim_channelstoretype.name",
                    "seq": 1,
                    "dimobjectcode": "920846561091653697",
                    "attributealias": "名称",
                    "selection": false,
                    "needsubtotal": false,
                    "subtotalalias": null,
                    "needdrill": true,
                    "defaultlevel": 2,
                    "accesscontrol": true,
                    "link": ""
                }
            ],
            "address": null,
            "columns": [],
            "measuregroup": [
                {
                    "axialdirection": 2,
                    "seq": 1,
                    "name": "",
                    "format": [
                        {
                            "type": "text",
                            "format": "",
                            "prefix": "",
                            "suffix": ""
                        },
                        {
                            "type": "text",
                            "format": "",
                            "prefix": "",
                            "suffix": ""
                        }
                    ],
                    "measures": [
                        {
                            "code": "920591526390796305",
                            "themeobjectcode": "920591526390796301",
                            "elementname": "bi_fact_store_struct.storecount",
                            "type": "",
                            "aggregator": 1,
                            "alias": "终端数量",
                            "selection": false,
                            "seq": 1,
                            "axialdirection": 1,
                            "markerdef": null,
                            "chartstype": null,
                            "format": null,
                            "sort": 0
                        }
                    ]
                }
            ],
            "drilldimvalues": [],
            "slices": [],
            "isshowblankvalue": false,
            "permissionctl": true,
            "rowexpandlevel": 0
        }
    }
}
```