---
title: CtrlComponent 控件数据存取Component摘要
date: 2020-05-20T15:09:11
---

# Ctrl Component

目前只有复合值控件有component的特性，该特性会影响控件的value的格式，也会影响事件中能绑定到的控件component种类。

所有的基础控件都有一个叫 `value` 的component，用来获取控件的完整值

## photo

### Component

暂无

### Value

```Json
[
    {
        "source": "http://xxxxx.png",
        "thumbnail": "http://xxxxx.png",
        "timestamp": "123456789.000",
        "latitude": "123.12345",
        "longitude": "123.12345",
        "address": "广州市天河区体育西路101号32楼",
        "country": "中国",
        "province": "广东省",
        "city": "广州市",
        "district": "天河区",
        "street": "体育西路",
        "number": "101号"
    }
]
```

## attachment

### Component

暂无

### Value

```json
[
    {
        "source": "http://xxx/xxx/123.png",
        "filename": "合同附件照片",
        "type": "image/png"
    }
]
```

## location

### Component

|name|value|meaning|取值|赋值|
|---|---|---|---|---|
|latitude|123.12345|纬度|✅|✅|
|longitude|123.12345|经度|✅|✅|
|address|广州市天河区体育西路101号32楼|地址|✅|🚫|
|deviation|2300|定位偏差，只有设置了定位基准点才有效|✅|🚫|

### Value

```Json
{
    "timestamp": "123456789.000",
    "latitude": "123.12345",
    "longitude": "123.12345",
    "address": "广州市天河区体育西路101号32楼",
    "country": "中国",
    "province": "广东省",
    "city": "广州市",
    "district": "天河区",
    "street": "体育西路",
    "number": "101号"
}
```

## Address

### Component

与控件 `location` 保持一致

|name|value|meaning|取值|赋值|
|---|---|---|---|---|
|coordinate|{"latitude": "123.12345", "longitude": "123.12345"}|坐标|✅||
|address|广州市天河区体育西路101号32楼|地址|✅|✅|
|poiname|VT101维多利广场|poi名称|✅||

目前赋值只接受 `value` 和 `address`

### Value

```Json
{
    "latitude": "123.12345",
    "longitude": "123.12345",
    "address": "广州市天河区体育西路101号32楼",
    "timestamp": "1547028474203",
    "poiname": "VT101维多利广场"
}
```

## dropdownbox

### Component

|name|value|meaning|
|---|---|---|
|text|leve1|显示名称|
|key|1|实际值|

### Value

```Json
{
    "text": "leve1",
    "key": "1"
}
```

## selectbox

### Component

|name|value\_single\_sel|value\_multi\_sel|meaning|
|---|---|---|---|
|text|男|男\|女|显示名称|
|key|1|1\|2|实际值|

### Value

```Json
//单选
{
    "text": "男",
    "key": "1"
}

// 多选
[
    {
        "text": "男",
        "key": "1"
    },
    {
        "text": "女",
        "key": "2"
    }
]
```

## cascade，picktree

### Value Component

|name|value\_single\_sel|value\_multi\_sel|meaning|取值|赋值|
|---|---|---|---|---|---|
|text|天河区|\["天河区","白云区"\]|显示名称|✅||
|textpath|广东省.广州市.天河区|\["广东省.广州市.天河区","广东省.广州市.白云区"\]|显示名称|✅||
|key|111|\["111","112"\]|实际值|✅|✅|
|keypath|1.11.111|\["1.11.111","1.11.112"\]|实际值|||
|id|11101|\["11101","11102"\]|id值|||
|idpath|10001.11001.11101|\["10001.11001.11101","10001.11001.11102"\]|id值|||
|fullvalue|参看下方说明|参看下方说明|参看下方说明|✅|✅|

### Option Component

与Value Component 基本一致，增加了一个 `parentid`

|name|value|meaning|required|
|---|---|---|---|
|text|天河区|显示值|YES|
|textpath|广东省.广州市.天河区|显示值路径|NO|
|key|111|key值|YES|
|id|11101|id值|YES|
|keypath|1.11.111|key 路径值|以下三项至少要有一项|
|idpath|10001.11001.11101|id 路径值||
|parentid|10001|父节点id值||
|isselected|1|是否默认选中，Bool类型|NO，默认为不选中|

### Value

```Json
// 单选
{
    "text": "天河区",
    "textpath": "广东省.广州市.天河区",
    "key": "111",
    "ketpath": "1.11.111",
    "id": "11101",
    "idpath": "10001.11001.11101"
}

// 多选
[
    {
        "text": "天河区",
        "textpath": "广东省.广州市.天河区",
        "key": "111",
        "ketpath": "1.11.111",
        "id": "11101",
        "idpath": "10001.11001.11101"
    },
    {
        "text": "白云区",
        "textpath": "广东省.广州市.白云区",
        "key": "112",
        "ketpath": "1.11.112",
        "id": "11102",
        "idpath": "10001.11001.11102"
    }
]
```

## Currency

### Component

|name|value|meaning|取值|赋值|
|---|---|---|---|---|
|unit|元|开始时间|✅|✅|
|lowerlimit|100|结束时间|✅|✅|
|upperlimit|10000|上限|✅|✅|

### Value

```json
"1000"
```

## DataPciker

### Component

|类型|返回值示例|说明|取值|赋值|
|---|---|---|---|---|
|text|2018-10-22|格式化值，即根据format格式化之后的字符串，也就是控件实际显示的字符串|✅|🚫|
|rangetext|2018-10-01, 2018-10-31|【暂不支持】根据unit的值，生成对应的起止时间的文本|🚫|🚫|
|rangevalue|1503474204557, 1503478656884|【暂不支持】根据unit的值，生成对应的起止时间的时间戳|🚫|🚫|
|year|2018|返回年份|✅|🚫|
|month|10|返回月份|✅|🚫|
|day|1|返回日期|✅|🚫|

### Value

```json
"1503474204557"
```

## DateRange

### Component

|name|value|meaning|取值|赋值|
|---|---|---|---|---|
|start|1503474204557|开始时间戳|✅|✅|
|end|1503474204558|结束时间戳|✅|✅|
|text|2018-10-01,2018-10-31|格式化值|✅|✅|
|starttext|2018-10-01|开始时间格式化值|✅|✅|
|endtext|2018-10-31|结束时间格式化值|✅|✅|
||||||
||||||
||||||

### Value

```json
{
    "start": "1503474204557",
    "end": "1503474204558"
}
```

## Number

### Component

|name|value|meaning|取值|赋值|
|---|---|---|---|---|
|unit|个|单位|✅|✅|
|lowerlimit|100|最小值|✅|✅|
|upperlimit|200|最大值|✅|✅|

### Value

```json
"100"
```

## NumberRange

### Component

|name|value|meaning|取值|赋值|
|---|---|---|---|---|
|unit|个|单位|✅|✅|
|lowerlimit|100|下限|✅|✅|
|upperlimit|200|上限|✅|✅|
|min|120|最小值|✅|✅|
|max|150|最大值|✅|✅|

### Value

```json
{
    "min": "100",
    "max": "200"
}
```