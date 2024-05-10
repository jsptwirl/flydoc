---
title: EditorTable 编辑表格
date: 2020-10-09T15:58:55
---

# EditorTable

编辑表格，专门用于web端数据采集的表格。该表格不支持列编辑，也不支持用户自定义的列分组与排序。

编辑表格支持动态列设置，默认支持自动序号显示。

支持配置多种基本控件进行显示和数据采集。

编辑表格的数据一次性获取，不支持分页加载（可以前端分页显示），支持缓存搜索。

编辑表格支持折叠内容，当内容折叠后，表格的按钮将会不可用。

> 编辑表格只在Web端可用

![](http://apaas.wxchina.com:8881/wp-content/uploads/editortable%E6%8E%A7%E4%BB%B6.png)

* 编辑表格分页规则为每页10条
* 编辑表格数据条数为10条以下时，不显示底部分页栏（v9.6.6+，9.7.1+）

# Protocol

```json
{ // 表格信息区域
    "type": "editortable",
    "code": "ctrlcode_table_storelist",
    "title": "",
    "roweditable": "",
    "checkable": "1",
    "hasheaderbar": "1",
    "hasrowcheck": "",
    "readonly": "",
    "required": "",
    "cols": [
        {
            "code": "col_code_1",
            "type": "textinput"
        },
        {
            "code": "col_code_2",
            "type": "textinput",
            "width": ""
        },
        {
            "code": "col_code_3",
            "name": "number",
            "type": "checkbutton"
        }
    ],
    "dynamiccols": ["col_code_3"],
    "batcheditablecols": ["col_code_3"],
    "groupcols": [
        {
            "title": "列分组标题",
            "cols": [ "col_code_1", "col_code_2" ]
        }
    ],
    "total": [
        {
            "col": "col_code_2",
            "exp": "SUM"
        }
    ],
    "appendrowbyobjs": {
        "objctrl": "col_code_1",
        "objunique": "1"
    },
    "defoperations": [

    ],
    "operations": [
        {
            "text": "导出",
            "icon": "",
            "disabled": "le: {__checkednumber} == 0",
            "functioncode": "24324324324324",
            "eventlist": [
                {
                    "trigger": "onclicked",
                    "handler": "handler_import"
                }
            ]
        },
        {
            "text": "导入",
            "icon": "",
            "disabled": "",
            "functioncode": "",
            "eventlist": [
                {
                    "trigger": "onclicked",
                    "handler": "handler_export"
                }
            ]
        }
    ],
    "eventlist": [
        {
            "trigger": "onload",
            "handler": "handler_loadstorelist"
        },
        {
            "trigger": "onvaluechange",
            "handler": ""
        }
    ]
}
```

## 属性说明

### title

标题，控件支持显示标题。

如果没有标题，标题行将不显示（即没有标题时，将没有折叠功能）

### roweditable

可编辑行，bool类型，默认为 `1` ，表示可编辑。

当可编辑时会显示行编辑功能按钮，也就是在标题行显示新增和删除按钮，在每一行的末尾显示一个操作菜单。

当不可编辑时将会隐藏行编辑功能按钮。

|功能名称|说明|
|---|---|
|新增|直接在列表尾部增加一行|
|删除（表头）|删除勾选行，需要提示（是否删除所有选的行数据）|
|删除（列尾菜单）|删除当前行|
|复制|在当前行的下方复制一行 【暂未实现】|
|上方插入|在当前行的上方插入一行|
|下方插入|在当前行的下方插入一行|
|上移|当前行上移一行，第一行不显示该按钮|
|下移|当前行下移一行，最后一行不显示该按钮|

> 新增的行，除了复制的，都需要计算可输入控件的默认值，然后自动填充

### checkable

可勾选，用于控制是否显示勾选框，默认值为`1` ，即默认可勾选

### hasheaderbar

显示顶部按钮，用于控制是否显示顶部按钮，默认值为`1` ，即默认显示

### hasrowcheck

允许行点击，用于控制是否允许行点击，默认为缺省值，即默认不可行点击

### readonly

只读，bool值，默认为 `0` 。此时对表格无影响。

当值为 `1` 时，表示表格用于查看，此时会忽略 `roweditable` 的值，隐藏行编辑功能按钮。同时会将 `cols` 内部的所有控件设置为只读模式。

该属性支持使用flycode，或者事件设置。

> 只读时，不显示必填标志

### required

必填，bool值，默认为 `1` 。表示表格数据提交时，必须包含至少一条数据。

该属性支持使用flycode，或者事件设置。

### cols

列控件集合，用于放置每一列的控件，可配置的控件列表请参看下方 **表格内嵌控件说明** 。

* 列控件布局属性

  放入此处的基本控件将会失去大部分的布局属性，只保留 `width` 属性。

* 列控件必填属性

  如果列控件配置了必填，表示该列数据不能为空，在提交数据时要进行校验。

### dynamiccols

动态列，用于指定哪些列是动态生成的。跟根据数据动态的复制出相应数量的列。

动态列在显示上与分组列一样，默认会自动生成二级表头，二级表头的标题就是动态列绑定的控件的标题。也支持折叠与展开。因此动态列不能放置到 groupcols 中

动态列的取值与赋值参看下方说明。

### batcheditablecols

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

### groupcols

分组列，用于将一组列放置在一起，给一个统一的二级表头。同时列分组支持折叠和展开。

默认值为空。

### total

总计，当配了该属性后，会在最后一行（如果有分页，则会在每页的最后一行）显示一个总计行，用于显示一个或多个统计信息。会固定在最前方显示一个"总计"

默认值为空。

* col

  统计信息所在列的code

* exp

  统计数据的函数，返回一个字符串用于显示，具体规则查看下方说明。

目前支持以下函数

|函数名|说明|
|---|---|
|SUM|求和|
|AVG|平均值|
|MAX|最大值|
|MIN|最小值|
|||

统计信息的对齐方式，会与其所在列的对齐方式一致。

统计的列如果是可编辑的，则需要在编辑的时候实时进行统计。

表格数据在加载成功时也会触发一次统计计算。

> 如果统计的列是动态列，则其每一列都会应用该统计表达式，分别进行计算和显示
>
> 此外使用UIFlycode的列控件的统计方法也能获取这些统计值

### operations

附加操作，参看 [InfoTable](http://apaas.wxchina.com:8881/2021/12/10/infotable信息表格接入二开控件/)

需要说明的是，编辑表格会固定出现两个操作按钮，一个是新增，一个是删除

* 新增

  默认情况下，直接在末尾添加一个空白行；

  【appendrowbyobjs 暂未实现】

  如果配置了 appendrowbyobjs 属性，则会触发对应的事件，此时传递的上下文如下：

  ```json
  {
      "__objpicker": {
          // 此处固定为 1
          "multiselectable": "1",

          // 当 objunique == 0 时填充 ignore，当 objunique == 1 时填充 disable
          "reselect": "ignore/disable",   

          // 当 objunique == 0 时不填充该值，当 objunique == 1 时填充所有行中 objctrl 指定的控件的key值
          "selected": ["key1", "key2"]  
      }
  }
  ```

* 删除

  删除勾选行，删除前需要弹出警告提示用户"是否删除所有勾选的数据？"

### guidecols

先导列，在此处配置用于标识行数据的关键列，用于合并单元格

配置在先导列的列，不能被隐藏，不能调整顺序。

* merged

  合并，用于指定是否合并先导列的单元格，默认为 `0` ，表示不合并

  合并规则与信息表格一致

* cols

  先导列所包含的具体的列code的集合，只能选择tablecell类型的列

## 事件

# 特性说明

## 动态列

动态列的取值与赋值都是一个固定格式的json字符串，其格式如下：

```json
"[\
    {\"title\": \"一级经销商\", \"value\": \"15\"},\
        {\"title\": \"二级经销商\", \"value\": \"40\"},\
]"

{
    "storeid": "546584654365",
    "storename": "7-11天河店",
    "test": "[\
    {\"title\": \"一级经销商\", \"value\": \"key1\"},\
        {\"title\": \"二级经销商\", \"value\": \"key2\"},\
        ]"
}
```

* title

  代表动态列的动态标题，会显示在对应的列头

* value

  代表动态列的具体的值

**赋值处理**

赋值的时候，表格会拿第一条数据（如果没有数据时将不会生成动态列）来生成动态列的表头，并复制出多个控件出来，然后再将value中的值依次赋到控件中。

**取值处理**

取值的时候，表格会将动态生成列的数据取出来，生成一个与赋值格式一致的字符串，用于提交。

### 支持的控件

动态列只支持以下控件

|控件|说明|
|---|---|
|text||
|textinput||
|currency||
|number||
|date(datepicker)|值为时间戳|
|dropdownbox|只支持固定选项|

## 自动序号

表格的左边会显示一列序号列，该序号列为自增的序号，从1开始计算。表格数据发生变化时，自动更新序号。

在表格取值时，通过 `autoindex` 关键字作为name值，来获取该序号值。

## 数据提交规则

支持焦点项，全部项，勾选项

## 表格内嵌控件说明

能放置到编辑表格中的基础控件清单，请参看 [控件基础样式示例](http://apaas.wxchina.com:8881/2020/05/19/basic-控件基础样式/)

另，对于选项类控件（如picktree），在编辑表格中不支持懒加载。应避免在表格内部配置太过复杂的控件数据源。

## 缓存搜索

编辑表格支持通过UIFlyCode进行内存搜索，以便在搜索后保留用户的输入

[详情](http://apaas.wxchina.com:8881/2020/05/19/basic-控件基础样式/)

## 内部控件值改变事件触发

编辑表格内部的控件的值改变只在用户手动修改值时才会触发，其他情况下，如flycode赋值，setter赋值都不会触发

## 行内选项类控件联动

假设A和B两个选项类控件在编辑表格之中，并且B的选项依赖于A的值，那么配置时做到以下3点即可：

1：B的选项加载事件配置到A的值改变事件中

2：B的选项加载事件的入参的控件范围保持默认（即表单，或者叫空）

3：B的选项加载事件的入参中关联字段直接选择A控件

# UIFlycode 支持

> 数据获取方法

|方法|简要说明|实现情况|
|---|---|---|
|getInScope|获取指定范围内的数据|支持|
|getInScopeSerialized|返回 getInScope 的序列化数据|支持|
|getInScopeReverse|获取指定范围外的数据，与getInScope相反|支持|
|getFocusRow|获取数组型控件的焦点行控件|支持|
|getCheckedRows|获取数组型控件中所有被勾选的行控件|支持|
|getAllRows|获取数组型控件中所有被勾选的行控件|支持|
|getColByName|获取指定名字的列控件对象ArrayColCtrl|支持|
|getInIndexes|获取指定多行的数据|支持|
|getIndexesInScope|获取指定范围的行的indexes|支持|
|getRowAtIndexes|获取指定位置的行控件ArrayRowCtrl|支持|
|clearSelect|清空表格勾选|支持|
|getHeaderButtons|获取顶部按钮栏的所有按钮的Ctrl|v9.7.4+支持|
|samecheck|数据相似性校验|未支持|

|属性|简要说明|实现情况|
|---|---|---|
|hidden|控制表格隐藏|支持|
|checkable|控制是否有勾选列|支持|
|checkedNumber|勾选数量，仅支持获取|v9.7.4支持|
|pageIndex|当前分页索引，仅支持获取|v9.7.4支持|
|rowNumber|总行数，仅支持获取|v9.7.4支持|

[数组型控件UIFlycode详细文档](http://apaas.wxchina.com:8881/2020/05/19/511/)

> 数据更新方法

|方法|简要说明|实现情况|
|---|---|---|
|reload|重新设置全部数据|支持|
|update|更新多条数据到指定的index|支持|
|insert|插入多条数据到指定的index|支持|
|append|插入多条数据到头部或者尾部|支持|
|delete|删除指定位置的行|支持|
|deleteInScope|删除指定范围内的数据|支持|
|deleteInScopeReverse|删除指定范围外的数据|支持|

**以上方法中获取数据时， `修改项` 目前均不支持**