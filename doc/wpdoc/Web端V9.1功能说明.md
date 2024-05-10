---
title: Web端V9.1功能说明
date: 2020-07-10T16:47:24
---

# memberpicker 人员选择控件

用于选择组织内人员的业务控件，不需要配置数据源，协议如下

```
{
    "type": "memberpicker",
    "code": "memberpicker-8805478564654936219",
    "eventlist": [
        {
            "trigger": "onvaluechange",
            "handler": ""
        }
    ],
    "title": "人员选择",
    "placeholder": "人员选择",
    "searchable": "1",
    "style": "tree",
    "scene": "pickermulti"
}
```

控件样式如下：  
![](http://apaas.wxchina.com:8881/wp-content/uploads/memberpicker.png)

ide配置如下：  
![](http://apaas.wxchina.com:8881/wp-content/uploads/memberpicker-ide.png)

### 使用要求

* 确保web引擎至少为 V9.1.0 版本
* 确保业务领域中存在 **业务控件\_成员选择\_查询接口** **业务控件\_成员选择\_byid查询** 这两个接口，如果不存在，请下载[业务行为](http://apaas.wxchina.com:8881/wp-content/uploads/memberpicker.zip "业务行为")，然后导入。

### style 显示样式

暂不支持，默认以树形结构展示

|取值|说明|
|---|---|
|tree|默认值，以组织树的结构展示人员选项|
|list|暂不支持，以列表的结构展示人员选项|

### searchable 可搜索

bool值，用于指定选项是否支持搜索。默认值为1，表示可以搜索。  
该属性会决定选项上方的搜索框是否显示。

### scene 使用场景

|取值|中文名称|说明|实现情况|
|---|---|---|---|
|picker|单项选择|用于选择单个人员，默认值为空|支持|
|pickermulti|多项选择|用于选择多个人员，默认值为空|支持|

### value 值

* 当 scene 为 picker 单选时，value 值为**成员id字符串**
* 当 scene 为 pickermulti 多选时，value 值为**成员id数组字符串**

### 注意事项

一般来说，后端接口接收多选值时，配置接收的字段类型为长文本，但是，目前后端长文本字段限制接受字符串个数为2万个，超过会报错，因此，针对可以多选的控件(如 datatree树控件 memberpicker成员控件 relevance穿梭框 等等 )而言，且后端接受字段为长文本时，要注意提交值是否超过2万个。

针对 memberpicker 该成员控件而言，经计算(成员id字符串为19个数字，再加上一些json格式化信息)最多提交的成员个数为 900 个。

如果由于业务需要，提交个数确实必须超过 900 个的，后端可改成自定义数组实体的方式接受，同时，表单在提交时，运用flycode获取控件值，然后进行处理，使之符合后端接受参数要求。  
![](http://apaas.wxchina.com:8881/wp-content/uploads/memberpicker-back.png)

```
// 获取多选成员控件值
var member = Page.getCtrl('成员选择').value
// 格式化 转成数组
member = JSON.parse(member)
// 处理使之符合接口接受的数组格式
var memberArr = member.map((item, i) => {
    return {
        memberid: item
    }
})
// flycode上传
Model.request('xxxx接口名称', {
    member: memberArr
}, function (res) {
    console.log(res)
}, function (err) {
    console.error(err)
})
```

### eventlist 事件列表

|取值|说明|
|---|---|
|onvaluechange|值改变时触发|

# picktree 和 datatree 树控件支持 autofillvalue 属性

autofillvalue 用于表示是否需要自动填充默认值，默认值为0，表示不需要自动填充。  
当为1时，picktree 和 datatree 树控件初始化加载数据源时，默认填充选中数据源第一个值。

```
{
    "type": "picktree",
    "autofillvalue": "1"
}
```

IDE 配置界面如下(注意：需使用 IDE-V2.9.0 以上版本)：  
![](http://apaas.wxchina.com:8881/wp-content/uploads/autofillvalue-ide.png)

该属性一般用于左边为营销组织导航时，需要默认选中根节点的情况。  
以 组织管理-可配置 页面为例，对左边营销组织导航树配置了该属性之后，即可默认选中根节点。

![](http://apaas.wxchina.com:8881/wp-content/uploads/autofillvalue-demo.png)

# web引擎包支持部署在域名子路径功能

web引擎包一般是部署在域名根路径的，但由于某些公司特殊情况，域名根路径已被占用(比如已经部署了公司官网或者别的项目)导致无法部署，所以本次也支持了部署在域名子路径的功能，以测试环境为例：

**域名根路径部署：**  
地址为：[http://172.16.0.163:7000/](http://172.16.0.163:7000/)  
服务器部署路径为：/home/apaas/web

**如果想部署在域名子路径，比如：**  
地址为：[http://172.16.0.163:7000/xxx/](http://172.16.0.163:7000/xxx/)  
则对应服务器部署路径为：/home/apaas/web/xxx

**多层级目录以此类推。**

# 控件 mode 紧凑模式

默认的，所有的控件都具有一个叫 **mode** 的属性，用于控制其显示模式，协议如下：

```
{
    "type": "textinput",
    "mode": "free"
}
```

web 端目前支持2种 mode 类型：

|key|usage|
|:---|:---|
|free|**自由模式**，控件默认的显示模式，控件自身提供边框，用于标识控件的显示范围|
|compact|**紧凑模式**，用于显示只读的信息，标题型控件不显示边框，控件内容按正常文字颜色显示，控件标题显示为粗体，可以最大限度的利用空间显示信息|

IDE 配置界面如下：  
![](http://apaas.wxchina.com:8881/wp-content/uploads/mode-ide.png)

mode = free，自由模式控件样式如下：  
![](http://apaas.wxchina.com:8881/wp-content/uploads/mode-free.png)

mode = compact，紧凑模式控件样式如下：  
![](http://apaas.wxchina.com:8881/wp-content/uploads/mode-compact.png)

### mode 隐式继承

由于控件大多数时候的显示模式其实是由其所在的容器决定的，所以一般不需要手动的去设置控件的显示模式，而是直接继承其父容器的 mode 属性值。  
当然，如果有需要的话，控件也可以设置自身的 mode 属性，优先级高于父容器继承值。

### 表单模式对 mode 的影响

通过链接事件打开页面时，页面的控件显示模式会基于 \_\_pagestatus 表单模式发生改变，规则如下：

|key|usage|
|:---|:---|
|新增|当 \_\_pagestatus = 1 时，mode = free|
|编辑|当 \_\_pagestatus = 2 时，mode = free|
|查看|当 \_\_pagestatus = 3 时，mode = compact|

当页面为**查看**状态，引擎在解析表单时，会默认在 body 根节点添加 mode = compact 属性，基于其继承规则，整个页面控件都会展示成紧凑模式。  
当你不想要紧凑模式时，可针对单独父容器或者单独控件设置 mode = free 自由模式，这时控件会变成**只读**模式(有边框，颜色置灰)，如果你也不想要只读模式时，也可单独针对某个控件设置只读属性为否。

### mode紧凑模式 与 readonly只读模式 区别

* 控件紧凑模式不显示边框，只读模式有显示边框但颜色会置灰并且不可进行点击操作
* 只读模式可通过 flycode: Page.getCtrl('name').readonly = true 进行设置，紧凑模式原则上不允许用 flycode 设置
* mode 属性有隐式继承规则(继承父容器)，readonly 只读属性没有
* mode 优先级高于 readonly (当控件同时设置 mode = compact 和 readonly = 1 时，优先展示紧凑模式)

# 关于 Image/Photo 控件支持外链图片显示的功能

> 支持完整的全路径 url 地址图片 如：[https://timgsa.baidu.com/timg?image&quality=80&size=b9999\_10000&sec=1591593537818&di=37c503e558c9f539862d2ff447624f6a&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F64%2F76%2F20300001349415131407760417677.jpg](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591593537818&di=37c503e558c9f539862d2ff447624f6a&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F64%2F76%2F20300001349415131407760417677.jpg)  
> 支持 flycode 与事件绑定方式赋值

### Image 控件 flycode 操作示例

```js
Page.getCtrl('图片').value = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589433852560&di=767dadc2fc1c19d557c67b41fa240051&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg'
```

### Photo 控件 flycode 操作示例

```js
Page.getCtrl('照片').value = JSON.stringify([
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589433852560&di=767dadc2fc1c19d557c67b41fa240051&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591593537818&di=37c503e558c9f539862d2ff447624f6a&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F64%2F76%2F20300001349415131407760417677.jpg'
])
```

# popup 方式弹框交互风格更改

> web 端当前引擎弹框 popup 方式的位置可以配置 `居中center`和 `居右right`  
> 居右显示为 侧推效果，高度定死为屏幕 100%，不能设置，宽度可以设置，默认 50%  
> 居中的兼容之前的弹框效果，可以配置宽高，默认高度自适应  
> push 也改为多引擎层叠加，解决之前版本通过 push 方法跳转再返回的时候，前页面刷新无法保存临时变量以及搜索条件的问题

```json
{
        "type": "link",
        "pagecode": "page_storedetail",
        "mode": "popup",
        "title":"有这属性就显示，没有就取pagetitle"
        "pagesize": {"width", "height"},
        "position": "center|right" // TODO 重点
        "param": {
            "name": "__linkparam",
            "datatype": "0",
            "ctrl": {
                "code": "",
                "scrop": ""
            },
            "properties": [
                ...
            ]
        }
    }
```

### 以产品管理详情为例子改造布局适应 popup 布局

> 页面分上下两部分，底部固定最下面，上部分超过高度出现内部滚动条

```json
"view": {
        "body": {
            "type": "layout",
            "code": "layout-2576877443645696",
            "eventlist": [],
            "flex": "1",
            "flexdirection": "vertical",
            "content": [
                {
                    "type": "layout",
                    "code": "layout-ctrl_panel",
                    "eventlist": [],
                    "marginvertical": "15",
                    "marginhorizontal": "30",
                    "flex": "1",
                    "content": [
                        {
                            "type": "layout",
                            "code": "layout-8464189507120064",
                            "eventlist": [],
                            "flex": "", // flex不能为都为1
                            "flexdirection": "horizontal",
                            "content": [
                                {
                                    "type": "text",
                                    "code": "text-ctrl_title_info_base",
                                    "title": "基本信息",
                                    "flex": "1",
                                    "width": "50%",
                                }
                            ]
                        },
                        {
                            "type": "layout",
                            "code": "layout-1427634120225804",
                            "eventlist": [],
                            "flex": "", // flex不能为都为1
                            "flexdirection": "horizontal",
                            "content": [
                                {
                                    "type": "datepicker",
                                    "code": "datepicker-896981458235822161",
                                    "title": "新品有效期",
                                    "flex": "1",
                                    "width": "50%",
                                },
                                {
                                    "type": "dropdownbox",
                                    "code": "dropdownbox-896981458235822162",
                                    "hidden": "",
                                    "title": "是否重点产品",
                                    "flex": "1",
                                    "width": "50%",
                                    "text": "是否重点产品",
                                }
                            ]
                        },
                        {
                            "type": "layout",
                            "code": "layout-0659637555749576",
                            "flexdirection": "horizontal",
                            "flex": "", // flex不能为都为1
                            "content": [
                                {
                                    "type": "number",
                                    "code": "number-897653656025960547",
                                    "flex": "1",
                                    "width": "50%",
                                    "value": "",
                                    "title": "排序值",
                                },
                                {
                                    "type": "dropdownbox",
                                    "code": "dropdownbox-896981458235822160",
                                    "title": "状态",
                                    "flex": "1",
                                    "width": "50%",
                                    "text": "状态"
                                }
                            ]
                        },
                        {
                            "type": "layout",
                            "code": "layout-7499834307132844",
                            "flexdirection": "horizontal",
                            "flex": "", // flex不能为都为1
                            "content": [
                                {
                                    "type": "photo",
                                    "code": "photo-897266467668627543",
                                    "flex": "1",
                                    "title": "照片",
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "layout",
                    "code": "layout-6288640869904478",
                    "justifycontent": "flexend",
                    "flexdirection": "horizontal",
                    "content": [
                        {
                            "type": "button",
                            "code": "button-ctrl_button_cancel",
                            "text": "取消",
                            "title": "取消",
                            "flex": "",
                        },
                        {
                            "type": "button",
                            "code": "button-ctrl_button_save",
                            "text": "保存",
                            "title": "保存",
                            "flex": "",
                        }
                    ]
                }
            ]
        }
```

# 初始化密码登录后提示强制修改密码

> 此功能需要在打包的时候调整企业名称

```
"build": "vue-cli-service build --mode production --VUE_APP_ENV_DOMAIN=http://mconfig.xtion.net:8015 --VUE_APP_BUSINESS_NAME=xxxxx",
```

1. 可以在开发者中新控制台配置具体信息，包括初始化密码，密码校验，密码提示，是否强制修改初始化密码

![设置初始化密码](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%AE%BE%E7%BD%AE%E5%88%9D%E5%A7%8B%E5%8C%96%E5%AF%86%E7%A0%81.jpg)

1. 用户使用初始化密码登录后，如果配置有配置该租户需要强制修改初始化密码的情况，会自动在登录后弹出修改密码的页面，如果不修改，则不允许进入系统

![设置初始化密码](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%BA%E5%88%B6%E4%BF%AE%E6%94%B9%E5%AF%86%E7%A0%81.jpg)

# 富文本控件保存格式变更 对接文件服务

> 由于富文本控件 richtexteditor 需要保存大量的内容，此内容已经超过了数据库字段的限制，故此需要将富文本控件的内容保存到文件服务中

### 保存格式

> 该文件名的后缀固定为 .rtxe ，新增保存时，由前端使用 UUID 生成文件名

```js
{
    "source": "uuid-uuid-uuid-uuid.rtxe",
    "datetime": "845623154531",
    "storage": "storage"
}
```

### 富文本文件内容

> 富文本文件将保存一个 json 结构，用于存储编辑器的编辑的实际内容。其结构如下：

```json
{
    "body": "...HTML Content...",
    "images": [
        {
            "ref": " <!--IMG#0-->",
            "src": "announcementfile/img/20191230/1008851/imagename.jpeg",
            "pixel": "144*78",
            "alt": "image.jpeg"
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

### body

> body 中存储了一段 HTML 文本，其中包含了以大括号 {var} 为标识的变量，例如

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

# 导出功能配置说明

### 版本要求：

​ web包（V9.0+）+ 导入导出服务版本（v2.6.1）

**简述：**

web端支持导出事件配置目标入參，flycode接口获取web上传的参数做业务逻辑相关导出操作，web端提供捕捉页面数据作为导出接口的参数传入。

**场景一：全量数据导出**

```
{
    "modellogicname": "产品导出",
    "execmode": "1",
    "status": 1,
    "actiontype": "6",
    "modelcode": "894807236843540573",
    "actioncategory": "1",
    "usedatarule": "1",
    "functionname": "",
    "modellogiccode": "936136208466186328",
    "marktype": "3",
    "input": [],
    "output": []
},
```

导出接口不配置入參，数据全量导出。

**场景二：依赖搜索条件，导出查询结果数据**

```
{
    "modellogicname": "产品导入",
    ...
    "input": [
        {
            "name": "kx_kq_product",
            "objectcode": "893288512944738326",
            "objectname": "产品",
            "datatype": "0",
            "properties": [
                {
                    "name": "sheetnames",
                    "propertyname": " 即将导入的excel的sheet页名(sheetnames)",
                    "propertytypecode": "3"
                    ...
                }]
        }]
}
```

导出接口配置入參对象。

**场景三：导出勾选数据**

导出事件入參只支持对象结构，对于数组数据，方案是，将目标勾选数组转为字符串，存储某个入參字段作为接口数据提交，flycode进行数据处理。

![](http://apaas.wxchina.com:8881/wp-content/uploads/exp1.png)  
![](http://apaas.wxchina.com:8881/wp-content/uploads/exp2.png)

**详细配置步骤及流程可以移步开发者网站，查阅配套文档**

# 登录界面企业账户输入框控制

### 版本要求：

​ web包（V9.0+）

**简述：**

web端登录界面存在企业账户输入框，通过获取管理企业账户得到企业配置信息，用于开放性功能控制，如：短信验证码登录，登录修改初始密码等。

**一、 场景一：显示登录界面企业账户输入框**

1、 配置方式：web包（V9.0+）

​ a、web包（V9.0+）默认显示企业账户输入框（非必填）；

​ b、进行web包打包，环境变量 **“VUE\_APP\_BUSINESS\_NAME” : “”**，配置为空；

​ 则登录界面显示空内容的企业账户输入框。

2、web端效果展示

![](http://apaas.wxchina.com:8881/wp-content/uploads/businessname1.png)

**二、 场景二：隐藏登录界面企业账户输入框**

1、配置方式：web包（V9.0+）  
a、进行web包打包，环境变量 **“VUE\_APP\_BUSINESS\_NAME” : “测试企业”**，配置不为空；  
则登录界面不显示企业账户输入框，但默认以环境变量配置的企业名请求企业信息。

备注：上线生产环境需要确保打包配置的环境变量-企业信息名正确。

​  
2、web端效果展示：

![](http://apaas.wxchina.com:8881/wp-content/uploads/businessname2.png)

# 分享事件（转PDF下载）

### 版本要求：

​ web包（V9.1+）

**简述：**

web端分享事件主要用于生成PDF文件，适用场景为分享事件+协议富文本控件实现合同协议编辑生成pdf下载。

分享事件目前最佳实践是搭配协议富文本控件使用。

**场景一：合同协议生成场景**

1、 IDE配置协议富文本+分享事件

分享事件配置‘**内容提供者**’字段，选中**表单-协议富文本控件**

![](http://apaas.wxchina.com:8881/wp-content/uploads/share1.png)

2、web端展示效果

![](http://apaas.wxchina.com:8881/wp-content/uploads/share2.png)

![](http://apaas.wxchina.com:8881/wp-content/uploads/share3.png)

# InfoTable 控件

* 信息表格，专门用于web端数据信息的显示和管理使用的。
* 默认支持排序（图片列不支持排序），支持刷新，显示列编辑，列分组，支持跨页勾选。
* 支持设置分页大小（目前默认提供10，20，50，100这四个选项）

![](http://apaas.wxchina.com:8881/wp-content/uploads/infotable.png)

## 协议

```
{
    // 表格信息区域
    "type": "infotable",
    "code": "ctrlcode_table_storelist",
    "checkable": "1",
    "datastructure": {
        "id": "id"
    },
    "cols": [
        {
            "code": "col_code_1",
            "type": "tablecell",
            "name": "col1",
            "width": "300",
            "style": "text"
        },
        {
            "code": "col_code_2",
            "type": "tablecell",
            "name": "col2",
            "width": "300",
            "style": "number"
        },
        {
            "code": "col_code_3",
            "type": "tablecell",
            "name": "col3",
            "width": "400",
            "style": "link"
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
            "disabled": "le:{checkednumber}==0",
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
            "disabled": "le:{checkednumber}!=1",
            "functioncode": "",
            "eventlist": [
                {
                    "trigger": "onclicked",
                    "handler": "handler_stop"
                }
            ]
        }
    ],
    "rowoperations": [
        {
            "text": "编辑",
            "icon": "",
            "onclick": "handler_edit",
            "disabled": "",
            "functioncode": "24324324324324"
        },
        {
            "text": "删除",
            "icon": "",
            "onclick": "handler_del",
            "disabled": "1",
            "functioncode": ""
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
        }
    ],
}
```

## 属性说明

### checkable

可勾选，用于确定是否可以勾选行。

默认值为 1，表示可勾选

### datastructure

数据结构，目前需要配置用于唯一标识数据的id字段。

* id

  必填，用于指定数据的主键字段，如果没有配置会让跨页勾选失效

### guidecols

先导列，在此处配置用于标识行数据的关键列。

配置在先导列的列，不能被隐藏，不能调整顺序，不能放入 groupcols 中的其他分组里。

* frozen

  冻结，用于指定是否冻结先导列，默认值为 `1` ，需要冻结

* merged

  合并，用于指定是否合并先导列的单元格，默认为 `0` ，不合并

  合并功能会降低表格性能，特别是分页数据量大的时候

* cols

  先导列所包含的具体的列code的集合

> 先导列不支持表格个性化的编辑，也就是说不支持列隐藏，也不支持分组和顺序的调整

### groupcols

默认列分组，使用配置方式对列进行分组。

分组的列会出现二级表头，并且支持收缩合并的列。

* title

  二级表头的标题

* cols

  改分组包含的列的code的集合。

  在显示的时候，组内的列会按该值内的顺序依次放置，同时该组作为整体会放置在其包含的第一个列在 cols 属性中原本所在的位置。

### cols

内容列，只能配置 `tablecell` 控件，具体参看 TableCell 协议

### operations

表格操作，用于配置在表格左上方的一排操作按钮。

* text，icon

  与 button 控件的相应属性功能一致，不过必须配置图标+文字。

* functioncode

  功能点，如果用户没有该功能点，将直接禁用该按钮。

* disabled

  是否可用，可以配置逻辑表达式或者UIFlycode，可以动态的决定按钮对该行是否可用，不可用的按钮会置灰并不能点击

  目前只支持两个简单的表达式，就是通过判断勾选行的数量来决定按钮是否可用，示例如下：

  ```
  // 有勾选才起效的按钮
  le:{checkednumber}==0
  // 只能处理一条勾选数据的按钮
  le:{checkednumber}!=1
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

  是否可用，可以配置逻辑表达式或者UIFlycode，逻辑表达式暂不支持获取行内的值

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

该事件会更新 `checkednumber` 值，该值可以作为事件变量上下文获取到。

## 合并单元格的相关说明

* 关于性能

  合并单元格会导致表格渲染的性能大幅降低，每页数据量不超过50条。

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

  合并列不会合并勾选框

* 数据传参

  由于数据格式与普通的表格没有区别，且可录入的控件只能放置在不能合并的列中，因此数据提交的规则无需做特殊的处理。

  唯一需要注意的是，如果将按钮配置到合并的单元格中，此时点击按钮所需要传递的数据为该合并单元格中实际包含的第一行的数据。

## UIFlycode 支持

|方法|简要说明|实现情况|
|---|---|---|
|getInScope|获取指定范围内的数据|已经实现|
|getInScopeSerialized|返回 getInScope 的序列化数据|已经实现|
|getColByName|获取指定名字的列控件对象ArrayColCtrl|暂未实现|

# TableCell 控件

表格单元格控件，放置在 `infotable` 控件内

```json
{
    "code": "",
    "name": "",
    "type": "tablecell",
    "style": "",
    "title": "负责人",
    "width": "",
    "sort": "0",
    "hidden": "",
    "onclick": "eventcode", // style == link 时才有
    "options": [ // style == tags 时才可能有（标签也支持无options的情况，具体参看下方属性说明）
        {
            "key": "1",
            "text": "待拜访",
            "icon": "",
            "color": "red"
        }
    ]
}
```

## 属性说明

### code&name

与普通控件的作用一致，可以用于值绑定或者是flycode获取控件。

### title

标题，将会作为列标题显示在列头，对齐方式与内容一致

### width

该控件不支持flex相关属性配置，不同style的样式有一个默认宽度（参看下方），也可以直接配置一个指定宽度的值

不过实际的显示宽度将由父控件决定，例如有可以手动调节宽度，或者可以根据空白自动分配更多的宽度。

### sort

支持排序，bool，默认值为 `0`，不支持排序。

排序时把 `name` 的值作为 `__sorting.key` 传递给接口

### style

显示样式，控制单元格的显示样式，同时也决定单元格数据的处理方式，支持以下取值

|取值|说明|默认宽度|
|---|---|---|
|text|文本，默认值|140|
|number|数字，右对齐|100|
|date|日期|100|
|datetime|时间|140|
|address|地址|300|
|link|链接|140|
|image|图片|80|
|tags|标签|100|
|sets|选项集|200|
|progress|进度条|140|
|progresscircle|进度圆环|80|
|trendstatus|趋势状态|100|

具体的相关说明参看下方

### onclick

点击事件，当style == `link` 时，支持配置点击事件。

当点击事件触发时，会将当前控件自身的值传递到事件的上下文中作为事件参数。

具体的，当为link时，传递的值为当前控件的value；当为tags时，传递的是具体点击到的某个option值的key值。

## 样式详解

### image

图片，支持显示多张缩略图，点击后可以查看大图，宽度不够时直接截断图片。

### text

文字，普通文字，左对齐，宽度不够时打点

### number

数字，右对齐，默认显示千分位分隔符

### date & datetime

日期时间，用于将时间戳转换为时间显示

### link

链接，点击可以触发对应的事件

### tags

标签，支持显示图标或者文字，主要对应于 `dynamictext` 和 `标签控件` 的值。

这种样式可以配置options属性(与`dynamictext` 控件的options属性一致)，此时会根据赋值的key值进行匹配，然后显示对应的text或者icon

也可以不配置 options 属性，此时需要赋值提供完整选项信息

```json
{
  "options": [
    {
      "key": "1",
      "text": "待拜访",
      "icon": "",
      "color": "red"
    }
  ]
}
```

可以接受的值的格式如下：

```
// 单值 + 有options属性
"1"

// 单值 + 无options属性，json对象字符串
{
  "key": "1",
  "text": "待拜访",
  "icon": "",
  "color": "red"
}

// 多值 + 有options属性，json对象字符串
["1"]

// 多值 + 无options属性，json对象字符串
[{
  "key": "1",
  "text": "待拜访",
  "icon": "",
  "color": "red"
}]
```

显示规则如下：

1. 有icon，显示icon，鼠标移到icon上时弹出小框显示text。
2. 无icon，直接显示text。
3. icon和text的颜色由color决定
4. bgcolor固定为透明度为10%的color

### sets

用于显示选项集，只是单存显示text，多个选项之间以空格分隔

支持以下值格式：

```json
[{ "key": "1", "text": "待拜访" }]
```

### address

地址，专门用于显示地址，当有经纬度信息时可以弹出地图显示

### progress & progresscircle

进度条，接受一个浮点数，如 `0.7` ，代表 `70%`

### trendstatus

趋势状态，接受的值结构如下：

```json
{
  "text": "1,024",
  "trend": "up"
}
```

* text

  代表需要显示的文本

* trend

  代表趋势，有 `up` , `steady`, `down` 三种取值，分别对应 上升，不变，下降三种状态。空值时代表不变。