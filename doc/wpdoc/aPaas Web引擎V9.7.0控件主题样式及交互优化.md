---
title: aPaas Web引擎V9.7.0控件主题样式及交互优化
date: 2022-04-25T09:32:34
---

# 附件控件

## 各种状态

* 悬浮/激活状态：增加文字颜色变化及阴影变化等

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%B8%BB%E9%A2%98%E6%8A%BD%E5%8F%96-%E9%99%84%E4%BB%B6-%E6%82%AC%E6%B5%AE%E7%8A%B6%E6%80%81.png)

* 只读状态：上传按钮致灰且无法点击

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%B8%BB%E9%A2%98%E6%8A%BD%E5%8F%96-%E9%99%84%E4%BB%B6-%E5%8F%AA%E8%AF%BB%E7%8A%B6%E6%80%81.png)

* 查看状态：增加悬停样式

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%B8%BB%E9%A2%98%E6%8A%BD%E5%8F%96-%E9%99%84%E4%BB%B6-%E6%9F%A5%E7%9C%8B%E7%8A%B6%E6%80%81.png)

## 文件列表

* 分页器：增加分页器，当文件超过5个时出现分页器
* 文件名：文件名较长时保留后缀名及文件大小，中间省略保留关键信息
* 悬停：增加悬停样式，优化交互
* 下载：下载识别范围扩展为整列

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%B8%BB%E9%A2%98%E6%8A%BD%E5%8F%96-%E9%99%84%E4%BB%B6-%E6%96%87%E4%BB%B6%E5%88%97%E8%A1%A8.png)

## 提示信息

* 文件数量/数量限制：增加文件数量以及数量限制标识

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%B8%BB%E9%A2%98%E6%8A%BD%E5%8F%96-%E9%99%84%E4%BB%B6-%E6%95%B0%E9%87%8F%E9%99%90%E5%88%B6.png)

* 文件大小限制：增加文件大小限制标识

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%B8%BB%E9%A2%98%E6%8A%BD%E5%8F%96-%E9%99%84%E4%BB%B6-%E5%A4%A7%E5%B0%8F%E9%99%90%E5%88%B6.png)

## 表格内控件

* 未上传文件：按钮内保留图标，去除文字

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%B8%BB%E9%A2%98%E6%8A%BD%E5%8F%96-%E9%99%84%E4%BB%B6-%E8%A1%A8%E6%A0%BC%E6%9C%AA%E4%B8%8A%E4%BC%A0.png)

* 已上传文件：仅显示最新上传文件，文件列表通过下拉气泡框显示

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%B8%BB%E9%A2%98%E6%8A%BD%E5%8F%96-%E9%99%84%E4%BB%B6-%E8%A1%A8%E6%A0%BC%E5%B7%B2%E4%B8%8A%E4%BC%A0.png)

* 校验信息：校验错误信息及图标转移到按钮图标上

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%B8%BB%E9%A2%98%E6%8A%BD%E5%8F%96-%E9%99%84%E4%BB%B6-%E6%A0%A1%E9%AA%8C%E4%BF%A1%E6%81%AF.png)

## 其他

* 文件名全名提示：自定义气泡框样式

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%B8%BB%E9%A2%98%E6%8A%BD%E5%8F%96-%E9%99%84%E4%BB%B6-%E6%B0%94%E6%B3%A1%E6%A1%86.png)

# 拍照控件

## 按钮样式调整

* 边框形式调整
* 图标大小调整

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%B8%BB%E9%A2%98%E6%8A%BD%E5%8F%96-%E6%8B%8D%E7%85%A7-%E6%8C%89%E9%92%AE.png)

## 上传失败交互

* 上传失败后，原控件悬浮显示上传失败图标+文字提示（表格内仅图标）

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%B8%BB%E9%A2%98%E6%8A%BD%E5%8F%96-%E6%8B%8D%E7%85%A7-%E4%B8%8A%E4%BC%A0%E5%A4%B1%E8%B4%A5.png)![](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%B8%BB%E9%A2%98%E6%8A%BD%E5%8F%96-%E6%8B%8D%E7%85%A7-%E8%A1%A8%E6%A0%BC%E5%86%85%E4%B8%8A%E4%BC%A0%E5%A4%B1%E8%B4%A5.png)

* 移动到上方显示重新上传图标+文字提示用户重新上传（表格内仅图标）

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%B8%BB%E9%A2%98%E6%8A%BD%E5%8F%96-%E6%8B%8D%E7%85%A7-%E9%87%8D%E6%96%B0%E4%B8%8A%E4%BC%A0.png)![](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%B8%BB%E9%A2%98%E6%8A%BD%E5%8F%96-%E6%8B%8D%E7%85%A7-%E8%A1%A8%E6%A0%BC%E5%86%85%E9%87%8D%E6%96%B0%E4%B8%8A%E4%BC%A0.png)

