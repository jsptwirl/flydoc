---
title: load库引用
date: 2020-07-03T17:45:57
---

# 3.1.3. 库引用

## 3.1.3.1. 扩展库

## 3.1.3.2. 自定义模块

在配置IDE中，有一种业务逻辑类型为**自定义模块**，一个业务逻辑可定义一个模块，也可只包含一个function。

**API**

```js
// 自定义模块引用
loadex("模块名");
```

---

**例子**: 定义了一个数学库，包含加减法。引用并使用库函数。

```js
// 模块声明方法与js声明方法相同，如定义了一个名为MathEx模块，模块声明代码如下：
var add = function(a, b) {
    return a+b;
};

var sub = function(a, b) {
    return a - b;
};
```

```js
// 如引用上例中的模块MathEx
loadex("MathEx");

// 即可使用该模块
print(MathEx.add(1, 2));
print(MathEx.sub(1, 2));
```