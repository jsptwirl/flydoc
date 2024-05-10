---
title: db数据库操作
date: 2020-07-03T17:55:23
---

# 3.1.3. 数据库操作

# 3.1.3.1. 增删改

* DB api提供对业务对象的增删改，并支持批量处理功能，允许操作对象数组。
* 提供单对象的save，自动根据对象是否存在，做插入/更新逻辑。

**API**

```js
// 添加业务对象到业务数据库，如果业务对象类型为数组，则会批量操作
DB.insert(业务对象/数组);

// 更新业务对象到业务数据库，如果业务对象类型为数组，则会批量操作
DB.update(业务对象/数组);

// 根据传入的字段作为条件更新业务对象，如果业务对象类型为数组，则会批量操作，使用“:”分割加入时间格式表达式来格式化时间条件字段
DB.update(业务对象/数组,"业务对象.字段A","业务对象.字段B:yyyy-MM-dd",...);

// 根据业务对象的ID，从业务数据库中移除数据(逻辑删除)，如果业务对象类型为数组，则会批量操作
DB.delete(业务对象/数组);

// 根据ID唯一性规则自动识别业务对象的新增和更新到业务数据库，不做批量处理(由于save的内部机制是需要查询后判断插入还是更新，若做批量可能影响性能，将批量交由外部处理)
DB.save(业务对象);

// 根据传入的业务对象字段识别对业务对象进行插入还是更新操作，使用“:”分割加入时间格式表达式来格式化时间条件字段
DB.save(业务对象,"业务对象.字段A","业务对象.字段B:yyyy-MM-dd",...);

// 根据删除条件对象去进行物理删除，然后插入业务对象/数组（该操作是物理删除，建议只使用在关联表上）
DB.replace(业务对象/数组,删除条件对象);

// 根据传入的业务对象去寻找依赖它的对象，返回值 {"result":布尔值,"refBy":"对象英文名","refName":"对象中文名"}
DB.findObjectRef(业务对象);
```

---

**例1**: 新建名为"测试门店1"的门店，并插入数据

```js
// 实例化一个门店业务对象
var store = BO.new('kx_store');

store.storeid = FLY.genId();
store.storename = '测试门店1';

// 插入门店
DB.insert(store);
```

**例2**: 查出门店对象数组，遍历修改状态，后更新。

```js
// 查出门店对象数组
var storeList = SELECT storeid, storename, status FROM kx_store;

// 遍历修改状态
for(var i = 0; i < storeList.length; i++) {
    storeList[i].status = '1';
}

// 批量更新数组
DB.update(storeList);
```

**例3**: 寻找关联产品的对象。（订单明细依赖产品）

```js
// 创建产品对象
var product = BO.new("kx_kq_product");
product.id = '1';
// 寻找被依赖信息（返回找到的第一个）
var result = DB.findObjectRef(product);//{result=true, refBy=kx_order_detail,refName=订单详情表}
FLY.log(result.result);//true
FLY.log(result.refBy);//kx_order_detail
FLY.log(result.refName);//订单详情表
```

---

# 3.1.3.2. 事务控制

flycode操作默认没有事务事务，需要开发人员手动控制事务；

**API**

```js
TX.begin(); // 开启事务
TX.commit(); // 提交事务
TX.rollback(); // 回滚事务（可以不写，出现异常平台会自动回滚事务）
```

---

**例子**

```js
var temp = select id,name,status 
from kx_store 
where id = 1;
temp[0].name = "华润万家";

TX.begin(); // 开启事务

//新增一条记录
DB.insert(temp[0]);
// 改名
temp[0].name = "沃永润";
DB.update(temp[0]);

TX.commit(); // 提交事务
```

---