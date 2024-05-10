---
title: 流程服务Rest接口
date: 2021-11-11T10:44:33
---

## 1.1 流程应用接口

### 1.1.1 流程预发起

* 说明

流程预发起接口：用于获取流程定义基本信息以及发起UI的配置信息；

* url

POST API: ~/workflow/flow/preaddflow

* RequestBody

```json
{
    "af_processdefinekey": "p_896215376495513600"  //流程定义Key
}
```

* ResponseBody

```json
{
    "resp_data": {
        "af_processdefineid": "p_896215376495513600:21:1185497075681464320",// 流程定义Id
        "af_processdefinekey": "p_896215376495513600",// 流程定义Key
        "af_processdefinename": "请假单",// 流程定义名称
        "af_uiconfig": { // UI配置信息
            "mobileui": {
                "pagecode": "896207527157567562",// UI编码
                "controlmanager": null,// UI控制逻辑，630不考虑
                "submitbuttoncode": "button-ctrl_button_save",// 指定UI提交按钮控件Code
                "businessobjname": "kx_leave",// 业务对象名称
                "businessobjpropertyname": "leaveid"// 业务对象标识属性名称
            },
            "webui": {
                "pagecode": "895833338005295154",
                "controlmanager": null,
                "submitbuttoncode": "button-ctrl_button_save",
                "businessobjname": "kx_leave",
                "businessobjpropertyname": "leaveid"
            },
            "actions": {
                "submitlogicmodelcode": "908881091400700003",// 提交行为模型编码
                "submitlogiccode": "908954560385650787",// 提交行为 
                "applylogicmodelcode": "908881091400700003",// 发起行为模型编码
                "applylogiccode": "908897639783862364",// 发起行为
                "withdrawmodelcode": "",
                "withdrawlogiccode": "",
                "abandonmodelcode": "",
                "abandonlogiccode": "",
                "deletemodelcode": "",
                "deletelogiccode": "",
                "tempsavemodelcode": "",//v3.2 暂存行为模型编码
                "tempsavelogiccode": ""//v3.2 暂存行为
            }
        },
        "af_instancenamerule": "le:user('userinfoname') + '的请假单'"  // 流程实例名生成规则
    }
}
```

---

### 1.1.2 获取下一步信息

* 说明

获取下一步步骤信息接口，用于选择下一步人员

* url

POST API: ~/workflow/flow/predictnextstepinfo

* RequestBody

```json
{
    "af_processdefineid": "p_896215376495513600:21:1185497075681464320",//流程定义id
    "af_taskid": "1301699355702595585",//任务id
    "af_choice": 1,//审批选项
    "af_choicename": "同意",//审批选项名称
    "af_bizinfo": {//业务信息, object-map形式，与发起和提交的业务数据格式相同
        "kx_leave": {
            "leaveid": "1113342551156461898",
            "usercode": "1026669501686617054",
            "leavetype": "895840294887624704",
            "applydate": "1599113400000",
            "starttime": "1599113400000",
            "endtime": "1599199800000",
            "remark": "",
            "attachments": "[]",
            "datespan": "8",
            "images": "[]",
            "approvalstatus": "草稿"
        }
    }
}
```

* ResponseBody

```json
{
    "resp_data": {
        "af_nodekey": "sid-46F7DE00-B629-4A8A-A5DB-80AE82381AB4,nodekey2",//节点Key //v3.2 流转的节点..有可能为空 （即多人审批，未达到流转的条件时） 多个时以逗号分隔
        "af_nodetype": "userTask",//节点类型
        "af_typename": "用户任务",//节点类型名
        "af_nodename": "上级领导审批",//节点名称 //v3.2 多个情况下，以逗号分隔 (不同意退回情况下，会出现此种情况)
        "af_jointnode": false,//是否为多实例节点 v3.2定义有调整，并非为会审节点的定义概念
        "af_mode": "manual",//
        "af_pick": "1",//选人策略 1 单选 2 多选 0 不用选择人(用于会审中多人，还不可以进入到下一步) //v3.2增加  3 指定 由这些人进行审批 (用于流转处理时，回退后的处理情况)
        "af_turntype": "",//流转类型 fallback(普通退回) | sendback(退回一种，允许直送回退回节点) | directsend 直送退回节点 | forward(向前) | nochange(不改变：处理多人审批或未达到流转条件时) 空（兼容：按照旧逻辑处理） //v3.2 定义 //v3.3 是否直送审批 由审批人选择 choiceback (选择选项：sendback、fallback)
        "af_nodecandidates": [// 可选人员范围信息 
            {
                "af_memberid": "1185027297384730624",//成员id
                "af_membername": "主管",//成员姓名
                "af_phonenumber": "15603004002",
                "af_postid": "1183568138374090752",
                "af_postname": null,
                "af_parentpostid": null,
                "af_orgid": "1183564545248071680",
                "af_orgname": "销售点1",
                "af_parentorgid": "1183564207958921216",
                "af_refpostid": "888000000000000003",//职位id
                "af_refpostname": "主管"//职位
            }
        ],
        /*前端在选择不同的退回节点时，
        根据 选择退回的节点key, 
        从af_backmembers中筛选出不同退回节点退回的成员，
        成员的具体信息，依旧存放在af_nodecandidates（当退回为多个时，是所有可退回节点成员）
        */
        "af_backmembers": {//如果是非多退回节点时，此节点可能忽略输出 //v3.2 解决不同意多选退回节点情况
            "sid-46F7DE00-B629-4A8A-A5DB-80AE82381AB4": "1185027297384730624,memberid2",
            "nodekey2": "memberid1,memberid2"
        }
    }
}
```

### 1.1.3 列表查询

* 说明

获取待办、已办接口、我发起的、我收到

1. 查询时间定义

待办： 任务的接收时间 作为时间范围查询

已办： 任务的处理时间 作为时间范围查询

我发起: 申请任务的接收时间(发起时间) 作为时间范围查询

我收到的: 任务的接收时间 作为时间范围查询

* url

POST API: ~/workflow/flow/getmyprocesslist

* RequestBody

