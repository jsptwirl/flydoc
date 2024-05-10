---
title: Presenter 表达层
date: 2020-05-19T16:54:01
---

## Presenter 表达层

## Presenter

Presenter是集中承载表单的逻辑处理的模块，数据请求，表单跳转等表单的行为逻辑都会在此定义。

由于表单逻辑通常很繁杂，为了更清晰的划分和组织不同的逻辑处理，我们将 Presenter分为四个部分：

```json
{
    "presenter": {
        "initial": [......],
        "preprocessor": {......},
        "interface": [......],
        "handlers": [......]
    }
}
```

* [Initial 初始化](Initial.md)
* [Preprocessor 预处理](/Preprocessor.md)
* [Interface 接口](Interface.md)
* [Handlers 处理](Handlers.md)

每个部分其实都是由一个或多个 [Event 事件](Event.md) 组成。