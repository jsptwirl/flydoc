---
title: workflow工作流
date: 2020-07-03T17:57:56
---

# 3.4. 工作流

flycode中可调用工作流服务，操作预设流程的发起和提交，获取当前流转的流程信息。

## 3.4.1. 当前流程信息

**API**

```js
// 加载模块
load('workflow');
```

```js
/**
* 当前流程信息
*/
class WorkflowInfo
```

实例化 WorkflowInfo 即可获得当前的流程相关信息

```js
// WorkflowInfo 数据结构
{
    "af_processinstanceid": "",                 // 流程实例Id
    "af_processinstancename": "",               // 流程实例名称
    "af_processdefineid": "",                   // 流程定义Id
    "af_processdefinename": "",                 // 流程定义名称
    "af_applyusercode": "",                     // 流程发起人编码
    "af_hasend": "",                            // 流程状态，是否已结束
    "prestate": {                               // 流程提交前参数
        "af_taskname": "",                      // 用户任务名称
        "af_choicename": "",                    // 审批选项名称
        "af_comments": ""                       // 审批意见
    },
    "forwardstate": [                           // 后续流程节点信息
        {
            "af_taskid": "",                    // 用户任务实例Id
            "af_taskkey": "",                   // 用户任务Key 【忽略】
            "af_taskname": "",                  // 用户任务名称
            "af_handler": ""                    // 处理人
        }
    ]
}
```

---

**例**: 获取当前的流程定义名称，当前审批意见，并记录日志

```js
load('workflow');
var wf = new WorkflowInfo();

FLY.log(
        " 流程-> 名称:" + wf.af_processdefinename + 
        " 审批意见:" + wf.prestate.af_comments
);
```

## 3.4.2. 流程发起

**API**

```
load('workflow');   // 加载流程模块
WORKFLOW.allocate();  // 发起流程,默认取当前成员作为发起人
WORKFLOW.allocate('<发起人>') // 发起流程重载的方法，传递的参数为发起人
WORKFLOW.allocate(<流程对象自定义>) // 发起流程,默认取当前成员作为发起人。需要自定义流程对象信息的，可加入
WORKFLOW.allocate('<发起人>', <流程对象自定义>) // 发起人和流程对象都可自定义
```

---

**示例**

```
load('workflow');

// 保存请假单对象
var leave = IN.kx_leave;
var startDate = new Date(leave.starttime);
var endDate = new Date(leave.endtime);

leave.applydate = NOW.time();
leave.approvalstatus = '待审批';
DB.insert(leave);

// 发起流程
WORKFLOW.allocate();

// 发起流程(如:订单录入员)
WORKFLOW.allocate(IN.kx_order.inputer);

// 流程对象自定义(修改流程实例名称)
WORKFLOW.allocate({'af_processinstancename':'自定义实例名'});

// 更新审批状态
IN.kx_leave.approvalstatus = '草稿';
DB.update(IN.kx_leave);
```

---

## 3.4.3. 流程提交

**API**

```
load('workflow');   // 加载流程模块
WORKFLOW.submit();  // 流程提交
WORKFLOW.submit(<自定义对象>); // 用于传递复杂逻辑的处理
```

---

**示例**

```
load('workflow');

// 保存请假单对象
var leave = IN.kx_leave;
var startDate = new Date(leave.starttime);
var endDate = new Date(leave.endtime);

// 保存对象
DB.update(IN.kx_leave);

WORKFLOW.submit();  // 提交流程

WORKFLOW.submit({'params':{'iswork':'true'}});  // 提交流程，并传递自定义信息。本例假设传递一个是否工作的参数给流程引擎使用
// 更新审批状态
if (WF.choice == '终止') {
    IN.kx_leave.approvalstatus = '已中止';
} else if (WF.choice == '退回') {
    IN.kx_leave.approvalstatus = '已驳回';
} else {
    if (WF.taskname == '文员(行政)核对') {
        if (WF.choice == '同意') {
            IN.kx_leave.approvalstatus = '审批通过';
        } else if (WF.choice == '不同意') {
            IN.kx_leave.approvalstatus = '审批不通过';
        }
    } else {
        IN.kx_leave.approvalstatus = '审批中';
    }
}

DB.update(IN.kx_leave);
```

---

## 3.4.4. 流程外部终止

**API**

```
load('workflow');   // 加载流程模块
WORKFLOW.terminal('<业务Id>', '<流程定义Key>', '<终止原因>');  // 终止流程
```

---

**示例**

```
load('workflow');
var order = IN.order;
var orderid = leave.orderid;
WORKFLOW.terminal(orderid, null, '订单废弃，自动终止');
```

---