```json
{
    "af_pageindex":1,           //页码
    "af_pagesize":10,           //页大小
    "af_querytype": 0,          //查询类型，待办:0, 已办:1, 我发起：2, 我收到：3.   默认查待办 v3.2，增加了2，3类型
    "af_querycondition": {
        "processinstancename": "",  // like 流程实例名 or 流程定义名称 or 发起人
        "processdefinename": "",    // like 流程定义名称
        "applyusername": "",        // like 发起人
        "startdate":    "",         // 流程开始时间  内部查询时间定义，看上面定义
        "enddate":  "",             // 流程结束时间 
        "key": "",//流程key
        "categorycode": "",//分类编码 
        "categoryname": "",//分类名称
        "categorytype": "",// 1-业务类，2-办公类
        "flowstate": "",//流程状态 单选  v3.2  //  0|空 全部 （默认），1 审批中 ，2 审批完成，3 已撤销
        "categorycodes": "",//分类编码 支持多选 多个以逗号分隔  v3.2
        "processinstanceid": "",//流程实例id v3.3
        "urge": "1"//v3.3 待办列表  是否催办  1 找催办记录 ， 空 查找全部 
    }
}
```

* ResponseBody

```json
{
    "resp_data": {
        "af_pagecount": 1,//总页数
        "af_pagesize": 20,//每页大小
        "af_itemcount": 16,//记录总数
        "af_items": [
            {
                "af_processdefineid": "p_896215376495513600:21:1185497075681464320",//流程定义id
                "af_processinstanceid": "1211923438059524096",//流程实例id
                "af_processinstancename": "XX的请假单",//流程实例名称
                "af_processdefinekey": "p_896215376495513600",//流程定义key
                "af_processdefinename": "请假单",//流程定义名称
                "af_taskid": "1211923440651603968",//任务id
                "af_taskkey": "sid-46F7DE00-B629-4A8A-A5DB-80AE82381AB4",//任务key
                "af_taskname": "上级领导审批",//任务名称
                "af_createtime": 1577780039357,//任务创建时间
                "af_endtime": 1577780039357,//任务结束时间 待办为空
                "af_assigned": true,//是否已设置处理人
                "af_applyusercode": "1169909387230318592",//流程发起人id
                "af_applyusername": "XX",//发起人姓名
                "af_applytime": 1577780038740,//申请时间
                "af_isfallback": false,//是否退回
                "af_statusname": "处理中",//状态
                "af_businesskey": "1210510625986449446",//业务id
                "af_categorycode": "100000000",//类别编码
                "af_categoryname": "办公相关",//类别名称
                "af_taskownername": "test",//邀请人 //v3.2 用于展示评论的邀请人姓名
                "af_taskstatus": "",//任务状态 //v3.2 用于评论列表，显示 未评论、已评论、已过期
                "af_urge": "1" //v3.3 待办列表 是否催办 1: 是 
            }
        ]
    }
}
```

* 待办列表

af\_statusname : 草稿、处理中、退回、撤回

* 已办列表

af\_statusname : 不通过、通过、已结束（旧数据）、处理中、已终止

* 我申请

af\_statusname : 草稿、退回、撤回、处理中、已终止、不通过、通过、已结束

* 我收到

af\_statusname : 草稿、退回、撤回、处理中、已终止、不通过、通过、已结束

---

### 1.1.4 获取审批明细

* 说明

获取审批明细接口，从待办或已办进入审批时调用

任务类别:  
apply: 是代表任务为申请任务  
task： 是一个正常的审批任务  
review：是一个评论任务  
sendback: 是一个可以直送回退回节点的审批任务  
fallback: 是一个被退回的审批任务  
contersign：是一个加签的审批任务  
delegate: 是一个代理代办的审批任务  
withdraw:是一个申请人撤回后，审批任务类型  
recall:是指被申请人撤回时，生成一个被撤回的任务信息

* url

POST API: ~/workflow/flow/getflowstepdetail

* RequestBody

```json
{
    "af_processinstanceid": "1301699354846957568",//流程实例Id
    "af_taskid": "1301699355702595585",//任务Id
    "af_taskkey": "af_initiatetask",//任务Key
    "af_processdefineid": "p_896215376495513600:21:1185497075681464320" //流程定义Id
}
```

* ResponseBody

