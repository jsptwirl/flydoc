---
title: View 视图层
date: 2020-05-19T16:52:20
---

## View 视图层

```json
{
    "view": {
        "body": {
            "type": "layout",
            "flex": "1",
            "content": [
                {
                    "type": "popview",
                    "code": "",
                    "content": []
                }
            ]
        },
        "menu": [
            {
                "type": "button",
                "individual": "1"
            }
        ],
        "subviews": [
            {
                "type": "popview",
                "code": "",
                "content": []
            }
        ]
    }
}
```

## body

此处为表单主要的显示内容定义区域，其内容约定为只能放置一个flex == 1 的 layout控件，作为整个表单的显示内容的根容器。表单中需要显示的内容，需要定义在该容器的 content 属性中。

关于layout 控件更多的说明请参看 [Layout 详细说明](../Widgets/WidgetsList/Container/Layout.md)

## menu

该节点为移动端专有的节点，用于定于在导航栏上显示的功能按钮。

该节点只能放置一个或多个button 控件，系统会自动将这些按钮放置在一个下拉列表中显示。如果需要让其中部分按钮直接显示在导航栏中，只需要配置对应的按钮的属性individual为 1 即可。

关于button 控件更多的说明请参看 [Button 详细说明](../Widgets/Viewer/Button.md)

## subviews

子视图，用于定义表单中的内嵌子页面，方便页面规划，可用于例如添加或编辑数据等场景，能减少表单间参数与事件传递的麻烦。与 [popsubview 弹窗](../Actions/NomalActions/popsubview.md) 行为搭配使用。

子视图中必须放置 [popview](../Widgets/WidgetsList/Container/Popview.md) 容器控件。

子视图中的数据，只在子视图创建（弹出）时可用，其他时候不可用。子视图弹出后，子视图和主视图之间的数据可以无缝共享，随时相互存取。

一个表单可以定义多个子视图，但同一时间只能弹出一个子视图，因此子视图之间暂不支持存取数据。