---
title: xcgauge
date: 2020-05-20T14:04:10
---

# xcgauge 计量指示器

![](http://apaas.wxchina.com:8881/wp-content/uploads/guage.png)

## 协议说明

```json
{
    "type": "xcprogress",
    "title": "今日拜访量",
    "refvalue": "100",
    "value": "70",
    "unit": "家",
    "linewidth": "6",
    "colormap": [
        {
            "limit": "60%",
            "color": "red-yellow"
        },
        {
            "limit": "100%",
            "color": "green-blue"
        }
    ]
}
```

> refvalue，value，unit，linewidth，colormap 这几个属性以xcprogress一致

## 取值与赋值规则

参看 xcprogress