---
title: ObjPicker 对象选择控件
date: 2020-10-09T15:59:37
---

对象选择控件，专门用于选择选择对象，默认提供一个通用的快捷查询和列表查询方法。

也可以实施自己配置快捷查询事件和列表查询表单。

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%B9%E8%B1%A1%E9%80%89%E6%8B%A9%E6%8E%A7%E4%BB%B61.png)

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%B9%E8%B1%A1%E9%80%89%E6%8B%A9%E6%8E%A7%E4%BB%B62.png)

# 控件协议

```json
{
    "type": "objpicker",
    "title": "",
    "name": "tn_store_picker",
    "multiselectable": "0",
    "maxselection": "",
    "obj": {
        "source": {
            "type": "entity/logic",
            "code": "entitycode/logiccode"
        },
        "mark": "tn_store",
        "title": "终端门店",
        "key": "storeid",
        "text": "storename",
        "properties": [
            {
                "name": "type",
                "title": "类型",
                "valuetype": "text"
            }, 
            {
                "name": "address",
                "title": "地址",
                "valuetype": "address"
            },
            {
                "name": "salesman",
                "title": "销售员",
                "valuetype": "text"
            }
        ]
    },

    "objdatasource": "def_datasource_query_event",
    "objpropertiesfill": "def_properties_fill_event",

    "eventlist": [
        {
            "handler": "",
            "trigger": "onvaluechange"
        },
        {
            "handler": "",
            "trigger": "onopenlist"
        }
    ],

    "extraparams": {
        "name": "extraparams",
        "datatype": "0",
        "ctrl": {
            "code": "",
            "scope": ""
        },
        "properties": [
            {
                "name": "storename",
                "value": "",
                "alias": "customername",
                "ctrl": {
                    "code": "some_ctrl_code",
                    "component": ""
                }
            }
        ]
    }
}
```

## 基础属性

### title 标题

标题

### multiselectable 多选

多选，默认为 0 ，表示单选

单选时才支持 `objpropertiesfill` 的配置

### obj 对象

此处记录所选对象的相关信息

#### source 对象来源

对象来源信息，该信息用于指导IDE的配置，前端无需理会

属性来源，有两个取值，默认为entity

【目前只支持实体】

|值|标题|说明|
|---|---|---|
|entity|实体|调用通用对象查询接口，需要配置 entity 节点相关属性|
|logic|行为出参|调用指定的对象查询接口，需要配置 logic 节点相关属性|

#### title 对象标题

通过选择一个实体后自动填充的实体的名称，将会作为text字段的标题。

#### mark 对象标签

通过选择一个实体后自动填充的实体的标记。

该属性无需配置，由IDE自动填充

#### key 对象key字段

key字段，必填，用于记录该实体中用来唯一标识一个对象的属性。

IDE会自动填充所选对象中第一个类型为id的属性，实施也可以手动修改。

#### text 对象text字段

text字段，必填，用于记录该实体中用来记录对象名称的属性。

IDE会自动填充所选对象中第一个类型为name的属性，实施也可以手动修改。

#### properties 对象附加属性

附加属性，用于配置内置列表查询界面中，需要额外显示哪些属性值。

当属性来源为实体时，从实体的属性中进行选择。

当属性来源为行为出参时，从出参对象的属性中进行选择。

* name 属性名

  属性名，直接使用所选属性的name，不能修改

* title 属性标题

  属性标题，直接使用所选属性的标题，可以修改

* valuetype 属性类型

  属性值类型，IDE自动根据规则进行映射，也可以手动修改。

  该值会决定哪些属性会作为查询条件进行模糊匹配（该性质只在属性来源为实体时有效，自定义行为中，由该行为逻辑自行处理查询方式）

  属性值类型的取值范围与 TableCell 的 style 属性保持一致（除了link）。实现上也是由TableCell 控件负责对数据进行显示。

  **只有值类型为 text 的字段才会被作为模糊查询的字段组装进 queryproperties 属性中**

### objdatasource

【暂不支持配置】

对象数据源，IDE自动管理生成对应的事件，并填充其code。

当进行快捷查询，或者内置列表查询时，都会调用该事件来获取选项。

详细请参看[对象选择事件](../../Actions/ParticularActions/对象选择事件.md)

### objpropertiesfill

【暂不支持配置】

属性填充，IDE自动管理生成对应的事件，并填充其code，只在单选时生成。

当用户选择了一个对象后（通过快捷选项，或者通过查询列表选择），将会自动调用该事件。

详细请参看[对象选择事件](../../Actions/ParticularActions/对象选择事件.md)

### extraparams

附加查询参数

