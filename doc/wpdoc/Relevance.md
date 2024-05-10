---
title: Relevance
date: 2020-05-20T16:32:18
---

# Relevance

web端：穿梭式多选控件，现阶段实现特定场景，一个类似下拉框触发装置，点击弹层出现多选框，勾选点击确认

备注：目前只有web端存在该类型控件

如下图：

input 模式：

![relevance_img2](http://apaas.wxchina.com:8881/wp-content/uploads/relevance_img2.png)

button 模式：

![relevance_img](http://apaas.wxchina.com:8881/wp-content/uploads/relevance_img3.png)

展开  
![relevance_img](http://apaas.wxchina.com:8881/wp-content/uploads/relevance_img.png)

## Protocol

```json
{
    "type": "relevance",
    "code": "ctrlcode_relevance",
    "title": "人员选择",
    "searchable": "0",
    "searchplaceholder": "输入名称或编号查找",
    "multiselectable": "0",
    "placeholder": "请选择",
    "defaultsetting": "1",
    "displaystyle": "input",
    "eventlist": [
        {
            "handler": "handler_loadoptions",
            "trigger": "onload"
        },
        {
            "handler": "",
            "trigger": "onvaluechange"
        }
    ]
}

{
  "condition": "",
  "code": "handler_loadnavtreedata10",
  "actions": [
    {
      "mode": "1",
      "condition": "",
      "code": "893045688856875087",
      "getter": [
        {
          "datatype": "0",
          "ctrl": {
            "code": "",
            "scope": ""
          },
          "name": "pl_orgstruct",
          "properties": [
            {
              "ctrl": {
                "component": "",
                "code": ""
              },
              "name": "parentorgstructid",
              "value": ""
            },
            {
              "ctrl": {
                "component": "",
                "code": ""
              },
              "name": "orgname",
              "value": ""
            }
          ]
        }
      ],
      "_type_spe": "controlbind",
      "logiccode": "110000000000000000",
      "type": "datarequest",
      "setter": [
        {
          "datatype": "1",
          "name": "pl_orgstruct",
          "ctrlcode": "8827922899010887811145345",
          "properties": [{
            "ctrl": {
              "component": "key",
              "code": ""
            },
            "name": "orgstructid"
          }, {
            "ctrl": {
              "component": "text",
              "code": ""
            },
            "name": "orgname"
          }]
        }
      ],
      "queue": "0",
      "desc": "控件值绑定"
    }
  ],
  "key": "",
  "desc": "营销区域",
  "notice": ""
}
```

* searchable

  是否允许搜索，bool类型，默认值为 `1` ，即默认能搜索

  目前只支持对 `text` 值进行搜索。

* searchplaceholder

  如果允许搜索能自定义搜索框的placeholder文本

* multiselectable

  是否允许多选，bool类型，默认值为 `1` ，即默认多选；

* defaultsetting

  是否允许设置默认项，bool类型，默认值为 `1` ，即默认允许；

* isstatis

  是否使用统计值模式，bool类型，默认值为 `0` ，即默认不使用；

  备注：不使用，input模式输入框显示勾选项目的文本字符，使用，显示替换统计数目后的自定义模版文本如：已选择${xxx}人 => 已选择5人

* statisformat

  自定义模版文本：已选择${xxx}人，结合isstatis使用

* displaystyle

  显示模式，目前支持两种取值

|取值|含义|
|---|---|
|input|input表单模式，表单上展示选中值|
|button|按钮显示|

## Component

|name|value\_single\_sel|value\_multi\_sel|meaning|
|---|---|---|---|
|text|天河区|\[''天河区', '深圳市'\]|显示名称|
|key|111|\['111', '12'\]|实际值|

备注：多选模式，传參结构为数组结构

## Value

如果getter中绑定的component是 `value` ，就意味着需要使用完整值，使用json结构传输数据，具有一个特殊字段isdefault表示该项是否被设置为默认值

**isdefault:**

'1' : 内容项被设置为默认

'0' : 内容项未被设置为默认

备注：一组提交数据内容中必须存在且只能一项能被设置为默认

```json
// 单选
{
    "text": "天河区",
    "textpath": "广东省.广州市.天河区",
    "key": "111",
    "ketpath": "1.11.111",
    "id": "11101",
    "idpath": "10001.11001.11101",
    "isdefault": "1"
}

// 多选
[
    {
        "text": "天河区",
        "textpath": "广东省.广州市.天河区",
        "key": "111",
        "ketpath": "1.11.111",
        "id": "11101",
        "idpath": "10001.11001.11101"，
        "isdefault": "1"
    },
    {
        "text": "深圳市",
        "textpath": "广东省.深圳市",
        "key": "12",
        "ketpath": "1.12",
        "id": "12101",
        "idpath": "10001.12001"，
        "isdefault": "0"
    }
]
```

## Event Trigger

* onload
* onvaluechange