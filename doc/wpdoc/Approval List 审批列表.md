---
title: Approval List 审批列表
date: 2020-05-19T19:31:19
---

# Approval List 审批列表

纯定制页面，用于显示当前用户所有的审批信息的列表，可以在该页面中新增和处理审批请求。

![](http://apaas.wxchina.com:8881/wp-content/uploads/approvalListSample.png)

## 引用关键字

```Json
"buildinpage:approvallist"
```

在 `link` 事件中，或者在 `functionmenu` 之类的控件中，使用该关键字来标明下一个页面为内置审批列表页面

## 列表数据获取接口

审批列表将会用到几个内置的接口用以和服务器数据进行交互

![](http://apaas.wxchina.com:8881/wp-content/uploads/listFlow.png)

> 蓝色部分为内部接口

### Request

POST API：***~/workflow/flow/getmyprocesslist***

```json
{
    "af_pageindex":1,            //页码
    "af_pagesize":20,            //页大小
    "af_querytype": 0,           //查询类型，待办:0, 已办:1, 默认查待办
    "af_querycondition": {
        "processinstancename": "",   // 流程实例名
        "processdefinename": "",     // 流程定义名称
        "applyusername": "",         // 发起人
        "startdate": "",             // 流程开始时间
        "enddate": "",               // 流程结束时间
        "categorycode": "",          // 分类的code
        "categoryname": ""           // 分类的名称
    }
}
```

### Response

```json
{
    "resp_data": {
        "af_pagecount": 1, //总页数
        "af_pagesize": 10, //页大小
        "af_itemcount": 1, //记录总条数
        "af_items": [
            {
                "af_assigned": true, //    是否已设置处理人
                "af_processdefineid": "expenseflow:1:72504", //    流程定义Id
                "af_processinstanceid": "75001", //    流程实例Id
                "af_processinstancename": "小王的费用", //    流程实例名称
                "af_processdefinekey": "expenseflow", //    流程定义Key
                "af_processdefinename": "费用报销流程", //    流程定义名称
                "af_taskid": "75006", //    任务Id
                "af_taskkey": "usertask1", //    任务Key

                "af_taskname": "渠道业务员发起", //    任务名称
                "af_createtime": "2017-03-24 15:46:03", //    任务创建时间
                "af_applyusercode": "831025515799248802", //    流程发起人Id
                "af_applyusername": "渠道业务员", //  流程发起人姓名
                "af_applytime": "2017-03-24 15:46:03", //    流程发起时间
                "af_statusname": "待处理", //    状态
                "af_operator": "处理",     // 处理
                "af_isfallback": false     // 是否为退回的步骤
            }
        ]
    }
}
```

* **af\_isfallback 状态需要传递到详情页面中**

## 任务认领接口

### Request

POST API：***~/workflow/flow/claimprocess***

```json
{
    "af_taskid": "75006"  //任务实例Id
}
```

所需的参数数据，均从行数据中，keyword相同的数据项获取

### Response

```json
{
    "resp_data": "success"   
}
```

## 流程详细信息获取接口

用于获取处理流程的UI信息，历史信息，以及相关选项信息，通常实在流程列表中，点击查看或者处理按钮时触发。

### Request

POST API：***~/workflow/flow/getflowstepdetail***

```json
{
    "af_processinstanceid": "75001", // 流程实例Id
    "af_taskid": "75006", // 任务Id
    "af_taskkey": "usertask1", // 任务Key
    "af_processdefineid": "expenseflow:1:72504" // 流程定义Id
}
```

所需的参数数据，均从行数据中，keyword相同的数据项获取

### Response

```json
{
    "resp_data": {
        "af_choices": [
            "同意",
            "不同意"
        ], // 审批选项
        "af_processdefineid": "expenseflow:1:72504", // 流程定义Id
        "af_processdefinekey": "expenseflow", // 流程定义Key
        "af_processdefinename": "费用报销流程", // 流程定义名称
        "af_processinstanceid": "75001", // 流程实例Id
        "af_taskid": "75006", // 任务Id
        "af_taskkey": "usertask1", // 任务Key
        "af_taskname": "渠道业务员发起", // 任务名称
        "af_createtime": "2017-03-24 15:46:03", // 任务创建时间
        "af_taskuicode": "firstForm", // 任务关联的UI对象编码
        "af_hashandle": false, // 是否已处理（决定页面审批UI元素的显示或隐藏）
        "af_hasend": false, // 流程是否已结束
        "af_businesskey": "报销单1", // 业务Id
        "af_processtraces": [ // 流程追踪
            {
                "af_assignee": "渠道业务员", // 处理人
                "af_comments": null, // 审批意见
                "af_choice": null, // 审批选择
                "af_actid": "startevent", // 活动Key
                "af_actname": "开始", // 活动名称
                "af_assigneecode": "831025515799248802", // 处理人Id
                "af_handletime": "2017-03-24 15:46:03" // 处理时间
            },
            {
                "af_assignee": "渠道业务员",
                "af_comments": null,
                "af_choice": null,
                "af_actid": "usertask1",
                "af_actname": "渠道业务员发起",
                "af_assigneecode": "831025515799248802",
                "af_handletime": null
            }
        ]
    }
}
```

* af\_taskkey

  该字段主要是用来区分审批流程过程中，各个不同的节点的。

  约定该值为 `af_initiatetask` 时，表示处在尚未真正发起的状态，此时不能显示审批历史和审批选项，按照新增发起处理。

* af\_taskuicode

  关联的审批表单的page code，通过该值拿到展示审批详细信息的page，相当于 `link` 事件的 `to` 属性。

## 传参说明

审批列表在点选 `处理` 按钮，或者点击审批名称的时候，会跳转到对应的审批表单中，审批表单会需要当前点击处理行的数据，具体说明如下

![](http://apaas.wxchina.com:8881/wp-content/uploads/listLink.png)

> 绿色部分为表单跳转

### 跳转到审批表单

传参的数据来源于获取 `流程详细信息获取接口` ，传参将用于审批表单的初始化等

#### 传参详情

```json
{
    //------- page状态 --------//
    "__pagestatus": "2",  // page状态

    //------- 流程信息 --------//
    // 目前只需要将获取流程信息接口的所有出参全部传递即可
    "__approvalflowdata": {
        "af_choices": [
            "同意",
            "不同意"
        ], // 审批选项
        "af_businesskey": "3445253563546",
        "af_processdefineid": "expenseflow:1:72504", // 流程定义Id
        ......
    }
}
```

* \_\_pagestatus

  page状态，审批表单会根据该字段控制控件的显示状态。

  当是从待办列表进入，且当前为草稿状态或者为初始状态时，表单为编辑；其余状态均为查看。

#### IDE 可关联配置字段

* af\_businesskey

  用于审批表单业务数据提交的主键

* af\_taskkey

  通常用于在不同的审批节点，部分控件有不同的显示状态，例如某些控件在发起的时候不能显示，在中间的步骤才能显示。

### 跳转到审批种类列表

无需传参