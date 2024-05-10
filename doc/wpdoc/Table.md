---
title: Table
date: 2020-05-20T16:06:54
---

# Table 表格

## Protocal 协议

```json
{ // 表格信息区域
    "type": "table",
    "code": "ctrlcode_table_storelist",
    "required": "1",
    "readonly": "0",
    "flex": "1",
    "width": "",
    "title": "",
    "style": "default",
    "hiddenheader": "0",
    "refreshable": "0",
    "pageable": "1",
    "sortable": "1",
    "indexable": "1",
    "freezecol": "1",
    "mergeablecol": "2",
    "personalizable": "0",
    "checkable": "1",
    "isradio": "1",
    "acrosspagecheckable": "1",
    "eventlist": [
        {
            "handler": "handler_loadstorelist",
            "trigger": "onload"
        },
        {
            "handler": "handler_changebuttonstatus",
            "trigger": "onchecked"
        },
        {
            "handler": "handler_loadstorelist",
            "trigger": "onsort"
        },
        {
            "handler": "",
            "trigger": "onrefresh"  // 刷新，停留在当前页
        }
    ],
    "statisticsrow": [
        {
            "title": "总计",
            "rules": [
                {
                    "columnitemcode": "number",
                    "rule": "sum",
                    "color": "",
                    "decimaldigits": "0"
                }
            ]
        }
    ],
    "header": [
        {
            "ctrl": ".....",
            "sortstatus": "none"
        }
    ],
    "rows": {
        "type": "row",
        "width": "450",
        "columnitems": [
            {
                "type": "text",
                "code": "ctrlcode_text_storeid",
                "title": "终端编号",
                "flex": "",
                "width": "100"
            },
            {
                "type": "dynamiccolumn",
                "code": "ctrlcode_dynamiccolumn_price",
                "title": "终端编号",
                "flex": "",
                "width": "100",
                "columntitle"
            }
        ]
    },
    "rowoperations": [
        {
            "text": "编辑",
            "icon": "",
            "handler": "handler_edit",
            "hidden": "",
            "functioncode": ""
        },
        {
            "text": "删除",
            "icon": "",
            "handler": "handler_del",
            "hidden": "le: {status} == '2'",
            "functioncode": ""
        }
    ]
}
```

### readonly

只读，bool值，默认为 `0` 。此时对表格无影响。

当值为 `1` 时，表示表格用于查看，同时会将 `columnitems` 内部的所有控件设置为只读模式。

该属性支持使用flycode，或者事件设置。

### required

必填，bool值，默认为 `1` 。表示表格数据提交时，必须包含至少一条数据。

该属性支持使用flycode，或者事件设置。

### style

【暂未实现】

表格的样式，默认值为 `default`

