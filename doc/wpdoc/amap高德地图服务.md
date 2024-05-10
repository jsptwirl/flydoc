---
title: amap高德地图服务
date: 2020-07-03T18:02:46
---

# 3.8. 高德地图服务

提供高德地图开发API接口的封装

**库加载**

```js
// 模块加载
load('amap');
```

## 3.8.1. 地理编码解析

**接口说明**: 用于地址转换经纬度

```js
方法定义: 

MAPUTIL.transferAddress('<地址字符串>', '<是否做逆地址解析>');

返回值：
{
    "latitude": "",
    "longitude": "",
    "address": ""  
}
```

---

**示例**:

```js
load('amap');
var addressname = '广东省广州市天河区天河南街道维多利广场VT101';
var formatAddress = MAPUTIL.transferAddress(addressname, true);
FLY.log(formatAddress.address);         // 地址 如：广东省广州市天河区天河南街道维多利广场VT101
FLY.log(formatAddress.latitude);        // 纬度 如：23.1348494466146
FLY.log(formatAddress.longitude)        // 经度 如：113.320592990451
```

---

## 3.8.2. 逆地理编码解析

**接口说明**: 用于经纬度转换地址

```js
方法定义: 

MAPUTIL.transferLocation('<经度>', '<纬度>');

返回值：
{
    "latitude": "",
    "longitude": "",
    "address": ""  
}
```

---

**示例**:

```js
load('amap');
var formatAddress = MAPUTIL.transferLocation('113.320592990451','23.1348494466146');
FLY.log(formatAddress.address);         // 地址 如：广东省广州市天河区天河南街道维多利广场VT101
FLY.log(formatAddress.latitude);        // 纬度 如：23.1348494466146
FLY.log(formatAddress.longitude)        // 经度 如：113.320592990451
```

---