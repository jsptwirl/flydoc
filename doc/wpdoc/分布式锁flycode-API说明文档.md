---
title: 分布式锁flycode-API说明文档
date: 2023-07-27T10:40:48
---

# 分布式锁flycode-API文档

## API说明

```js
// 锁单对象，若锁对象被其他线程持有，则会阻塞等待
//
// 入参 
//  objname:string 锁对象名，如:'订单id'
//
// 无返回
LOCK.lock(objname);

// 锁对象数组，同步操作，遍历objnames竞争锁，若遇到锁对象被其他线程持有，则会阻塞等待
//
// 入参
//  objnames:string[] 对象数组-字符串数组，如:['订单id1', '订单id2']
//
// 无返回
LOCK.arrayLock(objnames);

// 锁单对象，立即返回
//
// 入参
//  objname:string 锁对象名，如:'订单id'
//
// 若竞争到锁返回true，否则返回false
LOCK.tryLock(objname);

// 锁对象数组，立即返回
//
// 入参
//  objnames:string[] 对象数组-字符串数组，如:['订单id1', '订单id2', '订单id3']
//
// 返回可竞争到锁的对象数组，如:竞争到订单id1和订单id3，则返回['订单id1','订单id3']
LOCK.arrayTryLock(objnames);

// 解锁单对象
//
// 入参
//  objname: 锁对象名-字符串，如:'订单id'
// 
// 无返回
LOCK.unlock(objname);

// 解锁对象数组
// 
// 入参
//  objnames:string[] 对象数组-字符串数组，如:['订单id1', '订单id2', '订单id3']
//
// 无返回
LOCK.arrayUnlock(objnames);
```

### 示例1，订单审批通过的同时，其他人对订单做取消，需要做加锁处理（同步等待）:

```js
// 订单审核

// 入参传入订单id
var orderId = IN.order.orderid;

LOCK.lock(orderId);

// 处理订单审批通过的业务逻辑
...

LOCK.unlock(orderId);
```

```js
// 订单取消

// 入参传入订单id
var orderId = IN.order.orderid;

LOCK.lock(orderId);

// 处理订单取消的业务逻辑
...

LOCK.unlock(orderId);
```

### 示例2，订单审批通过的同时，其他人对订单做取消，需要做加锁处理（立即返回）:

```js
// 订单取消

// 入参传入订单id
var orderId = IN.order.orderid;

var ret = LOCK.tryLock(orderId);

if(ret) {
    // 处理订单取消的业务逻辑
    ...
    LOCK.unlock(orderId);
} else {
    throw ERROR('该订单正在被其他人操作，请稍等后，刷新再试');
}
```

### 示例3，订单审批通过的同时，其他人对订单做取消，需要做加锁处理（批量操作）:

```js
// 订单批量取消

// 入参传入订单id
var orderIds = parseIds(IN.order);

LOCK.arrayLock(orderIds);

// 处理订单取消的业务逻辑
...

LOCK.arrayUnlock(orderId);
```

### 示例4，订单审批通过的同时，其他人对订单做取消，需要做加锁处理（批量操作，立即返回）:

```js
// 订单批量取消

// 入参传入订单id
var orderIds = parseIds(IN.order);

var rets = LOCK.arrayTryLock(orderIds);

if(rets.length != orderIds.length) {
    // 说明没有全部获得锁
    throw new ERROR('正在被其他人操作，请稍等后，刷新再试:' + arrayDiff(orderIds, rets));
} else {
    // 处理订单取消的业务逻辑
    ...
    LOCK.arrayUnlock(rets);
}
```