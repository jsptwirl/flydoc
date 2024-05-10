---
title: TextInputArea
date: 2020-05-20T16:20:56
---

# TextInputArea

文本输入区域控件，用于输入较多的文字，如备注信息等。  
其与TextInput由很多相似的属性和UI特征，可以参看两者的UI效果图进行对比。  
由于多行文本输入通常不涉及到数据有效性校验，因此TextInputArea没有相关属性。

![textAreaSample1](http://apaas.wxchina.com:8881/wp-content/uploads/textAreaSample1.png)

## Protocol 协议详解

```Json
{
    "type": "textinputarea",
    "code": "",
    "title": "",
    "placeholder": "",
    "maxlength": "",
    "minvisiblelinenumber": "",
    "maxvisiblelinenumber": "",
    "linebreakenable": ""
}
```

### maxlength 最大字符长度

与TextInput的maxLength属性相同，用于控制最大输入的字符数。0表示无限制，正整数表示相应的限制数量。默认值为0，表示不限制。

目前只提供固定几个值进行选择：0，10，30，50，100，1000

与TextInput不同，对于超出数量限制的字符并不截断，而只是进行剩余字符数量提示，并且在之后的提交或保存操作中，提示其输入超过限制。  
剩余字符数量提示规则如下

```
当剩余字符数<=10时，开始显示提示；>10 提示消失。
剩余字数为负数时，显示为红色；正数时为灰色。
当提示的剩余字符数为正数时，控件获得焦点时显示；失去焦点时不显示。
```

### minvisiblelinenumber 最小可见行数（兼容旧字段 rows）

> 暂时不用实现

表示最小的可显示的行数，默认值为3，不能小于3。该值决定了大文本框的默认高度。

### maxvisiblelinenumber 最大可见行数

> 暂时不用实现

表示最大的可显示的行数，0表示无限值，其余>=3的正整数表示最大可显示的行数。

maxvisiblelinenumber不能小于minvisiblelinenumber，当小于时，默认使用minvisiblelinenumber的值。

默认为3，此时随着用户的输入，控件会不断的增加高度，以显示全部分输入内容。  
其他情况下，当输入的内容行数超出限制时，控件就不再增高，此时可以继续输入，控件内部的输入框可以上下滚动查看内容。

### linebreakenable 允许输入换行

> 暂时不用实现

表示是否允许输入回车符。0表示不能，1表示能，默认值为0。  
当不能输入回车时，点击键盘的回车表示完成输入；否则就是进行换行。

## 取值规则

简单文本值，即其输入的文本内容

## UI Sample

![textAreaSample2](http://apaas.wxchina.com:8881/wp-content/uploads/textAreaSample2.png)

## UI Annotation 标注

![textAreaAnnotation1](http://apaas.wxchina.com:8881/wp-content/uploads/textAreaAnnotation1.png)