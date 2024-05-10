---
title: CtrlAttributeCommon 控件通用属性
date: 2020-05-20T15:12:12
---

# Ctrl Attribute Common

## 通用属性

控件通用属性，所有的控件都会有以下属性

> 默认值是指终端的默认值，一般在IDE端的默认值都是nil

### 基础属性

|属性名称|说明|取值类型|默认值|flycode|
|---|---|---|---|---|
|type|控件类型|enum|nil||
|code|控件编码|string|""||
|name|控件名称，用于flycode|string|""||
|title|控件标题|string|""||
|hidden|是否隐藏|bool|false|✅|
|eventlist|事件列表|array|nil||
|eventlist.handler|事件code|string|""||
|eventlist.trigger|触发时机|string|""||
||||||

> 1：bool类型即 “1” 为 true，其他情况都是 false
>
> 2：eventlist 的详细说明请参看 [Ctrl Event Trigger](CtrlEventTrigger.md)

#### title 标题

控件的标题，其显示方式受控件的具体类型和显示模式影响。

一般的在 basic 模式下所有控件都不显示 title，其他模式下，只有标题型控件需要在控件内部显示标题。

当控件放置在表格中后，其标题将会固定显示在表格的表头。

### 布局属性

|属性名称|说明|取值类型|默认值|
|---|---|---|---|
|flex|控件弹性比例|uint|nil|
|flexgrow|弹性拉伸比例|uint|nil|
|flexshrink|弹性收缩比例|uint|nil|
|alignself|自身对齐方案|enum|stretch|
|width|控件宽度|uint|nil|
|height|控件高度|uint|nil|
|minwidth|最小宽度|||
|minheight|最小高度|||
|maxwidth|最大宽度|||
|maxheight|最大高度|||
|margin|四周边距|int|nil|
|marginleft|左外边距|int|nil|
|marginright|右外边距|int|nil|
|margintop|上外边距|int|nil|
|marginbottom|下外边距|int|nil|
|marginvertical|垂直外边距|int|nil|
|marginhorizontal|水平外边距|int|nil|
|||||

## 独立控件属性

### 独立控件通用属性

|属性名称|说明|取值类型|默认值|Flycode|
|---|---|---|---|---|
|value|控件值|根据控件类型决定|根据控件类型决定|✅|

#### value 值

控件默认值，通过该属性对控件的默认值进行设定。

不过有的控件并不支持（或者说不方便）在IDE中直接设置默认值，例如定位控件，拍照控件，附件控件等。

### 展示型控件通用属性

|属性名称|说明|取值类型|默认值|支持Flycode|
|---|---|---|---|---|
|fontsize|字体大小|uint|14||
|fontweight|字体粗细|enum|normal||
|color|渲染颜色，主要影响文字和图标的颜色|color|black||

> 目前支持这些属性的控件包括：text，dynamictext，button，icon

### color 前景色

不同的控件对前景色影响的显示内容不同，其默认值也有所差异，请参看具体控件内部的定义。

没有特别说明的，其默认值均为 black

### fontsize 字体大小

指定字体大小，单位pt，默认值如下

|控件|web|mobile|
|---|---|---|
|text|13|14|
|dynamictext|13|14|
|button|15|16|

### fontweight 字体粗细

|值|说明|
|---|---|
|lighter|细体|
|normal|常规，默认值|
|bold|粗体|

### 输入型控件通用属性

|属性名称|说明|取值类型|默认值|支持Flycode|
|---|---|---|---|---|
|readonly|是否只读|bool|false|✅|
|mode|控件显示样式，参看样式说明||||

#### readonly 只读

Bool 类型的值，控制是否允许用户对控件值进行修改，默认值为false

当值为true时，可能会影响控件的显示，具体的看各个控件的UI设计

#### mode 样式

指定控件的显示模式，通常不用手动配置，由上一级的布局控件传递。  
显示模式会影响显示的很多细节，例如margin，input area border等，详细可以参看 [样式说明](../../Layout/控件样式控制.md) 。

### 标题型控件通用属性

|属性名称|说明|取值类型|默认值|支持Flycode|
|---|---|---|---|---|
|title|||||
|placeholder|当值为空时显示的占位文字|string|请输入||
|required|是否必填，支持|bool|false|✅|
|tips|提示信息|string|nil||

#### placeholder 占位文字

应该说绝大部分标题型控件都有该属性，但部分由于其UI的特殊性，该属性不会生效，例如 photo，switch等控件。

> **属性关联** ：当 readonly == true 时，该属性无效。

#### required 是否必填

如果是必填，该属性会在控件的title的前方绘制 <font>`*`</font> ，没有标题时，也会在合适的位置绘制，可以参看textinput控件的UI示例。

该属性为true时，会在执行datasubmit事件时触发对应控件的合法性校验。校验不通过，该事件将会执行失败。

默认的提示信息是“请输入XXX”，XXX就是title的值。

校验的时机如下：

1. 当控件初始化完成后，第一次进行输入时，输入过程中不进行校验，直到输入完成（也就是输入框失去焦点后），开始第一次校验。
2. 在第一次校验之后，用户对该控件的每次输入均需要实时进行校验。
3. 校验顺序是必填校验->内置规则校验

#### tips 提示信息

对该控件使用的提示，支持一个字符串信息，可以是纯文本，也可以是一段HTML。（目前支持纯文本即可，14pt，0x4c4c4c，left align）

