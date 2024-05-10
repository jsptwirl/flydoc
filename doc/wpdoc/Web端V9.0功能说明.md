---
title: Web端V9.0功能说明
date: 2020-07-10T15:38:38
---

# 时间函数表达式

### day，month，year，week，quarter(季度)

这5个函数能接受一个或者两个参数，根据情况用于时间控件和时间范围控件的默认值。

举例： 假如目前时间为 2020-03-20 18:00:00

#### 1个参数的情况 一般用于时间控件

```
year(0) => 2020-03-20 18:00:00
quarter(0) => 2020-01-01 00:00:00
month(0) => 2020-03-01 00:00:00
week(0) => 2020-03-20 18:00:00
day(0) => 2020-03-20 18:00:00
```

月和季度的单个参数，会取首日凌晨，而不是当时的时间，因为月份比较特殊。  
比如现在是 2020-03-31 14:20:00  
那么month(1)按照单纯加减一个月来说，那就是 2020-04-31 14:20:00  
但4月份是没有31号的，所以月份一般取首日凌晨 2020-04-01 00:00:00

#### 2个参数的情况 一般用于时间范围控件

两个参数表示取时间范围区间，左区间表示取该时间类型第一天凌晨，右区间取该时间类型最后一天最后一秒。

```
year(0,1) => 2020-01-01 00:00:00,2021-12-31 23:59:59
quarter(0,1) => 2020-01-01 00:00:00,2021-06-30 23:59:59
month(0,0) => 2020-03-01 00:00:00,2020-03-31 23:59:59
week(0,0) => 2020-03-16 00:00:00,2021-03-22 23:59:59
day(-1,1) => 2020-03-19 00:00:00,2020-03-21 23:59:59
```

### startMonth，endMonth，startYear，endYear

这4个函数只能接受一个参数，也就是说他们不能用于时间范围控件，可用于时间控件的value默认值，还有时间控件和时间范围控件的最大最小值。

```
startMonth(0) => 2020-03-01 00:00:00
endMonth(0) => 2020-03-31 23:59:59
startYear(0) => 2020-01-01 00:00:00
endYear(0) => 2020-12-31 23:59:59
```

### datetime，daytime，dayStandardTime

这3个函数返回时间戳。

```
datetime() => 返回当前时间戳
daytime() => 返回今天凌晨时间戳
dayStandardTime() => 返回今天标准时间戳(8点)
```

# image图片控件支持点击事件和缩略图

用于显示图片的控件，可以用于展示产品示意图，或者显示头像等，只接受一个图片地址，自动下载显示，并能根据名称自动缓存图片。  
web端的image图片控件，之前是默认点击显示大图，现在支持可选配置，除了原有显示大图的功能之外，还可以选择配置点击事件。

### 控件协议

```json
{
    "type": "image",
    "code": "image-1680406750075855",
    "eventlist": [
        {
            "trigger": "onclicked",
            "handler": "1229229678393430110"
        }
    ],
    "name": "图片",
    "value": "http://xxxxxx.png",
    "title": "图片",
    "enlargeable": "0",
    "thumbenable": "0",
    "width": "80",
    "height": "80"
}
```

### value

支持两种格式：

* 完整路径，根据完整的路径直接下载显示图片
* 平台规定的图片地址的json字符串，如果是字符串数组，默认显示第一张

### flycode操作赋值

```
Page.getCtrl('图片').value = 'http://xxxxxx.png'
Page.getCtrl('图片').value = '{"source":"xxx.png","datetime":"xxx"}'
Page.getCtrl('图片').value = '[{"source":"xxx.png","datetime":"xxx"},{"source":"xxx.jpg","datetime":"xxx"}]'
```

### enlargeable

是否能显示大图，默认为 0，如果可以显示，则点击后可以全屏显示大图，同时会屏蔽 onclicked 事件。

