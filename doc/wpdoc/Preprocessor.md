---
title: Preprocessor
date: 2020-05-19T19:20:26
---

## Preprocessor

表单预处理，指在表单初始化之后，执行的一系列对表单和控件初始状态进行设置的步骤

这部分由于在实际使用中并未用起来，所以在将来的版本中将会废弃掉，所以不要在此节点配置内容

## Protocol

```json
{
    "presenter": {
        "initial": [],
        "preprocessor": {
            "default": {
                "desc": "",
                "script": "Ctrl.setProperty('somectrl1', hidden, true)"
            },
            "addition": [
                {
                    "title": "流程规则1",
                    "desc": "用于发起请假申请时使用",
                    "script": "if (Page.getValue('__flowstep') == '123456') { Ctrl.setProperty('somectrl2', hidden, true) }"
                },
                {
                    "title": "流程规则2",
                    "desc": "用于审批请假申请时使用",
                    "script": "if (Page.getValue('__flowstep') == '654321') { Ctrl.setProperty('somectrl3', hidden, true) }"
                }
            ]
        },
        "interface": [],
        "handlers": []
    }
}
```

`preprocessor` 作为 `presenter` 的一部分，在协议和实现上都紧跟在 `initial` 之后。

目前预处理分为两大部分

### default

默认预处理，指所在表单默认会执行的预处理操作。

* script

  默认预处理所执行的flycode脚本

### addition

这部分协议暂不支持

附加预处理，通常这部分预处理操作不在表单配置的时候配置，而是在其他场景关联了该表单，并且需要对表单进行场景相关的特殊控制时才设置。

例如配置流程时，需要根据流程的步骤和状态，对UI进行部分控制。

附加预处理可以包含多个处理块，但一次最多只会执行其中的一个。

* title

  该规则的名称

* desc

  该规则的描述

* script

  处理块对应执行的flycode脚本

  1. 附加预处理可以有多个处理操作，会依次执行，直到有处理返回 `true` ，或者执行完所有的附加操作后结束
  2. 附加预处理会在默认预处理执行完毕之后才执行