配置了该属性的控件在控件标题的右边出现一个提示按钮，点击后弹出该提示文本。（实际实现中，移动端可以实现为点击整个标题区域弹出）

如果该控件是作为表格的列控件嵌入表格时，该提示按钮会出现在对应的表头，而控件自身不再显示该提示按钮。

![](http://apaas.wxchina.com:8881/wp-content/uploads/ctrlTips.png)

### 标题型控件通用属性

|属性名称|说明|取值类型|默认值|
|---|---|---|---|
|titlewidth|标题的绝对宽度|uint|nil|
|titleflex|标题的相对宽度|float|0.3|

> 原本这两个属性值适用于左右布局的标题型控件。但是由于很多在移动端使用上下布局的控件，在web端依然是使用左右布局，因此所有的的标题型控件都有这些属性。只不过在移动端显示为上下布局的控件，这两个属性不生效。

#### titlewidth 标题宽度

通用属性，默认值为0，设置具体的固定标题宽度。

如果想让标题宽度固定，就需要设置该值，并设置titleflex=0

> 移动端暂时不实现

#### titleflex 标题宽度占比

> 废弃，使用 titlewidth 配置百分比来替代

约定标题宽度所占控件区域的比例。计算出的具体宽度值需要向上取整。  
空值表示由控件自动决定标题显示宽度；0.0~1.0表示标题宽度占比，例如0.5表示标题和输入框的宽度相同，平分可用区域。  
默认值为空，具体的自动调整规则如下

1. 对于web端，始终使用0.3做为占比。
2. 对于移动端，控件会使用0.33做为占比。

> 该属性暂时不实现

### 选项值控件通用属性

|属性名称|说明|取值类型|默认值|
|---|---|---|---|
|hiddenclearbtn|是否能清空数据|bool|0|
|multiselectable|是否允许多选|bool||
|options|控件内置选项|array|nil|
|options.text|选项显示值|string|nil|
|options.key|选项值|string|nil|
|options.isselected|是否默认选中|bool|0|

#### multiselectable 是否允许多选

Bool值，默认为 `0` 单选，该选项可能会影响控件的UI展现。

由于用户习惯和UI限制，有的选项值控件也不支持多选，例如 `dropdownbox`

#### options 静态选项

大部分的选项值控件（包括级联选项值控件）都可以通过直接配置静态选项值来提供选项。不过类似于 `picklist` 这类的控件，其设计的初衷就是为了提供当有大量选项时能方便操作的，这类控件就不支持静态选项。

如果一个控件配置静态选项，又通过外部设置（如datarequest事件）了动态选项，此时会将这两部分选项合并，静态选项出现在最前面。

### 级联选项值控件通用属性

|属性名称|说明|取值类型|默认值|
|---|---|---|---|
|intermediateselectmode|非叶子节点的选择模式|||
|hideroot|是否隐藏根节点|||
|textstyle|选中值文本显示风格|||
|options.id|选项id|string|nil|
|options.parentid|选项父节点id|string|nil|

#### intermediateselectmode 非叶子节点选择模式

用于指定非叶子节点的选择模式，默认为 `disable` ，即不能选择非叶子节点

|Value|Meaning|
|---|---|
|disable|不能选择中间节点|
|shortcut|中间节点不参与取值，但可以作为叶子节点选择的快捷方式影响叶子节点选择|
|individual|中间节点独立取值，此时选择某个中间节点不会影响其子节点的选择状态|
|gather|中间节点的选择会影响子节点选择，同时与子节点一起参与取值|
|related|中间节点的选择会影响子节点选择，取值时只取分支中的最高的节点值|

从实现角度看

|功能点|disable|shortcut|individual|gather|related|
|---|---|---|---|---|---|
|中间节点是否能选择||✅|✅|✅|✅|
|中间节点是否参与取值|||✅|✅|✅|
|父节点选中时子节点是否参与取值||✅|✅|✅||
|单选时是否有效|✅||✅|||

## 容器控件属性

### 容器-布局控件通用属性

|属性名称|说明|取值类型|默认值|
|---|---|---|---|
|flexdirection|布局方向|enum|vertical|
|justifycontent|主轴方向控件布局规则|enum|flexstart|
|alignitems|次轴方向控件布局规则|enum|stretch|
|flexwrap|主轴方向自动换行|bool|false|
|content|包含的控件列表|array|nil|
|padding|四周外边距|int|nil|
|paddingleft|左内边距|int|nil|
|paddingright|右内边距|int|nil|
|paddingtop|上内边距|int|nil|
|paddingbottom|下内边距|int|nil|
|paddingvertical|垂直内边距|int|nil|
|paddinghorizontal|水平内边距|int|nil|
|bgcolor|背景颜色|color|white|

### 容器-数组值控件通用属性

> 待总结完善

|属性名称|说明|取值类型|默认值|
|---|---|---|---|
|pageable|分页大小|uint|0|
|checkable|是否可以勾选行|bool|false|
|isradio|是否支持单选|bool|false|
|primarykey|数据主键|string|nil|

* primarykey

  数据主键用于指定行数据中的某个字段，作为该控件的的主键字段，该字段的值需要保证在该控件中唯一。可用在自动数据缓存，以及数据添加（如片段编辑器添加行）等场景中。