---
title: throw异常及提示
date: 2020-07-03T17:46:40
---

# 3.1.4. 异常及提示

## 3.1.4.1. 抛出异常

**API**

```js
throw new ERROR("异常信息");
```

**例子**: obj为空时抛出异常

```js
if(obj == null){
  throw new ERROR("出现异常！");
}
```

出参:

```json
{
    "error_type": 600,
    "error_code": "出现异常！",
    "error_params": null
}
```

## 3.1.4.2. 返回提示信息

**API**

```js
// info和warn的用法一样，只是提示的等级不一样
FLY.info(<提示信息>);
FLY.info(<提示信息>,<信息对象>);
FLY.warn(<警告信息>);
FLY.warn(<警告信息>,<信息对象>);
```

**例子1**：直接给前端提示消息

```js
FLY.warn("操作有误，请重新操作！");
```

出参：

```json
{
    "resp_data": {
        "<出参对象>": {},
        "__dataprocessresult": [
            {
                "message": "操作有误，请重新操作！",
                "params": {},
                "type": "warning"
            }
        ]
    }
}
```

**例子2**:使用占位符的方式（括号前的\\不能省略）

```js
var a = {};
a.totalcount = 7;
a.successcount = 5;
a.errorcount = 3;
FLY.info("总共\(totalcount)条，成功\(successcount)条，失败\(errorcount)条",a);
```

出参：

```json
{
    "resp_data": {
        "<出参对象>": {},
        "__dataprocessresult": [
            {
                "message": "总共\(totalcount)条，成功\(successcount)条，失败\(errorcount)条",
                "params": {
                    "totalcount": "7",
                    "successcount": "5",
                    "errorcount": "3"
                },
                "type": "info"
            }
        ]
    }
}
```