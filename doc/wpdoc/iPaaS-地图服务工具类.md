---
title: iPaaS-地图服务工具类
date: 2022-10-31T10:21:11
---

# iPaaS地图服务工具类

iPaaS提供的地图服务工具类，采用多key轮询替换使用方案，大大提高地图服务调用次数，有效保证地图服务的稳定性。使用方法/出参和MAPUTIL保持一致，方便快速切换。

> 注：由iPaaS提供的地图服务工具类，需要服务器具备访问外网的能力，如有纯内网项目，请不要使用。  
> （PS：如果是纯内网项目，那么理论上调高德服务也是白搭）

## 使用前提

资源地址：[http://apaas.wxchina.com:8881/wp-content/uploads/iPaaS配置.zip](http://apaas.wxchina.com:8881/wp-content/uploads/iPaaS配置.zip)

### 1、导入iPaaS微服务配置到IDE

将解压后的 *ipaas-微服务.json* 文件导入到IDE的如下位置：  
IDE ==> 领域

### 2、导入iPaaS的Flycode函数到IDE

将解压后的 *ipaas-flycode.json* 文件导入到IDE的如下位置：  
IDE ==> 工具 ==> Flycode函数

```
 完成上述步骤之后，即可在APaaS中使用iPaaS地图服务功能。
```

---

## 函数说明

## 1.1 地理编码解析(旧版兼容)

**接口说明**: 用于地址转换经纬度

```js
// 模块加载
loadex("iPaaSMapUtils");

/* 参数1: 中文地址（字符串） */
/* 参数2: 是否进行转（布尔值） */
iPaaSMapUtils(FLY).transferAddress('广州市番禺区', true);

成功返回值：
{
    "address":"广州市番禺区",
    "state":"success",
    "longitude":"113.384129",
    "latitude":"22.937244",
    "province":"广东省",
    "city":"广州市",
    "district":"番禺区"
}

失败返回值：
{
    "address":"广州市番禺区",
    "state":"failure",
}
```

## 1.2 地理编码解析(新版推荐)

**接口说明**: 用于地址转换经纬度

```js
// 模块加载
loadex("iPaaSMapUtils");
/* 参数: 中文地址（字符串） */
iPaaSMapUtils(FLY).geocode('广州市番禺区');

成功返回值：
{
    "address":"广州市番禺区",
    "state":"success",
    "longitude":"113.384129",
    "latitude":"22.937244",
    "province":"广东省",
    "city":"广州市",
    "district":"番禺区"
}

失败返回值：
{
    "address":"广州市番禺区",
    "state":"failure",
}
```

## 1.3 地理编码解析(基于高德POI版本)

**接口说明**: 用于地址转换经纬度  
  
注：根据高德官方反馈，地理编码API存在部分数据挂错节点、索引数据缺失，导致结果偏差的问题  
官方推荐使用关键字搜索服务，返回结果会更准确。（特别是针对地址中带POI信息的）  
  
注：高德基于POI进行的搜索，对日数量限制比较大，个人开发者日均100次，企业开发者日均1000次。请谨慎使用，禁止大批量使用。  
  
请优先使用旧的geocode函数进行处理，在数据不准确情况下，可以使用新的基于POI做保底，每个项目日均最高次数限制在100以下！  
  
注：函数执行结果跟geocode保持一致。

```js
// 模块加载
loadex("iPaaSMapUtils");
/* 参数: 中文地址（字符串） */
iPaaSMapUtils(FLY).geocodeByPOI('广州市番禺区');

成功返回值：
{
    "address":"广州市番禺区",
    "state":"success",
    "longitude":"113.384129",
    "latitude":"22.937244",
    "province":"广东省",
    "city":"广州市",
    "district":"番禺区"
}

失败返回值：
{
    "address":"广州市番禺区",
    "state":"failure",
}
```

## 1.4 逆地理编码解析

**接口说明**: 用于经纬度转换地址

```js
// 模块加载
loadex("iPaaSMapUtils");
/* 参数1: 经度（字符串） */
/* 参数2: 纬度（字符串） */
iPaaSMapUtils(FLY).transferLocation('113.00', '39.03');

成功返回值：
{
    "formatted_address":"山西省忻州市代县峪口镇021乡道",
    "address":"山西省忻州市代县峪口镇021乡道",
    "roadinters":[],
    "aois":[],
    "roads":[
        {
            "distance":"256.095",
            "name":"021乡道",
            "location":"112.998,39.0282",
            "id":"0350J49F012041600167",
            "direction":"东北"
        }
    ],
    "pois":[
        {
            "poiweight":"0.114532",
            "businessarea":[],
            "address":"021乡道西50米",
            "distance":"317.975",
            "name":"富浩新型建材公司",
            "location":"112.999305,39.027192",
            "tel":[],
            "id":"B015E0N0IQ",
            "type":"公司企业;公司;公司",
            "direction":"南"
        }
    ],
    "addressComponent":{
        "businessAreas":[[]],
        "country":"中国",
        "province":"山西省",
        "citycode":"0350",
        "city":"忻州市",
        "adcode":"140923",
        "streetNumber":{
            "number":[],
            "distance":[],
            "street":[],
            "direction":[]
        },
        "towncode":"140923107000",
        "district":"代县",
        "neighborhood":{
            "name":[],
            "type":[]
        },
        "township":"峪口镇",
        "building":{
            "name":[],
            "type":[]
        }
    }
}

失败返回值：
{
    "address":"",
    "longitude":"113.00",
    "latitude":"39.03",
}
```

## 1.5 IP定位

**接口说明**: 通过IP地址转换成对应的地址信息

```js
// 模块加载
loadex("iPaaSMapUtils");
/* 参数: IP地址（字符串） */
iPaaSMapUtils(FLY).locationByIP('120.196.123.122');

成功返回值：
{
    "province":"广东省",
    "city":"广州市",
    "adcode":"440100",
    "state":"success",
    "rectangle":"113.1017375,22.93212254;113.6770499,23.3809537"
}

失败返回值：
{
    "province":"",
    "city":"",
    "adcode":"",
    "state":"failure",
    "rectangle":""
}
```