```json
{
    "resp_data": {
        "af_processdefineid": "p_896215376495513600:21:1185497075681464320",//流程定义Id
        "af_processdefinekey": "p_896215376495513600",//流程定义Key
        "af_processdefinename": "请假单",//流程定义名称
        "af_processinstanceid": "1301699354846957568",//流程实例id
        "af_processinstancename": "某某某请假单",//流程实例名称
        "af_taskid": "1301699355702595585",// 任务Id
        "af_taskkey": "af_initiatetask",//任务key
        "af_taskname": "发起人提申请",//任务名称
        "af_createtime": "2020-09-04 09:51:25",//任务创建时间
        "af_taskcategory": "",//当前任务类别 //v3.2 task sendback recall fallback withdraw contersign delegate review apply
        "af_group": "",//任务分组 //v3.2
        "af_taskuiconfig": {//节点UI配置信息
            "mobileui": {
                "pagecode": "896207527157567562",// UI编码
                "controlmanager": null,// UI控制逻辑，不在此实现，由页面写uiflycode控制//v3.x 会有定义。定义结构后续补充
                "submitbuttoncode": "button-ctrl_button_save",// 指定UI提交按钮控件Code
                "businessobjname": "kx_leave",// 业务对象名称
                "businessobjpropertyname": "leaveid"// 业务对象标识属性名称
            },
            "webui": {
                "pagecode": "895833338005295154",
                "controlmanager": null,
                "submitbuttoncode": "button-ctrl_button_save",
                "businessobjname": "kx_leave",
                "businessobjpropertyname": "leaveid"
            },
            "actions": {
                "submitlogicmodelcode": "908881091400700003",// 提交行为模型编码
                "submitlogiccode": "908954560385650787",// 提交行为 
                "applylogicmodelcode": "908881091400700003",// 发起行为模型编码
                "applylogiccode": "908897639783862364",// 发起行为
                //<code>新增了另外几个事件的</code>//new
                "withdrawmodelcode": "908881091400700003",//撤回
                "withdrawlogiccode": "111111111",
                "abandonmodelcode": "908881091400700003",//终止
                "abandonlogiccode": "2222222222",
                "deletemodelcode": "908881091400700003",//删除
                "deletelogiccode": "333333333333"
            }
        },
        "af_hashandle": false,// 是否已处理（决定页面审批UI元素的显示或隐藏)
        "af_hasend": false,//流程是否已结束
        "af_businesskey": "1113342551156461898",//业务数据主键Id
        "af_choices": [//列出当前步骤可操作的功能行为
            {
                "af_choice": 1, // 选项code
                "af_choicename": "同意", // 选型value
                //在此补入逻辑编码？ //v3.2  
                "modelcode": "",//执行提交模型编码
                "logiccode": ""//执行提交的行为编码
            },
            {
                "af_choice": 2,
                "af_choicename": "不同意",
                "modelcode": "",
                "logiccode": ""
            }
        ],
        "af_jointnode": false,// 当前任务节点是否为会审节//v3.2 定义有调整，更改为是否为多实例节点
        "af_processtraces": [ // 流程审批记录追踪
            {
                "af_actid": "sid-251EA43B-BCB3-4CC8-8681-9749FAEA2BDF",// 活动Key
                "af_actname": "开始",// 活动名称
                "af_acttype": "startEvent",// 活动类型
                "af_assigneecode": null,//处理人编码
                "af_assignee": null,//处理人姓名
                "af_handletime": "2020-09-04 09:51:25",//处理时间
                "af_comments": null,//审批意见 //兼容af_commentlist
                "af_choice": null,   // 审批选择
                "af_choicename": null, // 审批选择名称
                //v3.1 增加返回属性
                "af_orgname": "快销V8.5.1-base开发租户",
                "af_phonenumber": "13012345677",
                "af_postname": "主管",
                "af_refpostname": "主管",
                "af_taskid": "1332206597367271426",
                //v3.2
                "af_reviews": [//评论信息
                    {
                        "af_type": "review",//评论
                        "af_time": "2020-09-04 09:51:25",
                        "af_msg": "xxxxxx"
                    }
                ],
                "af_group": "",//任务分组 //v3.2
                "af_taskcategory": "",//任务类别 //v3.2 task sendback recall fallback withdraw contersign delegate review apply
                //v3.3
                "af_copysend": "[{\"id\":\"1\",\"name\":\"张三\"}]",//v3.3 //json 字符串，记着抄送的人的id和姓名？ 列出会知的人的姓名？需要变为一个 数组对象
                //如何区分，是任务的分享和已办的时候的分享？
                "af_attachments": [//v3.3 附件数据
                    {
                        "af_type": "attachment",//附件
                        "af_time": "",//上传时间
                        "af_msg": "",//包括附件名称\url等信息 json //前端的附件json定义结构？
                    }
                ],
                //v3.3额外输出 
                "af_ptaskid":"",//父任务id，表达此任务是由那个任务派生出来。 目的，是为了以后，要构造成一颗树状数据展示？
                "af_jumpintype": "",//进入此任务的原因（类型）
                "af_starttime": ""//任务的接收时间（创建任务时间）
            }
        ],
        "af_status": "",//流程状态 //v3.3 处理中等同于af_taskcategory 结束的，为流程实例的结束标记 delete_reason_的定义
        "af_statusname": "",//流程状态名称 //v3.3 用于展示详情中的状态名称 结合 af_hasend=true 来决定是否显示
        "af_urge": "1"//v3.3 是否催办(催办等级？) //不一定用上，先定义在此
    }
}
```

### 1.1.5 获取可退回节点列表

* 说明

获取可退回的节点列表, 用于流程退回的场景

* url

POST API: ~/workflow/flow/getfallbacknodelist

* RequestBody

```json
{
    "af_taskkey": "sid-46F7DE00-B629-4A8A-A5DB-80AE82381AB4",//当前节点key
    "af_processinstanceid": "1301699354846957568",//流程实例id
    "af_processdefineid": "p_896215376495513600:21:1185497075681464320"//流程定义id
}
```

* ResponseBody

```json
{
  "resp_data": [
    {
      "af_nodekey": "af_initiatetask",                // 可退回的节点Key
      "af_nodeName": "发起人申请",                 // 可退回的节点名称
    }
  ]
}
```

### 1.1.6 获取选定的退回节点的详细信息

* 说明

获取选定的退回节点的详细信息, 用于流程退回的场景

* url

POST API: ~/workflow/flow/getfallbacknodedetail

* RequestBody

```json
{
    "af_taskkey": "af_initiatetask",                            // 选定的退回节点Key
    "af_processinstanceid": "1301699354846957568",              // 流程实例Id
    "af_processdefineid": "p_896215376495513600:21:1185497075681464320"     // 流程定义Id
}
```

* ResponseBody

```json
{
    "resp_data": {
        "af_nodekey": "af_initiatetask",
        "af_nodetype": "userTask",
        "af_typename": "用户任务",
        "af_nodename": "发起人提申请",
        "af_jointnode": false,
        "af_mode": "manual",
        "af_pick": "1",
        "af_nodecandidates": [
            {
                "af_memberid": "1169909332268158976",
                "af_membername": "王娟",
                "af_phonenumber": "17665028612",
                "af_postid": "1161900362488221696",
                "af_postname": "主管",
                "af_parentpostid": null,
                "af_orgid": "1",
                "af_orgname": "快销V8.5.1-base开发租户1",
                "af_parentorgid": null,
                "af_refpostid": "888000000000000003",
                "af_refpostname": "主管"
            }
        ]
    }
}
```

### 1.1.7 获取流程分类明细

* 说明

获取流程分类明细，明细中列出该分类下的流程列表

用于手机端，获取流程分类，有根据功能权限获取有`授权`的流程  
`v3.2 更改为web端也可使用此接口 同样，web也要做 流程功能点授权，才会有对应数据`

* url

POST API: ~/workflow/flow/getflowcategorydetail

* RequestBody

```json
{
}
```

* ResponseBody

```json
{
    "resp_data": [
        {
            "af_flowcategorycode": "100000000",//流程分类编码
            "af_flowcategoryname": "办公相关",//流程分类名称
            "af_parentcode": "0",
            "af_status": 1,//分类状态
            "af_categorytype": 0,//分类类别
            "af_processlist": [
                {
                    "af_processkey": "p_1167025417535901696",//流程key
                    "af_processname": "月度出差评估申请"//流程名称
                }
            ]
        }
    ]
}
```

### 1.1.8 流程发起

