---
title: attributeevaluate
date: 2020-05-22T15:53:21
---

# attributeevaluate

属性设置，用于使用表达式，动态改变指定的一个或多个控件的某个属性值

```json
{
    "type": "attreval",
    "condition": "",
    "expression": "le:xxxx",
    "ctrlcode": "code1|code2",
    "property": "readonly"
}
```

* expression

  通常为逻辑表达式，也可以是固定值，或者flycode片段，用于计算值

* ctrlcode

  需要被赋值的控件的code，支持同时设置多个控件，使用竖线分割开多个控件的code

* property

  需要被复制的控件的属性名称，接受以下几种属性赋值，默认值为 `value`

  value, hidden, readonly, required,color,bgcolor

> 该事件目前支持对简单控件赋值，选项值控件只能支持传递空值清空的场景

## 属性更改支持范围

|属性|控件范围|备注|备注|
|---|---|---|---|
|value|输入型控件|设置控件值|选项类控件只能赋空值用于清空数据选择|
|hidden|所有控件|隐藏控件||
|readonly|输入型控件|设置只读||
|required|输入型控件|设置必填||
|color|text|设置文字颜色||
|bgcolor|text|设置文字背景色||