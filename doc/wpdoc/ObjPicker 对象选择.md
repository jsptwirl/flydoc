---
title: ObjPicker 对象选择
date: 2020-05-20T14:30:02
---

对象选择控件，专门用于选择选择对象，默认提供一个通用的快捷查询和列表查询方法。

也可以实施自己配置快捷查询事件和列表查询表单。

![objpicker](http://apaas.wxchina.com:8881/wp-content/uploads/objpicker.png)

![](http://apaas.wxchina.com:8881/wp-content/uploads/objpicker_list.png)

# 控件协议

```json
{
    "type": "objpicker",
    "title": "",
    "name": "tn_store_picker",
    "readonly": "",
    "required": "",
    "multiselectable": "0",

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
            "trigger": "onlistquery"
        }
    ]
}
```

## 基础属性

### title

标题

### name

控件name，将会由IDE自动生成，不能编辑

### readonly

只读

### required

必填

### multiselectable

多选，默认为 0 ，表示单选

单选时才支持 `objpropertiesfill` 的配置

### source

属性来源，有两个取值

|值|标题|说明|
|---|---|---|
|entity|实体|调用通用对象查询接口，需要配置 entity 节点相关属性|
|logic|行为出参|调用指定的对象查询接口，需要配置 logic 节点相关属性|

### obj 对象

此处记录所选对象的相关信息

#### source

对象来源信息，该信息用于指导IDE的配置，前端无需理会

#### title

通过选择一个实体后自动填充的实体的名称，将会作为text字段的标题。

#### mark

通过选择一个实体后自动填充的实体的标记。

#### key

key字段，必填，用于记录该实体中用来唯一标识一个对象的属性。

IDE会自动填充所选对象中第一个类型为id的属性，实施也可以手动修改。

#### text

text字段，必填，用于记录该实体中用来记录对象名称的属性。

IDE会自动填充所选对象中第一个类型为name的属性，实施也可以手动修改。

### attach

附加显示属性，用于配置内置列表查询界面中，需要额外显示哪些属性值。

当属性来源为实体时，从实体的属性中进行选择。

当属性来源为行为出参时，从出参对象的属性中进行选择。

* name

  属性名，直接使用所选属性的name，不能修改

* title

  属性标题，直接使用所选属性的标题，可以修改

* valuetype

  属性值类型，IDE自动根据规则进行映射，也可以手动修改。

  该值会决定哪些属性会作为查询条件进行模糊匹配（该性质只在属性来源为实体时有效，自定义行为中，由该行为逻辑自行处理查询方式）

  属性值类型的取值范围与 TableCell 的 style 属性保持一致（除了link）。实现上也是由TableCell 控件负责对数据进行显示。

  **只有值类型为 text 的字段才会被作为模糊查询的字段组装进 queryproperties 属性中**

### objdatasource

对象数据源，IDE自动管理生成对应的事件，并填充其code。

当进行快捷查询，或者内置列表查询时，都会调用该事件来获取选项。

详细请参看[对象选择事件](../../Actions/ParticularActions/对象选择事件.md)

### objpropertiesfill

属性填充，IDE自动管理生成对应的事件，并填充其code，只在单选时生成。

当用户选择了一个对象后（通过快捷选项，或者通过查询列表选择），将会自动调用该事件。

详细请参看[对象选择事件](../../Actions/ParticularActions/对象选择事件.md)

## 事件

### onvaluechange

值改变事件，默认为空，控件在被赋值后触发。

**该事件将会在 objpropertiesfill 事件执行结束后触发。**

### onlistquery

列表查询事件，默认为空，点击列表查看按钮时触发，可用于连接到自定义的列表查询界面进行对象查询。

当配置了该属性后，点击列表查看按钮时就不再弹出控件内置的列表查询界面。

*关于如何定制自定义的列表查询界面，参看下方说明。*

## 控件值

对象选择控件将会完整保留选中的对象的指定属性（包括key，text以及attaches这三个属性中配置的字段的值）。

默认情况下（值选项为空，或者为value，或者为key时），直接对控件进行取值时，将会返回key值；同样可以通过指定component来获取指定的值，包括：

### key

key值，将会返回代表对象的key的字段值

```json
// 单选值样例
"001"

// 多选值样例
"["001", "002"]"
```

### text

text值，将会返回代表对象的text的字段值

```json
// 单选值样例
"选项1"

// 多选值样例
"["选项1", "选项2"]"
```

### fullvalue

完整值，将会完整返回对象的数据

```json
// 单选值样例
"{"key": "001", "text": "选项1", "detail": "", "image": "" ...}"

// 多选值样例
"[
    {"key": "001", "text": "选项1", "detail": "", "image": "" ...},
    {"key": "002", "text": "选项2", "detail": "", "image": "" ...}
]"
```

## IDE配置原型