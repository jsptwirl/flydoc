---
title: RichTextEditor
date: 2020-05-20T16:30:41
---

# Rich Text Editor

富文本编辑器，以HTML为基础，支持动态内容插入（普通文本，表格），并支持动态内容展示。

支持使用 [share](../../) 事件进行分享。

## UI示例

编辑状态，左边显示可选字段，右边为编辑区域，默认左右宽度比例为1：2

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E7%BC%96%E8%BE%91%E5%99%A8.png)

如果是数组型的数据，将不能直接添加字段，将会弹窗进行设置，自动根据选择的字段生成对应的列。

默认只会生成两行数据，一行表头，一行变量内容。（参看下方value示例）

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E6%95%B0%E7%BB%84%E9%80%89%E6%8B%A9%E5%BC%B9%E7%AA%97.png)

查看状态就是一个简单web view，不带其他任何显示元素

## Protocol

```json
{
    "type": "richtexteditor",
    "useage": "editor/viewer",
    "viewwidth": "600",
    "varsourcemap": [
        {
            "objname": "orderdetail",
            "objlabel": "订单详情",
            "objtype": "obj",
            "fields": [
                {
                    "name": "ordername",
                    "label": "订单名称",
                      "type": "text"
                },
                {
                    "name": "ordercode",
                    "label": "订单编码",
                      "type": "text"
                },
                {
                    "name": "usersign",
                    "label": "用户签名",
                    "type": "image"
                },
                {
                    "name": "deliverybymanufacturer",
                    "label": "厂家直供",
                    "type": "options",
                    "options": [
                        {
                            "key": "0",
                            "text": "否"
                        },
                        {
                            "key": "1",
                            "text": "是"
                        }
                    ]
                }
            ]
        },
        {
            "objname": "pruductlist",
            "objlabel": "产品列表",
            "objtype": "array",
            "fields": [
                {
                    "name": "productname",
                    "label": "产品名称",
                      "type": "text"
                },
                {
                    "name": "productnumber",
                    "label": "产品数量",
                      "type": "text"
                },
                {
                    "name": "productprice",
                    "label": "单价",
                      "type": "text"
                }
            ]
        }
    ],
    "eventlist": [
        {
            "trigger": "onloaded",
            "handler": ""
        }
    ]
}
```

### useage

|值|说明|
|---|---|
|editor|编辑器，web端默认值，表示当前控件用于编辑|
|viewer|查看器，手机端默认值，表示当前控件用于查看文本，将会调用sourcelogic的接口进行**变量替换**|

> 目前web端需要实现两种模式，手机端只需要支持 viewer 模式
>
> 编辑状态的编辑器支持只读模式，此时所有编辑选项均不可用
>
> editor模式下，如果是只读状态，将不会显示左边的变量选项

### viewwidth

视图宽度，用于控制内容的显示宽度，手机端和web端通用。

默认值为600

### varsourcemap

变量来源，用于指定以 `varsource` 方式赋值的的数据的信息。用于指导 **editor** 状态下，变量选项的生成，以及 **viewer** 状态下，变量替换的指引。

该属性可以直接配置，或者通过 `varsourcemap` component 进行赋值。

> 在viewer模式下，varsourcemap 只能从值（value）当中获取，不能通过别的方式配置

## Value 取值与复制

编辑器的值由于可能会超出系统对字段数据长度的限制，因此改为使用文件上传下载的方式进行取值和赋值(与拍照控件类似)。

### 值

编辑器的值为包含其真正值的**富文本文件**的文件名，以及该文件的相关信息。

该文件名的后缀固定为 `.rtxe` ，新增保存时，由前端使用UUID生成文件名。

```json
{
    "source": "875464143134754.rtxe",
    "datetime": "845623154531",
    "storage": "storage"
}
```

> 参看photo控件的值

### 富文本文件

富文本文件将保存一个json结构，用于存储编辑器的编辑的实际内容。其结构如下：

