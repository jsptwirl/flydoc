---
title: visitworkdatasubmit 拜访流数据提交
date: 2020-12-21T15:22:21
---

# VisitWorkDataSubmit

## VisitWorkDataSubmit 数据提交

```json
{
    "type": "visitworkdatasubmit",
    "code": "",
    "logiccode": "111111111111",
    "queue": "0",
    "mode": "network",
    "getter": [],
    "setter": [],
    "nextstep":{
        "type":"",
        "pagecode":"",
        "pagecount":""
    }
}
```

拜访流数据提交的属性中，名字和datasubmit一致的，其含义也一致，可以直接参考datasubmit。

默认情况下，提交完成后转跳到下一个拜访流节点页面

若是最后一步：

1.当列表中所有节点都完成（跳过算一种完成状态），返回到拜访流列表页面前一个页面

2.当列表中含有未完成节点（如非必做节点），返回到拜访流列表页面

也可以通过nextstep指定转跳规则

### nextstep

数据提交完毕，下一步应转跳到那个页面

|属性|含义|取值|
|---|---|---|
|type|转跳类型|return：返回到一个指定的页面|
|pagecode|页面code||
|pagecount|返回的页面级数，只有当pagecode为空的时候才会使用pagecount来判断返回路径|pagecout > 0 && pagecout < 页面栈数|