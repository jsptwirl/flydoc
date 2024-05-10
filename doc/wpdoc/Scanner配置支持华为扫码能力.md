---
title: Scanner配置支持华为扫码能力
date: 2023-06-12T14:17:10
---

# Scanner 扫码控件（智慧100支持华为扫码能力）

* 编辑：谭锦标
* 时间：2023-06-14
* 状态：已完成
* 适用范围：智慧100V6.2

智慧100App扫码控件基于平台扫码控件接入华为统一扫码服务，支持常见的13种码格式。(QR Code、Date Matrix、PDF417、Aztec、EAN-8、EAN-13、UPC-A、UPC-E、Codabar、Code 39、Code 93、Code 128、 ITF-14），能提升复杂场景下的识别能力。

![ScanCtrl](http://apaas.wxchina.com:8881/wp-content/uploads/ScanCtrl.png)

![ScanNormal](http://apaas.wxchina.com:8881/wp-content/uploads/ScanNormal.png)

![ScanErrorTips](http://apaas.wxchina.com:8881/wp-content/uploads/ScanErrorTips.png)

## 协议

---

```json
{
    "type": "scanner",
    "continuous": "1",
    "momentary": "1",
    "showdetail": "1",
    "uniquecheck": "1",
    "scantype": "1",
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

### scantype 扫码组件类型

(<font>仅在智慧100App V6.2.0以后版本中支持</font>)  
选择调用的组件为系统扫码或着华为扫码，默认值为0，表示系统扫码。<font>仅当配置为1时，</font>扫码控件会自动调用华为扫码基础组件的扫码能力进行扫码，其余配置均与系统扫码一致。

### 基础属性：

continuous 连续扫描  
momentary 短暂存储  
showresult 显示扫码结果  
uniquecheck 重复检查

点击[这里](http://apaas.wxchina.com:8881/2020/05/20/scanner/)跳转查看基础属性配置。

### options 选项

点击[这里](http://apaas.wxchina.com:8881/2020/05/20/scanner/)跳转查看options 选项。

## 赋值

不支持默认值设置。

## 取值

点击[这里](http://apaas.wxchina.com:8881/2020/05/20/scanner/)跳转查看取值。