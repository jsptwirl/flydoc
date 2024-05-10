---
title: Number
date: 2020-05-20T16:52:47
---

# Number

专门用于数字输入的控件，支持小数，负数等。

![](http://apaas.wxchina.com:8881/wp-content/uploads/numberInputSample.png)

## Protocol

```json
{
    "type": "number",
    "title": "数字输入",
    "placeholder": "",
    "value": "100",
    "minus": "0",
    "textalign": "",
    "decimaldigits": "0",
    "lowerlimit": "10",
    "upperlimit": "1000",
    "thousandsseparators": "0",
    "unit": "个",
    "addable": "1",
    "addcount": "1",
    "debounceinterval": "0"
}
```

* lowerlimit , upperlimit, minus, thousandsseparators, unit

  以上属性请参考[Currency](Currency.md)

* decimaldigits

  小数点位数，正整数，空值代表不限制，0代表不能输入小数，>0 的正整数代表能输入的小数位数。

  默认值为空，即不限制。

  与 currency 控件不同，number 控件不会自动根据小数位数补0。

* addable

  是否支持快捷加减操作。

  备注：web端暂未支持

* addcount

  快捷加减每次添加的数量值，默认值为"1"。

  备注：web端暂未支持

* debounceinterval

  参看 [textinput](TextInput.md)

* textalign

  对齐方式，用于控制内容的对齐方式。

  默认值为空，此时将会自动使用右对齐的模式。

## Value

请参考[Currency](Currency.md)