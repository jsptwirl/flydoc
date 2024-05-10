---
title: datatree 数据树
date: 2020-05-20T14:23:37
---

# 数据树 datatree

专门用于营销组织，销售区域等树形结构的数据的业务控件，其内部自动绑定了平台提供的这些数据的查询接口，可以大大简化表单的配置。

# 协议

```json
{
    "type": "datatree",
    "title": "组织架构",
    "lazyload": "0",
    "intermediateselectmode": "disable",
    "searchable": "1",
    "scene": "navigation",
    "datasource": "organization",
    "autofillvalue": "1",
    "hiddenclearbtn": "0",
    "eventlist": [
        {
            "handler": "",
            "trigger": "onvaluechange"
        }
    ]
}
```

## lazyload 懒加载

Bool值，用于指定子节点是否为懒加载模式，默认值为0，即不支持懒加载。

懒加载模式下，如果选中的节点为当前树的叶子节点，并且尚未标记为末级节点时，将会自动请求该节点的的子节点，如果请求数据为空，则将该节点标记为末级节点，不再支持展开；如果有数据，则将数据添加到该节点下面。

> 目前的实际实现上，组织架构和营销区域接口并没有支持懒加载，数据都是一次性获取，只是出于渲染优化的考量，web端会根据该属性推迟DOM树的渲染，手机端暂时无需解析该属性，因为通常数据不会超过1000条，量并不大。
>
> 不过行政区域的接口支持懒加载，各端在实现时可以在这个场景下实现真正的懒加载。不过由于手机端的行政区域通常是本地数据，因此可以不必实现懒加载。

## searchable 可搜索

bool值，用于指定选项是否支持搜索。默认值为1，表示可以搜索。

该属性会决定选项上方的搜索框是否显示。

目前搜索会自动根据name字段进行搜索，搜索规则是 `case insensitive` + `contain`。

## scene 使用场景

|取值|中文名称|说明|
|---|---|---|
|navigation|导航树|用于导航场景，直接显示节点信息，单选|
|filter|单项筛选|用于筛选条件，放在搜索条上，弹出选择，单选|
|filtermulti|多项筛选|同上，多选|
|picker|单项选择|用于选择值，放置在表单中采集或显示数据，弹出选择，单选|
|pickermulti|多项选择|同上，多选|

不同场景下的UI交互有所不同，请参看下方的UI交互说明。

不同的场景，由于交互不同，其值改变事件的触发方式会有所不同，具体参看UI示例。

## intermediateselectmode 节点选则模式

用于指定非叶子节点的选择模式，默认为 `individual` ，即不能选择非叶子节点

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

## datasource 数据来源

内置的数据来源，决定了数据树所显示的数据。数据加载在

|值|中文名|
|---|---|
|organization|营销组织，默认值|
|salesarea|销售区域|
|administrativeregion|行政区域|
|custom|自定义数据，将会使用一个事件来绑定数据(备注：web端专用)|

## autofillvalue 自动填充默认值

用于标记是否需要自动天聪默认值，默认值为0，表示不需要填充，当值为1时，填充规则如下

* 自定义数据默认选中第一个数据
* 营销组织根据当前登录人的对应信息进行填充 （orgCode）
* 销售区域暂时不支持自动填充
* 行政区域根据定位信息进行填充

以上规则如果填充失败，则终止自动填充，由用户自行选择

## hiddenclearbtn

禁止清除，控制是否能清除已选择的数据，只在单选时起效

# 内置配置信息

使用内置的配置，可以方便快速的实现开箱即用的特性。销售区域列表所使用到的固定配置信息如下：

## 营销组织

**逻辑名称**：组织查询(共用)

**逻辑code**：110000000000000000

**入参**：

pl\_orgstruct

|参数|说明|
|---|---|
|status|状态，用于筛选是否显示停用的区域。|
|orgname|组织名称，通常用于按名字搜索组织|
|parentorgstructid|上级组织id，用于分级加载，或者限定范围|

> 目前的实际使用中是一次性查询所有数据的，所以不需要入参

**出参**：

pl\_orgstruct

|参数|示例|说明|是否必须|
|---|---|---|---|
|orgname|广东省分公司|组织名|✅|
|orgstructid|1102378149624287232|组织id|✅|
|parentorgstructid|1|父节点id|✅|
|seq|1|节点排序|✅|
|orgtypeid|2|组织类型|✅|
|fullname|快销总公司/广东省分公司|完整路径名||
|orgnamejoin|广东省分公司(快销总公司)|完整合并名||
|codepath|1.1102378149624287232.|id完整路径||
|level|2|当前节点所在层||
|status|1|启用状态||
|||||

## 销售区域

**逻辑名称**：营销区域--区域树

**逻辑code**：1107949922751221847

**入参**：

|参数|说明|
|---|---|
|status|状态，用于筛选是否显示停用的区域。1|

> 目前的实际使用中是一次性查询所有数据的，所以不需要入参

**出参**：

