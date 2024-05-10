---
title: photo（new2020.9）
date: 2020-09-27T11:12:10
---

# Photo

用于获取用户照片的控件，可以拍照或者从手机相册中选取， web端可以直接上传图片

同时也可以用来展示由用户上传的图片。

![photo1](http://apaas.wxchina.com:8881/wp-content/uploads/Photo_Plain.png)

![photo1](http://apaas.wxchina.com:8881/wp-content/uploads/Photo_Free.png)

## Protocol

```json
{
    "type": "photo",
    "code": "ctrl_photo_contractphoto",
    "title": "合同拍照",
    "maxnumber": "1",
    "compression": "2",
    "source": "0",
    "watermark": "fly:datetime()",
    "watermarkposition": "",
    "watermarkstyle": "",
    "watermarkcomposite": "",
    "watermarkrequired": "",
    "watermarkalbumfree": "",
    "consecutive": "0",
    "steady": "",
    "storage": "",
    "tags": [
        {
            "key": "duplicating",
            "text": "翻",
            "icon": "",
            "color": "white",
            "bgcolor": "red"
        },
        {
            "key": "stitching",
            "text": "拼",
            "icon": "",
            "color": "white",
            "bgcolor": "blue"
        }
    ],
    "eventlist": [
        {
            "handler": "handler_loaddetail",
            "trigger": "onvaluechanged"
        },
        {
            "handler": "handler_clickimage",
            "trigger": "onclicked"
        }
    ]
}
```

> 拍照和水印相关属性只在手机端有效，包括以下属性
>
> source，watermarkposition，watermarkstyle，watermarkalbumfree，consecutive，watermarkrequired，watermarkcomposite

### maxnumber

可保存拍照控件最大张数，默认为1可拍一张。

### compression

压缩程度

|取值|说明|图片大致大小|图片指导尺寸|
|---|---|---|---|
|0|最大压缩|10K左右||
|1|1级压缩（手机端默认值）|30K左右||
|2|2级压缩|90K左右||
|3|3级压缩|200K左右||
|4|4级压缩|500K左右||
|5|5级压缩|1M左右||
|10|无压缩（web端默认值）|原图||

### source

照片来源

|取值|说明|
|---|---|
|0|默认值，从相机获取|
|1|从相册获取|
|2|从相机或者相册获取|

### watermark

照片水印

### watermarkrequired

水印必填，bool值，默认值为0，表示水印不是必须的，此时即便水印没有正常生成也能拍照。

如果值为1，则表示水印必填，此时如果水印生成中或者生成失败时，不能拍照。

### watermarkposition

指定水印显示位置，默认值为 `bottom`

|值|说明|
|---|---|
|bottom|下方，左对齐，占据左边三分之二的区域|
|center|居中，左对齐，占据左边三分之二的区域|
|top|上方，左对齐，占据左边三分之二的区域|
|||

### watermarkstyle

水印显示的样式，默认值为 `clear`

|值|说明|
|---|---|
|clear|直接覆盖在图片之上，白色，黑色阴影|
|darken (未实现)|将使用dark blend模式，白色，黑色阴影|
|translucent（web端）|半透明，在clear的基础上添加20%的透明度|

> 字体大小目前为统一的算法：`max(11, ceil(image.width/25))`
>
> web端在 watermarkcomposite == attached 时支持该属性的解析实现

### watermarkcomposite

水印合成方式，默认值为 `blended` 。

|值|说明|
|---|---|
|blended|水印直接合成在原始图片上|
|attached|水印存储在照片的值当中，需要在显示的时候临时合成|

> ~~attached 模式下，watermarkposition 和 watermarkstyle 将不支持配置，使用其默认值来实现~~

### watermarkalbumfree

相册图片不使用水印，bool值，用于控制从相册选择照片时是否不需要生成水印。

默认为 `0`，即需要生成水印。

### consecutive

临时属性，用于标记是否使用连续拍照相机。主要是用于过度期间测试新相机功能。等新相机稳定后则去除该属性。默认值为 `0` ，即使用旧相机。

### steady

【暂不实现】

稳定值，用于控制 **非当前拍照** 数据是否可编辑，默认为 `0` ，表示不可编辑。

**非当前拍照** 是指不是当前表单中用户使用添加按钮添加的照片。当值为 `1` 时，这些照片不能被手动删除，会在缩略图右上角显示一个灰色半透明角标。

### storage

附件（图片，文件等）在后台的存储位置，用于指导所提交的数据中的附件的最终位置，影响其存储生命周期。

|值|标题|说明|
|---|---|---|
|storage|默认|默认值，永久保存或兼容旧环境|
|storage-3m|临时|3分钟|
|storage-1d|1天|24小时|
|storage-1y|1年|365天|

详情请参看 [阿里云存储服务](http://172.16.0.141/aPaaS-OpenDoc/Markdown/blob/master/BizEngine/baseServ/file3rd.md)

### tags

【目前只在web端支持】

标签定义，用于定义该控件支持的标签信息，会配合value中的tags字段使用。

显示样式如下：

![](http://apaas.wxchina.com:8881/wp-content/uploads/photoTags.png)

*目前 tag 只支持在缩略图中显示，默认字体大小为14，背景大小为18x18*

* key

  tag的key，用于匹配value中的tags中的key值

* text

  显示的文字，目前只支持输入一个文字或字符

* icon

  【暂不支持】

  显示的图标，如果有图标将会忽略文字

* color

  控制文字或图标的颜色

  该属性值为空的时候，默认使用white

* bgcolor

  控制背景矩形的填充颜色

  该属性值为空的时候，默认使用blue

## eventlist

### onvaluechanged

值改变事件，当拍照控件的值发生变化时触发，包括删除照片或确认拍摄一张新照片。

### onclicked

图片点击事件，只在控件只读时有效。

如果控件只读，且配置了onclicked 事件，那么点击缩略图片后将执行对应的事件，而不是打开大图查看。

*该功能目前只在web端实现*

## Value Format

```Json
[
    {
        "source": "xxxxx.jpg",
        "datetime": "845623154531",
        "latitude": "123.12345",
          "longitude": "123.12345",
          "address": "广州市天河区体育西路101号32楼",
        "watermark": "2018-01-02 18:22 广州市天河区体育西路101号32楼",
        "storage": "storage",
        "tags": ["duplicating"]
    }
]
```

* source

  存储图片文件的名称。

* datetime

  照片拍摄的时间的时间戳

* latitude , longitude, address

  拍照位置，拍照控件将会默认自动在拍照时获取定位信息，该定位在打开相机时开始定位，定位完成后作为拍照控件的值的一部分存储在拍照控件中。

  多张拍照时，该信息共享第一张拍照时的定位信息。

  该信息不强制要求成功获取。

  > 暂未实现

* watermark

  自定义照片的水印，只在 `watermarkcomposite == attached` 时有效

* storage

  照片存储位置。

  取值时，直接使用控件属性 `storage` 的值；赋值时优先使用该值进行图片下载。

|手机端|控件值是否有水印信息|照片上是否有水印|web端是否临时合成水印|
|---|---|---|---|
|临时|有|无|合成|
|需要|无|无|不合|
|不需要|有|有|不合|
|不需要|无|有|不合|

* tags

  照片附加的标签的key。如果没有该字段，或者该字段为空，则照片不用附加标签。如果该字段有值，则显示控件属性 `tags` 中对应 `key` 值的标签。

  *目前只支持一张照片一个tag*

## Value Component

* fileinfo

  > 用于使用flycode提交图片的时候获取本地图片位置信息
  >
  > 只在手机端支持

  获取文件的本地信息，包含完整路径和时间戳

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

* clickedinfo

  `uiflycode`

  获取用户最近一次点击的那一张图片的信息，通常和 `onclicked` 事件搭配使用，获取到的值如下：

  ```json
  {
      "source": "xxxxx.jpg",
      "datetime": "845623154531",
      "latitude": "123.12345",
      "longitude": "123.12345",
      "address": "广州市天河区体育西路101号32楼",
      "watermark": "2018-01-02 18:22 广州市天河区体育西路101号32楼",
      "storage": "storage",
      "tag": ["duplicating"]
      "index": "2"
  }
  ```

  即，获取到点击图片的value值，再附加上该图片的所在位置 `index`

  index代表被点击的图片在第几张，第一张图片的 index = 0

  如果没有任何照片被点击，则获取到的值为空字符串。

# 水印的处理

## 水印支持的种类

### 内置水印

【暂不支持】

内置水印只需要通过简单勾选就能进行常见的水印配置，目前支持的内置水印选项有：

|选项|表达式示例|说明|
|---|---|---|
|时间|datetime:yyyy-MM-dd HH:mm|拍照的时间，支持配置具体的时间格式|
|定位|location|当前的定位地址|
|人员|username|当前账号的人员名称|
|表单名称|pagename|当前控件所在的表单名称|
|控件值|ctrlvalue:34562523452345|指定控件的值，可以配置多个|

每个水印选项由一对大括号 `{}` 包裹，每个水印选项在显示时占据一行的位置

```json
// 内置水印示例
// 包含一个控件值,定位和时间
wm:{ctrlvalue:34562523452345}{location}{datetime}
```

* 时间

  默认的表达为 `{datetime}` ，用于获取拍照时的时间，多张拍照时，每张照片的时间单独获取。

  默认的时间格式为 `yyyy-MM-dd HH:mm` 。

  也支持配置指定的时间格式，只需要在 `:` 后面加上指定格式即可，如：`{datetime:MM-dd}`

* 定位

  表达式为 `{location}` ，表示当前的定位地址。将会直接读取拍照控件自身的定位信息。

  多张拍照时，使用统一的定位地址。

  **如果 watermarkrequired == 1 ，那么如果当前还在定位中，或者获取地址失败时，后不能进行拍照。**

  关于定位的详细说明，参看下方说明。

* 人员姓名

  表达式为 `{location}` ，当前登录人员的姓名。

* 表单名称

  表达式为`{pagename}` ，当前表单的名称。

* 控件值

  指定控件的值，目前只支持text和textinput控件。

### flycode水印

支持返回String类型值的flycode，返回值即为水印需要显示的内容，可以在返回的字符串中插入换行符 `\n` 来达到换行的效果。

如果该属性为空，默认使用当前的时间作为水印（默认水印获取失败时不返回错误信息）。

水印同时支持返回错误提示信息，即当水印无法正常生成时，可以通过返回指定格式的字符串，来标识获取水印失败。当水印获取失败后，

错误提示字符串的格式为： `__error:` + `hit message` ，例如：

```json
"__error:尚不能获取地址信息，请稍候再试。"
"__error:请先选择需要投放的终端。"
......
```

> **水印生成的时机**
>
> 用户在每次确认获取的照片时（即使用相机拍摄成功并确定使用照片时，或者使用相册确定选择了某张照片时），生成该照片的水印。
>
> 如果水印获取失败，即返回了错误信息时，需要显示该错误信息，并中断后续的操作。此时需要提供一个提示选项，让用户选择放弃此次获取的图片，或者再次尝试获取水印。直到正确获取水印后才能真正使用照片。

## 全局水印设置

当前控件没有设置水印的时候，使用全局水印设置。

全局水印的选项包含除了 `控件值` 之外的其他内置水印选项，处理方式与内置水印一致。

## 全局水印的显示

当使用全局水印配置时，会在拍照时直接显示在相机界面，如果包含定位信息，还会控制是否能拍照。

此时水印信息会在每次打开相机时刷新，停留在拍照界面时不刷新。

![photoCameraWatermark](http://apaas.wxchina.com:8881/wp-content/uploads/photoCameraWatermark.png)

> 注意，目前，新的水印方式只对全局设置的水印有效，其他方式，如配置控件的watermark属性，依然使用旧的方式显示水印；
>
> 同时对与相册选取的图片添加水印方式也使用旧的方式。

# 图片的上传与下载