```json
{
    "body": "...HTML Content...",
    "images": [
        {
            "ref":" <!--IMG#0-->",
            "src":"announcementfile/img/20191230/1008851/imagename.jpeg",
            "pixel":"144*78",
            "alt":"image.jpeg"
        }
    ],
    "varsourcemap": [
        {
            "objname": "orderdetail",
            "objlabel": "订单详情",
            "objtype": "obj",
            "fields": [
                {
                    "name": "ordername",
                    "label": "订单名称",
                      "type": "text"
                },
                {
                    "name": "ordercode",
                    "label": "订单编码",
                      "type": "text"
                },
                {
                    "name": "usersign",
                    "label": "用户签名",
                    "type": "image"
                },
                {
                    "name": "deliverybymanufacturer",
                    "label": "厂家直供",
                    "type": "options",
                    "options": [
                        {
                            "key": "0",
                            "text": "否"
                        },
                        {
                            "key": "1",
                            "text": "是"
                        }
                    ]
                }
            ]
        },
        {
            "objname": "pruductlist",
            "objlabel": "产品列表",
            "objtype": "array",
            "fields": [
                {
                    "name": "productname",
                    "label": "产品名称",
                      "type": "text"
                },
                {
                    "name": "productnumber",
                    "label": "产品数量",
                      "type": "text"
                },
                {
                    "name": "productprice",
                    "label": "单价",
                      "type": "text"
                }
            ]
        }
    ]
}
```

#### body

body中存储了一段HTML文本，其中包含了以大括号 `{var}` 为标识的变量，例如

```html
<p style="text-align: center;">{订单名称}<br /></p>
<p><span style="font-size: 14px;">订单编号：{订单编号}</p>
<p> <!--IMG#0--> </p>
<p> <!--IMG#1--> </p>
<p> 是否厂家直供：{选项集开始:厂家直供}<input type="checkbox" value="1"/>是 <input type="checkbox" value="0"/>否 {选项集结束} </p>
<p> 是否厂家直供：<input type="checkbox" value="1"/>是 <input type="checkbox" value="0" checked/>否  </p>
<table sourceobj="{订单产品列表}">
    <tbody>
        <tr class="firstRow">
            <th style="word-break: break-all;">产品名称</th>
            <th style="word-break: break-all;">产品数量</th>
            <th style="word-break: break-all;">单价</th>
        </tr>
        <tr>
            <td width="111" valign="top" style="">{订单产品列表.产品名称}</td>
            <td width="111" valign="top" style="">{订单产品列表.产品数量}</td>
            <td width="111" valign="top" style="">{订单产品列表.单价}</td>
        </tr>
    </tbody>
</table>
```

> 静态表格支持 text，image，options等变量内嵌

目前支持的变量种类有：

1. text 文本变量

   在非动态table标签内使用，例如 `{订单名称}` , `{订单编号}` ，这些在非table标签内的变量。

   这些变量会使用 sourcelogic 返回的数据

   这部分变量会在 `varsource` 中所有非数组类型的对象字段中进行匹配取值替换。

2. array 动态表格变量

   在表格的 table 标签中会有一个 `sourceobj` 属性，用于放置表格数据来源的对象的label。

   在 td 标签的文本值中放置 数据来源对象的字段label。

   表格的标题标签会自动生成。

   首先会根据table标签的 sourceobj 在 `varsource` 找到对应的对象，然后根据该对象数据的条数，自动生成对应的行，并填充变量数据。

   > 表格内部只能嵌入 **文本变量** ，且并不能自由配置，必须是该 sourceobj 内的文本变量字段

3. image 图片变量

   在非动态table标签内使用，支持静态和动态两种，在body中只会存在一个图片的占位符 `<!--IMG#No.-->`，当是动态图片是，图片变量会存在images节点中的src中，详情参看下方说明。

   替换后的标签为：

   ```html
   <img src="......" width="50" height="50" alt="......" />
   ```

4. options 选项变量

   在非动态table标签内使用，将使用 options 中的值来生成选项

   在替换时根据变量值设置对应的input的checked属性。其值目前只支持key的集合，例如

   ```json
   ['1']
   ['service1'，'service4']
   ```

   转换后的标签为

   ```html
   <input type="checkbox" checked/>是    <input type="checkbox"/>否
   ```

#### images

```json
[
    {
        "ref":" <!--IMG#0-->",
        "src":"xxxxxxxx.jpg",
        "pixel":"144*78",
        "alt":"image.jpeg"
    },
    {
        "ref":" <!--IMG#1-->",
        "src":"{签名}",
        "pixel":"144*78",
        "alt":"image.jpeg"
    }
]
```

图片集，存储图片的具体信息

* ref

  用于关联body中的图片占位符。

* src

  如果是静态图片，将会直接给出图片的相对地址；

  如果是动态图片，其内容将会是一个字段，该字段的值与 photo 控件的值一致 ，只不过目前只接受一张图片的情况。

  > 动态图片viewer模式下的加载，web端暂未支持

