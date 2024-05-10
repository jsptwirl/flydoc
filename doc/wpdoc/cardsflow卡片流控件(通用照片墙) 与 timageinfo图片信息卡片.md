---
title: cardsflow卡片流控件(通用照片墙) 与 timageinfo图片信息卡片
date: 2020-10-09T11:54:50
---

# cardsflow卡片流控件(通用照片墙) 与 timageinfo图片信息卡片

卡片流是以卡片形式来显示一组信息的控件，支持卡片内容自定义（目前只支持一个卡片模板控件：timageinfo）。  
其用法与其他的数组型控件基本一致，支持勾选，支持点击，支持数据分页。

此控件开发用来替换之前的二开照片墙控件，更加通用。

### 效果图

![](http://apaas.wxchina.com:8881/wp-content/uploads/cardsflowWeb-1.png)

### 协议

```json
{
    "type": "cardsflow",
    "code": "cardsflow-123456",
    "eventlist": [
        {
            "trigger": "onload",
            "handler": "handle-onload2"
        },
        {
            "trigger": "onloadmore",
            "handler": "handle-onload2"
        },
        {
            "trigger": "onchecked",
            "handler": "handle-onchecked"
        },
        {
            "trigger": "onclicked",
            "handler": "handle-onclicked"
        }
    ],
    "checkable": "1",
    "height": "",
    "title": "卡片流",
    "flex": "1",
    "cards": {
        "type": "card",
        "code": "card-123456",
        "eventlist": [],
        "width": "20%",
        "content": [
            {
                "type": "timageinfo",
                "code": "timageinfo-123456",
                "eventlist": [],
                "name": "",
                "value": "",
                "title": "图片信息",
                "aspectratio": "2",
                "displaymode": "aspectfill",
                "detailcount": "2",
                "enlargeable": "1"
            }
        ]
    }
}
```

#### checkable

是否可以选择，默认值为1，表示可以选择。  
当支持勾选时，如果 onclicked 事件为空，则点击整个卡片区域均能勾选；否则，点击勾选区域触发勾选，点击卡片区域触发点击。

#### cards

卡片内容定义区域，cards本身相当于一个layout，不过目前只支持设置固定值的宽度。卡片的宽度不能小于100。  
卡片的高度默认根据其内容决定，由于目前只接受配置一个图片信息控件，因此就是由该控件来决定卡片高度。

### cardsflow 取值赋值

取值赋值方式与普通的数组控件类似。

![](http://apaas.wxchina.com:8881/wp-content/uploads/timageinfo2.png)

```json
{
    ...
    "setter": [
        {
            "name": "params2",
            "datatype": "1",
            "ctrlcode": "cardsflow-123456",
            "properties": [
                {
                    "name": "cardsinfo",
                    "ctrl": {
                        "code": "",
                        "component": ""
                    }
                },
                {
                    "name": "proimg",
                    "ctrl": {
                        "code": "timageinfo-123456",
                        "component": "photo"
                    }
                },
                {
                    "name": "proname",
                    "ctrl": {
                        "code": "timageinfo-123456",
                        "component": "title"
                    }
                },
                {
                    "name": "phone",
                    "ctrl": {
                        "code": "timageinfo-123456",
                        "component": "detail1"
                    }
                },
                {
                    "name": "address",
                    "ctrl": {
                        "code": "timageinfo-123456",
                        "component": "detail2"
                    }
                }
            ]
        }
    ]
}
```

### timageinfo 图片信息卡片

专门用于以卡片形式展现图片及其附加信息的一个控件，目前可用于cardsflow，或者一个layout中。

### 效果图

![](http://apaas.wxchina.com:8881/wp-content/uploads/timageinfo.png)

### 协议

```json
{
    "type": "timageinfo",
    "code": "timageinfo-123456",
    "eventlist": [],
    "name": "图片信息",
    "value": "",
    "title": "图片信息",
    "aspectratio": "2",
    "displaymode": "aspectfill",
    "detailcount": "2",
    "enlargeable": "1"
}
```

#### aspectratio

图片区域宽高比，默认值为1

#### displaymode

|取值|说明|
|---|---|
|fill|拉伸图片，完整显示图片并充满显示区域，默认值|
|aspectfill|保持宽高比拉伸图片，需要充满显示区域，同时居中显示|
|aspectfit|保持宽高比拉伸图片，需要完整显示图片，同时居中显示|

#### detailcount

用于指定附加文字信息的数量，控件会根据该数量来，默认值为2，最多为6

#### enlargeable

是否能显示大图，默认为 1，如果可以显示，则点击图片区域后可以全屏显示大图。  
此时如果有点击事件，则只能在文字区域触发点击。

#### component 值选项

图片信息卡片作为一个控件，自身支持以下值选项进行赋值和取值

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

### timageinfo 取值赋值

可用 flycode 对整个控件进行整体取值赋值，数据格式为所有 component 值选项集合而成的对象字符串。

```js
// flycode赋值
Page.getCtrl('图片信息').value = JSON.stringify({
    photo: 'http://www.xx.com/xxx.jpg',
    title: '华润万家',
    subtitle: '华润',
    time: '1601199258859',
    detail1: '020-1111111',
    detail2: '广东省天河区体育西路'
})
```

亦可用 setter 协议对 component 值选项进行赋值和取值。

![](http://apaas.wxchina.com:8881/wp-content/uploads/timageinfo2.png)

```json
{
    ...
    "setter": [
        {
            "name": "params2",
            "datatype": "1",
            "ctrlcode": "cardsflow-123456",
            "properties": [
                {
                    "name": "cardsinfo",
                    "ctrl": {
                        "code": "",
                        "component": ""
                    }
                },
                {
                    "name": "proimg",
                    "ctrl": {
                        "code": "timageinfo-123456",
                        "component": "photo"
                    }
                },
                {
                    "name": "proname",
                    "ctrl": {
                        "code": "timageinfo-123456",
                        "component": "title"
                    }
                },
                {
                    "name": "phone",
                    "ctrl": {
                        "code": "timageinfo-123456",
                        "component": "detail1"
                    }
                },
                {
                    "name": "address",
                    "ctrl": {
                        "code": "timageinfo-123456",
                        "component": "detail2"
                    }
                }
            ]
        }
    ]
}
```