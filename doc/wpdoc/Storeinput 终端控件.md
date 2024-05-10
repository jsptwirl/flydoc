---
title: Storeinput 终端控件
date: 2023-08-31T17:41:32
---

## Storeinput 终端控件

此控件用于替代终端名称输入框。目前只用于**手机端**的配置。从实际使用场景出发，IDE配置中终端控件只用于主界面配置，不适用于弹窗管理(popview)配置。

![手机端显示](http://apaas.wxchina.com:8881/wp-content/uploads/%E7%BB%88%E7%AB%AF%E6%8E%A7%E4%BB%B6-%E6%89%8B%E6%9C%BA%E7%AB%AF%E6%98%BE%E7%A4%BA.png)  
![IDE控件](http://apaas.wxchina.com:8881/wp-content/uploads/%E7%BB%88%E7%AB%AF%E6%8E%A7%E4%BB%B6-IDE%E6%98%BE%E7%A4%BA.png)

### 协议

```json
{
    "type": "storeinput",
    "distance": "5", //搜索门店与当前点距离，默认为5公里
    "url": "", //指定请求地址（需包含http://或https://前缀），默认无需配置，使用内置地址
    "association": "", //关联的地址控件code
    //其他通用属性
    "title": "",
    "name": "",
    "placeholder": "",
    "required": "",
    "readonly": "",
    "hidden": "",
    "color": "",
    "code": "",
}
```

#### 属性说明

##### distance 搜索距离

配置搜索距离。搜索门店与当前定位点的距离，默认为5公里。（当前设置可配置5~10公里）

> 注：仅支持设置5~10km。若协议中设置该值小于5km，取5km；大于10km，取10km；处于此区间中的值，取整数，比如设置6.66km，则取6km。

##### url 请求地址

请求的地址，无需配置，默认为空字符串。（手机端遇到空字符串会解析为默认地址。）

##### association 关联地址控件

关联地址控件的code。只支持关联地址控件，用于把所选择的终端的地址信息赋予地址控件。

### 最大输入长度

```
默认100，不支持配置
```

### 防抖

```
默认500ms，不支持配置
```

### 定位方式

```
控件初始化后，开始连续定位，5秒间隔刷新，根据全局配置选择定位方式，默认为高德，不支持控件自身配置
```

### 缓存

暂不支持

### 取值类型

|key|类型|说明|备注|
|---|---|---|---|
|text|string|只取控件上看到的文本内容|支持配置或UIflyCode取值赋值操作|
|all|string|从POI点带出的所有信息、控件上看到的文本内容及POI点查询时的定位信息，json string|只用于埋点取值操作|

key 默认为空，空的效果与 key 为 text 一致

key 为 all 时，返回的json string 格式

```json
{
    "text": "", //控件上看到的文本内容
    "location": {   //POI点查询时的定位信息
        "address": "",
        "latitude": "",
        "longitude": ""
    },
    "poi": {
        //POI点的信息，原样保存
    }
}
```

### 日志埋点

在表单配置行为 datasubmit 执行时，进行控件检查，若 表单中 含有 storeinput 控件，则进行相应的埋点数据提交

```json
{
    "types": "storeinput",
    "properties": {
        "groupid": "",
        "pagecode": "", //表单code
        "pagename": "", //表单title
        "actionccode": "", //行为code
        "storeinfo": "", //storeinfo的值，按 all 获取
        "bizdata": {
            //表单提交的数据
        }
    }
}
```