* 说明

流程发起

`注：发起接口，是由业务引擎包装，调用。一般不建议直接微服务调用`

需要用flycode调用，在调用流程引擎发起接口前或后，进行其他的业务数据处理

* url

POST API: ~/workflow/flow/allocateflow

flycode接口

POST API: ~/api/teapi/dy-biz/{modelcode}/{logiccode}

* RequestBody

```json
{
    "__approvaldata": {
        "af_processdefinekey": "p_896215376495513600",// 流程定义Key
        "af_processinstancename": "某某某请假单",//流程实例名
        "af_businessobjname": "kx_leave",//业务对象名
        "af_businessobjpropertyname": "leaveid",//业务对象标识属性名称
        "af_processinstanceid": ""//为了兼容处理草稿，不做发起处理的处理  //v3.2 定义
        //需要注意一点，是对应的业务逻辑的flycode 对业务数据的处理，也要去判断，是否已经存在数据的处理保存
    },
    "kx_leave": {//业务数据 
        "leaveid": "1113342551156461898",
        "usercode": "1026669501686617054",
        "leavetype": "895840294887624704",
        "applydate": "1599113400000",
        "starttime": "1599113400000",
        "endtime": "1599199800000",
        "remark": "",
        "attachments": "[]",
        "datespan": "8",
        "images": "[]",
        "approvalstatus": "草稿"
    }
}
```

* ResponseBody

```json
//流程实例对象
{
    "af_processdefineid": "testFlow:1:868035529109803008",      // 流程定义Id
    "af_processinstanceid": "868041669533110272",               // 流程实例Id
    "af_taskid": "868041669658939392",                          // 发起后的任务实例Id
    "af_businesskey": ""                                        // 业务数据标识值
}
```

---

### 1.1.9 流程提交

* 说明

`注：提交接口，是由业务引擎包装，调用。一般不建议直接微服务调用`

1. 需要用flycode调用，在调用流程引擎提交接口前或后，进行其他的业务数据处理

2. 同意不同意的操作，进入提交的逻辑接口
3. 增加了抄送 af\_notifyusers v3.3

* url

POST API: ~/workflow/flow/submitflow

flycode接口

POST API: ~/api/teapi/dy-biz/{modelcode}/{logiccode}

* RequestBody

```json
{
    "__approvaldata": {
        "af_taskname": "发起人提申请",//任务名称
        "af_choice": "1",//审批选项
        "af_choicename": "同意",//审批选项名称
        "af_comments": "审批意见",//审批意见
        "af_jointnode": false,//下一步节点是否为多实例节点 //v3.2 定义调整
        "af_nextstepusers": "1185027297384730624",// 下一步人员Id，多个用逗号分隔（会审）
        "af_processinstanceid": "1301699354846957568",//流程实例id
        "af_taskid": "1301699355702595585",//任务id
        "af_businessobjname": "kx_leave",//业务对象名称
        "af_businessobjpropertyname": "leaveid",//业务对象标识属性名称
        "af_fallbacknodekey": "",//回退时选择的回退节点Key //v3.2 注：此属性不止退回时有值，在提交时，按照获取下一步接口返回的af_nodekey填充
        "af_currentjoinnode": false,// 当前节点是否为多实例节点 //v3.2 定义调整
        "af_turntype":"",//v3.2 提交时，根据获取下一步接口返回的数据，写入
        "af_notifyusers": "[{\"id\":\"1\",\"name\":\"张三\",\"pname\":\"职位\"}]",//v3.3 抄送|分享 选择的人 数组json
        "af_attachment": "[{\"url\":\"/xxx/xxxx/gdsgd.jpg\",\"filename\":\"\",\"type\":\"\"}]"//v3.3 附件 前端附件json结构  注：普通任务在提交的同时并上传附件时使用 ？ 附件上传，是与提交操作分开处理？
    },
    "kx_leave": {//业务数据入参
        "leaveid": "1113342551156461898",
        "usercode": "1026669501686617054",
        "leavetype": "895840294887624704",
        "applydate": "1599113400000",
        "starttime": "1599113400000",
        "endtime": "1599199800000",
        "remark": "",
        "attachments": "[]",
        "datespan": "8",
        "images": "[]",
        "approvalstatus": "草稿"
    }
}
```

* ResponseBody

```json
{//调用flycode返回的数据
    "resp_data":{
        "__approvaldata":{"af_processinstanceid":"1301699354846957568"}
    }
}
```

```json
{//调用流程引擎服务，返回数据
    "resp_data": "流程实例id"
}
```

### 1.1.10 流程实例删除

* 说明

1. 需要在流程配置中，定义删除行为指定
2. 流程在草稿状态下，允许可以删除处理

* url

flycode接口

POST API: ~/api/teapi/dy-biz/{modelcode}/{logiccode}

* RequestBody

```json
{   
    "__approvaldata": {
        "af_taskname": "申请",
        "af_choice": 9,//
        "af_choicename": "删除",//
        "af_comments": "",
        "af_jointnode": false,
        "af_nextstepusers": "",
        "af_processinstanceid": "1411946336068575232",//必须
        "af_taskid": "1411946336110518272",//必须
        "af_fallbacknodekey": "",
        "af_currentjoinnode": false,
        "af_turntype": ""
    },
    "kx_leave":{
        "leaveid":"1210174455765444252"
    }
}
```

* ResponseBody

```json
//200
{"resp_data":{"__approvaldata":{"af_processinstanceid":"1411946336068575232"}}}
```

#### 1.1.10.1 批量流程实例删除

* 说明

支持批量删除

1. ids 根据流程实例id去删除
2. bizids 根据业务数据id去删除

`改为调用flycode，再调用WORKFLOW.delete() 单个处理`  
`需求上，只能用于草稿状态的流程。即存在于发起步骤，未做提交过的数据`  
`不建议直接调用微服务接口`

* url

POST

~/workflow/flow/batchDelete

* RequestBody

```json
{//流程实例id
    "ids": "123,345"
}
```

或

```json
{//业务数据id
    "bizids": "123,456"
}
```

* ResponseBody

```json
{//200 正常
    "resp_data": ""
}
```

---

### 1.1.11 更换处理人

* 说明

更换处理人 把代办任务中属于 oldassignee 的任务 转给 assignee

