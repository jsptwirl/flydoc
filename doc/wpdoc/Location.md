---
title: Location
date: 2020-05-20T16:54:16
---

# Location

定位控件，用于获取使用者当前的地理位置，可以重新定位。  
定位控件的是一个复合值控件，可以通过其component进行子值的获取

定位控件如果没有初始值，这回自动获取当前定位，并每隔1分钟刷新一次定位结果；如果有初始值，则不会启动定位，直接显示当前值。

![locationSample1](http://apaas.wxchina.com:8881/wp-content/uploads/locationSample1-1.png)

## Protocol 协议详解

```Json
{
    "type": "location",
    "code": "pagelistcontrol2",
    "title": "当前位置",
    "displaytype": "normal",
    "adjustradius": "",
    "offlinelocatable": "1",
    "linenumber": "2",
    "refreshrate": "height",
    "baseloc": {
        "latitude": "",
        "longitude": "",
        "range": "500",
        "strict": "0"
    },
    "eventlist": [
        {
            "trigger": "onvaluechange",
            "handler": ""
        }
    ]
}
```

### displaytype 显示模式

【暂未实现】，统一使用 `normal` 模式

定位控件的显示类型，适用于不同的UI环境，有3种取值：`normal`\=0 ， `mini`\=1 ， `particular`\=2。

### adjustradius 微调半径

【暂未实现】

微调半径，由于定位受各种因素影响，定位不准的时候，用户可以手动在一定范围内微调。  
值为正整数，表示可微调的距离，以米为单位。  
默认值为空，表示不可微调。配置平台可以不用设置具体数字填写的功能，只提供“不可微调”，“200米”，“500米”，“1000米”，“不限制”这几个选项选择即可。

不限制，表示用户可以自由的调整定位点，通常用于采集门店的地位置等场景，此时取值为0。  
详细的微调方式，请参看下方的说明。

### offlinelocatable 离线定位

【暂未实现】，统一支持离线定位

是否支持离线定位，离线状态下，无法获取地址信息，默认值为 `1`，即支持离线定位

### linenumber 地址显示行数

控制地址最大显示行数，目前只在web使用。

### refreshrate 刷新频率

控制定位数据刷新的频率

|值|时间间隔(秒)|
|---|---|
|ultrahigh|1|
|high|10|
|normal|60 默认值|
|low|180|
|ultralow|600|

> 当定位控件有默认值时，该属性无效

### baseloc 定位基准位置

用于设置定位的基准位置，当定位位置超出指定定位范围时，会有警告信息。

* latitude & longitude

  基准位置的经纬度，默认值为空，表示没有基准定位位置

* range

  有效范围，数字值，单位为米，默认值为 `500`，用于指定在基准位置周边的N米范围内定位都有效

* strict

  严格对比，bool值，默认值为 0。

  当值为1时，表示必须要在指定范围内定位，超出范围的，控件会当做定位失败的错误处理，此时如果控件为必填，将会阻止数据提交。

## Value Format

定位控件的值的类型是`Location`

```json
{
    "latitude": "123.12345",
    "longitude": "123.12345",
    "address": "广州市天河区体育西路101号32楼",
    "exception": "0",
  "deviation": "300"
}
```

* exception

  定位过程中出现的异常种类目前只有以下两种取值

|取值|含义|
|---|---|
|0|没有异常|
|1|地址获取失败|

* deviation 偏差

  当设置了定位基准点时，才会有该字段值，用于记录定位偏差值，单位为米

## Component

|name|value|meaning|取值|赋值|
|---|---|---|---|---|
|latitude|123.12345|纬度|✅|✅|
|longitude|123.12345|经度|✅|✅|
|address|广州市天河区体育西路101号32楼|地址|✅|🚫|
|deviation|2300|定位偏差，只有设置了定位基准点才有效|✅|🚫|

## Feature

定位控件有以下一些特别的功能。

* Map View  
在成功定位的情形下，可以通过点击地址信息，可以跳转到地图，并标注出定位点信息

* Exception Handle  
定位会有很多异常的情况，针对不同的情况，我们应该给出对应的友好的提示或响应，有以下几种情况

  1. 定位权限未开启  
此时可以提供开启权限的指引。

  2. 定位失败  
提示用户失败，并且可以给出常见的定位失败的原因。

  3. 没有网络  
提示用户没有网络，只能获取到经纬度，不能获取到详细的地址信息。
  4. 获取地址编码失败  
     提示用户，并告知用户常见的失败的原因。
* Location Adjust