---
title: TableCell 表格单元格
date: 2020-05-20T14:36:17
---

# TableCell

表格单元格控件，只能放置在 `infotable` , `editortable` 控件内。

```json
{
    "code": "",
    "name": "",
    "type": "tablecell",
    "style": "",
    "title": "负责人",
    "value": "",
    "width": "",
    "sort": "0",
    "hidden": "",
    "watermarkcomposite": "",
    "watermarkstyle": "",
    "iswarp": "0",
    "options": [     // style == tags 时才可能有（标签也支持无options的情况，具体参看下方属性说明）
        {
            "key": "1",
            "text": "待拜访",
            "icon": "",
            "color": "red"
        }
    ],
    "tags": [   // style == image 时才可能有，功能与 photo 控件的tags属性一致
        {
            "key": "duplicating",
            "text": "翻",
            "icon": "",
            "color": "white",
            "bgcolor": "red"
        }
    ],
    "eventlist": [
        {
            "trigger": "onclicked",  // style == link or image 时才有效
            "handler": "eventcode"
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

支持排序，bool，默认值为0，不支持排序。

如果支持排序的话，同时需要设置该列的name值，用于排序的key值。

兼容性：  
| 控件 | 是否支持 |  
| --------------———— | ------------|  
| 信息表格（infotable） | 支持 |  
| 编辑表格（editortable）| 不支持 |

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
|attachments|附件|200|
|tags|标签|100|
|sets|选项集|200|
|progress|进度条|140|
|progresscircle|进度圆环|80|
|trendstatus|趋势状态|100|

具体的相关说明参看下方

### iswrap

web v9.7.2+支持

是否换行，默认为'0'，表示不换行

显示样式为text或link时才有效

单元格大小(infotable rowsize)对应的换行数：

* small(小)：2行
* medium(中)：3行
* large(大)：4行

### tags

图片标签，当style为image时支持该属性配置。

该属性的具体含义和用法，请参看 [photo控件中tags属性](http://apaas.wxchina.com:8881/2020/09/27/photo) 的说明

### onclick

点击事件，当style 为以下值时支持配置点击事件：

`link` , `image`, `progress`, `progresscircle` , `trendstatus`

当点击事件触发时，会将当前控件自身的值传递到事件的上下文中作为事件参数。

具体的，当为link时，传递的值为当前控件的value

当image时，如果配置了该事件，点击图片就会触发该事件，而不是显示大图

## 样式详解

![](http://apaas.wxchina.com:8881/wp-content/uploads/tablecell1.png)

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

![tablecell2](http://apaas.wxchina.com:8881/wp-content/uploads/tablecell2.png)

### tags

标签，支持显示图标或者文字，主要对应于 `dynamictext` 和 `标签控件` 的值。

这种样式可以配置options属性(与`dynamictext` 控件的options属性一致)，此时会根据赋值的key值进行匹配，然后显示赌赢的text或者icon

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

```json
// 单值 + 有options属性
"1"

// 单值 + 无options属性，json对象字符串
"{\
  \"key\": \"1\",\
  \"text\": \"待拜访\",\
  \"icon\": \"\",\
  \"color\": \"red\"\
}"

// 多值 + 有options属性，json对象字符串
"[\"1\"]"

// 多值 + 无options属性，json对象字符串
"[{ \
  \"key\": \"1\",\
  \"text\": \"待拜访\",\
  \"icon\": \"\",\
  \"color\": \"red\"\
}]"
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
"[{ \"key\": \"1\", \"text\": \"待拜访\" }]"
```

![tablecell3](http://apaas.wxchina.com:8881/wp-content/uploads/tablecell3.png)

### address

地址，专门用于显示地址，当有经纬度信息时可以弹出地图显示

![](http://apaas.wxchina.com:8881/wp-content/uploads/tablecell_chart.png)

### progress & progresscircle

进度条，接受一个浮点数，如 `0.7` ，代表 `70%`，

大于1时，进度条保持在100%状态；小于0时，进度条保持在0%状态。文字部分，最多保留四位有效数字，超出部分会忽略。

### trendstatus

趋势状态，接受的值结构如下：

```json
"{ \
  \"text\": \"1,024\",  \
  \"trend\": \"up\" \
}"
```

* text

  代表需要显示的文本

* trend

  代表趋势，有 `up` , `steady`, `down` 三种取值，分别对应 上升，不变，下降三种状态。空值时代表不变。