---
title: runevent 表单事件调用
date: 2020-12-25T11:40:07
---

# runevent 表单事件调用

触发当前表单的某个事件, 其功能与flycode Page.runEvent('eventName') 相同  
间接调用某个事件，事件可以重复使用

## 协议

```json
{
    "code": "action_code_1",
    "desc": "触发表单某个事件",
    "actions": [
        {
            "type": "runevent",
            "handler": "handle_event_code" // 这个是handler的code
        }
    ]
}
```