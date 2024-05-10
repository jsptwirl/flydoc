---
title: MemberPicker 成员选择
date: 2020-05-20T14:37:12
---

用于选择组织内人员的控件，属于基本控件

# UI 示例

# Protocol 协议说明

```json
{
    "type": "memberpicker",
    "style": "tree",
    "searchable": "1",
    "scene": "picker",
    "orglimit": {
        "includechild": "1",
        "orgstructs": [
            {
                "orgstructid": "001",
                "orgname": "财务部",
            }
        ]
    },
//    "attachedmembers": [
//        {
//            "userinfoid": "",
//            "userinfoname": "",
//            "orgstructid": "",
//            "orgname": "",
//            "positionid": "",
//            "positionname": ""
//        }
//    ],
    "displaysetting": {
        "sex": "1",
        "orgname": "1",
        "positionname": "1",
        ""
    },
    "eventlist": [
        {
            "trigger": "onload",
            "handler": "sys_orgstruct_query"
        },
        {
            "trigger": "onloadmember",
            "handler": "sys_member_query"
        },
        {
            "trigger": "onvaluechange",
            "handler": "sys_member_query"
        }
    ]
}
```

## style 显示样式

> 暂不支持，默认以树形结构展示

用于控制人员选项的显示方式，支持两种取值

|value|说明|
|---|---|
|tree|默认值，以组织树的结构展示人员选项|
|list|以列表的结构展示人员选项|

> 注意，树形结构展示人员时，如果触发了搜索，将自动隐藏树形组织；当清空搜索条件后，自动再次切换为树形结构。
>
> 树形结构时，需要先获取组织树，默认展开第一级，之后每次只加载用户选中的节点的人员数据，当某个节点人员过多时，也支持该节点的人员数据分页。前端要负责缓存 已加载的人员数据。

## searchable 可搜索

bool值，用于指定选项是否支持搜索。默认值为1，表示可以搜索。

该属性会决定选项上方的搜索框是否显示。

搜索时将会调用对应查询行为

## scene 使用场景

主要影响UI交互

|取值|中文名称|说明|实现情况|
|---|---|---|---|
|navigation|导航树|用于导航场景，直接显示节点信息，单选|暂不支持|
|picker|单项选择|用于选择单个人员|支持|
|pickermulti|多项选择|用于选择多个人员|支持|

不同场景下的UI交互有所不同，请参看[UI交互说明](https://share.mockplus.cn/go/VB9CHEEKYYJHUWQJ/index.html#g=1&p=_____memberpicker_1)。

pickermulti模式下，组织节点也是可以选中的，此时相当于选中了该组织节点，以及所有子组织节点下的所有人员。此时，为了避免出现人员过多，导致值的长度太大，需要对值进行特殊处理，具体产看下方取值说明。

## orglimit 组织限定

用于限定可选组织的范围，默认选中根节点，如果没有值，表示任何组织架构下的人员均不能选择。

* includechild 包含子部门

  bool 累心，默认值为1，表示要递归包含子部门。

* orgstructs 组织

  选定的组织集合，只需要包含以下的字段信息即可： orgstructid，orgname

## attachedmembers 附加人员

用于添加在 orglimit 限定的范围之外的人员，此处将直接在控件协议中存储选定人员的全部信息。

## eventlist 事件列表

支持以下触发点

* onload

  在控件加载时触发，主要用于加载组织树

* onloadmember

  在以下场景下均会触发：

  1. 在选择某个组织节点
  2. 获取某个组织节点的下一页数据
  3. 搜索时
  4. 获取搜索数据的下一页数据时

* onvaluechange

  * 选择模式（包括单选和多选）

    当用户改变了控件值，并且关闭了人员列表后触发

  * 导航模式

    当用户选中某个人员数据时触发

# Value 取值与赋值

当该控件直接用于取值时

## Value 取值

默认的取值与当前的模式相关

* navigation & picker

  由于只支持单选人员，因此直接返回人员id

  ```json
  "001"
  ```

* pickermulti

  由于可能出现人员很多的情况，为了避免值过大，支持组织和人员混搭返回

  ```json
  "{"orgs": ["001"],"members": ["001"]}"
  ```

# Datasource 数据选项来源

数据源是由一个内置的固定行为去系统人员表去查询数据的，暂不支持实施自定义附加数据。

## 组织树获取

一次性获取整个可见的组织树

### 入参

```json
{
  "orglimit": "orgid1;orgid2",
  "includechild": "1"
}
```

* orglimit

  组织限定，直接上传 orglimit 属性中的 orgstructid 的集合。

* includechild

  是否包含子组织，与 orglimit 参数配合使用。

### 出参

```json
[
  {
    "orgstructid": "101",
    "orgname": "财务部",
    "parentorgstructid": "001",
    "membercount": "12"
  }
]
```

### 配置协议样例

> 暂不支持flycode设置

使用系统内置的 `pl_orgstruct` 对象名来判断获取和设置的对象为组织结构

#### getter

```json
{
    "name": "pl_orgstruct",
    "datatype": "0",
    "ctrl": {
        "code": "memberpickerctrl",
        "scope": ""
    },
    "properties": [
        {
            "name": "orglimit"
        },
        {
            "name": "includechild"
        }
    ]
}
```

#### setter

```json
{
    "name": "pl_orgstruct",
    "datatype": "1",
    "ctrlcode": "memberpickerctrl",
    "properties": [
        {
            "name": "orgstructid"
        },
        {
            "name": "orgname"
        }
    ]
}
```

## 人员列表获取

### 入参

```json
{
    "userinfoname": "张三",
    "orgstructid": "",
    "orglimit": "orgid1;orgid2",
    "includechild": "1"
}
```

* userinfoname

  用于搜索的用户名，模糊匹配，空值表示不搜索名字

* orgstructid

  用于搜索的组织id，精确匹配，空值表示在整个可见组织树中查询

* orglimit & includechild

  参看组织树获取的入参说明

> **分页说明**
>
> 默认要支持分页，分页大小固定为20，如果 orgstructid 不为空，那么分页序号是指该节点下的数据的分页序号

### 出参

```json
[
  {
    "userinfoid": "",
    "userinfoname": "",
    "phonenumber": "",
    "jobnumber": "",
    "sex": "",
    "photo": "",
    "orgstructid": "",
    "orgstructname": "",
    "positionid": "",
    "positionname"
  }
]
```

### 配置协议样例

> 暂不支持flycode设置

使用系统内置的 `pl_userinfo` 对象名来判断获取和设置的对象为组织结构

#### getter

```json
{
    "name": "pl_userinfo",
    "datatype": "0",
    "ctrl": {
        "code": "memberpickerctrl",
        "scope": ""
    },
    "properties": [
        {
            "name": "username"
        },
        {
            "name": "orglimit"
        },
        {
            "name": "includechild"
        }
    ]
}
```

#### setter

```json
{
    "name": "pl_userinfo",
    "datatype": "1",
    "ctrlcode": "memberpickerctrl",
    "properties": [
        {
            "name": "orgstructid"
        },
        {
            "name": "orgname"
        }
    ]
}
```