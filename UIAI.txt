Introduction UI 协议详解
Over View 简介 Normal Page 通用表单
Page Info 表单信息 View 视图层 Presenter 表达层
Event
Action
Initial Preprocessor Interface Handlers
1.1
1.2 1.2.1 1.2.2 1.2.2.1 1.2.2.2 1.2.2.3 1.2.2.3.1 1.2.2.3.2 1.2.2.3.3 1.2.2.3.4 1.2.2.3.5 1.2.2.3.6 1.2.2.4 1.2.3 1.2.3.1 1.2.3.2 1.2.3.3 1.2.3.3.1 1.2.3.3.2 1.2.3.4 1.2.4 1.2.5 1.2.6 1.3 1.3.1 1.3.2 1.4 1.4.1 1.4.2 1.4.3 1.4.4 1.4.5 1.4.6 1.5 1.5.1 1.5.1.1
Table of Contents
Business Model 业务模型层 Feature Page 功能表单
Page Flow 表单流
Page Switch 表单切换器 Approval Flow Page 审批流表单
Approval List 审批列表
Approval Type List 审批类型列表 Report Page 报表表单
Configuration Page 配置表单 Page Render Flow 表单渲染过程 表单数据缓存
UI 布局系统 FlexBox
样式控制
控件基础
控件分类
控件通用属性 控件通用事件触发点 控件数据存取 Component 摘要 枚举值
图标库
基础控件清单
Viewer 展示型控件
button 按钮
1

dynamictext 动态文字 functionmenu 功能菜单
icon 图标
image 图片 interactiveWebview 交互式网⻚ text 文字
webview 网⻚ Inputer 录入型控件
address attachment calendar cascade checkbutton currency datepicker daterange dropdownbox location number numberrange peoplelist period phonenumber photo
Picker picklist picktree relevance selectbox sortbutton switch textinput textinputarea
容器控件清单
Basic Container 普通容器
cardboard filter filterControls layout
panel
1.5.1.2 1.5.1.3 1.5.1.4 1.5.1.5 1.5.1.6 1.5.1.7 1.5.1.8
1.5.2 1.5.2.1 1.5.2.2 1.5.2.3 1.5.2.4 1.5.2.5 1.5.2.6 1.5.2.7 1.5.2.8 1.5.2.9 1.5.2.10 1.5.2.11 1.5.2.12 1.5.2.13 1.5.2.14 1.5.2.15 1.5.2.16 1.5.2.17 1.5.2.18 1.5.2.19 1.5.2.20 1.5.2.21 1.5.2.22 1.5.2.23 1.5.2.24 1.5.2.25 1.6 1.6.1 1.6.1.1 1.6.1.2 1.6.1.3 1.6.1.4 1.6.1.5
2

tab
tabboard Array 数组型容器
accordion
list
map sectionlist table
timeline dynamicpanel
Report 报表控件 Report Widget Report Actions Data Structure
FlyCode
事件行为详解
Nomal Actions
Data Process 数据处理
datarequest 数据请求 offlinemodelrequest 离线数据请求 cachedatarequest 缓存数据请求 datasubmit 数据提交 packagesubmit 数据打包提交 customrequest 自定义请求 getter&setter 出入参规则
Paging 分⻚规则
Sorting 排序规则
FailProcess 数据请求失败处理
Page Functions 表单内部功能 alert
ctrlevent call refresh share 分享
Page Navigation 表单导航 link
receivelink
return Flycode
Particular Actions
1.6.1.6 1.6.1.7 1.6.2 1.6.2.1 1.6.2.2 1.6.2.3 1.6.2.4 1.6.2.5 1.6.2.6 1.6.2.7 1.7 1.7.1 1.7.2 1.7.3 1.7.4 1.8 1.8.1 1.8.1.1 1.8.1.1.1 1.8.1.1.2 1.8.1.1.3 1.8.1.1.4 1.8.1.1.5 1.8.1.1.6 1.8.1.1.7 1.8.1.1.8 1.8.1.1.9 1.8.1.1.10 1.8.1.2 1.8.1.2.1 1.8.1.2.2 1.8.1.2.3 1.8.1.2.4 1.8.1.2.5 1.8.1.3 1.8.1.3.1 1.8.1.3.2 1.8.1.3.3 1.8.1.4 1.8.2
3

Pagelistrequest ImportAndExport Approval Flow 审批流程 Report Actions 报表行为
UIFlyCode 概述 UIFlyCode 函数清单
控件
Ctrl 通用控件
属性说明
函数说明 PickerCtrl 选项类控件
函数说明 ArrayCtrl 数组型控件
属性说明
函数说明
数组型控件数据格式
ArrayRowCtrl 行控件 属性说明
函数说明 ArraySectionHeaderCtrl 分组头控件
函数说明 IndexPath 行索引 函数说明
ArrayCtrlModifyOperation
函数说明 Setter 赋值规则
CtrlValueSetter
函数说明
ArrayCtrlSetter
函数说明
PickerCtrlOptionSetter
函数说明 Getter 取值规则
CtrlValueGetter
函数说明
ArrayCtrlGetter
函数说明
表单
Page 表单对象
函数说明
1.8.2.1 1.8.2.2 1.8.2.3 1.8.2.4
1.9 1.10 1.10.1 1.10.1.1 1.10.1.1.1 1.10.1.1.2 1.10.1.2 1.10.1.2.1 1.10.1.3 1.10.1.3.1 1.10.1.3.2 1.10.1.3.3 1.10.1.4 1.10.1.4.1 1.10.1.4.2 1.10.1.5 1.10.1.5.1 1.10.1.6 1.10.1.6.1 1.10.1.7 1.10.1.7.1 1.10.1.8 1.10.1.8.1 1.10.1.8.1.1 1.10.1.8.2 1.10.1.8.2.1 1.10.1.8.3 1.10.1.8.3.1 1.10.1.9 1.10.1.9.1 1.10.1.9.1.1 1.10.1.9.2 1.10.1.9.2.1 1.10.2 1.10.2.1 1.10.2.1.1
4

Alert 提示框 提示框类型
提示框交互按钮 函数说明
Model 数据请求 函数说明 对象形式 回调函数
FlowPage 流程 函数说明
ReportModel 报表 函数说明 回调函数
系统
Semaphore 信号量
函数说明 Location 位置信息 函数说明
OData 离线数据 函数说明
System 系统信息 函数列表
Color 颜色 自带颜色
16 进制颜色码
RGBA 或 RGB ErrorCode 错误码
错误码说明 UIFlyCode 综合列子
自定义控件 与原生⻚面交互 版本变更摘要 App 端导航实现
1.10.2.2 1.10.2.2.1 1.10.2.2.2
1.10.2.2.2.1 1.10.2.3 1.10.2.3.1 1.10.2.3.2 1.10.2.3.3 1.10.2.4 1.10.2.4.1 1.10.2.5 1.10.2.5.1 1.10.2.5.2 1.10.3 1.10.3.1 1.10.3.1.1 1.10.3.2 1.10.3.2.1 1.10.3.3 1.10.3.3.1 1.10.3.4 1.10.3.4.1 1.10.3.5 1.10.3.5.1 1.10.3.5.2 1.10.3.5.3 1.10.3.6 1.10.3.6.1 1.11 1.12 1.13 1.14 1.15
5

Introduction
概述
aPaaS 协议手册
6

UI 协议详解
aPaaS 平台所配置的出来的业务功能，是基于本文档所描述的协议生成的。了解协议的组成部分，以及各部分所代表的 用途，将会更好的理解表单的运行机制。同时本文档还可以作为完整的功能手册，用于查询控件属性，行为功能等详细 的说明。
本章节将首先为你详细介绍表单(page)的组成部分，以及各个部分之间的关系。同时还会对引擎对表单的解析过程进行 详细介绍。
7

Over View 简介
Page Over View
表单是承载业务逻辑和 UI 的主体，是实现业务功能的基本单位。 一个完整的业务，通常由多个表单组合在一起，相互协作而成，例如 订单查询功能 就可能由 订单列表 ， 订单详情 ， 订
单编辑 等表单构成。
为了更方便的实现一些特定场景下的业务功能，一部分表单会具有一些特定的功能，因此表单可以据此分了两类:

1. Normal Page 通用表单 通用表单是指是用基本通用的控件和行为组装而成，能够大部分的业务场景。
2. Feature Page 功能表单 有些特殊且高频使用的，较为复杂的业务场景，为了提高用户的使用体验，简化配置的难度，而设计出的有特殊特
   性，满足某一类应用场景的表单。例如 表单流 ， 审批流 等
   Configuration Page 配置表单 为了方便表单的升级，合并，针对表单的控件部分进行了处理，这个协议是服务器存储的形式，前端在获取表单时，会
   将配置表单转换为通用表单后再下发。
   更多配置表单的说明请参看配置表单说明
   8

Over View 简介
9

Normal Page 通用表单
Normal Page
对于所有的表单来讲，主要的组成部分如下
功能表单的基本组成结构与普通表单一致，只是附加了部分特有的信息。
{
"pageinfo": {},
"view": { "body": {},
"menu": [] },
"presenter": { "initial": [],
"preprocessor": { "default": {}, "addition": []
},
"interface": [], "handlers": []
},
"businessmodel": [] }
pageinfo
此处定义表单的整体的一些信息，包含表单标题，ID，表单的加载事件等 关于更多详细属性的说明，请参看 pageinfo 属性说明
view
这部分是关于表单的显示的 UI 的定义，是由各种控件相互嵌套组合后，共同确定表单的显示的样子。 控件显示的布局是根据标准的 flexbox 布局规则来处理的。
更详细的说明请查看 view 属性说明
presenter
这部分为表单逻辑的配置模块，所有的控件的取值，赋值，按钮行为的处理等等，都是在这里定义 更详细的说明请查看 presenter 说明
businessmodel
这部分为该表单所用到的业务模型的描述 更详细的说明请查看 businessmodel 说明
10

Normal Page 通用表单
11

Page Info 表单信息
Page Info
"pageinfo": {
"code": "907788671254663213", "title": "品项检查",
"type": "5", "returnalertmessage": "", "eventlist": [
{
"trigger": "onload", "handler": ""
}, {
"handler": "" },
{
"trigger": "onreturn", "handler": ""
} ]
}
"trigger": "onunload",
title
表单标题
type
表单类型，参看下方定义
returnalertmessage
点击返回时的提示语，如果配置了 onreturn 事件，将会忽略该属性 eventlist
onload
⻚面首次加载，将要显示时触发的事件
onunload
⻚面消失时调用
onreturn
点击⻚面返回按钮时触发，目前只在手机端有效
Page Type ⻚面类型 根据 page 的
名称 类型编码 说明
normal page 1 普通表单
menu page 2 入口表单
work flow page 3 Tab 表单流
12

Page Info 表单信息
Master-Detail page 4 主从表单
List Page 5
approval flow 6 审批列表⻚面
report page 7 报表
login page 8 登陆⻚面
approval page 9 审批详情⻚面
switch page 10
Tree+List page 11
customer page 99 定制⻚面
Page Status ⻚面状态 通常⻚面状态由传参决定，使用系统变量 \_\_pagestatus 来传递或者获取⻚面状态
名称 编码 说明
新增状态 1
编辑状态 2
查看状态 3
13

View 视图层
View
{
"view": {
"body": {
"type": "layout", "flex": "1", "content": []
}, "menu": [
{
"type": "button" "individual": "1"
} ]
} }
body
此处为表单主要的显示内容定义区域，其内容约定为只能放置一个 flex == 1 的 layout 控件，作为整个表单的显示内 容的根容器。表单中需要显示的内容，需要定义在该容器的 content 属性中。
关于 layout 控件更多的说明请参看 Layout 详细说明
menu
该节点为移动端专有的节点，用于定于在导航栏上显示的功能按钮。
该节点只能放置一个或多个 button 控件，系统会自动将这些按钮放置在一个下拉列表中显示。如果需要让其中部分按
钮直接显示在导航栏中，只需要配置对应的按钮的属性 individual 为 1 即可。 关于 button 控件更多的说明请参看 Button 详细说明
14

Presenter 表达层
Presenter
Presenter 是集中承载表单的逻辑处理的模块，数据请求，表单跳转等表单的行为逻辑都会在此定义。 由于表单逻辑通常很繁杂，为了更清晰的划分和组织不同的逻辑处理，我们将 Presenter 分为四个部分:
Initial 初始化 Preprocessor 预处理 Interface 接口 Handlers 处理
每个部分其实都是由一个或多个 Event 事件 组成。
{
"presenter": {
"initial": [......], "preprocessor": {......}, "interface": [......], "handlers": [......]
} }
15

Presenter 表达层
Event
事件，指在⻚面内在某种条件下触发的一系列，连续的 action 的载体。例如点击提交按钮需要执行 数据提交 ，跳转 等 action 操作，这些操作按顺序依次执行，而这些操作封装到一起就叫一个事件。
任何 action 执行失败都会导致整个 Event 事件中止执行。
每个 action 都可以配置对应执行条件，条件不满足的时候将被忽略，继续执行下一 action 。 event 自身也有对应的
condition 用于控制事件是否应该执行。
Protocol
desc
事件描述，仅用于描述事件的用途
condition
事件执行的条件，当条件为空，或者条件中的表达式的结果是 true 时，事件才能被执行。
key
事件的唯一标识，由配置人员输入，用于跨⻚面调用时的标识符(即广播行为 call 使用的 key 属性)
successhint
事件中所有 action 都成功执行后的提示内容，空值的时候不提示信息
事件的提示是一个在⻚面下方或上方浮出的一个 3 秒后自动消失的提示框
actions
事件所包含的行为，按顺序依次执行，如果中间有调用其他事件的行为，需要执行完所调用的事件后再继续执行剩
下的行为
广播事件 call 不用等待对应的事件执行完毕，因此为了避免出现意外的情形，尽量不要用 call 调用当前表单的事 件。
事件执行顺序
请参看表单渲染顺序。
{
"code": "interface_refreshlist", "desc": "刷新列表",
"condition": "",
"key": "refreshlist", "successhint": "",
"actions": []
}
16

Presenter 表达层
17

Presenter 表达层
Action
行为是指完成一项特定任务的指令，是表单能够配置的逻辑的基本单元。
目前表单提供了多种的行为，通过这些行为的组合，可以实现丰富的表单逻辑。
根据行为的作用分为以下几类
Data Process 数据处理
| name | function | | ---------------- | ------------------------------------------------ | | datarequest | 数据请求，用于表单中控件 值，控件选项等数据的获取 | | datasubmit | 数据提交，用于存储指定的表单中的数据 | | cachedatarequest | 缓存数 据请求，用于从缓存数据中筛选获取数据 | | packagesubmit | 打包提交 |
Page Functions 表单逻辑
| name | function | | ------------- | ------------------------------------------------------------ | | refresh | 刷新，重新加载表单或控 件 | | alert | 弹框提示 | | eventlink | 调用当前 page 的某个 event | | ctrlevent | 触发当前 page 的某个控件绑定的 event | | call | 发出事件调用广播 |
Page Navigation 表单导航
| name | function | | ---------- | ------------ | | link | 链接 | | recivelink | 接收链接参数 | | return | 返回上一表单 | Flycode
调用 Flycode 的专用行为，可以将一些零散的，不方便配置的逻辑，放置其中，然后插入到行为执行队列中去。 Particular Action 特殊行为
对应于特定场景和表单的行为，不能随意配置，只能应用于特定的场景
工作流事件
| name | function | | ------------- | ---------------------------------------------------- | | af_preaddflow | 发起审批流程，用
于在业务表单发起指定的类型的审批流程 | 报表事件
| name | function | | ---------------- | -------------- | | rp_optionrequest | 报表选项值获取 | | rp_datarequest | 报表数 据获取 |
Common Attribute
所有的事件都具有以下属性
desc
行为描述，仅用于描述行为的用途
condition
{
"type": "datarequest", "desc": "刷新列表", "condition": "", "failhint": ""
}
18

Presenter 表达层
行为执行的条件，当条件为 空 ，或者条件中的表达式的结果是 true 时，行为才能被执行。
failhint
行为执行失败的提示内容标题，空值的时候显示由具体行为返回的错误信息，如果最终提示信息为空，则表示不需
要显示提示。
提示信息为一个弹出的信息框，包含提示内容和一个 确定 按钮。
19

Presenter 表达层
Initial
⻚面初始化的时候调用的事件放置的区域，目前的设计是该区域只能放置 Recivelink 这一种行为。
Receivelink
接收传参，用于将上个⻚面传过来的参数与当前⻚面中的控件进行绑定
{
"type": "receivelink", "condition": "", "param": {
"datatype": "0", "name": "**linkparam", "ctrlcode": "", "properties": [
{
"name": "**pagestatus", "ctrl": {
"code": "",
"component": "" }
}, {
} ]
"name": "reportinfo", "ctrl": {
"code": "reportA",
"component": "" }
} }
param
目前 param 的处理与 datarequest 的 setter 基本一致 但目前只接受一个对象，所以 name 的值固定为 \_\_linkparam
由于该行为的特殊性，在使用时做出以下约定

1. 一个 page 最多只能有一个接收传参行为 2. 该行为目前只能配置在事件的 initial 节点中
   20

Presenter 表达层
Preprocessor
表单预处理，指在表单初始化之后，执行的一系列对表单和控件初始状态进行设置的步骤
这部分由于在实际使用中并未用起来，所以在将来的版本中将会废弃掉，所以不要在此节点配置内容
Protocol
{
"presenter": {
}"
}"
} }
"initial": [], "preprocessor": {
"default": { "desc": "",
"script": "Ctrl.setProperty('somectrl1', hidden, true)" },
"addition": [ {
"title": "流程规则 1",
"desc": "用于发起请假申请时使用",
"script": "if (Page.getValue('__flowstep') == '123456') { Ctrl.setProperty('somectrl2', hidden, true)
}, {
} ]
"title": "流程规则 2",
"desc": "用于审批请假申请时使用",
"script": "if (Page.getValue('\_\_flowstep') == '654321') { Ctrl.setProperty('somectrl3', hidden, true)
},
"interface": [], "handlers": []
preprocessor 作为 presenter 的一部分，在协议和实现上都紧跟在 initial 之后。 目前预处理分为两大部分
default
默认预处理，指所在表单默认会执行的预处理操作。
script 默认预处理所执行的 flycode 脚本
addition
这部分协议暂不支持
附加预处理，通常这部分预处理操作不在表单配置的时候配置，而是在其他场景关联了该表单，并且需要对表单进行场
景相关的特殊控制时才设置。
例如配置流程时，需要根据流程的步骤和状态，对 UI 进行部分控制。 附加预处理可以包含多个处理块，但一次最多只会执行其中的一个。
21

Presenter 表达层
title
该规则的名称
desc
该规则的描述
script 处理块对应执行的 flycode 脚本

1. 附加预处理可以有多个处理操作，会依次执行，直到有处理返回 true ，或者执行完所有的附加操作后 结束
2. 附加预处理会在默认预处理执行完毕之后才执行
   22

Presenter 表达层
Interface
该区域为放置接口的区域，即该区域放置的事件都不是由当前表单触发的，而是通过接收其他表单发出的广播信息进行
触发。
放置在该区域的事件都有一个额外的 key 属性:
{
"presenter": {
"interface": [ {
......
"desc": "外部数据变动导致本⻚面刷新", "key": "refreshlist",
......
"actions": [
...... ]
} ]
} }
key
其内容是一个字符串，用于记录其所接收的广播事件的关键字。一个表单内不能出现重复的关键字，多个表单可以
使用同一关键字。
接口事件的其余配置与普通的事件一致。
23

Presenter 表达层
Handlers
表单内部逻辑的放置区域，该区域的事件通常由控件触发，例如点击按钮，列表加载数据等。 handlers 中可以有多个独立的事件，每个事件由一系列的行为构成。
{
"presenter": {
"handlers": [ {
"code": "546131346436513" "desc": "event1", "actions": [
...... ]
} ]
} }
24

Business Model 业务模型层
Business Model
由于 Presenter 模块基本会记录下绝大部分有关业务模型的有用的信息，因此这部分的信息并不是必须的。 目前移动端并未使用这部分的信息，Web 端也仅仅是用来查找对应业务行为的业务模型 id。
25

Feature Page 功能表单
Feature Page
功能表单是为了更方便，更友好的实现一些较为常用，有比较复杂的场景，所定义出来的拥有特殊的协议属性的异类表
单。
26

Page Flow 表单流
Page Flow
表单流表单，是指由多个子表单，按照一定的次序，共同组成的一个综合表单。
通常表单流中的各个子表单的业务有前后顺序，可以控制是否需要按顺序挨个处理。同时表单流表单还提供业务处理状
态，一键提交等内置的功能。
Protocol
"pageflow": { "packagesubmit": "1", "eventlist": [
{
"handler": "",
"trigger": "onload" },
{
"handler": "handler_packagesubmited", "trigger": "packagesubmited"
} ],
"bindingmarkkey": "", "control": "1", "pagerefs": [
{
"code": "897995503285964883", "hidden": "",
"submitevent": "handler_submitdetail", "marktype": "1",
"title": "终端进店签到",
"pagecode": "897995503285964890"
}, {
"pagecode": "896980345218535487" }
"code": "896985831762432098", "hidden": "",
"submitevent": "handler_submitdetail", "marktype": "1",
"title": "终端生动化检查",
] }
bindingmarkkey 通过该属性指定的 key 所对应的值，加上子表单的 pageID，来记录子表单所代表的业务是否处理完成。 例如⻔店拜访的业务中，可以指定 storeid 为 bindingmarkkey 。
目前处理状态默认为当天有效。
packagesubmit
是否支持一键提交，如果是则一次性打包上传所有子表单数据
// 打包数据格式 [
{ // 第一个表单的数据
"modelcode": "1234565", // 提交行为的业务模型 code "logiccode": "5454566", // 提交行为的业务行为 code
27

Page Flow 表单流
"data": { // 提交的具体数据 "objectname1": {
"property1": "property2": "property3":
}, "objectname2": [
"value1", "value2", "value3"
{
"property21": "value21", "property22": "value22"
}, {
"property22": "value24" }
] }
"property21": "value23",
},
{ // 第二个表单的数据
"modelcode": "2132233", "logiccode": "5648754", "data": {
"objectname3": { "property31": "value31", "property32": "value32", "property33": "value33"
} }
} ]
子表单提交完成事件
子表单在提交完成后，可以通过 call 事件，通过指定一个内部约定的 key: \_\_pageprocesscomplate 来触发该事件。该事 件需要完成打钩，表单切换等操作。
完成事件执行时序
28

Page Flow 表单流
完成事件具体执行步骤
29

Page Flow 表单流
调用流程
30

Page Switch 表单切换器
protocol
{
"pageinfo": {
"title": "店面工作",
"type": "10" //pageswitch，⻚面同级切换 },
"pageswitch": {
"mode": "1", //切换的方式，1 通过 segment 控件切换，且 segment 在导航栏上，适用于手机端
// 2 tab 控件切换，适用于手机端和 web 端
// 6 通过列表控件切换，适用于 web 端 或 pad
"menu": [], //父表单的菜单，ui 显示的菜单为父表单菜单+当前子表单菜单 "pagerefs": [//引用的 page，默认显示第一个
{
"pagecode": "",//引用的 pagecode "title": "",//引用的 page 的 title "functioncode": "234234233234", "icon": ""
} ],
"eventlist": [ {
"trigger": "onload",
"handler": "handler_pageswitch_onload" }
] }
}
参数传递
switch page 需要在加载子表单时，自动将自身接收到的传参，全部自动传递给子表单
31

Approval Flow Page 审批流表单
Approval Page 审批表单
审批流，用于处理审批相关的业务。
主要有以下几个部分组成
审批列表 Approval List 专⻔用于显示待办和已办的审批数据的列表，该功能目前为内建的功能，只能引用，不支持配置，详细的技术细节
参看审批列表技术说明 审批种类列表 Approval Type List
在审批列表发起的新审批时，需要先选择审批种类，再新建审批。该功能目前只内置于审批列表 的⻚面中，不支持 单独引用，技术细节参看 审批种类列表技术说明
审批发起协议 Approval New Protocol
区别于在固定的 审批列表 中发起审批，系统支持在任意的业务表单中发起新审批。目前该功能以特殊表单行为的
形式配置，详细说明请参看 审批发起协议 审批表单 Approval Page
审批表单是以业务表单为基础，添加了审批相关操作(审批内容填写，查看，提交等)的业务化表单，本文档主要
讲解这部分内容。
审批表单的流程
根据上个
界面流转
新增，或者处理暂存
当用户通过发起流程按钮，或者在待办中点击尚未发起的暂存状态的流程进行处理的时候，都算作是新增审批操
作。
处理
当用户在待办列表中通过点击处理按钮进入时，均为处理审批操作。
32

Approval Flow Page 审批流表单
按钮操作的时序 下一步 按钮(新增界面)
新增界面的下一步按钮的操作较为复杂，一般都会先上传数据，再获取下一步处理信息。而且会根据是发起按钮进
入，还是草稿处理按钮进入，有不同的处理。
下一步 按钮(处理界面，或者处理暂存界面) 在处理界面，下一步处理相对简单，只是简单的获取下一步处理信息。
33

Approval Flow Page 审批流表单
提交 按钮 (新增，处理暂存，处理) 不管是新增，还是处理，提交按钮的处理都是一致的，区别仅在于新增的时候，部分处理界面特有的流程字段为
空。
Protocol 协议 表单协议
{
"pageinfo": {
"code": "319609839767500070" },
"approvalflow": {
"instancename": "le:user('name') + '的' + {af_processdefinename}", "initiateaction": "4343434321111122",
34

Approval Flow Page 审批流表单
"submitaction": "4343434321111123" }
}
submitaction 和表单流一样，审批流表单也需要标识其自身的数据提交 action approvalflow 用于审批的表单必须要有该节点，用于定义审批流所需相关信息
instancename
用于新建审批时，生成审批实例名称的表达式
initiateaction
指定发起流程所调用的业务数据提交接口
submitaction
指定提交流程所调用的业务数据提交接口
上下文传参约定
当传参中包含 af_taskkey ，且当前表单协议中有 approvalflow 节点的时候，就认为当前表单处在审批流程的上下文之 中，需要按照本协议进行表单处理。
当 af_taskkey == af_initiatetask 时为新增，其他值为处理。
根据 af_statusname 和 af_taskkey 两个字段。共同决定当前的表单状态
下一步信息获取接口
目前主要用于获取下一步处理人信息，该接口在新增和处理审批中均会使用
Request
POST API:~/workflow/flow/predictnextstepinfo
{
"af_taskkey": "af_initiatetask"
}
{
"af_processdefineid": "expenseflow:1:72504", //流程定义 Id
"af_taskid": "75006", "af_choice": "", "af_choicename": "", "af_bizinfo": {
"a": "b",
"b": "c" }
}
//任务 Id //审批选择
//审批选择 //业务信息, key-value 形式
af_processdefineid & af_taskid
这两个参数均需要在调用数据提交操作后，返回的流程实例信息中获取
35

Approval Flow Page 审批流表单
af_choice
当前用户所选择的审批选项值，由于是新增审批，没有选项，因此该值为空即可
af_bizinfo
业务数据，单表单的情况下，参看下方数据组装说明。
后台服务会根据业务数据中的部分数据决定下一步处理节点信息。
Response
{
"resp_data": {
"af_nodekey": "usertask2", //节点 Key
"af_nodetype": "userTask", //节点类型 (startEvent、userTask、endEvent) "af_typename": "用户任务", //节点类型名称 (开始节点、用户任务、结束节点) "af_nodename": "财务人员审核", //节点名称
"af_jointnode": false, //是否会签节点
"af_model": "auto|manual", //模式(认领|选人)
"af_nodecandidates": [ //可选人员范围信息
{
"af_userinfoid": "831025515799248803", //人员 Id
"af_userinfoname": "财务", "af_saleareaid": "100", "af_saleareaname": "总部"
//人员名称 //区域(部⻔)Id
//区域(部⻔)名称
} ]
} }
数据组装 流程发起接口 Request
{
"kx_contract": { // 业务数据
"id": "",
"name": "" },
"**approvaldata": { // 审批数据
"af_processdefinekey": "",
"af_processinstancename": "小王的报销单", // 流程实例名 "af_businessobjname": "", // 业务对象名称 "af_businessobjpropertyname": "" // 业务对象标识属性名称
} }
// 流程定义 Key
**approvaldata
af_processdefinekey
af_applyUserCode
af_businessKey 业务主键，可以为空，空的时候表示还没有业务实例，将会在该接口的返回数据中返回业务实例。
36

Approval Flow Page 审批流表单
Response
流程提交接口
Request
{
}
"af_processdefineid": "", "af_processinstanceid": "", "af_taskid": "", "af_taskname": "", "af_businesskey": ""
// 流程定义 Id // 流程实例 Id
// 流程发起后的第一步任务实例 Id // 流程发起后的第一步任务名称
// 业务数据 id
{
"businessdata": { // 业务数据
...... },
"\_\_approvaldata": { // 审批数据
"af_taskid": "",
"af_taskname": "",
"af_processinstanceid": "",
"af_choice": 1,
"af_choicename": "",
"af_comments": "",
"af_jointnode": "",
"af_nextstepusers": "831025515799248803,831025515799248804",
// 流程实例 Id //审批选择的 name
"af_fallbacknodekey": "", "af_businessobjname": "", "af_businessobjpropertyname": ""
// 回退时选择的回退节点 Key // 业务对象名称
// 业务对象标识属性名称
} }
Response
{ }
37

Approval Flow Page 审批流表单
Approval List 审批列表 纯定制⻚面，用于显示当前用户所有的审批信息的列表，可以在该⻚面中新增和处理审批请求。
引用关键字
在 link 事件中，或者在 functionmenu 之类的控件中，使用该关键字来标明下一个⻚面为内置审批列表⻚面
列表数据获取接口
审批列表将会用到几个内置的接口用以和服务器数据进行交互
"buildinpage:approvallist"
蓝色部分为内部接口
Request
38

Approval Flow Page 审批流表单
POST API:~/workflow/flow/getmyprocesslist
{
} }
//⻚码
//⻚大小
//查询类型，待办:0, 已办:1, 默认查待办
"af_pageindex":1, "af_pagesize":20, "af_querytype": 0, "af_querycondition": {
"processinstancename": "", "processdefinename": "", "applyusername": "", "startdate": "", "enddate": "", "categorycode": "", "categoryname": ""
// 流程实例名 // 流程定义名称 // 发起人
// 流程开始时间 // 流程结束时间 // 分类的 code // 分类的名称
Response
{
"resp_data": {
"af_pagecount": 1, //总⻚数 "af_pagesize": 10, //⻚大小 "af_itemcount": 1, //记录总条数 "af_items": [
{
"af_assigned": true, //
"af_processdefineid": "expenseflow:1:72504", // "af_processinstanceid": "75001", // 流程实例 Id
流程定义 Id
是否已设置处理人
"af_processinstancename": "小王的费用", // "af_processdefinekey": "expenseflow", // "af_processdefinename": "费用报销流程", // "af_taskid": "75006", // 任务 Id "af_taskkey": "usertask1", // 任务 Key
流程实例名称 流程定义 Key
流程定义名称
"af_taskname": "渠道业务员发起", // 任务名称 "af_createtime": "2017-03-24 15:46:03", // 任务创建时间 "af_applyusercode": "831025515799248802", // 流程发起人 Id "af_applyusername": "渠道业务员", // 流程发起人姓名
"af_applytime": "2017-03-24 15:46:03", // "af_statusname": "待处理", // 状态
流程发起时间
"af_operator": "处理", "af_isfallback": false
// 处理
// 是否为退回的步骤
} ]
} }
af_isfallback 状态需要传递到详情⻚面中
任务认领接口
Request
POST API:~/workflow/flow/claimprocess
{
"af_taskid": "75006" //任务实例 Id
}
39

Approval Flow Page 审批流表单
所需的参数数据，均从行数据中，keyword 相同的数据项获取 Response
流程详细信息获取接口
用于获取处理流程的 UI 信息，历史信息，以及相关选项信息，通常实在流程列表中，点击查看或者处理按钮时触发。 Request
POST API:~/workflow/flow/getflowstepdetail
所需的参数数据，均从行数据中，keyword 相同的数据项获取 Response
{
"resp_data": "success"
}
{
"af_processinstanceid": "75001", // 流程实例 Id "af_taskid": "75006", // 任务 Id
"af_taskkey": "usertask1", // 任务 Key "af_processdefineid": "expenseflow:1:72504" // 流程定义 Id
}
{
"resp_data": {
"af_choices": [ "同意", "不同意"
], // 审批选项
"af_processdefineid": "expenseflow:1:72504", // 流程定义 Id "af_processdefinekey": "expenseflow", // 流程定义 Key "af_processdefinename": "费用报销流程", // 流程定义名称 "af_processinstanceid": "75001", // 流程实例 Id
"af_taskid": "75006", // 任务 Id
"af_taskkey": "usertask1", // 任务 Key
"af_taskname": "渠道业务员发起", // 任务名称
"af_createtime": "2017-03-24 15:46:03", // 任务创建时间 "af_taskuicode": "firstForm", // 任务关联的 UI 对象编码 "af_hashandle": false, // 是否已处理(决定⻚面审批 UI 元素的显示或隐藏) "af_hasend": false, // 流程是否已结束
"af_businesskey": "报销单 1", // 业务 Id
"af_processtraces": [ // 流程追踪
{
"af_assignee": "渠道业务员", // 处理人
"af_comments": null, // 审批意⻅
"af_choice": null, // 审批选择
"af_actid": "startevent", // 活动 Key
"af_actname": "开始", // 活动名称
"af_assigneecode": "831025515799248802", // 处理人 Id "af_handletime": "2017-03-24 15:46:03" // 处理时间
}, {
"af_assignee": "渠道业务员", "af_comments": null, "af_choice": null, "af_actid": "usertask1",
40

Approval Flow Page 审批流表单
"af_actname": "渠道业务员发起", "af_assigneecode": "831025515799248802", "af_handletime": null
} ]
} }
af_taskkey
该字段主要是用来区分审批流程过程中，各个不同的节点的。
约定该值为 af_initiatetask 时，表示处在尚未真正发起的状态，此时不能显示审批历史和审批选项，按照新增发 起处理。
af_taskuicode
关联的审批表单的 page code，通过该值拿到展示审批详细信息的 page，相当于 link 事件的 to 属性。
传参说明
审批列表在点选 处理 按钮，或者点击审批名称的时候，会跳转到对应的审批表单中，审批表单会需要当前点击处理行 的数据，具体说明如下
绿色部分为表单跳转
跳转到审批表单
传参的数据来源于获取 流程详细信息获取接口 ，传参将用于审批表单的初始化等 传参详情
{
//------- page 状态 --------// "**pagestatus": "2", // page 状态
//------- 流程信息 --------//
// 目前只需要将获取流程信息接口的所有出参全部传递即可 "**approvalflowdata": {
"af_choices": [ "同意", "不同意"
], // 审批选项
"af_businesskey": "3445253563546",
"af_processdefineid": "expenseflow:1:72504", // 流程定义 Id
41

Approval Flow Page 审批流表单
...... }
}
\_\_pagestatus
page 状态，审批表单会根据该字段控制控件的显示状态。 当是从待办列表进入，且当前为草稿状态或者为初始状态时，表单为编辑;其余状态均为查看。
IDE 可关联配置字段
af_businesskey
用于审批表单业务数据提交的主键
af_taskkey
通常用于在不同的审批节点，部分控件有不同的显示状态，例如某些控件在发起的时候不能显示，在中间的步骤才
能显示。
跳转到审批种类列表
无需传参
42

Approval Flow Page 审批流表单
Approval Type List 审批类型列表 在专⻔管理审批流程的界面(审批列表)中，发起新审批时，需要先选择审批种类，然后再发起审批。
引用关键字
在 link 事件中，或者在 functionmenu 之类的控件中，使用该关键字来标明下一个⻚面为内置审批类型列表⻚面
接口说明
审批类型列表将会用到几个内置的接口用以和服务器数据进行交互
"buildinpage:approvaltypelist"
43

Approval Flow Page 审批流表单
???审批种类的分类是否需要单独获取，每种分类是否需要单独获取数据，需要讨论
审批类型数据获取
Request
POST API:~/workflow/flow/getflowcategorydetail
Response
{ }
{
"resp_data": [
{
"af_flowcategorycode": "456431313", "af_flowcategoryname": "财务相关", "af_parentcode": "0",
"af_status": 1,
"af_processlist": [
{
"af_processkey": "expense", "af_processname": "报销单流程"
}, {
"af_processname": "费用报销流程" }
] },
"af_processkey": "expenseflow",
{
"af_flowcategorycode": "456431317", "af_flowcategoryname": "报销类", "af_parentcode": "456431313", "af_status": 1,
"af_processlist": []
}, {
"af_processlist": [] },
{
"af_flowcategorycode": "456431316", "af_flowcategoryname": "市场费用", "af_parentcode": "0",
"af_status": 1,
"af_processlist": []
}, {
"af_processlist": [] }
"af_flowcategorycode": "456431314", "af_flowcategoryname": "客户相关", "af_parentcode": "0",
"af_status": 1,
"af_flowcategorycode": "456431315", "af_flowcategoryname": "销售管理", "af_parentcode": "0",
"af_status": 1,
] }
44

Approval Flow Page 审批流表单
传参说明
审批列表在点选 处理 按钮，或者点击审批名称的时候，会跳转到对应的审批表单中，审批表单会需要当前点击处理行 的数据，具体说明如下
跳转到审批表单
传参的数据来源于获取流程信息接口到的，传参将用于审批表单的初始化等
传参详情
{
//------- page 信息 --------// "**system": {
"**pagestatus": "1", // page 状态 }
//------- 流程实例信息 --------// "**approvaldata": {
// 这部分信息是需要代码自动生成，以供审批⻚面使用的 "af_businesskey": "",
"af_taskkey": "af_initiatetask", "af_processinstanceid": ""
//------- 流程信息 --------//
"af_processdefineid": "expenseflow:1:72504", //流程定义 Id "af_processdefinekey": "expenseflow", //流程定义 Key "af_processdefinename": "费用报销流程", //流程定义名称
} }
**pagestatus page 状态，发起的时候统统按照新增状态处理，也就是说默认传 1 af_businesskey 业务数据主键，这个值用于业务数据提交时，给主键赋值。 新增的情况下，该值为空
af_taskkey
用于表示当前所在节点，固定传 af_initiatetask ，表示预发起状态 af_processinstanceid
45

Approval Flow Page 审批流表单
46

Report Page 报表表单
Report Page
报表表单，专⻔用于放置一个或多个报表的表单。
{
"pageinfo": {
"code": "961117599595368547", "reportdesclist": [
{
"reportcode": "961117599595368546", "desccode": "984718410288074801"
} ]
}, "view": {
"body": { "flex": "1",
"type": "layout", "content": [
{
"type": "report",
"code": "961117599595368546", "reportdesccode": "984718410288074801"
} ]
} }
}
reportdesclist
冗余的 报表控件 与 报表描述文件 的关联表。主要是方便前端在解析报表控件之前，将报表描述文件中的内容整合 到报表表单中。
报表控件
请参看 控件说明
报表描述文件
该文件是为了满足报表特殊的配置需求，单独将与一个报表相关的信息，例如筛选条件，数据来源，等信息单独放置在
一个协议文件中，该文件就是报表描述文件。
该文件最终会在前端与和报表表单进行合并，然后再显示出真正的报表表单。
报表描述文件的结构与普通表单的结构不太一样，大致如下:
{
"code": "984639262718824496", "type": "7",
"report": {
"code": "984639262718824504",
"type": "report" },
"handlers": [],
"filter": {} }
47

Report Page 报表表单
report
这里放置对应的报表控件的完整协议
handlers
这里放置该报表所需的表单事件，会在前端整合进报表表单中。
filter
该报表所需的筛选控件的协议，会在前端整合进报表表单中。
关于筛选条件，由于存在着以下需求:

1. 筛选条件只作用于该报表
2. 筛选条件作用于该报表所处表单的所有报表控件 3. 筛选条件部分作用于报表所处表单的所有报表控件
   目前的协议并不能很好的处理这些情况，之后会做调整。
   48

Configuration Page 配置表单
Configuration Page
配置表单是指使用 IDE 配置出的原始表单，该表单在协议描述上与前端最终解析的表单存在一定的差异，主要是用于解 决两个问题

1. 为了 IDE 能更方便的配置表单，添加了部分 IDE 专用的信息描述节点。 2. 为了方便表单的升级，对 View 节点进行了控件与布局的分离。
   49

Page Render Flow 表单渲染过程
Page Render Flow
大体处理步骤如下

1. 获取表单的 json 数据
2. 转换为 Model 树
3. 如果表单为功能表单，则此时针对其特有功能对表单 Model 树进行调整
4. 创建 ViewModel 树
5. 执行 initial 中的事件
6. 如果此时传参中有设置 \_\_pagestaus ，则根据其值对 ViewModel 进行调整(主要是只读) 7. 执行 Page 的 onload 事件
7. 深度优先创建 View 树，并同时执行对应控件的 onload 事件
   50

表单数据缓存
表单数据缓存功能
表单数据缓存功能是指，用户在表单中输入数据时，自动存储输入的数据到缓存文件中，方便当用户意外退出表单后，
可以重新找回已填写的数据。
缓存配置 主动配置
表单可以主动设置为支持缓存的相关信息，主动设置能够更精确的控制缓存。
enable
是否允许缓存，bool 类型值，默认值为 1
keys
指定缓存表单需要的特殊标记，配置时从表单的入参中选择一个或多个入参，这些入参的 name 就作为标记的 key 放入该字段。
表单引擎会使用这些字段的值的组合，作为 业务值 记录进 表单实例标识 中去。 submitevents
提交事件，用于指定表单中哪些事件是提交数据的事件。这些事件一旦执行成功，立即删除当前表单实例的缓存数 据。
自动配置
如果表单没有设置 cache 字段，则使用自动配置方案。该方案会自动设置支持缓存的相关信息，具体如下 enable
搜索表单中是否存在数据上传行为 datasubmit ，如果有，则标记为 1， 否则标记为 0 keys
会将表单接收入参的事件 receivelink 的所有参数中，值为字符串的参数的作为 key submitevents
所有包含 datasubmit 行为的事件，都会被标记为提交事件。 表单实例标识
即唯一标记一个缓存数据，只有当前表单的实例标识，与缓存数据的实例标识的值相同时，才认为该缓存数据为当前表
单的数据。
"pageinfo": {
"code": "1061903577213177955", "cache": {
"enable": "1",
"keys": ["id"],
"submitevents": ["1234123", "4564567567"]
} }
51

表单数据缓存
实例标识是由多个值共同组成的，具体包括: 用户 ID + 企业 ID + 职位 ID + 表单 ID + 业务值 1 + ... + 业务值 N 如果前端使用了不同的用户，企业，职位的数据的物理分离，则可以将缓存数据也使用相同的规则分割。这样的
话实例标识就只剩下 表单 ID + 业务值 1 + ... + 业务值 N
规则说明 缓存

1. 用户在输入型控件中进行输入后立即缓存。
2. 只缓存用户主动输入的数据。
3. 对于文本输入框，数字输入框这类可以会使用键盘连续输入的控件，可以在关闭键盘，或者焦点离开该控件时触发 缓存。
4. 缓存使用控件的 code 作为 控件实例标识 ，如果是在列表型容器控件内部的控件，则需要使用 容器控件 code + indexPath + 控件 code 作为缓存标识。
   其中 indexPath 直接使用其 section 和 row 的值做标识，例如:容器 A 中，第 0 组第 2 行的控件 B 的实例标识为: A_0_2_B
   恢复
5. 当表单执行完表单的 onload 事件，以及所有控件的 onload 事件后，使用当前表单的实例 ID 去缓存库中查询是否有缓 存。
6. 如果有，则弹框提示用户是否使用缓存数据进行填充。
7. 当用户选择确定按钮后，取出缓存数据并填充进控件中。
8. 如果有数据找不到对应的控件填充，则丢弃。
   清理
9. 当表单中的任一 提交事件 被成功执行后，即清理当前表单的缓存。
10. 当用户在恢复弹框时，选择了 丢弃 按钮后，清理当前表单的缓存。
11. 当用户使用清除缓存的功能时，清理所有的表单缓存。
12. 当缓存列表类控件，例如表格，内部的数据的时候，如果控件的数据被刷新(内存搜索除外)时，需要清除掉该控
    件的缓存。(PS. 实际中，这种情况应该不会存在，录入型的列表类控件，不应该配置数据刷新)
    缓存时序
    52

表单数据缓存
缓存数据设计
各端可根据实际情况做出自己的设计，只要能满足缓存的需求即可。以下为一个简单的设计以供参考:
缓存数据由两部分组成:

1. 缓存文件目录。 2. 缓存文件
   缓存文件目录
   用于记录有缓存数据的表单文件的索引的目录文件，格式如下
   表单实例标识 文件名
   243213546123455_456t34563_2 243213546123455_456t34563_2.plist
   如果缓存文件在一个文件夹里面，也可以不用真实存在一个目录文件，直接读取该文件夹的文件列表即可。
   缓存文件
   缓存文件里面实际记录了指定表单的缓存数据，其内部应该是一个字典，key 为控件实例标识，value 为缓存值:
   key value
   \_\_cache_date 18966532144
   8746321321014 100
   9634531412453_0_1_854631213485 A
   53

表单数据缓存
54

UI 布局系统
Layout
aPaaS 前端的布局统一使用 FlexBox 的标准，详细的布局说明可以参看:https://yogalayout.com/docs
55

样式控制
控件样式控制
控件可以根据不同的需求，呈现出不同的形态
基本形态分类
目前主要分为以下四种形态
key usage
plain 指控件自身不用提供 border，由其所在容器提供
以文本输入框为例:
card 和 plain 类似，不同之处在于通常控件显示的宽度更窄一点
free 控件需要提供 border，用于标识控件的显示范围
basic 控件的极简显示模式，用在显示区域很小的地方
56

样式控制
协议约定
默认的，所有的控件都具有一个叫 mode 的属性，用于控制其显示模式
不同的前端，mode 的默认值不同
mode 隐式继承 由于控件大多数时候的显示模式其实是由其所在的容器决定的，所以大多数时候不需要手动的去设置控件的显示模式，
而是直接继承其父容器的 mode 属性值。 不同的容器控件有着不同的默认 mode 值:
{
"type": "somekindctrl", "mode": "free"
}
前端类型 mode 默认值
手机端 plain
web 端 free
ctrl in mobile in web
layout plain free
panel plain free
tabboard plain free
filter free free
list basic basic
sectionlist free free
table basic basic
容器控件本身通常不会受 mode 影响，其 mode 属性用于控制子控件样式
57

控件分类
控件分类 Ctrl Catalogue 控件根据其嵌套能力分为两大类 独立控件 和 容器控件 。
独立控件
又叫基础控件，指通常用于显示或录入单个数据项的控件，同时独立容器支持嵌入到容器控件和布局控件中。
展示型控件
提供一定的显示和基础的事件响应功能，不支持输入值
type
text 文本
name
availabel
输入型控件
是体量最大的控件集，负责用户数据的输入采集。
从其值的性质来看分为 单值 和 复合值 两种;复合值又可以细分为 选项值 和 特有复合值 两种;选项值又可细分为 单层
选项值 ， 级联选项值 两种
从其 UI 布局性质来看可分为 单体 ， 标题型 两种;标题型又可细分为 左右 分布和 上下 分布两种。 即结构如下:
按值分
单值 复合值
选项值 单层
级联 特有复合值
按 UI 布局分
单体 标题型
左右 上下
✅
dynamictext 动态文本 ✅
button 按钮 ✅
icon 图标 ✅
image 图片 ✅
webview 网⻚ ✅
interactivewebview 交互式网⻚ ✅
58

控件分类
UI 布局受屏幕大小影响较大，因此不同的终端对同一控件的处理会有所不同，目前只针对手机端的屏幕对控件 UI 进行划分，web 端的分类会有一点不同，基本没有上下布局，全是左右布局
具体的控件列表如下
type name 值分类 布局分类 Mobile Web
address 地址 特有复合值 垂直 ✅ ✅
attachment 附件 特有复合值 垂直 ✅ ✅
calendar 日历 特有复合值 单体
cascade 级联筛选框 级联选项值 垂直 ✅ ✅
checkbutton 勾选按钮 单值 单体 ✅ ✅
currency 金额输入框 单值 水平 ✅ ✅
datepicker 日期 单值 水平 ✅ ✅
daterange 日期区间 特有复合值 垂直 ✅ ✅
dropdownbox 下拉列表 单层选项值 水平 ✅ ✅
filtertextinput 搜索文本框 单值 单体 ✅ ✅
location 定位 特有复合值 垂直 ✅
number 数字输入框 单值 水平 ✅ ✅
numberrange 数字区间输入框 特有复合值 垂直
peoplelist 人员选择 级联选项值 垂直
period 时间段选择框 特有复合值 垂直
phonenumber 号码输入框 单值 水平 ✅ ✅
photo 拍照 特有复合值 垂直 ✅
picklist 选择列表 单层选项值 垂直 ✅ ✅
picktree 选择树 级联选项值 垂直 ✅ ✅
relevance 关联选择框 单层选项值 垂直 ✅
selectbox 选择框 单层选项值 垂直 ✅ ✅
sortbutton 排序按钮 单值 单体 ✅ ✅
switch 开关按钮 单值 单体 ✅ ✅
textinput 文本框 单值 水平 ✅ ✅
textinputarea 大文本框 单值 垂直 ✅ ✅
容器控件
容器控件是指可以嵌套独立容器的控件。容器控件之间不能随意相互嵌套，具体的嵌套组合参看下方说明。
容器控件按照使用限制分为两大类:独立容器 和 内部容器。独立容器是可以单独使用的，没有指定特定的父级容器的 容器控件;而相对的内部容器是指不能单独使用，只能在指定控件内部使用的容器控件。
独立容器 控件依据其嵌套能力分为以下几种:布局容器，列表容器，卡式容器。
59

    控件分类

内部容器 根据其父容器的内容，分为两种 行容器(父级控件为列表容器) 和 块容器(父级控件为卡式容器) 布局容器
嵌套能力:可以自由嵌套所有的独立容器和独立容器。 被嵌套能力:能被所有布局容器和内容容器控件嵌套 布局能力:提供完整的 flexbox 布局支持。
type
name
layout
panel
列表容器
布局
面板
嵌套能力:只能嵌套对应的行容器。
被嵌套能力:可以被布局容器或块容器嵌套
布局能力:没有布局能力。只提供内置的，对其行容器的固定布局能力。
这种控件一般是数据驱动型的控件，根据数据的条数，决定显示内容的组数。
所有的列表容器都有其对应的内部容器，其对应的内容容器负责真正对其内容进行布局显示。
type name
accordion 折叠列表
dynamicpanel 动态面板
list 列表
sectionlist 分组列表
table 表格控件
timeline 时间轴
行容器
嵌套能力:可以嵌套布局容器，卡式容器和独立容器。
被嵌套能力:只能被其对应的父容器嵌套
布局能力:提供完整的 flexbox 布局支持，不过根据其父容器的特性，部分布局功能会失效，具体参看对应列表控件 的协议。
由于不能单独自由配置，因此这类容器不提供正式独立的类型和名称
type name 父容器 配置数量限制
accordion header row 折叠列表标题行 accordion 1
accordion content row 折叠列表内容行 accordion 1
list content row 列表内容行 list 1
sectionlist header row 分组列表标题行 sectionlist 1
sectionlist content row 分组列表内容行 sectionlist N
60

        控件分类

table content row 表格内容行 table 1
timeline header row 时间轴标题行 timeline 1
timeline content row 时间轴内容行 timeline N
卡式容器
提供一定版式规划能力的容器控件
与列表容器相同，卡式容器也包含其对应的内容容器;但与列表容器不同，卡式容器不由数据驱动，直接根据其配置的
子控件，显示一组 UI。
嵌套能力:只能嵌套指定的块容器。
被嵌套能力:能被布局容器和内容容器嵌套
布局能力:没有布局能力。只提供内置的，对块容器的固定布局能力。
块容器
嵌套能力:可以自由嵌套所有的独立容器和独立容器。
被嵌套能力:只能被其对应的父容器嵌套。
布局能力:不同的的块容器有不同的约定，有的有完整的布局能力，有的只支持内置布局，具体参看对应控件中的
详细说明。
由于不能单独自由配置，因此这类容器不提供正式独立的类型和名称
type name
cardboard 卡片面板
filter 筛选框
tabboard 标签面板
type name 父容器 配置数量限制
cardboard content block 卡片面板内容块 cardboard N
filter basic search block 基础筛选块 filter 1
filter advanced search block 高级筛选块 filter 1
filter sort block 排序内容块 filter 1
tabboard content block 标签面板内容块 tabboard N
特殊控件
这类控件通常是使用场景很特殊，或者实现的功能较为复杂，不能简单的进行分类，进而统一归类为特殊控件。
特殊控件都不支持嵌套其他控件。
type name 终端支持范围 支持的容器
report 报表控件 全部 布局容器，块容器
native 自定义控件 全部 不确定
menu 表单菜单控件 移动端 无
functionmenu 应用主菜单控件 移动端 布局容器，块容器
61

    控件分类
            map 地图控件 全部 布局容器，块容器

控件嵌套能力参考表
下表说明了每一列标题所指定的控件，是否能嵌套每一行最左边指定的控件
基础控件 布局容器 列表容器 行容器 卡式容器 块容器
基础控件 ❌✅❌✅❌✅
布局容器 ❌✅❌✅❌✅
列表容器 ❌✅❌❌❌✅
行容器 ❌❌✅❌❌❌
卡式容器 ❌✅❌✅❌✅
块容器 ❌❌❌❌✅❌
重要:容器嵌套树的任何一个分支上，都不能同时出现两个或以上的列表容器，因此 1. 嵌套在行容器中的布局容器就失去了嵌套行容器的能力 2. 嵌套了列表容器的布局容器也就失去了被嵌套进行容器的能力
62

    控件通用属性

Ctrl Attribute Common
通用属性
控件通用属性，所有的控件都会有以下属性
默认值是指终端的默认值，一般在 IDE 端的默认值都是 nil 基础属性
属性名称 说明 取值类型 默认值 flycode
type 控件类型 enum nil
code 控件编码 string ""
name 控件名称，用于 flycode string ""
title 控件标题 string ""
hidden 是否隐藏 bool false ✅
eventlist 事件列表 array nil
eventlist.handler 事件 code string ""
eventlist.trigger 触发时机 string ""
bgcolor 背景颜色 color white
1:bool 类型即 “1” 为 true，其他情况都是 false 2:eventlist 的详细说明请参看 Ctrl Event Trigger
title 标题
控件的标题，其显示方式受控件的具体类型和显示模式影响。
一般的在 basic 模式下所有控件都不显示 title，其他模式下，只有标题型控件需要在控件内部显示标题。 当控件放置在表格中后，其标题将会固定显示在表格的表头。
bgcolor 背景色 默认值为空，表示白色
布局属性
属性名称 说明 取值类型 默认值
flex 控件弹性比例 uint nil
flexgrow 弹性拉伸比例 uint nil
flexshrink 弹性收缩比例 uint nil
alignself 自身对⻬方案 enum stretch
width 控件宽度 uint nil
63

    控件通用属性
          height 控件高度 uint nil
         minwidth 最小宽度
         minheight 最小高度
         maxwidth 最大宽度
         maxheight 最大高度
         margin 四周边距 int nil
         marginleft 左外边距 int nil
         marginright 右外边距 int nil
         margintop 上外边距 int nil
         marginbottom 下外边距 int nil
         marginvertical 垂直外边距 int nil
         marginhorizontal 水平外边距 int nil
    独立控件属性 独立控件通用属性

color 前景色 不同的控件对前景色影响的显示内容不同，其默认值也有所差异，请参看具体控件内部的定义。
没有特别说明的，其默认值均为 black value 值
控件默认值，通过该属性对控件的默认值进行设定。 不过有的控件并不支持(或者说不方便)在 IDE 中直接设置默认值，例如定位控件，拍照控件，附件控件等。
输入型控件通用属性
readonly 只读
属性名称 说明 取值类型 默认值 Flycode
color 渲染颜色，主要影响文字和图标的颜色 color black
value 控件值 根据控件类型决定 根据控件类型决定 ✅
属性名称 说明 取值类型 默认值 支持 Flycode
readonly 是否只读 bool false ✅
fontsize 字体大小 uint 14
fontweight 字体粗细
mode 控件显示样式，参看样式说明
64

控件通用属性
Bool 类型的值，控制是否允许用户对控件值进行修改，默认值为 false 当值为 true 时，可能会影响控件的显示，具体的看各个控件的 UI 设计
fontsize 字体大小 影响范围:

1.  以下属性在控件中显示的文本:title，text，value，placeholder，required 2. 以下控件输入框内的文字，选择框内的文字，
    mode 样式
    指定控件的显示模式，通常不用手动配置，由上一级的布局控件传递。 显示模式会影响显示的很多细节，例如
    margin，input area border 等，详细可以参看 样式说明 。 标题型控件通用属性
    属性名称 说明 取值类型 默认值 支持 Flycode placeholder 当值为空时显示的占位文字 string nil
    placeholder 占位文字 应该说绝大部分标题型控件都有该属性，但部分由于其 UI 的特殊性，该属性不会生效，例如 photo 控件。
    属性关联 :当 readonly == true 时，改属性无效。 required 是否必填
    如果是必填，该属性会在控件的 title 的前方绘制 \* ，没有标题时，也会在合适的位置绘制，可以参看 textinput 控件的 UI 示例。
    该属性为 true 时，会在执行 datasubmit 事件时触发对应控件的合法性校验。校验不通过，该事件将会执行失败。 默认的提示信息是“请输入 XXX”，XXX 就是 title 的值。
    校验的时机如下:
1.  当控件初始化完成后，第一次进行输入时，输入过程中不进行校验，直到输入完成(也就是输入框失去焦点后)， 开始第一次校验。
1.  在第一次校验之后，用户对该控件的每次输入均需要实时进行校验。
1.  校验顺序是必填校验->内置规则校验
    tips 提示信息
    对该控件使用的提示，支持一个字符串信息，可以是纯文本，也可以是一段 HTML。 配置了该属性的控件在控件的最右边出现一个提示按钮，点击后弹出该提示文本。 如果该控件是作为表格的列控件嵌入表格时，该提示按钮会出现在对应的表头，而控件自身不再显示该提示按钮。
    标题型控件通用属性
    required 是否必填，支持 bool false ✅
    tips 提示信息 string nil
    65

        控件通用属性
         属性名称

    titlewidth
    titleflex
    说明 取值类型
    标题的绝对宽度 uint 标题的相对宽度 float
    默认值
    nil
    0.3
    原本这两个属性值适用于左右布局的标题型控件。但是由于很多在移动端使用上下布局的控件，在 web 端依然是 使用左右布局，因此所有的的标题型控件都有这些属性。只不过在移动端显示为上下布局的控件，这两个属性不 生效。
    titlewidth 标题宽度 通用属性，默认值为 0，设置具体的固定标题宽度。
    如果想让标题宽度固定，就需要设置该值，并设置 titleflex=0 titleflex 标题宽度占比
    约定标题宽度所占控件区域的比例。计算出的具体宽度值需要向上取整。 空值表示由控件自动决定标题显示宽度; 0.0~1.0 表示标题宽度占比，例如 0.5 表示标题和输入框的宽度相同，平分可用区域。 默认值为空，具体的自动调整规则 如下

1.  对于 web 端，始终使用 0.3 做为占比。
1.  对于移动端，控件会使用 0.33 做为占比。
    选项值控件通用属性
    属性名称 说明 取值类型 默认值
    hiddenclearbtn 是否能清空数据 bool 0
    multiselectable 是否允许多选 bool
    options 控件内置选项 array nil
    options.text 选项显示值 string nil
    options.key 选项值 string nil
    options.isselected 是否默认选中 bool 0
    multiselectable 是否允许多选
    Bool 值，默认为 0 单选，该选项可能会影响控件的 UI 展现。
    由于用户习惯和 UI 限制，有的选项值控件也不支持多选，例如 dropdownbox options 静态选项
    大部分的选项值控件(包括级联选项值控件)都可以通过直接配置静态选项值来提供选项。不过类似于 picklist 这类 的控件，其设计的初衷就是为了提供当有大量选项时能方便操作的，这类控件就不支持静态选项。
    如果一个控件配置静态选项，又通过外部设置(如 datarequest 事件)了动态选项，此时会将这两部分选项合并，静态 选项出现在最前面。
    级联选项值控件通用属性
    属性名称 说明 取值类型 默认值
    66

            控件通用属性
             intermediateselectmode 非叶子节点的选择模式

    intermediateselectmode 非叶子节点选择模式 用于指定非叶子节点的选择模式，默认为 disable ，即不能选择非叶子节点
    hideroot 是否隐藏根节点
    textstyle 选中值文本显示⻛格
    options.id 选项 id string nil
    options.parentid 选项父节点 id string nil
    Value Meaning
    disable 不能选择中间节点
    shortcut 中间节点不参与取值，但可以作为叶子节点选择的快捷方式影响叶子节点选择
    individual 中间节点独立取值，此时选择某个中间节点不会影响其子节点的选择状态
    gather 中间节点的选择会影响子节点选择，同时与子节点一起参与取值
    related 中间节点的选择会影响子节点选择，取值时只取分支中的最高的节点值
    从实现⻆度看
    功能点 disable shortcut individual gather related
    中间节点是否能选择 ✅ ✅ ✅ ✅
    中间节点是否参与取值 ✅ ✅ ✅
    父节点选中时子节点是否参与取值 ✅ ✅ ✅
    单选时是否有效 ✅ ✅
    容器控件属性 容器-布局控件通用属性
    属性名称 说明 取值类型 默认值
    flexdirection 布局方向 enum vertical
    justifycontent 主轴方向控件布局规则 enum flexstart
    alignitems 次轴方向控件布局规则 enum stretch
    flexwrap 主轴方向自动换行 bool false
    content 包含的控件列表 array nil
    padding 四周外边距 int nil
    paddingleft 左内边距 int nil
    paddingright 右内边距 int nil
    paddingtop 上内边距 int nil
    paddingbottom 下内边距 int nil
    67

        控件通用属性

    paddingvertical
    paddinghorizontal
    容器-数组值控件通用属性 待总结完善
    垂直内边距
    int nil
    水平内边距
    int nil
    属性名称 说明 取值类型 默认值
    pageable 分⻚大小 uint 0
    checkable 是否可以勾选行 bool false
    isradio 是否支持单选 bool false
    68

控件通用事件触发点
Ctrl Event Trigger onload
所有的控件都有 onload 事件 该事件在控件被加载(渲染)的时候调用
page ⻚面的 onload 事件在表单加载(此时控件还未开始加载)时调用
onrefresh
所有支持刷新内容的控件都有该事件 例如:list，table 等
onvaluechange
所有的录入型控件都有 onvaluechang 事件 该事件在控件的值发生改变时调用，注意，只有是在用户直接输入导致的值改变才会调用，其他方式(例如事件赋值
等)造成的值改变，不触发该事件
录入型控件有:
textinput, textinputarea, filtertextinput, currencyinput, datepicker, photo, attachment, location, picklist, selectbox, cascade
onloadoptions
所有的选项值控件都有 onloadoptions 事件 该事件在控件的选项为空，且用户点击了控件，需要显示选项时调用。 暂时不可用
onloadsuboptions
所有的级联选项值控件都有 onloadsuboptions 事件 该事件在控件的当前需要加载的选项层的选项为空时调用。该事件需要将子选项层的 parentid，也就是当前选中的选项
的 id，作为参数传入，约定的参数名为 \_\_optionid 暂时不可用
onclicked
所有的可点击控件具有该事件
该事件在用户点击控件后触发
69

控件通用事件触发点
可点击控件有: button，rows
onchecked
所有的数组值容器控件均有这个事件
该事件在控件可选择行的情况下，用户点击行(list)，或者点击对应的 checkbox(table)时，触发该事件。该事件需 要将当前选中的行的数量用参数传出，约定的参数名为 \_\_checkednumber
70

控件数据存取 Component 摘要
Ctrl Component
目前只有复合值控件有 component 的特性，该特性会影响控件的 value 的格式，也会影响事件中能绑定到的控件 component 种类。
所有的基础控件都有一个叫 value 的 component，用来获取控件的完整值
photo Component
暂无
Value
[
{
} ]
"source": "http://xxxxx.png", "thumbnail": "http://xxxxx.png", "timestamp": "123456789.000",
"latitude": "123.12345",
"longitude": "123.12345",
"address": "广州市天河区体育⻄路 101 号 32 楼", "country": "中国",
"province": "广东省", "city": "广州市", "district": "天河区", "street": "体育⻄路", "number": "101 号"
attachment Component
暂无
Value
location Component
[
{
} ]
"source": "http://xxx/xxx/123.png", "filename": "合同附件照片",
"type": "image/png"
71

控件数据存取 Component 摘要
name
latitude
Value
value
meaning
123.12345
纬度
longitude 123.12345 经度
address 广州市天河区体育⻄路 101 号 32 楼 地址
{
"timestamp": "123456789.000",
"latitude": "123.12345",
"longitude": "123.12345",
"address": "广州市天河区体育⻄路 101 号 32 楼", "country": "中国",
"province": "广东省",
"city": "广州市",
"district": "天河区",
"street": "体育⻄路",
"number": "101 号"
}
dropdownbox Component
Value
selectbox Component
Value
name value meaning
text leve1 显示名称
key 1 实际值
{
"text": "leve1", "key": "1"
}
name value_single_sel value_multi_sel meaning
text 男 男\ 女 显示名称
key 1 1\ 2 实际值
//单选 {
72

控件数据存取 Component 摘要
"text": "男",
"key": "1" }
// 多选 [
{
"text": "男",
"key": "1" },
{
"text": "女",
"key": "2" }
]
cascade Component
name value_single_sel value_multi_sel meaning
text 天河区 天河区\ 白云区 显示名称
textpath 广东省.广州市.天河区 广东省.广州市.天河区\ 广东省.广州市.白云区 显示名称
key 111 111\ 112 实际值
keypath 1.11.111 1.11.111\ 1.11.112 实际值
id 11101 11101\ 11102 id 值
idpath 10001.11001.11101 10001.11001.11101\ 10001.11001.11102 id 值
Value
// 单选 {
"text": "天河区",
"textpath": "广东省.广州市.天河区", "key": "111",
"ketpath": "1.11.111",
"id": "11101",
"idpath": "10001.11001.11101"
}
// 多选 [
{
"text": "天河区",
"textpath": "广东省.广州市.天河区", "key": "111",
"ketpath": "1.11.111",
"id": "11101",
"idpath": "10001.11001.11101"
}, {
"text": "白云区",
"textpath": "广东省.广州市.白云区", "key": "112",
"ketpath": "1.11.112",
"id": "11102",
"idpath": "10001.11001.11102"
73

控件数据存取 Component 摘要
} ]
DateRange Component
Value
name value meaning
start 1503474204557 开始时间
end 1503474204558 结束时间
{
"start": "1503474204557", "end": "1503474204558"
}
74

枚举值
Ctrl Enum Value
枚举类型默认都直接使用字符串作为协议内部值
Flex Layout 布局类枚举值 flexdirection
下个版本改为 column 和 row justifycontent
value meaning
vertical 垂直分布
horizontal 水平分布
value meaning
flexstart 起始对⻬
center 居中
flexend 结束对⻬
spacebetween 空白均分到 item 之间
spacearound 空白均分到 item 四周
alignitems
value meaning
flexstart 起始对⻬
center 居中
flexend 结束对⻬
stretch 拉伸
baseline 基准线对⻬
spacebetween 空白均分到 item 之间
spacearound 空白均分到 item 四周
Other 其他枚举值 color
颜色接受两种取值，一种是十六进制的颜色编码，如 #ffffff ;一种是颜色枚举值 red ，如下面表格所示 value meaning hex
75

枚举值
darkblack
深黑 0x000000
black 黑 0x2E2E2E
lightblack 浅黑 0x4A4A4A
darkgray 深灰 0x6B6B6B
gray 灰 0x8B8B8B
lightgray 浅灰 0xC4C4C4
greyishwhite 灰白 0xEEEEEE
white 白 0xFFFFFF
lightgreen 浅绿 0x58D7B8
green 绿 0x09C194
darkgreen 深绿 0x16A085
blackishgreen 暗绿 0x417505
brightgreen 亮绿 0x7ED321
red 红 0xE53C51
darkred 暗红 0xD0021B
blue 蓝 0x4A90E2
lightblue 淡蓝 0xC2DEFF
textalign
fontweight
currencykind
暂时使用字符串
currencyunit
暂时使用字符串
value meaning
left 左对⻬
center 居中
right 右对⻬
value meaning
lighter 细
normal 普通
bold 加粗
76

枚举值
dateunit
year
ctrlmode
datadrillingtype
functiontype
icon
需要完善，暂不启用
图标命名规则为
description_size_color
value
meaning
年
month 月
day 日
hour 时
minute 分
second 秒
value meaning
plain 平整模式
card 卡片模式
free 自由模式
value meaning
drilldown 向下钻取
replace 替换钻取
value meaning
default 默认类型
store_visit ⻔店拜访
Icon Name Icon Usage
disclosureIndicator_small_gray 指明可以点击查看详情等
disclosureIndicator_small_blue 指明可以点击查看详情等
processing_middle_blue 标志处理中
complete_middle_green 标志已完成
77

枚举值
addnew_middle_blue 通常用于新增
sort
排序控件的值为枚举值，为空的时候表示不参与排序
Value Meaning
asc 升序
desc 降序
78

    图标库

Icon Library
图标库为平台和产品共同提供组建起来的内置图标集合。
如果适用于特殊场景的非通用图标，不在此处描述，只要遵守命名约定，自行集成使用即可。
为了方便进行动态组合，目前所有的内置图标均使用中等粗细的线状图标
图标使用场景
目前图标可以在两种控件中使用: icon , button 。
icon 可以根据控件的 color 属性来改变自身的颜色，同时控件需要根据实际需要，调整 icon 的显示尺寸。目前默认提供
的 dp 为 32\*32 的图标，所以如果需要更大尺寸的图标，需要产品自行添加。 目前手机端使用的 png 格式的图标，而 web 端使用的是 svg 的，所以 web 端可以不受尺寸限制
图标命名规则
平台库
平台库的图标遵循以下规则: 基础名称 + [ _附加说明 ]。 例如: del , arrow*up
其中的附加说明是可选的，通常是适用范围的描述
产品库
为了避免命名冲突，产品库需要增加一个缀: 前缀* + 基础名称 + [ _附加说明 ]。 例如: kx_del
平台库
平台主要提供一些通用类型的图标
基础
类型 说明 栗子
基础 基本适合任何场景的图标 添加，删除
⻔店 适用于常用的⻔店相关图标 头像
人员 适用于常用的人员相关图标
产品 适用于常用的产品相关图标
图标名称 图标示例 图标名称 图标示例
79

    图标库

add del
edit refresh
enable disable
import export
position location
calendar clock
search submit
sort filter
category list
exchange shoppingcart
default_image
⻔店
人员
产品
产品库
产品库将按行业分类，不同的行业只需集成进对应行业的图标基本就可以了
图标名称 图标示例 图标名称 图标示例
图标名称 图标示例 图标名称 图标示例
password account
图标名称 图标示例 图标名称 图标示例
80

图标库
快销行业
81

基础控件清单
OverView
本章节将对所有的基础控件进行详细的讲解。
所谓基础控件，可以简单的理解为不能包含其他控件的控件。
82

Viewer 展示型控件
Viewer
显示型控件，这类控件只是用于显示数据，或者提供一些不包含数据操作的用户行为响应，不提供数据输入的功能。不
过依然可以取值和赋值，赋值操作由内部的行为执行，而不是用户输入。
83

    button 按钮

Button
可用于绑定事件，给用户点击触发该事件
按钮示例
按钮说明 示例
只有文字
属性说明
只有图标
图标+文字
有边框
有背景色
{
"type": "button",
"code": "delbutton", "displaytype": "success", "text": "删除",
"icon": "delete",
"customicon": "", "bordervisible": "1",
"color": "0x2E2E2E",
"bgcolor": "0x2E2E2E", "bgstyle": "",
"disabled": "0",
"fontsize": "",
"fontweight": "", "functioncode": "234234233234", "eventlist": [
{
"trigger": "onclicked", "handler": "delhandler"
} ]
}
displaytype 按钮样式 提供快捷的默认按钮样式实现，目前支持以下几种取值:
primary , success , warning , danger , info , text
当按钮设置了该属性后，将会忽略 color, bgcolor, bordervisible 的属性设置，直接使用对应的内置样式，具体内置样式的 对应关系如下:
84

    button 按钮

样式 color bgcolor
default 默认 blue 无 1
bordervisible
primary 主要 white blue 0
success 成功 white green 0
warning 警告 white orange 0
danger 危险 white red 0
info 信息 darkgray 无 1
text 文本 blue 无 0
text 按钮文字 Button 控件上面的文字标识
disabled 是否禁用 bool 值，默认值为 false，设置按钮是否可以点击。
readonly 属性对按钮控件并不起效，需要使用该属性来控制是否允许点击 icon 按钮图标
设置 Button 上的图标(平台内置图标)，图标的大小由按钮的高度决定，需要等比缩放到按钮宽高中教小的一边的一半 大小的矩形区域中。参看 icon 控件说明。
customicon 自定义图标 填写一个产品添加的内置图标，一旦设置了该值，icon 属性会失效
bordervisible 是否显示边框
默认值为 1 ，即需要显示，同时默认边框宽度为 1px
fontsize 字体大小 指定字体大小，默认值为 16
fontweight 字体粗细
functioncode 关联功能点
功能点 code，用于标明该按钮所绑定的功能点。当该属性不为空，且当前用户没有该绑定的功能点权限时，需要隐藏该 按钮。
值 说明
lighter 细体
normal 常规，默认值
bold 粗体
85

button 按钮
该属性对控件是否隐藏的优先级控制高于 hidden 属性，即通过功能点判断需要隐藏的按钮，就无需再解析 hidden 属性; 反之，如果功能点判断需要显示时，才会继续解析 hidden 属性，最终决定按钮是否隐藏。
color 颜色 通用属性，前景色，会控制文字，图标，还有边框的颜色
bgcolor 背景色 背景色
bgstyle 背景样式 参看 Icon 中的说明
取值规则
按钮的 value 属性可以用来设置或获取按钮的 title
按钮颜色控制
按钮目前定义三种状态， normal ， highlight ， disable 。这三种状态，目前只需要设置 normal 状态的颜色，其他两 种会自动生成。
其中 highlight 为按钮点中时的状态，此时是将 color 和 bgcolor 设置为透明度 30%的状态;
disable 分两种情况，设置了 bgcolor，则将其调整为灰色，color 调整为白色;否则就只将 color 调整为灰色。
状态 颜色调整说明 无背景示例 有背景示例
normal ~
highlight 透明度变为 30%
disable 置灰
86

dynamictext 动态文字
DynamicText
用于显示需要根据值显示不同的文本，或者图标的情况。
属性说明
{
"type": "dynamictext", "value": "", "textalign": "", "options": [
{
"key": "1",
"text": "待拜访", "icon": "", "color": "", "bgcolor": ""
} ]
}
textalign 文字对⻬方式 请参看 text 的 textalign 属性说明
对⻬方式将对 text 和 icon 同时起效 options 值转换字典
动态文本的值与显示内容的映射关系，已经对应的显示内容的属性。目前只支持在 IDE 中固定配置 key 键值
控件值与该属性值相等时，使用该选项的属性绘制控件
text 文字 显示的文字
icon 图标
显示的图标，图标的设置规则与 icon 控件的赋值规则一致。
同时有图标的文字的时候，图标在文字的左方，固定 5dp 的间距。 color 前景色
该选项表现出的前景色，会使用该值对文字或图标进行着色处理
bgcolor 背景色 该选项表现出的背景色。
87

dynamictext 动态文字
如果动态文本本身配置了 color 或者 bgcolor 属性，则当选项的对应颜色属性为空时会使用这些值，也就是说颜 色值优先取选项的配置，如果没有配置则使用控件的配置。
配置说明
动态文本不支持根据值动态设置大小，调整布局，因此应该再配置时，给动态文本分配好合适的大小
88

functionmenu 功能菜单
Function Menu
功能菜单
{
"type": "functionmenu", "code": "300000000005555", "dataitems": [
{
"icon": "",
"title": "工作", "pagecode": "", "hidden": "", "dataitems": [
{
"title": "今日拜访",
"icon": "",
"subtitle": "",
"pagecode": "3196098397675000030", "hidden": ""
}, {
} ]
}, {
"title": "统计",
"icon": "",
"subtitle": "",
"pagecode": "3196098397675000020", "hidden": ""
"icon": "", "title": "我", "pagecode": "", "hidden": "", "dataitems": [
{
"icon": "",
"title": "下载管理",
"pagecode": "buildin:settingdownloadmanager", "hidden": ""
}, {
"icon": "",
"title": "退出",
"pagecode": "buildin:settinglogout", "hidden": ""
} ]
} ]
}
dataitems
数据项，用于配置具体的功能项，目前支持两级
dataitems.icon
功能项的图标
dataitems.title
89

functionmenu 功能菜单
功能项的标题
dataitems.pagecode
功能项所关联的表单
dataitems.hidden 功能项的隐藏条件，支持 flycode
90

icon 图标
Icon
图标控件，用于展示应用内置图标的控件。
属性说明
{
"type": "icon",
"code": "1112120000013", "value": "position_gray", "color": "",
"width": "",
"height": "", "bgcolor": "", "bgstyle": ""
}
bgcolor
指定背景颜色，当 bgstyle == none 时，该设置无效 bgstyle
指定背景样式，有以下取值
取值 显示文本 含义 示例
none 无背景 默认值，直接显示图标，此时控件的尺寸就是图标的尺寸
circle 圆形 使用高度的一半作为圆⻆半径
round 圆⻆矩形 默认圆⻆ dp 为 3
rectangle 矩形 无圆⻆
取值
简单文本信息，即为图标的名称
赋值
使用图标的名称进行赋值
91

icon 图标
Icon 缩放示例
当有背景的时候，需要自动等比缩放图标的尺寸，使其宽高都不大于控件宽高的一半。
示例如下
92

image 图片
Image
用于显示图片的控件，可以用于展示产品示意图，或者显示头像等，只接受一个图片地址，自动下载显示，并能根据名
称自动缓存图片。
Protocol
{
"type": "image",
"value": "http://xxxxxx.png", "width": "100",
"height": "100", "aspectratio": "", "thumbenable": "0", "enlargeable": "0", "masktype": "", "displaymode": "", "eventlist": [
{
"trigger": "onclicked", "handler": "213213254545"
} ]
}
value
支持两种格式:

1. 完整路径
   根据完整的路径直接下载图片，图片根据文件名称进行缓存。
2. 相对路径
   根据通用的图片路径组装规则进行组装，然后下载。 相对路径目前是以 json 形式提供，通常都是由业务行为获取然后赋值。
   即:缩略图 IP + "/thumbs" + "/img" + 相对路径 ，原图 IP + "/file" + "/img" + 相对路径 本地缓存需要避免文件名可能重复的问题。
   enlargeable
   是否能显示大图，默认为 0 ，如果可以显示，则点击后可以全屏显示大图，同时会屏蔽 onclicked 事件。 masktype
   93

image 图片
遮罩层样式，默认值为 round
| 值 | 显示文本 | 含义 | | ------ | --------- | --------- | | none | 无，即矩形，默认值 | | | round | 圆⻆矩形 | 默认的圆⻆半
径为 5 | | circle | 圆形 | | aspectratio
主要用于移动端，float 类型的值，指明宽高比，即其值为 宽度/高度 ，例如 aspectratio == 2 表示宽度为高度的两 倍。默认值为 1
displaymode
只在 aspectratio 有值的情况下有效，如果 aspectratio 没有值，则默认使用 aspectfit 方式
| 值 | 含义 | | ---------- | ------------------------- | | fill | 拉伸图片，完整显示图片并充满显示区域，默认值 | | aspectfill | 保持宽高比拉伸图片，需要充满显示区域，同时居中显示 | | aspectfit | 保持宽高比拉伸图片，需要完整显示图片， 同时居中显示 |
图片加载时序
本地已缓存图片
本地已缓存缩略图片
94

image 图片
本地未缓存图片
95

image 图片
UI Sample
UI Annotation Sample
96

image 图片
97

interactiveWebview 交互式网⻚
Interactive Web View
移动端的交互式 WebView 控件，用于实现更加个性化的展示⻚面。 该控件支持数据的显示，表单链接，数据请求等，但不支持数据采集。
{
"type": "interactivewebview", "refreshable": "1",
"topic": "homepage", "eventlist":[
{
"trigger":"onload", "handler":"loaddata"
}, {
"trigger":"clickkpi",
"handler":"handler_code1" },
{
"trigger":"clickvisitstore", "handler":"handler_code2"
}, {
"trigger":"linktosomepage",
"handler":"handler_code3" }
] }
refreshable
是否支持下拉刷新，如果支持，将会在下拉后执行 onrefresh 对应的事件。
topic
所有的资源文件所在的文件夹的名字，控件将会在该文件夹下面找名字为 page.html 的表单⻚面进行加载 eventlist
和其他的控件一样，用于指定事件触发点的地方，不同之处在于，该控件除了固有的 onload , onrefresh 等事件 外，还可以自定义添加 trigger
WebView 调用控件方法 目前需要实现一个能够触发控件事件的接口即可
trigger
调用外部事件的触发关键字，用于在控件的 eventlist 中查找 trigger 属性的值与之相等的的对应的 handler 事件
进行执行。
params
function xpe_callEvent(trigger, params, completion); xpe_callEvent('linktosomepage', null, null)
传递出来的参数，可以是数组或者是字典类型的 json 数据，该参数可以为空
98

interactiveWebview 交互式网⻚
目前只接受 String 类型为 key 的字典型数据作为参数 completion
事件执行完成后的回调方法，接收三个参数
completion(isSuccess, errorMsg, returnParam)
目前这三个参数均没有返回，只是简单告知事件执行结束
控件调用 WebView 的方法 该方法应该由该控件内嵌⻚面的编写者在其 JavaScript 代码中实现
data
接收到的数据，可以是数组或者是字典类型的 json 数据
key
接收到的数据用途的字符串类型的标识，由控件在原始参数中获取约定字段 \_\_interactive_key 的值，可以为空
获取用户信息的方法
由于大多数情况下，还需要获取用户信息，因此提供一个方便的方法给⻚面编写者调用
该方法返回用户的基本信息，在通过回调 completion 返回结果，参看 xpe_callEvent 中的 completion
function xpe_reciveData(data, key);
function xpe_userInfo(completion);
99

text 文字
Text
Text 控件用于展示普通的文本信息，不可编辑。 Text 支持简单的字体，排版和颜色等 style 设置
Protocol 协议
linenumber 最大显示行数
指定 Text 内容的最大显示行数。 0，默认值，表示不限制行数。 其他正整数，表示最多能显示几行。
color 前景色 用于指定字体和边框颜色，默认值为 #4A4A4A
textalign
指定文字对⻬方式，支持 left，center，right 三种取值，默认值为 left bordervisible
指定是否显示边框，默认值为 0，即不显示。边框宽度为 1px，颜色为 color 指定的颜色。
Value Format
UI Sample
{
"type": "text",
"linenumber": "", "bgcolor": "", "color": "", "textalign": "", "bordervisible": "0"
}
{
"ref": "stringValue"
}
100

text 文字
UI Annotation
基本的 size，margin 等，都是 Shelf 提供的，只不过由于 Text 通常在默认的 fontSize 下，会在垂直方向上留下更多的间 隔，为保持整体 UI 的整洁一致性，垂直方向的 margin 由一下公式得出
( 初始可使用区域高度 - 单行文本高度 ) / 2
Test Sample
Attribute Test Sample
101

text 文字
A News Sample
102

text 文字
103

text 文字
104

webview 网⻚
Web View
web 内容显示控件，支持直接显示 html 内容，或者显示一个 URL 对应的内容
Protocol
该控件为基础显示控件，具备基础显示控件的所有属性
value
显示内容，支持两种格式的内容，目前可通过查看是否以 http 开头来判断类型
| 内容分类 | 内容示例 | | ------ | ------------------------ | | 链接 | http://xx.xx.xx | | json 文本 | 一段存储了 json 内容的字符
串，详细查看下方说明 | displaymode
显示模式
| 模式值 | 说明 | | ------- | ---------------------------------------- | | content | 直接在控件内部显示出其内容，如果其值为链 接，则直接显示链接对应的⻚面 | | link | 以链接按钮的形式显示，使用 title 作为链接按钮的标题。点击该控件后通过 链接到新的一个⻚面去显示其内容 |
Json Data Structure
{
"type": "webview",
"title": "重要通知",
"value": "http://.....", "displaymode": "content|link"
}
{
"body": "<!--IMG#0--><p>正文内容</p>", "images": [
{
"ref": "<!--IMG#0-->",
"pixel": "250*200",
"alt": "",
"src": "http://xxx.xx.xx.xx/img/xxx.jpg"
} ]
}
Web 控件的值为一个 json 结构的数据 body
显示的正文，为 html 文本内容，其中的图片全部使用图片占位符。 images
文本内容中所引用的所有图片的信息
105

webview 网⻚
| 字段名 | 说明 | 示例 | | ----- | --------------------------------------- | ------------------ | | ref | 图片占位符，， index 为自增 的正整数 | | | pixel | 图片的像素 | 250\*200 | | alt | 图片替换文字 | 产品图 | | src | 图片完整 url 地址 | http://xxx/xxx.jpg |
前端在具体解析的时候，需要先将图片占位符替换为本地的占位图片，然后再去一次下载图片，图片下载完
成后，再替换占位图片。
106

Inputer 录入型控件
Inputer
输入型控件，一般指用于数据采集的控件，这类控件都具有允许用户输入数据的能力。
107

address
Address
用于地址录入，可以手动输入地址并指定经纬度，或者根据建议选择合适的地址。 与控件 location 的却别在于，后者用于获取当前的位置信息，而前者没有此限制。
108

address
109

address
Protocol
Component
与控件 location 保持一致
目前赋值只接受 value 和 address
{
"type": "address", "title": "⻔店地址", "readonly": "0", "value": ""
}
name value meaning
coordinate 123.12345\ 123.12345 坐标
address 广州市天河区体育⻄路 101 号 32 楼 地址
110

address
Value
目前的场景中地址录入的经纬度不是强制性的，所以可以为空，只有 address 这个字段是必须的
Event Trigger
onload onvaluechange
{
"latitude": "123.12345",
"longitude": "123.12345",
"address": "广州市天河区体育⻄路 101 号 32 楼"
}
111

attachment
Attachment
附件上传和浏览
112

attachment
Protocol
{
"type": "attachment",
"code": "ctrl_attachment_contractattachment", "title": "附件上传",
"readonly": "",
"maxnumber": "1",
"accept": "image/png,image/jpg,text/txt,", "maxsize": "300"
}
maxnumber
最大允许上传的附件的数量
accept
允许上传的附件的格式
| Type | Description | Example of typical subtypes | | ------------- | ------------------------------------------------------------ | --- --------------------------------------------------------- | | text | Represents any document that contains text and is theoretically human readable | text/plain , text/html , text/css , text/javascript | | image | Represents any kind of images. Videos are not included, though animated images (like animated gif) are described with an image type. | image/gif , image/png , image/jpeg , image/bmp , image/webp | | audio | Represents any kind of audio files |
113

attachment
audio/midi , audio/mpeg , audio/webm , audio/ogg , audio/wav | | video | Represents any kind of video files | video/webm , video/ogg | | application | Represents any kind of binary data. | application/octet-stream , application/pkcs12 , application/vnd.mspowerpoint , application/xhtml+xml , application/xml , application/pdf |
maxsize
允许上传的附件文件大小的最大值，以 mb 为单位描述
Value Format
[
{
} ]
"source": "http://xxx/xxx/123.png", "filename": "合同附件照片",
"type": "image/png",
"date": "13896564452214" "filesize": "58962"
该格式为附件取值和赋值时的数据格式需求
source
filename
type
文件的类型
date 文件上传的日期，时间戳 size 文件的大小，单位为 byte
114

calendar
Calendar
日历控件用于使用日历进行单个日期选择，其功能类似于 date 控件，只不过 calendar 在表单中显示更多的信息，并 且只能选择天。
带 cell 的日历
115

calendar
Day 模式
116

calendar
Protocol
{
"type": "calendar",
"value": "day(0)",
"lowerlimit": "year(-1)", "upperlimit": "year(1)", "displaymode": "month|week", "hinttype": "dot", "celldisplaymode": "popup|follow", "cells": [
{
"type": "layout", "name": "dayworkDetail", "bgcolor": "", "flexdirection": "", "content": [
{
"type": "text",
"code": "545313246431324354",
"name": "storename" },
{
"type": "text",
"code": "987965464623132345",
"name": "visitesummary" },
{
"type": "date",
"readonly": "1",
"code": "987965464623132345", "name": "visitedate"
117

calendar
}
...... ]
"eventlist": [ {
"trigger": "onload",
"handler": "" },
{
"trigger": "onclicked", "handler": ""
} ]
}
} ],
value
使用日期表达式设置默认选中的日期，默认为当天
range
用于指定所能选择的日期的范围，默认不限制
displaymode
显示模式，指定可以以哪几种显示模式进行显示，可以指定一个或多个模式，以 | 竖线分割。
默认显示为指定模式中的第一个模式，空值代表只支持显示为月模式。
| 模式值 | 名称 | 含义 | | ----- | ---- | ---------------------------------------- | | week | 周模式 | 以周为单位显示，左右滑动切 换周 | | month | 月模式 | 以月为单位显示，左右滑动切换月 | | year | 年模式 | 暂时不支持 | | day | 日模式 | 以极简 的显示单日的模式显示，左右点击切换天，中间点击弹出月模式的日历。(该模式下不支持配置 cells，不支持与其 他模式组合) |
模式切换时，如果 cells 为空，或者 cells 的显示模式不是 follow，则需要根据实际显示的大小，调整控件的大 小，然后重新布局。
hinttype
快捷提示类型，用于指定直接显示在日历上的提示内容的类型。默认值为 dot
| type | 含义 | | ---- | --------- | | dot | 显示一个小圆点 | | text | 显示一段简短的文字 |
快捷提示是日历内置的特有显示内容，具体配置方式⻅下方说明
celldisplaymode
详细内容显示模式，目前支持两种显示
| value | 说明 | | ------ | ---------------------------------------- | | popup | 使用一个弹出框显示其内容，弹框大小根据其内容 多少决定(暂不实现) | | follow | 详细内容显示在日历下方，即日历控件会分为两个显示部分，上方为日期显示， 下方为内容显示。日期显示部分剩余就是内容显示区域，这要求日历控件本身的大小要足够同时显示这两部分内容 |
cells
详细内容的显示定义，这部分内容在选中某一天之后，根据其对应的数据进行显示。 当配置了这部分内容后，点击某一天就不再触发 onclick 事件。
目前设置为数组结构，预留多模板的支持
118

calendar
eventlist
| trigger | 说明 | | --------- | ------------------- | | onload | 加载时触发 | | onclicked | 点击某一天，且 cells 内容为空时触发 |
Value
约定的字段 **calendar_date 可用于获取日期的时间戳
Hint
目前日历只提供 flycode 方案进行数据赋值，快捷提示的内容也来源于日历控件的数据之中，其数据字段与显示的绑定关 键字定义如下
关键字 含义 值示例
**calendar_hint_date
后台返回的数据结构
对应的日期，以时间戳为值 1515811194
**calendar_hint_color 显示的颜色，默认为 black red
**calendar_hint_text 显示内容，hinttype==dot 时会忽略该值 233
[
{
}, {
} ]
"visitedate": "1503474204557", "storename": "天河好又多", "visitesummary": "xxxxxxxxx", "visitestatus": "1"
"visitedate": "1503474254235", "storename": "天河 7-11", "visitesummary": "xxxxxxxxx", "visitestatus": "0"
FlyCode 组装后的数据结构
// 通过 flycode 组装后的数据示例 [
{
"__calendar_hint_date": "1503474204557", "__calendar_hint_color": "green", "visitedate": "1503474204557", "storename": "天河好又多", "visitesummary": "xxxxxxxxx", "visitestatus": "1"
}, {
} ]
"**calendar_hint_date": "1503474254235", "**calendar_hint_color": "red", "visitedate": "1503474254235", "storename": "天河 7-11", "visitesummary": "xxxxxxxxx", "visitestatus": "0"
119

calendar
120

cascade
Cascade
级联筛选框 手机端 UI
Web 端 UI
多选 UI
121

cascade
支持非子节点选择需要弹出新的界面选择(手机端)
122

cascade
Protocal
{
"type": "cascade",
"code": "ctrlcode_region", "title": "行政区域选择", "placeholder": "", "multiselectable": "0", "intermediateselectmode": "", "textstyle": "simple", "eventlist": [
{
"handler": "",
"trigger": "onvaluechange" },
{
"handler": "handler_getregionoption", "trigger": "onload"
} ]
}
123

cascade
multiselectable, intermediateselectmode
参看 picktree
hideroot 是否隐藏根节点，默认值为'0' textstyle
Value Meaning
summary 简要显示 full 完整显示
hiddenclearbtn
参看 日期控件 的对应属性
Component
参看 picktree
Value
参看 picktree
Event Trigger
onload onvaluechange
Single Selection Sample
天河区
广东省 广州市 天河区
Multi Selection Sample
天河区，白云区
广东省 广州市 天河区，广东省 广州市 白云区
124

checkbutton
CheckButton
用于标记一个 Bool 状态的控件，只有固定的两个值
Protocol
value
取值为 checkvalue 和 uncheckvalue 指定的值中的一个，默认为 uncheckvalue 的值 checkvalue
勾选时所代表的值，可以不设置，默认为 1
uncheckvalue
未勾选时所代表的值，可以不设置，默认为空串 ""
{
"type": "checkbutton", "title": ""，
"text": "是否已铺货", "value": "0", "checkvalue": "1", "uncheckvalue": ""
}
125

currency
Currency 货币输入
Protocol
{
"type": "currency",
"code": "ctrl_currency_contractamount", "title": "签约金额",
"placeholder": "请填写合同签约金额", "required": "1",
"upperlimit": "",
"lowerlimit": "",
"currencycode": "CNY",
"unit": "元",
"thousandsseparators": "0", "decimaldigits": "0",
"minus": "0",
"minusstyle": "0"
}
upperlimit & lowerlimit
金额的最大值和最小值限制值，默认为空，表示没有限制
如果用户输入的值超出了范围，则需要提示用户
126

currency
这两个属性可以作为该控件的 component 在 setter 中进行赋值
currencycode
货币种类代码，会影响金额前面的货币符号显示，默认值为空，使用 ISO 4217 标准 常用的有
| 货币种类 | 值 | 符号 | | -------- | ------- | ---- | | 人⺠币 | CNY | ¥ | | 美元 | USD | $ | | 欧元 | EUR | € | unit
货币单位，值为一个字符串，直接显示在金额后面，例如 元 ， 万元 等 默认值为空，表示不显示单位
thousandsseparators
千位分隔符是否显示，0 表示不显示，1 表示显示，默认值为 1
decimaldigits
小数点位数，正整数，默认值为 2，0 表示不能输入小数
minus
是否能输入负数，bool 值，默认为 1
minusstyle
负数显示⻛格
| 取值 | 显示示例 | | ---- | ------------------------------------ | | 0 | - ¥ 100,000 元 | | 1 | - ¥ 100,000 元 | | 2 | ¥ 100,000 元 | | 3 | (¥ 100,000 元) | | 4 | (¥ 100,000 元) |
Value Component
value
控件值，格式为 "200000.00" lowerlimit
最小值，格式为 "20.00" upperlimit
最大值，格式为 "99999999.99"
127

datepicker
Datepicker
日期选择控件，允许用户选择一个时间点，目前支持现在到某天，或者某分钟两种选择模式
128

datepicker
Protocol
{
"type": "datepicker",
"title": "签约日期",
"value": "day(0)", "displaystyle": "normal|slider", "lowerlimit": "",
"upperlimit": "",
"unit": "day",
"customoptions": [
{
"text": "上午",
"key": "hour[7, 11]" },
{
"text": "下午",
"key": "hour[13，17]" }
],
"format": "auto", "hiddenclearbtn": "0"
}
displaystyle 显示样式【目前只实现了 normal】模式
| 样式名称 | 说明 | | -------- | ------------------------------------------------------------ | | normal | 普通模式，即各系统默认的 显示模式。年,月选择通常使用下拉框，或者滚轮。 | | slider | 游标模式，使用游标选择，适合选项值较少的情况。 | | adjuster | 微调模式，使用增减按钮，以 unit 为单位微调日期 | | calendar | 日历模式，通常是弹出选择界面，方便 用户快速选择日期。 |
lowerlimit
所能选取的日期的最小值，日期描述格式(详细请参看下方定义) 默认值为空，表示不限制
upperlimit
所能选取的日期的最大值，日期描述格式 默认值为空，表示不限制，upperlimit 不为空的时候，其值不能小于 lowerlimit
129

datepicker
unit
选择单位，决定了控件能够控制的时间精度。支持以下单位
| 单位 | 含义 | 显示值示例 | | ------- | ------------------------------------ | ------------------------ | | year | 年 | 2018 | | month | 月 | 2018-10 | | day | 天 | 2018-10-01 | | week | 年周，以年为上级单位【暂未实现】 | 2018-10-01 至 2018-10-07 | | hour | 小时 | 2018-10-01 10 | | minute | 分钟，默认值 | 2018-10-01 10:10 | | quarter | 刻钟，以 15 分钟为最小单位 【暂未实现】 | 2018-10-01 10:15 |
customoptions 自定义单位，在 unit 的基础上进一步自定义更小的时间单位，例如协议中示例的上午和下午的定义。
text
自定义选项的显示名
key
自定义选项所代表的时间值，使用时间表达式表达，其单位应小于 unit 所规定的时间单位 自定义单位在 unit 的单位小于天时无效，例如 minute ， quarter
value
默认值为 day(0) ，表示当前时间，空值表示没有默认的日期值，需要显示 placeholder format
值显示的格式化方式
unit = day 时，默认值为 yyyy-MM-dd
unit = minute 时，默认值为 yyyy-MM-dd hh:ss hiddenclearbtn
是否能清除已选择的数据，默认值为 0 ，表示可以清除。
Value
date 为单值控件，其值为所选日期的时间戳的字符串
小于 unit 指定的单位的部分的值为未定义的值，无意义，例如 unit=day 时，值里面的时分秒数据无意义，可以是 任何值
Component
1503474204557
类型 返回值示例 说明
text 2018-10-22
返回控件的显示字符串，即根据 format 格式化之后的字符 串
rangetext 2018-10-01, 2018-10-31 根据 unit 的值，生成对应的起止时间的文本
rangevalue 1503474204557, 根据 unit 的值，生成对应的起止时间的时间戳 1503478656884
130

datepicker
日期描述格式 目前日期描述格式只需要识别 day(0) 即当日即可
绝对日期描述
表示明确的描述出具体的日期，可以由以下几种格式分别描述不同单位的时间
//时间点
2017 //年 2017-02 //月 2017-02-17 //日 2017-02-17 10 //小时 2017-02-17 10:30 //分钟
//时间段
2017-02-17, 2017-03-12
绝对时间描述也支持时间戳，例如
相对日期描述
本级单位的相对日期描述
即使用当前时间为基准，并按指定的时间单位对当前时间进行相对运算的表达方式，例如:
父级单位的相对日期描述
即使用当前时间为基准，并按指定的时间单位的父级单位对当前时间进行相对运算的表达方式，例如:
支持该描述方式的单位必须要有合法的父级单位，以下是有父级单位的单位列表
| 单位 | 父级单位 | | ------ | -------- | | month | year | | weak | year | | day | month | | hour | day | | minute | hour | 混合使用
即本级单位和父级单位混合使用的情况，例如
1503474204557, 1503474254235
//相对当前日期的时间点 year(-1) //去年 month(0) //本月 day(-1) //昨天
//相对于当前日期的事件段 week(0, 2) //未来 3 周 day(-2, 2) //前天到后天
//时间点 month[0] day[-1] hour[8]
//时间段 month[0, 2] hour[7, 11]
//当前年份的 1 月 //上个月最后一天 //早上 9 点
//一月到三月 //早上 8 点到 12 点
year(-1).month[2] //去年三月
131

datepicker
year(1).month[1] //明年二月 year(0).week[1].day[0] //今年的第二个周一
过去时间自动描述规则
距离当前的时间 显示的时间内容 示例
当天 且 小于 2 分钟 显示刚刚 刚刚
当天 且 小于 1 小时 mm 分钟前 20 分钟前
当天 且 大于等于一小时 上午/下午 h:mm 下午 6:00
昨天 昨天 a h:mm 昨天 下午 6:22
前天 前天 a h:mm 前天 上午 9:10
前天之前 yyyy-MM-dd HH:mm 2017-06-23 18:40
132

daterange
DateRange
提供选择一个时间段的能力的控件。
133

daterange
Protocol
{
"code": "",
"type": "daterange",
"title": "合同有效期", "displaystyle": "normal|calliper", "unit": "day",
"value": "year(-1, 1)", "lowerlimit": "",
"upperlimit": "",
"mindiff": "",
"maxdiff": "",
"format": "",
"customoptions": [
{
"text": "上午",
"key": "hour[7, 11]" },
{
"text": "下午",
"key": "hour[13，17]" }
], }
lowerlimit，upperlimit，unit，format，displaystyle，customoptions
这些属性请参考 Date ，其含义和用途都是一致，只不过在 daterange 中这些属性会同时作用于开始时间和结束时
间
value
和 datepicker 一样，支持时间表达式，具体参考 Date
mindiff
所能选择结束时间和开始时间最小差值，单位与 unit 保持一致，正整数，默认值为 nil 示例如下:
unit == day && maxdiff == 2 意味着结束日期必须在开始日期的两天之后
mindiff = nil 表示开始时间和结束时间可以是相同的值 maxdiff
134

daterange
所能选择结束时间和开始时间最大差值，单位与 unit 保持一致，正整数，默认值为 nil maxdiff 不为空的时候，其值不能小于 mindiff
示例如下:
unit == month && maxdiff == 0 意味着结束时间必须与开始日期在同一月 maxdiff = nil 表示不限制
无论 mindiff 和 maxdiff 如何配置，都要保证 结束时间 > 开始时间
场景举例 选择任意时间段
只能选择当天开始之后的 60 天范围内的某一天
只能选择当天开始之后的 30 天范围内的某 7 天
只能选择指定日期之后的 1-3 天时间
Component
{ "min": "", "max": "", "mindiff": "0", "maxdiff":""}
{ "min": "day(0)", "max": "day(59)", "mindiff": "0", "maxdiff":"0"}
{ "min": "day(0)", "max": "day(29)", "mindiff": "6", "maxdiff":"6"}
{ "min": "2017-07-02", "max": "", "mindiff": "0", "maxdiff":"2"}
name value meaning
start 1503474204557 开始时间
end 1503474204558 结束时间
text 2018-10-01,2018-10-31
starttext 2018-10-01
endtext 2018-10-31
Value
{
"start": "1503474204557", "end": "1503474204558"
}
135

daterange
136

dropdownbox
DropDownBox
选择框
Protocal
// 静态选项 {
"type": "dropdownbox",
"code": "ctrlcode_storelevel", "title": "终端级别", "hiddenclearbtn": "0", "eventlist": [
{
"handler": "",
"trigger": "onload" },
{
"handler": "",
"trigger": "onvaluechange" },
{
"handler": "",
"trigger": "onloadoptions" }
], "options": [
{
"text": "level1", "key": "1", "isselected": "1", "status": "1"
}, {
} ]
}
"text": "level2", "key": "2", "isselected": "0", "status": "1"
hiddenclearbtn
137

dropdownbox
参看 日期控件 的对应属性
Component
Value Component name
text
key
value
meaning
leve1
1
显示名称
实际值
当没有设置 Component 时，默认值为 key Option Component
name value meaning
text leve1 显示名称
key 1 实际值
isselected 1 是否默认选中，Bool 类型
status 1 1:启用;2:停用
停用的选项将不会出现在下拉列表中显示，即用户无法选择已停用的选项 如果用户先前选择的选项被停用，那么显示时依然显示为该停用的选项，同时在控件上标注 停用 标识
value
所有的选项值类型的控件，如果直接获取其 value 就相当于获取 key 如果想要获取完整值，需要使用专用的 fullvalue 作为 component
// 单选 {
"text": "leve1",
"key": "1" }
// 多选 [
{
"text": "leve1", "key": "1"
}, {
"key": "2" }
]
"text": "leve2",
138

location
Location
定位控件，用于获取使用者当前的地理位置，可以重新定位，也可以支持对定位地点进行微调纠偏。 定位控件的是一 个 mutable ctrl 多值控件，可以通过其 subref 进行子值的获取
定位控件如果没有初始值，这回自动获取当前定位，并每隔 1 分钟刷新一次定位结果;如果有初始值，则不会启动定 位，直接显示当前值。
Protocol 协议详解
displaytype 显示模式
【暂未实现】，统一使用 normal 模式
定位控件的显示类型，适用于不同的 UI 环境，有 3 种取值: normal =0 ， mini =1 ， particular =2。
adjustradius 微调半径 【暂未实现】
微调半径，由于定位受各种因素影响，定位不准的时候，用户可以手动在一定范围内微调。 值为正整数，表示可微调 的距离，以米为单位。 默认值为空，表示不可微调。配置平台可以不用设置具体数字填写的功能，只提供“不可微 调”，“200 米”，“500 米”，“1000 米”，“不限制”这几个选项选择即可。
{
"type": "location",
"code": "pagelistcontrol2", "title": "当前位置", "displaytype": "normal", "adjustradius": "", "offlinelocatable": "1"
}
139

location
不限制，表示用户可以自由的调整定位点，通常用于采集⻔店的地位置等场景，此时取值为 0。 详细的微调方式，请参 看下方的说明。
offlinelocatable 离线定位 【暂未实现】，统一支持离线定位
是否支持离线定位，离线状态下，无法获取地址信息，默认值为 1 ，即支持离线定位
Value Format
定位控件的值的类型是 Location
exception
定位过程中出现的异常种类目前只有以下两种取值
Feature
定位控件有以下一些特别的功能。
Map View 在成功定位的情形下，可以通过点击地址信息，可以跳转到地图，并标注出定位点信息
Exception Handle 定位会有很多异常的情况，针对不同的情况，我们应该给出对应的友好的提示或响应，有以下几 种情况

1. 定位权限未开启 此时可以提供开启权限的指引。
2. 定位失败 提示用户失败，并且可以给出常⻅的定位失败的原因。
3. 没有网络 提示用户没有网络，只能获取到经纬度，不能获取到详细的地址信息。 4. 获取地址编码失败 提示用户，并告知用户常⻅的失败的原因。
   Location Adjust
   UI Sample
   {
   "latitude": "123.12345",
   "longitude": "123.12345",
   "address": "广州市天河区体育⻄路 101 号 32 楼", "exception": "0"
   }
   取值 含义
   0 没有异常
   1 地址获取失败
   140

location
UI Annotation
141

location
Test Sample
142

number
Number
专⻔用于数字输入的控件，支持小数，负数等。
Protocol
{
"type": "number",
"title": "数字输入", "placeholder": "",
"value": "100",
"minus": "0", "decimaldigits": "0", "lowerlimit": "10", "upperlimit": "1000", "thousandsseparators": "0", "unit": "个",
"addable": "1",
"addcount": "1"
}
lowerlimit , upperlimit, minus, decimaldigits, thousandsseparators, unit
以上属性请参考 Currency addable 是否支持快捷加减操作。
143

number
addcount 快捷加减每次添加的数量值，默认值为"1"。
Value
请参考 Currency
144

numberrange
NumberRange
【暂未实现】
Protocol
{
"type": "numberrange", "displaystyle": "calliper|input", "value": "15,100",
"minus": "0",
"decimaldigits": "0", "upperlimit": "",
"lowerlimit": "", "thousandsseparators": "0", "unit": "个"
}
Component
Value
name value meaning
min 15 最小值
max 100 最大值
{
"min": "15",
"max": "100" }
145

numberrange
146

peoplelist
Peoplelist
Protocol
{
"type": "peoplelist", "multiselectable": "", "displaystyle": "", "peopletype": "", "eventlist": [
{
"trigger": "onload", "handler": ""
}, {
"handler": "" }
"trigger": "onvaluechange",
] }
displaystyle
147

peoplelist
显示模式
name
选项显示为完整名字
avatar
选项显示为头像，没有头像的使用姓氏
peopletype
人员类型，有以下几种取值
| value | meaning | - | | ----- | ------- | ---- | | | | |
Component
Value Component name
key
single value
multi value
["10001","10002"]
text 小王 ["小王","小李"]
Option Component
10001
name value meaning required
key 10001 id YES
text 小王 姓名 YES
namepinyin xiao wang 姓名拼音 NO
department IT 管理部 部⻔ NO
position 系统管理员 职位 NO
phonenumber 18922222222 电话号码 NO
avatar http://xxxxx/xxxx.png 头像 NO
Value
// 单选 {
"id": "10001",
"name": "小王" }
// 多选 [
{
"id": "10001",
"name": "小王" },
148

peoplelist
{
"id": "10002",
"name": "小李" }
]
149

period
Period
时期选择控件，允许用通过描述性的选项，来选择一段时间区间。
例如以下情形
描述
取值(格式化之后)
今年
前天
2017-1-1 00:00,2017-12-31 00:00
2017-5-8 00:00,2017-5-8 11:59
同时也允许用户进行自定义时间区间，此时的行为就和 DateRange 一致，只不过
Protocol
{
"type": "period",
"title": "时期选择", "value": "", "customizable": "1",
"max": "",
"min": "",
"unit": "day",
"format": "", "displaystyle": "dropdown", "options": [
{
"text": "过去 7 天", "key": "day(-7, -1)"
}, {
"key": "day(-30, -1)" },
{
"text": "上个月", "key": "month(-1)"
} ]
"text": "过去 30 天",
150

period
}
customizable
是否可以自定义，Bool 值
当该值为 1 的时候，需要自动在选项中增加 Customer 选项
max, min, unit, format
这些属性和 daterange 中的含义一致，并且只在自定义选项中起效
displaystyle
显示模式，目前支持两种取值
| 取值 | 含义 | | -------- | -------------------------------- | | dropdown | 下拉显示，类似于 dropdownbox | | button | 按钮显 示，类似于 selectbox 的 button 模式 |
options
选项集合，目前该控件只支持固定选项，不支持动态选项
text
显示文字，用于描述时期
key
时期的实际值，为了和其他选择控件的协议保持一致，依然使用 key 作为属性名称。 该值接受日期描述格式进行赋值
Component & Value
取值方式参看 daterange
151

phonenumber
PhoneNumber
用于电话号码，包括手机号码和座机
Protocol
{
"type": "phonenumber", "title": "电话号码", "countrycode": "none", "enablecall": "0", "enablesendmessage": "0", "maxlength": "",
"legaltype": "mobile|landline"
}
countrycode
国家编码录入要求，有以下取值
| Value | Meaning | | -------- | ---------------------------------- | | none | 无需输入，不显示输入区域，默认值 | | optional | 可选输入，显示输入区域，如果当前控件时必填的，也不检测该值 | | required | 必须输入，显示输入区域，无论控 件是否必填，只要输入了号码就要校验该值 |
enablecall
是否允许拨打电话，Bool 值，默认为 0 当控件是只读的时候，点击控件可以拨打电话;当控件是可编辑时，点击电话图标可拨打电话。 拨打电话前需要提示用户。
enablesendmessage
是否允许发送短信
maxlength
只在 legaltype 为空的时候起效，用于控制最多输入的字符数，
legaltype
对电话号码的校验规则，可以有一个或多个规则，规则之间用 | 分割，目前只有两种规则，空值表示不进行有效 性校验。
152

phonenumber
无论控件是否必填，只要输入了号码，且校验规则不为空，就需要进行有效性校验
^(0\\d{2,3}-\\d{7,8}(-\\d{3,5}){0,1})|(((13[0-9])|(15([0-3]|[5-9]))|(18[0,5-9]))\\d{8})$
| Value | Meaning | RegExp | | -------- | -------- | ------ | | mobile | 手机号码，默认值 | | | landline | 座机号码 | |
Component
只有 value
Value
countrycode 和号码会合并为一个字符串，作为该控件的值，例如
Event Trigger
onvaluechange
+86 18922221111
02088889999
153

photo
Photo
用于获取用户照片的控件，可以拍照或者从手机相册中选取， web 没有该控件
Protocol
{
"type": "photo",
"code": "ctrl_photo_contractphoto", "title": "合同拍照",
"maxnumber": "1",
"compression": "2",
"source": "0",
"enablevideo": "0",
"watermark": "fly:datetime()", "watermarkposition": "", "watermarkstyle": "", "watermarkcomposite": "", "storage": "storage-3m", "consecutive": "0",
"eventlist": [
{
"handler": "handler_checkprerequisite", "trigger": "ontake"
}, {
"trigger": "onvaluechanged" }
"handler": "handler_loaddetail",
] }
maxnumber
可保存拍照控件最大张数，默认为 1 可拍一张 compression
154

photo
压缩程度
| 取值 | 说明 | 图片大致大小 | | ---- | ----------------- | ------------ | | 0 | 最大压缩 | 10K 左右 | | 1 | 1 级压缩(默认值) | 30K 左右 | | 2 | 2 级压缩 | 90K 左右 | | 3 | 3 级压缩 | 200K 左右 | | 4 | 4 级压缩 | 500K 左右 | | 5 | 5 级压缩 | 1M 左右 | | 10 | 无压缩 | 原图 |
enablevideo
【暂不实现】
是否可以拍摄视频， bool 型数据，默认为 0
视频也会根据 compression 的设置进行适当的压缩。
目前视频的最大⻓度默认为 15s ，未来可能会开放设置。
视频也会根据 watermark 的设置添加水印。
source
照片来源
| 取值 | 说明 | | ---- | --------- | | 0 | 默认值，从相机获取 | | 1 | 从相册获取 | | 2 | 从相机或者相册获取 |
watermark
照片水印，支持返回 String 类型值的 flycode，返回值即为水印需要显示的内容，可以在返回的字符串中插入换行符 \n 来达到换行的效果。
如果该属性为空，默认使用当前的时间作为水印(默认水印获取失败时不返回错误信息)。
水印同时支持返回错误提示信息，即当水印无法正常生成时，可以通过返回指定格式的字符串，来标识获取水印失
败。当水印获取失败后，
错误提示字符串的格式为: **error: + hit message ，例如:
水印生成的时机
用户在每次确认获取的照片时(即使用相机拍摄成功并确定使用照片时，或者使用相册确定选择了某张照片
时)，生成该照片的水印。
如果水印获取失败，即返回了错误信息时，需要显示该错误信息，并中断后续的操作。此时需要提供一个提
示选项，让用户选择放弃此次获取的图片，或者再次尝试获取水印。直到正确获取水印后才能真正使用照
片。
watermarkposition
指定水印显示位置，默认值为 bottom
| 值 | 说明 | | ------ | ------------ | | bottom | 下方，左对⻬ | | center | 居中 | | top | 上方，左对⻬ |
watermarkstyle
水印显示的样式，默认值为 clear
| 值 | 说明 | | ------ | ------------------------------------------ | | clear | 直接覆盖在图片之上，白色 14 号字，黑色阴影 | | darken | 将使用 dark blend 模式，白色 28 号字，黑色阴影 |
字体大小目前为统一的算法: max(11, ceil(image.width/25))
"**error:尚不能获取地址信息，请稍候再试。" "\_\_error:请先选择需要投放的终端。"
......
155

photo
watermarkcomposite
水印合成方式，默认值为 blended 。
| 值 | 说明 | | -------- | ------------------------------------------------ | | blended | 水印直接合成在原始图片上 | | attached | 水
印存储在照片的值当中，需要在显示的时候临时合成 |
consecutive
临时属性，用于标记是否使用连续拍照相机。主要是用于过度期间测试新相机功能。等新相机稳定后则去除该属 性。默认值为 0 ，即使用旧相机。
storage
照片在后台的存储位置，用于指导上传图片的最终位置，影响其存储生命周期。
| 值 | 说明 | | --------- | ------------------ | | def | 默认值，兼容旧环境 | | temporary | 3 分钟 | | shortterm | 1 天 | |
longterm | 1 年 |
详情请参看 阿里云存储服务
Value Format
source
存储图片文件的名称。
datetime
照片拍摄的时间的时间戳
watermark
照片的水印，只在 watermarkcomposite == attached 时有效
storage
照片存储位置。
取值时，直接使用控件属性 storage 的值;赋值时优先使用该值进行图片下载。
Value Component
fileinfo
获取文件的本地信息，包含完整路径和时间戳
[
{
} ]
"source": "xxxxx.jpg", "datetime": "845623154531", "watermark": "广州市天河区", "storage": ""
[
{
"filepath": "", "datetime": ""
156

photo
} ]
图片的上传与下载 交互
157

Picker
Picker
选项型控件，同样也是一种输入型控件，但是其输入的内容受到限制，只能在提供的有限的选项集合中进行选择。
158

picklist
Picklist
选择列表，用于大数量的简单选项(key-value)选择，支持多选和单选，支持搜索。 目前，picklist 选项不支持分⻚，所有选项一次性获取到之后，由前端自行实现搜索功能。
Protocol
{
"type": "picklist", "multiselectable": "0", "title": "所属供货商", "eventlist": [
{
"handler": "",
"trigger": "onvaluechange" },
{
"handler": "",
"trigger": "onload" }
], }
159

picklist
赋值规则 取值说明
Component
name single value
text 天河区经销商
multi value
天河区经销商 _荔湾区经销商
key 1001 1001 \_1002
value
{"text": "天河区经销商", "key": [{"text": "荔湾区经销商","key": "1001"},{"text":"leve2","key": "1001"} "1002"}]
注意:由于 | 符号在表格中显示容易有问题，文档表格中使用 _ 替代 | ，实际的取值时用的是 | value 的取值其实是 json 格式的字符串，为了方便理解，其格式化之后的值为如下格式
// 单选 {
"text": "天河区经销商",
"key": "1001" }
// 多选 [
{
"text": "荔湾区经销商", "key": "1001"
}, {
"key": "1002" }
]
"text": "leve2",
160

picktree
Picktree
选择树，例如部⻔，行政区域等，与控件 cascade 的协议和功能基本一致，只是显示方式不同，Picktree 目前只应用于 web 端，手机端请使用 cascade 控件
Protocol
161

picktree
{
"type": "picktree",
"code": "ctrlcode_picktree", "title": "行政区域",
"searchable": "0", "multiselectable": "0", "intermediateselectmode": "disable", "showcase": "1",
"eventlist": [
{
"handler": "handler_loadoptions", "trigger": "onload"
}, {
"trigger": "onvaluechange" }
"handler": "",
] }
{
"type": "datarequest",
"desp": "获取行政区域", "logiccode": "832886477808603136", "mode": "2",
"pagingsize": "",
"sorter": [],
"getter": [],
"setter": [
{
"name": "region", "datatype": "1", "ctrl": {
"code": "ctrlcode_picktree",
"scrop": "" },
"properties": [ {
"name": "region_key", "ctrl": {
"code": "",
"component": "key" }
}, {
}, {
}, {
}, {
"name": "region_name", "ctrl": {
"code": "",
"component": "text" }
"name": "region_id", "ctrl": {
"code": "",
"component": "id" }
"name": "region_parentid", "ctrl": {
"code": "",
"component": "parentid" }
"name": "region_isselected", "ctrl": {
162

picktree
"code": "",
"component": "isselected" }
} ]
} ]
}
searchable
是否允许搜索，bool 类型，默认值为 0 ，即不能搜索 目前只支持对 text 值进行搜索，并且支持对非叶子节点的搜索。 showcase
是否显示已选择选项的列表。
Component Value Component
name value_single_sel value_multi_sel meaning
text 天河区 ["天河区","白云区"] 显示名称
textpath 广东省.广州市.天河区 ["广东省.广州市.天河区","广东省.广州市.白云区"] 显示名称
key 111 ["111","112"] 实际值
keypath 1.11.111 ["1.11.111","1.11.112"] 实际值
id 11101 ["11101","11102"] id 值
idpath 10001.11001.11101 ["10001.11001.11101","10001.11001.11102"] id 值
fullvalue
Option Component
与 Value Component 基本一致，增加了一个 parentid
name value meaning required
text 天河区 显示值 YES
textpath 广东省.广州市.天河区 显示值路径 NO
key 111 key 值 YES
id 11101 id 值 YES
keypath 1.11.111 key 路径值 以下三项至少要有一项
idpath 10001.11001.11101 id 路径值
parentid 10001 父节点 id 值
isselected 1 是否默认选中，Bool 类型 NO，默认为不选中
163

picktree
Value
所有的选项值类型的控件，如果直接获取其 value 就相当于获取 key 如果想要获取完整值，需要使用专用的 fullvalue 作为 component
fullvalue
// 单选 {
"text": "天河区",
"textpath": "广东省.广州市.天河区", "key": "111",
"ketpath": "1.11.111",
"id": "11101",
"idpath": "10001.11001.11101"
}
// 多选 [
{
"text": "天河区",
"textpath": "广东省.广州市.天河区", "key": "111",
"ketpath": "1.11.111",
"id": "11101",
"idpath": "10001.11001.11101"
}, {
} ]
"text": "深圳市", "textpath": "广东省.深圳市", "key": "12",
"ketpath": "1.12",
"id": "12101",
"idpath": "10001.12001", "isselected": "1"
Event Trigger
onload onvaluechange
164

relevance
Relevance
web 端:穿梭式多选控件，现阶段实现特定场景，一个类似下拉框触发装置，点击弹层出现多选框，勾选点击确认 备注:目前只有 web 端存在该类型控件
如下图:
input 模式:
button 模式:
展开
Protocol
{
"type": "relevance",
"code": "ctrlcode_relevance",
165

relevance
"title": "人员选择",
"searchable": "0",
"searchplaceholder": "输入名称或编号查找", "multiselectable": "0",
"placeholder": "请选择", "defaultsetting": "1",
"displaystyle": "input",
"eventlist": [
{
"handler": "handler_loadoptions", "trigger": "onload"
}, {
"trigger": "onvaluechange" }
"handler": "",
] }
{
"condition": "",
"code": "handler_loadnavtreedata10", "actions": [
{
"mode": "1",
"condition": "",
"code": "893045688856875087", "getter": [
{
"datatype": "0", "ctrl": {
"code": "",
"scope": "" },
"name": "pl_orgstruct", "properties": [
{
"ctrl": {
"component": "",
"code": "" },
"name": "parentorgstructid",
"value": "" },
{
"ctrl": {
"component": "",
"code": "" },
"name": "orgname",
"value": "" }
] }
],
"\_type_spe": "controlbind", "logiccode": "110000000000000000", "type": "datarequest",
"setter": [
{
"datatype": "1",
"name": "pl_orgstruct",
"ctrlcode": "8827922899010887811145345", "properties": [{
"ctrl": { "component": "key", "code": ""
},
"name": "orgstructid"
166

relevance
}, { "ctrl": {
"component": "text",
"code": "" },
"name": "orgname" }]
} ],
"queue": "0",
"desc": "控件值绑定" }
],
"key": "",
"desc": "营销区域", "notice": ""
}
searchable
是否允许搜索，bool 类型，默认值为 1 ，即默认能搜索
目前只支持对 text 值进行搜索。
searchplaceholder
如果允许搜索能自定义搜索框的 placeholder 文本
multiselectable
是否允许多选，bool 类型，默认值为 1 ，即默认多选;
defaultsetting
是否允许设置默认项，bool 类型，默认值为 1 ，即默认允许;
isstatis
是否使用统计值模式，bool 类型，默认值为 0 ，即默认不使用;
备注:不使用，input 模式输入框显示勾选项目的文本字符，使用，显示替换统计数目后的自定义模版文本如:已选 择${xxx}人 => 已选择5人
statisformat
自定义模版文本:已选择${xxx}人，结合 isstatis 使用
displaystyle
显示模式，目前支持两种取值
| 取值 | 含义 | | ------ | ------------------ | | input | input 表单模式，表单上展示选中值 | | button | 按钮显示 |
Component
备注:多选模式，传參结构为数组结构
name value_single_sel value_multi_sel meaning
text 天河区 [''天河区', '深圳市'] 显示名称
key 111 ['111', '12'] 实际值
167

relevance
Value
如果 getter 中绑定的 component 是 value ，就意味着需要使用完整值，使用 json 结构传输数据，具有一个特殊字段 isdefault 表示该项是否被设置为默认值
isdefault:
'1' : 内容项被设置为默认
'0' : 内容项未被设置为默认 备注:一组提交数据内容中必须存在且只能一项能被设置为默认
// 单选 {
"text": "天河区",
"textpath": "广东省.广州市.天河区", "key": "111",
"ketpath": "1.11.111",
"id": "11101",
"idpath": "10001.11001.11101", "isdefault": "1"
}
// 多选 [
{
"text": "天河区",
"textpath": "广东省.广州市.天河区", "key": "111",
"ketpath": "1.11.111",
"id": "11101",
"idpath": "10001.11001.11101"， "isdefault": "1"
}, {
} ]
"text": "深圳市", "textpath": "广东省.深圳市", "key": "12",
"ketpath": "1.12",
"id": "12101",
"idpath": "10001.12001"， "isdefault": "0"
Event Trigger
onload onvaluechange
168

selectbox
SelectBox
选择框，把常⻅的 checkbox 和 radiobox，以及筛选选项合为一个控件 Web
web 端通常都是使用左右布局
mobile mobile 端通常使用上下布局
buttonMode
按钮模式，以按钮形式显示选项
169

selectbox
Protocal
{
"type": "selectbox",
"code": "ctrlcode_storelevel", "name": "性别选择",
"value": "",
"title": "性别", "multiselectable": "0", "colnum": "0",
"displaystyle": "", "eventlist": [
{
"handler": "",
"trigger": "onvaluechange" },
{
"handler": "",
"trigger": "onload" }
], "options": [
{
"text": "男",
"key": "1" },
{
"text": "女",
"key": "2" }
] }
colnum 列数 选项排列的列数
0 表示自动布局，会根据选项内容的⻓度，自动使用合适的列数 >0 的正整数 表示指定显示列数，默认值为 0
displaystyle 显示模式
Value Meaning
170

selectbox
check 勾选框模式，默认值，会根据单选或者多选在 UI 上有所不同 button 显示为按钮组的模式
无论单选多选，选中的选项再次点击均可取消选中状态
默认值说明
可以通过 value 属性设置默认值。 如果没有设置默认值，将没有默认
Value Formart
参看 DropDownBox
171

sortbutton
SortButton
专⻔用于触发排序的按钮控件，通常只能配置在 filter 控件中。
Protocol
{
"type": "sortbutton", "code": "sortbuttoncode", "text": "销量",
"value": "",
"valuesets": "",
"color": "0x2E2E2E", "eventlist": [
{
"trigger": "onclicked", "handler": "delhandler"
} ]
}
value
排序按钮的值有以下 3 种:
| value | meaning | | ----- | ------- | | desc | 降序 | | asc | 升序 | | nil | 无排序 | 默认值为 nil
无论 valuesets 中是否有 nil , 该控件的默认值均为 nil valuesets
用于指定排序按钮的取值范围，使用以上 3 种值中的一个或多个，使用 | 分割符连接，来确定控件的取值范围。 例如: desc|asc 表示控件只有两种取值，当点击该按钮时，该控件的值在这两个值之间来回切换。
默认情况下，也就是该属性为空的情况下，使用全部值，即 desc|asc|nil color
用于控制 desc 和 asc 两种值的显示颜色， nil 始终显示为灰色 #6B6B6B
Value
直接返回 value 值，如: "desc" ，或者 "nil"
172

sortbutton
173

switch
Switch
用于提供一个用作开关功能的控件。
Protocal
displaystyle
默认值为 slider，即滑块样式;checkbox 为勾选框样式。
Value
1 表示打开(选中)状态，其他值均为关闭(未选中)状态
{
"type": "switch",
"text": "同意以上协议", "displaystyle": "checkbox|slider"
}
174

textinput
Textinput
用来给用户提供单行文本输入功能的控件，用来填写较短的内容，通常由一个标题和一个输入框组成。 同时，由于一 般填写的内容都会有一定的规则限制，因此当不符合设定规则时会给出相应提示信息。
Protocal 协议
{
"type": "textinput", "code": "",
"title": "", "titlewidth": "", "titleflex": "", "placeholder": "", "readonly": "", "maxlength": "", "verificationrule": "", "securetextentry": ""
}
maxlength 最大字符⻓度 表示最大输入字符数，当输入字符数超出时，截断输入。0 或者空表示无限制，正整数表示对应的限制数量。 默认值为
100。
inputaid 辅助输入手段
【暂不实现】
辅助输入手段，即在键盘输入之外，提供的额外的输入手段:
verificationrule 校验规则
内置的文本校验规则，可以接受一个正则表达式或者内置的校验类型。
其中正则表达式需要有 regex: 前缀，后面跟自定义的表达式，当校验不通过的时候，提示 格式不正确
内置校验类型为引擎提供的常⻅的规则的快捷设置，用户只需要在 IDE 选择类型即可。各端在具体实现的时候，可以使 用正则表达式，也可以使用其他方式来校验。当用户设置了内置校验类型后，错误提示语需要根据该类型进行调整。
正则表达式的格式如下:
取值 含义
voice 语音输入
scan 扫码输入
{
"verificationrule": "regex:^[0-9]\*$"
}
175

textinput
内置校验类型格式如下:
详细说明如下
{
"verificationrule": "weixin"
}
标识 含义 规则 错误提示语
zipcode 邮编 6 位数字 邮编格式不正确
tels 短号 3-6 位数字 短号格式不正确
fax 传真 数字开头 传真格式不正确
mail 邮箱 邮箱格式 邮箱不符合规范
weixin 微信 字母开头 6~20 位字母或数字 微信号格式不正确
qq QQ 5~20 位数字，不能以 0 开头 QQ 号码不符合规范
id 身份证 15 位数字或 18 位二代身份证类型 身份证号不符合规范
// 参考正则 {
"zipcode": "^\d{6}$",
"tels": "^\d{3,6}$",
"fax": "^(\d{3,4}-)?\d{7,8}$",
"mail": "^\w+([-+.]\w+)@\w+([-.]\w+).\w+([-.]\w+)*$", "weixin": "^[A-Za-z0-9]\w{5,19}$",
"qq": "^[1-9]\d{4,19}$",
"id": "^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))((0-2)|10|20|30|31)\d{3}[0-9Xx])|(^[1-9]\d{5}\d{2}((0[1-9 ])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$"
}
securetextentry
安全输入标识， bool 值， 1 表示需要使用安全输入方式，通常用于密码输入。默认值为 0
UI Sample
176

textinput
UI Annotation 标注
说明:

1. 错误信息显示溢出区域，是指错误信息与其他 UI 部分重叠的地方，由于大部分时候错误信息都是不显示的，为了尽 量利用屏幕显示有用信息，需要有一定的溢出显示能力。
2. 当出现错误时，如果 required=1，则此时需要隐藏控件头部的\*号。
   Animations
   177

textinput
178

textinputarea
TextInputArea
文本输入区域控件，用于输入较多的文字，如备注信息等。 其与 TextInput 由很多相似的属性和 UI 特征，可以参看两者 的 UI 效果图进行对比。 由于多行文本输入通常不涉及到数据有效性校验，因此 TextInputArea 没有相关属性。
Protocol 协议详解
{
"type": "textinputarea", "code": "",
"title": "",
"placeholder": "", "maxlength": "", "maxvisiblelinenumber": "", "linebreakenable": ""
}
maxlength 最大字符⻓度
与 TextInput 的 maxLength 属性相同，用于控制最大输入的字符数。0 表示无限制，正整数表示相应的限制数量。默认值 为 200。 与 TextInput 不同，对于超出数量限制的字符并不截断，而只是进行剩余字符数量提示，并且在之后的提交或保 存操作中，提示其输入超过限制。 剩余字符数量提示规则如下
minvisiblelinenumber 最小可⻅行数 表示最小的可显示的行数，默认值为 3，不能小于 3。该值决定了大文本框的默认高度。
maxvisiblelinenumber 最大可⻅行数
表示最大的可显示的行数，0 表示无限值，其余>=3 的正整数表示最大可显示的行数。 maxvisiblelinenumber 不能小于 minvisiblelinenumber，当小于时，默认使用 minvisiblelinenumber 的值。
默认为 3，此时随着用户的输入，控件会不断的增加高度，以显示全部分输入内容。 其他情况下，当输入的内容行数超 出限制时，控件就不再增高，此时可以继续输入，控件内部的输入框可以上下滚动查看内容。
linebreakenable 允许输入换行
表示是否允许输入回⻋符。0 表示不能，1 表示能，默认值为 0。 当不能输入回⻋时，点击键盘的回⻋表示完成输入;否 则就是进行换行。
当剩余字符数<=10 时，开始显示提示;>10 提示消失。 剩余字数为负数时，显示为红色;正数时为灰色。 当提示的剩余字符数为正数时，控件获得焦点时显示;失去焦点时不显示。
179

textinputarea
取值规则
简单文本值，即其输入的文本内容
UI Sample
UI Annotation 标注
180

textinputarea
181

容器控件清单
Container
容器控件是指能够包含其他基础控件的控件。 发部分容器控件都不能再包含其他的容器控件(layout 例外)。
182

Basic Container 普通容器
Basic Container
基础容器，这类容器通常只是简单的包含其他的控件，主要作用是用于布局。
183

cardboard
Cardboard
用于允许用户自己编辑的布局容器，目前主要用于承载 report 控件，支持对报表进行布局，编辑，搜索，联动等。 目前 Cardboard 只支持网格式布局，可以配置列数，行数根据内容自动添加。
Web 端 UI
移动端 UI
184

cardboard
Protocal
{
}
//web 首⻚控件，容器控件之一 "code": "cardboard_code", "type": "cardboard", "col": "2", "settingable": "1", "content": [
{"type": "cardboardreportrow"...} ]
col
cardbaord 的最大列数，子类型的 spancol 不能超过这个值。
移动端目前只支持 col = 1
settingable
是否支持编辑，选择需要显示的子类型，默认支持。 当允许编辑时需要自动根据内容生成编辑界面，并且在编辑后要自动调用保存编辑配置的接口。 content
用于放置内容控件，目前能放置 cardboardreportrow ，或者放置一个控件
编辑信息使用用户级配置接口来存取，请参看用户级表单配置信息的存取
Cardboard cell layout guid
185

cardboard
cardboard 根据 col 数量来最终决定每个 cell 的大小，为了更好的适配各种情形，现在使用 flexbox 的方法来描述一下 cardboard 的布局，该布局为内部自动实现，除了列数可以调整外，其他的均是自动给出。
{ }
186

filter
Filter
用于显示并录入搜索条件，触发搜索行为的控件
Protocal 协议
{
"type": "filter", "code": "filtercode", "bindCallBtn": "0",
"eventlist": [ {
"handler": "handler_getcontractlist",
"trigger": "onvaluechange" }
], "scan": {
"type": "scan",
"code": "ctrl_scan_productcode", "name": ""
}, "searchcondition": {
"basic": [
187

filter
{
"type": "filtertextinput",
"code": "ctrl_filtertextinput_contractname", "placeholder": "输入信息进行搜索", "historyenable": "0"
} ],
"advanced": [ {
"type": "selectbox",
"code": "ctrl_filtertextinput_contractname", "placeholder": "输入信息进行搜索", "historyenable": "0"
} ]
}, "sortcondition": {
"title": "排序规则", "relation": "or|and",
"folded": "0", "content": [
{
"type": "sortbutton", "text": "销量"
}, {
"text": "价格" }
"type": "sortbutton",
] }
}
Filter Attribute 基础属性 bindCallBtn(web)
配置独立的‘查询’按钮
1、该属性为‘1’,则关闭 filter 内部基础控件自身改变触发 filter trigger 的能力，只能通过按钮控件进行触发 2、该属性不为‘1’,则启用 filter 内部基础控件自身改变触发 filter trigger 的能力。
UI:
Basic Attribute 基础属性
handler
搜索或排序执行的处理事件，通常是数据请求，或者是内存数据请求
Scan 扫描条件 用于指定是否支持扫码搜索，里面只能放置一个扫码控件。
该控件会放置在 basic 区域的最前面，当用户点击扫描之后，需要屏蔽该 filter 中的其他所有搜索和排序条件，并且在 UI 上也要屏蔽其余选项:
188

filter
Search Condition 搜索条件
用于搜索的条件，分为基础和高级两部分显示，两个部分是 and 的关系，所以在配置的时候，如果已经在基础部分有
的条件，就不用配置在高级部分。
basic
基础搜索，指直接显示在表单界面上，方便用户快捷搜索的搜索条件，其布局方案会根据其中包含的控件数量和种
类自动调整，具体请参考布局说明。
放置在基础条件里面的搜索控件，会在其值改变的时候，也就是 onvaluechanged 事件触发的时候，执行对应的 handler 事件
advanced
高级搜索，当有很多搜索条件，需要保持⻚面整洁的时候，就需要把部分搜索条件隐藏起来，需要的时候再点击出 来搜索。其布局方案默认为单列布局，移动端需要使用 plain ⻛格。
前端会自动在高级搜索界面增加 重置 和 确定 两个按钮，分别用与清空条件和执行事件。
Sort Condition 排序条件 用于排序的条件集合，目前只接受 sortbutton 做为其内容。
title
标题，只在折叠模式下，且并未选择任何选项时显示。
folded
是否折叠，Bool 值，默认为 0 。 折叠的时候显示一个类似下拉框的控件，点击后展开其中的选项。 不折叠的时候显示为一个类似按钮组的控件，不显示标题。
具体 UI 参看下方示例
relation
排序条件之间的关系，有 and 和 or 两种取值，分别表示 与 和 或 的关系。默认值为 and 。 当是 与 的关系的时候，每个选项之间互不干涉，独立选择。
189

filter
当是 或 的关系的时候，同一时间最多只能有一个选项被选中，filter 需要负责清理其他选项值。 content
包含的排序控件。目前只有 sortbutton 一种控件，其具体定义请参考 sortbutton
理论上无论 folded 和 relation 有四种组合，但考虑到实际情况，目前只接受以下两种组合 1. folded = 0，relation = or
表示多个排序条件直接显示出来，并可以相互组合使用。此时的 sortbutton 的 valuesets 建议配置上 nil ，以便 用户可以取消排序。 2. folded = 1，relation = and
表示多个互斥的排序条件在一个折叠列表中呈现，只能单选。此时的 sortbutton 的 valuesets 建议只配置 desc
或 asc 中的一种值，如果同一条件同时需要升序和降序，建议使用两个 sortbutton 。
Sort Layout Web
190

filter
Data Structure 数据格式
filter 控件在触发对应的 handler 事件时，会将自身数据传递到事件中，包括搜索，排序和分⻚三部分数据，具体的传输数 据如下
{
"bizdata":{
"name": "", "category": "", "price": ""
}, "**sorting":[
{
"key": "name",
"type": "asc" },
{
"key": "price",
"type": "desc" }
], "**paging":{
"**pageindex": "0",
"**pagesize": "20" }
}
191

filterControls
Filter Controls
Summary Search
Type
Name
Usage
searchbar
Sort
搜索框
用于关键字模糊匹配
Type Name Usage
sortbutton 排序按钮 单个排序条件选择，以按钮形式展现
sortbox 排序盒子 罗列多个预定好的排序条件，只能选择其中一个
排序控件的值的类型，均为枚举类型 sort
Protocol filtertextinput
historyenable 指定是否支持历史记录，默认值为 0，表示不支持。
{
"type": "filtertextinput", "title": "", "historyenable": "", "placeholder": ""
}
如果值为 1，表示支持历史记录，则当用户在输入的时候，需要能够显示当前表单所对应的本地历史搜索记录;同 时用户在完成录入进行搜索的时候需要把此次搜索条件记录下来。
sortbutton
sortbox
{
"type": "sortbutton", "title": "",
"text": "销量", "value": ""
}
{
"type": "sortbox", "title": "排序",
192

filterControls
"style": "full | fold", "options": [
{
"component": "date", "text": "最新", "value": "desc"
}, {
} ]
}
"component": "sales", "text": "最畅销", "value": "desc"
193

layout
Layout
控件架 Layout ，是专⻔用于组织的控件。
Protocal
{
"type": "layout", "bgcolor": "", "bgimage": "", "mode": "", "flexdirection": "", "eventlist": [
{
"trigger": "onclicked", "handler": "delhandler"
} ],
"content": [] }
bgimage 背景图片，当设置了该值时，bgcolor 将会被忽略。 目前只支持设置内置的图片，不支持图片下载 eventlist
Layout 只支持点击事件
mode
控件的显示模式，每个控件都有该属性，但只有 Layout 的 mode 属性可以设置，其他控件的 mode 属性均与其所属 Layout 的 mode 属性保持一致。
free 自由模式 控件放置在一个无背景分组中，每个控件作为一个完整显示单元，Web 端会以这种结构为主。这种 结构下，Panel 所包含的控件需要通过自身 UI 显示其响应区域边界。
plain 平整模式 每个控件放置在一个通栏分组中，Mobile 端会以这种结构为主。该结构下，由于通栏分组已经提供 了控件的边界，通常控件就不再需要绘制其响应区域边界。
card 卡片模式 每个控件放置在一个卡片分组中，Mobile 端会以这种结构为主。该结构下，由于分组层已经提供了 控件的边界，通常控件就不再需要绘制其响应区域边界。 本质上，plain 和 card 可以看做是同一种类型，只不过是可现实区域上
card 稍微小一点
由于 Panel 可以嵌套在 Layout 布局中，所以多种样式的 Panel 可以灵活组合使用，以起到多样的界面效果
194

layout
UI 效果图 Panel 的 UI 根据不同的 type 属性，以及标题，折叠状态等，有以下几种效果
195

layout
UI 详细参数说明 下图为有标题状态，可折叠状态下的 UI 的详细参数，不可折叠时只需去除折叠按钮。
196

layout
详细说明:

1. 由于 free 状态下，控件的显示会更加紧凑，因此其标题和控件区域的高度，以及垂直方向的 margin 均会较小。
2. card 状态下，其水平方向上有默认的 margin，因此其水平方向上的各个参数和 plain 有细微差别，不过其垂直方向和 plain 基本保持一致。
3. 可使用区域是指控件在不考虑控件间间隔的情况下，能使用的最大区域;建议使用区域是指为保持美观，由 Layout 提供给控件的建议使用区间。控件应该尽量在建议使用区域内绘制，如果建议区域的尺寸不够，可以通知 Layout 提 供更大的可使用区域，与此同时保持建议的各项 margin 参数。(关于控件的绘制流程，请参考 Ctrl 绘制流程 ;对于 具体的某一控件如何使用控件区域，请参考具体该控件的定义)
   Test Sample 测试 Flex Test Sample
   197

layout
198

layout
Shelf Type Sample
199

panel
Panel
Panel 是一种聚合控件，基本上是 layout 的增强模式，提供常用的一些功能，方便配置。
Protocal 协议详解
{
"type": "panel", "title": "",
"mode": "", "foldstatus": "", "flexdirection": "", "content": [
] }
hidden 与其他控件的 hidden 属性一样，用于控制是否显示控件，由于 Panel 内部还有其他控件，所以如果 hidden=1，同时需要隐藏其内部的控件。
title 通常情况下，该属性均为空，此时的 Panel 对于用户来说基本是透明的，如果设置了该属性，则认为需要显示 标题。
foldstatus 表示 Panel 的折叠状态，取值如下: 空，默认值，表示当前为展开状态，不可折叠 0，表示当前为展开状态，可折叠
1，表示当前为折叠状态，可展开 如果可以折叠，则 title 属性不能为空。
mode 控件的显示模式，每个控件都有该属性，但只有 Panel 的 mode 属性可以设置，其他控件的 mode 属性均与其所属
Panel 的 mode 属性保持一致。
free 自由模式 控件放置在一个无背景分组中，每个控件作为一个完整显示单元，Web 端会以这种结构为主。 这种结构下，Panel 所包含的控件需要通过自身 UI 显示其响应区域边界。
plain 平整模式 每个控件放置在一个通栏分组中，Mobile 端会以这种结构为主。该结构下，由于通栏分组已经 提供了控件的边界，通常控件就不再需要绘制其响应区域边界。
card 卡片模式 每个控件放置在一个卡片分组中，Mobile 端会以这种结构为主。该结构下，由于分组层已经提 供了控件的边界，通常控件就不再需要绘制其响应区域边界。 本质上，plain 和 card 可以看做是同一种类型，只不过是可现 实区域上 card 稍微小一点
UI 效果图 Panel 的 UI 根据不同的 displayMode 属性，以及标题，折叠状态等，有以下几种效果
200

panel
UI 详细参数说明 下图为有标题状态，可折叠状态下的 UI 的详细参数，不可折叠时只需去除折叠按钮。
201

panel
详细说明:

1. card 状态下，其水平方向上有默认的 margin，因此其水平方向上的各个参数和 plain 有细微差别，不过其垂直方向和 plain 基本保持一致。
2. 按钮点击区域，会局限在折叠图表附近，而不是整个标题行，这样会减少用户误点的可能。
3. 按钮点击区域会略大于图表大小，具体就是标题行的整个高度为基准的正方形区域，这样能兼顾 UI 的美观和点击的
   方便。(点击区域的规则同样适用的展开状态下的 Panel)
4. 折叠和展开应尽量提供动画效果，以提供更加友好的操作体验。
5. 折叠和展开会导致 Panel 的尺寸发生变化，因此会触发其上级布局的尺寸变化，以及其下方的 Ctrl 的位置变化。
   Animation
   202

panel
203

tab
Tab ⻚签控件
<TabBar ref="" displayType="normal">
<Data source="requestTabBarData" textField="stepName" valueField="stepValue" />
</TabBar>
<TabBar ref="" displayType="">
<Data source="" textField="" valueField="">
<Item text="店铺到达" value="1"/> <Item text="生动化检查" value="2"/> <Item text="拜访小结" value="3"/>
</Data> </TabBar>
<TabBar ref="" displayType="">
<Data source="requestTabBarData" textField="stepName" valueField="stepValue">
<Item text="店铺到达" value="1"/> <Item text="生动化检查" value="2"/> <Item text="拜访小结" value="3"/>
</Data> </TabBar>
204

tab
205

tabboard
Tabboard
Tab 面板，用于在表单内部将不同的控件进行分组显示
Protocol
{
"type": "tabboard", "cards": [
{
"title": "⻔店详情"，
"hidden": "0", "flexdirection": "horizontal", "content": []
}, {
"title": "拜访回顾", "hidden": "0", "flexdirection": "",
206

tabboard
"content": [] }
] }
cards
tab 面板由多个 card 组成，每个 card 都相当于一个带标题的 layout tabboard 也可以通过设置 flex，或者 height 设置其显示高度。 如果 flex=0，此时 tabboard 的高度会根据当前所显示的 card 的内容高度决定
Dynamic Properties
支持动态设置卡片的 hidden 属性 支持动态设置卡片标题的颜色 支持由外部设置当前显示第几张卡片
207

Array 数组型容器
Array
数组型控件是专⻔用于结构相同的一组或多组数据的显示，这类控件通常可以提供分⻚，查询等功能。
208

accordion
Accordion 折叠列表
Protocol
{
"type": "accordion",
"code": "ctrl_accordion_productlist", "spread": "0",
"rows": {
"headview": { // 行布局 "type": "layout", "content": [
{
"type": "layout", "flexdirection": "horizontal", "content": [
{
"type": "text",
"code": "ctrl_text_brandname",
209

accordion
] },
"flex": "0" }
] }
"contentview": { // 行内容布局 "type": "layout", "flexdirection": "vertical", "flex": "0",
"content": [ {
"type": "textinput", "code": "ctrl_textinput", "title": "货架排面数量", "required": "1", "eventlist": [
{
"handler": "handler_updateextrainfo", "trigger": "onunload"
} ]
} ]
} }
}
spread
控制展开的的方式。
| 取值 | 含义 | | ------ | ---------------------------------------- | | single | 一次只能展开一行 | | multi | 可以同时展开多行 | | all
| 所有行全部展开，不支持折叠，此模式下默认 | headview 列表行布局 view，里面是一个 layout 布局 contentview 内容的 view，里面放一个 layout 布局
Value
Value Formart
折叠列表接收数组类型的数据
[
{
}, {
}
...... ]
"key1": "value1", "key2": "value2", "key3": "value3", "key4": "value4"
"key1": "value1", "key2": "value2", "key3": "value3", "key4": "value4"
210

accordion
211

list
List
列表控件，适用于展示一组结构相同的数据。同时列表控件还支持链接，选择等功能。
Protocol
{
"type": "list",
"code": "300000000000001", "flex": "1",
"checkable": "0", "isradio": "0", "pageable": "1", "indicatortype": "0", "rows": {
"type": "row", "flexdirection": "vertical", "flex": "0",
"content": [ ... ]
}, "eventlist": [
{
"handler": "",
212

list
"trigger": "onload" },
{
"handler": "",
"trigger": "onrefresh" },
{
"handler": "",
"trigger": "onchecked" },
{
"handler": "handler_linkdetail", "trigger": "onclicked"
} ]
}
onload
列表初始化加载事件，通常绑定一个含有 datarequest 行为的事件，该行为的返回值为其提供数据。
onrefresh
手动刷新事件，通常绑定一个含有 datarequest 行为的事件，该行为的返回值为其提供数据。
onclicked
点击事件，是当某一行被点击的时候所执行的事件。
当 selectable==1，且 clickEvent 没有绑定事件的时候，点击一整行都可以选中或者取消选中;
当 selectable==1，且 clickEvent 绑定了事件的时候，只有点击 checkbox 区域才可以选中或者取消选中，点击其余位 置继续执行点击事件。
pagingsize
分⻚大小，用于指定该控件每次获取数据的数量。默认值为 20.
当该值设置为 0 的时候，表示不需要分⻚。
分⻚大小和当前的分⻚序号分别由 **pagesize 和 **pageindex 这两个系统变量记录。(所以同一个⻚面不应该存在 两个需要分⻚的控件)
checkable
是否可以选择，支持表达式，在数据中可以通过设置内置的 \_\_ischecked 参数来控制某一行是否选中。
默认值为 0，表示不能选择
1，表示可以进行选择 isradio
是否支持单选，Bool 值，默认为 0 多选 存在 checkable: '1'时，交互模式为单选交互 indicatortype 行标识图标，在行最右面显示的图标
| 值 | 含义 | | ---- | ------ | | 0 | 没有标识图标 | | 1 | 详情标识 |
Rows
对于列表中每一行的具体的属性和内容
213

list
列表具体的显示内容，和普通的⻚面配置一致，可以使用所有的简单控件。
Operations
List Operations
pageIndex
获取当前的分⻚数据⻚码
checkNumber
获取当前勾选行的数量
focusIndex
获取当前的焦点行。
焦点行即最近一次用户点击所处的行，即点击子控件时，焦点行为该子控件所在的行
Row Operations
insert
支持在指定位置插入一行或多行数据
一次只支持在一个分组中插入数据
append
支持在末位添加一行或多行数据
delete
支持删除指定位置的一行或多行数据，如果导致分组数据清空，则自动删除分组
move
支持将指定位置的一行移动到另一行。
Value Value Format
{
"ref": [
{
"key1": "value1", "key2": "value2", ......
}, {
"key1": "value1", "key2": "value2", ......
},
...... ]
}
214

list
Set Value & Get Value
请参看 datasets 类型的 Ctrl 的数据规则
Template
行模板，主要用于方便用户快捷配置
default
通用的列表显示，由一个图标，和一组左右分布的字符串组成
store
专⻔用于⻔店显示
customer
用于可以完全自定义显示内容的方式
UI Sample
UI Annotation Test Sample
215

sectionlist
Section List
支持分组和多模板的列表
216

sectionlist
Protocol
{
"type": "sectionlist", "name": "shoppingcart", "code": "300000000000001", "flex": "1",
"pageable": "1", "refreshable": "1", "headerview": {
"type": "layout",
"name": "productrow", "flexdirection": "vertical", "eventlist": [
{
"handler": "",
"trigger": "onclicked" }
],
"content": [] },
"rows": [ {
"type": "row",
"name": "productrow", "flexdirection": "vertical", "clickable": "1", "deletable": "1", "eventlist": [
{
"handler": "",
"trigger": "onclicked"
217

sectionlist
}, {
"trigger": "ondelete" }
],
"content": [] },
{
"type": "row",
"name": "giftrow", "clickable": "0", "flexdirection": "vertical", "eventlist": [],
"content": [] }
], "eventlist": [
"handler": "",
{
"handler": "",
"trigger": "onload" },
{
"handler": "",
"trigger": "onrefresh" }
] }
pageable
是否支持分⻚。
为了保障分组的完整性，分⻚是按 section 进行分⻚的 refreshable
是否支持下拉刷新，如果支持，下拉时会触发 onrefresh 事件 web 暂不支持
headerview
分组标题的 UI 定义，里面通常放一个 layout 控件
rows
行模板的 UI 定义，支持定义多个模板，使用模板的 name 属性与数据的 \_\_row_template 字段进行匹配，进而决定使 用哪个模板显示行
clickable
是否支持点击。默认值为 1。(仅移动端支持)
支持点击时，点击行会触发 onclicked 事件
deletable
是否支持删除，默认为 0，表示不支持。(仅移动端支持)
如果支持，手机端需要实现左滑或⻓按删除，web 端需要显示出自带的删除按钮。当用户确认删除时，会触发 当前行的 ondelete 事件
Operations
218

sectionlist
List Operations
pageindex
获取当前的分⻚数据⻚码
focusIndex
获取当前的焦点行。
焦点行即最近一次用户点击所处的行，即点击子控件时，焦点行为该子控件所在的行
Row Operations
insert
支持在指定位置插入一行或多行数据
一次只支持在一个分组中插入数据
delete
支持删除指定位置的一行或多行数据，如果导致分组数据清空，则自动删除分组
move
支持将指定位置的一行移动到另一行。
Data Format
通常从后台直接获取到的是一个一维数组，其分组信息和模板信息都隐藏在数据中，需要经过处理，转换成本控件能识
别的结构，在传给控件赋值。
由于转换关系较为复杂，目前只支持 flycode 进行数据转换，纯配置的数据转换定义暂不支持。 具体的转换后的格式应该如下所示
[
{
} ]
"**sectionlist_header": {...} "**sectionlist_rows": [
{
"__row_template": "rowname", ...
} ]
此结构为一个二维数组结构，第一层是组，第二层是行。
**sectionlist_header
header view 所需的数据，均放置在该节点下。
一个分组只能有一个 header view，因此此处不是数组 该节点可以没有，当没有时将会直接在 **sectionlist_rows 节点中取第一条数据进行填充。 \_\_sectionlist_rows
具体的内容行的数据，放置在该节点下。
219

sectionlist
**row_template
如果支持多模板行，需要在行数据中插入该字段，用于指定该行信息使用哪个模板来显示。
其值为模板的 name。
第一组数据中如果缺失 **sectionlist_rows 节点，那么数据会被认为没有分组，直接使用组数据作为行数据
以购物⻋数据为例
原始数据
{
"products": [
{
"promotionid": "", "promotionname": "",
"isgift": "0",
"id": "nopromotion_product_1", "name": "无活动产品 1", "number": "20",
"unit": "箱"
}, {
"unit": "箱" },
{
"promotionid": "promotion_1", "promotionname": "活动 1", "isgift": "1",
"id": "promotion_1_gift_1", "name": "活动 1 赠品 1", "number": "10",
"unit": "瓶"
} ]
}
"promotionid": "promotion_1", "promotionname": "活动 1", "isgift": "0",
"id": "promotion_1_product_1", "name": "活动 1 产品 1",
"number": "10",
转换后的数据
[
{
}, {
"**sectionlist_rows": [ {
"**row_template": "productrow", "promotionid": "**none", "promotionname": "无活动", "isgift": "0",
"id": "nopromotion_product_1", "name": "无活动产品 1", "number": "20",
"unit": "箱"
} ]
"**sectionlist_rows": [ {
"\_\_row_template": "productrow", "promotionid": "promotion_1",
220

sectionlist
"promotionname": "活动 1", "isgift": "0",
"id": "promotion_1_product_1", "name": "活动 1 产品 1",
"number": "10",
"unit": "箱" },
{
"\_\_row_template": "giftrow", "promotionid": "promotion_1", "promotionname": "活动 1", "isgift": "1",
"id": "promotion_1_gift_1", "name": "活动 1 赠品 1", "number": "10",
"unit": "瓶"
} ]
} ]
221

table
Table 表格 mobile
web
222

table
Protocal 协议
{ // 表格信息区域
"type": "table",
"code": "ctrlcode_table_storelist", "flex": "1",
"style": "default",
"hidenheader": "0",
"refreshable": "0",
"pageable": "1",
"checkable": "1",
"isradio": "1",
"sortable": "1",
"freezecol": "1",
"mergeablecol": "2",
223

table
"eventlist": [ {
"handler": "trigger":
"handler": "trigger":
"handler_loadstorelist", "onload"
"handler_changebuttonstatus", "onchecked"
}, {
} ],
"statisticsrow": [ {
"title": "总计", "rules": [
{
"index": "3",
"rule": "SUM", "color": "", "decimaldigits": "0"
} ]
"rows": {
"type": "row",
"height": "", "width": "450", "columnitems": [
{
"type": "text",
} ],
"title": "终端编号",
"flex": "",
"width": "100",
"code": "ctrlcode_text_storeid"
} ]
} }
style
表格的样式，默认值为 default
| 值 | 样例 | | ---------- | ------------------------------------- | | default |
| | simplicity | |
hidenheader
是否隐藏标题行，默认为 0 不隐藏
refreshable 是否支持下拉刷新，如果支持，将会在刷新时触发 onload 事件 pageable
| | basic |
224

table
是否支持分⻚，Bool 值，默认为 0
checkable
是否支持选择，Bool 值，默认为 0
选中时会触发 onchecked 事件，并更新 \_\_checkednumber 参数值 isradio
是否支持单选，Bool 值，默认为 0
存在 checkable: '1'时，交互模式为单选交互
sortable
是否可以排序，Bool 值，默认为 0
如果可以排序，则点击标题行就触发 onload 事件
表头的排序值可以参考 sortbutton 中的定义，直接使用所有的值，即 nil|desc|asc
sortbtnable 带排序按钮(‘置顶’，‘置尾’，‘上移一位’，‘下移一位’)的 table 列表，可对 table 数据进行排序 备注:配置该模式的 table 不允许配置分⻚特性，所有内容一⻚显示(业务规定最大 50 条左右) freezecol
冻结列数，正整数，默认为 0
mergeablecol 指定可以合并单元格的列数，可合并的列会将相邻行的数据一致的单元格进行合并。
关于支持合并单元格的表格更多的信息，请参看下方的详细说明。
statisticsrow 统计行
显示在表格下方，支持对指定列数据进行简单统计计算并展示的行。
title
行标题，将显示在第一列，可以为空。默认为空。 当第一列有统计规则时，标题将被忽略
rules
各个需要统计的列的信息
index
列序号， 0 表示第一列，必填的值。
rule 目前不支持对统计值的范围进行设置，固定使用指定列的全部数据进行有限的函数运算。支持的函数有: | 函数名 | 说明 | | ------- | ------ | | sum | 求和 | | average | 平均值 | | max | 最大值 | | min | 最小值 | | | | color
字体颜色，默认为黑色，字体默认使用 14 号粗体，右对⻬，除了颜色，其他暂时不支持配置。
225

table
decimaldigits
小数位数，正整数，默认值为 2，0 表示不能输入小数 支持统计的列的值必须是可以转化为数字的值，表格将会统一将需要统计的列的值转换为 Double 浮点数进行计
算，计算结果显示在统计行的对应列中。 协议支持配置多个统计行，不过目前可以只实现一个统计行。 如果表格内部行可以滑动(即 flex>0)，则统计行需要自动冻结在表格下方 统计值暂不支持提交或者 flycode 获取
rows
本质上，这是一个模板，用以描述表格的行的相关属性。
type
行的类型，目前只有一种类型 row
height
设置每行的显示高度，如果有值，则每一行都使用该值作为统一的高度;如果没有设置，则由其初始内容决定每一
行的显示高度。
width
设置一行的显示宽度。
默认情况下行的显示宽度与表格的宽度相同，但由于行的内容经常需要超出表格的宽度限制(手机端尤为明显)，
因此行宽尝尝需要进行单独的设置。
columnitems
每一行组成的控件集合。 所有的基础控件都应该能放入到行中，并且自动使用 basic 模式显示
表格行高列宽的配置说明 行高
表格的行高有两种确定方式，参看 rows.height 属性的说明
列宽
表格的列宽由 rows.width 的值，和 rows.columns 里面的子控件的布局设置共同决定。
rows.width 确定了所有列加在一起的总宽度的最大限额，如果没有设置，则默认为使用 table 控件的宽度。如果是手机
端还会默认使用 table 控件的宽度作为最小总宽度的限额。
rows.columns 里面的子控件的水平方向上的布局属性，例如:flex，width，paddinghorizontal 等等，都会影响列宽。
列宽的建议配置方式是
除非是明确知道宽度的控件，否则最好使用 flex 属性分配列宽 列数较少时，不必设置 rows.width ，避免表格滚动。 列数较多时，设置 rows.width 为一个合理的显示宽度。
226

table
合并单元格的相关说明 数据格式
支持单元格合并的表格数据和普通的没有差别。
场景限制
表格控件对单元格的合并，目前只是支持有限的场景，并不能支持任意单元格的合并，具体限制如下:

1. 不支持表头的合并
2. 不支持横向(跨列)的合并
3. 不支持不连续的合并列(只能指定左边的连续 n 列) 4. 不支持右边列的数据合并跨越左边列的合并范围。 5. 不支持将可录入的控件配置到支持合并的列。
4. 只支持该列的取值为 String 类型的列进行合并
   因此，如果需要更复杂的合并规则，可以考虑使用报表，或者其他手段实现。
   单列单元格合并规则
   数据合并的大致流程如下
5. 当前列支持合并。
6. 根据前一列的合并情况对当前列数据进行分组。
7. 如果是第一列则当前列所有数据分为一组。
8. 同一组内的相邻的数据如果相同则进行合并，两个空值处理为相等。 5. 继续合并下一列。
   对 checkable 的影响
   目前凡是 mergeablecol > 0 的， checkable 属性将会被忽略。
   数据传参
   由于数据格式与普通的表格没有区别，且可录入的控件只能放置在不能合并的列中，因此数据提交的规则无需做特殊的
   处理。
   唯一需要注意的是，如果将按钮配置到合并的单元格中，此时点击按钮所需要传递的数据为该合并单元格中实际包含的
   第一行的数据。
   Freeze Column
   227

table
Sample
228

table
229

timeline
Timeline
时间轴
Protocal
{
"type": "timeline", "attribute": {
"code": "67877676744500",
"onload": "",
"pagesize": "",
"displayorder": "0" //显示方向，顺序(0)或倒序(1)
}, "children": [
{ // 和列表类似，时间轴的内容按行显示 "type": "rows",
"attribute": {
"onclicked": "",
"nodeiconmap": [ // 用于定制节点图标
{
"value": "0", // 图标影射的 "iconname": "start" // 图标名称，内置
}, {
"iconname": "process" }
"value": "1",
] },
"children": [ {
"type": "layout",
230

timeline
"attribute": {}, "children": [
{
"type": "text",
"attribute": {
"code": "55688889623400"
} },
{
"type": "text",
"attribute": {
"code": "55688889623401"
} }
] }
] }
] }
onload pagesize displayorder
rows
onclicked nodeiconmap
value iconname
231

dynamicpanel
Dynamic Panel
动态面板，可以动态添加或者删除一组控件的控件，属于数组型控件，可以通过 datarequest 事件进行数据设置，不过 不支持分⻚，不支持搜索，可以通过 flycode 进行数据的存取。
每组控件都被放置在一个 panel 里面，该 panel 具备 panel 控件的所有的属性和能力。
{
"type": "dynamicpanel", "title": "动态面板", "upperlimit": "20", "lowerlimit": "", "initnumber": "0",
"markmode": "none", "marktitle": "Set to default", "addmode": "auto", "deletable": "1",
"editable": "0", "operationstyle": "", "eventlist": [
{
"trigger": "onload", "handler": ""
}, {
"handler": "" }
], "item": {
"flexdirection": "", "eventlist": [
{
"trigger": "ondelete", "handler": ""
}, {
"handler": "" },
{
"trigger": "onclicked", "handler": ""
} ],
"content": [] }
}
"trigger": "onnew",
"trigger": "onedit",
upperlimit
最多可以添加的 panel 的数量，默认值为 20 ， 0 表示无限制;空的时候使用默认值。 lowerlimit
表示最少需要添加的 panel 的数量，默认值为空，表示没有限制; 0 也表示没有限制。 initnumber
表示初始状态下预先生成的 panel 数量，默认值为 0 ，即不预生成 panel。
markmode
232

dynamicpanel
动态面板的一个内置方便属性，用于自动生成一个勾选框，并在数据中自动插入一个 key 为 \_\_markstatus 的值，如 果勾选值为 1 ，否则值为 0 。有以下三种取值:
| 值 | 说明 | | ----- | ------------------------------------------- | | none | 没有勾选框。 | | radio | 单选框，此时多个 panel 同时 只能有一个被勾选。 | | check | 多选框。 |
marktitle
当有默认勾选框的时候，该属性定义勾选框前面所显示的标题内容，可以为空。
deletable
是否允许删除行，默认值为 1 ，表示可以删除，需要显示删除按钮。
点击删除按钮时，会先触发 ondelete 事件，如果没有关联事件，或者事件成功执行完毕后，自动删除当前行。
editable
是否允许编辑行，默认值为 0 ，表示不能编辑，需要显示编辑按钮。点击按钮会触发 onedit 事件。
mode
支持 card，free，plain 三种模式，默认值为 card
operationstyle
控制编辑和删除按钮出现的位置。
| 值 | 说明 | | ------ | --------------------------------------------------------- | | clear | 删除和编辑按钮显示在下方，以文字+图 片按钮形式出现，默认值 | | hidden | 删除和编辑按钮隐藏，通过左滑出现，以文字形式出现 |
addmode
新增模式，有以下取值
| 值 | 说明 | 新增按钮 | | ------ | ------------------------------------------------------- | -------- | | none | 不能直接新增，只能外 部设置数据。 | 无 | | auto | 默认值，点击新增按钮后自动新增一个 panel 放置在最后位置。 | 有 | | custom | 点击新 增按钮后不作处理，等待外部数据设置。 | 有 |
只要点击了新增按钮，均会触发 onadd 事件，而 custom 模式下的外部数据设置，通常就是设置在 onadd 关联的事件当中，详细参看 外部内容配置 说明。
item 新增和删除的控件组容器，相当于一个 layout
Event List
动态分组支持的事件出发点有以下几种:
动态面板事件
面板项事件
trigger 触发时机 用途示例
onload 控件加载时触 可以配置 Datarequest 行为，用于初始化数据 发
onadd
点击新增按钮 可以关联一个 link 行为跳转到新的表单，用于生成数据，详细说明请参看下方的 时触发 外部内容配置 说明。
233

dynamicpanel
trigger 触发时机 用途示例
ondelete 点击删除按钮时 删除某行时做出对应的响应，该行为会自动将删除的行的数据传递出去。
外部内容配置
动态面板的外部内容配置，本质上就是给数组型控件赋值，不过其特殊性在于其数据通常是在最后追加(但又不是数据
分⻚)，或者编辑某一项数据，因此会在赋值的时候控件会做特殊处理。
动态面板有两种外部数据设置需求:数据追加 和 数据编辑 。由于其场景的局限性，目前不支持外部数据刷新，或者数 据删除。
点击事件会自动将当前行的位置信息放置在以下字段中 **focusindexpath_row 和 **focusindexpath_section 中，以供之后使用
数据格式
触发
onedit
点击编辑按钮时 当配置了可编辑行为时，点击编辑按钮做出该响应，该行为会自动传递编辑按 触发 钮所在行的数据出去。
onclicked 点击某个 panel 可以用于编辑行内容等，详细说明请参看下方的 外部内容配置 说明 时触发
{
"data": [
{
"promotionid": "promotion_1", "promotionname": "活动 1", "isgift": "0",
"id": "promotion_1_product_1", "name": "活动 1 产品 1",
"number": "10",
"unit": "箱"
} ],
"**array_ctrl_modify_Operation": { "**operation_type": "update", "**operation_indexpath": {
"**indexpath_row": "1",
"**indexpath_section": "" }
} }
用于设置的数据格式由两部分构成:数据 以及 数据信息 。其中数据当中就是给控件提供的数据，和普通的数组型控件 一样，是一个数组。数据信息中包含了这部分数据的使用方式相关信息，其中 **datainfo_operation 是说明数据的用途 是添加还是修改等。 **datainfo_keyname 用于指定关键 key 的字段名，例如如果数据是用于修改现有数据，则需要对比关 键 key 的字段值，如果控件中的某行的关键 key 的值与数据中的相同，则使用数据中的数据更新该行。
**datainfo_operation 的取值如下:
值 说明
append 附加，将数据附加到现有的控件中，在其尾部添加 N(数据数量)行。
update 更新，将关键 key 匹配的数据项的值进行替换更新。
delete 删除，将关键 key 匹配的数据项进行删除
234

dynamicpanel
如果数据中没有 \_\_datainfo 字段，则默认为 append 模式 使用配置方式设置
使用 UIFlyCode 方式设置 将数据直接赋值即可
也可以使用数值型控件的通用数据编辑函数，如:reloadRows, insertRows 等
// 组装数据，得到 data
// 组装 setter，得到赋值规则 Page.getCtrl('动态面板').setValue(data, setter);
235

Report 报表控件
Report
在 aPaaS 中，报表是一种特殊的控件，用于以图形化的方式展示数据。他的数据获取，甚至 UI 的配置都有专⻔的接口和 界面。与此同时报表控件也是控件的一种，也具备和其他基础控件一样的布局和组合能力。
关于控件的说明请参看接下来的几章的介绍。
目前报表控件的协议实际是分别放置在两份文件中，除了和其他控件一样会放置在所在表单协议中外，还有一个专⻔的 描述文件放置更加详细的信息，这部分内容请参看 Report Page
236

Report Widget
Report
报表控件
Protocol
{
"type": "report",
237

Report Widget
"title": "",
"code": "333333333", "reportdesccode": "desc_code", "ignoredeffilter": "1", "columns": [
{
"field": "salesareaname", "sortable": "1", "clickable": "1"
} ],
"eventlist": [ {
"trigger": "onload",
"handler": "load_report_data_event" },
{
"trigger": "onclickdata", "handler": ""
}, {
"handler": "" },
{
"trigger": "onsort", "handler": ""
} ]
}
"trigger": "onextend",
reportdesccode
由于报表配置的特殊性，报表控件的大部分相关配置都在单独的报表配置器里配置，这部分信息我们称之为报表描 述，该信息需要在实际显示报表时才会动态的整合进其所在的表单中。该属性就是记录报表对应的报表描述的 code。
ignoredeffilter
忽略协议片段中的 filter 的配置，bool 值，默认为 0
columns
报表数据列的字段描述，目前只用于表格类报表排序配置。
eventlist
报表的事件列表通常是在报表描述中记录，如果报表协议和报表描述中存在同一事件的配置，则优先使用报表描述
中的配置。
onload 和大部分控件的 onload 事件一样，该事件在报表加载的时候调用，用于获取报表的显示数据，只不过该事件通
常在报表描述中配置，并且调用报表专用的数据获取事件。
参考下方的 Report Data 该事件触发时所传递的事件参数约定如下:
onsort
{
"\_\_triggerctrlcode": "920846561091653697" //报表 code
}
238

Report Widget
报表控件中，表格类型的报表独有的事件，在点击可排序的表头时触发，会默认传递以下参数
{
{
"**report_sorttype": "" }
] }
//报表 code
//指标别名
"**triggerctrlcode": "920846561091653697", "**report_sortinfo": [
"**report_indicatoralias": "拜访完成率",
TODO:这部分的传参由于接口还未定义好，所以需要之后等切口入参确定后再修改
onextend 报表控件中，表格类型的报表独有的事件，当用户在点击表格中可暂开(钻取)的显示内容的时候触发。 该事件触发时所传递的事件参数约定如下:
{
"**triggerctrlcode": "920846561091653697", //报表 code
// 以下为 Report 控件的 value
"**report_indicatoralias": "拜访完成率", //指标别名 "**report_drill": {
"dimobjectcode": "920846561091653697", //维度对象 code "propertycode": "920846561091653700", //属性 code "membervalue": "现代渠道.商超" //维度值
}, "**report_pdrill": [
{
"dimobjectcode": "920846561091653688", //维度对象 code "propertycode": "920846561091653790", //属性 code "membervalue": "饮料.哇哈哈" //维度值
}
] //只在有多重展开时才传递，存储的是前置维度值
}
onclickdata
报表控件特有的事件，当用户点击显示内容时触发，传递的参数与 ondrill 保持一致
Report Desc Content
报表描述是单独在报表配置⻚面进行配置，对报表进行详细设置的协议。
实际解析过程中需要将该描述与报表所在表单的协议进行融合。
Interface
post api/teapi/protocol/uiprotocol/getprotocolfragments
Request
{
"codes": ["920484487849185322"]
}
239

Report Widget
codes 报表描述文件的 code，可以一次获取多个
Response
{
"code": "910390432830197843", "pagedescr": "终端拜访统计", "type": "7",
"title": "终端拜访统计", "report": {
"code": "928547827523653725", "type": "report", "eventlist": [
{
"handler": "928547827523653723", "trigger": "onload"
} ]
}, "filter": {
"type": "filter",
"code": "928547827523653724", "eventlist": {
"code": "928547827523653723",
"trigger": "onvaluechange" },
"searchcondition": { "basic": [
{
"type": "selectbox",
"code": "918757352000327733", "placeholder": "请选择", "eventlist": [
{
"handler": "928547827523653722", "trigger": "onload"
} ]
"code": "928547827523653723", "actions": [
{
"type": "rp_datarequest",
"datacode": "910390432830197847", "reportctrlcode": "928547827523653725", "filtercode": "928547827523653724"
} ]
}, {
} ]
} ]
"handlers": [ {
} },
"code": "928547827523653722", "actions": [
{
"type": "rp_conditionrequest", "datacode": "918757352000327733", "conditionctrlcode": "918757352000327733"
}
240

Report Widget
] }
合并规则说明
report
报表协议，合并协议时目前只使用描述文件的 title 覆盖报表的 title; 使用描述文件的 eventlist 合并进报表的 eventlist 中，如果出现冲突，即同一个 trigger 两边都有关联事件，此时就需要将描
述文件中的事件中行为插入到报表表单中的对应的事件的头部。
filter
该 filter 为该报表专用的 filter，插在报表的前面显示。 如果报表配置在 cardboard 中，就需要在依次根据 filter 中的子控件的 code，在该表单中查找是否有相同的 code 的控件，
如果有，则需要将 filter 中的该控件去除。 exportButton
如果有导出按钮，则将该按钮放置在 filter 的前面 handlers
直接整合进报表所在表单的 handlers 中。 如果报表配置在 cardboard 中，且 cardboard 配置的统一的 filter，则需要将其中的报表事件所关联的自有 filter 自动替换为
统一 filter
Report Drill 报表钻取
报表的钻取是由事件 rp_datadrill 进行处理的，该行为最终会将钻取到的数据传递给其绑定的报表控件。
报表控件需要提供专⻔的接收钻取数据的接口，该接口负责将钻取数据附加到报表中，并更新钻取层级导航按钮，旧的
数据依然会缓存在报表中，因此向上钻取时直接使用缓存数据，不再触发该事件。
Value 报表取值
报表也支持取值，当用户点击了报表内容时，report 控件才有值，此时的值就是用户点击的维度指标的相关信息，其完 整结构如下:
{
"**report_indicatoralias": "拜访完成率", //指标别名 "**report_field": "拜访完成率",
"**report_drill": {
"dimobjectcode": "920846561091653697", //维度对象 code "propertycode": "920846561091653700", //属性 code "membervalue": "现代渠道.商超" //维度值
}, "**report_pdrill": [
{
"dimobjectcode": "920846561091653688", //维度对象 code "propertycode": "920846561091653790", //属性 code "membervalue": "饮料.哇哈哈" //维度值
241

Report Widget
}
] //只在有多重展开时才传递，存储的是前置维度值
}
当报表数据刷新后，需要置空报表值
各个字段的取值约定如下:
字段名 取值方式
**report_indicatoralias
reportdefine. measuregroup[当前点击行]. measures[当前点击指标]. alias， reportdefine. rows[当前点击行]. attributealias
**report_field 点击列的 field 值
**report_dimobjectcode reportdefine. rows[当前点击分组]. dimobjectcode
**report_propertycode reportdefine. rows[当前点击分组]. code
**report_membervalue 报表缓存的当前分组的维度值
**report_pdrill 报表缓存的前置分组的维度值
Report Data
{
"resp_data": {
"widgettype": "pie", "protocols": {
"header": "终端客户结构分析", "footer": null,
"event": null,
"tooltip": null,
"label": null,
"fieldname": "name",
"field": "bi_fact_store_struct.storecount"
}, "datas": [
{
"bi_fact_store_struct.storecount": "1", "name": "交通运输渠道"
}, {
"name": "传统渠道" },
{
"bi_fact_store_struct.storecount": "3", "name": "批发渠道"
}, {
"name": "教育渠道" },
{
"bi_fact_store_struct.storecount": "1056", "name": "现代渠道"
}, {
"name": "酒店渠道" },
{
"bi_fact_store_struct.storecount": "1", "name": "餐饮渠道"
"bi_fact_store_struct.storecount": "31",
"bi_fact_store_struct.storecount": "1",
"bi_fact_store_struct.storecount": "1",
242

Report Widget
} ],
"reportdefine": {
"metamodelcode": "829609839767532617", "reportcode": "920846561091653729", "reportname": "终端客户结构分析", "subtotallocation": 0,
"needsubtotal": "true",
"drillstype": 0,
"widgettype": "pie",
"themeids": [
"920591526390796301"
], "rows": [
{
"code": "920846561091653700",
"elementname": "bi_dim_channelstoretype.name", "seq": 1,
"dimobjectcode": "920846561091653697", "attributealias": "名称",
"selection": false,
"needsubtotal": false,
"subtotalalias": null,
"needdrill": true,
"defaultlevel": 2,
"accesscontrol": true,
"link": ""
} ],
"address": null, "columns": [], "measuregroup": [
{
"axialdirection": 2, "seq": 1,
"name": "", "format": [
{
"type": "text",
"format": "", "prefix": "", "suffix": ""
}, {
} ],
"type": "text", "format": "", "prefix": "", "suffix": ""
"measures": [ {
"code": "920591526390796305",
"themeobjectcode": "920591526390796301", "elementname": "bi_fact_store_struct.storecount", "type": "",
"aggregator": 1,
"alias": "终端数量",
"selection": false,
"seq": 1,
"axialdirection": 1,
"markerdef": null,
"chartstype": null,
"format": null,
"sort": 0
} ]
} ],
243

Report Widget
"drilldimvalues": [], "slices": [], "isshowblankvalue": false, "permissionctl": true, "rowexpandlevel": 0
} }
}
244

Report Actions
ReportAction
报表行为，专用于报表相关的数据获取的行为。
[TOC]
rp_optionrequest 选项数据获取 专⻔用于报表的筛选条件获取，一次调用获取一个条件的选项值，当有多个筛选条件时，需要多次调用。
由于报表数据的获取会依赖于筛选选项值，所以在实际处理中，需要先执行完所有的选项值获取后，才能执行报
表数据获取。
Protocol
paramcode
该选项数据的 code，用于接口请求的入参
conditionctrlcode
选项值所对应的展示控件的 code，由于选项值得返回字段已经约定好，因此就不再在这里进行具体的绑定说明，不 同种类的控件根据自身需求去固定的字段获取值即可，具体绑定说明参看下方。
由于在报表数据获取的时候，会默认获取这些筛选条件的值作为入参，其中控件值与维度的对应关系就会默 认使用 rp_optionrequest 中的对应关系。
为了方便配置，目前用作报表筛选的控件的 code 与其所关联的参数的 code 保持一致，因此在之后的报表数 据获取筛选参数时，可以直接使用控件的 code 作为参数
Interface
请求方式: POST
URL: api/teapi/report/biengine/report/initparam
Request
paramcode
即事件中配置的 paramcode 属性 Response
{
}
"type": "rp_optionrequest",
"datacode": "918757352000327733", "conditionctrlcode": "918757352000327733"
// 请求报表筛选条件的选项值 // 筛选参数的 code
// 对应的展示控件的 code
{
'paramcode': "918757352000327733"
}
245

Report Actions
[
{
}, {
} ]
"text": "近三月",
"key": "RECENTLYTHREEMONTH", "id": "RECENTLYTHREEMONTH"
"text": "近一周",
"key": "RECENTLYONEWEEK", "id": "RECENTLYONEWEEK", "isselected": "1"
返回的选项值可以被下拉框，单选框等选项类控件接收。目前只接受单选。
isselected
是否为默认选中的值， 0 表示不是默认值， 1 表示为默认选中值。 该字段值默认为 0 如果所有选项都没有设置为值，那么会默认使用第一个选项作为默认值。
rp_dimensionrequest 报表数据获取 用于报表维度切换的选项数据获取
// POST
// api/teapi/report/getdims {
"type": "rp_dimensionrequest", "reportcode": "907526770180362314", "setter": {
"datatype": "1",
"ctrlcode": "871635456321354", "properties": [
{
"name": "elementcode", "ctrl": {
"code": "",
"component": "key" }
}, {
}, {
} ]
"name": "alias", "ctrl": {
"code": "",
"component": "text" }
"name": "isselected", "ctrl": {
"code": "",
"component": "isselected" }
} }
reportcode
246

Report Actions
报表的 code，目前一个报表唯一关联一个可选的维度选项列表 setter
数据接收的相关设置，由于接口是专用的，因此基本上除了 ctrlcode 可以设置之外，其他的都可以直接原样生成， 无需配置
Request
Response
{
"reportcode":"907526770180362314"
}
[
{
}, {
} ]
"elementcode": "4234523452345.866456585656", "elementname": "bi_dim_date.year",
"alias": "按年"
"elementcode": "4234523452345.323524523452", "elementname": "bi_dim_date.month",
"alias": "按月",
"isselected": "1"
rp_datarequest 报表数据获取 用于获取报表显示数据
Protocol
{
"type": "rp_datarequest",
"reportctrlcode": "928547827523653725", "datacode": "907526770180362314",
"filtercode": "928547827523653724", //作废 "slices": [
{
"code": "545613345463214", "value": "",
"component": ""
} ],
"dimensions": [ {
//报表控件 code
"code": "871635456321354", "value": "",
"component": ""
} ]
}
reportctrlcode
247

Report Actions
报表数据所对应的报表控件 code，获取到的数据将会赋值到该控件
datacode
报表数据的 code
filtercode
获取报表数据的筛选条件所在的 filter 控件的 code，在执行该事件时，会到该 filter 中，遍历其所有的子控件，取出这 些控件的 value 值作为数据请求的入参
slices
切片定义(即筛选条件定义)，用于指定报表数据获取的入参中的切片信息
code 切片的 code，同时也是该切片对应的筛选条件的控件 code，使用该 code 去获取控件的值 component
指定从控件中获取的值的类型，与通用的 getter 中的定义一致
value
为该切片指定一个默认值，与 getter 中的定义一致
Interface
请求方式: POST
URL: api/teapi/report/biengine/report
Request
// request
{
"reportcode": "910390432830197847", "drill": {
"dimobjectcode": "872640719498645580", "propertycode": "872640719498645584", "membervalue": "华南大区"
},
"pdrill": [], "slices": [
{
"code": "918757352000327733", "value": "RECENTLYONEWEEK"
} ],
"switchdim":{ "elementcode":"872640719498645580.872640719498645564"
} }
reportcode
报表数据 code，使用事件配置的 datacode 属性值 slices 报表的筛选条件，通过遍历绑定的 filter 中的控件来获取
code
248

Report Actions
参数的 code，直接使用控件的 code 即可 value
控件的值，直接获取控件的默认取值，即 value 值，如果获取到的不是一个字符串，则需要转换为字符串之 后使用。
TODO: 联动的时候，也是调用该方法，不过此时会有钻取信息需要加入，该协议还在制定中。。。。。 Response
请参看报表数据结构说明
rp_datadrill 报表数据钻取 Protocol
// response
{
......
}
{
"type": "rp_datadrill",
"reportctrlcode": "300000000000003", "datacode": "907526770180362314", "filtercode": "928547827523653724", //作废 "slices": [
{
"code": "545613345463214", "value": "",
"component": ""
} ]
}
各个属性与 rp_datarequest 的属性配置相同。 不同之处在于请求数据的组装以及请求回来的数据的使用
Interface
请求方式: POST
URL: api/teapi/report/biengine/report/drill
Request
{
"reportcode": "910390432830197847", "drill": {
"dimobjectcode": "872640719498645580", "propertycode": "872640719498645584", "membervalue": "华南大区"
},
"pdrill": [], "slices": [
{
249

Report Actions
"code": "918757352000327733",
"value": "RECENTLYTHREEMONTH" }
] }
reportcode & slices
与 rp_datarequest 的入参一致
drill
钻取维度信息，从约定的事件传参中获取
| 参数 | 约定传参关键字 | | ------------- | ---------------------- | | dimobjectcode | report_dimobjectcode | | propertycode | report_propertycode | | membervalue | **report_membervalue |
pdrill
父级钻取维度信息，例如支持多重展开的表格，每一重暂开的信息的格式均与 drill 相同。 从约定关键字 **report_pdrill 中获取
Response
请参看报表数据结构说明
rp_export
报表数据导出
// response
{
......
}
{
"type": "rp_export",
"datacode": "909973059585314889", "reportctrlcode": "925995501218828360", "slices": [
{
"code": "545613345463214", "value": "",
"component": ""
} ],
}
datacode
报表数据的 code
reportctrlcode 报表控件的 code，需要根据该控件实际的类型决定导出行为
图表类型
由前端生成图片导出
250

Report Actions
表格类型 调用接口生成 excel 文件导出
导出接口
URL: api/teapi/report/biengine/report/exportexcel Request
{
"reportcode":"938318419474911280", "dimslevel": [
{
"dimobjectcode": "872640719498645580", "level": "2"
} ],
"slices":[] }
reportcode
即 datacode
dimslevel 维度信息，由报表控件负责提供当前短裤钻取到的维度信息
dimobjectcode 维度的 code
level 该维度钻取到的层数
slices
搜索信息，与 rp_datarequest 中的一致
251

Data Structure
Report Data Structure
报表数据结构说明
Basic 基础数据结构 #
252

FlyCode
Report Fly Code
关于使用 FlyCode 控制报表的定义
ReportModel
var ReportModel = {
// 数据请求
// - input: 请求的入参，不同的请求有不同的入参要求
// - success: 成功请求后调用的方法
// - fail: 请求失败后调用的方法
request: function (input, success, fail) {}, requestDrill: function (input, success, fail) {}, requestOptions: function (input, success, fail) {}, requestDimensions: function (input, success, fail) {}, export: function (input) {}
}
request
报表数据请求，入参格式请参看 rp_datarequest
requestDrill
报表钻取数据请求，入参格式请参看 rp_datadrill requestOptions
报表筛选选项数据请求，入参格式请参看 rp_optionrequest requestDimensions
报表维度切换数据请求，入参格式请参看 rp_dimensionrequest
Report
var Report = {
setDrillValue: function (name, value)
}
253

事件行为详解
aPaaS 支持的行为的详细介绍
Presenter Event Action
Initial Preprocessor Interface Handlers
Nomal Actions
Data Process 数据处理 datarequest 数据请求 offlinemodelrequest 离线数据请求 cachedatarequest 缓存数据请求 datasubmit 数据提交 packagesubmit 数据打包提交 getter&setter 出入参规则
Paging 分⻚规则
Sorting 排序规则
FailProcess 数据请求失败处理 Page Functions 表单内部功能 alert
ctrlevent
call
refresh
Page Navigation 表单导航
link
return
Flycode
Particular Actions Pagelistrequest
ImportAndExport Approval Flow 审批流程 Report Actions 报表行为
254

Nomal Actions
OverView
[TODO]
255

Data Process 数据处理
DataProcess
数据操作相关的行为
以下属性为所有数据处理相关的行为共有的属性
isshowhint
是否显示提示信息，用于控制是否在行为执行过程中显示提示信息， bool 类型，默认值为 1 ，表示需要显示。 processhint
数据处理过程中显示的文字信息， string 类型，默认值为 请稍候...
{
"type": "",
"code": "",
"isshowhint": "1", "processhint": "请稍候...", ......
}
256

Data Process 数据处理
Datarequest
用于获取数据，执行错误将会中止整个 Event 事件执行
{
"type": "datarequest", "logiccode": "832886477808603136", "mode": "2",
"pagingsize": "20", "sorter": [
{
"name": "searchconditions", "ctrl": {
"code": "ctrl_filter",
"scope": "" },
"properties": [ {
"name": "storename", "value": "",
"ctrl": {
"code": "ctrl_sortbutton",
"component": "" }
} ],
} ]
"getter": [...],
"setter": [...] }
logiccode
事件所对应的业务行为
mode 表示执行行为的主体，有以下 3 种取值:
| Value | Meaning | | ----- | ------------------------------------------------------------ | | 0 | 本地 | | 1 | 网络行为，即需要通过 model code 和 logic code 来确定调用接口，进行网络操作 | | 2 | 网络+本地行为，本地行为需要执行对应的本地 SQL |
sort
请求结果的排序规则，请参看 Sorting
getter & setter
出入参的处理规则，请参看 Getter & Setter
pagingsize 数据分⻚大小，用于控制分⻚数据每次请求的数据量，详细信息请参看 Paging
返回数据中的提示信息 成功返回时的提示
257

Data Process 数据处理
由于有些时候数据操作的提示信息需要动态组装，并且需要支持多语言翻译，因此定义 **dataprocessresult 数据对象， 在数据操作的返回结果中返回，用于约定数据处理成功后的提示信息:
{
"bizdata1": { ... }, "bizdata2": { ... }, "**paging": { ... }, "**dataprocessresult": [
{
"message": "成功删除\(successnum)条⻔店数据，失败\(failnum)条!", "type": "info",
"params": {
"successnum": "58",
"failnum": "3" }
} ]
}
**dataprocessresult 为约定好的对象名称，如果返回数据中有这个对象，则需要根据规则显示提示信息，如果没有该对 象则不需要显示。
message
提示信息的内容，允许使用占位符 \(\*\*\*) 。
提示信息支持多语言，在多语言字典中会完整存储 message 的信息，包括其中的占位符。
在实际处理过程中，需要先将该内容翻译，再替换占位符内容;占位符内容不支持多语言。
占位符需要根据其中的变量名，在 params 中找到对应的值进行替换，如果出现找不到对应变量的情况，直接将占 位符替换为空串。
type
提示信息类型，取值如下:
| 值 | 说明 | | ------- | -------------------------- | | info | 普通提示信息，3S 后自动消失 | | warning | 警告信息，带一个确定
按钮 |
params 参数字典，用于 message 中的占位符替换
当有多个提示信息时，需要根据信息的 type，将相同类型的信息进行拼接合并显示;即先分别将所有的信息进行 翻译和占位符替换操作，然后将类型相同的信息用回⻋符拼接。
当同时有多个类型的信息时，先显示 warning，用户点击确认后再显示 info。 【目前可暂时只实现单个信息的情况】
失败返回时的提示信息
当数据请求失败时，其返回的数据结构如下:
error_type
{
"error_type": 600, "error_code": "出现异常", "error_params": null
}
258

Data Process 数据处理
标识当前的异常种类，对于前端处理错误提示信息来说，目前只需要处理 600 和 非 600 的情况。 error_code
具体的异常信息。
当 error_type == 600 且该字段不为空时，使用该字段的信息作为错误提示信息。
当 error_type != 600 或者该字段为空时，统一使用 出现异常，请联系管理员! 作为错误提示信息。 处理多语言时，该字段的处理方式与 **dataprocessresult 中的 message 字段一样。
error_params 参数字典，用于 error_code 中占位符的替换。
使用方式与 **dataprocessresult 中的 param 字段一样，只是只会有一组参数。 另外目前该字段还没有投入使用。
返回的数据无法识别时的提示信息
当有数据返回，但是无法识别其中的信息时，统一使用 网络请求返回数据格式错误，请联系管理员!
259

Data Process 数据处理
Offlinemodelrequest 离线数据更新请求 用于强制更新某些离线的业务对象数据
modelnames 需要更新的业务对象的 modellogicname，可以一次性更新多个
{
"type": "offlinemodelrequest", "modelnames": ["product", "store"]
}
260

Data Process 数据处理
Cachedatarequest 缓存数据搜索 缓存数据搜索行为不同于一般的数据搜索，后者是从已经归档的数据中获取符合制定条件的数据;而前者是在指定控件
的当前完整数据集中进行筛选，筛选过程中需要完整保留尚未归档(存储)的数据。
因此缓存数据搜索有以下几点要求:

1. 目前该事件只能由 filter 控件触发
2. 适用于需要进行编辑输入的数组型控件
3. 支持缓存数据的数组型控件，需要有一个普通的数据获取行为 datarequest 4. 支持缓存数据的数组型控件，需要缓存完整数据，以供筛选。
4. 支持缓存数据的数组型控件，需要能提供数据行是否被修改的判断能力。
   Protocol Control
   支持缓存数据的控件目前有 table , accordion 两个，这些控件都有一个属性用于指明是否需要支持缓存数据搜索:
   cacherequestable 指明控件是否需要支持缓存数据搜索。Bool 值，默认为 0
   Action
   缓存数据搜索是由 cachedatarequest 事件实际负责执行
   {
   "cacherequestable": "0"
   }
   {
   "type": "cachedatarequest", "containerctrlcode": "832886477808603136", "relaterequestcode": "586655877452365687", "conditions": {
   "ctrlcode": "ctrlcode_filter", "properties": [
   [
   {
   } ],
   [
   {
   "name": "storename", "value": "", "comparison": "contain", "ctrl": {
   "code": "ctrl_filtertextinput_storename",
   "component": "" }
   "name": "\_\_ismodified", "value": "", "comparison": "equal", "ctrl": {
   "code": "ctrl_checkbutton_ismodify", "component": ""
   261

Data Process 数据处理
} }
] ]
} }
containerctrlcode
用于指定缓存数据来源控件，该控件负责提供完整的缓存数据以供筛选
relaterequestcode
用于指定该数据来源控件的数据获取 action，通常就是该控件 onload 事件中的 datarequest 需要从该关联行为中得到其中的 setter 用于缓存数据筛选后的赋值映射
conditions
筛选条件，目前只支持 search，不支持 sort
ctrlcode
指定 filter 控件 code
properties
筛选的属性和筛选控件之间的关系，和 datarequest 中的 getter 类似，但不同之处在于这里的属性有两层数组 组成，第一层之间是 AND 关系，第二层的条件之间是 OR 关系
comparison
对比方式，有以下取值
| value | field type | meaning | | ------- | ---------- | -------- | | equal | string | 相等 | | contain | string | 包含 | | large
| double | 大于等于 | | less | double | 小于等于 | | after | date | 大于等于 | | before | date | 小于等于 | 修改项处理约定
在实际的应用中，缓存搜索通常需要进行数据行是否修改的筛选，为此约定了一个叫 **ismodified 的字段用于存储和 对比。
即在从 containerctrlcode 请求回来的原始数据中，会增加一个叫 **ismodified 的字段，该字段的的取值为 0 或 1 ，分别表示未修改和已修改。如果要对该字段进行筛选，就要在 filter 中配置一个 checkbutton 控件，并设好该控件 的选项为 0 和 1 。然后就可以在 properties 中将该控件与字段 **ismodified 进行关联。
进行搜索时，该字段搜索需要进行特殊处理，即，当控件值为 1 时，需要对 **ismodified 字段进行搜索;当控件值为 0 时，需要从搜索条件中移除该字段。
处理时序
262

Data Process 数据处理
Datasubmit
Data Submit 数据提交
{
"type": "datasubmit", "code": "",
"logiccode": "111111111111", "queue": "0",
"mode": "network",
"getter": [],
"setter": []
}
数据提交的属性中，名字和 datarequest 一致的，其含义也一致，可以直接参考 datasubmit。 不过以下几个属性是数据请求中没有的: sorter , pagesize 。也就是说数据上传是没有排序或者分⻚的属性的。 数据提交特有的属性有:
queue
调用请求是否放入队列，主要用于网络数据上传。
| Value | Meaning | Behavior when mode = 2 | | ----- | ------------ | ------------------------------------------ | | 0 | 即时执行 |
先执行网络行为，成功后再执行本地行为 | | 1 | 放入队列执行 | 先执行本地行为，成功后再将网络请求放入队列 |
263

Data Process 数据处理
Packagesubmit
打包提交，在 pageareacode 所指向的表单区域的所有表单中，找到提交数据的行为，通过该行为来获取提交数据，然 后打包，进行一次性提交。
提交数据行为的查找，是通过表单的 submitaction 属性，找事件中找到对应的 datasubmit
pageareacode
表单容器的 code，通常是 tabpagearea 的 code mode
与 datasubmit 的 mode 属性有相同的取值和含义，不同之处在于当 mode==2 时，本地语句将会一条条的执行，且 如果某个子上传行为不支持本地操作，也就是 sql 属性为空的话，就直接忽略该子表单的本地存储行为
{
"type": "packagesubmit", "condition": "", "pageareacode": "", "queue": "0",
"mode": "2"
}
264

Data Process 数据处理
Customrequest
自定义请求，用于执行一个自定义的 http 接口
uri 用于指定该自定义接口的 uri。该行为会自动在其前面添加当前的使用的服务器地址的前缀。 getter
与 link 行为的 param 参数功能一致
setter
与 recivelink 行为的 param 参数功能一致
默认使用 post 方式，多个请求是同步执行的，一个请求执行结束后才执行下一个
{
"type": "customrequest", "uri": "XXfunction/XXapi", "getter": [...],
"setter": [...]
}
265

Data Process 数据处理
Getter & Setter Getter 说明
getter 用于数据请求或者提交时的入参获取 getter 支持使用多个数据对象对入参数据进行包装
"getter": [ {
"name": "searchconditions", "datatype": "0",
"ctrl": {
"code": "",
"scope": "" },
"properties": [ {
"name": "storename", "value": "",
"ctrl": {
"code": "ctrl_filtertextinput_storename",
"component": "" }
} ]
} ]
name
入参对象名称，入参在组装数据时使用该名称作为对象名称
datatype
数据类型，指定该入参对象的数据结构， 0 表示为单对象数据， 1 表示为数组型数据
ctrl
用于指定该入参对象的数据来源容器，通常为数组型控件，例如列表，表格等。 filter 作为一种特殊的容器，在获取其中的控件值时也需要在此配置 filter 的 code，此时 scope 属性无效。
code 入参数据来源容器控件的 code，不配置该值表示来入参对象中的属性值来源的控件均不在数组型控件或者 filter
中。
scope
提交数据的范围，用于数组类型数据的控件提供数据的范围依据，对于普通的非数组类型的数据无效。
| Value | Introduction | | -------- | ------------------------------------------------------------ | | modified | 修改项，指只提交 有修改的数据项，修改的含义是指和初始数据有差异 | | checked | 勾选项，指只提交用户勾选了的数据，需要 对应控件具备勾选功能，例如表格 | | focused | 焦点项，指只提交当前焦点所在位置，例如列表每一行都有一 个收藏按钮，点击后就会收藏按钮所在的这一行。 | | all | 全部项 |
由于 modified 和 checked 需要控件能记忆数据，如果控件不能一次性获取全部数据，而是依靠搜索条件 动态从数据源获取的，则每次搜索都会清空之前记录。
properties
266

Data Process 数据处理
入参对象属性的详细规则
name 属性名称，该名称作为入参对象属性的名称，如果 ctrl.code 并未配置，则该名称还同时用作查询内存属性值的
key。
value 默认值，支持逻辑表达式，使用规则参看下方的数据获取链路说明 ctrl
入参对象属性来源控件
code
控件的 code
component
对应该控件中的元素，具体参看各个对象的定义，当为空时，默认为 value 元素
数据获取链路
优先级由高到低排列如下:

1. 事件传参 2. 控件值 3. 内存值 4. 默认值
   当链路节点中获取不到值，或者获取到的是空值时，即需要向下一级链路取值
   范围数据提交校验规则
   对于数组型控件的数据校验遵循以下两点
1. 根据提交数据范围，有需要提交的数据行时，所有需要提交的数据行，都需要对行内的所有控件进行校验。有任一 控件校验不通过，即视为该数组型控件数据校验不合法。
1. 根据提交数据范围，没有需要提交的数据行时，检查该数组型控件本身是否是必填。如果为必填，则判断数据校验 不合法。
1. 其他情况均为校验合法。
   Setter 说明
   setter 用于数据请求行为之中，用于指定请求回来的数据如何存储使用。 setter 目前的设计是可以同时接受多个数据对象，每个数据对象都有自身。
   "setter": [ {
   "name": "kx_store", "datatype": "1", "ctrlcode": "", "properties": [
   {
   "name": "storeid", "alias": "customerid", "ctrl": {
   "code": "",
   267

Data Process 数据处理
"component": "" }
} ]
} ]
name
数据对象名，用于多个对象数据中进行数据区分
datatype
数据类型， 0 表示为单对象数据， 1 表示为数组型数据 所有的数组型数据都应该与一个可以接收数组型数据的控件关联 此时的数据均当做关联控件的范围值，由该控件负责管理这些数据。 范围值目前有两种:
选项范围值
用于选项类控件，如下拉框等
内容范围值
用于数组值控件，如列表，表格等
ctrlcode
当数据为数组时，需要设置该属性，用于设置接收该数组数据的控件 code。
properties
数据对象属性列表，用于指定数据对象中的具体属性，以及其可能包含的控件绑定关系
如果数据类型是单对象，则帮定的关系是直接绑定到具体的一个控件上;如果是数组类型的对象，则绑定到数组对
象对应的控件的子项上，可能是选项的一个字段，或者是子控件
name
属性名称
alias
新的绑定关系名，如果配置了该值，则需要将该数据以 newname 所指定的值作为 key ，设置内存对象。 ctrl
绑定控件的相关信息，当没有配置该信息时表示该属性作为内存属性存储
code
控件的 code，当数据用于 选项范围值 时，不用配置该项 component
控件的元素
268

Data Process 数据处理
Paging 分⻚协议 分⻚是处理大量数据加载的一种技术手段，会由多个环节共同形成一个分⻚请求。
通常是由控件发起分⻚请求，其中包含需要请求的分⻚序号 **pageindex ，然后由数据请求行为 datarequest 根据其分 ⻚大小属性 pagesize 的设置，包装出分⻚请求对象 **paging ，并将该对象附加在数据入参之中进行数据请求。
请求数据在返回后，由 datarequest 根据 setter 设置进行分配。 由于发起分⻚事件可以由支持分⻚的控件发出，也可以由 filter 控件发出，所以分⻚的信息分成两部分村粗
pageindex ⻚码 由控件负责存储 pagesize 分⻚大小 由数据请求事件负责存储
时序图如下
269

Data Process 数据处理
Related Protocol 相关协议
支持分⻚的控件
数组值控件 均支持分⻚，如 list , table
部分 选项值控件 的选项支持分⻚，如 picklist 等，具体参看控件定义。 这部分控件均有一个叫 pageable 的属性用于决定是否支持分⻚:
当 pageable = 0 时，不传递 **pageindex ，默认值为 0
所有支持分⻚的控件，如 list 需要在其实现中自行储存当前的 **pageindex ，并根据 pageable 的设置决
定是否传递该值;
在该控件接收到 **paging 参数对象时，需要根据其中的 **pageindex 决定其数据更新行为，并同时更新其
存储的 **pageindex 的值。如果没有接收到 **paging ，默认将 \_\_pageindex 设置为 0
支持分⻚的事件
目前只有 datarequest 事件支持分⻚，该事件有一个叫 pagesize 的属性决定是否支持分⻚，以及分⻚大小
{
"type": "list",
"pageable": "1" }
{
270

Data Process 数据处理
"type": "datarequest",
"pagesize": "20" }
pagesize = 0 表示不支持分⻚，默认值为 0
根据不同的 pagesize 的值，以及事件传参所传递的 **pageindex 的值，该事件的处理如下
| | 无 **pageindex | 有 **pageindex = n | | --------------- | ------------------------------- | ------------------------------- | | pagesize = 0|空 | 不组装 **paging | 不组装 **paging | | pagesize > 0 | 组装 **paging ， **pageindex = 0 | 组装
**paging ， **pageindex = n |
**paging 数据结构 请求数据(入参)
**paging
分⻚对象
**pageindex
请求的⻚码
**pagesize
分⻚大小
返回数据(出参)
{
"bizdata":{ },
"**paging":{ "**pageindex": "0", "**pagesize": "20"
} }
{
"bizdata1": [],
"bizdata2": [], "**paging":{
"**pageindex": "0", "**pagesize": "20", "**itemcount": "90"
} }
\_\_itemcount
总的数据条数，可以不返回，此时前端只能根据返回数据是否为空来判断数据是否已经取完。
271

Data Process 数据处理
Sorting
排序用于数组型数据控件，需要根据一定条件进行按顺序显示数据时使用。
Related Protocol 相关协议
排序控件
sortbutton 目前唯一一个专⻔用于排序的控件，不能单独使用，只能放置在 filter 中使用。 filter
用于集中显示搜索和排序的控件，可以用于容纳 sortbutton
table
当 table 支持排序时，其所有列的表头均会自动支持点击排序。
filter 和 table 叫做排序容器，对于一个需要显示排序数据的控件，只能有一个排序容器与之对应，table 控件就是 其自己的排序容器，所以如果 table 自身支持排序，则与之关联的 filter 中就不能有排序控件
排序的事件
目前由 datarequest 事件支持排序，排序的值的来源
// filter
{
"type": "datarequest", "sorter": {
"ctrl": {
"code": "ctrl_filter", "scrop": ""
}, "properties": [
{
"name": "name",
"ctrlcode": "ctrl_sortbutton_name" },
{
"name": "price",
"ctrlcode": "ctrl_sortbutton_price"
}, {
"ctrlcode": "ctrl_sortbutton_number" }
] }
}
// table
"name": "number",
{
"type": "datarequest", "sorter": {
"ctrl": {
"code": "ctrl_table", "scrop": ""
},
272

Data Process 数据处理
"properties": [ {
"name": "storename",
"ctrlcode": "ctrl_productname" }
] }
}
ctrl
排序条件所在的容器，用于之后请求事件
properties 类似于 getter 中的 properties，用于指明控件与属性的绑定关系，不同之处在于，事件不会单独向这些控件索取值，
而是直接向排序容器索取值，然后再组装，详⻅下方说明
排序数据处理说明 排序处理时序
说明

1. sortcontainer 需要对外提供获取完整排序条件的接口，该接口返回所有排序值不为 nil
   的控件值，示例如下:
   {
   "ctrlcode_name": "asc",
   273

Data Process 数据处理
"ctrlcode_price": "desc" } 2. datarequest 事件需要根据 sorting 中的映射定义，将获取到的数据映射到对应的对象属性中，例如:
{
"\_\_sorting": [
{
"key": "name",
"type": "asc" },
{
"key": "price",
"type": "desc" }
] }

1. 最终的请求入参结构如下
   {
   "bizdata": { ... }, "**paging": { ... }, "**sorting": [
   {
   "key": "name",
   "type": "asc" },
   {
   "key": "price",
   "type": "desc" }
   ] }
   274

Data Process 数据处理
FailProcess 网络数据请求失败 UI 处理方案 网络数据请求的发起源
只要有 onload 事件的，都可以进行网络数据的发起和接收

1. 表单
2. 数组型控件 3. 选项型控件
   数据请求状态种类
   以下内容删除，取值以 UIFlyCode 文档为准
   种类取值 说明
   请求完成 0 (暂不实现)
   请求失败的信息传递
   请求失败与请求成功一样，都是通过 datarequest 里面的 setter 的 ctrlcode 进行通知，如果 ctrlcode 配置了控件的 code，则 失败信息通知对应的控件;否则失败信息将会直接通知给表单。
   控件会提供对应的刷新按钮，表单会提供一个弹窗来提示用户是否要再次请求数据。再次请求数据会触发对应的 reload 事件。
   Flycode 处理请求失败
   Page , ArrayCtrl 和 PickerCtrl 对象新增方法 setLoadStatus(statusType) 。
   数据请求失败状态去除
   当控件在接收到新的数据时，即自动撤销之前的失败状态。
   数据请求失败 UI 示例
   有三种显示效果，根据不同的情况使用
   覆盖型
   请求中 1 (暂不实现)
   出错 2 例如入参出错导致的执行失败等
   超时 3 网络请求超时，如服务器资源不足
   断网 4 当前设备没有网络等
   275

Data Process 数据处理
适合数组型控件
弹窗型
适合表单
内嵌型
适合带选项控件
只有对应的选项控件配置了 onreload 事件才会支持这种显示方式。
276

Page Functions 表单内部功能
PageFunctions
[TODO]
277

Page Functions 表单内部功能
Alert
警告信息，用于显示提示或警告信息。
{
"type": "alert",
"condition": "",
"message": "确定要启用选中的终端吗?", "choices": [
{
"title": "确定",
"handler": "22222222222" },
{
"title": "取消",
"handler": "" }
] }
message
显示内容，支持字符串表达式
choices
定义提示的按钮操作。
当没有配置任何按钮时，alert 显示为一个 3 秒后自动消失的消息框 title
按钮标题
handler
按钮对应的执行事件，如果没有配置则不执行任何事件
alert 事件不会阻塞事件执行，因此配置在 alert 之后的事件将会继续执行
278

Page Functions 表单内部功能
CtrlEvent
触发当前 page 的某个控件绑定的 event
ctrlcode 被触发的控件的 code trigger 被触发的控件的 trigger
{
"code": "897995503285964871", "type": "ctrlevent", "ctrlcode": "5464646454556465", "trigger": "onload"
}
279

Page Functions 表单内部功能
Call
事件呼叫行为，同步，必须等待事件执行完才继续执行，按 key 查找
key 指定调用的 key，系统将会广播改 key，所有当前存在的⻚面都会收到该广播，并执行与该 key 一致的事件(handler
中)。
pagecode
默认情况下向所有表单广播，也可以通过该属性向指定的某一个表单进行广播
param call 支持附带参数
{
"code": "897995503285964871", "type": "call",
"pagecode": "",
"key": "\_\_pageprocesscomplate", "desc": "拜访表单处理完成事件" "param": {}
}
"param": //call 支持参数 {
"datatype": "0", //需要根据 datatype 打包，拆包打包的 datatype 需要一致 "ctrl": {
"code": "",
"scope": "" },
"name": "kx_product", "properties": [
{
"ctrl": {
"component": "",
"code": "" },
"name": "productid",
"value": "le:uuid()" },
{ //在当前表单的文本控件获取新建的产品名字 "ctrl": {
"component": "",
"code": "883266839692709975" },
"name": "productname",
"value": "" }
] }
280

Page Functions 表单内部功能
Refresh
刷新事件，目前与 call、eventlink 组合使用，接受后一⻚面向前一⻚面传参
param refresh 接收的参数
{
"type": "refresh", "param": {}
}
"param": {
"datatype": "0", //需要根据 datatype 拆包，拆包打包的 datatype 需要一致 "name": "kx_product",
"ctrlcode": "882838950048305222", //列表控件
"optype": {//当 ctrlcode 不为空且为容器类控件有效，
//取值有:insert 从头插入; append 从尾加入;
// insertorupdate:与 key 配合使用，存在的刷新，不存在的在头插入
// insertorupdateordelete:与 key 配合使用，存在的刷新，原数据不存在于新数据的删除，新数据不存在于原数据的从头插入
// refresh:清空所有，加入新数据
// refreshindex:刷新某一行，某一行由容器控件记录，比如点击时记录 //默认为空，效果与 refresh 一致
"type":"insert",
"key":"" },
"properties": [ {
"ctrl": { "component": "", "code": ""
},
"name": "productid" },
{
"ctrl": {
"component": "",
"code": "882838950048305221" },
"name": "productname" }
] }
281

Page Functions 表单内部功能
Share
分享行为，目前只在手机端实现，可以将当前表单指定控件的内容，或者当前表单整体的内容，以截图形式分享出去。
provider
分享内容的提供者，可以是需要分享的控件的 code，也可以是整个表单(使用指定的关键字 **page ) 默认值为 **page ，即分享整个表单可分享的内容。
imagewidth 分享出去的图片的宽度，没有设置的时候，默认为当前显示的宽度。只在分享的内容是图片的时候有效。 通常用在希望分享出去的图片更宽一点，内容能更紧凑一点
分享内容说明
目前所有的分享都以图片形式进行，需要支持分享内容的控件包括:
{
"code": "897995503285964871", "type": "share",
"desc": "分享指定的控件", "provider": "somectrlcode", "imagewidth": ""
}
控件 说明
webview 完整的网⻚内容
InteractiveWebView 完整的网⻚内容
\_\_page 完整的表单内容
282

Page Navigation 表单导航
PageNavigation
[TODO]
283

Page Navigation 表单导航
Link
链接到指定的表单
{
"type": "link",
"condition": "", "pagecode": "", "mode": "popup", "pagesize": {
"width": "60%",
"height": "200" },
"param": {
"name": "**linkparam", "datatype": "0", "ctrl": {
"code": "ctrl_calendar",
"scope": "focus" },
"properties": [ {
"name": "**calendar_date", "value": "",
"ctrl": {
"code": "",
"component": "" }
}, {
}, {
} ]
"name": "**pagestatus", "value": "2",
"ctrl": {
"code": "",
"component": "" }
"name": "**pagetitle",
"value": "le:user('name')+'请假单'", "ctrl": {
"code": "",
"component": "" }
} }
pagecode page 的 code。支持逻辑表达式，可以通过逻辑表达式计算出转跳到的⻚面。 mode
| 名称 | 取值 | 描述 | | ---- | ------- | ------------------------------------------------------------ | | 推入 | push | 将下一个 page 推入 到当前的导航控制器中，默认值 | | 替换 | replace | 使用下一个 page，替换当前 page | | 弹窗 | popup | 创建新的导 航器，以弹窗形式展现在当前 page 之上，下一个 page 作为新导航器的第一个界面(手机端暂不支持弹窗中跳转) | | 新建 | present | 创建新的导航器，以全屏形式展现在当前 page 之上，下一个 page 作为新导航器的第一个界面 (web 端表现为在新的浏览器⻚签中打开) |
pagesize
284

Page Navigation 表单导航
指定链接目标表单显示大小，目前只在弹窗模式下起效。
通过分别指定 width 和 height 来设置 page 的大小，这两个维度接受以下取值:
0 或者空值
代表在该维度的尺寸需要根据内容大小自适应。
正整数
取值范围为 (0, +∞] ，代表该维度的具体的 dp 值。
百分比
取值范围为 [0%, 100%] ，代表该维度在所占可显示区域的百分比。 IDE 可以提供以下几种默认取值
| 显示文本 | 实际值 | | -------- | ------ | | 大 | 80% | | 中 | 50% | | 小 | 30% |
param 链接时的传参需要在 param 中进行指定，如果不指定，默认会将其所在 page 的所有数据传入。 所链接到的下一个 page 需要使用 receivelink 动作对参数进行接收绑定。
如果发起链接的是一个列表行，列表行中的控件，表格行中的控件等，通常需要指定 scrop 属性为 focused ，这样就能指定去触发链接的数据行中进行数据传参
285

Page Navigation 表单导航
receivelink
接收参数的行为，目前该行为只能放置在 initial 节点中，且也是目前唯一能放入 initial 节点中的行为。
{
"code": "896903044652994649", "type": "receivelink", "desc": "参数接收",
"param": {
"datatype": "0", "name": "\_\_linkparam", "ctrlcode": "", "properties": [
{
"name": "id",
"alias": "storeid", "ctrl": {
"component": "",
"code": "" }
} ]
} }
286

Page Navigation 表单导航
Return
返回到某一表单
pagecode
指定要返回的 page 的 code，为空的时候需要根据 pagecount 的值来判断返回路径，默认值为空 pagecount
指定要返回的 page 级数，例如 pagecount = 1 表示返回到上一级表单。
只有当 pagecode 为空的时候才会使用 pagecount 来判断返回路径。
当 pagecode 和 pagecount 均为空的时候，表示返回上一级表单。
{
"type": "return", "condition": "", "pagecode": "", "pagecount": "1"
}
287

Flycode
Flycode
表单逻辑处理，用于执行一段 flycode 脚本
使用该行为逐步替换其他类型的表单逻辑行为 局图的 flycode 的相关信息请参看 Flycode 的文档
{
"type": "flycode",
"script": "if .... else ...."
}
288

Particular Actions
OverView
[TODO]
289

Pagelistrequest
Pagelistrequest
控件想要获取到指定目录的可⻅表单列表，需要使用 pagelistrequest 进行列表数据获取。 该事件有固定的出参结构(参看下方出参说明)，因此不再进行出参绑定。
{
"type": "pagelistrequest", "ctrlcode": "",
"folderkey": "客户拜访店面工作", "bizproperties": [
{
"name": "customertype", "value": "",
"ctrl": {
"code": "",
"component": "" }
} ]
}
ctrlcode
进行列表请求的控件的 code，请求结果会直接发送给该控件。 如果发起请求的表单流之类的特殊表单，只需要填写对应特殊节点(例如 pageflow , pageswitch )的 code 即可 folderkey
想要请求的目录的 key 值，目前只支持填一个固定值。
bizproperties
请求额外需要的业务数据，作用与 datarequest 的 getter 类似，只不过没有容器控件的指定。
手机端接口
pagelistrequest 是一个特殊的行为，对于 Web 端，直接调用指定的接口 对于手机端，需要调用内部 API，实现具有以下出入参能力的接口:
入参
入参只需要提供一组按目录结构从上到下排序好的 key 的数组即可。这些 key 对应于 action 中的 folderkey 和 bizproperties 属性的值，以上方 Action Protocol 协议中的例子来说，如果此时 customertype 获取到的值为 123456 ， 则组装后的完整入参为 :
出参
出参就是一个 pageinfo 的数组
["key1", "key2", "key3"]
["客户拜访店面工作", "123456"]
290

Pagelistrequest
[
{ // pageinfo struct
"title": "标题", "icon": "", "pagecode": "", "description": "", "submitevent": "", "hidden": ""
} ]
运算过程
运算大致过程如下
func getPageList(inputKeys: [String]) { //
var tmpPagelist = [] var keyPath = ""
for key in inputKeys {
keyPath.appendKey(key)
tmpPagelist.append(findPagesForKeyPath(keyPath)) }
var pagelist = []
for page in tmpPagelist {
if isVisible(page) { pagelist.append(page)
} }
return pagelist }
支持表单列表请求接口的模块
能够支持导航接口的模块(通常是控件)，需要提供一个可以使用 pageinfo 数据进行赋值的接口。 目前内置的功能中， functionlist 和 flowpage 支持使用表单列表请求接口。 手机端的处理时序大致如下:
291

Pagelistrequest
292

ImportAndExport
ImportAndExport
数据导入导出行为
Import 导入 Protocol
{
"type": "dataimport",
"condition": "",
"template": "code",
"logiccode": "832886477808603136", "extraparam": [
{
"title": "请选择数据重复的处理方式", "paramkey": "\_dataaddmode", "options": [
{
"text": "全部覆盖", "key": "1"
}, {
"key": "2" }
"text": "追加",
] }
], "getter": [
{
"name": "storeinfo", "datatype": "0", "ctrl": {
"code": "",
"scrop": "" },
"properties": [ {
"name": "storetype", "value": "",
"ctrl": {
"code": "",
"component": "" }
} ]
} ]
}
template
用于指定对应的模板。
具体的值目前尚未定义，需要等进一步的接口说明。
logiccode 导入对应的业务逻辑 code，导入行为在准备好各项参数后，最终会将相应参数插入到该业务逻辑的入参值中。
293

ImportAndExport
extraparam
附加参数，用于扩展定制化的导入行为，由多个自定义选项组成，可以为空。 这些参数都是以选项的形式提供，只能单选，且取值时固定取选项的 key 值。
title
选项标题
paramkey
选项的参数名
options
可供选择的选项，与下拉框的选项值相同。
getter
与 datarequest 中的 getter 功能一致，用于组装入参
时序说明

1. 加载模板目前 Demo 阶段直接使用本地文件
2. 调用导入业务行为时，需要将导入参数加入到业务行为的入参中，例如
   // 原始业务行为入参 {
   "storeinfo": { "storetype": "123456"
   } }
   // 加入导入参数后的入参 {
   "storeinfo": {
   "storetype": "123456", "fileurl": "xxxxxx", "sheetnames": "[xxxx, xxxx]", "\_dataaddmode": "1"
   } }
   详细接口说明请参考导入导出接口，UI 效果请参考原型图
   Export 导出 Protocol
   {
   "type": "dataexport",
   "condition": "",
   "logiccode": "832886477808603136", "filename": "",
   "sheetname": "",
   "getter": [
   {
   "name": "storeinfo",
   294

ImportAndExport
"datatype": "0", "ctrl": {
"code": "",
"scrop": "" },
"properties": [ {
"name": "storetype", "value": "",
"ctrl": {
"code": "",
"component": "" }
} ]
} ]
}
logiccode
导出对应的业务逻辑 code
filename 导出 excel 文件的文件名，需要加入到业务行为调用的入参中。 sheetname 导出 excel 文件的 sheet 的名称，需要加入到业务行为调用的入参中。 getter
与 datarequest 中的 getter 功能一致，用于组装入参
时序说明
导出行为没有额外的操作，插入的入参目前也只有 sheetname 一个字段。
Import Export List 导入导出列表
导入导出是一个异步行为，用户需要在导入导出列表中查看当前的处理进度。 UI 效果请参看原型图
接口说明请参看导入导出接口
295

Approval Flow 审批流程
Approval Flow 流程管理相关事件 用时实现定制的审批流程配置的事件。
Approval List Action 获取审批列表行为 获取待办、已办列表的接口，该行为调用的接口已经对应的出入参约定与内建审批列表的数据获取一致，请参看其中关
于 审批列表数据获取 的说明。 Protocol
{
"type": "af_getflowlist", "pagesize": "20", "querytype": "0", "querycondition": [
{
"name": "categoryname", "value": "",
"ctrl": {
"code": "",
"component": "" }
} ],
"targetctrlcode": "order_list", "targetproperties": [
{
"name": "af_processinstancename", "ctrl": {
"code": "name",
"component": "" }
} ]
}
pagesize
分⻚大小，默认为 20
querytype
请求的列表的种类
| 值 | 含义 | | ---- | ---- | | 0 | 待办 | | 1 | 已办 | querycondition 请求的附加条件，可以为空，表示没有附加搜索条件。 支持的条件参数名称如下
| 名称 | 含义 | | ------------------- | ------------ | | processinstancename | 流程实例名 | | processdefinename | 流程定义 名称 | | applyusername | 发起人 | | startdate | 流程开始时间 | | enddate | 流程结束时间 | | categorycode | 分类的 code | | categoryname | 分类的名称 |
targetctrlcode
296

Approval Flow 审批流程
请求回来的数据所赋值到的控件的 code，通常是一个列表控件
targetproperties 数据赋值所使用的属性映射关系，与 datarequest 的 setter 属性中 properties 的含义一致 返回的数据的 key 值，请参看接口说明 Approval List
为了简化配置，此处属性的配置中，配置人员可以只配需要显示，或者明确下一个⻚面需要的参数;但由于 通常下一个⻚面为处理流程的⻚面，而处理流程有几个必填的 processinfo 参数的需求，因此在实现中，前 端应该去检测 targetproperties 中是否有这几个参数，没有的话，应该自动添加上去，方便之后的获取。
Request
POST API:~/workflow/flow/getmyprocesslist
Response
{
}
"af_pageindex":1, "af_pagesize":10, "af_querytype": 0
//⻚码
//⻚大小
//查询类型，待办:0, 已办:1, 默认查待办
{
"resp_data": {
"af_pagecount": 1, //总⻚数 "af_pagesize": 10, //⻚大小 "af_itemcount": 1, //记录总条数 "af_items": [
{
是否已设置处理人
"af_assigned": true, //
"af_processdefineid": "expenseflow:1:72504", // "af_processinstanceid": "75001", // 流程实例 Id
"af_processinstancename": "小王的费用", // "af_processdefinekey": "expenseflow", // "af_processdefinename": "费用报销流程", //
"af_taskid": "75006", // 任务 Id
"af_taskkey": "usertask1", // 任务 Key
"af_taskname": "渠道业务员发起", // 任务名称 "af_createtime": "2017-03-24 15:46:03", // 任务创建时间 "af_applyusercode": "831025515799248802", // 流程发起人 Id "af_applyusername": "渠道业务员", // 流程发起人姓名
流程定义 Id
流程实例名称 流程定义 Key
"af_applytime": "2017-03-24 15:46:03", // "af_statusname": "待处理", // 状态 "af_operator": "处理" // 处理
流程定义名称
流程发起时间
} ]
} }
Approval Pre Add Action 发起审批行为 通过指定需要发起的流程种类，来获取流程的基础信息。
Protocol
{
"type": "af_preaddflow",
297

Approval Flow 审批流程
"af_processdefinekey": "expenseflow", // 用于指定需要发起的流程种类 "mode": "popup", // 与 link 事件相同
"param": {} // 与 link 事件相同 }
af_processdefinekey
需要发起的流程的种类
调用接口:~/workflow/flow/preaddflow Request
POST API:~/workflow/flow/preaddflow
af_processdefinekey
直接使用 action 的 processdefinekey 属性即可 Response
与在内建审批种类列表中发起的传参一致
Approval Handle Action 处理审批行为
{
"af_processdefinekey": "expenseflow" //流程定义 Key
}
{
"resp_data": {
"af_processdefineid": "expenseflow:1:72504", "af_processdefinekey": "expenseflow", "af_processdefinename": "费用报销流程", "af_applyuicode": "firstForm"
//流程定义 Id //流程定义 Key //流程定义名称 //流程发起 UI 对象编码
} }
{
"type": "af_handleflow", "processinfo": [
{
"name": "af_processdefineid", "value": "",
"ctrl": {
"code": "",
"component": "" }
} ],
"businesskey": "orderid"
"param": {} // 与 link 事件相同 }
processinfo 流程的基本信息，共有 4 个参数需要填写，而且是必须每个都要填写
| key | 说明 | | -------------------- | ---------- | | af_processdefineid | 流程定义 ID | | af_processinstanceid | 流程实例 ID | | af_taskid | 任务 ID | | af_taskkey | 任务 key |
298

Approval Flow 审批流程
businesskey
用于指定业务数据的主键的 key，该行为会将从流程服务接口中获取到的业务主键，赋值给 businesskey，并以传参 形式传递给下一个⻚面。
299

UIFlyCode 概述
什么是 UIFlyCode UIFlyCode 为引擎运行时脚本语言，提供了比配置协议更为灵活快捷的 UI 操作及业务逻辑处理能力。它是基于 Javascrpit
的脚本语言，遵从原生 ES5 的标准语法。 UIFlyCode 加载时机
UIFlyCode 加载时机有三个:

1. 表单行为时加载
   在表单行为中加载 UIFlyCode 并在引擎中⻢上运行，这些被加载的 UIFlyCode 只能在当前表单及当前执行时机被使 用。
2. 静态加载 在 App 在初始化时，被预加载到 UIFlyCode 引擎。通常，SDK 中的 UIFlyCode 及产品打包时内置的 UIFlyCode，都使
   用该方式加载。静态加载的 UIFlyCode 能在任意表单及执行时机被使用。
3. 登录后加载
   在用户登录后被加载到 UIFlyCode 引擎，能在任意表单及执行时机被使用。此类 UIFlyCode 会在登录后⻢上下发， 内容会根据用户权限不同而不同，这种加载方式也可用于热修复静态加载的 UIFlyCode 中 Bug。
   UIFlyCode 执行时机
   UIFlyCode 在表单中执行的时机有两个: 1. 预处理
   表单在初始化后(onload 事件之后)，会执行一段 UIFlyCode，在这里可以进行表单中的控件的属性(hidden、 readonly 等)进行修改。
4. 事件中的 FlyCode 行为
   可以在任意事件中通过 FlyCode 行为来执行一段 UIFlyCode 代码，在这里可以修改控件的属性、请求数据、以及业 务逻辑处理等操作。
   "presenter": { "preprocessor": {
   "default": {
   "script": "//js code"
   }, }
   }
   "handlers":[ {
   "code": "handler_loaddata", "description": "使用 flycode 加载数据", "actions": [
   {
   "type": "flycode", "script": "//js code"
   } ]
   } ]
   300

UIFlyCode 概述
UIFlyCode 释放时机
UIFlyCode 释放时机有两个: 1. 用户注销
此时机下会释放“表单行为时加载”和“用户登录后加载”的 UIFlyCode 1. 杀掉 App
此时机下会释放所有 UIFlyCode
301

UIFlyCode 函数清单
UIFlyCode API 分为控件、表单和系统三大部分，每部分再根据不同的业务操作细分出各类 API。
302

控件
[TOC]
控件
Ctrl 通用控件
不针对特定控件所有描述，其对控件的值、属性和配置绑定事件等的操作具有广泛的适用性
属性及函数列表
API 类型 说明
function(ctrlName) 函数 构造函数
code get 属性 获取控件的编码
value get/set 属性 获取或设置控件的值
hidden get/set 属性 获取或设置控件的隐藏属性
readonly get/set 属性 获取或设置控件的只读属性
required get/set 属性 获取或设置控件必填属性
color set 属性 设置控件的前景色
backgroundColor set 属性 设置控件的背景色
setProperty 函数 设置控件的任意属性的值
getProperty 函数 获取控件的任意属性的值
setValue 函数 根据规则设置控件的值
getValue 函数 根据规则获取控件的值
setValidateResult 函数 把校验结果设置到控件上
validateValue 函数 触发控件自身的校验行为(自动标红)，并返回校验结果
triggerEvent 函数 触发控件 EventTrigger 属性所绑定的事件
PickerCtrl 选项类控件 用于对选项类控件(如 DropdownBox、SelectBox 等)的选项进行操作
属性及函数列表
ArrayCtrl 数组型控件
API 类型 说明
function(ctrlName) 函数 构造函数
setOption 函数 设置控件的选项值
setLoadStatus 函数 设置控件的加载状态
303

控件
指像 List、Table 之类的由数组型数据驱动显示的控件。 属性及函数列表
API
function(ctrlName)
类型 说明
函数 构造函数
checkedNumber get 属性 获取数组型控件勾选的数量
pageIndex get 属性 获取数组型控件的当前分⻚索引
rowNumber get 属性 获取数组型控件的总行数
sectionNumber get 属性 获取数组型控件的总分组数
getSectionHeader 函数 获取指定分组索引的分组头控件
getRowNumberInSection 函数 获取数组型控件某一分组下的行数
getRowAtIndexPath 函数 获取数组型控件中某一行
getCheckedRows 函数 获取数组型控件中所有被勾选的行控件
getFocusRow 函数 获取数组型控件的焦点行控件
getFocusRowIndexPath 函数 获取数组型控件的焦点所在的行索引
getAllData 函数 获取数组型控件中所有分组的所有数据
reloadRows 函数 刷新多个行的数据
reloadSections 函数 刷新多个分组索引对应的分组数据
insertRows 函数 在指定位置连续插入若干行数据
insertSections 函数 在指定位置连续插入若干分组数据
deleteRows 函数 删除多个行的数据
deleteSections 函数 删除多个分组的数据
moveRow 函数 把指定行索引的两行进行交换
updateList 函数 重新加载所有分组数据
updateListWithOperations 函数 批量修改数组型控件中的分组或行
setLoadStatus 函数 设置控件的加载状态
ArrayRowCtrl 行控件 数组型控件中的行控件
属性及函数列表
API 类型 说明
checked get 属性 获取行控件的勾选状态
getCtrl 函数 获取行控件中的子控件
getProperty 函数 获取控件的任意属性的值
getValue 函数 获取行控件中绑定的值
304

控件
setValue 函数 设置行控件中绑定的值
getValues 函数 获取行控件中多个绑定的值
ArraySectionHeaderCtrl 分组头控件 数组形控件中分组头控件
属性及函数列表
API 类型 说明
getCtrl 函数 获取行控件中的子控件
getProperty 函数 获取控件的任意属性的值
getValue 函数 获取行控件中绑定的值
setValue 函数 设置行控件中绑定的值
getValues 函数 获取行控件中多个绑定的值
IndexPath 行索引 数组型控件行索引
属性及函数列表
ArrayCtrlModifyOperation
用于批量指定数组型控件的数据修改规则
属性及函数列表
API 类型 说明
IndexPath 方法 返回行对象
API 类型 说明
ArrayCtrlReloadRows 函数 刷新多个行的数据
ArrayCtrlReloadSections 函数 刷新多个分组索引对应的分组数据
ArrayCtrlInsertRows 函数 在指定位置连续插入若干行数据
ArrayCtrlInsertSections 函数 在指定位置连续插入若干分组数据
ArrayCtrlDeleteRows 函数 删除多个行的数据
ArrayCtrlDeleteSections 函数 删除多个分组的数据
ArrayCtrlMoveRow 函数 把指定行索引的两行进行交换
305

控件
Setter 赋值规则 在对控件进行赋值操作时，描述了值与属性的绑定规则
CtrlValueSetter
通用控件值绑定规则
属性及函数列表
API
CtrlValueSetter
ArrayCtrlSetter
数组型控件值绑定规则
属性及函数列表
函数
类型 说明
值绑定到通用控件的规则
API 类型 说明
ArrayCtrlSetter 函数 构造函数
append 函数 追加数组型控件中头或行控件的值的绑定规则
fillSetter 函数 根据给定的字典数据，生成 setter
modifySetter 函数 修改或新增 setter 已有的绑定规则
PickerCtrlOptionSetter
选择型控件选项值绑定规则
属性及函数列表
API 类型 说明
append 函数 追加选择型控件中可选值的绑定规则
Getter 取值规则 在对控件进行取值操作时，描述了从控件那一个属性进行取值或取值规则
CtrlValueGetter
通用控件值获取规则
属性及函数列表
API 类型 说明
CtrlValueGetter 函数 值获取规则
306

控件
ArrayCtrlGetter
数组型控件值获取规则
属性及函数列表
API
ArrayCtrlGetter
append
基础数据类型 一般数据类型
类型 说明
函数 构造函数
函数 追加数组型控件中头或行控件的值的获取规则
| int | 整形 | | string | 字符串 | | float | 浮点 | | null | 空 | 集合数据类型
| Array[基础数据类型] | 除 null 外，任意基础数据类型数组，数组元素类型必须一致 | | Dictionary{string, 基础数据类型} | key 为字符串的字典，value 可以是任意基础数据类型 |
307

Ctrl 通用控件
Ctrl 通用控件 不针对特定控件所有描述，其对控件的值、属性和配置绑定事件等的操作具有广泛的适用性
308

Ctrl 通用控件
属性说明
get code
获取控件对应的编码
返回类型
可空
说明
String
实现情况
否
返回控件对应编码
iOS Android Web
✅✅ 未检测
set value
设置控件的值
实现情况
get value
获取控件的值
实现情况
输入类型 可空 说明
String/Dictionary 可 设置控件的值，若需要附带 Setter 规则，需使用 setValue 函数
//设置文本控件的值
var textCtrl = Page.getCtrl('文本控件') textCtrl.value = '新内容'
iOS Android Web
✅✅ 未检测
返回类型 可空 说明
String/Dictionary 可 返回控件自身的值，若需要附带 Getter 规则，需使用 getValue 函数
//获取文本控件的值
var textCtrl = Page.getCtrl('文本控件') var value = textCtrl.value
iOS
Android
Web
309

      Ctrl 通用控件

✅✅ 未检测 set hidden
设置控件的隐藏属性
实现情况
get hidden
获取控件的隐藏属性
实现情况
set readonly
设置控件的隐藏属性
实现情况
输入类型 可空 说明
Bool 否 控件的隐藏属性值
var textCtrl = Page.getCtrl('文本控件') textCtrl.hidden = true
iOS Android Web
✅✅ 未检测
返回类型 可空 说明
Bool 否 返回控件的隐藏属性
var textCtrl = Page.getCtrl('文本控件') var isHidden = textCtrl.hidden
iOS Android Web
✅✅ 未检测
输入类型 可空 说明
Bool 否 控件的只读属性值
var textCtrl = Page.getCtrl('文本控件') textCtrl.readonly = true
iOS Android Web
310

Ctrl 通用控件
✅✅ 未检测 get readonly
获取控件的只读属性值
实现情况
set required
设置控件的必填属性
实现情况
get required
获取控件的必填属性值
实现情况
返回类型 可空 说明
Bool 否 返回控件的只读属性值
var textCtrl = Page.getCtrl('文本控件') var isReadonly = textCtrl.readonly
iOS Android Web
✅✅ 未检测
输入类 可 型空
说明
Bool 否
设置控件的必填属性值，注意，此属性只对 UI 配置协议中，含有 required 属性的控件起作 用
iOS Android Web
✅✅ 未检测
返回类 可 型空
说明
Bool 否
返回控件的必填属性值，注意，若控件对应的 UI 配置协议中不含有 required 属性时，调用该方 法永远返回 false
iOS Android Web
✅✅ 未检测
311

Ctrl 通用控件
set color
设置控件的前景色
输入类型
String
实现情况
否
可空 说明
设置控件的前景色，颜色类型参看 Color 说明
var textCtrl = Page.getCtrl('文本控件') //设置文本控件前景色为 UIFlyCode 内置的颜色 textCtrl.color = Color.red
iOS Android Web
✅✅ 未检测
set background
设置控件的背景色
实现情况
输入类型 可空 说明
String 可 设置控件的背景色，颜色类型参看 Color 说明
iOS Android Web
✅✅ 未检测
312

Ctrl 通用控件
函数说明
setProperty(propertyName, newValue, groupIndex)
设置控件中某一属性的值
参数 类型 可空 说明
propertyName String 否 控件属性的名字
否 是
newValue
基础数 据类型
groupIndex Int
属性对应值，可以是任意基础数据类型，注意，设置的值的类型的必须
与获取的值的类型保持一致
指定属性所在分组的序号，只针对分组型控件有效，例如 tabboard
返回类型 可空 说明
无
var textCtrl = Page.getCtrl('文本控件') //设置文本控件前景色为 UIFlyCode 内置的颜色，效果与设置 color 属性一致 textCtrl.setProperty('color', Color.red) //设置文本控件文字的排版属性
textCtrl.setProperty('textAlign', 'center') //设置文本控件文字的字体属性 textCtrl.setProperty('fontSize', 20) //设置整个 tabBoard 隐藏 tabBoard.setProperty('hidden', true) //设置 tabBoard 的第一个⻚签隐藏 tabBoard.setProperty('hidden', true, 0)
getProperty(propertyName, groupIndex)
获取控件中某一属性的值
参数 类型 可空 说明
propertyName String 否 控件属性的名字
groupIndex Int 是 属性所在分组的序号
返回类型 可空 说明
基础数据类 否 返回控件某一属性的值，注意，设置的值的类型的必须与获取的值的类型保持一致，或 型 者是兼容类型
var color = Page.getCtrl('文本控件').getProperty('returnable') //效果与直接使用属性一致
var c = Page.getCtrl('文本控件').color
setValue(value, setter)
313

        Ctrl 通用控件

设置控件的值
参数 类型 可空
value 基础数据类型 可 控件值 可
说明
setter CtrlValueSetter
一般情况下为空，控件按默认方式设置自身的值，也可以通过设置 setter， 指定控件按规则设置自身的值。setter 参看 CtrlValueSetter 说明
返回类型 可空 说明
无
//利用 setter 单独设置定位控件 address 属性的值
var address = '广州天河'
var location1Ctrl = Page.getCtrl('定位控件 1') var setter = CtrlValueSetter('address') location1Ctrl.setValue(address, setter)
//不指定复制规则，直接把 value 赋给控件，由控件自行处理
var position = {'lat':23.242342, 'lng':133.556.433231, 'address':'中国'} var location2Ctrl = Page.getCtrl('定位控件 2') location2Ctrl.setValue(position)
//不设置 setter 时，可直接使用属性赋值 location2Ctrl.value = position
getValue(getter)
获取控件的值
参数 类型
getter Getter
说明
一般情况下为空，控件按默认方式返回自身的值，也可以通过设置 getter，指定控件 按规则返回自身的值。getter 参看 Getter 说明
可 空
可
返回类型 可空 说明
基础数据类型 可 返回控件自身的值
//利用 getter 单独获取定位控件 address 属性的值
var location1Ctrl = Page.getCtrl('定位控件 1') var getter = CtrlValueGetter('address')
var address = location1Ctrl.getValue(getter)
//不指定取值规则，返回值由控件决定
var location2Ctrl = Page.getCtrl('定位控件 2') var position = location2Ctrl.getValue()
//不设置 getter 时，可直接使用属性取值 position = location2Ctrl.value
setValidateResult(result, msg)
把校验结果设置到控件上
参数 类型 可空 说明
314

    Ctrl 通用控件
         result Bool 否 校验结果，true，控件中的值通过校验，false反之 msg String 可 控件上展现的校验结果提示语

validateValue()
控件校验，根据控件的特性，触发控件校验行为(自动标红)，并返回校验结果
triggerEvent(triggerName)
触发控件 EventTrigger 所绑定的事件
返回类型 可空 说明
无
参数 类型 可空 说明
无
返回类型 可空 说明
Bool 否 返回控件校验结果
参数 类型 可空 说明
triggerName String 否 控件的 EventTirgger
返回类型 可空 说明
无
//列表配置协议 /_
"type": "list", "name": "列表", "eventlist": [
{
"handler": "handler_loadlistdata", "trigger": "onload"
} ]
_/
//触发列表配置协议中的 onload 所关联的事件 Page.getCtrl('列表').triggerEvent('onload')
315

PickerCtrl 选项类控件
PickerCtrl 选项类控件 用于对选项类控件(如 DropdownBox、SelectBox 等)的选项进行操作
316

PickerCtrl 选项类控件
函数说明
setOption(option, setter)
设置控件的选项值
参数 类型
option Array
可空 说明
可 否
控件的选项数据，Array 形如[Dictionary]，注意，Dictionary 中的 value 值必须为 String 类型
setter PickerCtrlOptionSetter
指定选项数据中与控件属性的对应关系，setter 参看 PickerCtrlOptionSetter 说明
返回类型 可空 说明
无
//通过 Model 请求回来的数据
var ci = ["customInfo":[{"customid": "1","customname": "新大新"},
{{"customid": "2","customname": "711"},
{"customid": "3","customname": "奥利奥"]] //取出数组数据
var data = ci.customerInfo
//构建 setter
var setter = PickerCtrlOptionSetter(); setter.append("customid", "key"); setter.append("customname", "text");
//设置选项数据 Page.getPickerCtrl('客户类型').setOption(data, setter);
setLoadStatus(statusType)
设置控件的加载状态，注意，目前只能用于设置显示 3 种状态:加载成功但没有数据返回;网络异常(离线、超时等网络 问题);未定义错误(业务逻辑错误)
// 完成回调函数
var completion = function (code, output, msg) {
// 请求成功判断 if (code == 1) {
if (output.count == 0) {
// 请求成功但没有数据 Page.getCtrl('客户类型').setLoadStatus(ErrorCode.emptyData)
} }
// 网络错误
else if (isNetError(errorCode) == true) {
Page.getCtrl('列表').setLoadStatus(errorCode) }
// 未定义错误或业务逻辑错误
else if (errorCode == ErrorCode.unDefineError || errorCode == 600) {
Page.getCtrl('列表').setLoadStatus(errorCode) }
}
// 向服务端请求客户类型数据
Model.requestServer('客户类型', null, null, null, completion)
317

PickerCtrl 选项类控件
318

ArrayCtrl 数组型控件
ArrayCtrl 数组型控件 指像 List、Table 之类的由数组型数据驱动显示的控件
319

    ArrayCtrl 数组型控件

属性说明
get checkedNumber
获取数组型控件勾选的数量
返回类型
Int
实现情况:
可空
说明
否
返回数组型控件勾选的数量
支持的控件 iOS Android Web
列表 list 已实现 已实现 未检测
表格 table 未实现 未实现 未检测
折叠列表 accordion 未实现 未实现 未实现
动态面板 dynamicpanel 未实现 未实现 未实现
get pageIndex
获取数组型控件的当前分⻚索引
实现情况:
返回类型 可空 说明
Int 否 返回数组型控件的当前分⻚索引
支持的控件 iOS Android Web
列表 list 已实现 已实现 未检测
表格 table 未实现 未实现 未检测
折叠列表 accordion 未实现 未实现
动态面板 dynamicpanel 未实现 未实现 未实现
get rowNumber
获取数组型控件的总行数
实现情况:
返回类型 可空 说明
Int 否 返回数组型控件的总行数
支持的控件 iOS Android Web
列表 list 已实现 已实现 未检测
320

    ArrayCtrl 数组型控件

表格 table 未实现 未实现 未检测
折叠列表 accordion 未实现 未实现
动态面板 dynamicpanel 未实现 未实现 未实现
get sectionNumber
获取数组型控件的总分组数
实现情况
返回类型 可空 说明
Int 否 返回数组型控件的总分组数，注意，若分组型控件不支持分组，该属性永远返回 1
支持的控件 iOS Android Web
列表 list 已实现 已实现 未检测
表格 table 未实现 未实现 未检测
折叠列表 accordion 未实现 未实现
动态面板 dynamicpanel 未实现 未实现 未实现
321

    ArrayCtrl 数组型控件

函数说明
getSectionHeader(section)
获取指定分组索引的分组头控件
section
参数 类型 可空 说明
Int 否 分组索引
返回类型
ArraySectionHeaderCtrl
说明
返回指定分组的分组控件，若分组不存在，返回 null，注意，若分组型控件不 支持分组，该属性永远返回 null
可 空
可
var listCtrl = Page.getArrayCtrl('列表') if(listCtrl != null ) {
var sectionCtrl = listCtrl.getSectionHeader(1) if (sectionCtrl != null) {
//给头控件设置值
sectionCtrl.setValue('id', '123456') }
}
控件 iOS Android Web
分组列表 sectionlist 未检测 未检测 未检测
getRowNumberInSection(section)
获取数组型控件某一分组下的行数，如果控件不支持分组，则固定传 0 即可
参数 类型 可空 说明
section Int 否 分组索引
返回类型 可空 说明
Int 否 返回指定分组下的行数，注意，若分组不存在，返回 null
var rowNumber = Page.getArrayCtrl('列表').getRowNumberInSection(1) if (rowNumber != null) {
//循环
for(var i = 0; i < rowNumber.length ;i++) {
} }
实现情况
322

        ArrayCtrl 数组型控件
         列表 list

支持的控件 iOS Android Web 已实现 已实现 未检测
表格 table 未实现 未实现 未检测
折叠列表 accordion 未实现 未实现
动态面板 dynamicpanel 未实现 未实现 未实现
分组列表 sectionlist 已实现 已实现 未检测
getRowAtIndexPath(indexPath)
获取数组型控件中某一行的行控件，注意，若要对某一行中的控件进行操作，需先调用此方法获取行控件
参数 类型 可空 说明
indexPath IndexPath 否 数组型控件行索引对象，类型参看 IndexPath 说明
返回类型
可 空
说明
ArrayRowCtrl
可
返回数组型控件指定的行控件，若 indexPath 指定的行索引超出控件范围时，返回空。 类型参看 ArrayRowCtrl
var indexPath = IndexPath(0,1)
var rowCtrl = Page.getArrayCtrl('列表').getRowAtIndexPath(indexPath) if (rowCtrl != null) {
//给行控件设置值
rowCtrl.setValue('id', '123456') }
getAllRows()
获取数组型控件中所有所有的行控件
参数 类型 可空 说明
无
返回类型 可空 说明
Array 可 数组型控件中的所有行
var allRows = Page.getArrayCtrl('列表').getAllRows() if (allRows != null) {
for(var i = 0; i < allRows.length; i++) { //...
} }
getCheckedRows()
获取数组型控件中所有被勾选的行控件
参数 类型 可空 说明
323

    ArrayCtrl 数组型控件
        无
       返回类 可 型空

说明
Array 可
返回数组型控件中勾选的行控件，若没有勾选，返回空。Array 形如[ArrayRowCtrl]，行控件参 看 ArrayRowCtrl
var checkRows = Page.getArrayCtrl('列表').getCheckedRows() if (checkRows != null) {
for(var i = 0; i < checkRow.length; i++) {
var checkRow = checkRows[i] //check 属性一定为 true
var isChecked = checkRow.check
} }
getFocusRowIndexPath()
获取数组型控件的焦点所在的行索引，注意，当行处于选中状态，或行中子控件处于焦点状态，该方法都不应返回 null
参数 类型 可空 说明
无
返回类型 可空 说明
IndexPath 可 返回数组型控件的行索引，当焦点不存在时，返回 null
var focusIndexPath = Page.getArrayCtrl('列表').getFocusRowIndexPath() if (focusIndexPath != null) {
//取得焦点所在行索引 }
getFocusRow()
获取数组型控件的焦点行控件，注意，当行处于选中状态，或行中子控件处于焦点状态，该方法都不应返回 null
参数 类型 可空 说明
无
返回类型 可空 说明
ArrayRowCtrl 可 返回数组型控件的行控件，当焦点不存在时，返回 null
var focusRow = Page.getArrayCtrl('列表').getFocusRow() if (focusRow != null) {
//取得焦点所在行 }
getData(arrayCtrlGetter)
324

ArrayCtrl 数组型控件
获取数组型控件中所有分组的所有数据
参数类型可空 说明
默认情况下为 null，也可以指定在取值过程中，匹配的子控件取某 arrayCtrlGetter ArrayCtrlGetter 可 属性值，该子控件不区分是在行控件还是分组头控件中，
Dictionary 形如{name:CtrlValueGetter}
返回类型 可空 说明
Array 可 返回数组形控件中的所有数据，Array 形如[Dictionary]，详⻅数组型控件数据格式
//获取列表中每一行数据，其中定位控件只返回地址部分的数据 var getter = {
'location':CtrlValueGetter('address') }
var data = Page.getArrayCtrl('列表').getData(getter) if (data != null) {
/_
[
{'id':'1','name':'张一','location':'中国广州'}, {'id':'2','name':'张二','location':'中国北京'}, {'id':'3','name':'张三','location':'中国广⻄'},
] _/ }
reloadRows(rowData, indexPaths, setter)
刷新多个行的数据，该方法不会改变每个分组中行的数量
参数 类型 可空 说明
rowData Array 否 将要刷新的数据，数据需为全量数据，Array 形如[Dictionary]
indexPaths Array 否 将要刷新的行索引，Array 形如[IndexPath]
setter ArrayCtrlSetter 否 赋值规则，类型⻅ ArrayCtrlSetter 说明
返回类型 可空 说明
Bool 否 刷新成功，返回 true，否则 false
//把第一行的信息刷新
var data = {'id':'1','name':'张一','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国天津\'}'} var setter = ArrayCtrlSetter()
setter.append('id','编码')
setter.append('name','名字')
setter.append('location','地址')
var result = Page.getArrayCtrl('列表').reloadRows([data], [IndexPath(0,0)], setter)
if(result == true) {
//刷新成功 }
reloadSections(sectionData, sectionIndexes, setter)
刷新多个分组的数据，该方法不会改变每个分组的数量，但会改变分组中行的数量
325

ArrayCtrl 数组型控件
参数类型可 说明 空
sectionData
Array 否 否
将要刷新的数据，数据需为全量数据，Array 形如[Dictionary]，详 ⻅数组型控件数据格式
否
sectionIndexes Array
setter ArrayCtrlSetter
将要刷新的分组索引，Array 形如[Int]
赋值规则，类型⻅ ArrayCtrlSetter 说明
返回类型 可空 说明
Bool 否 刷新成功，返回 true，否则 false
//把第一分组的信息都刷新，并增加 id 为 4 的信息展示 var data = [
}, }, }, }
{'section':{'title':'人员信息'}, 'row':[
{'id':'1','name':'张一','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国天津\'}' {'id':'2','name':'张二','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国天津\'}' {'id':'3','name':'张三','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国天津\'}' {'id':'4','name':'张四','location':'{\'lat\': 22.3432344, \'lng\': 133.413421, \'address\': \'中国⻓春\'}'
]} }
var setter = ArrayCtrlSetter()
setter.append('title','头标题')
setter.append('id','编码')
setter.append('name','名字')
setter.append('location','地址')
var result = Page.getArrayCtrl('列表').reloadSections([data], [0], setter) if(result == true) {
//刷新成功 }
insertRows(rowData, indexPath, setter)
在指定位置连续插入若干行数据，注意，若 indexPath 中指定的 section 不存在时插入失败
参数 类型 可空 说明
rowData Array 否 将要插入的行数据，Array 形如[Dictionary]
indexPath IndexPath 否 插入索引的位置，类型参看 IndexPath 说明
setter ArrayCtrlSetter 否 赋值规则，具体⻅ ArrayCtrlSetter 说明
返回类型 可空 说明
Bool 否 成功，返回 true，否则 false
//插入一行数据
var data = {'id':'4','name':'张四','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国湖南\'}'} var setter = ArrayCtrlSetter()
setter.append('id','编码')
setter.append('name','名字')
setter.append('location','地址')
var result = Page.getArrayCtrl('列表').insertRows([data], IndexPath(0,3), setter)
if(result == true) {
//插入成功
326

ArrayCtrl 数组型控件
}
insertSections(sectionData, sectionIndex, setter)
在指定位置连续插入若干分组数据，注意，若控件不支持分组能力，不应使用该方法
参数 类型 可空 说明
sectionData Array 否
每个分组中的数据，Array 形如[Dictionary]，详⻅数组型控件数据 格式
sectionIndex Int 否 插入的分组位置开始位置，插入的⻓度由 sectionData.length 决定
setter ArrayCtrlSetter 否 赋值规则，类型⻅ ArrayCtrlSetter 说明
返回类型 可空 说明
Bool 否 成功，返回 true，否则 false
//插入第二、三分组的信息 var data = [
}, }
}
{'section':{'title':'人员信息'}, 'row':[
{'id':'1','name':'赵一','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国天津\'}'
{'id':'2','name':'赵二','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国天津\'}'
]}, {'section':{'title':'人员信息'}, 'row':[
{'id':'1','name':'李一','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国天津\'}'
]} }
var setter = ArrayCtrlSetter()
setter.append('title','头标题')
setter.append('id','编码')
setter.append('name','名字')
setter.append('location','地址')
var result = Page.getArrayCtrl('列表').insertSections([data], [1], setter) if(result == true) {
//插入成功 }
deleteRows(indexPaths)
删除数组型控件中指定行的数据，注意，若 indexPath 中指定的 section 不存在时删除失败
参数 类型 可空 说明
indexPaths [IndexPath] 否 行索引，将要删除的行
返回类型 可空 说明
Bool 否 成功，返回 true，否则 false
//删除第一、二分组的第一条数据
var indexPaths = [IndexPath(0,0), IndexPath(1,0)]
var result = Page.getArrayCtrl('列表').deleteRows(indexPaths)
327

ArrayCtrl 数组型控件
if(result == true) { //删除成功
}
deleteSections(sectionIndexes)
删除数组型控件中指定的分组，注意，分组一旦删除，分组下的行都被删除，若控件不支持分组能力，不应使用该方法
参数类型可空 说明
sectionIndexes Array 否 需要删除的分组索引，Array 形如[Int]
返回类型 可空 说明
Bool 否 成功，返回 true，否则 false
//删除第一、二分组
var sectionIndexes = [0, 1]
var result = Page.getArrayCtrl('列表').deleteSections(sectionIndexes) if(result == true) {
//删除成功 }
moveRow(fromInedxPath, toIndexPath)
把指定行索引的两行进行交换
参数类型可空 说明
fromInedxPath IndexPath 否 将要交换的行索引，类型参看 IndexPath 说明
toIndexPath IndexPath 否 目标行索引，类型参看 IndexPath 说明
返回类型 可空 说明
Bool 否 orgIndexPath 与 desIndexPath 都在控件索引范围内时，行交换成功，返回 true，否则 false
//交换第一、三行数据
var result = Page.getArrayCtrl('列表').moveRow(IndexPath(0, ), IndexPath(0, 2)) if(result == true) {
//交换成功 }
reloadData(data, setter)
updateList(data, setter)
重新加载所有分组数据
参数 类型 可空 说明
data Array 否 将要更新的数据，Array 形如[Dictionary]，详⻅数组型控件数据格式
setter ArrayCtrlSetter 否 赋值规则，具体⻅ ArrayCtrlSetter 说明
328

ArrayCtrl 数组型控件
返回类型
可空 说明
成功，返回 true，否则 false
Bool
否
//重新加载所有数据
var data = {'id':'1','name':'张一','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国天津\'}'} var setter = ArrayCtrlSetter()
setter.append('id','编码')
setter.append('name','名字')
setter.append('location','地址')
var result = Page.getArrayCtrl('列表').updateList([data], setter)
if(result == true) {
//重新加载成功 }
updateListWithOperations(operations)\*_
批量修改数组型控件中的分组或行
可 空
否
参数 类型
operations Array
说明
修改规则，注意，修改规则中的每一个分组或行索引，均是基于上一个 operation 操作后的结果，Array 形如[ArrayCtrlModifyOperation]，参⻅ ArrayCtrlModifyOperation
返回类型 可空 说明
Bool 否 成功，返回 true，否则 false
//原数据
/_
{'id':'1','name':'张一','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国天津\'}'}, {'id':'2','name':'张二','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国天津\'}'}, {'id':'3','name':'张三','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国天津\'}'}, _/
//批量修改后
/_
{'id':'1','name':'张一','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国天津\'}'}, {'id':'2-2','name':'张四','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国湖南\'}'}, {'id':'3','name':'张三','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国天津\'}'}, \*/
var data = {'id':'2-2','name':'张四','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国湖南\'}'} var setter = ArrayCtrlSetter()
setter.append('id','编码')
setter.append('name','名字')
setter.append('location','地址')
var insertRows = ArrayCtrlInsertRows(data, [IndexPath(0,1)])
var deleteRows = ArrayCtrlDeleteRows([IndexPath(0,2)])
var result = Page.getArrayCtrl('列表').updateListWithOperations([insertRows, deleteRows]) if(result == true) {
//批量修改成功 }
setLoadStatus(statusType)
329

ArrayCtrl 数组型控件
设置控件的加载状态，注意，目前只能用于设置显示 3 种状态:加载成功但没有数据返回;网络异常(离线、超时等网络 问题);未定义错误(业务逻辑错误)
//成功回调
var success = function (object) {
var stores = object['kx_kq_store'];
if(stores.count == 0) {
//请求成功但没有数据 Page.getCtrl('列表').setLoadStatus(ErrorCode.emptyData);
} };
//失败回调
var fail = function(errorCode, msg) {
//中断请求，不要处理
if(errorCode == ErrorCode.cancelRequest) {
return; }
//网络错误
if(isNetError(errorCode) == true) {
Page.getCtrl('列表').setLoadStatus(errorCode); }
//未定义错误或业务逻辑错误
else if(errorCode == ErrorCode.unDefineError || errorCode == 600 ) {
Page.getCtrl('列表').setLoadStatus(errorCode); }
};
//发起请求
Model.runLogicScript('终端列表查询', null, success, fail);
330

ArrayCtrl 数组型控件
数组型控件数据格式
数组型控件数据格式分两种，有分组形式和无分组形式 有分组格式如下，注意，section 和 row 这两个 key 应该根据实际的数组型控件而定
[
{
] },
{
"section":{ "sectionKey1":"value", "sectionKey2":"value"
}, "row":[
{
"rowKey1":"value", "rowKey2":"value"
}, {
//下一行的数据 }
//下一个分组的数据 }
]
无分组格式
[
{
"rowKey1":"value",
"rowKey2":"value" },
{
//下一行的数据 }
]
331

ArrayRowCtrl 行控件
ArrayRowCtrl 行控件 数组型控件中的行控件
332

ArrayRowCtrl 行控件
属性说明
get checked
获取行控件的勾选状态
返回类型 可空 说明
Bool 否 实现情况
返回行控件是否勾选，注意，若行控件不支持勾选能力，该属性永远返回 false
支持的控件 iOS Android Web
列表 list 已实现 已实现 已实现
表格 table 未实现 未实现 未检测
折叠列表 accordion 未实现 未实现 未实现
动态面板 dynamicpanel 未实现 未实现 未实现
分组列表 sectionlist 未实现 未实现 未检测
set checked
设置该行是否选中
实现情况
输入类型 可空 说明
Bool 否
//设置文本控件的值
listCtrl.getRowAtIndexPath(IndexPath(0, 1)).checked = false;
支持的控件 iOS Android Web
列表 list 已实现 已实现 已实现
表格 table 未实现 未实现 未检测
折叠列表 accordion 未实现 未实现 未实现
动态面板 dynamicpanel 未实现 未实现 未实现
分组列表 sectionlist 未实现 未实现 未检测
333

    ArrayRowCtrl 行控件

函数说明
getCtrl(ctrlName)
获取行控件中的子控件
参数 类型 可空 说明
ctrlName
String 否
子控件的名字
返 回 类 型
可 空
说明
Ctrl
返回行控件的子控件，若子控件不存在，返回 null，注意，目前通过该方法返回的子控件，不完 全具有 Ctrl 的能力，目前只支持 getValue、setValue
可
//获取行控件中的性别控件，并设置值
var indexPath = IndexPath(0,0)
var rowCtrl = Page.getArrayCtrl('列表').getRowAtIndexPath(indexPath) rowCtrl.getCtrl('性别').setValue('男')
实现情况
支持的控件 iOS Android Web
列表 list 已实现 已实现 已实现
表格 table 已实现 未检测 未检测
折叠列表 accordion 已实现 未检测 未实现
动态面板 dynamicpanel 未实现 未实现 未实现
分组列表 sectionlist 未实现 未实现 未实现
getValue(key)
获取行控件中绑定的值
实现情况
参数 类型 可空 说明
key String 否 绑定值对应的 key
返回类型 可空 说明
String/Dictionary 可 返回对应 key 绑定的值，若 key 不存在，返回 null
支持的控件 iOS Android Web
列表 list 已实现 已实现 已实现
334

        ArrayRowCtrl 行控件

表格 table 已实现 未检测 未检测
折叠列表 accordion 已实现 未检测 未实现
动态面板 dynamicpanel 未实现 未实现 未实现
分组列表 sectionlist 未实现 未实现 未实现
setValue(key, newValue)
设置行控件中绑定的值
参数 类型 可空 说明
key String 否 绑定值对应的 key
newValue String/Dictionary 可 绑定值对应的值
返回类型 可空 说明
无
//获取行控件，并设置值
var indexPath = IndexPath(0,0)
var rowCtrl = Page.getArrayCtrl('列表').getRowAtIndexPath(indexPath). rowCtrl.setValue('userCode', '1234555')
实现情况
支持的控件 iOS Android Web
列表 list 已实现 已实现 已实现
表格 table 已实现 未检测 未检测
折叠列表 accordion 已实现 未检测 未实现
动态面板 dynamicpanel 未实现 未实现 未实现
分组列表 sectionlist 未实现 未实现 未实现
getValues(keys)
获取行控件中多个绑定的值
实现情况
参数 类型 可空 说明
keys Array 可 绑定值对应的 keys，Array 形如[String]，当 keys 为 null 时，获取所有绑定的值
返回类型 可空 说明
Dictionay 可 返回对应 key 绑定的值，若 key 不存在，返回 null
支持的控件 iOS Android Web
列表 list 已实现 已实现 已实现
335

    ArrayRowCtrl 行控件
          表格 table 已实现 未检测 未检测
         折叠列表 accordion 已实现 未检测 未实现
         动态面板 dynamicpanel 未实现 未实现 未实现
         分组列表 sectionlist 未实现 未实现 未实现
     336

ArraySectionHeaderCtrl 分组头控件
ArraySectionHeaderCtrl 分组头控件 数组形控件中分组头控件
337

ArraySectionHeaderCtrl 分组头控件
函数说明
getCtrl(ctrlName)
获取行控件中的子控件
参数 类型 可空 说明
ctrlName
实现情况
getValue(key)
获取行控件中绑定的值
实现情况
String 否
子控件的名字
返 回 类 型
可 空
说明
Ctrl
返回行控件的子控件，若子控件不存在，返回 null，注意，目前通过该方法返回的子控件，不完 全具有 Ctrl 的能力，目前只支持 getValue、setValue
可
支持的控件 iOS Android Web
分组列表 sectionlist 未检测 未检测 未检测
参数 类型 可空 说明
key String 否 绑定值对应的 key
返回类型 可空 说明
String/Dictionary 可 返回对应 key 绑定的值，若 key 不存在，返回 null
支持的控件 iOS Android Web
分组列表 sectionlist 未检测 未检测 未检测
setValue(key, newValue)
设置行控件中绑定的值
参数 类型 可空 说明
key String 否 绑定值对应的 key
newValue String/Dictionary 可 绑定值对应的值
338

ArraySectionHeaderCtrl 分组头控件
返回类型 可空 说明
无
实现情况
支持的控件 iOS Android Web
分组列表 sectionlist 未检测 未检测 未检测
getValues(keys)
获取行控件中多个绑定的值
实现情况
参数 类型 可空 说明
keys Array 可 绑定值对应的 keys，Array 形如[String]，当 keys 为 null 时，获取所有绑定的值
返回类型 可空 说明
Dictionay 可 返回对应 key 绑定的值，若 key 不存在，返回 null
支持的控件 iOS Android Web
分组列表 sectionlist 未检测 未检测 未检测
339

IndexPath 行索引
IndexPath 行索引 数组型控件行索引
340

IndexPath 行索引
函数说明
IndexPath
参数 类 可 型空
section Int 否
说明
数组型控件中的分组索引，默认为 0，如果数组型控件不具备分组能力，该属性应该 永远为 0
数组型控件中的每组的行索引
row Int
实现情况
否
iOS Android Web
已实现 已实现 已实现
341

ArrayCtrlModifyOperation
ArrayCtrlModifyOperation
用于批量指定数组型控件的数据修改规则
342

ArrayCtrlModifyOperation
函数说明
ArrayCtrlReloadRows
参数传入规则与方法 reloadRows 一致
ArrayCtrlReloadSections
参数传入规则与方法 reloadSections 一致
ArrayCtrlInsertRows
参数传入规则与方法 insertRows 一致
ArrayCtrlInsertSections
参数传入规则与方法 insertSections 一致
ArrayCtrlDeleteRows
参数传入规则与方法 deleteRows 一致
ArrayCtrlDeleteSections
参数传入规则与方法 deleteSections 一致
ArrayCtrlMoveRow
参数传入规则与方法 moveRow 一致
343

Setter 赋值规则
Setter 赋值规则 在对控件进行赋值操作时，描述了值与属性的绑定规则
344

Setter 赋值规则
CtrlValueSetter
通用控件值绑定规则
345

Setter 赋值规则
函数说明
CtrlValueSetter(compoment)
值绑定到通用控件的规则
参数 类型 可空 说明
compoment String 否 值绑定到控件的规则或属性，其由控件自身决定并处理
实现情况
返回类型 可空 说明
Dictionary 否 绑定规则
//把值设置到 address 值属性上
var setter = CtrlValueSetter('address') Page.getCtrl('定位控件').setValue('中国广州', setter)
iOS Android Web
已实现 已实现 已实现
346

Setter 赋值规则
ArrayCtrlSetter
数组型控件值绑定规则
347

    Setter 赋值规则

函数说明
ArrayCtrlSetter ArrayCtrlSetter(name)
构造函数
参数 类型
name String
实现情况
append
append(key, name, component)
可
可空 说明
Setter 的名字，用于原生代码处理识别
iOS Android Web
已实现 已实现 已实现
追加数组型控件中头或行控件的值的绑定规则
参数 类型
key String
name String
compoment String
说明
数据中，字典对象的 key
头或行控件中每个子控件的名字，若名字对应的子控件不存在，则 key 对应的 value 不能绑定到行对象上，若名字为 null 或空，key 对应的 value 直接绑定到头 或行控件上
值绑定到子控件的规则，规则由控件自身决定并处理，若 name 为 null 或空，该 参数也需为 null
实现情况
可 空
否 否
否
返回类型 可空 说明
无
iOS Android Web
已实现 已实现 已实现
fillSetter fillSetter(arrayFirstObject)
根据给定的字典数据，生成 setter
参数 类型 可空 说明
348

    Setter 赋值规则

arrayFirstObject Dictionary 否 数组数据中任意一个行数据或人一个分组数据和其任意一个行数据
返回类型 可空 说明
无
var data = [
{'id':'1','name':'张一','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国天津\'}', 'usercode':'1424242','tcode': '1124242'},
{'id':'2','name':'张二','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国天津\'}', 'usercode':'2424242','tcode': '2224242'},
{'id':'3','name':'张三','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国天津\'}', 'usercode':'3424242','tcode': '3324242'},
{'id':'4','name':'张四','location':'{\'lat\': 22.3432344, \'lng\': 133.413421, \'address\': \'中国⻓春\'}', 'usercode':'4424242','tcode': '4424242'}
]
var setter = ArrayCtrlSetter()
//使用第一行数据填充 setter
setter.fillSetter(data[0])
//填充后内部数据
/_ [{key:'id'},{key:'name'},{key:'location'},{key:'usercode'},{key:'tcode'}] _/
//补充与控件的关系
setter.modifySetter('id', '编号')
setter.modifySetter('name', '名字')
setter.modifySetter('location', '地址')
//补充后内部数据
/_ [{key:'id',name:'编号'},{key:'name',name:'名字'},{key:'location',name:'地址'},{key:'usercode'},{key:'tcode'}] _/
实现情况
modifySetter
modifySetter(oldKey, newName, newCompoment)
修改或新增 setter 已有的绑定规则，若 oldKey 对应的绑定规则存在，修改，否则进行新增
iOS Android Web
未检测 未检测 未检测
参数 类型
可 空
说明
oldKey String
否
每一行数据中，字典对象中的 key
newName String
可
注意，若 newName 为 null、空或 undefined 时，删去原有 oleKey 与子控件 的绑定规则
newCompoment String
可
注意，若 newCompoment 为 null、空或 undefined 时，删去 newName 与原 compoment 的关系
返回类型 可空 说明
无
//setter 内部数据 /\*
349

Setter 赋值规则
[{key:'id',name:'编号'},{key:'name',name:'名字'},{key:'location',name:'地址'},{key:'usercode'},{key:'tcode'}] _/
var setter = ArrayCtrlSetter()
//去掉 id 与控件‘编号’的关系
setter.modifySetter('id')
//修改 name 与原控件的关系
setter.modifySetter('name', '名字 2')
//增加地址控件绑定规则
setter.modifySetter('location', '地址', CtrlValueSetter('value')) //新增一个
setter.modifySetter('mcode')
//修改后内部数据
/_ [{key:'id'},{key:'name',name:'名字 2'},{key:'location',name:'地址',component:'value'},{key:'usercode'},{key:'tcode'},{key:' mcode'}]
\*/
实现情况
iOS Android Web
已实现 已实现 已实现
350

Setter 赋值规则
PickerCtrlOptionSetter
选择型控件选项值绑定规则
351

Setter 赋值规则
函数说明
append(key, prop)
追加选择型控件中可选值的绑定规则
参数 类型
key String
prop String
可空
说明
每一行数据中，字典对象中的 key 选择型控件的属性
否
否
返回类型 可空 说明
无
//通过 Model 请求回来的数据
var ci = ["customInfo":[{"customid": "1","customname": "新大新"},
{{"customid": "2","customname": "711"},
{"customid": "3","customname": "奥利奥"]] //取出数组数据
var data = ci.customerInfo
//构建 setter
var setter = PickerCtrlOptionSetter(); setter.append("customid", "key"); setter.append("customname", "text");
//设置选项数据 Page.getPickerCtrl('客户类型').setOption(data, setter);
352

Getter 取值规则
Getter 取值规则 在对控件进行取值操作时，描述了从控件那一个属性进行取值或取值规则
353

Getter 取值规则
CtrlValueGetter
通用控件值获取规则
354

Getter 取值规则
函数说明
CtrlValueGetter(compoment)
值获取规则
参数 类型 可空 说明
compoment String 否 值获取的规则或属性，其由控件自身决定并处理
实现情况
返回类型 可空 说明
Dictionary 否 获取规则
//单独取值属性中 address 属性值
var getter = CtrlValueGetter('address')
var address = Page.getCtrl('定位控件').getValue(getter)
iOS Android Web
已实现 已实现 已实现
355

Getter 取值规则
ArrayCtrlGetter
数组型控件值获取规则
356

Getter 取值规则
函数说明
ArrayCtrlGetter ArrayCtrlGetter(name, scope)
构造函数
参数
name
scope
实现情况
类型
String
String
可空
可
可
说明
Setter 的名字，用于原生代码处理识别 取值范围，默认为 all 取所有值
iOS Android Web
已实现 已实现 已实现
append
append(key, name, component)
追加数组型控件中头或行控件的值的绑定规则
参数 类型 可空 说明
key String 否 数据中，字典对象的 key
name String 否 头或行控件中每个子控件的名字
compoment String 否
子控件值获取的规则，规则由控件自身决定并处理，若 name 为 null 或空，该 参数也需为 null
实现情况
返回类型 可空 说明
无
iOS Android Web
已实现 已实现 已实现
357

表单
[TOC]
表单
Page 表单对象 属性及函数列表
API
setTitle
类型 说明
函数 设置⻚面的标题
setValue 函数 设置⻚面绑定的值
getValue 函数 获取⻚面绑定的值
setValues 函数 设置⻚面绑定的多个值
getValues 函数 获取⻚面绑定的多个值
getCtrl 函数 获取⻚面上的 Ctrl 类型控件
getArrayCtrl 函数 获取⻚面上的 ArrayCtrl 类型控件
getPickerCtrl 函数 获取⻚面上的 PickerCtrl 类型控件
getLinkParams 函数 获取上一个⻚面在链接到本⻚面时附带的参数
runEvent 函数 执行配置表单中，指定名字的事件
callEvent 函数 调用内存中所有配置表单，符合 key 的事件
linkToPage 函数 表单转跳到目标表单
returnToPage 函数 回退到目标表单
alert 函数 弹出提示框
applyLayout 函数 重新计算表单布局
openProgress 函数 展现进度条
closeProgress 函数 关闭进度条
setLoadStatus 函数 设置表单的加载状态
Alert 提示框 提示框类型 属性及函数列表
API 类型 说明
info get 属性 普通信息，默认值
warning get 属性 警告，用于提示用户重要的信息
error get 属性 错误，用于错误信息
358

表单
提示框交互按钮
属性及函数列表
API 类型 append 函数 choiceAction 函数
Model 数据请求 数据请求与提交
属性及函数列表
FlowPage 流程 流程表单信息获取
属性及函数列表
ReportModel 报表 属性及函数列表
说明
定义提示框交互按钮
触发用户点击的按钮所关联的事件
API 类型 说明
submitData 函数 提交数据
requestServer 函数 请求服务端逻辑
runLogicScript 函数 执行本地一段 FlyCode 逻辑
API 类型 说明
currentInfo 函数 返回当前流程表单的信息
API 类型 说明
requestReport 函数 获取报表显示数据
requestOptions 函数 获取报表选项数据
requestDimensions 函数 获取报表维度切换数据
359

Page 表单对象
Page 表单对象
360

    Page 表单对象

函数说明
setTitle(newTitle)
设置⻚面的标题
参数 类型 可空 说明
newTitle String 否 设置⻚面的标题
setValue(key, newValue)
设置⻚面绑定的值
返回类型 可空 说明
无
参数 类型 可空 说明
key String 否 ⻚面绑定值的 key
newValue String/Dictionary 可 ⻚面绑定值
getValue(key)
获取⻚面绑定的值
返回类型 可空 说明
无
Page.setValue('id', '123456')
参数 类型 可空 说明
key String 否 ⻚面绑定值的 key
返回类型 可空 说明
String/Dictionary 可 获取⻚面绑定的值
var i = Page.getValue('id')
setValues(keyValues)
设置⻚面绑定的多个值
参数 类型 可空 说明
keyValues Dictionary 否 ⻚面绑定值的 key 及对应的 value，value 可为 String/Dictionary 类型
361

    Page 表单对象

keyValues Dictionary 否 ⻚面绑定值的 key 及对应的 value，value 可为 String/Dictionary 类型
返回类型 可空 说明
无
var values = {'id': '123456', 'name': '张三',
'detail': { 'tel':'13445122225555', 'address': 'China'
}} Page.setValues(values)
getValues(keys)
获取⻚面绑定的多个值
参数 类型 可空 说明
keys Array 否 ⻚面绑定值的 key，Array 形如[String]
返回类型 可空 说明
Dictionary 否 获取⻚面绑定的值
var keys = ['id','name','detail','tel'] /_
id:'123456'
name:'张三'
detail: { 'tel':'13445122225555', 'address': 'China' } tel:null
_/
var values = Page.getValues(keys)
getCtrl(ctrlName)
获取⻚面上的 Ctrl 类型控件
参数 类型 可空 说明
ctrlName String 否 控件的名字
返回类型 可空 说明
Ctrl 可 返回指定名字的 Ctrl 类型控件，控件不存在时返回 null
//获取‘输入框’控件，设置其隐藏属性，并调整布局 var textInput = Page.getCtrl('输入框') if(textInput != null) {
texInput.hidden = true
Page.applyLayout() }
getArrayCtrl(ctrlName)
362

Page 表单对象
获取⻚面上的 ArrayCtrl 类型控件
参数 类型 可空 说明
ctrlName String 否 控件的名字
getPickerCtrl(ctrlName)
获取⻚面上的 PickerCtrl 类型控件
getLinkParams()
获取上一个⻚面在链接到本⻚面时附带的参数
返回类型 可空 说明
ArrayCtrl 可 返回指定名字的 ArrayCtrl 类型控件，控件不存在时返回 null
参数 类型 可空 说明
ctrlName String 否 控件的名字
返回类型 可空 说明
PickerCtrl 可 返回指定名字的 PickerCtrl 类型控件，控件不存在时返回 null
参数 类型 可空 说明
无
返回类型 可空 说明
Dictionary 可 返回上一个⻚面链接时的参数，可以为 null
var params = Page.getLinkParams() if(params != null) {
var i = params['id'] }
runEvent(eventName, params)
执行当前配置表单中，指定名字的事件
参数 类型
可 空
说明
eventName String
否
事件的名字
params Dictionary
可
执行事件时附带的参数，可以为 null，注意，Dictionary 中的 value 可为 String/Dictionary 类型
返回类型 可空 说明
无
363

Page 表单对象
//配置协议
/_ "presenter": {
"handlers": [ {
"code": "handler*linkdetail", "name": "事件名称*链接详情⻚面", "desc": "链接详情⻚面", "actions": [
{
} ]
//附带参数
var params = {'id': '123456',
'name': '张三', 'detail': {
'tel':'13445122225555',
'address': 'China' }}
Page.runEvent('事件名称*链接详情⻚面', params)
//不附带参数 Page.runEvent('事件名称*链接详情⻚面')
} _/
} ]
callEvent(eventKey, params)
调用内存中所有配置表单，符合 key 的事件
参数 类型 可空 说明
eventKey String 否 事件观察的 key
params Dictionary 可
执行事件时附带的参数，可以为 null，注意，Dictionary 中的 value 可为 String /Dictionary 类型
返回类型 可空 说明
无
//配置协议
/_ "presenter": {
"interface": [ {
"code": "interface_refreshlist", "actions": [
],
"key": "refreshlist",
"desc": "刷新列表监听事件" }
] }
_/
//附带参数
var params = {'id': '123456',
'name': '张三',
364

Page 表单对象
'detail': { 'tel':'13445122225555', 'address': 'China'
}} Page.callEvent('refreshlist', params)
//不附带参数 Page.callEvent('refreshlist')
linkToPage(pageName, param, mode, size)
表单转跳到目标表单
参数 类型
pageName String
params Dictionary
mode String
size String
说明
目标表单的名字
转跳表单时附带的参数，可以为 null，注意，Dictionary 中的 value 可为 String/Dictionary 类型
转跳表单的方式，详细⻅表单配置协议 link action 描述，注意，目前手机端 不支持该属性
指定链接目标表单显示大小，目前只在弹窗模式下起效，详细⻅表单配置 协议 link action 描述，注意，目前手机端不支持该属性
可 空
否 可
可 可
返回类型 可空 说明
无
//附带参数
var params = {'id': '123456',
'name': '张三', 'detail': {
'tel':'13445122225555',
'address': 'China' }}
Page.linkToPage('用户详情', params)
//不附带参数 Page.linkToPage('用户详情')
returnToPage(pageName)
回退到目标表单
returnToPageCount(count)
回退到比当前表单高 count 级的表单。
参数 类型 可空 说明
pageName String 可 目标表单的名字，若名字为空，直接返回到上一级表单
返回类型 可空 说明
无
365

Page 表单对象
参数 类型 可空 说明
count Int 不
alert(type, msg, choices)
弹出提示框
表示从当前表单向上返回 count 级表单
无
参数 类型 可空 说明
type String 否 弹出的提示框类型，具体类型⻅ Alert 说明
msg String 可 提示框展示的消息
choices AlertChoice 可 定义用户的可操作的选项，类型具体⻅ AlertChoice 说明
返回类型 可空 说明
无
//弹出错误提示，用户按‘确定’后关闭提示框
var actions = AlertChoice() actions.append('确定') Page.alert(AlertType.error, '链接超时', actions);
applyLayout()\*\*
返回类型 可空 说明
重新计算表单布局，通常用于修改控件的 hidden、size 属性之后重新计算表单控件位置
参数 类型 可空 说明
无
返回类型 可空 说明
无
//获取‘输入框’控件，设置其隐藏属性，并调整布局 var textInput = Page.getCtrl('输入框') if(textInput != null) {
texInput.hidden = false
Page.applyLayout() }
constraintCheck()
校验当前表单控件数据的合法性，如果全部空间都没有问题则返回 true，否则返回 false。 该方法会触发整个表单所有控件进行数据有效性校验。
366

Page 表单对象
openProgress(tip)
展现进度条，必须与 closeProgress 配对使用
参数 类型 可空 说明
tip string 可 展示的提示语，若 tip 为不为空时，展示默认提示语“加载中，请稍候”
无
返回类型 可空 说明
//开启进度条，锁屏 Page.openProress('数据加载中，请稍候......')
var completion = function(code, output, msg) {
//网络请求完毕，关闭进度条
Page.closeProgress() }
//发起网络请求
Model.requestServer('渠道类型', null, null, null, completion)
closeProgress()
关闭进度条，必须与 openProgress 配对使用
setLoadStatus(statusType)
设置控件的加载状态，注意，目前只能用于设置显示 3 种状态:加载成功但没有数据返回;网络异常(离线、超时等网络 问题);未定义错误(业务逻辑错误)
参数 类型 可空 说明
无
返回类型 可空 说明
无
// 完成回调函数
var completion = function (code, output, msg) {
// 请求成功判断 if (code == 1) {
if (output == null) {
// 请求成功但没有数据 Page.setLoadStatus(ErrorCode.emptyData)
} }
// 网络错误
else if (isNetError(errorCode) == true) {
Page.setLoadStatus(errorCode) }
// 未定义错误或业务逻辑错误
else if (errorCode == ErrorCode.unDefineError || errorCode == 600) {
Page.setLoadStatus(errorCode) }
367

Page 表单对象
}
// 向服务端请求客户详情数据
Model.requestServer('客户详情', null, null, null, completion)
368

Alert 提示框
Alert 提示框
369

Alert 提示框
提示框类型
370

Alert 提示框
提示框交互按钮
371

Alert 提示框
函数说明
append(title, handler)
定义用户的可操作的选项
参数
title
handler
类型
String
function
可空 说明
否 选项标题
可 回调函数，点击按钮后执行操作。可以为空，表示直接关闭。默认为空
无
返回类型 可空 说明
//弹出错误提示，用户按‘确定’后关闭提示框并在控制台输出信息 var actions = AlertChoice()
actions.append('确定', function() {
System.console('click action 确定') })
Page.alert(AlertType.error, '链接超时', actions);
//弹出错误提示，用户按‘确定’后关闭提示框
var actions = AlertChoice() actions.append('确定') Page.alert(AlertType.error, '链接超时', actions);
实现情况
iOS Android Web
已实现 已实现 已实现
choiceAction(title)
触发用户点击的按钮所关联的事件，注意，此方法由原生代码触发
参数 类型 可空 说明
title String 否 用户选择的按钮的 title
返回类型 可空 说明
无
func alert(_ type: String, _ msg: JSValue, \_ choices: JSValue) {
if choices.isObject, let array = choices.forProperty("choices")?.toArray(), array.count > 0 {
array.forEach({ (body: Any) in
if let b = body as? [String: AnyObject] {
372

Alert 提示框
let title = b["title"] as? String ?? "";
actions.append(UIAlertAction(title: title, style: .`default`, handler: { (action: UIAlertAction) in
alertView.dismiss(animated: true, completion: nil) choices.invokeMethod("choiceAction", withArguments: [title])
})) }
}) }
}
实现情况
iOS Android Web
已实现 已实现 已实现
373

Model 数据请求
Model 数据请求 数据请求与提交
374

Model 数据请求
函数说明
submitData
submitData(logicName, input, fileInfo, success, fail, completion)
提交数据，包括业务数据和文件，该函数异步返回
参数 类型 可空 说明
logicName String 否 请求执行逻辑的名字
input Dictionary 可 执行逻辑的入参，对象形式
fileInfo Array 可
提交的文件信息，形如[{'filePath':'完整的文件路径','dateTime':'13 位数字 字符串'}]
success function 可 回调函数，请求执行成功时调用
fail function 可 回调函数，请求执行失败时调用
completion function 可 回调函数，请求执行完成时调用
返回类型 可空 说明
无
Page.openProress('数据加载中，请稍候......')
var success = function(output) { //output
/_
{'userInfo':{'id': '123456',
'name': '张三', 'detail': {
'tel':'13445122225555',
'address': 'China' } }}
_/
//刷新控件等操作 }
var fail = function(errorCode, msg) { //显示错误信息
}
var completion = function(code, output, msg) {
if(code == 1) { //等同于 success 回调函数操作
}
else {
//等同于 fail 回调函数操作 }
Page.closeProgress() }
var IN = {'id': '123456'}
var fileInfo = [{'filePath':'/var/file/image.png','dateTime':'1234567890000'}]
375

Model 数据请求
//发起网络请求
Model.submitData('渠道类型', IN, fileInfo, success, fail, completion)
实现情况
requestServer
requestServer(logicName, input, success, fail, completion)
请求服务端逻辑，提交或者获取数据，该函数异步返回
iOS Android Web
已实现 已实现 已实现
参数 类型 可空 说明
logicName String 否 请求执行逻辑的名字
input Dictionary 可 执行逻辑的入参，对象形式
success function 可 回调函数，请求执行成功时调用
fail function 可 回调函数，请求执行失败时调用
completion function 可 回调函数，请求执行完成时调用
返回类型 可空 说明
无
Page.openProress('数据加载中，请稍候......')
var success = function(output) { //output
/_
{'userInfo':{'id': '123456',
'name': '张三', 'detail': {
'tel':'13445122225555',
'address': 'China' } }}
_/
//刷新控件等操作 }
var fail = function(errorCode, msg) { //显示错误信息
}
var completion = function(code, output, msg) {
if(code == 1) { //等同于 success 回调函数操作
}
else {
//等同于 fail 回调函数操作 }
Page.closeProgress() }
376

Model 数据请求
var IN = {'id': '123456'}
//发起网络请求
Model.requestServer('渠道类型', IN, success, fail, completion)
实现情况
runLogicScript
runLogicScript(name, input, success, fail, completion)
执行本地一段 FlyCode 逻辑，对本地 SQLite 数据库进行操作，该函数异步返回
iOS Android Web
已实现 已实现 已实现
参数 类型 可空 说明
logicName String 否 请求执行逻辑的名字
input Dictionary 可 执行逻辑的入参，对象形式
success function 可 回调函数，请求执行成功时调用
fail function 可 回调函数，请求执行失败时调用
completion function 可 回调函数，请求执行完成时调用
返回类型 可空 说明
无
Page.openProress('数据加载中，请稍候......')
var success = function(output) { //output
/_
{'userInfo':{'id': '123456',
'name': '张三', 'detail': {
'tel':'13445122225555',
'address': 'China' } }}
_/
//刷新控件等操作 }
var fail = function(errorCode, msg) { //显示错误信息
}
var completion = function(code, output, msg) {
if(code == 1) { //等同于 success 回调函数操作
}
else {
//等同于 fail 回调函数操作 }
Page.closeProgress() }
377

Model 数据请求
var IN = {'id': '123456'}
//发起本地请求
Model.runLogicScript('渠道类型', IN, success, fail, completion)
实现情况
iOS Android Web
未检测 未检测 未检测
378

Model 数据请求
对象形式
对象形式，形如如下，注意，所有 value 值需为 String，或 Array
{
//单对象 "kx_store":{
"storeID": "123456",
"storeName": "店铺名称" },
//多对象 "kx_store":[{
"storeID": "123456",
"storeName": "店铺名称 1" },{
"storeID": "789",
"storeName": "店铺名称 2" }]
}
379

Model 数据请求
回调函数
success(output)
requestServer、runLogicScript 成功时的回调函数
参数 类型 可空 说明
output Dictionary 可
请求成功，附带的输出结果，注意，若请求结果只是单纯的 true 时，只触发回 调，output 为空，若 output 不为空，必须为对象形式
返回类型 可空 说明
无
fail(errorCode,msg)
requestServer、runLogicScript 失败时的回调函数
参数 类型 可空 说明
errorCode Int 否 请求失败时的错误码，默认为 0，表示错误
msg String 可 请求失败时的错误信息
返回类型 可空 说明
无
completion(code,output,msg)
requestServer、runLogicScript 执行完成时的回调函数
参数 类型 可空 说明
code Int 否 请结果码，成功为 1，失败默认为 0
output Dictionary 可 请求成功，附带的输出结果，具体⻅ success 回调函数描述
msg String 可 请求失败时的错误信息
返回类型 可空 说明
无
380

FlowPage 流程
FlowPage 流程 流程表单信息获取
381

FlowPage 流程
函数说明
currentInfo()
返回当前流程表单的信息，如果返回空表示当前并未在流程处理过程中
参数 类型 可空 说明
无
流程信息对象结构
返回类型 可空 说明
Dictionary 否 返回程信息对象
{
"af_processdefineid": "expenseflow:1:72504", // 流程定义 Id "af_processdefinekey": "expenseflow", // 流程定义 Key "af_processdefinename": "费用报销流程", // 流程定义名称 "af_processinstanceid": "75001", // 流程实例 Id
"af_taskid": "75006", // 任务 Id
"af_taskkey": "usertask1", // 任务 Key
"af_taskname": "渠道业务员发起", // 任务名称
"af_createtime": "2017-03-24 15:46:03", // 任务创建时间 "af_taskuicode": "firstForm", // 任务关联的 UI 对象编码 "af_hashandle": false, // 是否已处理(决定⻚面审批 UI 元素的显示或隐藏) "af_hasend": false, // 流程是否已结束
"af_businesskey": "报销单 1", // 业务 Id
"af_choices": [
"同意",
"不同意" ], // 审批选项
"af_processtraces": [ // 流程追踪 {
"af_assignee": "渠道业务员", // 处理人
"af_comments": null, // 审批意⻅
"af_choice": null, // 审批选择
"af_actid": "startevent", // 活动 Key
"af_actname": "开始", // 活动名称
"af_assigneecode": "831025515799248802", // 处理人 Id "af_handletime": "2017-03-24 15:46:03" // 处理时间
} ]
}
在实现中是去当前 page 中的内存变量中找一个名为 \_\_approvalflowdata 的变量
实现情况
var info = FlowPage.currentInfo();
iOS Android Web
已实现 已实现 已实现
382

FlowPage 流程
383

ReportModel 报表
ReportModel 报表
384

ReportModel 报表
函数说明
requestReport(input, success, fail, completion)
获取报表显示数据，并把数据绑定到报表控件上，该函数异步返回
参数类型可空 说明
input function 否 入参格式请参看 rp_datarequest
success function 可 回调函数，请求执行成功时调用
fail function 可 回调函数，请求执行失败时调用
completion function 可 回调函数，请求执行完成时调用
返回类型 可空 说明
无
requestOptions(input, success, fail, completion)
获取报表选项数据，并把数据绑定到控件上，该函数异步返回
参数类型可空 说明
input function 否 入参格式请参看 rp_optionrequest
success function 可 回调函数，请求执行成功时调用
fail function 可 回调函数，请求执行失败时调用
completion function 可 回调函数，请求执行完成时调用
返回类型 可空 说明
无
requestDimensions(input, success, fail, completion)
获取报表维度切换数据，并把数据绑定到控件上，该函数异步返回
参数 类型 可空 说明
input function 否 入参格式请参看 rp_dimensionrequest
success function 可 回调函数，请求执行成功时调用
fail function 可 回调函数，请求执行失败时调用
completion function 可 回调函数，请求执行完成时调用
返回类型 可空 说明
无
385

ReportModel 报表
386

ReportModel 报表
回调函数
success())
requestReport、requestOptions、requestDimensions 请求成功后调用
fail(errorCode,msg)
requestReport、requestOptions、requestDimensions 请求失败后调用
completion(code,msg)
requestReport、requestOptions、requestDimensions 请求完成后调用
387

系统
系统
Semaphore 信号量
信号量
属性及函数列表
API 类型 wait 函数 sign 函数
Location 位置信息 位置信息
属性及函数列表
说明
等待多个任务执行完毕后，执行 completion 释放信号量
API 类型 说明
currentLocation 函数 获取当前位置信息
metersDistanceBetweenMapPoints 函数 计算最近一次定位成功的位置与指定经纬度之间的直线距离
metersCurrentBetweenMapPoints 函数 计算当前位置与指定经纬度之间的直线距离
SQLiteDB 离线数据 离线数据
属性及函数列表
API 类型 说明
exceQuery 函数 执行 select sql 语句，支持一条或多条 sql 语句
exceModify
函 执行 insert、insert or ignore、update、delete 或 replace sql 语句，支持一条或多条 sql 数 语句
insertObject 函数 插入一个或多个业务对象到数据库
updateObject 函数 更新一个或多个业务对象到数据库
saveObject 函数 新增或更新一个或多个业务对象到数据库
deleteObject 函数 从数据库中删除对应主键的对象
388

系统
System 系统信息 系统信息相关
属性及函数列表
user
API
类型 说明
函数 获取用户信息
serviceID 函数 获取一个的 serviceID
date 函数 获取服务端当前时间
functoinCodes 函数 获取功能权限
checkFunctionCodes 函数 功能权限检测
console 函数 控制日志输出
ideLog 函数 把日志发送到 IDE
Color 颜色 自带颜色
颜色 属性 说明
黑 black RGB(0,0,0)
白 white RGB(255,255,255)
灰 gray RGB(128,128,128)
红 red RGB(255,0,0)
绿 green RGB(0,255,0)
蓝 blue RGB(0,0,255)
⻩ yellow RGB(255,255,0)
⻘ cyan RGB(0,255,255)
橙 orange RGB(255,128,0)
紫 purple RGB(128,0,128)
棕 brown RGB(153,102,51)
洋红 magenta RGB(255,0,255)
透明 clear RGBA(0,0,0,0)
ErrorCode 错误码 错误码说明
错误码 说明
389

系统
noError 没有错误
unDefineError 未定义错误
emptyData 请求成功但返回的数据中，特定的对象或数组为空或⻓度为 0
cancelRequest
中断请求，该错误码通常由用户抛弃请求所引发，如网络，注意，若错误码为 cancelRequest 时，不要弹出任何提示框，同时需要停止后继所有请求
netWorkOffline 断网
serverConnectFailed 服务地址不能连接，如 地址不存在
requestTimedOut
请求超时，如 网络环境很差(严重掉包、wifi 虽然联上，但服务器不能访问)或服务器 没有响应
requestLost 网络连接已中断，如 请求过程中断网
特殊函数
API 说明
isNetError
判断已知的网络错误，包括 netWorkOffline、serverConnectFailed、requestTimedOut、 requestLost
390

Semaphore 信号量
Semaphore 信号量 信号量
391

Semaphore 信号量
函数说明
wait(functions, completion)
等待多个任务 function 执行完毕后，执行 completion，注意，受 JS 执行引擎影响，若 functions 中都没有使用 Model/ ReportModel 进行数据请求时，functions 是按顺序执行，另外，每个 function 在执行完成前，必须调用 sign 释放信号量
参数
functions
completion
类型
Array
function
可空 说明
否 数组函数，形如[function]
否 任务 function 都完成后，执行的 function
返回类型 可空 说明
无
//打开进度条，锁屏 Page.openProgress()
//使用信号量控制多个请求
var semaphore = new Semaphore(2)
//向服务器请求数据
var r1 = function () {
//成功回调函数
var success = function (output) { }
//完成回调函数
var completion = function (code, output, msg) {
//释放信号量
semaphore.sign() };
//发起请求
Model.requestServer('渠道类型', null, success, null, completion) };
//向服务器请求客户类型数据 var r2 = function () {
//完成回调函数
var completion = function (code, output, msg) {
semaphore.sign(); }
//向服务端请求客户类型数据
Model.requestServer('客户类型', null, null, null, completion) };
//所有信号量释放，执行后继操作 var completion = function () {
//关闭进度条
Page.closeProgress() };
//信号量等待
semaphore.wait([r1, r2], completion)
392

Semaphore 信号量
实现情况
✅✅ 未检测 sign()
释放信号量，当信号量小于等于 0 时，响应 completion 回调函数，注意，sign 调用次数必须和初始化信号量相同
实现情况
iOS Android Web
参数 类型 可空 说明
无
返回类型 可空 说明
无
iOS Android Web
✅✅ 未检测
393

Location 位置信息
Location 位置信息 位置信息
394

    Location 位置信息

函数说明
latestLocation()
获取最近一次的定位信息，该方法同步返回
实现情况
iOS
✅✅
currentLocation currentLocation(success, fail, completion)
获取当前位置信息，该函数异步返回
Android
参数类型可空 说明
success function 可 回调函数，请求执行成功时调用
fail function 可 回调函数，请求执行失败时调用
completion function 可 回调函数，请求执行完成时调用
回调函数
success(lat,lng,address)
currentLocation 定位成功后回调函数
返回类型 可空 说明
无
参数 类型 可空 说明
lat Float 否 纬度
lng Float 否 经度
address String 可 地址信息
fail(errorCode,msg)
currentLocation 定位失败后回调函数 参数 类型
可空 说明
返回类型 可空 说明
无
395

        Location 位置信息

errorCode String 否 msg String 可
completion(code,output,msg)
currentLocation 定位完成后回调函数
请求失败时的错误码，默认为 0 请求失败时的错误信息
返回类型 可空 说明
无
参数 类型 可空 说明
code String 否 请求成功为 1，请求失败时默认为 0
output Dictionary 可
请求成功时，返回位置信息，格式如 {‘lat’:23.123121,’lng‘:135.221211,’address‘:‘中国广州市’}
msg String 可 请求失败时的错误信息
返回类型 可空 说明
无
//通过 success 回调函数取得结果
var success = function(lat,lng,address) {
/_ lat:22.452343 lng:133.554313 address:'中国' _/
}
//通过 completion 回调函数取得结果
var completion = completion(code,output,msg) {
//判断成功 if(code == 1) {
var lat = output['lat']
var lng = output['lng']
var address = output['address']
} }
Location.currentLocation(success, null, completion)
实现情况
iOS Android
✅✅
metersDistanceBetweenMapPoints
metersDistanceBetweenMapPoints
计算最近一次定位成功的位置与指定经纬度之间的直线距离
参数 类型 可空 说明
396

        Location 位置信息

points Array 否
要计算的经纬度，points 形如[{'lat':23.023111,'lng':135.443321}]数组字典，lat，lng 为 Double 类型
返回类型 可空 说明
Array 否 按顺序返回两点间的直线距离，单位米
//⻔店数据
var stores = object['kx_kq_store']
var locations = new Array()
for (var i = 0; i < stores.length; i++) {
var store = stores[i] //取得⻔店数据中⻔店的坐标 locations[i] = {
'lat': parseFloat(store['latitude']),
'lng': parseFloat(store['longitude']) }
}
//利用上次定位位置缓存，粗略计算⻔店距离
var metersRs = Location.metersDistanceBetweenMapPoints(locations) for (var i = 0; i < stores.length; i++) {
var store = stores[i] //保存距离信息
store.metersR = metersRs[i]
}
实现情况
metersCurrentBetweenMapPoints metersCurrentBetweenMapPoints(points, success, fail, completion)
计算当前位置与指定经纬度之间的直线距离，该函数异步返回
iOS Android
✅✅
参数 类型
points Array
success function
fail function
completion function
说明
要计算的经纬度，points 形如[{'lat':23.023111,'lng':135.443321}]数组字典， lat，lng 为 Double 类型
回调函数，按顺序返回两点间的直线距离，单位米
回调函数，获取用户当前位置失败，无法计算距离
回调函数，获取用户当前位置完成后调用
回调函数
success(points)
可 空
否
否 可 可
返回类型 可空 说明
无
397

      Location 位置信息

参数 类型 可空 说明
points Array 否 按顺序返回两点间的直线距离，单位米，Array 形如[Float] fail(errorCode,msg)
参数 类型 可空 说明
errorCode String 否 请求失败时的错误码，默认为 0
msg String 可 请求失败时的错误信息
返回类型 可空 说明
无
completion(code,output,msg)
currentLocation 定位完成后回调函数
参数 类型 可空 说明
code String 否 请求成功为 1，请求失败时为默认为 0
output Array 可 请求成功时，返回两点⻅距离
msg String 可 请求失败时的错误信息
返回类型 可空 说明
无
//⻔店数据
var stores = object['kx_kq_store']
var locations = new Array()
for (var i = 0; i < stores.length; i++) {
var store = stores[i] //取得⻔店数据中⻔店的坐标 locations[i] = {
'lat': parseFloat(store['latitude']),
'lng': parseFloat(store['longitude']) }
}
var completion = function(code, output, msg) {
//当前位置获取成功并计算得出结果 if(code == 1) {
var metersRs = output
for (var i = 0; i < stores.length; i++) {
var store = stores[i] //保存距离信息
store.metersR = metersRs[i]
} }
}
//获取用户当前位置计算⻔店距离
var metersRs = Location.metersCurrentBetweenMapPoints(locations, null, null, completion);
实现情况
398

Location 位置信息
iOS Android
✅✅
399

OData 离线数据
SQLiteDB 离线数据 离线数据
400

OData 离线数据
函数说明
exceQuery(sql, success, fail, completion)
执行 select sql 语句，支持一条或多条 sql 语句，多条 sql 语句时，需使用 Array 包装
参数 类型 可空 说明
sql String/Array 否 查询参数、返回数据的承载对象
success function 可 ⻅使用范例注释
fail function 可 ⻅使用范例注释
completion function 可 ⻅使用范例注释
返回类型 可空 说明
无
//执行一条语句
//执行成功回调 //outout，成功结果，Array 类型，其元素为 Dictionary，Dictionary 中都为 String 类型 var success = function(output) {
for(var i = 0; i < output.length; i++) {
var dic = output[i]; //Dictionary 类型 var name = dic['name']; //String 类型
var sex = dic['sex']; var age = dic['age'];
//String 类型 //String 类型
} };
//执行失败
//errorCode，错误码，默认为 0 //msg，错误信息
var fail = function(errorCode, msg) {
};
//执行完成回调 //code，结果码，1 表示成功，其他⻅ fail 描述 //outout，成功结果，⻅ success 描述 //msg，错误信息，⻅ fail 描述
var completion = function(code, output, msg) {
if(code == 1) { //处理方式与 success 一致
}
else {
//错误处理，与 fail 一致 }
};
//执行一条语句
var sql = 'select name, sex, age from userinfo'; SQLiteDB.exceQuery(sql, success, fail, completion);
//执行多条语句
401

    OData 离线数据

//执行成功回调，与执行一条不同，批量执行都成功时才回调 //outout，成功结果，二维 Array 类型
var success = function(output) {
for(var i = 0; i < output.length; i++) { var o = output[i]
for( var j = 0; j < o.length; j++) {
var dic = o[j]; //Dictionary 类型 var name = dic['name']; //String 类型 var sex = dic['sex']; //String 类型 var age = dic['age']; //String 类型
} }
};
//执行失败，批量执行时，任意一条 sql 执行失败时会停下 //errorCode，错误码，默认为 0
//msg，错误信息
//userinfo，额外的错误信息
var fail = function(errorCode, msg, userinfo) {
//错误的 sql 索引
var index = userinfo['index']; };
//执行完成回调
//code，结果码，1 表示成功，其他⻅ fail 描述 //output，成功结果，⻅ success 描述 //msg，错误信息，⻅ fail 描述 //userinfo，额外的错误信息，⻅ fail 描述
var completion = function(code, output, msg, userinfo) {
if(code == 1) { //处理方式与 success 一致
}
else {
//错误处理，与 fail 一致 }
};
//执行多条语句
var sql1 = 'select name, sex, age from userinfo where sex = \'1\''; var sql2 = 'select name, sex, age from userinfo where sex = \'0\''; var sql3 = 'select name, sex, age from userinfo where sex = \'2\''; var sqls = [sql1, sql2, sql3];
SQLiteDB.exceQuery(sqls, success, fail, completion);
实现情况
exceModify(sql, success, fail, completion)
执行 insert、insert or ignore、update、delete 或 replace sql 语句，支持一条或多条 sql 语句，多条 sql 语句时，需使用 Array 包装
iOS Android
✅
参数 类型 可空 说明
sql String/Array 否 查询的 sql 语句
success function 可 ⻅使用范例注释
402

    OData 离线数据

fail function 可 ⻅使用范例注释 completion function 可 ⻅使用范例注释
返回类型 可空 说明
无
//执行一条语句
//执行成功回调 //output，成功结果，Bool 类型，永远为 true var success = function(output) {
};
//执行失败
//errorCode，错误码，默认为 0 //msg，错误信息
var fail = function(errorCode, msg) {
};
//执行完成回调 //code，结果码，1 表示成功，其他⻅ fail 描述 //output，成功结果，⻅ success 描述 //msg，错误信息，⻅ fail 描述
var completion = function(code, output, msg) {
if(code == 1) { //处理方式与 success 一致
}
else {
//错误处理，与 fail 一致 }
};
//执行一条语句
var sql = 'inert into userinfo values(\'小明\',\'1\',\'18\')'; SQLiteDB.exceModify(sql, success, fail, completion);
//执行多条语句
//执行成功回调，与执行一条不同，批量执行都成功时才回调 //output，成功结果，Bool 类型，永远为 true
var success = function(output) {
};
//执行失败，批量执行时，任意一条 sql 执行失败时会停下，且之前的修改会被回滚 //errorCode，错误码，默认为 0
//msg，错误信息
//userinfo，额外的错误信息
var fail = function(errorCode, msg, userinfo) {
//错误的 sql 索引
var index = userinfo['index']; };
//执行完成回调
//code，结果码，1 表示成功，其他⻅ fail 描述 //output，成功结果，⻅ success 描述 //msg，错误信息，⻅ fail 描述 //userinfo，额外的错误信息，⻅ fail 描述
var completion = function(code, output, msg, userinfo) {
403

OData 离线数据
if(code == 1) { //处理方式与 success 一致
}
else {
//错误处理，与 fail 一致 }
};
//事务执行多条语句，可以混合不同的修改操作
var sql1 = 'inert into userinfo values(\'小明\',\'1\',\'18\')'; var sql2 = 'inert into userinfo values(\'小兰\',\'0\',\'18\')'; var sql3 = 'delete from userinfo where name = \'sam\'';
var sqls = [sql1, sql2, sql3];
SQLiteDB.exceQuery(sqls, success, fail, completion);
实现情况
insertObject(bizObject, success, fail, completion)
插入一个或多个业务对象到数据库，如果业务对象类型为数组，则会批量操作
iOS Android
✅
参数 类型 可空 说明
bizObject Dictionary/Array 否 业务对象
success function 可 ⻅使用范例注释
fail function 可 ⻅使用范例注释
completion function 可 ⻅使用范例注释
返回类型 可空 说明
无
//插入一个对象
//执行成功回调 //output，成功结果，Bool 类型，永远为 true var success = function(output) {
};
//执行失败
//errorCode，错误码，默认为 0 //msg，错误信息
var fail = function(errorCode, msg) {
};
//执行完成回调 //code，结果码，1 表示成功，其他⻅ fail 描述 //output，成功结果，⻅ success 描述 //msg，错误信息，⻅ fail 描述
var completion = function(code, output, msg) {
if(code == 1) { //处理方式与 success 一致
404

OData 离线数据
}
else {
//错误处理，与 fail 一致 }
};
//插入一个对象
//使用 BO 构建一个 userinfo 对象
var obj = BO.new('userinfo');
obj.name = '小明';
obj.sex = '1';
obj.age = '18';
//或使用 set 设置一个对象
//var obj = [{'name': '小明'}]
//BO.set(obj, 'userInfo')
SQLiteDB.insertObject(obj, success, fail, completion);
//插入多个对象
//执行成功回调，与执行一个不同，批量执行都成功时才回调 //output，成功结果，Bool 类型，永远为 true
var success = function(output) {
};
//执行失败，批量执行时，任意一个对象插入失败时会停下，且之前的修改会被回滚 //errorCode，错误码，默认为 0
//msg，错误信息
//userinfo，额外的错误信息
var fail = function(errorCode, msg, userinfo) {
//错误的对象索引
var index = userinfo['index']; };
//执行完成回调
//code，结果码，1 表示成功，其他⻅ fail 描述 //output，成功结果，⻅ success 描述 //msg，错误信息，⻅ fail 描述 //userinfo，额外的错误信息，⻅ fail 描述
var completion = function(code, output, msg, userinfo) {
if(code == 1) { //处理方式与 success 一致
}
else {
//错误处理，与 fail 一致 }
};
//事务插入多个对象
var objs = [{'name': '小明'},
{'name': '小兰'}]; BO.set(objs, 'userInfo');
SQLiteDB.insertObject(objs, success, fail, completion);
//支持不同的对象同时插入
var objs1 = [{'name': '小明'},
{'name': '小兰'}]; BO.set(objs, 'userInfo1');
var objs2 = [{'name': 'sam'},
{'name': 'jack'}];
BO.set(objs, 'userInfo2');
objs1.concat(objs2);
SQLiteDB.insertObject(objs1, success, fail, completion);
405

OData 离线数据
实现情况
✅
iOS Android
updateObject(bizObject, success, fail, completion)
更新一个或多个业务对象到数据库，如果业务对象类型为数组，则会批量操作
参数 类型 可空 说明
bizObject Dictionary/Array 否 业务对象
success function 可 ⻅使用范例注释
fail function 可 ⻅使用范例注释
completion function 可 ⻅使用范例注释
返回类型 可空 说明
无
//更新一个对象
//执行成功回调 //output，成功结果，Bool 类型，永远为 true var success = function(output) {
};
//执行失败
//errorCode，错误码，默认为 0 //msg，错误信息
var fail = function(errorCode, msg) {
};
//执行完成回调 //code，结果码，1 表示成功，其他⻅ fail 描述 //output，成功结果，⻅ success 描述 //msg，错误信息，⻅ fail 描述
var completion = function(code, output, msg) {
if(code == 1) { //处理方式与 success 一致
}
else {
//错误处理，与 fail 一致 }
};
//更新一个对象
//使用 BO 构建一个 userinfo 对象
var obj = new BO('userinfo');
obj.name = '小明'; //主键，更新时必须有主键
obj.age = '20';
//或使用 set 设置一个对象
//var obj = [{'name': '小明'}]
//BO.set(obj, 'userInfo')
SQLiteDB.updateObject(obj, success, fail, completion);
406

    OData 离线数据

//更新多个对象
//执行成功回调，与执行一个不同，批量执行都成功时才回调 //output，成功结果，Bool 类型，永远为 true
var success = function(output) {
};
//执行失败，批量执行时，任意一个对象更新失败时会停下，且之前的修改会被回滚 //errorCode，错误码，默认为 0
//msg，错误信息
//userinfo，额外的错误信息
var fail = function(errorCode, msg, userinfo) {
//错误的对象索引
var index = userinfo['index']; };
//执行完成回调
//code，结果码，1 表示成功，其他⻅ fail 描述 //output，成功结果，⻅ success 描述 //msg，错误信息，⻅ fail 描述 //userinfo，额外的错误信息，⻅ fail 描述
var completion = function(code, output, msg, userinfo) {
if(code == 1) { //处理方式与 success 一致
}
else {
//错误处理，与 fail 一致 }
};
//事务更新多个对象
//必须设置主键
var objs = [{'name': '小明', 'age': '20'},
{'name': '小兰', 'age': '20'}]; BO.set(objs, 'userInfo');
SQLiteDB.updateObject(objs, success, fail, completion);
//支持不同的对象同时更新
//必须设置主键
var objs1 = [{'name': '小明', 'age': '20'},
{'name': '小兰', 'age': '20'}]; BO.set(objs, 'userInfo1');
var objs2 = [{'name': 'sam', 'age': '20'},
{'name': 'jack', 'age': '20'}];
BO.set(objs, 'userInfo2');
objs1.concat(objs2);
SQLiteDB.updateObject(objs1, success, fail, completion);
实现情况
saveObject(bizObject, success, fail, completion)
新增或更新一个或多个业务对象到数据库，如果业务对象类型为数组，则会批量操作
iOS Android
✅
参数 类型 可空 说明
407

    OData 离线数据
         bizObject Dictionary/Array 否 业务对象
         success function 可 ⻅使用范例注释
         fail function 可 ⻅使用范例注释
         completion function 可 ⻅使用范例注释
        返回类型 可空 说明
    无

//保存一个对象
//执行成功回调 //output，成功结果，Bool 类型，永远为 true var success = function(output) {
};
//执行失败
//errorCode，错误码，默认为 0 //msg，错误信息
var fail = function(errorCode, msg) {
};
//执行完成回调 //code，结果码，1 表示成功，其他⻅ fail 描述 //output，成功结果，⻅ success 描述 //msg，错误信息，⻅ fail 描述
var completion = function(code, output, msg) {
if(code == 1) { //处理方式与 success 一致
}
else {
//错误处理，与 fail 一致 }
};
//保存一个对象
//使用 BO 构建一个 userinfo 对象
var obj = new BO('userinfo');
obj.name = '小明'; //主键，保存时必须有主键
obj.age = '20';
//或使用 set 设置一个对象
//var obj = [{'name': '小明'}]
//BO.set(obj, 'userInfo')
SQLiteDB.saveObject(obj, success, fail, completion);
//保存多个对象
//执行成功回调，与执行一个不同，批量执行都成功时才回调 //output，成功结果，Bool 类型，永远为 true
var success = function(output) {
};
//执行失败，批量执行时，任意一个对象更新失败时会停下，且之前的修改会被回滚 //errorCode，错误码，默认为 0
//msg，错误信息
//userinfo，额外的错误信息
var fail = function(errorCode, msg, userinfo) {
408

OData 离线数据
//错误的对象索引
var index = userinfo['index']; };
//执行完成回调
//code，结果码，1 表示成功，其他⻅ fail 描述 //output，成功结果，⻅ success 描述 //msg，错误信息，⻅ fail 描述 //userinfo，额外的错误信息，⻅ fail 描述
var completion = function(code, output, msg, userinfo) {
if(code == 1) { //处理方式与 success 一致
}
else {
//错误处理，与 fail 一致 }
};
//事务保存多个对象
//必须设置主键
var objs = [{'name': '小明', 'age': '20'},
{'name': '小兰', 'age': '20'}]; BO.set(objs, 'userInfo');
SQLiteDB.saveObject(objs, success, fail, completion);
//支持不同的对象同时保存
//必须设置主键
var objs1 = [{'name': '小明', 'age': '20'},
{'name': '小兰', 'age': '20'}]; BO.set(objs, 'userInfo1');
var objs2 = [{'name': 'sam', 'age': '20'},
{'name': 'jack', 'age': '20'}];
BO.set(objs, 'userInfo2');
objs1.concat(objs2);
SQLiteDB.saveObject(objs1, success, fail, completion);
实现情况
deleteObject(bizObject, success, fail, completion)
从数据库中删除对应主键的对象，如果业务对象类型为数组，则会批量操作
iOS Android
✅
参数 类型 可空 说明
bizObject Dictionary/Array 否 业务对象
success function 可 ⻅使用范例注释
fail function 可 ⻅使用范例注释
completion function 可 ⻅使用范例注释
返回类型 可空 说明
无
409

OData 离线数据
//删除一个对象
//执行成功回调 //output，成功结果，Bool 类型，永远为 true var success = function(output) {
};
//执行失败
//errorCode，错误码，默认为 0 //msg，错误信息
var fail = function(errorCode, msg) {
};
//执行完成回调 //code，结果码，1 表示成功，其他⻅ fail 描述 //output，成功结果，⻅ success 描述 //msg，错误信息，⻅ fail 描述
var completion = function(code, output, msg) {
if(code == 1) { //处理方式与 success 一致
}
else {
//错误处理，与 fail 一致 }
};
//删除一个对象
//使用 BO 构建一个 userinfo 对象
var obj = new BO('userinfo');
obj.name = '小明'; //主键
//或使用 set 设置一个对象
//var obj = [{'name': '小明'}]
//BO.set(obj, 'userInfo')
SQLiteDB.deleteObject(obj, success, fail, completion);
//注意!!!
//若不设置主键，将会删除表中所有数据
//var obj = new BO('userinfo'); //SQLiteDB.deleteObject(obj, success, fail, completion);
//删除多个对象
//执行成功回调，与执行一个不同，批量执行都成功时才回调 //output，成功结果，Bool 类型，永远为 true
var success = function(output) {
};
//执行失败，批量执行时，任意一个对象更新失败时会停下，且之前的修改会被回滚 //errorCode，错误码，默认为 0
//msg，错误信息
//userinfo，额外的错误信息
var fail = function(errorCode, msg, userinfo) {
//错误的对象索引
var index = userinfo['index']; };
//执行完成回调
//code，结果码，1 表示成功，其他⻅ fail 描述 //output，成功结果，⻅ success 描述 //msg，错误信息，⻅ fail 描述 //userinfo，额外的错误信息，⻅ fail 描述
var completion = function(code, output, msg, userinfo) {
410

OData 离线数据
if(code == 1) { //处理方式与 success 一致
}
else {
//错误处理，与 fail 一致 }
};
//事务删除多个对象
var objs = [{'name': '小明'},
{'name': '小兰'}]; BO.set(objs, 'userInfo');
SQLiteDB.deleteObject(objs, success, fail, completion);
//支持不同的对象同时删除
var objs1 = [{'name': '小明'}, {'name': '小兰'}]; BO.set(objs, 'userInfo1');
var objs2 = [{'name': 'sam'}, {'name': 'jack'}]; BO.set(objs, 'userInfo2');
objs1.concat(objs2);
SQLiteDB.deleteObject(objs1, success, fail, completion);
//注意!!!
//若不设置主键，将会删除表中所有数据
//var obj1 = new BO('userinfo1');
//var obj2 = new BO('userinfo2');
//objs1.concat(objs2)
//SQLiteDB.deleteObject(obj1, success, fail, completion);
实现情况
iOS Android
✅
411

System 系统信息
System 系统信息 系统信息相关
412

System 系统信息
函数列表
user()
获取用户信息
参数 类型 可空 说明
无
用户信息包括
返回类型 可空 说明
Dictionary 否 返回当前用户信息
key 说明 示例
accountCode
userinfoName 用户名称
userinfoID
tenantName 企业名称
tenantCode 企业编号
orgName 组织名称
orgCode 组织编号
positionID
positionName
mbCode
refpositionID 职位编码
appCode 当前登录的应用编码 "sfa "
appCodes 当前租户的应用列表 ["sfa"]
categoryCode 当前的职位类别 ""
subpdCodes 当前租户子产品列表 ["sfa"]
var userInfo = System.user()
var appCode = System.user().appCode
实现情况
context()
iOS Android Web
✅✅ 未检测
413

System 系统信息
获取当前用户登录信息
参数 类型 可空 说明
无
信息包括
返回类型 可空 说明
Dictionary 否 返回当前用户登录信息
key 类型 说明 示例
isOffline Bool 当前是否离线 false
token String 当前用户登录的 token eyJhbGciOiJIUzI....
httpAddress String http 请求 url 头 https://kx100.xtion.net:7000
versionName String 版本名称 8.1
versionCode String 版本号 100
示例
var token = System.context().token
实现情况
uniqueid()
获取一个的 uniqueid
iOS Android Web
✅ 未检测
参数 类型 可空 说明
无
返回类型 可空 说明
String 否 返回一个 uniqueid
var uniqueid = System.uniqueid()
实现情况
date()
iOS Android Web
✅ 未检测
414

System 系统信息
获取服务端当前时间
参数 类型 可空 说明
无
实现情况
functionCodes()
获取功能权限
返回类型 可空 说明
Date 否 返回服务端当前时间
var now = System.date()
iOS Android Web
✅✅ 未检测
参数 类型 可空 说明
无
返回类型 可空 说明
Array 否 返回当前用户的完整功能权限 code 的数组，Array 形如[String]
var fc = System.functionCodes()
实现情况
functionCheck(functionCodes)
功能权限检测
iOS Android Web
✅✅ 未检测
参数 类型 可空 说明
无
返回类型 可空 说明
Bool 否 支持输入多个功能点的 code，只有所有权限都有时才返回 true，其他情况都返回 false
var r = System.functionCheck(['80998877734324']) if(r == true) {
//包含被检查的功能点 }
415

System 系统信息
实现情况
console(msg)
控制日志输出
iOS Android Web
✅✅ 未检测
参数 类型 可空 说明
无
返回类型 可空 说明
无
System.consloe('request is OK')
实现情况
ideLog(p, title)
把日志发送到 IDE，注意此方法只有在开发模式下生效 参可
数空
p 否
iOS Android Web
✅✅ 未检测
类型
String、Dictionary、 Array、Number、 function
说明
日志输出内容，可以为多种类型数据，但当类型为 function 时，函数通过 回调方式获取日志内容，当日志内容仅仅用于查看时，应当优先使用回 调函数
参数 类型 可空 说明
title String 可 日志在 IDE 显示的标题，可以为空，为空时默认显示“UIFlyCode 打印”
返回类型 可空 说明
无
//没有 title 入参 System.ideLog('request is OK')
//有 title 入参
System.ideLog('request is OK'，'列表请求结果')
//通过回调函数返回日志内容 System.ideLog(function() { return 'request is OK'
})
416

System 系统信息
System.ideLog(function() { return 'request is OK'
}，'列表请求结果')
实现情况
navinfo(key)
根据 key 获取对应的导航目录信息
iOS Android Web
✅✅ 未检测
// 调用示例
var pagecode = System.navinfo('applist')[0].pagecode
参数类型可空 说明
key string 否 指定的导航目录的 key
返回类型 可空 说明
Array 是 返回对应 key 的目录下所有节点的信息
返回数据结构示例
实现情况
[
{
} ]
"pagecode": "12123546464", "title": "店铺到达", "description": "拜访步骤 1", "icon": "arrive"
iOS Android Web
✅ 未检测
417

Color 颜色
Color 颜色
418

Color 颜色
自带颜色
颜色 属性 说明
黑 black RGB(0,0,0)
白 white RGB(255,255,255)
灰 gray RGB(128,128,128)
红 red RGB(255,0,0)
绿 green RGB(0,255,0)
蓝 blue RGB(0,0,255)
⻩ yellow RGB(255,255,0)
⻘ cyan RGB(0,255,255)
橙 orange RGB(255,128,0)
紫 purple RGB(128,0,128)
棕 brown RGB(153,102,51)
洋红 magenta RGB(255,0,255)
透明 clear RGBA(0,0,0,0)
419

Color 颜色
16 进制颜色码 支持 16 进制颜色码
//以“#”开头，不区分大小写 var black = '#FFFFFF' //或以“0x”开头，不区分大小写 var red = '0xFF0000'
420

Color 颜色
RGBA 或 RGB 支持 RGBA 或 RGB
//RGB
var black = '0,0,0' //RGBA
var red = '255,0,0,0'
421

ErrorCode 错误码
ErrorCode 错误码
422

ErrorCode 错误码
错误码说明
noError
没有错误
unDefineError
未定义错误
emptyData
请求成功但返回的数据中，特定的对象或数组为空或⻓度为 0
cancelRequest
中断请求，该错误码通常由用户抛弃请求所引发，如网络，注意，若错误码为 cancelRequest 时，不要弹出任何提示 框，同时需要停止后继所有请求
netWorkOffline
断网
serverConnectFailed
服务地址不能连接，如 地址不存在
requestTimedOut
请求超时，如 网络环境很差(严重掉包、wifi 虽然联上，但服务器不能访问)或服务器没有响应
requestLost
if(status == ErrorCode.cancelRequest) { //不要进行任何业务逻辑操作几表单 UI 控件操作
}
if(status == ErrorCode.netWorkOffline) { print('断网了')
}
423

ErrorCode 错误码
网络连接已中断，如 请求过程中断网
特殊函数
isNetError
判断已知的网络错误，包括 netWorkOffline、serverConnectFailed、requestTimedOut、requestLost
Page.openProress('数据加载中，请稍候......')
var success = function(output) { //刷新控件等操作
}
var fail = function(errorCode, msg) { //显示错误信息
if(isNetError(errorCode) == true) { //处理网络异常信息
} }
var completion = function(code, output, msg) { Page.closeProgress()
}
var IN = {'id': '123456'}
//发起网络请求
Model.requestServer('渠道类型', IN, success, fail, completion)
424

UIFlyCode 综合列子
综合列子 列表获取数据刷新，并按⻔店距离排序
//获取查询栏控件中，终端名称的值
var tName = Page.getCtrl('查询栏').getValue(CtrlValueGetter('终端名称')); //获取列表控件中，分⻚索引的值
var pageIndex = Page.getCtrl('列表').getValue(CtrlValueGetter('**pageindex'));
//构建请求参数，所有 value 为字符串类型 var storeIN = {
'storename': tName != null ? tName : '' };
var paging = {
'**pagesize': '15',
'**pageindex': pageIndex != null ? pageIndex : '0'
};
var IN = {
'kx_kq_store': storeIN,
'**paging': paging };
//成功回调
var success = function (object) {
var stores = object['kx_kq_store'];
//分⻚索引为 0 且没有数据返回
if(stores.length <= 0 && pageIndex == 0) {
//设置 placeholder
//请求成功但没有数据 Page.getCtrl('列表').setLoadStatus(ErrorCode.emptyData); return;
}
var locations = new Array();
for (var i = 0; i < stores.length; i++) {
var store = stores[i]; locations[i] = {
'lat': parseFloat(store['latitude']),
'lng': parseFloat(store['longitude']) };
}
//利用上次定位位置缓存，粗略计算⻔店距离
var metersRs = Location.metersDistanceBetweenMapPoints(locations); for (var i = 0; i < stores.length; i++) {
var store = stores[i];
store.metersR = metersRs[i]; }
function sortMeter(a, b) {
return a.metersR - b.metersR;
}
stores.sort(sortMeter);
for (var i = 0; i < stores.length; i++) {
var metersR = stores[i].metersR; if (metersR >= 1000) {
metersR = metersR / 1000;
metersR = metersR.toFixed(2);
var newMeter = '{0}千米'.format(metersR); stores[i].metersR = newMeter;
} else {
metersR = metersR.toFixed(2);
425

UIFlyCode 综合列子
var newMeter = '{0}米'.format(metersR);
stores[i].metersR = newMeter; }
}
//构建数组型控件 Setter
var setter = ArrayCtrlSetter(); //绑定到行控件 setter.append('storecode'); //绑定到行对象的子控件上 setter.append('storename', '终端名称'); setter.append('metersR', '距离');
//刷新列表
Page.getCtrl('列表').setValue(object, setter); };
//失败回调
var fail = function(errorCode, msg) {
var actions = AlertChoice() actions.append('OK', function() {
System.console('click action OK 请求失败') })
//弹出错误提示
Page.alert(AlertType.error, msg, actions);
//控制台打印
System.console(msg); };
//发起请求
Model.runLogicScript('终端列表查询', IN, success, fail);
根据 Page 中的值，修改控件状态
使用信号量控制下拉框数据请求
if (Page.getValue('\_\_pagestatus') == '1') {
Page.getCtrl('审批状态').hidden = true;
Page.getCtrl('申请日期').hidden = true; }
//打开进度条，锁屏 Page.openProgress();
//使用信号量控制多个请求
var semaphore = new Semaphore(2);
//向服务器请求渠道类型数据 var r1 = function () {
//成功回调函数
var success = function (output) {
//设置下拉框选项
var setter = PickerCtrlOptionSetter(); setter.append("channelid", "key"); setter.append("channelname", "text");
426

UIFlyCode 综合列子
setter.append("channelcode", "value"); Page.getPickerCtrl('渠道类型').setOption(output, setter);
};
//完成回调函数
var completion = function (code, output, msg) {
//网络错误
if (isNetError(code) == true) {
//把错误发送到 ide 查看 System.ideLog(function() {
return 'request is Error'; })
}
//释放信号量
semaphore.sign(); };
//发起请求
Model.requestServer('渠道类型', null, success, null, completion); };
//向服务器请求客户类型数据 var r2 = function () {
//完成回调函数
var completion = function (code, output, msg) {
//请求成功判断
if (code == ErrorCode.noError) {
var setter = PickerCtrlOptionSetter(); setter.append("customid", "key"); setter.append("customname", "text"); setter.append("customcode", "value");
Page.getPickerCtrl('客户类型').setOption(output, setter); }
//网络错误
else if (isNetError(code) == true) {
//把错误发送到 ide 查看 System.ideLog(function() {
return 'request is Error'; })
}
semaphore.sign(); };
//向服务端请求客户类型数据
Model.requestServer('客户类型', null, null, null, completion); };
//所有信号量释放，执行后继操作 var completion = function () {
//关闭进度条
Page.closeProgress(); };
//信号量等待
semaphore.wait([r1, r2], completion);
计算列表上所有产品的总价
var listCtrl = Page.getArrayCtrl('列表');
427

UIFlyCode 综合列子
var n = listCtrl.rowNumber; var rowCtrls = new Array();
//获取所有行集合
for(var i = 0; i < n; i++) {
var rowCtrl = listCtrl.getRowAtIndexPath(IndexPath(0, i)); rowCtrls.append(rowCtrl);
}
var total = 0;
for(var i = 0; i < rowCtrls.length; i++) {
var rowCtrl = rowCtrls[i];
var prise = rowCtrl.getValue('prise');
var count = rowCtrl.getCtrl('数量').value;
var priseN = parseFloat(prise);
var countN = parseInt(count);
var thisTotal = prise \* count;
total = total + thisTotal; }
Page.getCtrl('总价').value = total.toString()
428

自定义控件
什么是自定义控件
自定义控件是指，产品团队为满足业务多样性数据展示及交互的需要，在平台控件不能满足的情况下，基于平台提供的 数据、协议规范和 SDK 接口，自行编写的用户交互界面，及数据和方法的封装。并且，自定义控件能在 IDE 中注册，在 多场景复用时，能快速配置。
使用 IDE 注册自定控件

1. 打开 IDE，选择产品管理--自定义控件--新建控件
1. 选择控件的使用端，并设置控件的名称、类型、分类。控件类型是配置协议中的唯一标识，也用于原生代码开发开 发时的注册 key。控件分类会影响控件能设置的基本属性。
1. 勾选在表单配置时需要编辑的基本属性。注意，在控件渲染的过程中，应用端的 UI 引擎会根据上下文，对控件的基 本属性作出响应。
   429

自定义控件

1. 添加在表单配置时需要编辑的自定属性。这些属性，在应用端的 UI 引擎中并不会主动作出响应。
   属性项英文名称是控件在配置协议中的属性标识，不同的自定义控件，其名称可以相同。
   属性项类型有四种，分别是输入框，在配置时输入相应的属性值;弹出设置，在配置时用于设置控件属性的可选值;选
   择事件，用于配置时设置控件所关联的事件;复选框，用于配置时设置控件属性的 true/false 值 1. 数据处理规则，用于在控件接收到来自 UI 引擎的数据时，控件应该如何对数据作出解析处理
1. 在表单配置中使用自定义控件。和 IDE 自带的控件在使用上无异。
   430

自定义控件
在应用端注册/开发自定义控件
在 IDE 中注册的自定义控件，需要通过原生代码开发并在应用端的 UI 引擎注册，才能真正被使用。
{ }
431

与原生⻚面交互
与原生⻚面交互
UI 引擎支持配置⻚面与非配置⻚面交互，实现之间的转跳。目前已经支持:

1. 配置⻚面(附带参数) 转跳 非配置⻚面 2. 非配置⻚面(附带参数) 转跳 配置⻚面 3. 配置⻚面(不带参数) 回退 非配置⻚面 4. 非配置⻚面(不带参数) 回退 配置⻚面
   “配置⻚面转跳非配置⻚面”实现方式举例 配置的协议
   {
   "pageinfo": {
   "code": "989409616339275875",
   "title": "测试表单" },
   "presenter": { "handlers": [
   {
   "desc": "链接到非配置界面事件", "actions": [
   {
   "desc": "链接到非配置界面行为",
   "type": "link", //native 是转跳到非配置界面的识别前缀 //目前 IDE 不支持配置 native 前缀，需要手动修改 //转跳 key 为“unConfigVCL”的非配置界面 "pagecode": "native:unConfigVCL", "param": {
   "name": "\_\_linkparam", "properties": [
   {
   "name": "param1", "value": "1"
   } ]
   } }
   ] }
   ] }
   }
   代码实现，以 iOS 为例
   //注册非配置界面，key 为"unConfigVCL"，需要与配置协议保存一致 XPEEngine.pageNavigation().registViewControllerClass(TestViewController.self, forKey: "unConfigVCL")
   //非配置界面
   //非配置界面的构建时机由 UI 引擎决定
   class TestViewController: UIViewController {
   override func viewDidLoad() { super.viewDidLoad()
   //提取引擎传递过来的参数集合 //参数集合为字典-字符串类型
   432

与原生⻚面交互
if let p = param?[XPEPageEventLinkParam] as? [String: String] {
//提取 param1 参数的值
if let p1 = p["param1"] {
print(p1) }
} }
}
“非配置⻚面转跳配置⻚面”实现方式举例 配置的协议
{
"pageinfo": {
"code": "989409616339275875",
"title": "测试表单" },
"presenter": { "initial": [
{
"desc": "接收参数事件", "actions": [
{
"desc": "接收参数行为", "type": "receivelink", "param": {
"name": "\_\_linkparam", "properties": [
{
"name": "param1", "paramtype": "3"
}, {
"paramtype": "3" }
"name": "param2",
] }
} ]
} ]
} }
代码实现，以 iOS 为例
//从非配置界面转跳到配置界面 //配置界面接受的参数，key 需要与 ReceiveLinkAction 中 param 配置一致，否则不能接收参数，且参数值必须为 String 类型
let param = ["param1": "1", "param2": "2"]
//支持使用表单的 code 为目标进行转跳 //转跳到 code 为“989409616339275875”的表单 let pageCode = "989409616339275875"
XPEEngine.pageNavigation().push(pageCode: pageCode, pageParam: param as [String : AnyObject])
//支持使用表单的名字为目标进行转跳
//转跳到名字为“测试表单”的表单
let pageName = "测试表单"
XPEEngine.pageNavigation().push(pageName: pageName, pageParam: param as [String : AnyObject])
433

与原生⻚面交互
“配置⻚面回退非配置⻚面”实现方式举例 由 UI 引擎默认支持回退到上一个界面，不区分是否配置界面
”非配置⻚面回退配置⻚面”实现方式举例 代码实现，以 iOS 为例
//使用全局导航回退 XUINavigationController.pop()
434

版本变更摘要
版本变更摘要
V2.4

1. 补充对于表单整体说明的文档 2. 新增 InteractiveWebView 协议 3. Flycode 增加部分错误码
2. 新增二开自定义控件说明
3. 修正部分文档内容中的错误 6. 部分目录分类整理
   435

App 端导航实现
App 端导航实现 根目录
基本说明
目前常⻅的一级节点有今日 ,消息 ,应用 ,报表 。
在 aPaaS V2.4 版本 后，导航目录的接口 api/teapi/protocol/pagenavigation/gets 会返回根目录对应的 key，字段名为
homekey ，APP 端需要使用该字段的值去本地导航服务中去获取到对应信息并展示。 每个节点链接一个表单，其中 消息 和 应用 分别链接 ref 为 appmessagepage 和 appfunctionlistpage 的 native ⻚
面; 今日 和 报表 其内容由控件承载，因此链接对应的普通表单即可。
本层目录目前由一个 tab bar 的形式展现，平台不提供默认的实现，由产品自行调用接口并展示。
旧版本兼容
由于旧的企业并未按照本方案配置，而是在代码中写死了各个一个节点，因此目前需要保留这部分功能。 区分的标志即为当导航接口没有返回根目录节点的 key 时，就使用旧代码。
平台新增接口
平台需要提供一个便捷的获取根节点目录的方法。
二级目录(应用列表)
436

App 端导航实现
基本说明
App 的主要功能入口均集中在应用列表中，该列表由一个 ref 为 appfunctionlistpage 的二开⻚面展现。该二开⻚面由产 品开发人员自行开发，固定读取一个导航目录的数据进行展示。
目前使用的的导航目录的 key 值为 applist 由于配置的限制，目前导航目录的分组功能并不灵活，为了满足 App 端的 UI 需求，使用 模块 节点来对表单入口进行分
组。
如果不同的分组的 UI 有差异，例如重要功能在顶端突出显示，App 端需要根据 模块 的标题来区分。 目前约定模块的命名如下:
旧版本兼容
与根目录的旧版本兼容依据一致，只是由于旧版本的数据没有根据模块分组，直接显示为一个分组即可。
平台新增接口
目前平台提供的接口只能返回表单，不能返回分组信息，需要新增一个接口可以按模块对表单进行分组。
模块名称 说明
常用功能 显示在顶部的最上方，最多支持配置三个子节点
...... 由于其余模块并无特殊显示需求，由产品自行决定命名
437

App 端导航实现
三级目录(费用管理)
目前这部分沿用之前的设计
438
