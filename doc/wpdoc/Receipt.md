---
title: Receipt
date: 2020-05-22T15:57:09
---

# receipt 收款

```json
{
    "type": "receipt",
    "amount": "",
    "receiptname": "",
    "exceptionhandling": "exception_handling_event_code",
    "complationhandling": "complation_handling_event_code",
    "way": ["qrcode", "scan"],
    "channels": ["weixin", "alipay", "unionpay", "qq", "jd"],
    "service": "qufuba",
    "interfaces": {
        "getreceipturl": "",
        "receiptwithcode": "",
        "getstatus": ""
    },
    "orderinfo": {
        "name": "orderinfor",
        "datatype": "0",
        "ctrl": {
            "code": "",
            "scope": ""
        },
        "properties": [
            {
                "name": "storename",
                "value": "",
                "ctrl": {
                    "code": "ctrl_filtertextinput_storename",
                    "component": ""
                }
            }
        ]
    }
}
```

## 属性说明

### amount 金额

支持配置一个控件的code，或者也一个内存值得key，用于获取付款金额

### receiptname 收款方名称

支持配置一个控件的code，或者也一个内存值得key，用于获取收款方名称

### way 收款方式

收款方式目前支持两种，可以选择其中的一种或者两种都支持（目前只需要实现两种都支持）

|value|中文|说明|
|---|---|---|
|qrcode|收款码|收款方提供收款二维码，由支付方扫码付钱|
|scan|扫码|由支付方提供付款码，收款方扫码收钱|

### channels 付款渠道

用于配置可用的付款渠道，主要用于提供可用的收款码，默认先使用第一个方式生成收款码。

|value|中文|
|---|---|
|weixin|微信|
|alipay|支付宝|
|unionpay|银联|
|qq|QQ|
|jd|京东|

### service 服务提供商

用于配置内置服务提供商，目前只支持第三方聚合支付。

当为空的时候，支付接口会根据interfaces字段属性进行调用；不为空时，则使用内置约定的行为。

|value|中文|
|---|---|
|qufuba|趣付吧|

### interfaces 接口

用于指定支付调用的业务行为，如果设置了 service ，则会忽略该属性。

目前需要设置的接口有三个，分别用于**获取收款链接**，**付款码收款**，以及**获取支付状态**，这些接口分别对应一个业务行为，这些业务行为必须满足以下约定进行出入参设置：

#### getreceipturl 获取收款链接

用于指定获取收款链接的业务行为的code。

**入参约定**

入参将由两个对象组成，一个是在 **orderinfo** 属性中定义的参数，用于上传必要的附加业务信息；另一个是约定的 **\_\_receipt\_param** 对象，用于传递获取收款链接的相关参数。

|参数|说明|说明|
|---|---|---|
|receipt\_amount|收款金额|支持最多两位小数|
|receipt\_channel|收款渠道|即 channels 属性指定的值|

**出参约定**

|参数|名字|说明|
|---|---|---|
|receipt\_url|收款链接|用于生产收款二维码|
|receipt\_id|交易id|用于查询交易状态|

**示例**

```json
// 入参
{
    "orderinfor": {
        "id": "",
        "datetime": "",
        ......
    },
    "receipt_param": {
            "receipt_amount": "188.05",
        "receipt_channel": "weixin"
    }
}

// 出参
{
    "receipt_url": "https://......",
    "receipt_id": "123456"
}
```

#### receiptwithcode 付款码收款

用于指定扫描付款码后调用的收款的业务行为的code。

**入参约定**

入参将由两个对象组成，一个是在 **orderinfo** 属性中定义的参数，用于上传必要的附加业务信息；另一个是约定的 **\_\_receipt\_param** 对象，用于传递获取收款链接的相关参数。

|参数|名字|说明|
|---|---|---|
|receipt\_amount|收款金额|支持最多两位小数|
|receipt\_paycode|付款码|扫描获取到的收款码信息|

