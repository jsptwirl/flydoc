---
title: InfoTable 信息表格
date: 2020-05-20T14:39:45
---

# InfoTable

信息表格，专门用于Web端数据信息的显示和管理使用的。

* 支持排序（图片列不支持排序）
* 支持刷新
* 支持列编辑
* 支持列分组
* 支持跨页勾选。
* 支持设置分页大小（默认提供10，20，50，100这四个选项）

![](http://apaas.wxchina.com:8881/wp-content/uploads/infotable.png)

## 协议

```json
{ // 表格信息区域
    "type": "infotable",
    "code": "ctrlcode_table_storelist",
    "checkable": "1",
    "isradio": "0",
    "ispage": "1",
    "isautoheight": "0",
    "hasheaderbar": "1",
    "hasrowcheck": "",
    "defpagesize": "20",
    "datastructure": {
        "id": "id"
    },
    "rowsize": "small/medium/large",
    "cols": [
        {
            "code": "col_code_1",
            "type": "tablecell",
            "hidden": "1",
            "name": "col1"
        },
        {
            "code": "col_code_2",
            "type": "tablecell"
        },
        {
            "code": "col_code_3",
            "type": "tablecell"
        }
    ],
    "guidecols": {
        "frozen": "1",
        "merged": "0",
        "cols": [ "col_code_1" ]
    },
    "groupcols": [
        {
            "title": "列分组标题",
            "cols": [ "col_code_2", "col_code_3" ]
        }
    ],
    "operations": [
        {
            "text": "新增",
            "icon": "",
            "disabled": "",
            "functioncode": "24324324324324",
            "eventlist": [
                {
                    "trigger": "onclicked",
                    "handler": "delhandler"
                }
            ]
        },
        {
            "text": "删除",
            "icon": "",
            "disabled": "",
            "functioncode": "",
            "eventlist": [
                {
                    "trigger": "onclicked",
                    "handler": "handler_del"
                }
            ]
        },
        {
            "text": "停用",
            "icon": "",
            "disabled": "le:{__eventparam.checkednumber} != 1",
            "functioncode": ""
        }
    ],
    "rowoperations": [
        {
            "text": "编辑",
            "icon": "",
            "disabled": "",
            "functioncode": "24324324324324",
            "eventlist": [
                {
                    "trigger": "onclicked",
                    "handler": "handler_edit"
                }
            ]
        },
        {
            "text": "删除",
            "icon": "",
            "disabled": "le:{checkednumber} == 0",
            "functioncode": "",
            "eventlist": [
                {
                    "trigger": "onclicked",
                    "handler": "handler_del"
                }
            ]
        }
    ],
    "eventlist": [
        {
            "handler": "",
            "trigger": "onload"
        },
        {
            "handler": "",
            "trigger": "onrefresh"  // 刷新，停留在当前页
        },
        {
            "handler": "",
            "trigger": "onloadmore"
        },
        {
            "handler": "",
            "trigger": "onsort"
        },
        {
            "handler": "",
            "trigger": "onchecked"
        },
        {
            "handler": "",
            "trigger": "ondoubleclicked"
        }
    ],
}
```

## 属性说明

### checkable

可勾选，用于确定是否可以勾选行。

默认值为 1，表示可勾选

### isradio

web V9.7.2+支持

是否单选模式

默认值为 0，即默认是多选

### ispage

是否分页，用于控制表格是否分页。

默认值为1，表示分页

### hasheaderbar

表格头部操作是否有效，用于控制右上角的四个表格操作按钮是否有效，默认值为1。为0 是将会隐藏这些操作按钮

### hasrowcheck

允许行点击，用于控制是否允许行点击，默认为缺省值，即默认不可行点击

### defpagesize

默认分页大小，默认值为20，用于设置初始状态下，控件数据的分页大小。

### datastructure

数据结构，目前需要配置用于唯一标识数据的id字段。

* id

  必填，用于指定数据的主键字段，配置了该字段后，跨页勾选才能实现

### guidecols

先导列，在此处配置用于标识行数据的关键列。

配置在先导列的列，不能被隐藏，不能调整顺序，不能放入 groupcols 中的其他分组里。

* frozen

  冻结，用于指定是否冻结先导列，默认值为 `1` ，需要冻结

* merged

  合并，用于指定是否合并先导列的单元格，默认为 `0` ，不合并

  合并规则参看下方说明。

  一旦设置了合并，整个表格不支持排序。

* cols

  先导列所包含的具体的列code的集合

> 先导列不支持表格个性化的编辑，也就是说不支持列隐藏，也不支持分组和顺序的调整

### groupcols

默认列分组，使用配置方式对列进行分组。

分组的列会出现二级表头，并且支持收缩合并的列。

> ~~如果配置了这个属性时，表格不支持列分组和列排序，不过列编辑依然支持~~

* title

  二级表头的标题

* cols

  改分组包含的列的code的集合。

  在显示的时候，组内的列会按该值内的顺序依次放置，同时该组作为整体会放置在其包含的第一个列在 cols 属性中原本所在的位置。

### rowsize

行高，用于设置每行显示的高度，其内的控件需要能自适应高度。

可以配置以下值：

|value|显示文字|行高尺寸（px）|
|---|---|---|
|small（默认值）|小|40|
|medium|中|56|
|large|大|80|

*行高的调整不影响列头的高度，列头固定高度为40*

### cols

内容列，只能配置 `tablecell` 控件，具体参看 [TableCell](TableCell.md) 协议

### operations

表格操作，用于配置在表格左上方的一排操作按钮。

* text，icon

  与 button 控件的相应属性功能一致，不过必须配置图标+文字。

* functioncode

  功能点，如果用户没有该功能点，将直接禁用该按钮。

* disabled

  是否可用，可以配置逻辑表达式或者UIFlycode，可以动态的决定按钮对该行是否可用，不可用的按钮会置灰并不能点击

  目前只支持以下简单的表达式，示例如下：

  ```swift
  // 有勾选才起效的按钮
  le:{checkednumber} == 0

  // 只能处理一条勾选数据的按钮
  le:{checkednumber} != 1

  // 必须要有数据才有效的按钮
  le:{totalnumber} == 0
  ```

* onclicked

  点击事件，用于关联点击后触发的事件

### rowoperations

行操作，用于配置在表格右边固定显示的一列操作按钮列。

当只有一个按钮时，直接显示该按钮（此时只显示icon，如果没有icon则显示text）。多于一个时显示打点的按钮，点击后暂开操作菜单。

* text，icon

  与 button 控件的相应属性功能一致。

* functioncode

  功能点，如果用户没有该功能点，将直接隐藏该按钮。

* disabled

  是否可用，可以配置逻辑表达式或者UIFlycode，可以动态的决定按钮对该行是否可用，不可用的按钮会置灰并不能点击

  在逻辑表达式或者UIFlycode取值时，其参数取值范围为：`所在行的控件值 + 所在行的内存值` ，例如：

  ```swift
  // 表格中有一个列的控件的name叫status，且该单元格的值不为 '1' 时才起效
  le: {status} != '1'
  ```

* onclick

  点击事件，用于关联点击后触发的事件

## Eventlist 事件列表

### onload

加载事件，控件初次加载时触发，会加载个性化设置

该事件会清空已勾选数据。

### onrefresh

刷新事件，点击设置菜单的刷新按钮时触发，如果没有配置对应的事件，将会默认再次执行onload事件。

该事件会传递当前分页的index，刷新后数据保持在原先的pageindex。

该事件会清空已勾选数据。

### onloadmore

加载更多事件，点击分页页签时触发，会更新控件的pageindex。如果没有配置对应的事件，将会默认再次执行onload事件。

### onsort

排序事件，点击可排序表头触发，多次点击同一个表头会在以下值之间切换：`asc` , `desc` , `空值`。

其中空值代表不排序。

该事件会重置pageindex

### onchecked

勾选事件，点击某一行的勾选框，或者点击当页全选框时触发。

该事件会更新 `__checkednumber` 值，该值可以作为事件变量上下文获取到。

# 特性说明

## 动态列支持

动态列的取值与赋值都是一个固定格式的json字符串，其格式如下：

```js
// 动态列数据结构
'[
    {"title": "一级经销商", "value": "15"},
    {"title": "二级经销商", "value": "40"}
]'

{
    "storeid": "546584654365",
    "storename": "7-11天河店",
    // 动态列数据结构
    "test": '[
        {"title": "一级经销商", "value": "15"},
        {"title": "二级经销商", "value": "40"}
    ]'
}
```

* title

  代表动态列的动态标题，会显示在对应的列头

* value

  代表动态列的

**赋值处理**

赋值的时候，表格会拿第一条数据（如果没有数据时将不会生成动态列）来生成动态列的表头，并复制出多个控件出来，然后再将value中的值依次赋到控件中。

**取值处理**

取值的时候，表格会将动态生成列的数据取出来，生成一个与赋值格式一致的字符串，用于提交。

### 支持的控件

动态列只支持以下tablecell-style类型

|控件|说明|
|---|---|
|text||
|number||
|date|值为时间戳|
|tags|只支持固定选项|

## 表格个性化

参看[统筹管理表单自定义设置](../../Page/统筹管理表单自定义设置.md)

![](http://apaas.wxchina.com:8881/wp-content/uploads/infotable_merge.png)

![](http://apaas.wxchina.com:8881/wp-content/uploads/infotable_editcol.png)

### 关于隐藏列的规则

通过flycode或者直接通过控件的hidden属性隐藏的列，将不会出现在列编辑和列分组中。

也就是说一列需要显示的前提有两个：1. hidden没有被设置为true；2. 列编辑中该列是选中状态

## 合并单元格的相关说明

* 关于性能

  合并单元格会导致表格渲染的性能大幅降低，不建议同时合并的数据量超过50条。可以使用数据分页进行优化。

* 数据格式

  支持单元格合并的表格数据和普通的没有差别。

* 场景限制

  表格控件对单元格的合并，目前只是支持有限的场景，并不能支持任意单元格的合并，具体限制如下：

  1. 不支持表头的合并
  2. 不支持横向（跨列）的合并
  3. 不支持不连续的合并列（只能指定左边的连续n列）
  4. 不支持右边列的数据合并跨越左边列的合并范围。
  5. 不支持将可录入的控件配置到支持合并的列。
  6. 只支持该列的取值为String类型的列进行合并
  7. 不支持自动序号

  因此，如果需要更复杂的合并规则，可以考虑使用报表，或者其他手段实现。

* 单列单元格合并规则

  数据合并的大致流程如下

  1. 当前列支持合并。
  2. 根据前一列的合并情况对当前列数据进行分组。
  3. 如果是第一列则当前列所有数据分为一组。
  4. 同一组内的相邻的数据如果相同则进行合并，两个空值处理为相等。
  5. 继续合并下一列。

* 对checkable的影响

  合并列会合并勾选框

* 数据传参

  由于数据格式与普通的表格没有区别，且可录入的控件只能放置在不能合并的列中，因此数据提交的规则无需做特殊的处理。

  唯一需要注意的是，如果将按钮配置到合并的单元格中，此时点击按钮所需要传递的数据为该合并单元格中实际包含的第一行的数据。

## 真分页与假分页

* 真分页模式：表格绑定的onload、onloadmore、onrefresh事件会传递表格内部的分页信息给到事件接口，接口通过分页信息返回当前页的数据
* 假分页模式：表格一次性加载所有数据，根据数据的总条数与表格内置的每页条数自动计算总页数，截取当前页的数据显示（v9.6.6+、v9.7.1+支持）
  * 开启方式：初始化表格数据时，判断数据内是否有包含分页信息，如果有分页信息则表格为真分页模式，否则为假分页模式

```json
// 真分页数据，必须带有分页信息
{
    "resp_data": {
        "__data": [...], // 表格数据
        "__paging": { // 分页数据
            "__itemcount": "4233",
            "__pageindex": "1",
            "__pagesize": "50"
        }
    }
}

// 假分页数据
{
    "resp_data": {
        "__data": [...], // 表格数据
    }
}
```

# UIFlycode 支持

|方法|简要说明|实现情况|
|---|---|---|
|getInScope <font>\*</font>|获取指定范围内的数据|支持|
|getInScopeSerialized <font>\*</font>|返回 getInScope 的序列化数据|支持|
|getInScopeReverse <font>\*</font>|获取指定范围外的数据，与getInScope相反|支持|
|getFocusRow|获取数组型控件的焦点行控件|支持|
|getCheckedRows|获取数组型控件中所有被勾选的行控件|支持|
|getAllRows <font>\*</font>|获取数组型控件中所有被勾选的行控件|支持|
|getColByName|获取指定名字的列控件对象ArrayColCtrl|支持|
|getInIndexes <font>\*\*</font>|获取指定多行的数据|支持|
|getIndexesInScope <font>\*\*</font>|获取指定范围的行的indexes|支持|
|getRowAtIndexes <font>\*\*</font>|获取指定位置的行控件ArrayRowCtrl|支持|
|clearSelect|清空表格勾选|支持|
|reload|传入表格并重新初始化表格，表格会变为假分页模式|v9.6.6+,v9.7.1+支持|
|getHeaderButtons|获取顶部按钮栏的所有按钮的Ctrl|v9.7.4+支持|
|samecheck|数据相似性校验|v9.7.6+支持|
|selectRows|传入数据勾选表格行|v9.7.6+支持|

|属性|简要说明|实现情况|
|---|---|---|
|hidden|控制表格隐藏|支持|
|checkable|控制是否有勾选列|支持|
|checkedNumber|勾选数量，仅支持获取|v9.7.4支持|
|pageIndex|当前分页索引，仅支持获取|v9.7.4支持|
|rowNumber|总行数，仅支持获取|v9.7.4支持|

[数组型控件UIFlycode详细文档](http://apaas.wxchina.com:8881/2020/05/19/511/)

备注

> <font>\*</font> 如果数据是真分页的，getAllRows或getInScope 使用 all 来获取数据时，获取到的是当前页的全部数据，而不是全部页的数据；使用假分页 all 能获取全部数据
>
> <font>\*\*</font> 如果数据是真分页的，getInIndexes、getIndexesInScope等根据索引获取数据的方法，索引的起点是当前页的第一条数据，而不是全部页的数据；使用假分页则能正常获取数据

## 额外配置

额外配置是不建议更改的属性，不开放配置，只可直接修改协议。

### isautoheight

是否高度自适应，用于控制表格高度是否自适应

默认值为0，表示非自适应。

注：如果设置了高度，此配置项无效；当表格不分页且高度自适应时，如果数据量较大，会影响页面渲染性能

### pagesizelist

更改分页数量可选项，如 \[10,20,100,1000\]，如果单页数据量较大，会影响页面渲染性能