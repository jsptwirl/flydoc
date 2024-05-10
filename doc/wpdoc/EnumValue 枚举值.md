---
title: EnumValue 枚举值
date: 2020-05-20T15:06:23
---

# Ctrl Enum Value

> 枚举类型默认都直接使用字符串作为协议内部值

## Flex Layout 布局类枚举值

### flexdirection

|value|meaning|
|---|---|
|vertical|垂直分布|
|horizontal|水平分布|

### justifycontent

|value|meaning|
|---|---|
|flexstart|起始对齐|
|center|居中|
|flexend|结束对齐|
|spacebetween|空白均分到item之间|
|spacearound|空白均分到item四周|

### alignitems

|value|meaning|
|---|---|
|flexstart|起始对齐|
|center|居中|
|flexend|结束对齐|
|stretch|拉伸|
|baseline|基准线对齐|
|spacebetween|空白均分到item之间|
|spacearound|空白均分到item四周|

## Other 其他枚举值

### color

颜色接受两种取值，一种是十六进制的颜色编码，如 `#ffffff` ；一种是颜色枚举值 `red`，如下面表格所示

|value|meaning|hex|
|---|---|---|
|darkblack|<font>◼︎</font>深黑|#000000|
|black|<font>◼︎</font>黑|#333333|
|lightblack|<font>◼︎</font>浅黑|#4A4A4A|
|darkgray|<font>◼︎</font>深灰|#6B6B6B|
|gray|<font>◼︎</font>灰|#9B9B9B|
|lightgray|<font>◼︎</font>浅灰|#C4C4C4|
|greyishwhite|<font>◼︎</font>灰白|#F5F5F5|
|white|<font>◼︎</font>白|#FFFFFF|
|lightgreen|<font>◼︎</font>浅绿|#58D7B8|
|green|<font>◼︎</font>绿|#09C194|
|darkgreen|<font>◼︎</font>深绿|#16A085|
|blackishgreen|<font>◼︎</font>暗绿|#417505|
|brightgreen|<font>◼︎</font>亮绿|#7ED321|
|red|<font>◼︎</font>红|#E53C51|
|darkred|<font>◼︎</font>暗红|#D0021B|
|orange|<font>◼︎</font>桔色|#F5A623|
|yellow|<font>◼︎</font>黄色|#F8E71C|
|brightyellow|<font>◼︎</font>亮黄|#FFF57C|
|blue|<font>◼︎</font>蓝|#608FE9|
|lightblue|<font>◼︎</font>淡蓝|#C2DEFF|
||||

### textalign

|value|meaning|
|---|---|
|left|左对齐|
|center|居中|
|right|右对齐|

### fontweight

|value|meaning|
|---|---|
|lighter|细|
|normal|普通|
|bold|加粗|

### currencykind

暂时使用字符串

### currencyunit

暂时使用字符串

### dateunit

|value|meaning|
|---|---|
|year|年|
|month|月|
|day|日|
|hour|时|
|minute|分|
|second|秒|

### ctrlmode

|value|meaning|
|---|---|
|plain|平整模式|
|card|卡片模式|
|free|自由模式|

### datadrillingtype

|value|meaning|
|---|---|
|drilldown|向下钻取|
|replace|替换钻取|

### functiontype

|value|meaning|
|---|---|
|default|默认类型|
|store\_visit|门店拜访|

## icon

> 需要完善，暂不启用

图标命名规则为

`description_size_color`

|Icon Name|Icon|Usage|
|---|:---:|---|
|disclosureIndicator\_small\_gray|![img](http://apaas.wxchina.com:8881/wp-content/uploads/icon1.png)|指明可以点击查看详情等|
|disclosureIndicator\_small\_blue|![img](http://apaas.wxchina.com:8881/wp-content/uploads/icon2.png)|指明可以点击查看详情等|
|processing\_middle\_blue|![img](http://apaas.wxchina.com:8881/wp-content/uploads/icon3.png)|标志处理中|
|complete\_middle\_green|![img](http://apaas.wxchina.com:8881/wp-content/uploads/icon4.png)|标志已完成|
|addnew\_middle\_blue|![img](http://apaas.wxchina.com:8881/wp-content/uploads/icon5.png)|通常用于新增|

## sort

排序控件的值为枚举值，为空的时候表示不参与排序

|Value|Meaning|
|---|---|
|asc|升序|
|desc|降序|