![](http://apaas.wxchina.com:8881/wp-content/uploads/image1.png)

### thumbenable 缩略图

image 控件之前默认是显示缩略图，点击或者鼠标移上去才会显示大图。现已新增了 thumbenable 是否显示缩略图属性，规则如下

* 如果 thumbenable = '1'，会先加载缩略图，此时如果 enlargeable = '1'，那么将不会自动下载大图，需要点击查看时下载原图，如果 enlargeable = '0'，将在缩略图加载后，再加载原图替换掉缩略图，图片会有一个从模糊到清晰的过程。
* 如果 thumbenable = '0'，则不加载缩略图，直接下载显示原图。

### image图片控件与photo拍照控件的区别

* image图片控件只支持显示单张图片，不支持上传图片，photo拍照控件可支持上传和显示多张图片
* image图片控件支持配置点击事件，photo拍照控件暂不支持，默认点击显示大图
* image图片控件可定义显示的图片宽高，photo拍照控件不支持定义显示的图片宽高

![](http://apaas.wxchina.com:8881/wp-content/uploads/image.png)

# 组织管理页面改造成可配置化表单

之前的组织管理页面是用二开页面实现，实施人员不可修改，现已新增一个可配置表单页面，支持实施修改。

**注意事项：该功能默认不开启，如果需要可按以下步骤操作**

1. 确认web端引擎已升级到至少V9.0.0版本(登录页面底部可看到当前引擎版本号)
2. 确认要修改的项目是基于V8.5.1-base产品版本开出的项目(在IDE右上角，头像左边，可看到项目名称和产品版本号)
3. 确认业务领域中必须存在以下6个接口(已统一在V8.5.1-base种子库部署，一般不需要多余操作，只需确认接口存在)：
   * 组织查询(共用)
   * 获取子组织列表
   * 获取组织信息\_组织编码查询
   * 获取组织类型列表
   * 组织排序
   * 职位查询
4. 把原二开表单替换成新的可配置表单，方式如下：
   * 下载新的页面表单协议[【组织管理-可配置】](http://apaas.wxchina.com:8881/wp-content/uploads/业务UI-组织管理-可配置.zip)，在"业务UI"中导入，导入后，搜索"组织管理-可配置"，确保页面表单存在，则导入成功。
   * 找到新旧两个表单的协议(原表单名称：组织管理plus，新表单名称：组织管理-可配置)
   * 把两个表单协议copy出来，然后把新表单协议pageinfo里面的code title pagedescr directorytypecode替换成旧表单的，再把整理好的协议，覆盖旧表单。

![](http://apaas.wxchina.com:8881/wp-content/uploads/erkai.png)

# 友好报错提示

针对一些实施人员配错或者配置不规范的场景，在 DevTools 控制台的 Console 页签给出相应的提示，同时不影响后续代码执行，这样可以让实施人员知道是哪个地方的配置问题，以便做出相应的修改。

### 支持场景

* 「下拉控件、树控件」这两个有数据源绑定的控件，数据源 key 必须是 string 类型不然会报错，实施接口偶尔不注意会输出 number 类型，如果检测到会给出提示。
* 「地址控件，图片控件」是接受 json 字符串的控件，前端一般用 JSON.parse(String) 方法格式化，如果后端返回数据不符合要求，会给出对应的报错提示。
* flycode 使用 Model.request 方法请求接口时，如果请求的接口没引入，会给出对应的提示。

# 数据字典支持添加非同级下的同名字段

管理员 -> 系统 -> 数据字典页面，在添加数据字典时，之前是不允许添加非同级下的同名字段的字段的，现在已经支持。

### 注意

如果测试不生效，请确认以下内容

* web引擎是否已经升级到V9.0.0版本
* 该功能需要后端接口支持，确认后端服务是否已经更新

# aiimage控件

基于ai数据，用于展示ai图片处理结果的二开控件。

### 协议

```js
{
    "type": "aiimage"
    "code": "xxxxx",
    "flex": "1",
    "title": "ai照片",
    "width": "300", // 必填
    "height": "400", // 必填
    "name": "ai绘图",
    "value": ""
}
```

### UIflycode 赋值

```js
let json = {
    // picUrl除了可以是对象形式的数据，还接受 url 形式的图片地址
    "picUrl": {
        "datetime": "xxxx",
        "source": "xxxx"
    },
    // 注意这里 locations 是二维数组
    "locations": [
        [
            {
                "text": 'SKU198%',
                "textColor": '#000',
                "lineColor": '#F65A54B2',
                "location": {
                    'ymin': 0.01825116,
                    'xmin': 0.27823764,
                    'ymax': 0.4092496,
                    'xmax': 0.5716344
                }
            }
        ]
    ]
}
Page.getCtrl('ai照片').value = json
```

![](http://apaas.wxchina.com:8881/wp-content/uploads/aiimage.png)

# 关于导入导出服务说明

### 版本使用说明

​ 导入导出服务：v2.6.1 , 在IDEv2.8创建业务接口，选择行为类型：‘flycode接口’，按旧导出写业务逻辑

​ 导入导出服务：v2.8.0 , 在IDEv2.8创建业务接口，选择行为类型：‘导出’，按新导出规则写业务逻辑

# 表格（table)

## 1、业务场景描述

### （1）、该控件可适用的场景

​ 通用列表配置场景。

### （2）、该场景具体的示例

​ 不列举，可参考标准模块里面的列表表单。

## 2、详细说明

### （1）、控件的协议结构

```
{
    "type": "table",
    "code": "table-xxxxxxxxxxxxx",
    "eventlist": [],
    "name": "表格",
    "pageable": "0",
    "checkable": "0",
    "isradio": "0",
    "hiddenheader": "0",
    "editable": "0",
    "indexable": "0",
    "freezecol": "0",
    "personalizable": "0",
    "resizable": "0",
    "optimize": "0",
    "flex": "1",
    "mergeablecol": "",
    "statisticsrow": [],
    "rowoperations": [],
    "rows": {
        "code": "table-row",
        "type": "row",
        "flex": "1",
        "columnitems": [...//列控件配置],
        "width": "",
        "height": "",
        "linenumber": ""
    }
},
```

### （2）、控件的操作属性

|功能|功能描述|是否支持UIflycode控制|
|:---|---|---|
|隐藏 （hidden）|隐藏表格|√|
|只读 （readonly）||√|
|统计行数 （statisticsrow）|配置统计行|×|
|行操作 （rowoperations）|配置表格功能列表区的功能按钮|×|
|分页（pageable）|是否支持分页加载|×|
|选择行（checkable）|是否支持勾选行（出现勾选icon)|×|
|单选（isradio）|单选控制|×|
|启用自动序号（indexable）|控制是否出现自动序号列，列序号只对当前分页统计|×|
|个性化（personalizable）|（V9.0新增）控制是否启用用户级配置，一般是控件右上角出现设置icon|×|
|开启性能优化（optimize）|（V9.0新增）开启性能优化必须把列拖拽resizable配置为不起效，如需进一步提高渲染速度（需要确定数据的行高/行宽配置固定值）|×|
|支持列拖拽（resizable）|开启列宽拖拽效果，可以用户鼠标拖拽改变列宽的（默认开启，但配置开启性能优化后该功能将被屏蔽）|×|
|显示行数（rows/linenumber）|控制一行文本显示多少行，超过的部分用'…...'表示，文本必须支持鼠标悬浮显示title全文内容|×|
|行高度（rows/width）|（V9.0新增）控制行高度|×|
|行宽度（rows/height）|（V9.0新增）控制行宽度|×|
|双击编辑（editable）|（V9.0新增）开启双击可编辑功能，配置为编辑控件的列，非只读的正常状态下显示文本内容，双击切换为编辑状态|×|
|合并单元格（mergeablecol）|行合并，指定参与合并功能的列，由左边开始计数，需要符合合并规则的表格数据，不支持列合并|×|
|冻结列|需要在列控件指定是否冻结|×|

### （3）、控件效果（UI界面）

![控件显示效果](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%A1%A8%E6%A0%BC%E6%8E%A7%E4%BB%B6UI%E6%95%88%E6%9E%9C.png)

## 3、版本说明

web V8.5版本，IDE配置：普通表格（table) + 超级表格（spetable）

web V9.0版本， IDE配置：普通表格（table）（合并超级表格功能）

# 关于二开控件开发流程

> 我们提供脚手架的方式以供二开控件开发，便于可以即时预览调试。  
> 该功能基于后台V2.8服务，使用时请确认后台服务至少是V2.8版本。

## 脚手架代码仓库

```
> https://github.com/gorphensu/k100-web-native.git
```

## 脚手架使用方法以及二开控件编写流程

```
> 请查看上面仓库中的readme.md文件 [readme.md](https://github.com/gorphensu/k100-web-native/blob/master/README.md)
```

## 二开控件验证Demo为脚手架项目中的periodicpicker控件

## 二开控件代码包上架

1. 在脚手架根目录打开命令行，输入打包命令

```cmd
    npm run build or yarn build
```

1. 在bundle文件夹下会产生dist文件夹 以及 dist.zip压缩文件
2. 打开ide => 自定义扩展 => 自定义UI控件

**如下图：新建注册一个新的控件，注意控件名称需要与脚手架中的二开控件名称一致**

![register](http://apaas.wxchina.com:8881/wp-content/uploads/register.jpg)

1. 添加自定义属性，以供ide布局可以识别

![property](http://apaas.wxchina.com:8881/wp-content/uploads/property.jpg)

1. 二开控件代码包上传

![upload](http://apaas.wxchina.com:8881/wp-content/uploads/upload.jpg)

6.点击保存，完成！

# 周期选择控件

用于选择一个时间周期，例如：每月1号，每年10月3日早上8点，每天早上8:30等等

### UI示例

---

根据 combinedunit 所包含单位数量增减选择列

![demo1](http://apaas.wxchina.com:8881/wp-content/uploads/demo1.jpg)

![demo2](http://apaas.wxchina.com:8881/wp-content/uploads/demo2.jpg)

### 协议说明

```json
{
    "type": "periodicdicker",
    "combinedunit": "day-minute"
}
```

### 属性说明

* combinedunit 支持选择的最小时间和最大时间单位， 目前支持的单位组合有

|值|标题|取值范围|取值示例|显示示例|
|---|---|---|---|---|
|hour|时|0 - 23|16|每天下午4点|
|day|日期|1 - 31|16|每月16号|
|month|月|1 - 12|10|每年10月|
|hour-minute|时-分|hour: 0-23, minute 0- 59|8:30|每天早上8点30分|
|day-minute|天-分|day, hour, minute 取值范围同上|10 8:30|每月10号早上8点30|
|month-minute|月-分|month,day, hour, minute 取值范围同上|1-1 23:59|每年1月1号晚上11点59分|

> 所有单位为day的值，如果设置的值大于28时，需要进行特殊处理：
>
> 后台服务：当月的天数小于设置的值（例如设置为每月30号，但当前月为二月，只有28天），此时对应的业务逻辑需要自动将其处理为当月最后一天（也就是28号）。
>
> 前端界面：只要日期大于28，就需要给出提示

### 其他支持属性

> 控件为输入型控件，普通输入性控件需要的属性，都支持

* readonly
* required
* title
* titleflex
* titlewidth
* placeholder

### **由于该控件为二开方式开发，需要打包后在ide上注册并上传发布，具体方法请看上面二开控件具体开发流程**

# 关于流程配置化

### Approval List Action 获取审批列表行为

获取待办、已办列表的接口，该行为调用的接口已经对应的出入参约定与内建审批列表的数据获取一致

```
{
    "type": "af_getflowlist",
    "pagesize": "20",
    "querytype": "0",
    "querycondition": [
        {
            "name": "categoryname",
            "value": "",
            "ctrl": {
                "code": "",
                "component": ""
            }
        }
    ],
    "targetctrlcode": "order_list",
    "targetproperties": [
        {
            "name": "af_processinstancename",
            "ctrl": {
                "code": "name",
                "component": ""
            }
        }
    ]
}
```

* pagesize

  分页大小，默认为 20

* querytype

  请求的列表的种类

|值|含义|
|---|---|
|0|待办|
|1|已办|

* querycondition

  请求的附加条件，可以为空，表示没有附加搜索条件。

  支持的条件参数名称如下

|名称|含义|
|---|---|
|processinstancename|流程实例名|
|processdefinename|流程定义名称|
|applyusername|发起人|
|startdate|流程开始时间|
|enddate|流程结束时间|
|categorycode|分类的 code|
|categoryname|分类的名称|

* targetctrlcode

  请求回来的数据所赋值到的控件的 code，通常是一个列表控件

* targetproperties

  数据赋值所使用的属性映射关系，与 datarequest 的 setter 属性中 properties 的含义一致

### Request

POST API：***~/workflow/flow/getmyprocesslist***

```json
{
    "af_pageindex": 1, //页码
    "af_pagesize": 10, //页大小
    "af_querytype": 0 //查询类型，待办:0, 已办:1, 默认查待办
}
```

### Response

```json
{
    "resp_data": {
        "af_pagecount": 1, //总页数
        "af_pagesize": 10, //页大小
        "af_itemcount": 1, //记录总条数
        "af_items": [
            {
                "af_assigned": true, //    是否已设置处理人
                "af_processdefineid": "expenseflow:1:72504", //    流程定义Id
                "af_processinstanceid": "75001", //    流程实例Id
                "af_processinstancename": "小王的费用", //    流程实例名称
                "af_processdefinekey": "expenseflow", //    流程定义Key
                "af_processdefinename": "费用报销流程", //    流程定义名称
                "af_taskid": "75006", //    任务Id
                "af_taskkey": "usertask1", //    任务Key
                "af_taskname": "渠道业务员发起", //    任务名称
                "af_createtime": "2017-03-24 15:46:03", //    任务创建时间
                "af_applyusercode": "831025515799248802", //    流程发起人Id
                "af_applyusername": "渠道业务员", //  流程发起人姓名
                "af_applytime": "2017-03-24 15:46:03", //    流程发起时间
                "af_statusname": "待处理", //    状态
                "af_operator": "处理" // 处理
            }
        ]
    }
}
```

### 通过自定义业务逻辑实现流程列表

此场景针对系统内置的流程列表以及通过获取流程列表事件配置出来的场景不能满足的情况下，  
使用 datarequest 方法去对接流程业务引擎

实际项目使用案例协议如下：  
[流程.json](http://apaas.wxchina.com:8881/wp-content/uploads/流程协议.zip)

```json
{
    "code": "handler_loadlistdata",
    "desc": "表格-加载数据",
    "notice": "",
    "actions": [
        {
            "code": "handler_loadlistdata_action",
            "desc": "获取数据",
            "type": "datarequest",
            "logiccode": "1230773109758496865",
            "pagesize": "20",
            "queue": "0",
            "mode": "1",
            "getter": [
                {
                    "name": "act_flow_todo",
                    "datatype": "0",
                    "ctrl": {
                        "code": "filter-0511965012987131",
                        "scope": ""
                    },
                    "properties": [
                        {
                            "name": "af_processdefineid",
                            "value": "",
                            "ctrl": {
                                "code": "",
                                "component": ""
                            }
                        },
                        {
                            "name": "af_processdefinename",
                            "value": "",
                            "ctrl": {
                                "code": "textinput-5673640521497234",
                                "component": ""
                            }
                        },
                        {
                            "name": "af_processdefinekey",
                            "value": "",
                            "ctrl": {
                                "code": "",
                                "component": ""
                            }
                        },
                        {
                            "name": "af_processinstanceid",
                            "value": "",
                            "ctrl": {
                                "code": "textinput-8228277276765053",
                                "component": ""
                            }
                        },
                        {
                            "name": "af_processinstancename",
                            "value": "",
                            "ctrl": {
                                "code": "",
                                "component": ""
                            }
                        },
                        {
                            "name": "af_businesskey",
                            "value": "",
                            "ctrl": {
                                "code": "",
                                "component": ""
                            }
                        },
                        {
                            "name": "af_applyusercode",
                            "value": "",
                            "ctrl": {
                                "code": "",
                                "component": ""
                            }
                        },
                        {
                            "name": "af_applyusername",
                            "value": "",
                            "ctrl": {
                                "code": "textinput-9970547108705820",
                                "component": ""
                            }
                        },
                        {
                            "name": "af_taskid",
                            "value": "",
                            "ctrl": {
                                "code": "textinput-4747191947876117",
                                "component": ""
                            }
                        },
                        {
                            "name": "af_taskname",
                            "value": "",
                            "ctrl": {
                                "code": "textinput-0434212875621704",
                                "component": ""
                            }
                        },
                        {
                            "name": "af_taskkey",
                            "value": "",
                            "ctrl": {
                                "code": "textinput-0699550089794560",
                                "component": ""
                            }
                        },
                        {
                            "name": "af_createtime",
                            "value": "",
                            "ctrl": {
                                "code": "datepicker-9535929431542006",
                                "component": ""
                            }
                        },
                        {
                            "name": "af_assignee",
                            "value": "",
                            "ctrl": {
                                "code": "",
                                "component": ""
                            }
                        },
                        {
                            "name": "af_joinnode",
                            "value": "",
                            "ctrl": {
                                "code": "dropdownbox-1100935280458490",
                                "component": ""
                            }
                        }
                    ]
                }
            ],
            "setter": [
                {
                    "name": "act_flow_todo",
                    "datatype": "1",
                    "ctrlcode": "table-0788175700945577",
                    "properties": [
                        {
                            "name": "af_processdefineid",
                            "alias": "",
                            "ctrl": {
                                "code": "button-8051637382124566",
                                "component": ""
                            }
                        },
                        {
                            "name": "af_processdefinename",
                            "alias": "",
                            "ctrl": {
                                "code": "button-6341788758780350",
                                "component": ""
                            }
                        },
                        {
                            "name": "af_processdefinekey",
                            "alias": "",
                            "ctrl": {
                                "code": "text-2463735218339149",
                                "component": ""
                            }
                        },
                        {
                            "name": "af_processinstanceid",
                            "alias": "",
                            "ctrl": {
                                "code": "text-5219434242523555",
                                "component": ""
                            }
                        },
                        {
                            "name": "af_processinstancename",
                            "alias": "",
                            "ctrl": {
                                "code": "text-9552879854292958",
                                "component": ""
                            }
                        },
                        {
                            "name": "af_businesskey",
                            "alias": "",
                            "ctrl": {
                                "code": "",
                                "component": ""
                            }
                        },
                        {
                            "name": "af_applyusercode",
                            "alias": "",
                            "ctrl": {
                                "code": "text-5523651994405358",
                                "component": ""
                            }
                        },
                        {
                            "name": "af_applyusername",
                            "alias": "",
                            "ctrl": {
                                "code": "text-4240784642279043",
                                "component": ""
                            }
                        },
                        {
                            "name": "af_taskid",
                            "alias": "",
                            "ctrl": {
                                "code": "text-2760976520237795",
                                "component": ""
                            }
                        },
                        {
                            "name": "af_taskname",
                            "alias": "",
                            "ctrl": {
                                "code": "text-7541574214802060",
                                "component": ""
                            }
                        },
                        {
                            "name": "af_taskkey",
                            "alias": "",
                            "ctrl": {
                                "code": "text-6633925459374365",
                                "component": ""
                            }
                        },
                        {
                            "name": "af_createtime",
                            "alias": "",
                            "ctrl": {
                                "code": "datepicker-1797005506087554",
                                "component": ""
                            }
                        },
                        {
                            "name": "af_assignee",
                            "alias": "",
                            "ctrl": {
                                "code": "text-2284928283549117",
                                "component": ""
                            }
                        },
                        {
                            "name": "af_joinnode",
                            "alias": "",
                            "ctrl": {
                                "code": "dynamictext-8907599919616737",
                                "component": ""
                            }
                        },
                        {
                            "name": "af_applytime",
                            "alias": "",
                            "ctrl": {
                                "code": "datepicker-4610282947245904",
                                "component": ""
                            }
                        },
                        {
                            "name": "af_jumpintype",
                            "alias": "",
                            "ctrl": {
                                "code": "",
                                "component": ""
                            }
                        },
                        {
                            "name": "seq",
                            "alias": "",
                            "ctrl": {
                                "code": "text-0703134183092446",
                                "component": ""
                            }
                        },
                        {
                            "name": "status",
                            "alias": "",
                            "ctrl": {
                                "code": "text-0189570408661806",
                                "component": ""
                            }
                        }
                    ]
                }
            ],
            "lazyload": "",
            "condition": ""
        }
    ],
    "successhint": "",
    "condition": "",
    "key": "",
    "name": ""
}
```

返回的参数（必要）

* af\_processdefineid
* af\_processdefinename
* af\_processdefinekey
* af\_processinstanceid
* af\_processinstancename

### Approval Handle Action 处理审批行为 通过此行为可打开弹框显示审批详情 以及处理审批步骤

```json
{
    "type": "af_handleflow",
    "processinfo": [
        {
            "name": "af_processdefineid",
            "value": "",
            "ctrl": {
                "code": "",
                "component": ""
            }
        }
    ],
    "businesskey": "orderid" // 可选
    "param": {}          // 与link事件相同
}
```

* processinfo

  流程的基本信息，共有4个参数需要填写，而且是必须每个都要填写

|key|说明|
|---|---|
|af\_processdefineid|流程定义ID|
|af\_processinstanceid|流程实例ID|
|af\_taskid|任务ID|
|af\_taskkey|任务key|

* businesskey

  用于指定业务数据的主键的key，该行为会将从流程服务接口中获取到的业务主键，赋值给businesskey，并以传参形式传递给下一个页面。 web端不需要，因为会通过af\_processdefineid以及其他信息会去查找当前所属Key

# richtexteditor富文本编辑器

富文本编辑器，以HTML为基础，支持动态内容插入（普通文本，表格），并支持动态内容展示

```
// 协议
{
  'type': 'richtexteditor',
  'code': 'richtexteditor-8615494471377085',
  'useage': 'editor',
  'required': true,
  'readonly': false,
  'viewwidth': '600',
  'height': '600',
  'varsourcemap': [{
    'objname': 'rich_display_product',
    'objlabel': '陈列协议兑付产品',
    'objtype': 'array',
    'fields': [{ 'name': 'display_method', 'label': '兑付方式', 'type': 'text' }, {
      'name': 'productname',
      'label': '兑付产品',
      'type': 'text'
    }, { 'name': 'number', 'label': '兑付数量', 'type': 'text' }]
  }]
}
```

## 协议字段说明

### useage

|值|说明|
|---|---|
|editor|编辑器，表示当前控件用于编辑|
|viewer|查看器，表示当前控件用于查看文本，将会调用sourcelogic的接口进行**变量替换**|

1. 配置方式：编辑状态`useage:editor`，左边显示可选字段，右边为编辑区域，默认左右宽度比例为1：2

![useage:editor](http://apaas.wxchina.com:8881/wp-content/uploads/editor.png)

1. 配置方式：查看状态`useage:viewer`，生成变量替换后的内容并展示

![useage:viewer](http://apaas.wxchina.com:8881/wp-content/uploads/viewer.png)

### width

`width`宽度默认占满父容器

### readonly

编辑状态的编辑器支持只读模式（`readonly: true`），此时所有编辑选项均不可用

![readonly](http://apaas.wxchina.com:8881/wp-content/uploads/readonly.png)

### viewwidth

视图宽度，用于控制内容的显示宽度，默认值为600

![viewwidth](http://apaas.wxchina.com:8881/wp-content/uploads/viewwidth.png)

### varsourcemap

1. 变量来源，用于指定以 varsource 方式赋值的的数据的信息。
2. 用于指导 editor 状态下，变量选项的生成
3. 在 viewer 状态下，用作变量替换的指引
4. 该属性可以直接配置通过 varsourcemap component 进行赋值。

![varsource-editor](http://apaas.wxchina.com:8881/wp-content/uploads/varsource-editor.png)  
![varsource-viewer](http://apaas.wxchina.com:8881/wp-content/uploads/varsource-viewer.png)

## 值说明

### value

富文本编辑器内容值为其一个json字符串，其结构如下

```
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

flycode 赋值方法

```js
/// 使用 flycode 取值和赋值示例
/// 取值，与普通控件取值一致
var content = Page.getCtrl('富文本编辑器').value;

/// 赋值，与普通控件赋值一致
Page.getCtrl('富文本编辑器2').value = content;
```

### varsourcemap

varsourcemap 可通过 flycode 赋值更改

flycode 赋值方法

```js
/// 使用 flycode 进行变量来源赋值
/// 通过接口获取到一个变量集的字符串 sourcemap
let sourceMapSetter = CtrlValueSetter('varsourcemap');
Page.getCtrl('富文本编辑器').setValue(sourcemap, sourceMapSetter);
```

### varsource

变量来源，用于对该控件的变量数据源进行取值和赋值的key，使用方式是以 Component 的方式进行取值或者赋值

flycode 赋值方法

```js
/// 使用 flycode 进行变量来源赋值
/// 通过接口获取到一个变量集的字符串 sourcemap
let sourceMapSetter = CtrlValueSetter('varsource');
Page.getCtrl('富文本编辑器').setValue(sourcemap, sourceMapSetter);
```

# reorderlist 排序列表控件

用于对一组数据进行拖动排序的控件，单纯显示内容并排序

```
// 协议
{
    'type': 'reorderlist',
    'flex': '1',
    'indexable': '1',
    'eventlist': [
        {
            'trigger': 'onload',
            'handler': ''
        },
        {
            'trigger': 'onreordered',
            'handler': ''
        }
    ],
    'rows': {
        'type': 'row',
        'flexdirection': 'horizontal',
        'eventlist': [
            {
                'handler': 'handler_linkdetail',
                'trigger': 'onclicked'
            }
        ],
        'content': ['...']
    }
}
```

## 使用操作

![test1](http://apaas.wxchina.com:8881/wp-content/uploads/test1.png)  
![test2](http://apaas.wxchina.com:8881/wp-content/uploads/test2.png)

## 协议字段

### indexable

bool类型，是否支持自动序号，默认值为1，如果可以，则会在每一行显示一个自动序号，该序号列为自增的序号，从1开始计算。当进行拖动排序时，自动更新序号。  
在取值时，通过 \_\_autoindex 关键字作为name值，来获取该序号值。

### rows

与list控件的rows属性一致