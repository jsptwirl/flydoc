---
title: Infotable(信息表格)接入二开控件
date: 2021-12-10T16:57:56
---

## 开发 Infotable（信息表格）内使用的二开控件

二开控件开发工具（有 Infotable（信息表格）内使用的二开控件具体例子） [https://gitee.com/gorphensu/k100-web-native](https://gitee.com/gorphensu/k100-web-native)

### 使用详情

信息表格内使用的二开控件需要按demo的结构进行开发

demo：src/component/infotable-cell-demo

* 基础文件结构：

  ```
  |infotable-cell-demo
  |
  |---- index.js 控件入口
  |
  |---- ctrl.js 控件状态管理器: 表格在渲染单元格控件前，先会创建该控件的控制器，控制器存放控件的value值等数据
  |
  |---- view.vue 渲染器
  ```
* 协议配置例子：
  ```js
  {
  'type': 'infotable',
  'code': 'infotable-465465346546546545',
  'name': 'infotable表格',
  'title': 'infotable表格',
  ...
  'cols': [
  {
   'type': 'infotable-cell-demo',
   'code': 'tablecell-01',
   'name': 'infotable-cell-demo',
   'title': 'infotable-cell-demo', // 通用属性:标题
   'sort': '1', // 通用属性:列排序
   'hidden': '0', // 通用属性:隐藏列
   'eventlist': [{
     'trigger': 'onclicked', // 注册事件
     'handler': 'handler_clicked_test'
   }],
   'width': '300' // 通用属性:列宽度
  }
  ]
  }
  ```

SDK: XtWeb.Engine.BaseController