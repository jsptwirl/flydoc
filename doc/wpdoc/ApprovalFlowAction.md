---
title: ApprovalFlowAction
date: 2020-05-22T16:03:47
---

# Approval Flow 流程管理相关事件

用时实现定制的审批流程配置的事件。

## Approval List Action 获取审批列表行为

获取待办、已办列表的接口，该行为调用的接口已经对应的出入参约定与内建审批列表的数据获取一致，请参看其中关于 [审批列表数据获取](../../Page/ApprovalList.md) 的说明。

### Protocol

```Json
{
    "type": "af_getflowlist",
    "pagesize": "20",
    "querytype": "0",
    "querycondition": [
        {
            "name": "categoryname",
            "value": "",
            "ctrl": {
                "code": "",
                "component": ""
            }
        }
    ],
    "targetctrlcode": "order_list",
    "targetproperties": [
        {
            "name": "af_processinstancename",
            "ctrl": {
                "code": "name",
                "component": ""
            }
        }
    ]
}
```

* pagesize

  分页大小，默认为20

* querytype

  请求的列表的种类

|值|含义|
|---|---|
|0|待办|
|1|已办|

* querycondition

  请求的附加条件，可以为空，表示没有附加搜索条件。

  支持的条件参数名称如下

|名称|含义|
|---|---|
|processinstancename|流程实例名|
|processdefinename|流程定义名称|
|applyusername|发起人|
|startdate|流程开始时间|
|enddate|流程结束时间|
|categorycode|分类的code|
|categoryname|分类的名称|

* targetctrlcode

  请求回来的数据所赋值到的控件的code，通常是一个列表控件

* targetproperties

  数据赋值所使用的属性映射关系，与datarequest的setter属性中properties的含义一致

  返回的数据的key值，请参看接口说明 [Approval List](ApprovalList.md)

  > 为了简化配置，此处属性的配置中，配置人员可以只配需要显示，或者明确下一个页面需要的参数；但由于通常下一个页面为处理流程的页面，而处理流程有几个必填的 `processinfo` 参数的需求，因此在实现中，前端应该去检测 `targetproperties` 中是否有这几个参数，没有的话，应该自动添加上去，方便之后的获取。

### Request

POST API：***~/workflow/flow/getmyprocesslist***

```json
{
    "af_pageindex":1,            //页码
    "af_pagesize":10,            //页大小
    "af_querytype": 0            //查询类型，待办:0, 已办:1, 默认查待办
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
                "af_operator": "处理"     // 处理
            }
        ]
    }
}
```

## Approval Pre Add Action 发起审批行为

通过指定需要发起的流程种类，来获取流程的基础信息。

### Protocol

```Json
{
    "type": "af_preaddflow",
    "af_processdefinekey": "expenseflow", // 用于指定需要发起的流程种类
    "mode": "popup",    // 与link事件相同
    "pagesize": {
        "width": "800",
        "height": ""
    },
    "param": {}          // 与link事件相同
}
```

* af\_processdefinekey

  需要发起的流程的种类

> 调用接口：~/workflow/flow/preaddflow

**Request**

POST API：***~/workflow/flow/preaddflow***

```json
{
    "af_processdefinekey": "expenseflow"  //流程定义Key
}
```

* af\_processdefinekey

  直接使用action的 `processdefinekey` 属性即可

**Response**

```json
{
    "resp_data": {
        "af_processdefineid": "expenseflow:1:72504",      //流程定义Id
        "af_processdefinekey": "expenseflow",             //流程定义Key
        "af_processdefinename": "费用报销流程",             //流程定义名称
        "af_applyuicode": "firstForm"                     //流程发起UI对象编码
    }
}
```

与在内建\[审批种类列表中发起\]()的传参一致

## Approval Handle Action 处理审批行为

```json
{
    "type": "af_handleflow",
    "processinfo": [
        {
            "name": "af_processdefineid",
            "value": "",
            "ctrl": {
                "code": "",
                "component": ""
            }
        }
    ],
    "businesskey": "orderid"
    "param": {}          // 与link事件相同
}
```

* processinfo

  流程的基本信息，共有4个参数需要填写，而且是必须每个都要填写

|key|说明|
|---|---|
|af\_processdefineid|流程定义ID|
|af\_processinstanceid|流程实例ID|
|af\_taskid|任务ID|
|af\_taskkey|任务key|

* businesskey

  用于指定业务数据的主键的key，该行为会将从流程服务接口中获取到的业务主键，赋值给businesskey，并以传参形式传递给下一个页面。