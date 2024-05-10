---
title: Event
date: 2020-05-19T16:57:15
---

# Event

事件，指在页面内在某种条件下触发的一系列，连续的 action 的载体。例如点击提交按钮需要执行 **数据提交** ，**跳转** 等 [action 操作](Action.md)，这些操作按顺序依次执行，而这些操作封装到一起就叫一个事件。

任何 action 执行失败都会导致整个Event事件中止执行。

每个action 都可以配置对应执行条件，条件不满足的时候将被忽略，继续执行下一 action。event 自身也有对应的 condition 用于控制事件是否应该执行。

## Protocol

```json
{
    "code": "interface_refreshlist",
    "desc": "刷新列表",
    "condition": "",
    "key": "refreshlist",
    "successhint": "",
    "actions": [],
    "decisiontree": [
      {
        "code": "001",
        "type": "START",
        "next": "002"
      },
      {
        "code": "002",
        "type": "action",
        "actioncode": "action_code_1",
        "success": "003",
        "fail": "004"
      },
      {
        "code": "003",
        "type": "condition",
        "condition": "le:pagestatus == '1'",
        "true": "005",
        "false": "006"
      },
      {
        "code": "004",
        "type": "decision",
        "content": "当前的请求可能有误，是否执行另外一个请求或者终止当前事件？",
        "confirmtitle": "确认",
        "canceltitle": "取消",
        "confirm": "007",
        "cancel": "END"
      },
      {
        "code": "005",
        "type": "action",
        "actioncode": "action_code_2",
        "success": "END",
        "fail": "END"
      },
      {
        "code": "006",
        "type": "action",
        "actioncode": "action_code_3",
        "success": "END",
        "fail": "END"
      },
      {
        "code": "007",
        "type": "action",
        "actioncode": "action_code_4",
        "success": "END",
        "fail": "END"
      }
    ]
}
```

### desc

事件描述，仅用于描述事件的用途

### condition

事件执行的条件，当条件为空，或者条件中的表达式的结果是 true 时，事件才能被执行。

### key

事件的唯一标识，由配置人员输入，用于跨页面调用时的标识符（即广播行为 call 使用的 key 属性）

### successhint

事件中所有 action 都成功执行后的提示内容，空值的时候不提示信息

事件的提示是一个在页面下方或上方浮出的一个3秒后自动消失的提示框

### actions

事件所包含的行为，按顺序依次执行，如果中间有调用其他事件的行为，需要执行完所调用的事件后再继续执行剩下的行为

广播事件 call 不用等待对应的事件执行完毕，因此为了避免出现意外的情形，尽量不要用 call 调用当前表单的事件。

### decisiontree

决策树，用于的 actions 节点的行为进行条件决策

## 事件执行顺序

请参看表单渲染顺序。