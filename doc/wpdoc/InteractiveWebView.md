---
title: InteractiveWebView
date: 2020-05-20T17:12:51
---

# Interactive Web View交互式网页

移动端的交互式WebView控件，用于实现更加个性化的展示页面。

该控件支持数据的显示，表单链接，数据请求等，但不支持数据采集。

```json
{
    "type": "interactivewebview",
    "refreshable": "1",
    "topic": "homepage",
    "eventlist":[
        {
          "trigger":"onload",
          "handler":"loaddata"
        },
        {
          "trigger":"clickkpi",
          "handler":"handler_code1"
        },
        {
          "trigger":"clickvisitstore",
          "handler":"handler_code2"
        },
        {
          "trigger":"linktosomepage",
          "handler":"handler_code3"
        }
    ]
}
```

* refreshable

  是否支持下拉刷新，如果支持，将会在下拉后执行 `onrefresh` 对应的事件。

* topic

  所有的资源文件所在的文件夹的名字，控件将会在该文件夹下面找名字为 `page.html` 的表单页面进行加载

* eventlist

  和其他的控件一样，用于指定事件触发点的地方，不同之处在于，该控件除了固有的 `onload` , `onrefresh` 等事件外，还可以自定义添加 `trigger`

## WebView 调用控件方法

目前需要实现一个能够触发控件事件的接口即可

```js
function xpe_callEvent(trigger, params, completion);

xpe_callEvent('linktosomepage', null, null)
```

* trigger

  调用外部事件的触发关键字，用于在控件的 `eventlist` 中查找 `trigger` 属性的值与之相等的的对应的handler事件进行执行。

* params

  传递出来的参数，可以是数组或者是字典类型的 `json` 数据，该参数可以为空

  > 目前只接受 `String` 类型为 key 的字典型数据作为参数

* completion

  事件执行完成后的回调方法，接收三个参数

  `completion(isSuccess, errorMsg, returnParam)`

  > 目前这三个参数均没有返回，只是简单告知事件执行结束

## 控件调用 WebView的方法

> 该方法应该由该控件内嵌页面的编写者在其JavaScript代码中实现

```js
function xpe_reciveData(data, key);
```

* data

  接收到的数据，可以是数组或者是字典类型的 `json` 数据

* key

  接收到的数据用途的字符串类型的标识，由控件在原始参数中获取约定字段 `__interactive_key` 的值，可以为空

## 获取用户信息的方法

由于大多数情况下，还需要获取用户信息，因此提供一个方便的方法给页面编写者调用

```js
function xpe_userInfo(completion);
```

该方法返回用户的基本信息，在通过回调completion返回结果，参看 `xpe_callEvent` 中的 completion