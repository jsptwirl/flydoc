---
title: graphiccode
date: 2020-05-20T17:25:02
---

# graphiccode 图形码

用于将一个字符串转换为条码或二维码的形式显示的控件

## UI 示例

![](http://apaas.wxchina.com:8881/wp-content/uploads/graphiccode.png)

# 协议

```json
{
    "type": "graphiccode",
    "objecttype": "qrcode",
    "value": "www.wxchina.com"
}
```

## 属性说明

### objecttype 显示对象类型

用于设置将控件值转换为何种图形码，支持以下取值

|值|说明|\-|
|---|---|---|
|qr\_code|二维码 QR Code||
|code\_128|条码 Code 128||
|upc\_e\_codes|条码 UPC-E codes||