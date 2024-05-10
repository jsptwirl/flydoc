---
title: Scanner
date: 2020-05-20T16:24:59
---

# Scanner 扫码控件

![](http://apaas.wxchina.com:8881/wp-content/uploads/ScanCtrl.png)

![ScanNormal](http://apaas.wxchina.com:8881/wp-content/uploads/ScanNormal.png)

![ScanErrorTips](http://apaas.wxchina.com:8881/wp-content/uploads/ScanErrorTips.png)

## 协议

```json
{
    "type": "scanner",
    "continuous": "1",
    "momentary": "1",
    "showdetail": "1",
    "uniquecheck": "1",
    "eventlist": [
        {
            "trigger": "onvaluechange",
            "handler": ""
        }
    ],
    "options": [
        {
            "key": "",
            "text": ""
        }
    ]
}
```

### continuous 连续扫描

是否连续扫描，默认值为1，表示连续扫描

当非连续扫描时，一旦扫描成功，立即关闭扫码界面；否则将会一直停留在扫码界面，每次成功扫描后，暂停3s，然后继续扫描。

### momentary 短暂存储

是否只存储最近一次扫码信息，默认值为1，表示只保留最近一次的扫码结果。值为0时，会保留所有的扫码结果

### showresult 显示扫码结果

是否显示扫码结果，默认值为1，需要显示。该属性会影响扫码控件的显示样式

### uniquecheck 重复检查

默认值为1，需要检查重复。此时每次新扫描的结果都会在已有结果中进行重复筛查，遇到重复这回进行提示，并丢弃结果。丢弃时不触发值改变事件。

当 momentary == 0 时，如果 uniquecheck == 1，就需要缓存每次扫码结果用于重复检查，此时缓存结果不能通过取值获取。

### options 选项

类似下拉框的选项，但是不用于显示，目前也不支持直接配置，只能通过事件进行赋值。赋值方式和下拉框类似，条码就是选项中的key。

当options有值时，在每次扫码后都会在选项中进行查询，查到后，会同时显示对应的 text。

如果扫码结果不在选项中，将会提示并丢弃结果。

## 赋值

不支持默认值设置。

## 取值

由于扫码控件类似下拉框，因此也可以通过key和text，进行取值，默认取key，也就是扫描到的条码。