|值|样例|
|---|---|---|
|default|默认样式|![](http://apaas.wxchina.com:8881/wp-content/uploads/tableStyle_default.png)|
|basic|基础样式|![](http://apaas.wxchina.com:8881/wp-content/uploads/tableStyle_basic.png)|
|simplicity|简洁样式|![](http://apaas.wxchina.com:8881/wp-content/uploads/tableStyle_simplicity.png)|
|compact|紧凑样式|除了标题与结尾行有分割线，其他都没有|

* hiddenheader是否隐藏标题行，默认为 `0` 不隐藏

* refreshable【web端】

  是否支持刷新（web端显示刷新按钮，手机端下拉刷新），如果支持，将会在刷新时触发onrefresh事件（如果onrefresh没有配置对应的事件则会触发onload事件）

* pageable【web端】

  是否支持分页，Bool值，默认为 `0`

* checkable是否支持选择，Bool值，默认为 `0`

  选中时会触发 `onchecked` 事件，并更新 `__checkednumber` 参数值，可在该事件中通过UIFlycode获取该值：

  ```js
  if (Page.getValue("__checkednumber").toInt() > 1) {
     ......
  }
  ```

* sortable【暂不实现】

  是否支持列头排序，bool值，默认为 `0`

  当值为1时，默认表格所有列都可以进行排序，同一时间目前只支持一列进行排序。

  排序的时候，点击一次升序，再次点击降序，然后再次点击取消排序。

* isradio【web端】

  是否支持单选，Bool值，默认为 `0`

  存在checkable: '1'时，交互模式为单选交互

* indexable是否支持自动序号，默认值为false，如果可以，则会在表格的左边（勾选框的右边）增加一列序号列，该序号列为自增的序号，从1开始计算。表格数据发生变化时，自动更新序号。

  在表格取值时，通过 `__autoindex` 关键字作为name值，来获取该序号值。

  在移动端，该列固定宽度为 30dp，在web端，该列固定宽度为 50dp

* sortbtnable*暂未实现*

  带排序按钮（‘置顶’，‘置尾’，‘上移一位’，‘下移一位’）的table列表，可对table数据进行排序

  备注：配置该模式的table不允许配置分页特性，所有内容一页显示（业务规定最大50条左右）
* freezecol冻结列数，正整数，默认为 `0`
* mergeablecol指定可以合并单元格的列数，可合并的列会将相邻行的数据一致的单元格进行合并。  

  > 关于支持合并单元格的表格更多的信息，请参看下方的详细说明。

* personalizable【web端属性】

  个性化，bool值，用于设置是否支持用户自定义显示列。

  默认值为0，表示不支持。

  当值为1时，将会读取表格个性化设置（见下方说明）并应用，如果没有设置默认只显示前10个可见列。此时表格会显示一个调整列的按钮，以供用户调整列的显示与排序，并且当用户调整了列显示之后，将自动调用个性化信息存储接口，存储当前的个性化信息。

* acrosspagecheckable【web端属性】

  跨页勾选，默认值为1，可不开放配置

### header

> 未实现属性，废弃

#### ctrl 控件

用于指定支持排序的所在列的控件。通常配置其code

#### sortstatus 排序状态

|value|
|---|---|
|nil或空|默认值，不能排序|
|none|未参与排序|
|asc|升序|
|desc|降序|

当排序方式改变后，将会自动触发 `onsort` 事件，该事件通常关联对应的数据查询事件 datarequest 或者 cachedatarequest，然后由这些事件负责更新排序，请参看 [sorting](../../../Actions/NomalActions/Sorting.md)。

如果 `onsort` 没有配置对应的事件时，此时将执行前端自动排序，即由前端对表格中现有的数据进行排序。这种前端自动排序有两个限制条件：

1. 不应该出现分页，或者应该是假分页（web端）。
2. 不应该有对表格的筛选，如果有就因该将排序作为筛选的条件配置onsort事件。

前端自动排序的将针对控件的值类型进行处理，如果是数字类型的，如数字输入，金额输入等，将会把值转换为数字后再排序；其他的将直接其值的ASCII码进行排序。

### statisticsrow 统计行

此处为前端统计行，适用于前端有编辑功能时的统计，如果是后端统计行，请参看下方 `统计数据行`

显示在表格下方，支持对指定列数据进行简单统计计算并展示的行。

* title行标题，将显示在第一列，可以为空。默认为空。

  当第一列有统计规则时，标题将被忽略

* rules各个需要统计的列的信息
  * index(废弃)

  列序号，`0` 表示第一列，必填的值。

  * columnitemcode需要统计的列的ctrlcode。

    为兼容旧协议index，如果没有配置该项则读取index，否则优先使用该字段。
  * rule

  目前不支持对统计值的范围进行设置，固定使用指定列的全部数据进行有限的函数运算。支持的函数有：

|函数名|说明|
|---|---|
|sum|求和|
|average|平均值|
|max|最大值|
|min|最小值|
|||

* color字体颜色，默认为黑色，字体默认使用14号粗体，右对齐，除了颜色，其他暂时不支持配置。
* decimaldigits小数位数，正整数，默认值为2，0表示不能输入小数

> 支持统计的列的值必须是可以转化为数字的值，表格将会统一将需要统计的列的值转换为Double浮点数进行计算，计算结果显示在统计行的对应列中。
>
> 协议支持配置多个统计行，不过目前可以只实现一个统计行。
>
> 如果表格内部行可以滑动（即flex>0），则统计行需要自动冻结在表格下方
>
> 统计值暂不支持提交或者flycode获取

### rows

本质上，这是一个模板，用以描述表格的行的相关属性，不支持flexbox布局。

* type行的类型，目前只有一种类型 `row`

* width设置一行的显示宽度。

  默认情况下行的显示宽度与表格的宽度相同，但由于行的内容经常需要超出表格的宽度限制（手机端尤为明显），因此行宽尝尝需要进行单独的设置。

* columnitems每一行组成的控件集合。

  所有的基础控件都应该能放入到行中，并且自动使用 `basic` 模式显示

### rowoperations

【只在web端实现】

行操作，用于配置在表格右边固定显示的一列操作按钮列。

其中 text，icon，functioncode 与 button 控件的相应属性功能一致。

handler，也就是关联事件，用于关联点击后触发的事件

## 表格个性化

> 只在web端实现

`post api/teapi/protocol/uiprotocol/saveuserconfig`

详细接口信息请参看：[用户级表单配置信息的存取](http://172.16.0.141/UserInterfaceDoc/Ui-Protocol/blob/master/docs/Foundation/用户级表单配置信息的存取.md)

```json
{
    "pagecode": "cur_page_code",
    "widgetcode": "some_table_ctrl_code",
    "type": 0,
    "protocol": ""
}

// protocol
{
    "tablecode": "some_table_code",
    "visiblecols": [
        {
            "colcode": "col_code1"
        },
        {
            "colcode": "col_code2"
        },
        {
            "colcode": "col_code3"
        }
    ]
}
```

## 表格行高列宽的配置说明

### 列宽

表格的列宽由 `rows.width` 的值，和 `rows.columns` 里面的子控件的布局设置共同决定。

`rows.width` 确定了所有列加在一起的总宽度的最大限额，如果没有设置，则默认为使用table控件的宽度。如果是手机端还会默认使用table控件的宽度作为最小总宽度的限额。

`rows.columns` 里面的子控件的水平方向上的布局属性，例如：flex，width，paddinghorizontal等等，都会影响列宽。

列宽的建议配置方式是

* 除非是明确知道宽度的控件，否则最好使用flex属性分配列宽
* 列数较少时，不必设置 `rows.width` ，避免表格滚动。
* 列数较多时，设置 `rows.width` 为一个合理的显示宽度。

## 合并单元格的相关说明

### 数据格式

支持单元格合并的表格数据和普通的没有差别。

### 场景限制

表格控件对单元格的合并，目前只是支持有限的场景，并不能支持任意单元格的合并，具体限制如下：

1. 不支持表头的合并
2. 不支持横向（跨列）的合并
3. 不支持不连续的合并列（只能指定左边的连续n列）
4. 不支持右边列的数据合并跨越左边列的合并范围。
5. 不支持将可录入的控件配置到支持合并的列。
6. 只支持该列的取值为String类型的列进行合并
7. 不支持自动序号

因此，如果需要更复杂的合并规则，可以考虑使用报表，或者其他手段实现。

### 单列单元格合并规则

数据合并的大致流程如下

1. 当前列支持合并。
2. 根据前一列的合并情况对当前列数据进行分组。
3. 如果是第一列则当前列所有数据分为一组。
4. 同一组内的相邻的数据如果相同则进行合并，两个空值处理为相等。
5. 继续合并下一列。

### 对checkable的影响

当有勾选框并且有合并列时，勾选框将会跟随第一列的合并情况进行合并，示例如下：

![](http://apaas.wxchina.com:8881/wp-content/uploads/tableSample6.png)

此时勾选某一个勾选框，就相当于同时勾选了一组数据，数据提交时也是按多条数据进行提交。

对勾选框赋值的情况也是类似，只要合并单元格里面任意一条数据被赋值为勾选，那么其余的行也同时被勾选。

### 数据传参

由于数据格式与普通的表格没有区别，且可录入的控件只能放置在不能合并的列中，因此数据提交的规则无需做特殊的处理。

唯一需要注意的是，如果将按钮配置到合并的单元格中，此时点击按钮所需要传递的数据为该合并单元格中实际包含的第一行的数据。

## 动态字段处理

> 只在web端实现

### 动态字段设置

动态字段的设置是通过 `datarequest` 中 `setter` 的 `dynamicproperties` 属性来设置的。

具体的步骤描述如下：

1. 当数据不为空时进入下一步处理。
2. 查看setter中是否有 `dynamicproperties` 属性，如果有就进入下一步进行动态列处理。
3. 取出数据中的第一条数据，作为动态列模板数据。
4. 依次遍历 `dynamicproperties` 中的设置，查看该属性是否绑定了控件，如果绑定了控件就进入下一步。
5. 找出该属性在数据中的值，然后转换为json格式的数组对象。
6. 根据数组元素个数复制绑定的控件，如果元素个数为0，则在显示中移除该控件。
7. 更新表格列
8. 开始生成表格数据

## 统计数据行

> 只在web端实现

由后端计算统计数据，统计行的数据与表格数据同时通过接口返回，格式如下：

```json
{
    "tabledata": [
        {
        "id": "",
        "name": "",
        "number": "",
      //......
    }
    ],
    "__statisticsrow": {
        "number": "",
        //......
    }
}
```

`__statisticsrow` 是内置的参数，和表格数据同时返回，其包含的是统计数据，需要固定显示在表格的下方。

统计行只只能有一行数据，且其中的数据需要和表格数据中的字段对应，表格控件根据setter中的字段与控件的绑定关系，来决定统计数据显示在哪一列。

统计数据直接以文本显示，不受所在列的控件类型的影响。