---
title: Approval Type List 审批类型列表
date: 2020-05-19T19:31:49
---

## Approval Type List 审批类型列表

在专门管理审批流程的界面（审批列表）中，发起新审批时，需要先选择审批种类，然后再发起审批。

![](http://apaas.wxchina.com:8881/wp-content/uploads/typeListSample.png)

## 引用关键字

```Json
"buildinpage:approvaltypelist"
```

在 `link` 事件中，或者在 `functionmenu` 之类的控件中，使用该关键字来标明下一个页面为内置审批类型列表页面

## 接口说明

审批类型列表将会用到几个内置的接口用以和服务器数据进行交互

![](http://apaas.wxchina.com:8881/wp-content/uploads/typeListFlow.png)

> ？？？审批种类的分类是否需要单独获取，每种分类是否需要单独获取数据，需要讨论

### 审批类型数据获取

#### Request

POST API：***~/workflow/flow/getflowcategorydetail***

```json
{

}
```

#### Response

```Json
{
    "resp_data": [
        {
            "af_flowcategorycode": "456431313",
            "af_flowcategoryname": "财务相关",
            "af_parentcode": "0",
            "af_status": 1,
            "af_processlist": [
                {
                    "af_processkey": "expense",
                    "af_processname": "报销单流程"
                },
                {
                    "af_processkey": "expenseflow",
                    "af_processname": "费用报销流程"
                }
            ]
        },
        {
            "af_flowcategorycode": "456431317",
            "af_flowcategoryname": "报销类",
            "af_parentcode": "456431313",
            "af_status": 1,
            "af_processlist": []
        },
        {
            "af_flowcategorycode": "456431314",
            "af_flowcategoryname": "客户相关",
            "af_parentcode": "0",
            "af_status": 1,
            "af_processlist": []
        },
        {
            "af_flowcategorycode": "456431316",
            "af_flowcategoryname": "市场费用",
            "af_parentcode": "0",
            "af_status": 1,
            "af_processlist": []
        },
        {
            "af_flowcategorycode": "456431315",
            "af_flowcategoryname": "销售管理",
            "af_parentcode": "0",
            "af_status": 1,
            "af_processlist": []
        }
    ]
}
```

## 传参说明

审批列表在点选 `处理` 按钮，或者点击审批名称的时候，会跳转到对应的审批表单中，审批表单会需要当前点击处理行的数据，具体说明如下

![](http://apaas.wxchina.com:8881/wp-content/uploads/typeListLink.png)

### 跳转到审批表单

传参的数据来源于获取流程信息接口到的，传参将用于审批表单的初始化等

#### 传参详情

```Json
{
    //------- page信息 --------//
    "__system": {
        "__pagestatus": "1",  // page状态
    }

    //------- 流程实例信息 --------//
    "__approvaldata": {
        // 这部分信息是需要代码自动生成，以供审批页面使用的
        "af_businesskey": "",
        "af_taskkey": "af_initiatetask",
        "af_processinstanceid": ""

        //------- 流程信息 --------//
        "af_processdefineid": "expenseflow:1:72504", //流程定义Id
        "af_processdefinekey": "expenseflow",  //流程定义Key
        "af_processdefinename": "费用报销流程", //流程定义名称
    }
}
```

* \_\_pagestatus

  page状态，发起的时候统统按照新增状态处理，也就是说默认传 `1`

* af\_businesskey

  业务数据主键，这个值用于业务数据提交时，给主键赋值。

  新增的情况下，该值为空

* af\_taskkey

  用于表示当前所在节点，固定传 `af_initiatetask` ，表示预发起状态
* af\_processinstanceid