把多个离职人员的待办任务，转给新的处理人  
(注：这个接口，是不记录至流程历史上，是直接替换处理人的方式)

`由实施配置页面，去处理` 是在业务引擎上调用服务注册的方法

* url

POST

~/workflow/flow/changeAssignee

* RequestBody

```json
{
    "assignee": "1234567",//新的处理人成员id
    "oldassignee": "33333333444,232312324"//待更换的处理人的成员id
}
```

* ResponseBody

```json
{//200 正常
    "resp_data": ""
}
```

---

### 1.1.12 终止流程

* 说明

1. 申请人，撤回后，可以终止流程
2. 终止操作，可以同时进行抄送 v3.3五丰需求

* url

flycode接口

POST API: ~/api/teapi/dy-biz/{modelcode}/{logiccode}

* RequestBody

```json
{
    "__approvaldata": {
        "af_taskname": "申请",
        "af_choice": 3,
        "af_choicename": "终止",
        "af_comments": "终止原因",
        "af_jointnode": false,
        "af_nextstepusers": "",
        "af_processinstanceid": "1417730517285081088",
        "af_taskid": "1418512314751524865",
        "af_businessobjname": "kx_leave",
        "af_businessobjpropertyname": "leaveid",
        "af_fallbacknodekey": "",
        "af_currentjoinnode": false,
        "af_turntype": "",
        "af_notifyusers": "[{\"id\":\"1\",\"name\":\"张三\",\"pname\":\"职位\"}]",//v3.3 抄送|分享 选择的人 数组json
    },
    "kx_leave": {
        "leaveid": "1410174472765444249"
    }
}
```

* ResponseBody

```json
{"resp_data":{"__approvaldata":{"af_processinstanceid":"1417730517285081088"}}}
```

#### 1.1.12.1 外部中止流程

* 说明

中止流程，可以由申请人或其他与此流程相关的人员，进行直接流程终止

`如果中止流程，需要处理业务数据，建议接口是用flycode去包装，直接用 WORKFLOW.terminal('<业务Id>', '<流程定义Key>', '<终止原因>'); // 终止流程`

* url

~/workflow/flow/terminateflow

* RequestBody

```json
{
    "af_businesskey": "",//业务主键 必须参数
    "af_processdefinekey": "",//流程定义key 可以为空 
    "af_comments": "",//终止原因 可以为空
    "af_choicename": ""//可以为空，默认为 外部中止
}
```

* ResponseBody

```json
{
    //200 正常
}
```

### 1.1.13 流程撤回

* 说明

1. 申请人，对自己已经发起的流程（未结束、终止状态），可进行撤回
2. 非申请人，对自己提交的任务，可进行主动撤回？ 暂不支持（v3.3五丰需求，是允许可以撤回）

撤回的规则：任务未处理时，可以进行撤回

1. 由于撤回的操作，有可能涉及到业务数据状态的调整修改，需要业务引擎服务进行包装接口 (有待商议)

2. 业务上，用flycode来对接接口，并非直接调用流程引擎服务的接口
3. v3.3 af\_fallbacknodekey 为空时，并不默认为 "af\_initiatetask"，如果不传入时，将根据 af\_taskid查找出撤回的节点

* url

微服务接口 (不建议直接调用微服务接口)

~/workflow/flow/withdrawflow

flycode接口

POST API: ~/api/teapi/dy-biz/{modelcode}/{logiccode}

* RequestBody

```json
{
    "__approvaldata": {
        "af_taskname": "",//任务名称 //可以为空
        "af_choice": "5",//审批选项  //必须参数
        "af_choicename": "撤回",//审批选项名称
        "af_comments": "撤回原因",//撤回的原因
        "af_nextstepusers": "",//为空
        "af_processinstanceid": "1301699354846957568",//流程实例id //必须参数
        "af_taskid": "1301699355702595585",//任务id  //
        "af_businessobjname": "",//业务对象名称 //为空，可以不写
        "af_businessobjpropertyname": "",//业务对象标识属性名称 为空，可以不写
        "af_fallbacknodekey": "",//撤回的节点的key，空值时，默认为 发起步骤  "af_initiatetask" v3.3 把此值，也补上，用于发送消息时好判断是申请撤回还是其他步骤撤回
        "af_turntype": "withdraw",//
        "af_notifyusers": "[{\"id\":\"1\",\"name\":\"张三\",\"pname\":\"职位\"}]",//v3.3 抄送|分享 选择的人 数组json
    },
    "kx_leave": {//业务数据入参 //撤回时，流程引擎不需要此参数，但业务逻辑，需要用此对象参数去更新业务状态
        "leaveid": "1113342551156461898"
    }
}
```

* ResponseBody

```json
{
    //200 正常
}
```

---

### 1.1.14 流程加签

* 说明

1. 需要指定加签的行为逻辑
2. 多人审批时，不允许加签处理
3. 加签处理，可以抄送 v3.3 五丰需求

* url

flycode接口

POST API: ~/api/teapi/dy-biz/{modelcode}/{logiccode}

* RequestBody

```json
{
    "__approvaldata": {
        "af_taskname": "stepb-1",
        "af_choice": 11,
        "af_choicename": "加签",
        "af_comments": "加签意见说明",
        "af_jointnode": false,
        "af_nextstepusers": "1332159698773872640",
        "af_processinstanceid": "1353657254159065088",
        "af_taskid": "1417386115740475394",
        "af_businessobjname": "",
        "af_businessobjpropertyname": "",
        "af_fallbacknodekey": "",
        "af_currentjoinnode": false,
        "af_turntype": "",
        "af_notifyusers": "[{\"id\":\"1\",\"name\":\"张三\",\"pname\":\"职位\"}]",//v3.3 抄送|分享 选择的人 数组json
    },
    "kx_leave": {
        "leaveid": "1345990523776800569"
    }
}
```

* ResponseBody

```json
{"resp_data":{"__approvaldata":{"af_processinstanceid":"1353657254159065088"}}}
```

---

### 撤回或退回后提交 直送

（提交至上一处理人的步骤活动）

* 说明

`注：有待商议是否要开发此接口`

如何规定出上一处理人的步骤活动？根据时间倒序？

`此接口，不直接对外开放。由新的流程配置中，配置流转策略里去处理`

* url

~/workflow/flow/directapproval

* RequestBody

