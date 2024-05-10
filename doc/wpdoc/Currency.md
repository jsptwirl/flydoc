---
title: Currency
date: 2020-05-20T16:59:53
---

# Currency 货币输入

![](http://apaas.wxchina.com:8881/wp-content/uploads/CurrencyInputSample1.png)

![](http://apaas.wxchina.com:8881/wp-content/uploads/CurrencyInputSample2.png)

## Protocol

```Json
{
    "type": "currency",
    "code": "ctrl_currency_contractamount",
    "title": "签约金额",
    "placeholder": "请填写合同签约金额",
    "required": "1",
    "textalign": "",
    "upperlimit": "",
    "lowerlimit": "",
    "currencycode": "CNY",
    "unit": "元",
    "thousandsseparators": "0",
    "decimaldigits": "0",
    "minus": "0",
    "minusstyle": "0",
    "debounceinterval": "0"
}
```

* placeholder

  占位文字

  如果为空则显示默认占位文字 `0.00`（web端暂不实现） 。

* upperlimit & lowerlimit

  金额的最大限制值和最小限制值，默认为空，表示没有限制

  如果用户输入的值超出了范围，则需要提示用户

  这两个属性可以作为该控件的 `component` 在 `setter` 中进行赋值 (web端暂未实现)

* currencycode

  货币种类代码，会影响金额前面的货币符号显示，默认值为空，使用 `ISO 4217` 标准

  常用的有

|货币种类|值|符号|
|---|---|---|
|人民币|**CNY**|¥|
|美元|**USD**|$|
|欧元|**EUR**|€|

* unit

  货币单位，值为一个字符串，直接显示在金额后面，例如 `元`， `万元` 等

  默认值为空，表示不显示单位

* thousandsseparators

  千位分隔符是否显示，0表示不显示，1表示显示，默认值为1

* decimaldigits

  小数点位数，正整数，默认值为2，0表示不能输入小数

* textalign

  对齐方式，用于控制内容的对齐方式。

  默认值为空，此时将会自动使用右对齐的模式。

* minus

  是否能输入负数，bool值，默认为1

* minusstyle

  负数显示风格，暂不实现

|取值|显示示例|
|---|---|
|0|\- ¥ 100,000 元|
|1|<font>\- ¥ 100,000 元</font>|
|2|<font>¥ 100,000 元</font>|
|3|(¥ 100,000 元)|
|4|<font>(¥ 100,000 元)</font>|

* debounceinterval

  参看 [textinput](TextInput.md)

## Value Component

* value

  控件值，格式为 `"200000.00"`

* lowerlimit

  最小值，格式为 `"20.00"`

* upperlimit

  最大值，格式为 `"99999999.99"`