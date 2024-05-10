---
title: Peoplelist
date: 2020-05-20T16:50:01
---

# Peoplelist

![](http://apaas.wxchina.com:8881/wp-content/uploads/PeoplelistSample.png)

## Protocol

```json
{
    "type": "peoplelist",
    "multiselectable": "",
    "displaystyle": "",
    "peopletype": "",
    "eventlist": [
        {
            "trigger": "onload",
            "handler": ""
        },
        {
            "trigger": "onvaluechange",
            "handler": ""
        }
    ]
}
```

* displaystyle

  显示模式

  * name

    选项显示为完整名字

  * avatar

    选项显示为头像，没有头像的使用姓氏

* peopletype

  人员类型，有以下几种取值

|value|meaning|\-|
|---|---|---|
||||


  ​

## Component

### Value Component

|name|single value|multi value|
|---|---|---|
|key|10001|\["10001","10002"\]|
|text|小王|\["小王","小李"\]|
||||

### Option Component

|name|value|meaning|required|
|---|---|---|---|
|key|10001|id|YES|
|text|小王|姓名|YES|
|namepinyin|xiao wang|姓名拼音|NO|
|department|IT管理部|部门|NO|
|position|系统管理员|职位|NO|
|phonenumber|18922222222|电话号码|NO|
|avatar|[http://xxxxx/xxxx.png](http://xxxxx/xxxx.png)|头像|NO|

## Value

```json
// 单选
{
    "id": "10001",
    "name": "小王"
}

// 多选
[
    {
        "id": "10001",
        "name": "小王"
    },
    {
        "id": "10002",
        "name": "小李"
    }
]
```