**出参约定**

|参数|名字|说明|
|---|---|---|
|receipt\_id|交易id|用于查询交易状态|
|receipt\_status|交易状态|参看状态说明|
|receipt\_status\_info|交易状态说明||

**示例**

```json
// 入参
{
    "orderinfor": {
        "id": "",
        "datetime": "",
        ......
    },
    "receipt_param": {
            "receipt_amount": "188.05",
        "receipt_paycode": "......"
    }
}

// 出参
{
    "receipt_id": "123456",
    "receipt_status": "1",
    "receipt_status_info": ""
}
```

#### getstatus 获取付款状态

用于指定获取付款状态的业务行为的code。该行为需要前端进行主动轮询。

**入参约定**

入参将由两个对象组成，一个是在 **orderinfo** 属性中定义的参数，用于上传必要的附加业务信息；另一个是约定的 **\_\_receipt\_param** 对象，用于传递获取收款链接的相关参数。

|参数|名字|说明|
|---|---|---|
|\_\_receipt\_id|交易id|用于查询交易状态|

**出参约定**

|参数|名字|说明|
|---|---|---|
|receipt\_status|交易状态|用于查询交易状态|
|receipt\_status\_info|交易状态说明||

**示例**

```json
// 入参
{
    "orderinfor": {
        "id": "",
        "datetime": "",
        ......
    },
    "receipt_param": {
                "receipt_amount": "188.05",
        "receipt_paycode": "......"
    }
}

// 出参
{
    "receipt_status": "4",
    "receipt_status_info": "支付超时"
}
```

#### 支付状态

|value|说明|
|---|---|
|0|支付成功|
|1|未支付|
|2|支付中|
|3|支付失败|
|4|支付失效|

# 趣付吧

|接口|code|
|---|---|
|getreceipturl||
|receiptwithcode||
|getstatus||

## 付款状态检查说明

* 使用收款码

  由于没办法直接受到对方已经扫码的通知，因此，在这个模式下，一旦收款码生成就要立即开始轮询支付状态，当支付状态不再是待支付时，即可进入支付处理的相关界面。

* 使用扫码收款

  同样需要轮询支付状态，只不过一旦扫码成功，并调用了收款接口后，就可以立即进入支付处理的相关界面。

# UI 示例

触发收款行为后，将会自动跳转到使用收款码，点击 **返回** 按钮将会关闭收款界面。

![](http://apaas.wxchina.com:8881/wp-content/uploads/pay_code.png)

点击 **更换收款方式** 可以选择不同的收款渠道，选中某一个之后，立刻生成对应的二维码并展示

![pay_selways](http://apaas.wxchina.com:8881/wp-content/uploads/pay_selways.png)

点击 **切换为扫码收款** 可以切换为B扫C模式，扫码收款，点击 **切换回收款码** 将会返回收款码界面

![pay_scan](http://apaas.wxchina.com:8881/wp-content/uploads/pay_scan.png)

检测到开始付款时显示付款中的界面。

![pay_ing](http://apaas.wxchina.com:8881/wp-content/uploads/pay_ing.png)

支付出现异常时，显示失败界面，并告知异常信息。

此时用户可以选择 **重试** ，将会再次进入收款码或者扫码界面。

如果配置了 exceptionhandling ，则会显示 **异常处理** 按钮，否则显示为 **取消支付** 。点击 **异常处理** 将会进入配置的对应的异常处理事件，并关闭支付界面；点击 **取消支付** ，将会直接关闭支付界面。

![pay_fail](http://apaas.wxchina.com:8881/wp-content/uploads/pay_fail.png)

当支付成功后将会显示成功的界面，此时点击 **收款成功** 按钮，将会自动关闭支付界面，此时如果配置了 complationhandling 属性，则会自动触发对应的事件。

![pay_success](http://apaas.wxchina.com:8881/wp-content/uploads/pay_success.png)