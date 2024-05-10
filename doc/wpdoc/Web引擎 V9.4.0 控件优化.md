---
title: Web引擎 V9.4.0 控件优化
date: 2021-04-12T19:14:21
---

# 单元格控件图片类型(tablecell-image)优化

* 支持图片hover时显示图片放大
* 支持点击事件

# 照片控件(photo)优化

* 删除按钮改为hover显示

# 富文本控件(richeditor)优化

* 只读模式，内容中的勾选框改为只读样式

# 编辑表格(editortable)优化

### 支持批量列编辑功能(batcheditablecols)

批量编辑列，用于指定哪些列可以支持批量编辑，默认为空。

目前只支持以下种类的列进行批量编辑：

|控件|
|---|
|textinput|
|currency|
|number|
|numberrange|
|date(datepicker)|
|daterange|
|dropdownbox|
|picktree|

效果：

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9.png)

### 支持配置checkable属性

配置是否可勾选，用于控制是否显示勾选框，默认值为`1` ，即默认可勾选

### BUG修复

* 修复使用 UIFlycode: getArrayCtrl('编辑表格').update 方法时，修改表格内存值不起效

# 下拉框控件(dropdownbox)优化

* UE优化：搜索框修改在输入框中输入

效果：

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%B8%8B%E6%8B%89%E6%A1%86%E6%90%9C%E7%B4%A2.png)

* 选项数据源支持配置必选项(required)

是否必须选中，1代表必须选中，0或者空表示正常处理

效果：

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%B8%8B%E6%8B%89%E6%A1%86%E5%BF%85%E9%80%89%E9%A1%B9.png)

* 支持是否开启搜索属性(searchable)

目前只支持对 `text` 值进行搜索。

# 树控件(picktree/datatree)优化

* 搜索框修改在输入框中输入

效果：

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E6%A0%91%E6%90%9C%E7%B4%A2.png)

* 优化导航树模式展开节点方式: 默认展开根节点，搜索后所有查询结果默认展开

效果：

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%BC%E8%88%AA%E6%A0%91%E8%87%AA%E5%8A%A8%E5%B1%95%E5%BC%80.png)

* 导航树（单选）可以通过节点赋值，自动展开到选中的节点处

# 对象选择控件(objpicker)优化

* UE优化：搜索框修改在输入框中输入

* 单选及收起下拉框时清空搜索
* 弹出表格支持双击点击完成选择功能（该功能仅支持单选）

# 电话号码控件(phonenumber)优化

* 校验规则优化, 校验规则增加'none'选项及通过最大长度限制(maxlength)

# 时间范围控件(daterange)优化

* 新增ranges属性配置，提供默认的时间范围，支持新时间表达式

效果：

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E6%97%A5%E6%9C%9F%E8%8C%83%E5%9B%B4%E9%BB%98%E8%AE%A4%E5%80%BC.png)

# 事件优化

* 链接事件——修复使用新增方式打开页面时，刷新后页面参数丢失的BUG的问题

# 卡片流控件-支持全控件嵌套

卡片流控件目前已升级，支持放置任意控件【数组型控件和特殊型控件除外】，与list控件逻辑类似，效果如下：

![](http://apaas.wxchina.com:8881/wp-content/uploads/cardsflow.png)

示例协议如下：

```json
{
  "type": "cardsflow",
  "code": "cardsflow-123456",
  "name": "cardsflow",
  "flex": "1",
  "checkable": "1",
  "height": "",
  "hidden": "",
  "ctrllayout": "",
  "cards": {
    "type": "card",
    "code": "card-123456",
    "width": "33%",
    "content": [
      {
        "type": "text",
        "code": "text-1234156",
        "eventlist": [],
        "name": "",
        "title": "text",
        "hiddenclearbtn": "1",
        "required": "1",
        "value": "",
        "readonly": "",
        "margin": "5"
      },
      {
        "type": "button",
        "code": "button-123456",
        "eventlist": [],
        "name": "",
        "text": "button",
        "title": "button",
        "margin": "5",
        "displaytype": "default",
        "customicon": ""
      },
      {
        "type": "textinput",
        "code": "textinput-123456",
        "eventlist": [],
        "name": "address",
        "title": "textinput",
        "hiddenclearbtn": "1",
        "required": "1",
        "value": "",
        "readonly": "",
        "placeholder": "textinput"
      },
      {
        "type": "memberpicker",
        "code": "memberpicker-123456",
        "eventlist": [],
        "title": "memberpicker",
        "placeholder": "memberpicker",
        "name": "",
        "value": "",
        "hiddenclearbtn": "1",
        "flex": "",
        "readonly": "",
        "width": "",
        "searchable": "1",
        "style": "tree",
        "scene": "picker"
      }
    ]
  },
  "eventlist": []
}
```

# 图片信息控件-添加watermarkcomposite属性

水印合成方式，默认值为 `blended` 。

|值|说明|
|---|---|
|blended|水印直接合成在原始图片上|
|attached|水印存储在照片的值当中，需要在显示的时候临时合成|

watermarkcomposite 选择 attached 模式，并且如果控件的值里有 watermark 属性，那么点击放大图片时将会显示 watermark 水印的内容，如下所示：

![](http://apaas.wxchina.com:8881/wp-content/uploads/watermarkcomposite-ide.png)

![](http://apaas.wxchina.com:8881/wp-content/uploads/watermarkcomposite.png)