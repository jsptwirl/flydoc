---
title: pageswitchcontainer容器控件
date: 2020-07-03T16:53:17
---

# pageswitchcontainer 容器控件

pageswitchcontainer 控件可以内嵌一个 pageswitch 的表单，支持 width height flex 布局属性，该控件可以与其他控件结合，放在普通表单里。

被内嵌的 pageswitch 的表单页面，会继承这个控件的父级表单所接受到的参数。

```json
{
    "type": "pageswitchcontainer",
    "code": "pageswitchcontainer-1234567890",
    "eventlist": [
        {
            "trigger": "onvaluechange", // 切换 tab 时触发
            "handler": ""
        }
    ],
    "pagecode": "1273447484957528158", // 需要内嵌的 pageswitch 表单的 code
    "flex": "1" // 当没定义 width height 时 自动占满控件所在的 layout 的剩余空间
}
```

### IDE配置

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_16028348384291.png)

#### 使用要求

* web引擎 为 V9.0 系列版本请确保至少为 V9.0.12 版本
* web引擎 为 V9.1 系列版本请确保至少为 V9.1.1 版本
* IDE 支持版本为 V2.9.1，低于该版本需要手写协议。

#### flycode 支持

```js
// 获取当前 tab 的索引值(第几个表单)
var index = Page.getCtrl('pageswitchcontainer').getProperty('index')
console.log(index)

// 设置索引值(切换选中第2个表单)
Page.getCtrl('pageswitchcontainer').setProperty('index', 1)
```