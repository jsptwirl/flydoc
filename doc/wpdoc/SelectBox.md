---
title: SelectBox
date: 2020-05-20T16:29:35
---

# SelectBox

选择框，把常见的 checkbox 和 radiobox，以及筛选选项合为一个控件

* Web

  web端通常都是使用左右布局

  ![](http://apaas.wxchina.com:8881/wp-content/uploads/selectboxSampleWeb.png)

* mobile

  mobile端通常使用上下布局

  ![](http://apaas.wxchina.com:8881/wp-content/uploads/selectboxSampleMobile.png)

* buttonMode

  按钮模式，以按钮形式显示选项

  ![](http://apaas.wxchina.com:8881/wp-content/uploads/selectboxButtonMode.png)

## Protocal

```json
{
    "type": "selectbox",
    "code": "ctrlcode_storelevel",
    "name": "性别选择",
    "value": "",
    "title": "性别",
    "multiselectable": "0",
    "colnum": "0",
    "displaystyle": "",
    "eventlist": [
        {
            "handler": "",
            "trigger": "onvaluechange"
        },
        {
            "handler": "",
            "trigger": "onload"
        }
    ],
    "options": [
        {
            "text": "男",
            "key": "1"
        },
        {
            "text": "女",
            "key": "2"
        }
    ]
}
```

### colnum 列数

选项排列的列数

`0` 表示自动布局，会根据选项内容的长度，自动使用合适的列数

`>0的正整数` 表示指定显示列数，默认值为 `0`

### displaystyle 显示模式

|Value|Meaning|
|---|---|
|check|勾选框模式，默认值，会根据单选或者多选在UI上有所不同|
|button|显示为按钮组的模式|
|dropdown||

> 无论单选多选，选中的选项再次点击均可取消选中状态

## 默认值说明

可以通过value属性设置默认值。如果没有设置默认值，将没有默认。默认值配置采用Component为key的规则

> 注：当设置了单选，但是赋值给控件的数据有是多个选中值的情况下，默认只取第一个选中值进行显示

## Value Formart

### Component

|name|single value|multi `value`|
|---|---|---|
|value|{"text": "天河区经销商", "key": "1001"}|\[{"text": "荔湾区经销商","key": "1001"},{"text":"荔湾区经销商","key": "1002"}\]|
|text|"天河区经销商"|"天河区经销商\|荔湾区经销商"|
|key|"1001"|"1001\|1002"|
|fullvalue|{"text": "天河区经销商", "key": "1001"}|\[{"text": "荔湾区经销商","key": "1001"},{"text":"荔湾区经销商","key": "1002"}\]|