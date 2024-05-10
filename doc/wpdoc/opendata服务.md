---
title: opendata服务
date: 2020-07-03T18:03:50
---

# 3.9. opendata服务

提供对http、webservice、数据库查询及更新的API调用接口的封装

**库加载**

```js
// 模块加载
load('opendata');
```

## 3.9.1. http接口调用

**接口说明**: 用于调用http请求

```js
方法定义: 

OPENDATA.http(参数);

返回值：
{
    "result": ""
}
```

---

**参数**：

|参数名|必选|类型|说明|
|---|---|---|---|
|url|是|string|url地址|
|method|是|string|请求方式：post、get|
|bodyType|否|string|参数类型：json，xml等|
|headerMap|否|string|header参数|
|bodyMap|否|object|body参数|

如果bodyMap是字符串参数，比如json字符串、xml字符串，要使用bodystr作为默认key来接收参数：

|参数名|必选|类型|说明|
|---|---|---|---|
|bodystr|是|object|参数可以为对象（非字符串），或者字符串（json,xml）|

**参数示例**：

```js
{
    "url":"http://127.0.0.1/test",
    "method":"post",
    "bodyType":"json",
    "headerMap":{
        "Content-Type":"application/json"
    },"bodyMap":{
        "bodystr":"{"test":"1234"}"
    }
}
```

---

**示例**:

```js
load('opendata');

var url = 'http:/' + '' + '/restapi.amap.com/v3/geocode/regeo?output=JSON&key=9264b1fa01fea091c2b2b5bcc8f56b4d&location=116.578168%2C30.632763';
var rst1 = 
{
 "url":url,
 "method":"get",
 "headerMap":{ "Content-Type":"application/json"}
};

var openrst= OPENDATA.http(rst1);
FLY.log(openrst);   // {result={"status":"1","regeocode":{"addressComponent":{"city":"安庆市","province":"安徽省","adcode":"340882","district":"潜山市","towncode":"340882100000","streetNumber":{"number":"187号","location":"116.578217,30.6328931","direction":"北","distance":"15.194","street":"梅苑路"},"country":"中国","township":"梅城镇","businessAreas":[[]],"building":{"name":[],"type":[]},"neighborhood":{"name":[],"type":[]},"citycode":"0556"},"formatted_address":"安徽省安庆市潜山市梅城镇梅苑路187号皖山购物广场"},"info":"OK","infocode":"10000"}}
```

---

## 3.9.2. DB查询接口调用

**接口说明**: 用于数据库查询，支持sqlserver，postgres,mysql等数据库

```js
方法定义: 

OPENDATA.query(参数);

返回值：结果集，json格式
[{
    "查询列1": "",
    "查询列2": "",
     ...
}]
```

---

**参数**：

|参数名|必选|类型|说明|
|---|---|---|---|
|dbType|是|string|数据源类型|
|address|是|string|数据源地址|
|port|是|string|端口|
|databaseName|是|string|数据源|
|userName|是|string|账号|
|password|是|string|密码|
|sql|是|string|查询脚本|
|queryParams|是|list|查询参数|

**参数示例**：

```js
{
    "dbType":"POSTGERS",
    "address":"address",
    "port":"3432",
    "databaseName":"database",
    "userName":"userName",
    "password":"password",
    "sql":"select * from tb_user where xx=? limit 10",
    "queryParams":["xx"]
}
```

---

**示例**:

```js
load('opendata');

var url = "172.16.0.126";
var sql = "select * from cmdb_plataccount where username1 = ?";
var params = ["test111"];

var rst1 = 
{
 "dbType":"postgresql",
 "address":url,
 "port":15432,
 "databaseName":"xw_plat_env",
 "userName":"postgres",
 "password":"csb123456",
 "sql":sql,
 "queryParams":params
};

var openrst= OPENDATA.query(rst1);
FLY.log(openrst); // [{createtime=2020-06-23 16:54:49.0, salt=7, orgcode=8, remark=null, plataccountcode=1275351593121878016, password=fc5ede25dc5d97723386da04bcf49015, contact=test111, username2=null, username1=test111, createop=999999, updatetime=2020-06-23 16:54:49.0, status=2, updateop=999999}]
```

---

## 3.9.3. DB更新接口调用

**接口说明**: 用于数据库批量更新，支持sqlserver，postgres,mysql等数据库

```js
方法定义: 

OPENDATA.update(参数);

返回值：
{
    "result": [] // 影响条数
}
```

---

**参数**：

|参数名|必选|类型|说明|
|---|---|---|---|
|dbType|是|string|数据源类型|
|address|是|string|数据源地址|
|port|是|string|端口|
|databaseName|是|string|数据源|
|userName|是|string|账号|
|password|是|string|密码|
|sql|是|string|更新脚本|
|updateParams|是|二维数组|执行参数|
|paramTypes|是|list|执行参数的类型|

**参数示例**：

```js
{
    "dbType":"POSTGERS",
    "address":"127.0.0.1",
    "port":"3432",
    "databaseName":"database",
    "userName":"111",
    "password":"password",
    "sql":"update table set xx=@xx where id=@id",
    "updateParams":[["xx","id"],["xx","id"]],
    "paramTypes":["varchar","int4"]
}
或
{
    "dbType":"POSTGERS",
    "address":"127.0.0.1",
    "port":"3432",
    "databaseName":"database",
    "userName":"111",
    "password":"password",
    "sql":"update table set xx=? where id=?",
    "updateParams":[["xx","id"],["xx","id"]],
    "paramTypes":["varchar","int4"]
}
```

---

**示例**:

```js
load('opendata');

var url = "172.16.0.126";
var sql = "update cmdb_plataccount set remark=? where username1 = ? and status = ?";
var updateParams = [["12","testuser",1],["12","tester",1]];
var paramTypes = ["varchar","varchar","int4"];

var rst1 = 
{
 "dbType":"postgresql",
 "address":url,
 "port":5432,
 "databaseName":"xw_plat_env",
 "userName":"postgres",
 "password":"123456",
 "sql":sql,
 "updateParams":updateParams,
  "paramTypes":paramTypes
};

var openrst= OPENDATA.update(rst1);

FLY.log(openrst); //  {result=[1, 1]}
```

---

## 3.9.4. webservice接口调用

**接口说明**: 用于调用webservice接口

```js
方法定义: 

OPENDATA.ws(参数);

返回值：
{
    "result": "" //结果集
}
```

---

**参数**：

|参数名|必选|类型|说明|
|---|---|---|---|
|url|是|string|请求地址|
|userName|是|string|账号|
|password|是|string|密码|
|method|是|string|请求方法|
|params|是|list|执行参数|

**参数示例**：

```js
{
    "url":"http://127.0.0.1/soap/test?wsdl",
    "userName":"",
    "password":"",
    "method":"getMade_upArtData",
    "params":["1","2","3"]
}
```

---

**示例**:

```js
load('opendata');

var url = "http:/"+"/127.0.0.1/soap/test?wsdl";

var rst1 = 
{
    "url":url,
    "method":"getMade_upArtData",
    "userName":"",
    "password":"",
    "params":["1","2","3"]
};

var openrst= OPENDATA.ws(rst1);
FLY.log(openrst);
```

---