|参数|示例|说明|是否必须|
|---|---|---|---|
|saleareaname|广东省大区|区域名|✅|
|saleareaid|1109999930409357312|区域id|✅|
|parentsaleareaid|1|父级区域id|✅|
|seq|1|节点排序|✅|
|saleareacode|QU00001|区域代码|✅|
|codepath|1.1109999930409357312.|id完整路径||
|fullname|销售中心/广东省大区|完整路径名||
|status|1|启用状态||
|||||

## 行政区域

> **行政区域在手机端的数据获取，应当实现为本地优先**

**逻辑名称**：营销区域--区域树

**逻辑code**：111000000001100001

**入参**：

|参数|说明|
|---|---|
|parentregionid|指定搜索该id的下级节点|
|regionname|指定搜索包含该名称的节点|
|level|指定搜索该层级的节点|

> 目前的实际使用中是一次性查询所有数据的，所以不需要入参

**出参**：

|参数|示例|说明|是否必须|
|---|---|---|---|
|regionname|广东省|区域名|✅|
|regionid|440000|区域id|✅|
|parentregionid|100000|父级区域id|✅|
|seq|1|节点排序|✅|
|regioncode|1951|区域代码|✅|
|idpath|100000.440000|id完整路径||
|namepath|中国.广东省|完整路径名||
|regiontype|1|区域类型||
|regiontypename|省|区域类型名称||
|level|1|层级||
|status|1|启用状态||

# 取值

数据树控件在取值时会将数据字段转换为统一的命名后的字段，具体对应关系如下：

|字段名|字段中文名|组织架构字段|营销区域字段|行政区域字段|
|---|---|---|---|---|
|text|名称|orgname|saleareaname|regionname|
|key|key|orgstructid|saleareaid|regionid|
|id|id|orgstructid|saleareaid|regionid|
|parentid|父id|parentorgstructid|parentsaleareaid|parentregionid|
|idpath|id路径|codepath|codepath|idpath|
|textpath|名称路径|fullname|fullname|namepath|
|code|代码|无|saleareacode|regioncode|
|type|类型|orgtypeid|无|regiontype|
||||||

## 默认取值

即当取值的 component 为空或者为 `value` 时，会根据当前的 datasource 属性组装成统一字段名的json字符串，具体如下：

```json
// 营销区域默认取值，单选
{
    "text": "广东省大区",
    "key": "1109999930409357312",
    "id": "1109999930409357312",
    "parentid": "1",
    "idpath": "1.1109999930409357312",
    "textpath": "销售中心/广东省大区",
    "code": "QU00001",
    "type": ""
}

// 组织架构默认取值，多选
[
    {
        "text": "快销总公司",
        "id": "1",
        "parentid": "",
        "idpath": "1",
        "textpath": "快销总公司",
        "code": "",
        "type": "0"
    },
    {
        "text": "广东省分公司",
        "id": "1102378149624287232",
        "parentid": "1",
        "idpath": "1.1102378149624287232",
        "textpath": "快销总公司/广东省大区",
        "code": "",
        "type": "2"
    }
]
```

## Component取值

和其他的选择类控件一样，数据树可以通过指定component来取指定的单一数据，支持的component参看上方的取值对应表中的**字段名**

# UI说明

## 导航

### 手机端

手机端的导航树是作为一个类似列表控件的使用方式来使用的，点击圆形进入按钮将触发值改变事件，默认会将点击行的完整值传递出去。

![](http://apaas.wxchina.com:8881/wp-content/uploads/navigation_mobile.png)

### web端

web端的导航树是一个常见的场景，基本UI操作和现有的picktree一致，只是增加了默认的搜索框方便搜索。

![](http://apaas.wxchina.com:8881/wp-content/uploads/navigation_web.png)

两个端的点击响应区域不太一样，示意如下：

![](http://apaas.wxchina.com:8881/wp-content/uploads/navigation_toucharea.png)

## 筛选

筛选框应用在filter中，用做筛选条件。

### 手机端

由两部分组成：选择框和勾选树。选择框用来暂时选中项，以及触发显示勾选树。

选择框的内容在控件内部居中显示，未选中状态显示标题，不显示placeholder。选中后样式发生变化，参看下方示意图。

![](http://apaas.wxchina.com:8881/wp-content/uploads/Filter_Mobile.png)

勾选树在点击选择框时全屏弹出，点击**完成**按钮关闭弹窗并给选择框赋值，同时触发值改变事件。点击**重置**按钮时，清空当前的选中选项，当前没有选项被选中时，重置按钮不可用。

选则树的点击区域参看导航树的示意图。

!\[\](images/Filter\_Mobile Selector.png)

### web端

和手机端一样，也是由选择框和勾选树两部分组成，操作功能基本一致，只是UI有所不同，具体参看下方示意图。

![](http://apaas.wxchina.com:8881/wp-content/uploads/Filter_Web.png)

!\[\](images/Filter\_Web Selector.png)

## 选择

选择框用在取值的场景，其操作基本和filter模式下一致，不过由于其使用特点，在多选的选择框时，选项不会被折叠，而是要全部显示出来。同时还会增加只读状态。

### 手机端

![](http://apaas.wxchina.com:8881/wp-content/uploads/Selector_Mobile.png)

### web端

![](http://apaas.wxchina.com:8881/wp-content/uploads/Selector_Web.png)