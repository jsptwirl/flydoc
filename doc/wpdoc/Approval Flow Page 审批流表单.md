---
title: Approval Flow Page 审批流表单
date: 2020-05-19T19:30:41
---

## Approval Flow Page 审批流表单

审批流，用于处理审批相关的业务。

主要有以下几个部分组成

* 审批列表 Approval List

  专门用于显示待办和已办的审批数据的列表，该功能目前为内建的功能，只能引用，不支持配置，详细的技术细节参看[审批列表技术说明](http://apaas.wxchina.com:8881/2020/05/19/approval-list-审批列表/)

* 审批种类列表 Approval Type List

  在审批列表发起的新审批时，需要先选择审批种类，再新建审批。该功能目前只内置于`审批列表` 的页面中，不支持单独引用，技术细节参看 [审批种类列表技术说明](http://apaas.wxchina.com:8881/2020/05/19/approval-type-list-审批类型列表/)

* 审批发起协议 Approval New Protocol

  区别于在固定的 `审批列表` 中发起审批，系统支持在任意的业务表单中发起新审批。目前该功能以特殊表单行为的形式配置，详细说明请参看 \[审批发起协议\]()

* 审批表单 Approval Page

  审批表单是以业务表单为基础，添加了审批相关操作（审批内容填写，查看，提交等）的业务化表单，本文档主要讲解这部分内容。

## 审批表单的流程

根据上个

### 界面流转

* 新增，或者处理暂存

  当用户通过发起流程按钮，或者在待办中点击尚未发起的暂存状态的流程进行处理的时候，都算作是新增审批操作。

  ![](http://apaas.wxchina.com:8881/wp-content/uploads/pageSample2.png)

* 处理

  当用户在待办列表中通过点击处理按钮进入时，均为处理审批操作。

  ![](http://apaas.wxchina.com:8881/wp-content/uploads/pageSample3.png)

### 按钮操作的时序

* **下一步** 按钮（新增界面）

  新增界面的下一步按钮的操作较为复杂，一般都会先上传数据，再获取下一步处理信息。而且会根据是发起按钮进入，还是草稿处理按钮进入，有不同的处理。

  ![](http://apaas.wxchina.com:8881/wp-content/uploads/pageNewSequence.png)

* **下一步** 按钮（处理界面，或者处理暂存界面）

  在处理界面，下一步处理相对简单，只是简单的获取下一步处理信息。

  ![](http://apaas.wxchina.com:8881/wp-content/uploads/pageApprovalSequence.png)

* **提交** 按钮 (新增，处理暂存，处理)

  不管是新增，还是处理，提交按钮的处理都是一致的，区别仅在于新增的时候，部分处理界面特有的流程字段为空。

  ![](http://apaas.wxchina.com:8881/wp-content/uploads/pageSubmitSequence.png)

## Protocol 协议

### 表单协议

```json
{
    "pageinfo": {
        "code": "319609839767500070"
    },
    "approvalflow": {
        "instancename": "le:user('name') + '的' + {af_processdefinename}",
        "initiateaction": "4343434321111122",
        "submitaction": "4343434321111123"
    }
}
```

* submitaction

  和表单流一样，审批流表单也需要标识其自身的数据提交action

* approvalflow

  用于审批的表单必须要有该节点，用于定义审批流所需相关信息

  * instancename

    用于新建审批时，生成审批实例名称的表达式

  * initiateaction

    指定发起流程所调用的业务数据提交接口

  * submitaction

    指定提交流程所调用的业务数据提交接口

### 上下文传参约定

```Json
{
    "af_taskkey": "af_initiatetask"
}
```

当传参中包含 `af_taskkey` ，且当前表单协议中有 `approvalflow` 节点的时候，就认为当前表单处在审批流程的上下文之中，需要按照本协议进行表单处理。

当 `af_taskkey == af_initiatetask` 时为新增，其他值为处理。

根据 `af_statusname` 和 `af_taskkey` 两个字段。共同决定当前的表单状态

## 下一步信息获取接口

目前主要用于获取下一步处理人信息，该接口在新增和处理审批中均会使用

#### Request

POST API：***~/workflow/flow/predictnextstepinfo***

```json
{
    "af_processdefineid": "expenseflow:1:72504",     //流程定义Id
    "af_taskid": "75006",          //任务Id
    "af_choice": "",               //审批选择
    "af_choicename": "",               //审批选择
    "af_bizinfo": {                //业务信息, key-value形式
        "a": "b",
        "b": "c"
    }
}
```

* af\_processdefineid & af\_taskid

  这两个参数均需要在调用数据提交操作后，返回的流程实例信息中获取

* af\_choice

  当前用户所选择的审批选项值，由于是新增审批，没有选项，因此该值为空即可

* af\_bizinfo

  业务数据，单表单的情况下，参看下方数据组装说明。

  后台服务会根据业务数据中的部分数据决定下一步处理节点信息。

#### Response

```Json
{
    "resp_data": {                
        "af_nodekey": "usertask2",  //节点Key
        "af_nodetype": "userTask",  //节点类型 (startEvent、userTask、endEvent)
        "af_typename": "用户任务",   //节点类型名称  （开始节点、用户任务、结束节点）
        "af_nodename": "财务人员审核",  //节点名称
        "af_jointnode": false,     //是否会签节点
        "af_model": "auto|manual",  //模式（认领|选人）
        "af_nodecandidates": [    //可选人员范围信息 
            {
                "af_userinfoid": "831025515799248803",  //人员Id 
                "af_userinfoname": "财务",      //人员名称
                "af_saleareaid": "100",       //区域（部门）Id
                "af_saleareaname": "总部"      //区域（部门）名称
            }
        ]
    }
}
```

## 数据组装

### 流程发起接口

#### Request

```json
{
    "kx_contract": { // 业务数据  
        "id": "",
        "name": ""
    },
    "__approvaldata": { // 审批数据
        "af_processdefinekey": "",         // 流程定义Key
        "af_processinstancename": "小王的报销单",   // 流程实例名
        "af_businessobjname": "",  // 业务对象名称
        "af_businessobjpropertyname": ""     // 业务对象标识属性名称
    }
}
```

* \_\_approvaldata

  * af\_processdefinekey

  * af\_applyUserCode

  * af\_businessKey

    业务主键，可以为空，空的时候表示还没有业务实例，将会在该接口的返回数据中返回业务实例。

#### Response

```Json
{
    "af_processdefineid": "",       // 流程定义Id
    "af_processinstanceid": "",     // 流程实例Id 
    "af_taskid": "",               // 流程发起后的第一步任务实例Id
    "af_taskname": "",             // 流程发起后的第一步任务名称
    "af_businesskey": ""            // 业务数据id
}
```

### 流程提交接口

#### Request

```Json
{
    "businessdata": { // 业务数据  
        ......
    },
    "__approvaldata": { // 审批数据
        "af_taskid": "",
        "af_taskname": "",
        "af_processinstanceid": "",     // 流程实例Id 
        "af_choice": 1,
        "af_choicename": "",               //审批选择的name
        "af_comments": "",
        "af_jointnode": "",
        "af_nextstepusers": "831025515799248803,831025515799248804",
        "af_fallbacknodekey": "",          // 回退时选择的回退节点Key
        "af_businessobjname": "",          // 业务对象名称
        "af_businessobjpropertyname": ""   // 业务对象标识属性名称
    }
}
```

#### Response

```Json
{

}
```