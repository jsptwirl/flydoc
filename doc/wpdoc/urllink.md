---
title: urllink
date: 2020-05-22T16:00:26
---

# urllink

负责组装get请求和post请求的参数

```json
{
    "code": "1071949673461321815",
    "type": "urllink",
    "targetctrl": "webview-1182049683461521736",
    "queryparams": [
        {
            "name": "username",
            "value": "fly: System.user().userinfoName",
            "ctrl": {
                "code": "",
                "component": ""
            }
        },
        {
            "name": "psw",
            "value": "",
            "ctrl": {
                "code": "pswtextinputctrl",
                "component": ""
            }
        }
    ],
    "bodyparams": [
        {
            "name": "",
            "datatype": "0",
            "ctrl": {
                "code": "",
                "scope": ""
            },
            "properties": [
                {
                    "name": "username",
                    "value": "",
                    "ctrl": {
                        "code": "usernametextinputctrl",
                        "component": ""
                    }
                },
                {
                    "name": "psw",
                    "value": "",
                    "ctrl": {
                        "code": "",
                        "component": ""
                    }
                }
            ]
        }
    ]
}
```

* targetctrl

  目标webview控件，负责执行get请求或post请求，urllink事件负责将参数组装后传递给webview

* queryparams

  方法参数，只能获取表单中控件值或内存值，通过键值对的方式配置到query中的参数。如"[http://39.97.235.165:7000/#/login/?username=abc&psw=123456](http://39.97.235.165:7000/#/login/?username=abc&psw=123456)"

* bodyparams

  方法参数，获取方式与数据提交的getter一致，获取到的数据将会放置在post请求的body中