```json
{
    "__approvaldata": {
        "af_taskname": "当前任务名称",//任务名称
        "af_choice": "6",//审批选项  //必须参数
        "af_choicename": "直送",//审批选项名称
        "af_comments": "撤回原因",//撤回的原因
        "af_jointnode": false,//下一步节点是否会审节点
        "af_nextstepusers": "",//直送节点审批人
        "af_processinstanceid": "1301699354846957568",//流程实例id //必须参数
        "af_taskid": "1301699355702595585",//任务id
        "af_businessobjname": "",//业务对象名称
        "af_businessobjpropertyname": "",//业务对象标识属性名称
        "af_fallbacknodekey": "",//直送节点的key，空值时，由引擎找出最后一次的审批节点，进行直送？
        "af_currentjoinnode": false// 当前节点是否为会审节点
    },
    "kx_leave": {//业务数据入参 //撤回时，流程引擎不需要此参数，但业务逻辑，需要用此对象参数去更新业务状态
        "leaveid": "1113342551156461898",
        "usercode": "1026669501686617054",
        "leavetype": "895840294887624704",
        "applydate": "1599113400000",
        "starttime": "1599113400000",
        "endtime": "1599199800000",
        "remark": "",
        "attachments": "[]",
        "datespan": "8",
        "images": "[]",
        "approvalstatus": "草稿"
    }
}
```

* ResponseBody

```json
{
    //200 正常
}
```

---

### 1.1.15 流程转办

* 说明

转办流程

* url

flycode接口

POST API: ~/api/teapi/dy-biz/{modelcode}/{logiccode}

* RequestBody

```json
{
    "__approvaldata": {
        "af_taskname": "xxxx",//当前任务节点名称
        "af_choice": "7",
        "af_choicename": "转办",
        "af_comments": "xxxxxxxxxxxxx",//转办原因
        "af_nextstepusers": "1177476231315197952",//转办人
        "af_processinstanceid": "1329612157758869504",
        "af_taskid": "1329687061615218688",
        "af_fallbacknodekey": "",
        "af_notifyusers": "[{\"id\":\"1\",\"name\":\"张三\",\"pname\":\"职位\"}]",//v3.3 抄送|分享 选择的人 数组json
    },
    "kx_leave": {
        "leaveid": "1308327884846404564"
    }
}
```

* ResponseBody

```json
{
    //200 正常
}
```

### 1.1.16 流程沟通

* 说明

1. 添加沟通人员

* url

flycode接口

POST API: ~/api/teapi/dy-biz/{modelcode}/{logiccode}

* RequestBody

```json
{
    "__approvaldata": {
        "af_taskname": "step1",
        "af_choice": 12,
        "af_choicename": "沟通",
        "af_comments": "",
        "af_jointnode": false,
        "af_nextstepusers": "1164791140730408960,1177475518312878080",//沟通人员
        "af_processinstanceid": "1351778407566286848",
        "af_taskid": "1351794037321375744",
        "af_fallbacknodekey": "",
        "af_turntype": ""
    },
    "kx_leave": {
        "leaveid": "1308327884846404553"
    }
}
```

* ResponseBody

```json
{"resp_data":{"__approvaldata":{"af_processinstanceid":"1351778407566286848"}}}
```

#### 1.1.16.1 流程评论

* 说明

1. 具有沟通的同时，可以发表评论意见
2. 沟通人员，可以发表意见，不能加人

* url

flycode接口

POST API: ~/api/teapi/dy-biz/{modelcode}/{logiccode}

* RequestBody

```json
{
    "__approvaldata": {
        "af_taskname": "step1",
        "af_choice": 13,
        "af_choicename": "沟通",//名称同步跟着12的名称
        "af_comments": "磊大理石刚到公司",
        "af_jointnode": false,
        "af_nextstepusers": "",
        "af_processinstanceid": "1351778407566286848",
        "af_taskid": "1351794037321375744"
    },
    "kx_leave": {
        "leaveid": "1308327884846404553"
    }
}
```

* ResponseBody

```json
{"resp_data":{"__approvaldata":{"af_processinstanceid":"1351778407566286848"}}}
```

### 批量发起或提交

* 说明

用于批量发起同一流程，提交至下一步骤，且下一步骤处理人，为同一个人  
(即创建流程实例，生成申请任务，并推向下一步骤)

`v3.2 版本，可以用flycode 的方法，处理，不要用注册微服务方法去调用`

* url

POST API: ~/workflow/flow/batchHandle

* RequestBody

```json
{
    "af_processdefinename": "",//流程定义名称 //必须
    "af_processdefinekey":"",//流程key //必须
    "af_assignee": "",//申请人,为空时，为当前操作人
    "af_nextstepusers": "",//提交处理人 //必须  //有没有必要传入，还是由流程去计算出默认？提交人？
    "af_choice": "审批选择",//（1,2,3,4）//为空时，代表为发起流程
    "af_choicename": "审批选择的name",//(同意，不同意，中止，退回) //为空时，代表发起流程
    "af_comments": "审批意见",//可以为空
    "af_businessobjname": "业务对象名称",//可以为空 如：kx_leave
    "af_businessobjpropertyname": "业务对象标识属性名称",//可以为空
    "datas": [
        {
            "af_processinstancename": "",//实例名称 //可以为空，但生成的实例名称，为流程定义名称
            "af_businesskey": "",//业务id //必须
            "biz_objinfo": {}//业务对象信息  biz_objinfo是变化的， 如： kx_leave 根据不同的业务实体，而变化。//可以为空
        }
    ]
}
```

* ResponseBody

```json
{
    "err_msg": "",//错误提示
    "sucess": ""//成功的流程实例id返回
}
```

### 1.1.17 流程成员选择列表

* 说明

v3.2功能

是用flycode接口对接。用于加签或转办等功能时，由web|手机端，进行成员选择

* url

POST API: ~/api/teapi/dy-biz/1039104191773151331/6666666666666666

* RequestBody

```json
{
    "af_member_search":{
        "af_keyword":"key",//用于关键字匹配查询：  姓名、手机号码、组织名称、岗位名称、职位名称
        "af_processdefinename":"",//当前流程定义名称
        "af_taskname":""//当前流程步骤名称
    },
    "__paging":{
        "__pageindex":"0",//分页码
        "__pagesize":"20"//分页大小
    }
}
```

