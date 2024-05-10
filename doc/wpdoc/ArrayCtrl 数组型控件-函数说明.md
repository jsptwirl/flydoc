---
title: ArrayCtrl 数组型控件-函数说明
date: 2020-05-09T17:44:34
---

函数分为两套：  
一套是支持多分组多行的 [**普通版**](#normalVersion) 函数方法（已实现）；  
一套是针对数据型控件只有一个分组的情况，能够便捷操作的 [**便捷版**](#simpleVersion) 函数方法（暂未实现）

---

# 普通版函数方法

## 函数概览

适用于数组型控件

#### 获取数据

* [getSectionHeader(section)](#getSectionHeader) 获取指定分组索引的分组头控件

* [getRowNumberInSection(section)](#getRowNumberInSection) 获取数组型控件某一分组下的行数

* [getRowAtIndexPath(indexPath)](#getRowAtIndexPath) 获取数组型控件中某一行的行控件

* [getAllRows()](#getAllRows) 获取数组型控件中所有所有的行控件

* [getCheckedRows()](#getCheckedRows) 获取数组型控件中所有被勾选的行控件

* [getCheckedRowsIndexPath()](#getCheckedRowsIndexPath) 获取列表型控件所有选中行的indexPath

* [getFocusRowIndexPath()](#getFocusRowIndexPath) 获取数组型控件的焦点所在的行索引

* [getFocusRow()](#getFocusRow) 获取数组型控件的焦点行控件

* [getData(arrayCtrlGetter)](#getData) 获取数组型控件中所有分组的所有数据

#### 重新加载数据

* [reloadRows(rowData, indexPaths, setter)](#reloadRows) 刷新多个行的数据

* [reloadSections(sectionData, sectionIndexes, setter)](#reloadSections) 刷新多个分组的数据

#### 插入数据

* [insertRows(rowData, indexPath, setter)](#insertRows) 在指定位置连续插入若干行数据

* [insertSections(sectionData, sectionIndex, setter)](#insertSections) 在指定位置连续插入若干分组数据

### 删除数据

* [deleteRows(indexPaths)](#deleteRows) 删除数组型控件中指定行的数据

* [deleteSections(sectionIndexes)](#deleteSections) 删除数组型控件中指定的分组

* [moveRow(fromInedxPath, toIndexPath)](#moveRow) 把指定行索引的两行进行交换

#### 更新数据

* [setData(data, setter)](#setData) 重新加载所有数据，同updateList

* [updateList(data, setter)](#updateList) 重新加载所有分组数据

* [updateListWithOperations(operations)](#updateListWithOperations) 批量修改数组型控件中的分组或行

#### 其他

* [setLoadStatus(statusType)](#setLoadStatus) 设置控件的加载状态

## 函数详情

### getSectionHeader(section)

获取指定分组索引的分组头控件

|参数|类型|可空|说明|
|---|---|---|---|
|section|Int|否|分组索引|

|返回类型|可空|说明|
|---|---|---|
|ArraySectionHeaderCtrl|可|返回指定分组的分组控件，若分组不存在，返回null，注意，若分组型控件不支持分组，该属性永远返回null|\`|

```js
var listCtrl = Page.getArrayCtrl('列表')
if(listCtrl != null ) {

    var sectionCtrl = listCtrl.getSectionHeader(1) 
    if (sectionCtrl != null) {

        //给头控件设置值
        sectionCtrl.setValue('id', '123456')
    }
}
```

|控件|iOS|Android|Web|
|---|---|---|---|
|分组列表 sectionlist|<font>未检测</font>|<font>未实现</font>|<font>未检测</font>|
|||||

### getRowNumberInSection(section)

获取数组型控件某一分组下的行数，如果控件不支持分组，则固定传 `0` 即可

|参数|类型|可空|说明|
|---|---|---|---|
|section|Int|否|分组索引|

|返回类型|可空|说明|
|---|---|---|
|Int|否|返回指定分组下的行数，注意，若分组不存在，返回null|

```js
var rowNumber = Page.getArrayCtrl('列表').getRowNumberInSection(1) 
if (rowNumber != null) {
    //循环
    for(var i = 0; i < rowNumber ;i++) {

    }
}
```

|支持的控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>已实现</font>|<font>已实现</font>|<font>未检测</font>|
|表格 table|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|折叠列表 accordion|<font>未实现</font>|<font>未实现</font>||
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未实现</font>|
|分组列表 sectionlist|<font>已实现</font>|<font>已实现</font>|<font>未检测</font>|

### getRowAtIndexPath(indexPath)

获取数组型控件中某一行的行控件，注意，若要对某一行中的控件进行操作，需先调用此方法获取行控件

|参数|类型|可空|说明|
|---|---|---|---|
|indexPath|IndexPath|否|数组型控件行索引对象，类型参看IndexPath说明|

|返回类型|可空|说明|
|---|---|---|
|ArrayRowCtrl|可|返回数组型控件指定的行控件，若indexPath指定的行索引超出控件范围时，返回空。类型参看ArrayRowCtrl|

```js
var indexPath = IndexPath(0,1)
var rowCtrl = Page.getArrayCtrl('列表').getRowAtIndexPath(indexPath) 
if (rowCtrl != null) {
    //给行控件设置值
    rowCtrl.setValue('id', '123456')
}
```

|支持的控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>已实现</font>|<font>未实现</font>|<font>未检测</font>|
|表格 table|<font>已实现</font>|<font>未实现</font>|<font>未检测</font>|
|折叠列表 accordion|<font>已实现</font>|<font>未实现</font>||
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未实现</font>|
|分组列表 sectionlist|<font>已实现</font>|<font>未实现</font>|<font>未检测</font>|

### getAllRows()

获取数组型控件中所有所有的行控件

|参数|类型|可空|说明|
|---|---|---|---|
|无||||

|返回类型|可空|说明|
|---|---|---|
|Array|可|数组型控件中的所有行|

```js
var allRows = Page.getArrayCtrl('列表').getAllRows()
if (allRows != null) {
    for(var i = 0; i < allRows.length; i++) {
        //...
    }
}
```

|支持的控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>已实现</font>|<font>已实现</font>|<font>未检测</font>|
|表格 table|<font>已实现</font>|<font>已实现</font>|<font>未检测</font>|
|折叠列表 accordion|<font>已实现</font>|<font>已实现</font>||
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未实现</font>|
|分组列表 sectionlist|<font>已实现</font>|<font>已实现</font>|<font>未检测</font>|

### getCheckedRows()

获取数组型控件中所有被勾选的行控件

|参数|类型|可空|说明|
|---|---|---|---|
|无||||

|返回类型|可空|说明|
|---|---|---|
|Array|可|返回数组型控件中勾选的行控件，若没有勾选，返回空。Array形如\[ArrayRowCtrl\]，行控件参看ArrayRowCtrl|

```js
var checkRows = Page.getArrayCtrl('列表').getCheckedRows()
if (checkRows != null) {
    for(var i = 0; i < checkRow.length; i++) {

        var checkRow = checkRows[i]
        //check属性一定为true
        var isChecked = checkRow.check
    }
}
```

|支持的控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>已实现</font>|<font>已实现</font>|<font>未检测</font>|
|表格 table|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|折叠列表 accordion|<font>未实现</font>|<font>未实现</font>||
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未实现</font>|
|分组列表 sectionlist|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|

### getCheckedRowsIndexPath()

获取列表型控件所有选中行的indexPath。

|参数|类型|可空|说明|
|---|---|---|---|
|无||||

|返回类型|可空|说明|
|---|---|---|
|Array|可|返回数组型控件中勾选的行控件，若没有勾选，返回空。Array形如\[IndexPath\]|

```js
var checkedIndexPaths = Page.getArrayCtrl('列表').getCheckedRowsIndexPath()
if (checkedIndexPaths != null) {
    Page.getArrayCtrl('列表').deleteRows(checkedIndexPaths)
}
```

|支持的控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>未实现</font>|<font>未实现</font>|<font>未实现</font>|
|表格 table|<font>未实现</font>|<font>未实现</font>|<font>未实现</font>|
|折叠列表 accordion|<font>未实现</font>|<font>未实现</font>|<font>未实现</font>|
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未实现</font>|
|分组列表 sectionlist|<font>未实现</font>|<font>未实现</font>|<font>未实现</font>|

### getFocusRowIndexPath()

获取数组型控件的焦点所在的行索引，注意，当行处于选中状态，或行中子控件处于焦点状态，该方法都不应返回null

|参数|类型|可空|说明|
|---|---|---|---|
|无||||

|返回类型|可空|说明|
|---|---|---|
|IndexPath|可|返回数组型控件的行索引，当焦点不存在时，返回null|

```js
var focusIndexPath = Page.getArrayCtrl('列表').getFocusRowIndexPath()
if (focusIndexPath != null) {

    //取得焦点所在行索引
}
```

|支持的控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>已实现</font>|<font>已实现</font>|<font>未检测</font>|
|表格 table|<font>已实现</font>|<font>已实现</font>|<font>未检测</font>|
|折叠列表 accordion|<font>已实现</font>|<font>未实现</font>||
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未实现</font>|
|分组列表 sectionlist|<font>已实现</font>|<font>已实现</font>|<font>未检测</font>|
|地图控件|<font>已实现</font>|<font>已实现</font>|无|

### **getFocusRow()**

获取数组型控件的焦点行控件，注意，当行处于选中状态，或行中子控件处于焦点状态，该方法都不应返回null

|参数|类型|可空|说明|
|---|---|---|---|
|无||||

|返回类型|可空|说明|
|---|---|---|
|ArrayRowCtrl|可|返回数组型控件的行控件，当焦点不存在时，返回null|

```js
var focusRow = Page.getArrayCtrl('列表').getFocusRow()
if (focusRow != null) {

    //取得焦点所在行
}
```

|支持的控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>已实现</font>|<font>已实现</font>|<font>未检测</font>|
|表格 table|<font>已实现</font>|<font>已实现</font>|<font>未检测</font>|
|折叠列表 accordion|<font>已实现</font>|<font>已实现</font>||
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未实现</font>|
|分组列表 sectionlist|<font>已实现</font>|<font>已实现</font>|<font>未检测</font>|
|地图控件|<font>已实现</font>|<font>已实现</font>|无|

### getData(arrayCtrlGetter)

获取数组型控件中所有分组的所有数据

|参数|类型|可空|说明|
|---|---|---|---|
|arrayCtrlGetter|ArrayCtrlGetter|可|默认情况下为null，也可以指定在取值过程中，匹配的子控件取某属性值，该子控件不区分是在行控件还是分组头控件中，Dictionary形如{name:CtrlValueGetter}|

|返回类型|可空|说明|
|---|---|---|
|Array|可|返回数组形控件中的所有数据，Array形如\[Dictionary\]，详见数组型控件数据格式|

```js
//获取列表中每一行数据，其中定位控件只返回地址部分的数据
var getter = {
    'location':CtrlValueGetter('address')
}
var data = Page.getArrayCtrl('列表').getData(getter)
if (data != null) {
/*
[
    {'id':'1','name':'张一','location':'中国广州'},
    {'id':'2','name':'张二','location':'中国北京'},
    {'id':'3','name':'张三','location':'中国广西'},
]
*/
}
```

|支持的控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>已实现</font>|<font>已实现</font>|<font>未检测</font>|
|表格 table|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|折叠列表 accordion|<font>未实现</font>|<font>未实现</font>||
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未实现</font>|
|分组列表 sectionlist|<font>已实现</font>|<font>已实现</font>|<font>未检测</font>|

### reloadRows(rowData, indexPaths, setter)

刷新多个行的数据，该方法不会改变每个分组中行的数量

|参数|类型|可空|说明|
|---|---|---|---|
|rowData|Array|否|将要刷新的数据，数据需为全量数据，Array形如\[Dictionary\]|
|indexPaths|Array|否|将要刷新的行索引，Array形如\[IndexPath\]|
|setter|ArrayCtrlSetter|否|赋值规则，类型见ArrayCtrlSetter说明|

|返回类型|可空|说明|
|---|---|---|
|Bool|否|刷新成功，返回true，否则false|

```js
//把第一行的信息刷新
var data = {'id':'1','name':'张一','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国天津\'}'}
var setter = ArrayCtrlSetter()
setter.append('id','编码')
setter.append('name','名字')
setter.append('location','地址')
var result = Page.getArrayCtrl('列表').reloadRows([data], [IndexPath(0,0)], setter)
if(result == true) {
    //刷新成功
}
```

|支持的控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|表格 table|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|折叠列表 accordion|<font>未实现</font>|<font>未实现</font>||
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未实现</font>|
|分组列表 sectionlist|<font>已实现</font>|<font>已实现</font>|<font>未检测</font>|

### reloadSections(sectionData, sectionIndexes, setter)

刷新多个分组的数据，该方法不会改变每个分组的数量，但会改变分组中行的数量

|参数|类型|可空|说明|
|---|---|---|---|
|sectionData|Array|否|将要刷新的数据，数据需为全量数据，Array形如\[Dictionary\]，详见数组型控件数据格式|
|sectionIndexes|Array|否|将要刷新的分组索引，Array形如\[Int\]|
|setter|ArrayCtrlSetter|否|赋值规则，类型见ArrayCtrlSetter说明|

|返回类型|可空|说明|
|---|---|---|
|Bool|否|刷新成功，返回true，否则false|

```js
//把第一分组的信息都刷新，并增加id为4的信息展示
var data = [
            {'section':{'title':'人员信息'},
             'row':[
                 {'id':'1','name':'张一','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国天津\'}'},
                 {'id':'2','name':'张二','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国天津\'}'},
                 {'id':'3','name':'张三','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国天津\'}'},
                 {'id':'4','name':'张四','location':'{\'lat\': 22.3432344, \'lng\': 133.413421, \'address\': \'中国长春\'}'}
             ]}
            }
var setter = ArrayCtrlSetter()
setter.append('title','头标题')
setter.append('id','编码')
setter.append('name','名字')
setter.append('location','地址')
var result = Page.getArrayCtrl('列表').reloadSections([data], [0], setter)
if(result == true) {
    //刷新成功
}
```

|支持的控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|表格 table|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|折叠列表 accordion|<font>未实现</font>|<font>未实现</font>||
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未实现</font>|
|分组列表 sectionlist|<font>已实现</font>|<font>未实现</font>|<font>未检测</font>|

### insertRows(rowData, indexPath, setter)

在指定位置连续插入若干行数据，注意，若indexPath中指定的section不存在时插入失败

|参数|类型|可空|说明|
|---|---|---|---|
|rowData|Array|否|将要插入的行数据，Array形如\[Dictionary\]|
|indexPath|IndexPath|否|插入索引的位置，类型参看IndexPath说明|
|setter|ArrayCtrlSetter|否|赋值规则，具体见ArrayCtrlSetter说明|

|返回类型|可空|说明|
|---|---|---|
|Bool|否|成功，返回true，否则false|

```js
//插入一行数据
var data = {'id':'4','name':'张四','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国湖南\'}'}
var setter = ArrayCtrlSetter()
setter.append('id','编码')
setter.append('name','名字')
setter.append('location','地址')
var result = Page.getArrayCtrl('列表').insertRows([data], IndexPath(0,3), setter)
if(result == true) {
    //插入成功
}
```

|支持的控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|表格 table|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|折叠列表 accordion|<font>未实现</font>|<font>未实现</font>||
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未实现</font>|
|分组列表 sectionlist|<font>已实现</font>|<font>已实现</font>|<font>未检测</font>|

### insertSections(sectionData, sectionIndex, setter)

在指定位置连续插入若干分组数据，注意，若控件不支持分组能力，不应使用该方法

|参数|类型|可空|说明|
|---|---|---|---|
|sectionData|Array|否|每个分组中的数据，Array形如\[Dictionary\]，详见数组型控件数据格式|
|sectionIndex|Int|否|插入的分组位置开始位置，插入的长度由sectionData.length决定|
|setter|ArrayCtrlSetter|否|赋值规则，类型见ArrayCtrlSetter说明|

|返回类型|可空|说明|
|---|---|---|
|Bool|否|成功，返回true，否则false|

```js
//插入第二、三分组的信息
var data = [
            {'section':{'title':'人员信息'},
             'row':[
                 {'id':'1','name':'赵一','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国天津\'}'},
                 {'id':'2','name':'赵二','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国天津\'}'}
             ]},
             {'section':{'title':'人员信息'},
             'row':[
                 {'id':'1','name':'李一','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国天津\'}'}
             ]}
            }
var setter = ArrayCtrlSetter()
setter.append('title','头标题')
setter.append('id','编码')
setter.append('name','名字')
setter.append('location','地址')
var result = Page.getArrayCtrl('列表').insertSections([data], [1], setter)
if(result == true) {
    //插入成功
}
```

|支持的控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|表格 table|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|折叠列表 accordion|<font>未实现</font>|<font>未实现</font>||
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未实现</font>|
|分组列表 sectionlist|<font>已实现</font>|<font>已实现</font>|<font>未检测</font>|

### deleteRows(indexPaths)

删除数组型控件中指定行的数据，注意，若indexPath中指定的section不存在时删除失败

|参数|类型|可空|说明|
|---|---|---|---|
|indexPaths|\[IndexPath\]|否|行索引，将要删除的行|

|返回类型|可空|说明|
|---|---|---|
|Bool|否|成功，返回true，否则false|

```js
//删除第一、二分组的第一条数据
var indexPaths = [IndexPath(0,0), IndexPath(1,0)]
var result = Page.getArrayCtrl('列表').deleteRows(indexPaths)
if(result == true) {
    //删除成功
}
```

|支持的控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|表格 table|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|折叠列表 accordion|<font>未实现</font>|<font>未实现</font>||
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未实现</font>|
|分组列表 sectionlist|<font>已实现</font>|<font>已实现</font>|<font>未检测</font>|

### deleteSections(sectionIndexes)

删除数组型控件中指定的分组，注意，分组一旦删除，分组下的行都被删除，若控件不支持分组能力，不应使用该方法

|参数|类型|可空|说明|
|---|---|---|---|
|sectionIndexes|Array|否|需要删除的分组索引，Array形如\[Int\]|

|返回类型|可空|说明|
|---|---|---|
|Bool|否|成功，返回true，否则false|

```js
//删除第一、二分组
var sectionIndexes = [0, 1]
var result = Page.getArrayCtrl('列表').deleteSections(sectionIndexes)
if(result == true) {
    //删除成功
}
```

|支持的控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|表格 table|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|折叠列表 accordion|<font>未实现</font>|<font>未实现</font>||
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未实现</font>|
|分组列表 sectionlist|<font>已实现</font>|<font>已实现</font>|<font>未检测</font>|

### moveRow(fromInedxPath, toIndexPath)

把指定行索引的两行进行交换

|参数|类型|可空|说明|
|---|---|---|---|
|fromInedxPath|IndexPath|否|将要交换的行索引，类型参看IndexPath说明|
|toIndexPath|IndexPath|否|目标行索引，类型参看IndexPath说明|

|返回类型|可空|说明|
|---|---|---|
|Bool|否|orgIndexPath与desIndexPath都在控件索引范围内时，行交换成功，返回true，否则false|

```js
//交换第一、三行数据
var result = Page.getArrayCtrl('列表').moveRow(IndexPath(0, ), IndexPath(0, 2))
if(result == true) {
    //交换成功
}
```

|支持的控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|表格 table|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|折叠列表 accordion|<font>未实现</font>|<font>未实现</font>||
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未实现</font>|
|分组列表 sectionlist|<font>已实现</font>|<font>已实现</font>|<font>未检测</font>|

### setData(data, setter)

与 updateList 方法一样，用于重新加载所有数据

### updateList(data, setter)

重新加载所有分组数据

|参数|类型|可空|说明|
|---|---|---|---|
|data|Array|否|将要更新的数据，Array形如\[Dictionary\]，详见数组型控件数据格式|
|setter|ArrayCtrlSetter|否|赋值规则，具体见ArrayCtrlSetter说明|

|返回类型|可空|说明|
|---|---|---|
|Bool|否|成功，返回true，否则false|

```js
//重新加载所有数据
var data = {'id':'1','name':'张一','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国天津\'}'}
var setter = ArrayCtrlSetter()
setter.append('id')
setter.append('text','name')
setter.append('location','地址')
var result = Page.getArrayCtrl('列表').updateList([data], setter)
if(result == true) {
    //重新加载成功
}
```

|支持的控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>已实现</font>|<font>已实现</font>|<font>未检测</font>|
|表格 table|<font>已实现</font>|<font>已实现</font>|<font>未检测</font>|
|折叠列表 accordion|<font>已实现</font>|<font>已实现</font>||
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未实现</font>|
|分组列表 sectionlist|<font>已实现</font>|<font>已实现</font>|<font>未检测</font>|

### updateListWithOperations(operations)

批量修改数组型控件中的分组或行

|参数|类型|可空|说明|
|---|---|---|---|
|operations|Array|否|修改规则，注意，修改规则中的每一个分组或行索引，均是基于上一个operation操作后的结果，Array形如\[ArrayCtrlModifyOperation\]，参见ArrayCtrlModifyOperation|

|返回类型|可空|说明|
|---|---|---|
|Bool|否|成功，返回true，否则false|

```js
//原数据
/*
{'id':'1','name':'张一','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国天津\'}'},
{'id':'2','name':'张二','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国天津\'}'},
{'id':'3','name':'张三','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国天津\'}'},
*/
//批量修改后
/*
{'id':'1','name':'张一','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国天津\'}'},
{'id':'2-2','name':'张四','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国湖南\'}'},
{'id':'3','name':'张三','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国天津\'}'},
*/

var data = {'id':'2-2','name':'张四','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国湖南\'}'}
var setter = ArrayCtrlSetter()
setter.append('id','编码')
setter.append('name','名字')
setter.append('location','地址')
var insertRows = ArrayCtrlInsertRows(data, [IndexPath(0,1)])

var deleteRows = ArrayCtrlDeleteRows([IndexPath(0,2)])

var result = Page.getArrayCtrl('列表').updateListWithOperations([insertRows, deleteRows])
if(result == true) {
    //批量修改成功
}
```

|支持的控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>未实现</font>|<font>已实现</font>|<font>未检测</font>|
|表格 table|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|折叠列表 accordion|<font>未实现</font>|<font>未实现</font>||
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未实现</font>|
|分组列表 sectionlist|<font>已实现</font>|<font>未实现</font>|<font>未检测</font>|

### setLoadStatus(statusType)

设置控件的加载状态，注意，目前只能用于设置显示3种状态：加载成功但没有数据返回；网络异常(离线、超时等网络问题)；未定义错误(业务逻辑错误)

```js
//成功回调
var success = function (object) {
    var stores = object['kx_kq_store'];

    if(stores.count == 0) {
      //请求成功但没有数据
      Page.getCtrl('列表').setLoadStatus(ErrorCode.emptyData);
    }
};

//失败回调
var fail = function(errorCode, msg) {

  //中断请求，不要处理
  if(errorCode == ErrorCode.cancelRequest) {
    return;
  }
  //网络错误
  if(isNetError(errorCode) == true) {
    Page.getCtrl('列表').setLoadStatus(errorCode);
  }
  //未定义错误或业务逻辑错误
  else if(errorCode == ErrorCode.unDefineError || errorCode == 600 ) {
    Page.getCtrl('列表').setLoadStatus(errorCode);
  }
};

//发起请求
Model.runLogicScript('终端列表查询', null, success, fail);
```

|支持的控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|表格 table|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|折叠列表 accordion|<font>未实现</font>|<font>未实现</font>||
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未实现</font>|
|分组列表 sectionlist|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|

---

# 便捷版函数方法

## 函数概览

只适用于数组型控件只有一个分组的情况下

### 获取数据

* [getInIndexes(indexes, getter, isExhaustive)](#getInIndexes) 获取指定多行的数据

* [getInScope(scope，getter，isExhaustive)](#getInScope) 获取指定范围内的数据

* [getInScopeReverse(scope，getter，isExhaustive)](#getInScopeReverse) 获取指定范围外的数据

* [getRowAtIndexes(indexes)](#getRowAtIndexes) 获取指定位置的行控件ArrayRowCtrl

* [getColByName(name)](#getColByName) 获取指定名字的列对象ArrayColCtrl

* [getIndexesInScope(scope)](#getIndexesInScope) 获取指定范围的行的indexes

### 重新加载数据

* [reload(rowsData, setter)](#reload) 重新设置全部数据

### 插入数据

* [insert(rowsData, index, setter)](#insert) 插入多条数据到指定的index

* [append(rowsData, pos, setter)](#append) 插入多条数据到头部或者尾部

### 更新数据

* [update(rowsData, indexes, setter)](#update) 更新多条数据到指定的index

### 删除数据

* [delete(indexes)](#delete) 删除指定位置的行

* [deleteInScope(scope)](#deleteInScope) 删除指定范围内的数据

* [deleteInScopeReverse(scope)](#deleteInScopeReverse) 删除指定范围外的数据

## 函数详情

### **getInIndexes(indexes, getter, isExhaustive)**

获取指定多行的数据，indexes是一个int数组，表示要获取的行。

|参数|类型|可空|说明|
|---|---|---|---|
|indexes|Array|否|要获取数据的行index，为正整数数组，如\[0,2,3\]|
|getter|ArrayCtrlGetter|可|默认情况下为null，也可以指定在取值过程中，匹配的子控件取某属性值，Dictionary形如{name:CtrlValueGetter}|
|isExhaustive|Bool|可|当为true时，表示只取指定的数据；为false时表示，除了指定的数据，其他数据也要根据默认规则进行获取。默认值为false|

|返回类型|可空|说明|
|---|---|---|
|Array|可|返回数组形控件中的所有数据，Array形如\[Dictionary\]，详见数组型控件数据格式|

```js
var listCtrl = Page.getArrayCtrl('列表');
var indexes = [0, 2, 3];
//其中定位控件只返回地址部分的数据
var getter = {
    'location':CtrlValueGetter('address')
}
var data = Page.getArrayCtrl('列表').getInIndexes(indexes, getter, true);
if (data != null) {
/*
[
    {'id':'1','name':'张一','location':'中国广州'},
    {'id':'2','name':'张二','location':'中国北京'},
    {'id':'3','name':'张三','location':'中国广西'},
]
*/
}
```

|控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|表格 table|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|折叠列表 accordion|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|分组列表 sectionlist|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|

### **getInScope(scope，getter，isExhaustive)**

获取指定范围内的数据，getter 可以为空，此时 isExhaustive 也无效，必须为空。

|参数|类型|可空|说明|
|---|---|---|---|
|scope|String|否|scope的取值有以下几种取值: **'all'** 全部数据; **'checked'** 勾选数据; **'modified'** 已修改数据; **'focused'** 已修改数据;|
|getter|ArrayCtrlGetter|可|默认情况下为null，也可以指定在取值过程中，匹配的子控件取某属性值，Dictionary形如{name:CtrlValueGetter}|
|isExhaustive|Bool|可|当为true时，表示只取指定的数据；为false时表示，除了指定的数据，其他数据也要根据默认规则进行获取。默认值为false|

|返回类型|可空|说明|
|---|---|---|
|Array|可|返回数组形控件中的所有数据，Array形如\[Dictionary\]，详见数组型控件数据格式|

```js
var listCtrl = Page.getArrayCtrl('列表');
//其中定位控件只返回地址部分的数据
var getter = {
    'location':CtrlValueGetter('address')
}
var data = Page.getArrayCtrl('列表').getInScope("checked", getter, false);
if (data != null) {
/*
[
    {'id':'1','name':'张一','location':'中国广州'},
    {'id':'2','name':'张二','location':'中国北京'},
    {'id':'3','name':'张三','location':'中国广西'},
]
*/
}
```

|控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|表格 table|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|折叠列表 accordion|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|分组列表 sectionlist|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|

### getInScopeReverse(scope，getter，isExhaustive)

获取指定范围外的数据，与getInScope相反。getter 可以为空，此时 isExhaustive 也无效，必须为空。

|参数|类型|可空|说明|
|---|---|---|---|
|scope|String|否|scope的取值有以下几种取值: **'all'** 全部数据; **'checked'** 勾选数据; **'modified'** 已修改数据; **'focused'** 已修改数据;|
|getter|ArrayCtrlGetter|可|默认情况下为null，也可以指定在取值过程中，匹配的子控件取某属性值，Dictionary形如{name:CtrlValueGetter}|
|isExhaustive|Bool|可|当为true时，表示只取指定的数据；为false时表示，除了指定的数据，其他数据也要根据默认规则进行获取。默认值为false|

|返回类型|可空|说明|
|---|---|---|
|Array|可|返回数组形控件中的所有数据，Array形如\[Dictionary\]，详见数组型控件数据格式|

```js
var listCtrl = Page.getArrayCtrl('列表');
//其中定位控件只返回地址部分的数据
var getter = {
    'location':CtrlValueGetter('address')
}
var data = Page.getArrayCtrl('列表').getInScopeReverse("checked", getter, false);
if (data != null) {
/*
[
    {'id':'1','name':'张一','location':'中国广州'},
    {'id':'2','name':'张二','location':'中国北京'},
    {'id':'3','name':'张三','location':'中国广西'},
]
*/
}
```

|控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|表格 table|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|折叠列表 accordion|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|分组列表 sectionlist|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|

### **getRowAtIndexes(indexes)**

获取指定位置的行控件ArrayRowCtrl。indexes支持int数组或者int值，当是数组时，返回数组；当是int时，返回单对象。

|参数|类型|可空|说明|
|---|---|---|---|
|indexes|Array或Int|否|要获取数据的行index，为正整数或正整数数组，如 1 或 \[0, 2, 3\]|

|返回类型|可空|说明|
|---|---|---|
|Array或ArrayRowCtrl|可|返回数组形控件中的行控件，返回Array时形如\[ArrayRowCtrl\]，返回单对象时为ArrayRowCtrl|

```js
var rows = Page.getArrayCtrl('列表').getRowAtIndexes([0,2,3]);
if (rows != null) {
    for(var i = 0; i < rows.length; i++) {
        var row = rows[i];
        //做一些操作，如设置row的状态，或取row中控件的值
        var phonenumber = row.getCtrl('phonenumber');
    }
}
```

|控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|表格 table|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|折叠列表 accordion|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|分组列表 sectionlist|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|

### getColByName(name)

获取指定名字的列对象ArrayColCtrl。目前暂未实现ArrayColCtrl

|参数|类型|可空|说明|
|---|---|---|---|
|name|String|否|要获取的列控件的名称|

|返回类型|可空|说明|
|---|---|---|
|ArrayColCtrl|可|返回单对象ArrayColCtrl|

```js
var textInput = Page.getArrayCtrl('表格'). getColByName('textinput');
if (colCtrl != null) {
    textInput.isReadonly = true;
}
```

### getIndexesInScope(scope)

获取指定范围的行的indexes

|参数|类型|可空|说明|
|---|---|---|---|
|scope|String|否|scope的取值有以下几种取值: **'all'** 全部数据; **'checked'** 勾选数据; **'modified'** 已修改数据; **'focused'** 已修改数据;|

|返回类型|可空|说明|
|---|---|---|
|Array|可|获取指定范围的行的indexes，为正整数数组，形如 \[0, 2, 3\]|

```js
var indexes = Page.getArrayCtrl('列表').getIndexesInScope('focused');
if (indexes != null) {
    for(var i = 0; i < indexes.length; i++) {

    }
}
```

|控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|表格 table|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|折叠列表 accordion|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|分组列表 sectionlist|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|

### reload(rowsData, setter)

重新设置全部数据, setter的类型为ArrayCtrlSetter，可以为空

|参数|类型|可空|说明|
|---|---|---|---|
|rowsData|Array|否|将要刷新的数据，数据需为全量数据，Array形如\[Dictionary\]|
|setter|ArrayCtrlSetter|否|赋值规则，类型见ArrayCtrlSetter说明|

|返回类型|可空|说明|
|---|---|---|
|Bool|否|刷新成功，返回true，否则false|

```js
//刷新列表数据
var data = {'id':'1','name':'张一','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国天津\'}'}

var setter = ArrayCtrlSetter()
setter.append('id','编码')
setter.append('name','名字')
setter.append('location','地址')

var result = Page.getArrayCtrl('列表'). reload([data], setter)
if(result == true) {
    //刷新成功
}
```

|控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|表格 table|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|折叠列表 accordion|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|分组列表 sectionlist|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|

### insert(rowsData, index, setter)

插入多条数据到指定的index, index为正整数, setter可以为空

|参数|类型|可空|说明|
|---|---|---|---|
|rowsData|Array|否|将要插入的数据，Array形如\[Dictionary\]|
|index|Int|否|要插入数据的行index，为正整数，如 1|
|setter|ArrayCtrlSetter|否|赋值规则，类型见ArrayCtrlSetter说明|

|返回类型|可空|说明|
|---|---|---|
|Bool|否|插入成功，返回true，否则false|

```js
//在第二行的后面插入数据
var data = {'id':'1','name':'张一','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国天津\'}'}

var setter = ArrayCtrlSetter()
setter.append('id','编码')
setter.append('name','名字')
setter.append('location','地址')

var result = Page.getArrayCtrl('列表'). insert([data], 1, setter)
if(result == true) {
    //插入成功
}
```

|控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|表格 table|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|折叠列表 accordion|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|分组列表 sectionlist|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|

### append(rowsData, pos, setter)

插入多条数据到头部或者尾部

|参数|类型|可空|说明|
|---|---|---|---|
|rowsData|Array|否|将要插入的数据，Array形如\[Dictionary\]|
|pos|String|否|要插入数据的位置，有以下几种取值: **'head'** 头部; **'tail'** 尾部;|
|setter|ArrayCtrlSetter|否|赋值规则，类型见ArrayCtrlSetter说明|

|返回类型|可空|说明|
|---|---|---|
|Bool|否|插入成功，返回true，否则false|

```js
//在最后面插入数据
var data = {'id':'1','name':'张一','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国天津\'}'}

var setter = ArrayCtrlSetter()
setter.append('id','编码')
setter.append('name','名字')
setter.append('location','地址')

var result = Page.getArrayCtrl('列表'). append([data], 'tail', setter)
if(result == true) {
    //插入成功
}
```

|控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|表格 table|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|折叠列表 accordion|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|分组列表 sectionlist|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|

### update(rowsData, indexes, setter)

更新多条数据到指定的index

|参数|类型|可空|说明|
|---|---|---|---|
|rowsData|Array|否|将要更新的数据，Array形如\[Dictionary\]|
|indexes|Array|否|要进行数据更新的行index，为正整数数组，如\[0,2,3\]|
|setter|ArrayCtrlSetter|否|赋值规则，类型见ArrayCtrlSetter说明|

|返回类型|可空|说明|
|---|---|---|
|Bool|否|更新成功，返回true，否则false|

```js
//更新第三、第五行的数据
var data1 = {'id':'1','name':'张一','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国天津\'}'}
var data2 = {'id':'2','name':'刘五','location':'{\'lat\': 22.3434324, \'lng\': 133.433421, \'address\': \'中国重庆\'}'}

var setter = ArrayCtrlSetter()
setter.append('id','编码')
setter.append('name','名字')
setter.append('location','地址')

var result = Page.getArrayCtrl('列表'). update([data1, data2], [2, 4], setter)
if(result == true) {
    //插入成功
}
```

|控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|表格 table|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|折叠列表 accordion|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|分组列表 sectionlist|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|

### delete(indexes)

删除指定位置的行

|参数|类型|可空|说明|
|---|---|---|---|
|indexes|Array|否|要删除数据更新的行index，为正整数数组，如\[0,2,3\]|

|返回类型|可空|说明|
|---|---|---|
|Bool|否|删除成功，返回true，否则false|

```js
//删除第三、第五行的数据
var result = Page.getArrayCtrl('列表').delete([2, 4])
if(result == true) {
    //插入成功
}
```

### deleteInScope(scope)

删除指定范围内的数据

|参数|类型|可空|说明|
|---|---|---|---|
|scope|String|否|scope的取值有以下几种取值: **'all'** 全部数据; **'checked'** 勾选数据; **'modified'** 已修改数据; **'focused'** 已修改数据;|

|返回类型|可空|说明|
|---|---|---|
|Bool|否|删除成功，返回true，否则false|

```js
//删除勾选的数据
var result = Page.getArrayCtrl('列表').deleteInScope('checked')
if(result == true) {
    //插入成功
}
```

|控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|表格 table|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|折叠列表 accordion|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|分组列表 sectionlist|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|

### deleteInScopeReverse(scope)

删除指定范围外的数据，与deleteInScope相反

|参数|类型|可空|说明|
|---|---|---|---|
|scope|String|否|scope的取值有以下几种取值: **'all'** 全部数据; **'checked'** 勾选数据; **'modified'** 已修改数据; **'focused'** 已修改数据;|

|返回类型|可空|说明|
|---|---|---|
|Bool|否|删除成功，返回true，否则false|

```js
//删除未勾选的数据
var result = Page.getArrayCtrl('列表'). deleteInScopeReverse('checked')
if(result == true) {
    //插入成功
}
```

|控件|iOS|Android|Web|
|---|---|---|---|
|列表 list|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|表格 table|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|折叠列表 accordion|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|动态面板 dynamicpanel|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|
|分组列表 sectionlist|<font>未实现</font>|<font>未实现</font>|<font>未检测</font>|