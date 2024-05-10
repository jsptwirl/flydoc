---
title: fly工具库
date: 2020-07-03T17:56:32
---

# 3.1.5. 工具库

## 3.1.5.1. 打印日志

打印日志仅用于IDE调试flycode使用，可在IDE输出调试日志。

**API**

```js
FLY.log('<日志信息>');
```

## 3.1.5.2. 分布式ID生成

业务对象的ID为全局唯一ID，所有新建的业务对象的ID，都应该使用该API生成。

**API**

```js
FLY.genId();
```

目前的平台实现，将会返回全局唯一的长整形的数

---

**例**: 新建一个门店对象，并为其生成唯一ID

```js
var store = BO.new('kx_store');

store.storeid = FLY.genId();
store.storename = '测试门店1';
```

store.storeid的值为 "4327984237498327" 长整形的数

---

## 3.1.5.3. 自增序列

有些业务编码，需要为其创建自增序列，使用该API生成，每个自增序列必须有一个全局唯一KEY。

**API**

```js
FLY.nextval('<自增key>');
```

nextval将会在<自增key>上下文中取到自增序列最后的值

---

**例**: 假设门店编号规则为"MD" 前缀 + 4位自增的数字

```js
// 使用STORE_MD作为自增序列的key
var storeid = 'MD' + ( "0000" + FLY.nextval('STORE_MD') ).substr( -4 );
```

storeid将为:  
MD0001  
MD0002  
MD0003  
...

---

## 3.1.5.4. 地址转经纬度（高德地图）

*注意：此接口已被废弃,如需地图相关服务，请参考拓展库：[高德地图服务](http://apaas.wxchina.com:8881/technology/336/)*

可以把地址，比如“广州市天河区维多利亚广场” 转换成经纬度（高德地图）。

**API**

```js
FLY.geocode('<地址>');
```

---

**例**:

```js
var addressObj = FLY.geocode("广州市天河区维多利亚广场");
FLY.log(addressObj.state); //状态： success：成功， failure：失败
FLY.log(addressObj.des);  //结果描述
FLY.log(addressObj.location); //经纬度，比如"116.484546,39.990064"，逗号左边是经度，右边是纬度
```

---

## 3.1.5.4. js对象去除属性左右两端空格

**API**

```js
FLY.trimObjAttrValue('待去除属性左右空格的js对象');
```

---

**例**:

```js
var obj = {"key": " value "};
FLY.log(obj.key); //此时打印“ value ”
obj = FLY.trimObjAttrValue(obj);
FLY.log(obj.key); //此时打印“value”
```

---

## 3.1.5.5. 字符串处理

* 根据某字符截取字符串：String.substringLastAt(<字符串>,<分隔符>,<从后面第几个开始截>);

**例子**

```js
    var str = '玄武集团/华南大区/广州分公司/销售一部';
    var newstr = String.substringLastAt(str,'/',3);
    FLY.log(newstr); // 华南大区/广州分公司/销售一部
```

* 判断字符串是否为空:String.isBlank(<字符串>); //不会去掉空格

**例子**

```js
    FLY.log(String.isBlank('')); // true
    FLY.log(String.isBlank('   ')); // false
```

## 3.1.5.6. 数值转换

* 保留小数(四舍五入)：Number.toRoundDecimal(<数值>,<保留几位>);
* 保留小数(全部舍掉)：Number.toFloorDecimal(<数值>,<保留几位>);

**例子**

```js
    FLY.log(Number.toRoundDecimal(2.3456,2));//2.35
    FLY.log(Number.toRoundDecimal(2.3446,2));//2.34
    FLY.log(Number.toFloorDecimal(2.3456,2));//2.34
    FLY.log(Number.toFloorDecimal(2.3446,2));//2.34
```

## 3.1.5.7. 字典Key查询

* 根据字典编码获取字典Key：DIC.getDicKeyByCode(<对象名称>,<字典编码>);

**例子**

```js
    var Cost = {};
    Const.ordertype_unhandle = DIC.getDicKeyByCode("ordertype","001"); // 未处理
    Const.ordertype_handled = DIC.getDicKeyByCode("ordertype","002"); // 已处理

    if(IN.kx_order.type == Const.ordertype_unhandle){
            // TODO
    }else if(IN.kx_order.type == Const.ordertype_handled){
            // TODO
    }
```

## 3.1.5.8. 记录操作日志

* 记录用户操作行为日志：LOG.recordLog(<模块名称>,<操作类型>,<操作日志>);

**例子**

```js
  LOG.recordLog("人员管理", "新增", "人员新增: "+IN.pl_userinfo.userinfoname);  
```