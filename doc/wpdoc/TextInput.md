---
title: TextInput
date: 2020-05-20T16:23:13
---

# Textinput

用来给用户提供单行文本输入功能的控件，用来填写较短的内容，通常由一个标题和一个输入框组成。  
同时，由于一般填写的内容都会有一定的规则限制，因此当不符合设定规则时会给出相应提示信息。

![textInputSample1](http://apaas.wxchina.com:8881/wp-content/uploads/textInputSample1.png)

## Protocal 协议

```Json
{
    "type": "textinput",
    "code": "",
    "title": "",
    "titlewidth": "",
    "titleflex": "",
    "placeholder": "",
    "readonly": "",
    "maxlength": "",
    "verificationrule": "",
    "securetextentry": "",
    "debounceinterval": ""
}
```

### placeholder

占位文字。默认值为空，此时固定显示 `请输入` 。

当控件为只读或查看模式下，且控件值为空时，不显示占位文字。

### maxlength 最大字符长度

表示最大输入字符数，当输入字符数超出时，截断输入。0表示无限制，正整数表示对应的限制数量。  
默认值为0，表示不限制。

目前只提供固定几个值进行选择：0，10，30，50，100，1000

### inputaid 辅助输入手段

【暂不实现】

辅助输入手段，即在键盘输入之外，提供的额外的输入手段：

|取值|含义|
|---|---|
|voice|语音输入|
|scan|扫码输入|

### verificationrule 校验规则

内置的文本校验规则，可以接受一个正则表达式或者内置的校验类型。

其中正则表达式需要有 `regex:` 前缀，后面跟自定义的表达式，当校验不通过的时候，提示 `格式不正确`

内置校验类型为引擎提供的常见的规则的快捷设置，用户只需要在IDE选择类型即可。各端在具体实现的时候，可以使用正则表达式，也可以使用其他方式来校验。当用户设置了内置校验类型后，错误提示语需要根据该类型进行调整。

**正则表达式的格式如下：**

```json
{
    "verificationrule": "regex:^[0-9]*$"
}
```

**内置校验类型格式如下:**

```json
{
    "verificationrule": "weixin"
}
```

详细说明如下

|标识|含义|规则|错误提示语|
|---|---|---|---|
|zipcode|邮编|6位数字|邮编格式不正确|
|tels|短号|3-6位数字|短号格式不正确|
|fax|传真|数字开头|传真格式不正确|
|mail|邮箱|邮箱格式|邮箱不符合规范|
|weixin|微信|字母开头6~20位字母或数字|微信号格式不正确|
|qq|QQ|5~20位数字，不能以0开头|QQ号码不符合规范|
|id|身份证|15位数字或18位二代身份证类型|身份证号不符合规范|

```json
// 参考正则
{
    "zipcode": "^d{6}$",
    "tels": "^d{3,6}$",
    "fax": "^(d{3,4}-)?d{7,8}$",
    "mail": "^w+([-+.]w+)@w+([-.]w+).w+([-.]w+)*$",
    "weixin": "^[A-Za-z0-9]w{5,19}$",
    "qq": "^[1-9]d{4,19}$",
    "id": "^[1-9]d{5}(18|19|([23]d))d{2}((0[1-9])|(10|11|12))((0-2)|10|20|30|31)d{3}[0-9Xx])|(^[1-9]d{5}d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)d{2}$"
}
```

### securetextentry

安全输入标识，`bool` 值，`1` 表示需要使用安全输入方式，通常用于密码输入。默认值为 `0`

### debounceinterval

防抖动间隔，float类型，单位为 `毫秒` ，用于控制 onvaluechange 时间执行的频率周期。

值为 `0` 的时候表示没有防抖动； 默认值为 `500` 。

目前的策略默认为后置防抖，也就是说只执行周期内的最后一次事件。

> 该属性目前不支持配置，直接使用默认值
>
> 目前支持该设置的控件有：textinput，number，currency

## Event List

### onvaluechange

值改变事件，每输入一个字符，或删除，或粘贴时均会触发。

### onblur

失去焦点事件，在焦点离开控件时触发

## UI Sample

![textInputSample2](http://apaas.wxchina.com:8881/wp-content/uploads/textInputSample2.png)

## UI Annotation 标注

![textInputAnnotation1](http://apaas.wxchina.com:8881/wp-content/uploads/textInputAnnotation1.png)

说明：

1. 错误信息显示溢出区域，是指错误信息与其他UI部分重叠的地方，由于大部分时候错误信息都是不显示的，为了尽量利用屏幕显示有用信息，需要有一定的溢出显示能力。
2. 当出现错误时，如果required=1，则此时需要隐藏控件头部的\*号。