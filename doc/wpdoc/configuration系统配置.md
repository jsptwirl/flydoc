---
title: configuration系统配置
date: 2020-07-03T18:00:45
---

# 3.6. 系统配置

获取系统配置的json，**系统配置的KEY**可在IDE中查看

**API**

```js
// 系统配置模块加载
load('sysconfig');
```

```js
CONFIG.get('<系统配置Key>'); 
```

---

**例**: 获取账号注册的配置项

```js
var temp = CONFIG.get('register');
FLY.log(JSON.stringify(temp));
```

---