* pixel

  用于指定图片的尺寸，如果该值为空，就使用图片自身的尺寸。

* alt

  用于替换图片的文字，当图片加载失败时显示。

  > 暂时不支持配置

#### varsourcemap

该节点是在生成值的时候，直接从控件的varsourcemap节点拷贝二来，用于viewer模式下进行变量替换的key-value map来源。

这样做主要是因为协议模板会不断有版本更新，但是旧版本的协议应该使用旧的对应的模板变量对应关系，因次需要将这些对应关系与模板值一起保存使用。

### 取值与赋值

和普通的单值控件使用相同方式进行取值和赋值

```js
/// 使用 flycode 取值和赋值示例
/// 取值，与普通控件取值一致
var content = Page.getCtrl('富文本编辑器').value;

/// 赋值，与普通控件赋值一致
Page.getCtrl('富文本编辑器2').value = content;
```

### 兼容旧的取值赋值

为了兼容旧的值格式（直接保存json字符串），先做出以下约定：

#### Editor 模式

* 新增时

  以新的文件方式进行存储。

* 编辑时

  需要兼容旧的值格式，但再次保存时，需要按新增的方式处理

#### Viewer 模式

需要兼容旧的值格式

## Component

### screenshot 截图

该值组件用于获取当前控件内容的截图。此时的取值的格式参看拍照控件（相当于单张拍照）

只能用于取值，目前只在手机端实现。

### fileinfo

获取文件的本地信息，包含完整路径和时间戳，与 screenshot 搭配使用，用法格式与拍照控件一致。

```json
[
    {
          "filepath": "",
          "datetime": "",
        "watermark": "广州市天河区",
        "storage": "storage"
      }
]
```

> 只在使用flycode获取数据是有用，在使用IDE配置时，无需获取该值，直接使用 screenshot 即可

### varsourcemap 变量集

该值组件可用于给 `varsourcemap` 属性赋值，只在编辑模式下起效，目前只在web端实现。

赋值的内容是一个json字符串。

```js
/// 使用 flycode 进行变量来源赋值
/// 该赋值只在 编辑 模式下起效

/// 通过接口获取到一个变量集的字符串 sourcemap
let sourceMapSetter = CtrlValueSetter('varsourcemap');
Page.getCtrl('富文本编辑器').setValue(sourcemap, sourceMapSetter);
```

### varsource 变量来源

变量来源，用于对该控件的变量数据源进行取值和赋值的key，使用方式是以 **Component** 的方式进行取值或者赋值。

其实变量来源就通常就是一个接口的全部出参的json字符串，对应接口需要对此进行必要的转换，例如：

```json
/// 订单的详情返回的结果通常两个对象的json
{
  "orderdetail": {
        "ordername": "测试订单",
    "ordercode": "AC001"
  },
  "pruductlist": [
    {
      "productname": "产品1",
        "productnumber": "20"
    }
  ]
}

/// 需要将以上结果转换为一个字符串，用做变量来源
"{'orderdetail': { 'ordername': '测试订单', 'ordercode': 'AC001' }, 'pruductlist': [{'productname': '产品1','productnumber': '20'}]}"
```

通过接口获取到的数据来源可以使用flycode，或则IDE的setter进行赋值，只需要指定 **component** 为 `varsource` 即可

```js
/// 使用 flycode 进行变量来源赋值
/// 该赋值只在 viewer 模式下起效

/// 通过接口获取到一个变量来源的字符串 sourcedata
let sourceSetter = CtrlValueSetter('varsource');
Page.getCtrl('富文本编辑器').setValue(sourcedata, sourceSetter);
```

> 如果变量来源的数据量很大（超过10000字节），将不能直接通过字段值来传递，此时建议直接以正常的对象返回数据，然后在前端使用flycode将变量对象序列化之后再赋值。
>
> 通用模板实体名称：richtext\_template

* 模板详情查询

```json
// 入参
{
  "id": "模板id"
}
// 出参
{
  "id": "模板id",
  "code": "模板code",
  "type": "模板类型",
  "name": "模板名称",
  "content": "模板正文"
}
```

* 协议详情查询

```json
// 入参
{
  "id": "主数据id" // 例如陈列协议id
}
// 出参
{
  "richtext_template": {
    "id": "模板id",
    "code": "模板code",
    "type": "模板类型",
    "name": "模板名称",
    "content": "模板正文"
  },
  "varobj1": {...},
  "varobj2": [...]
}
```