---
title: Page Render Flow 表单渲染过程
date: 2020-05-19T19:34:51
---

## Page Render Flow 表单渲染过程

大体处理步骤如下

1. 获取表单的 json 数据
2. 转换为 Model 树
3. 如果表单为功能表单，则此时针对其特有功能对表单Model树进行调整
4. 创建 ViewModel 树
5. 执行 `initial` 中的事件
6. 如果此时传参中有设置 `__pagestaus` ，则根据其值对ViewModel进行调整（主要是只读）
7. 执行 Page 的 `onload` 事件
8. 深度优先创建 View 树，并同时执行对应控件的 `onload` 事件