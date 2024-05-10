---
title: Tagselector 标签控件
date: 2020-05-20T14:34:13
---

# Tagselector

标签选择控件主要用于标签应用的管理，由显示已选界面和编辑弹窗两部分组成。

![](http://apaas.wxchina.com:8881/wp-content/uploads/tagselector_show.png)

如果控件onload事件的数据源有层级结构，则在表现形式上，要按照级联关系显示，目前只支持二个层级，点击不同的节点筛选出相应的子节点数据进行展示，如下图所示。

![](http://apaas.wxchina.com:8881/wp-content/uploads/tagselector_edit.png)

## 协议

* control

```json
{
  "type":"tagselector",
  "code":"ctrlcode_tagselector",
  "title":"标签选择",
  "multiselectable":"1",    
  "textstyle":"",   
  "readonly":"",    
  "fold":"",
  "showpopup":"",
  "eventlist":[
    {
      "handler":"handler_onload",
      "trigger":"onload"
    },
    {
      "handler":"handler_onsave",
      "trigger":"onsave"
    }
  ],
"options":[]
}
```

* handler
  ```json
  {
  "type":"datarequest",
  "desp":"获取标签信息",
  "code":"handler_onload",
  "logiccode":"832886477808603137",
  "mode":"1",
  "getter":[],
  "setter": [
  {
      "name": "tag",
      "datatype": "1",
      "ctrl": {
          "code": "ctrlcode_tagselector",
          "scrop": ""
      },
      "properties": [
          {
              "name": "tag_key",
              "ctrl": {
                  "code": "",
                  "component": "key"
              }
          },
          {
              "name": "tag_name",
              "ctrl": {
                  "code": "",
                  "component": "text"
              }
          },
          {
              "name": "tag_id",
              "ctrl": {
                  "code": "",
                  "component": "id"
              }
          },
          {
              "name": "tag_parentid",
              "ctrl": {
                  "code": "",
                  "component": "parentid"
              }
          }
      ]
  }
  ]
  }
  ```

* multiselectable

  是否允许多选，Bool值，默认为 0

* textstyle

  summary：简要显示，如“学校附近”。默认简要显示

  full：完整显示，如“地理位置 学校附近”

* fold

  用于显示已选标签时，当标签超过一行时是否折叠显示，0表示不折叠，1表示折叠，默认不折叠。

  ![](http://apaas.wxchina.com:8881/wp-content/uploads/tagselector_unfold.png)

  ![](http://apaas.wxchina.com:8881/wp-content/uploads/tagselector_fold.png)

* displaytype

  标签显示模式，有iocn和text两种模式，默认为text模式。

|displaytype|说明|举例|
|---|---|---|
|icon|有icon模式(icon+文字)|如智能标签|
|text|文字模式(只有文字)|如手动标签|

* showpopup

  是否支持点击某一标签时，弹出气泡显示详情，0表示不支持，1表示支持，默认不支持。

  ![](http://apaas.wxchina.com:8881/wp-content/uploads/tagselector_pop.png)

* onsave

  提交保存事件，点击编辑弹窗保存按钮时触发

# options Component

与基础-复合-选项值控件通用属性规则相同，options是控件内置选项，取值类型为数组型。

|属性名称|说明|备注|
|---|---|---|
|text|选项显示值||
|textpath|选项值textpath||
|key|选项值key||
|keypath|选项值keypath||
|id|选项值id||
|idpath|选项值idpath||
|parentid|选项父节点id||
|color|文字、icon、边框颜色||
|bgcolor|背景颜色||
|match\_result|详细信息||

## value

显示已选标签时，支持样式的自定义：

![](http://apaas.wxchina.com:8881/wp-content/uploads/tagselector_example.png)

给控件赋值时，值为数组型json字符串

```json
[
    {
        "text": "地图认证",
        "iconname": "place",
        "color": "#14AB63",
        "bgcolor": "#FFFFFF",
        "match_result":"",
        "compare":"0"
    },
    {
        "text": "工商认证",
        "iconname": "check_circle",
        "color": "#F08B1A",
        "bgcolor": "#FFFFFF",
        "match_result":"",
        "compare":"0"
    }
]
```

字段说明：

|字段|说明|备注|
|---|---|---|
|id|id||
|key|key||
|text|显示的文字||
|compare|上下箭头方向，0表示不显示，1表示向上，-1表示向下||
|iconname|icon的name值，取自自定义的字体库||
|color|icon和文字颜色||
|bgcolor|icon和文字背景颜色||
|match\_result|点击某一标签时，气泡弹出显示的详细信息||

**特殊的(初始版本，适配产品智能标签业务需求样式，不具备通用性)：**

\[{"key":"1027459339763453953","text":"低销量","level":3,"icon":1,"compare":0,"dimension":1,"match\_result":"上月销量 0 < 500"}\]

其中，level代表高中低级别，dimension代表不同维度，icon代表特定的几个图标。

![](http://apaas.wxchina.com:8881/wp-content/uploads/tagselector_auto.png)