## 表格内控件

* 编辑表格内拍照控件图片与上传按钮并未居中对齐，修复后图片与上传按钮居中对齐

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%B8%BB%E9%A2%98%E6%8A%BD%E5%8F%96-%E6%8B%8D%E7%85%A7-%E8%A1%A8%E6%A0%BC%E6%8E%A7%E4%BB%B6.png)

# 大文本框控件

* 大文本框内调整内边距

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%B8%BB%E9%A2%98%E6%8A%BD%E5%8F%96-%E5%A4%A7%E6%96%87%E6%9C%AC%E6%A1%86-%E5%86%85%E8%BE%B9%E8%B7%9D.png)

* 设置字数限制状态下，大文本框增加文字长度提示

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%B8%BB%E9%A2%98%E6%8A%BD%E5%8F%96-%E5%A4%A7%E6%96%87%E6%9C%AC%E6%A1%86-%E5%AD%97%E6%95%B0%E9%99%90%E5%88%B6.png)

* 只读状态下，大文本框中展开/收起文字标识 => 展开/收起图标标识

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%B8%BB%E9%A2%98%E6%8A%BD%E5%8F%96-%E5%A4%A7%E6%96%87%E6%9C%AC%E6%A1%86-%E5%B1%95%E5%BC%80%E6%94%B6%E7%BC%A9.png)

# 选择型控件

## 包含

* 下拉框控件
* 对象选择控件
* 选择树控件
* 数据树控件
* 级联筛选框控件

## 统一调整

* 单选：选中项显示为tag => 选中项显示为文字
* 最小宽度：下拉框具有最小宽度（级联筛选搜索）
* 最大宽度：下拉框具有最大宽度，当选项框宽度大于下拉款最大宽度时，两者保持对齐（级联筛选搜索）
* 边距样式：调整下拉框边框边距样式

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%B8%BB%E9%A2%98%E6%8A%BD%E5%8F%96-%E9%80%89%E6%8B%A9%E5%9E%8B%E6%8E%A7%E4%BB%B6-%E4%B8%8B%E6%8B%89%E6%A1%86.png)

* 空值：选项显示为空 => 选项显示为两条横杠
* 未配置text值：选项显示id值 => 选项显示为两条横杠

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%B8%BB%E9%A2%98%E6%8A%BD%E5%8F%96-%E9%80%89%E6%8B%A9%E5%9E%8B%E6%8E%A7%E4%BB%B6-%E9%80%89%E9%A1%B9%E4%BC%98%E5%8C%96.png)![](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%B8%BB%E9%A2%98%E6%8A%BD%E5%8F%96-%E9%80%89%E6%8B%A9%E5%9E%8B%E6%8E%A7%E4%BB%B6-%E9%80%89%E9%A1%B9%E4%BC%98%E5%8C%96.png)

## 个别调整

* 下拉框控件、对象选择控件：改变勾选时颜色
* 级联筛选框控件：改变勾选时颜色，调整最大高度

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%B8%BB%E9%A2%98%E6%8A%BD%E5%8F%96-%E9%80%89%E6%8B%A9%E5%9E%8B%E6%8E%A7%E4%BB%B6-%E5%8B%BE%E9%80%89.png)

# 各种微调

## 输入框

* 选中时增加阴影
* 控件内边距微调
* numberrange间隔符 ‘-’ => ‘~’

## 按钮

* 增加按钮底部外边距

## 勾选按钮

* 只读、查看模式样式调整

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%B8%BB%E9%A2%98%E6%8A%BD%E5%8F%96-%E5%90%84%E7%A7%8D%E5%BE%AE%E8%B0%83-%E5%8B%BE%E9%80%89.png)

## 开关

* 只读、查看模式样式调整

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%B8%BB%E9%A2%98%E6%8A%BD%E5%8F%96-%E5%90%84%E7%A7%8D%E5%BE%AE%E8%B0%83-%E5%BC%80%E5%85%B3.png)

## 模态框&对话框

* 整体：修改标题高度和内边距，修改按钮位置；修改默认大小，定义其在全屏展示的位置；
* 个别：对话框修改图标位置，设定最大尺寸；

## 个人中心&密码修改页面

* 页面组件风格从element-ui风格换成ant-design风格，整体样式风格与textinput输入框控件及button按钮控件统一