* ResponseBody

```json
{
    "resp_data": {
        "__paging": {
            "__itemcount": "25",
            "__pageindex": "0",
            "__pagesize": "20"
        },
        "af_member": [
            {
                "af_postid": "1183565836573609984",//岗位id
                "af_memberid": "1305686373679894528",//成员id
                "af_phonenumber": "13900000003",//手机号码
                "af_orgname": "TPM总公司",//组织名称
                "af_refpostid": "1183565708471177216",//职位id
                "__metaname": "pl_orgstruct",
                "af_membername": "434",//姓名
                "af_orgid": "1162189884690141184",//组织id
                "af_refpostname": "key全部权限",//职位名称
                "af_postname": "key全部权限"//岗位名称
            }
        ]
    }
}
```

### 1.1.18 流程组织成员选择树

* 说明

v3.2功能

是用flycode接口对接。用于加签或转办等功能时，由web|手机端，进行成员选择

展示形式为树。

只能选择成员的，不能选择组织

id parentid 构造树数据

category : 1 组织 3 成员

af\_memberid `成员id`

* url

POST API: ~/api/teapi/dy-biz/1039104191773151331/6666666666668888

* RequestBody

```json
{
    "af_member_search":{
    },
    "__paging":{
        "__pageindex":"0",//分页码
        "__pagesize":"20000"//分页大小
    }
}
```

* ResponseBody

```json
{
    "resp_data": {
        "__paging": {
            "__itemcount": "20000",
            "__pageindex": "0",
            "__pagesize": "20000"
        },
        "af_membertree": [
            {
                "id": "id",
                "parentid": "父id",
                "category": "1",//1 组织 3 成员
                "af_memberid": "1305686373679894528",//成员id
                "af_membername": "434",//姓名
                "af_phonenumber": "13900000003",//手机号码
                "af_orgname": "TPM总公司",//组织名称
                "af_refpostid": "1183565708471177216",//职位id
                "af_orgid": "1162189884690141184",//组织id
                "af_refpostname": "key全部权限",//职位名称
                "af_postid": "1183565836573609984",//岗位id
                "af_postname": "key全部权限",//岗位名称
                "level": "",//数据层级
                "seq": ""//顺序
            }
        ]
    }
}
```

### 1.1.19 流程待处理数量

* 说明

v3.2功能

待办列表的红点数量代表待办流程的总数；

阅示邀请的红点数量代表可以发表评论，但还没有发表评论的流程数量。

* url

POST API: ~/workflow/flow/getmyprocesscount

* RequestBody

```json
{
}
```

* ResponseBody

```json
{
    "resp_data": {
        "reviewcount": 1,//待评论数量
        "todocount": 35//待办数量
    }
}
```

### 1.1.20 流程所有待办数据分页列表

* 说明

所有待办流程数据，分页列表

用于某些管理人员，可以针对所有待办流程数据，进行操作（如：终止、转办处理)

列表的顺序，以流程实例的申请时间（发起时间）倒序，进行排序

v3.3 版本需求

* url

POST API: ~/workflow/flow/getToDoPageList

* RequestBody

```json
{
    "af_pageindex":1,           //页码
    "af_pagesize":10,           //页大小
    "af_querycondition": {
        "keyword": "",//关键字查询 like 流程实例名 or 流程定义名称 or 发起人姓名
        "processinstancename": "",// like 流程实例名
        "processdefinename": "",// like 流程定义名称
        "applyusername": "",//like 发起人
        "applystartdate": "2021-04-01",//申请时间开始时间
        "applyenddate": "2021-06-08",//申请时间结束时间
        "taskstartdate": "2021-04-01",//待办任务开始时间
        "taskenddate": "2021-06-08",// 待办任务开始时间 
        "taskusername": "王娟",//like 任务处理人
        "taskname": "初审",//like 任务名称 
        "key": "p_11111111111",//流程key =
        "categorycode": "100000001",//分类编码  =
        "categoryname": "",//分类名称 =
        "categorytype": "",// 1-业务类，2-办公类 =
        "categorycodes": "",//分类编码 支持多选 多个以逗号分隔
        "processinstanceid": ""//流程实例id
    }
}
```

* ResponeseBody

```json
{
    "resp_data": {
        "af_pagecount": 1,//分页总数
        "af_pagesize": 20,//每页大小
        "af_itemcount": 2,//总记录数
        "af_items": [
            {
                "af_processinstanceid": "1397021345069932544",//流程实例id
                "af_applyusername": "王娟",//申请人姓名
                "af_taskname": "初审",//任务名称 步骤名称
                "categorycode": "100000001",//分类code
                "af_applytime": 1621910818741,//申请时间 发起时间
                "af_taskkey": "sid-50C63D06-F37E-40B6-A2F3-FE7BCE833502",//任务key 
                "af_applyusercode": "1169909387230318592",//申请人id
                "af_processinstancename": "1621910761501验证流程",//流程实例名称（标题）
                "af_processdefineid": "p_1397012142439403520:1:1397019778027229184",//流程版本定义id
                "af_assignee": "1169909332268158976",//处理人id
                "af_taskid": "1397021366469271554",//任务id
                "af_processdefinekey": "p_1397012142439403520",//流程key
                "af_processdefinename": "lht_测试新流程改名1",//流程定义名称
                "af_createtime": 1621910823825,//任务开始时间
                "af_businesskey": "1294187413920420763",//业务id
                "categoryname": "办公类",//分类名称
                "af_taskusername": "王娟"//任务处理人
            }
        ]
    }
}
```

### 1.1.21 批量终止流程实例

* 说明

用于流程管理员，在所有的待办流程数据列表中，选择勾选，进行批量终止流程实例

`注：由于需要发送消息，弃用了此API`

v3.3 版本需求

* url

POST API: ~/workflow/flow/batchTerminate

* RequestBody

```json
{
    "af_choice": "3",
    "af_choicename": "终止",//由外部传入？具体名称
    "af_comments": "",//终止原因 必填？
    "af_datas": [
        {
             "af_processinstanceid": "1397021345069932544",
             "af_taskid": "1397021366469271554"
        },
        {
            "af_processinstanceid": "1397021345069932542",
             "af_taskid": "1397021366469271552"
        }
    ]
}
```

