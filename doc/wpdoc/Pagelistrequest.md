---
title: Pagelistrequest
date: 2020-05-22T16:01:55
---

# Pagelistrequest

控件想要获取到指定目录的可见表单列表，需要使用 `pagelistrequest` 进行列表数据获取。

该事件有固定的出参结构（参看下方出参说明），因此不再进行出参绑定。

```json
{
    "type": "pagelistrequest",
    "ctrlcode": "",
    "folderkey": "客户拜访店面工作",
    "bizproperties": [
        {
            "name": "customertype",
            "value": "",
            "ctrl": {
                "code": "",
                "component": ""
            }
        }
    ]
}
```

* ctrlcode

  进行列表请求的控件的code，请求结果会直接发送给该控件。

  如果发起请求的表单流之类的特殊表单，只需要填写对应特殊节点（例如 `pageflow` , `pageswitch`）的code即可

* folderkey

  想要请求的目录的key值，目前只支持填一个固定值。

* bizproperties

  请求额外需要的业务数据，作用与 `datarequest` 的 `getter` 类似，只不过没有容器控件的指定。

## 手机端接口

**pagelistrequest** 是一个特殊的行为，对于Web端，直接调用指定的接口

对于手机端，需要调用内部API，实现具有以下出入参能力的接口：

### 入参

```json
["key1", "key2", "key3"]
```

入参只需要提供一组按目录结构从上到下排序好的 `key` 的数组即可。这些 `key` 对应于 action 中的 folderkey 和 bizproperties 属性的值，以上方 *Action Protocol* 协议中的例子来说，如果此时 `customertype` 获取到的值为 `123456` ，则组装后的完整入参为 :

```json
["客户拜访店面工作", "123456"]
```

### 出参

出参就是一个 `pageinfo` 的数组

```json
[
    { // pageinfo struct
        "title": "标题",
        "icon": "",
        "pagecode": "",
        "description": "",
        "submitevent": "",
        "hidden": ""
    }
]
```

### 运算过程

运算大致过程如下

```js
func getPageList(inputKeys: [String]) {
  //
  var tmpPagelist = []
  var keyPath = ""
  for key in inputKeys {
    keyPath.appendKey(key)
    tmpPagelist.append(findPagesForKeyPath(keyPath))
  }

  var pagelist = []
  for page in tmpPagelist {
    if isVisible(page) {
      pagelist.append(page)
    }
  }

  return pagelist
}
```

## 支持表单列表请求接口的模块

能够支持导航接口的模块（通常是控件），需要提供一个可以使用 `pageinfo` 数据进行赋值的接口。

目前内置的功能中，`functionlist` 和 `flowpage` 支持使用表单列表请求接口。

手机端的处理时序大致如下：

![](http://apaas.wxchina.com:8881/wp-content/uploads/MobileNavigationServiceSequence.png)