用于配置该对象查询所需的额外搜索条件来源，其结构与getter一致，获取值的方式也与getter一致，但最终其获取到的参数不是生成一个对象，而是使用 `extraparams.name` 作为字段名，获取到的参数对象转换为json字符串后作为字段值，如：

```json
"extraparams": "{\"salesarea\":\"001\", \"datebefore\": \"4355212341234\"}"
```

然后将该字段加入到对象查询接口的第一个对象的入参中。

由于默认的通用查询接口并没有处理该参数，因此添加了该参数后，实施要负责在通用查询接口中对这些参数进行拆解，并根据objectmark作为判断标识，添加自定义的查询sql。

> 目前IDE只支持 `extraparams.properties` 的配置，其他暂时属性自动生成
>
> 实现上，可以让该控件传递出这个字段的完整配置，最终依然有datarequest事件实际执行

## 事件

### onvaluechange

值改变事件，默认为空，控件在被赋值后触发。

**该事件将会在 objpropertiesfill 事件执行结束后触发。**

### onopenlist

列表打开事件，点击列表查看按钮时触发。默认为空，此时会打开内置的列表查询界面。

当配置了该属性后，点击列表查看按钮时就不再弹出控件内置的列表查询界面。

*关于如何定制自定义的列表查询界面，参看下方说明。*

## 控件值

对象选择控件将会完整保留选中的对象的指定属性（包括key，text以及properties这三个属性中配置的字段的值）。

默认情况下（值选项为空，或者为value，或者为key时），直接对控件进行取值时，将会返回key值；同样可以通过指定component来获取指定的值，包括：

### key

key值，将会返回代表对象的key的字段值

```json
// 单选值样例
"001"

// 多选值样例
"[\"001\", \"002\"]"
```

### text

text值，将会返回代表对象的text的字段值

```json
// 单选值样例
"选项1"

// 多选值样例
"[\"选项1\", \"选项2\"]"
```

### fullvalue

完整值，将会完整返回对象的数据。

**目前只支持使用该方式进行对象选择控件赋值**

```json
// 单选值样例
"{\"key\": \"001\", \"text\": \"选项1\"\, \"detail\": \"\", \"image\": \"\" ...}"

// 多选值样例
"[\
    {\"key\": \"001\", \"text\": \"选项1\"\, \"detail\": \"\", \"image\": \"\" ...},\
    {\"key\": \"002\", \"text\": \"选项2\"\, \"detail\": \"\", \"image\": \"\" ...}\
]"
```

## 选项缓存说明

由于对象选择控件的选项默认都是在展开选项时，分页加载。因此为了提升用户使用体验，对象选择控件的快捷下拉选项会进行缓存，已经加载过的选项不会重新请求，因此，如果控件的选项已经发生变化后，需要实施人员手动清除选项缓存，清除方法如下：

```js
var pickerCtrl = Page.getPickerCtrl("somectrl");
pickerCtrl.clearOptions();
```

## 自定义项说明

* 详细列表关联属性显示

  如人员选择可能需要显示组织，而人员实体只有一个组织id，因此需要关联查询才能查出对应的组织名称。但由于系统的实体没有强制的实体名称字段，因此无法做出通用的关联查询。

  **解决方案：**在通过对象查询事件中自定义SQL语句来实现

* 附加筛选条件 【暂未实现】

  指在查询选项集时，需要附加的一个外部参数，例如终端列表查询，附加当前营销组织code，以及状态为启用。

  **解决方案：** 使用附加参数项配置来解决，可以直接固定值，也可以从表单中的其他控件中取值。此方案需要对应的接口也支持

* 详细列表自定义查询条件 【暂未实现】

  指在详情列表中，除了通用的模糊查询外，还需要一些其他便利的查询条件，例如加入一些下拉框作为门店类型的筛选。

  **解决方案：** 使用自定义详情列表页面来替换自动生成的页面。

* 自动属性填充 【暂未实现】

  指在对象选择后，将其 properties 的相关字段值，填充到其他控件中。例如选择人员后，将电话号码，地址等信息自动填充到指定控件中。

  **解决方案：** 使用自动填充事件

* 批量对象选择编辑 【暂未实现】

  指在编辑表格中，通过对象选择控件选择一个或多个对象后，自动添加对应的行，并对每行执行对应的属性填充。例如订单页面，在选择多个产品后，自动添加多行，并将其中的产品相关信息进行填充。

  **解决方案：** EditorTable的appendrowbyobjs属性 + 对象选择控件+自动填充事件

## 通用查询接口说明

目前定义了一个通用的查询接口：`业务对象通用查询` 。

不过受限于实体结构的不稳定，大部分场景需要特定的查询语句，实施可以逐步在其中补充针对具体实体查询的sql语句。

## 自定义的列表查询界面