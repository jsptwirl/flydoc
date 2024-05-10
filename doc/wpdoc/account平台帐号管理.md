---
title: account平台帐号管理
date: 2020-07-03T17:59:51
---

# 3.5. 平台帐号管理

平台账号服务的API仅限于特殊账号才可使用

## 3.5.1. 新增账号

**API**

```js
// 加载模块
load('account');
```

```js
// 新增账号，返回 新增的账号ID
ACCOUNT.add('<用户名1>', '<用户名2>', '<用户名3>');
```

---

**例**: 新增一个账号的例子

```js
var accountcode = ACCOUNT.add(
    '210001', 
    '1389999999', 
    'brown@xtion.net');
```

---

## 3.5.2. 启用账号

**API**

```js
ACCOUNT.enable('<账号ID>');
```

## 3.5.3. 停用账号

**API**

```js
ACCOUNT.disable('<账号ID>');
```