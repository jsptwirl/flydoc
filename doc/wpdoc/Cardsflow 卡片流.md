---
title: Cardsflow 卡片流
date: 2020-09-27T11:07:50
---

# Cardsflow 卡片流

卡片流是以卡片形式来显示一组信息的控件，支持卡片内容自定义（目前只支持一个卡片模板控件：timageinfo）。

其用法与其他的数组型控件基本一致，支持勾选，支持点击，支持数据分页（目前建议分页大小60），

手机端示意图，手机端没有页码  
  
![](http://apaas.wxchina.com:8881/wp-content/uploads/cardsflowMobile.png)  
  
web端，支持页码，支持当页全选，暂时不支持跨页勾选和查看勾选项  
![](http://apaas.wxchina.com:8881/wp-content/uploads/cardsflowWeb.png)

分页大小建议为60，支持依据控件宽度和卡片的宽度自行按需调整分页数量  
分页配置与其他数组型控件一致，配置数据请求事件 ‘每页显示数’即可

|列数|行数|手机端|web端|
|---|---|---|---|
|1|60|支持||
|2|30|支持||
|3|20|支持|支持|
|4|15||支持|
|5|12||支持|
|6|10||支持|

## Protocol

```json
{
    "type": "cardsflow",
    "code": "cardlistcode",
    "checkable": "1",
    "cards": {
        "width": "180/20%",
        "type": "card",
        "content": [
            {
                "type": "timageinfo",
                "code": "timageinfo_code",
                "style": "1",
                "aspectratio": "1",
                "displaymode": "fill",
                "detailcount": "2",// 0 ~ 6
                "enlargeable": "1"
                "watermarkcomposite": ""
            }
        ]
    },
    "eventlist": [
        {
            "handler": "",
            "trigger": "onload"
        },
        {
            "handler": "",
            "trigger": "onloadmore"
        },
        {
            "handler": "",
            "trigger": "onchecked"
        },
        {
            "handler": "",
            "trigger": "onclicked"
        }
    ]
}
```

### checkable

是否可以选择，默认值为1，表示可以选择。

当支持勾选时，如果 onclicked 事件为空，则点击整个卡片区域均能勾选；否则，点击勾选区域触发勾选，点击卡片区域触发点击。  
  
![](http://apaas.wxchina.com:8881/wp-content/uploads/CardArea.png)

### cards

卡片内容定义区域，cards本身相当于一个layout，不过目前只支持设置固定值的宽度。卡片的宽度不能小于100。

卡片的高度默认根据其内容决定，由于目前只接受配置一个图片信息控件，因此就是由该控件来决定卡片高度。

## timageinfo 图片信息卡片

专门用于以卡片形式展现图片及其附加信息的一个控件，目前可用于Cardsflow，或者一个Layout中  
  
![](http://apaas.wxchina.com:8881/wp-content/uploads/ctimageinfo.png)

### aspectratio

图片区域宽高比，默认值为1

### displaymode

|值|含义|
|---|---|
|fill|拉伸图片，完整显示图片并充满显示区域，默认值|
|aspectfill|保持宽高比拉伸图片，需要充满显示区域，同时居中显示|
|aspectfit|保持宽高比拉伸图片，需要完整显示图片，同时居中显示|

### detailcount

用于指定附加文字信息的数量，控件会根据该数量来，默认值为2

### enlargeable

是否能显示大图，默认为 `1`，如果可以显示，则点击图片区域后可以全屏显示大图。

> 此时如果有点击事件，则只能在文字区域触发点击

### Component

图片信息卡片作为一个控件，自身支持一下值选项进行赋值和取值

|name|含义|
|---|---|
|photo|图片名|
|title|标题|
|subtitle|副标题|
|time|时间（只支持时间戳的值，固定的格式化方式: 2019-10-22 15:22:37）|
|detail1|详细信息1|
|detail2|详细信息2|
|detail3|详细信息3|
|detail4|详细信息4|
|detail5|详细信息5|
|detail6|详细信息6|

## 赋值

赋值方式与普通的数组控件类似，此处只使用了一个模板控件进行赋值。

```json
"setter": [
    {
        "name": "kx_store",
        "datatype": "1",
        "ctrlcode": "cardlistcode",
        "properties": [
            {
                "name": "storeid",
                "ctrl": {
                    "code": "",
                    "component": ""
                }
            },
            {
                "name": "storephoto",
                "ctrl": {
                    "code": "ct_imageinfo_code",
                    "component": "photo"
                }
            },
            {
                "name": "storename",
                "ctrl": {
                    "code": "ct_imageinfo_code",
                    "component": "title"
                }
            },
            {
                "name": "phonenum",
                "ctrl": {
                    "code": "ct_imageinfo_code",
                    "component": "detail1"
                }
            },
            {
                "name": "contacter",
                "ctrl": {
                    "code": "ct_imageinfo_code",
                    "component": "detail2"
                }
            }
        ]
    }
]
```

# UIFlycode 支持

|方法|简要说明|实现情况|
|---|---|---|
|getInScope<font>\*</font>|获取指定范围内的数据|web端 v9.7.1支持|
|getInScopeSerialized<font>\*</font>|返回 getInScope 的序列化数据|web端不支持|
|getFocusRow|获取数组型控件的焦点行控件|web端 v9.7.1支持|
|getAllRows|获取数组型控件中所有所有的行控件|web端 v9.7.1支持|
|getCheckedRows|获取数组型控件中所有被勾选的行控件|web端 v9.7.1支持|
|reload|重新设置全部数据|web端不支持|

> <font>\*</font> 由于只支持只读的控件配置，因此不能使用modified作为取值范围；而由于数据是真分页的，因此使用 all 来获取数据是，获取到的是当前页的全部数据，而不是全部页的数据。

# 内部可拖拽控件支持

timageinfo（图片信息卡片）/ （如需要展示image控件效果，不配置文本内容即可）

button（按钮）

icon（图标）

text（文本）

dynamictext（动态文本）

link(链接按钮)