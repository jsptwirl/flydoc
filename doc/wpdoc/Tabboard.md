---
title: Tabboard
date: 2020-05-20T16:09:00
---

# Tabboard

Tab面板，用于在表单内部将不同的控件进行分组显示

![](http://apaas.wxchina.com:8881/wp-content/uploads/TabboardSample.png)

## Protocol

```json
{
    "type": "tabboard",
    "cards": [
        {
            "title": "门店详情",
            "hidden": "0",
            "flexdirection": "horizontal",
            "content": []
        },
        {
            "title": "拜访回顾",
            "hidden": "0",
            "flexdirection": "",
            "content": []
        }
    ]
}
```

* cards

  tab面板由多个card组成，每个card都相当于一个带标题的layout

> tabboard也可以通过设置flex，或者height设置其显示高度。
>
> 如果flex=0，此时tabboard的高度会根据当前所显示的card的内容高度决定

## Dynamic Properties

> **web端实现**

* 支持动态设置卡片的hidden属性
* 支持动态设置卡片标题的颜色
* 支持由外部设置当前显示第几张卡片

```js
var tabBoard = Page.getCtrl("tabboardname");
// 隐藏第一个页签
tabBoard.setProperty('hidden', true, 0);
// 设置第二个页签的颜色
tabBoard.setProperty('color', Color.red, 1);
// 设置当前显示第三个页签
tabBoard.setProperty('index', 2);
// 获取当前显示的页签
var index = tabBoard.getProperty('index'); // index == 2
```

### 手机端用法

手机端使用新的，专门针对复合容器类型控件的对象进行相关属性和存取

```js
var tabBoard = Page.getCombinedCtrl("tabboardname");
cardNum = tabBoard.itemCount; // itemCount属性只读

// 设置当前激活（显示）的子项为第三个（含隐藏项）
tabBoard.activeIndex = 2;
// 获取当前激活（显示）的子项
var curIndex = tabBoard.activeIndex;  // curIndex == 2
// 获取第一个子项
var tabBoardCard = tabBoard.getItemAt(0);
// 隐藏第一个子项
tabBoardCard.hidden = true;
// 获取title为"拜访记录"的子项
var tabBoardCard1 = tabBoard.getCart("拜访记录");
// 修改子项的标题
tabBoardCard1.title = "拜访记录（4/5）";
```