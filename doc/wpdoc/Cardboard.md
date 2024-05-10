---
title: Cardboard
date: 2020-05-20T16:16:40
---

# Cardboard

用于允许用户自己编辑的布局容器，目前主要用于承载report控件，支持对报表进行布局，编辑，搜索，联动等。

目前Cardboard只支持网格式布局，可以配置列数，行数根据内容自动添加。

**该控件目前只在web端实现**

**Web 端 UI**

![](http://apaas.wxchina.com:8881/wp-content/uploads/cardboardweb.png)

**移动端 UI**

![](http://apaas.wxchina.com:8881/wp-content/uploads/cardboardmobile.png)

## Protocal

```json
{
    //web首页控件，容器控件之一
    "code": "cardboard_code",
    "type": "cardboard",
    "col": "2",
    "settingable": "1",
    "content": [
        {"type": "cardboardreportrow"...}
    ]
}
```

* col

  cardbaord的最大列数，子类型的spancol不能超过这个值。

  移动端目前只支持col = 1

* settingable

  是否支持编辑，选择需要显示的子类型，默认支持。

  当允许编辑时需要自动根据内容生成编辑界面，并且在编辑后要自动调用保存编辑配置的接口。

* content

  用于放置内容控件，目前能放置 `cardboardreportrow` ，或者放置一个控件

**编辑信息使用用户级配置接口来存取，请参看[用户级表单配置信息的存取](..Foundation用户级表单配置信息的存取.md)**

## Cardboard cell layout guid

cardboard根据col数量来最终决定每个cell的大小，为了更好的适配各种情形，现在使用flexbox的方法来描述一下cardboard的布局，该布局为内部自动实现，除了列数可以调整外，其他的均是自动给出。

```json
{

}
```