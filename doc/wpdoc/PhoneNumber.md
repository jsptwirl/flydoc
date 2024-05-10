---
title: PhoneNumber
date: 2020-05-20T16:45:55
---

# PhoneNumber

用于电话号码，包括手机号码和座机

![](http://apaas.wxchina.com:8881/wp-content/uploads/PhoneNumberSample.png)

## Protocol

```json
{
    "type": "phonenumber",
    "title": "电话号码",
    "countrycode": "none",
    "enablecall": "0",
    "enablesendmessage": "0",
    "maxlength": "",
    "legaltype": "mobile/landline/none"
}
```

* countrycode

  国家编码录入要求，有以下取值

  > 手机端已实现，web端尚未实现

|Value|Meaning|
|---|---|
|none|无需输入，不显示输入区域，默认值|
|optional|可选输入，显示输入区域，如果当前控件时必填的，也不检测该值|
|required|必须输入，显示输入区域，无论控件是否必填，只要输入了号码就要校验该值|

* enablecall

  是否允许拨打电话，Bool值，默认为 `0`

  当控件是只读的时候，点击控件可以拨打电话；当控件是可编辑时，点击电话图标可拨打电话。

  拨打电话前需要提示用户。

* enablesendmessage

  是否允许发送短信

* maxlength

  只在 `legaltype` 为 `none` 的时候起效，用于控制最多输入的字符数，

* legaltype

  对电话号码的校验规则，可以有一个或多个规则，规则之间用 `|` 分割，目前只有两种规则。

  无论控件是否必填，只要输入了号码，就需要进行有效性校验。

  **mobile :**`^1\\d{10}$`

  **landline :**`^((\d{3,4}\-)|)\d{7,8}(|([-\u8f6c]{1}\d{1,5}))$`

|Value|Meaning|
|---|---|
|mobile|手机号码，默认值|
|landline|座机号码|
|none|不限制，这种适用于电话号码规则不能覆盖的场景|

## Component

只有value

## Value

countrycode和号码会合并为一个字符串，作为该控件的值，例如

`+86 18922221111` `02088889999`

## Event Trigger

* onvaluechange