* ResponeseBody

```json
//200
```

### 1.1.22 批量变更处理人

* 说明

1. 用于流程管理员
2. 在所有的待办流程数据列表中，选择勾选，进行批量的任务转办处理
3. 不勾选，直接指定原处理人，及转办人，进行批量的转办处理 (需求上不支持，一定要批量选择任务)

`注：由于需要发送消息，弃用了此API`

v3.3 版本需求

* url

POST API: ~/workflow/flow/changeAssigneeByTask

* RequestBody

```json
{
    "af_choice": "7",
    "af_choicename": "转办",
    "af_comments": "",//转办原因
    "af_nextstepusers": "1111111111",//转办人 //新的处理人
    "af_oldassignee": "222222222",//原处理人 //如果为空时， af_datas必须有值，以具体的任务进行转办
    "af_datas": [//如果任务为空时。即为把某个人的所有任务，转办给新的处理人
        {
            "af_processinstanceid": "1397021345069932544",
             "af_taskid": "1397021366469271554"
        }
    ]
}
```

* Responsebody

```json
//200
```

### 1.1.23 审批管理终止

* 说明

1. flycode 实现
2. 批量操作
3. 需要实现信息的发送

v3.3 版本需求

* url

POST API: ~/api/teapi/dy-biz/1039104191773151331/6666666666668881

* RequestBody

```json
{
    "af_action": {
        "af_choice": "3",
        "af_choicename": "终止",
        "af_comments": "",//终止原因 必填？
    },
    "af_datas": [
        {
            "af_processinstanceid": "1397021345069932542",
            "af_taskid": "1397021366469271552",
            "af_processdefineid": "p_1397012142439403520:1:1397019778027229184",
            "af_taskkey": "sid-50C63D06-F37E-40B6-A2F3-FE7BCE833502",
            "af_assignee": "1169909332268158976",
            "af_businesskey": "1294187413920420763"
        }
    ]
}
```

* ResponseBody

```json
//单个成功 //全部成功
{
    "resp_data": {
        "__dataprocessresult": [
            {
                "message": "终止完成",
                "params": {},
                "type": "info"//warn
            }
        ]
    }
}
```

```json
//有提示错误
{
    "resp_data": {
        "__dataprocessresult": [
            {
                "message": "总共\\(totalcount)条，成功\\(successcount)条，失败\\(errorcount)条",
                "params": {
                    "totalcount": "8",
                    "successcount": "5",
                    "errorcount": "3"
                },
                "type": "info"
            }
        ]
    }
}
```

### 1.1.24 审批管理变更处理人

* 说明

1. flycode 实现
2. 批量操作
3. 需要实现信息的发送

v3.3 版本需求

* url

POST API: ~/api/teapi/dy-biz/1039104191773151331/6666666666668882

* RequestBody

```json
{
    "af_action": {//操作定义
        "af_choice": "7",
        "af_choicename": "转办",
        "af_comments": "",//转办原因
        "af_nextstepusers": "1111111111",//转办人 //新的处理人
    },
    "af_datas": [
        {
            "af_processinstanceid": "1397021345069932544",
            "af_taskid": "1397021366469271554",
            "af_processdefineid": "p_1397012142439403520:1:1397019778027229184",
            "af_taskkey": "sid-50C63D06-F37E-40B6-A2F3-FE7BCE833502",
            "af_assignee": "1169909332268158976",
            "af_businesskey": "1294187413920420763"
        }
    ]
}
```

* ResponseBody

```json
//单个成功 //全部成功
{
    "resp_data": {
        "__dataprocessresult": [
            {
                "message": "变更完成",
                "params": {},
                "type": "info"//warn
            }
        ]
    }
}
```

```json
//有提示错误
{
    "resp_data": {
        "__dataprocessresult": [
            {
                "message": "总共\\(totalcount)条，成功\\(successcount)条，失败\\(errorcount)条",
                "params": {
                    "totalcount": "8",
                    "successcount": "5",
                    "errorcount": "3"
                },
                "type": "info"
            }
        ]
    }
}
```

### 1.1.25 审批附件上传

* 说明

1. 在沟通评论，可以上传附件

* url

flycode接口

POST API: ~/api/teapi/dy-biz/{modelcode}/{logiccode}

* RequestBody

```json
{
    "__approvaldata": {
        "af_taskname": "stepa-1",
        "af_choice": "14",
        "af_choicename": "上传附件",
        "af_processinstanceid": "1417730517285081088",//流程实例id
        "af_taskid": "1417730517310246913",//任务id
        "af_attachment": "[{\"url\":\"/xxx/xxxx/gdsgd.jpg\",\"filename\":\"\",\"type\":\"\"}]"//v3.3 附件 前端附件json结构
    },
    "kx_leave": {
        "leaveid": "1308327884846404556"
    }
}
```

* ResponseBody

```json
//200
```

### 1.1.26 审批催办

* 说明

1. 申请人，在我发起的，未结束的流程，可以进行催办

* url

flycode接口

POST API: ~/api/teapi/dy-biz/{modelcode}/{logiccode}

* RequestBody

```json
{
    "__approvaldata": {
        "af_taskname": "申请",
        "af_choice": "17",
        "af_choicename": "催办",
        "af_comments": "1",//可以为空，默认写1
        "af_processinstanceid": "1417730517285081088",//流程实例id
        "af_taskid": "1417730517310246913"//任务id
    },
    "kx_leave": {
        "leaveid": "1308327884846404556"
    }
}
```

* ResponseBody

```json
//200
```

### 1.1.27 审批分享

* 说明

1. 流程结束后，能看到任务的人，都可以进行分享

* url

flycode接口

POST API: ~/api/teapi/dy-biz/{modelcode}/{logiccode}

* RequestBody

```json
{
    "__approvaldata": {
        "af_taskname": "申请",
        "af_choice": "16",
        "af_choicename": "分享",
        "af_processinstanceid": "1417730517285081088",//流程实例id
        "af_taskid": "1417730517310246913",//任务id
        "af_notifyusers": "[{\"id\":\"1\",\"name\":\"张三\",\"pname\":\"职位\"}]",//v3.3 抄送|分享 选择的人 数组json
    },
    "kx_leave": {
        "leaveid": "1308327884846404556"
    }
}
```

* ResponseBody

```json
//200
```