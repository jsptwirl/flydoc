---
title: ButtonGroup按钮组
date: 2020-05-20T17:28:52
---

# ButtonGroup 按钮组

用于方便显示一组相关的的按钮，提供统一的样式管理。

![](http://apaas.wxchina.com:8881/wp-content/uploads/buttongroup.png)

```json
{
    "type": "buttongroup",
    "style": "dropdown",
    "buttons": [
        {
            "text": "",
                "icon": "",
            "onclick": "",
            "functioncode": "",
            "visiblecondition": ""
        }
    ]
}
```

## 属性说明

### style

显示样式

|值|说明|
|---|---|
|dropdown|组合，所有按钮收起来，点击后展开，适合按钮很多，或者要突出内容时使用|
|separate|独立，按钮每个都独立显示，基本类似配置多个按钮，适合多个互不关联的操作|
|group|下拉，默认值，按钮会被联合在一组，适合多个相同类型的操作|

> separate样式下，按钮组内的按钮可以换行显示

### buttons

按钮，每个按钮可以触发不同的事件，可以设置其显示的文字，icon

* visiblecondition

  按钮可见条件，支持表达式，如果按钮在数组型控件内，则支持从所在行获取值计算