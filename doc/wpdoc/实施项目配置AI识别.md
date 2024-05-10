---
title: 实施项目配置AI识别
date: 2020-05-11T11:26:14
---

## 实施项目配置AI识别

### 1、认识AI识别

一般行业上有货架、冰柜、水堆 用于拍照AI识别即使识别结果。  
app对应的控件为aiphoto

### 2、在玄武AI平台新建一个AI账号

玄武科技销售经理协调处理，并最终提供一个可用的AI帐号。  
  
示例账号：10016  
  
示例密码：123456

### 3、登录接口

请求方式： POST  
  
请求地址：  
[https://ai.xtion.net/api/ai/auth/login](https://ai.xtion.net/api/ai/auth/login)  
  
Content-Type: application/json  
  
输入参数：

|字段|类型|是否必须|说明|
|:---|:---|:---|:---|
|username|String|是|账号|
|password|String|是|密码|

输出参数：

|字段|类型|是否必须|说明|
|:---|:---|:---|:---|
|status|int|是|状态码（0是请求失败，1是请求成功）|
|Data|Object|否|结果数据。tenantId 租户id。tenantName 租户名称username 账号parentTenantId父租户idtoken token信息cloudserv 云信息|

输出参数示例：

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AE%9E%E6%96%BD%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AEAI%E8%AF%86%E5%88%AB-1.png)

4、货架SKU同步识别接口（用于测试AI识别可以调）  
  
请求方式： POST  
  
请求地址：  
[https://ai.xtion.net/api/ai/shelf/syncdetect](https://ai.xtion.net/api/ai/shelf/syncdetect)  
  
Content-Type: application/json  
  
请求头

|字段|类型|是否必须|说明|
|:---|:---|:---|:---|
|token|String|是|登录后获取到|

输入参数：

|字段|类型|是否必须|说明|
|:---|:---|:---|:---|
|imageUrl|String|是|图片地址|
|identityId|String|否|图片身份id|

Postman测试：  
  
(1)、Headers里面填写token, 值为上面账号登录获取到的token  
  
![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AE%9E%E6%96%BD%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AEAI%E8%AF%86%E5%88%AB-2.png)

(2)、Body里面填写入参数据  
  
![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AE%9E%E6%96%BD%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AEAI%E8%AF%86%E5%88%AB3.png)

5、在项目中配置拍照用于AI识别  
  
(1)、在项目对应租户中 数据库的pl\_globalconfig 表中需要改AI提供账号信息  
  
![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AE%9E%E6%96%BD%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AEAI%E8%AF%86%E5%88%AB4.png)

(2)、需求中会出现多个：货架、冰柜等  
  
在AISwitch中的值改数据

#### 1、type为三种

```js
case shelf = "shelf"   //货架
case freezer = "freezer"  //冰柜 
case waterheap = "waterheap"  //水堆
```

#### 2、switchstatus 需要改成1

#### 3、一个类型会有多个控件上的拍照 keywords对应拍照控件的title

#### 4、实例：

```json
[{
    "type": "shelf",
    "switchstatus": "1",
    "keywords": ["货架陈列", "堆箱陈列"]
}, {
    "type": "freezer",
    "switchstatus": "1",
    "keywords": ["冰冻化"]
}]
```