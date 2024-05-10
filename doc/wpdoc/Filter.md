---
title: Filter
date: 2020-05-20T16:16:00
---

# Filter

用于显示并录入搜索条件，触发搜索行为的控件

![img](http://apaas.wxchina.com:8881/wp-content/uploads/filterSample.png)

# Protocal 协议

```Json
{
    "type": "filter",
    "code": "filtercode",
    "bindcallbtn": "0",
    "eventlist": [
        {
            "handler": "handler_getcontractlist",
            "trigger": "onvaluechange"
        }
    ],
    "scan": {
        "type": "scan",
        "code": "ctrl_scan_productcode",
        "name": "filter_scan "
    },
    "searchcondition": {
        "basic": [
            {
                "type": "filtertextinput",
                "code": "ctrl_filtertextinput_contractname",
                "placeholder": "输入信息进行搜索",
                "historyenable": "0"
            }
        ],
        "advanced": [
            {
                "type": "selectbox",
                "code": "ctrl_filtertextinput_contractname",
                "placeholder": "输入信息进行搜索",
                "historyenable": "0"
            }
        ]
    },
    "sortcondition": {
        "title": "排序规则",
        "relation": "or|and",
        "folded": "0",
        "content": [
            {
                "type": "sortbutton",
                "text": "销量"
            },
            {
                "type": "sortbutton",
                "text": "价格"
            }
        ]
    },
    "floatposition": {
        "bottom": "50"
    }
}
```

## bindcallbtn 独立查询按钮

> **只在web端实现**

配置独立的‘查询’按钮，默认为0，即任意条件改变都自动触发搜索。如果配置了查询按钮，则要点击该按钮后才统一触发查询

1、该属性为‘1’,则关闭filter内部基础控件自身改变触发filter trigger的能力，只能通过按钮控件进行触发

2、该属性不为‘1’,则启用filter内部基础控件自身改变触发filter trigger的能力。

UI：  
![](http://apaas.wxchina.com:8881/wp-content/uploads/isBindCallBtn.png)

### Basic 基础搜索

直接放置在搜索栏的搜索条件，支持多种控件，自动布局

### advanced 高级搜索

用于放置更多的搜索条件，点击更多按钮后出现，自动布局

### Scan 扫描条件

用于指定是否支持扫码搜索，里面只能放置一个扫码控件。

该控件会放置在 `basic` 区域的最前面，当用户点击扫描之后，需要屏蔽该filter中的其他所有搜索和排序条件，并且在UI上也要屏蔽其余选项：

![](http://apaas.wxchina.com:8881/wp-content/uploads/ScanSearch.png)

### Search Condition 搜索条件

用于搜索的条件，分为基础和高级两部分显示，两个部分是 `and` 的关系，所以在配置的时候，如果已经在基础部分有的条件，就不用配置在高级部分。

* basic

  基础搜索，指直接显示在表单界面上，方便用户快捷搜索的搜索条件，其布局方案会根据其中包含的控件数量和种类自动调整，具体请参考[布局说明](FilterLayoutGuide.md)。

  放置在基础条件里面的搜索控件，会在其值改变的时候，也就是 `onvaluechanged` 事件触发的时候，执行对应的 `handler` 事件

* advanced

  高级搜索，当有很多搜索条件，需要保持页面整洁的时候，就需要把部分搜索条件隐藏起来，需要的时候再点击出来搜索。其布局方案默认为单列布局，移动端需要使用 `plain` 风格。

  前端会自动在高级搜索界面增加 `重置` 和 `确定` 两个按钮，分别用与清空条件和执行事件。

### Sort Condition 排序条件

> **尚未实现**

用于排序的条件集合，目前只接受 `sortbutton` 做为其内容。

* title

  标题，只在折叠模式下，且并未选择任何选项时显示。

* folded

  是否折叠，Bool值，默认为 `0` 。

  折叠的时候显示一个类似下拉框的控件，点击后展开其中的选项。

  不折叠的时候显示为一个类似按钮组的控件，不显示标题。

  具体UI参看下方示例

* relation

  排序条件之间的关系，有 `and` 和 `or` 两种取值，分别表示 `与` 和 `或` 的关系。默认值为 `and` 。

  当是 `与` 的关系的时候，每个选项之间互不干涉，独立选择。

  当是 `或` 的关系的时候，同一时间最多只能有一个选项被选中，filter需要负责清理其他选项值。

* content

  包含的排序控件。目前只有 `sortbutton` 一种控件，其具体定义请参考 [sortbutton](SortButton.md)

理论上 `folded` 和 `relation` 有四种组合，但考虑到实际情况，目前只接受以下两种组合

1. folded = 0，relation = or

   表示多个排序条件直接显示出来，并可以相互组合使用。此时的 `sortbutton` 的 `valuesets` 建议配置上 `nil` ，以便用户可以取消排序。

   ![](http://apaas.wxchina.com:8881/wp-content/uploads/UnfoldedSortMobile.png)

2. folded = 1，relation = and

   表示多个互斥的排序条件在一个折叠列表中呈现，只能单选。此时的 `sortbutton` 的 `valuesets` 建议只配置 `desc` 或 `asc` 中的一种值，如果同一条件同时需要升序和降序，建议使用两个 `sortbutton` 。

   ![](http://apaas.wxchina.com:8881/wp-content/uploads/FoldedSortMobile.png)

### Sort Layout Web

![](http://apaas.wxchina.com:8881/wp-content/uploads/SortLayoutWeb.png)

## Data Structure 数据格式

filter控件在触发对应的handler事件时，会将自身数据传递到事件中，包括搜索，排序和分页三部分数据，具体的传输数据如下

```Json
{
    "bizdata":{
        "name": "",
        "category": "",
        "price": ""
    },
    "__sorting":[
        {
            "key": "name",
            "type": "asc"
        },
        {
            "key": "price",
            "type": "desc"
        }
    ],
    "__paging":{
        "__pageindex": "0",
        "__pagesize": "20"
    }
}
```

## 移动端filter自动布局算法

1. 首先将所有basic中的控件按类型进行排序，顺序如下：textinput，dropdownbox，picklist，datetime，