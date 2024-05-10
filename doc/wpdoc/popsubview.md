---
title: popsubview
date: 2020-05-22T15:57:38
---

# popsubview 弹窗事件

内部弹窗专门用于弹出[View 视图层](../../Page/View.md)层中subviews的某个子view，可以指定弹出区域的大小。

目前统一弹窗都是在当前page的正中弹出。

```json
{
    "type": "popsubview",
    "condition": "",
    "viewcode": "",
    "viewwidth": "60%",
    "viewheight": "200",
    "getter": [],
    "setter": []
}
```

### viewcode 视图code

用于指定要弹出的子视图

### viewwidth 弹窗宽度

宽度的默认值，在手机端为80%，在web端为50%。

### viewheight 弹窗高度

高度的默认值为为空，即根据内容高度决定，不过最大高度不能超过page高度的80%。

通过分别指定 `width` 和 `height` 来设置子view的容器的大小，这两个维度接受以下取值：

* 0

  代表在该维度的尺寸需要根据内容大小自适应。

* 正整数

  取值范围为 `(0, +∞]` ，代表该维度的具体的dp值。

* 百分比

  取值范围为 `[0%, 100%]` ，代表该维度在所占可显示区域的百分比。

  IDE可以提供以下几种默认取值

|显示文本|实际值|
|---|---|
|大|80%|
|中|50%|
|小|30%|