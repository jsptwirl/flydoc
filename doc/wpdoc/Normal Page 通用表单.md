---
title: Normal Page 通用表单
date: 2020-05-19T16:46:48
---

## Normal Page 通用表单

对于所有的表单来讲，主要的组成部分如下

> 功能表单的基本组成结构与普通表单一致，只是附加了部分特有的信息。

```json
{
    "pageinfo": {},
    "view": {
        "body": {},
        "menu": []
    },
    "presenter": {
        "initial": [],
        "preprocessor": {
            "default": {},
            "addition": []
        },
        "interface": [],
        "handlers": []
    },
    "businessmodel": []
}
```

## pageinfo

此处定义表单的整体的一些信息，包含表单标题，ID，表单的加载事件等

关于更多详细属性的说明，请参看[pageinfo 属性说明](PageInfo.md)

## view

这部分是关于表单的显示的UI的定义，是由各种控件相互嵌套组合后，共同确定表单的显示的样子。

控件显示的布局是根据标准的 `flexbox` 布局规则来处理的。

更详细的说明请查看 [view 属性说明](View.md)

## presenter

这部分为表单逻辑的配置模块，所有的控件的取值，赋值，按钮行为的处理等等，都是在这里定义

更详细的说明请查看 [presenter 说明](../Actions/Presenter/Presenter.md)

## businessmodel

这部分为该表单所用到的业务模型的描述

更详细的说明请查看 [businessmodel 说明](businessmodel.md)