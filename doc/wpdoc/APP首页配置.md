---
title: APP首页配置
date: 2022-06-13T07:42:36
---

# App首页配置

## 1、简介

在智慧100产品版本更新迭代中，H5页面以及功能的增多，也随着用户对UI的追求以及满足用户对功能的自定义，提供了APP首页配置功能。

效果图展示，**注意：当前版本，所有角色首页都一致**

![](http://apaas.wxchina.com:8881/wp-content/uploads/index.png)

## 2、如何配置

相关的配置入口在：产品配置中心-App首页配置，可对其进行新增，编辑，删除，恢复默认等操作，点击保存后，APP端清除缓存，重登生效。

![](http://apaas.wxchina.com:8881/wp-content/uploads/entry.png)

![](http://apaas.wxchina.com:8881/wp-content/uploads/setting.png)

## 3、功能介绍

目前，我们提供了5种较为通用的业务控件进行APP首页配置，以下：

|控件名称|控件类型|
|---|---|
|轮播图|swiper|
|菜单|menu|
|目标达成|progress|
|消息提醒|message|
|通用展示列|table|

### 轮播图(swiper)

一个多张图片组合而成的模块，通过手指滑动可切换查看图片，点击图片可进行页面跳转。

![](http://apaas.wxchina.com:8881/wp-content/uploads/swiper.png)

配置界面如下：

![](http://apaas.wxchina.com:8881/wp-content/uploads/setting-swiper.png)

#### 协议

```json
{
  "type": "swiper", // 通用属性 业务控件类型
  "title": "轮播图", // 通用属性 控件标题
  "remark": "", // 通用属性 备注
  "queryurl": "904911040171610190/1506561074869178467" // flycode接口
}
```

#### type

通用属性，业务控件类型。

#### title

通用属性，控件标题。

#### remark

通用属性，控件备注。

#### queryurl

提供控件数据的flycode接口，格式为：${modelcode}/${modellogiccode}，其中，modelcode为接口所属领域id，modellogiccode为具体接口id，可在ide通过查看接口协议获取。

![](http://apaas.wxchina.com:8881/wp-content/uploads/queryurl.png)

**接口出入参：**

接口入参要求为空。

接口出参要求返回格式如下：

```json
{
  "resp_data": {
    "kx_template": [
      {
        "image": "[{\"source\":\"9c0ef7be-983b-4cce-9840-761942774854.jpeg\",\"datetime\":\"1653239015469\",\"mediatype\":\"img\",\"watermark\":\"\",\"storage\":\"storage\",\"type\":\"image/jpeg\"}]", // 阿里云图片格式
        "url": "jumptype=1&pagecode=893726062754795618" // 点击图片跳转的链接(详见下面跳转链接格式)，可为空
      },
      {
        "image": "[{\"source\":\"9c0ef7be-983b-4cce-9840-761942774854.jpeg\",\"datetime\":\"1653239015469\",\"mediatype\":\"img\",\"watermark\":\"\",\"storage\":\"storage\",\"type\":\"image/jpeg\"}]",
        "url": "jumptype=1&pagecode=893726062754795618"
      }
    ]
  }
}
```

### 菜单(menu)

可定义多个图片+文字模块，点击可跳转到配置好的页面。

![](http://apaas.wxchina.com:8881/wp-content/uploads/menu.png)

配置界面如下：

![](http://apaas.wxchina.com:8881/wp-content/uploads/setting-menu.png)

#### 协议

```json
{
  "type": "menu", // 通用属性 业务控件类型
  "title": "菜单", // 通用属性 控件标题
  "remark": "", // 通用属性 备注
  "value": [
    {
      "icon": "attend", // 默认图标资源
      "title": "考勤签到", // 菜单标题
      "url": "jumptype=1&pagecode=893726062754795618" // 点击跳转的链接(详见下面跳转链接格式)
    },
    {
      "icon": "visit",
      "title": "拜访管理",
      "url": "jumptype=1&pagecode=908955739761021026"
    }
  ]
}
```

#### value

数组格式，定义菜单模块。

|属性名|作用|
|---|---|
|icon|模块图标icon|
|title|模块标题|
|url|点击模块跳转链接|

### 目标达成(progress)

基于接口输出多个进度百分比模块。

![](http://apaas.wxchina.com:8881/wp-content/uploads/progress-1.png)

配置界面如下：

![](http://apaas.wxchina.com:8881/wp-content/uploads/setting-progress.png)

#### 协议

```json
{
  "type": "progress", // 通用属性 业务控件类型
  "title": "目标达成", // 通用属性 控件标题
  "remark": "", // 通用属性 备注
  "queryurl": "904911040171610190/1506096258924810333" // flycode接口
}
```

#### queryurl

提供控件数据的flycode接口，格式为：${modelcode}/${modellogiccode}，其中，modelcode为接口所属领域id，modellogiccode为具体接口id，可在ide通过查看接口协议获取。

**接口出入参：**

接口入参要求为空。

接口出参要求返回格式如下：

```json
{
  "resp_data": {
    "kx_template": [
      {
        "title": "今日拜访计划", // 模块标题
        "target": "10", // 百分比总数
        "complete": "6" // 进度数量
      },
      {
        "title": "本月拜访次数",
        "target": "10",
        "complete": "6"
      },
      {
        "title": "本月新增客户",
        "target": "10",
        "complete": "6"
      }
    ]
  }
}
```

### 消息提醒(message)

消息提醒模块，基于接口输出各种消息提醒。

![](http://apaas.wxchina.com:8881/wp-content/uploads/message.png)

配置界面如下：

![](http://apaas.wxchina.com:8881/wp-content/uploads/setting-message.png)

#### 协议

```json
{
  "type": "message", // 通用属性 业务控件类型
  "title": "消息提醒", // 通用属性 控件标题
  "remark": "", // 通用属性 备注
  "queryurl": "904911040171610190/1505792620746641507" // flycode接口
}
```

#### queryurl

提供控件数据的flycode接口，格式为：${modelcode}/${modellogiccode}，其中，modelcode为接口所属领域id，modellogiccode为具体接口id，可在ide通过查看接口协议获取。

**接口出入参：**

接口入参要求为空。

接口出参要求返回格式如下：

```json
{
  "resp_data": {
    "kx_template": [
      {
        "title": "有<span class=\"color\">18</span>条工作代办未处理",
        "url": "jumptype=2&type=10001"
      },
      {
        "title": "有<span class=\"color\">7</span>条资讯通知未读",
        "url": "jumptype=2&type=10002"
      }
    ]
  }
}
```

### 通用展示列(table)

table样式展示模块，基于接口展示数据。

![](http://apaas.wxchina.com:8881/wp-content/uploads/table.png)

配置界面如下：

![](http://apaas.wxchina.com:8881/wp-content/uploads/setting-table.png)

#### 协议

```json
{
  "type": "table", // 通用属性 业务控件类型
  "title": "今日积分排名", // 通用属性 控件标题
  "remark": "", // 通用属性 备注
  "url": "jumptype=1&pagecode=1372467916292886627", // 点击标题跳转链接(详见下面跳转链接格式)
  "queryurl": "904911040171610190/1506131592211468381", // flycode接口
  "col": [
    {
      "title": "名次", // 列名称
      "colwidth": "60" // 列宽度（px）
    },
    {
      "title": "人员名称",
      "colwidth": "180"
    },
    {
      "title": "积分值",
      "colwidth": "60"
    }
  ]
}
```

#### queryurl

提供控件数据的flycode接口，格式为：${modelcode}/${modellogiccode}，其中，modelcode为接口所属领域id，modellogiccode为具体接口id，可在ide通过查看接口协议获取。

**接口出入参：**

接口入参要求为空。

接口出参要求返回格式如下：其中，column1，column2，column3按顺序对应协议col数组节点列，即：column1对应“名次”，column2对应“人员名称”，column3对应“积分值”。

```json
{
  "resp_data": {
    "kx_template": [
      {
        "column1": "1",
        "column2": "张三",
        "column3": "60"
      },
      {
        "column1": "2",
        "column2": "李四",
        "column3": "50"
      },
      {
        "column1": "3",
        "column2": "王五",
        "column3": "10"
      }
    ]
  }
}
```

### 跳转链接格式（url）

以上业务控件多个都需要定义跳转链接，有些是在协议上定义，有些是在接口上定义。他们都有以下统一的书写规则。

跳转 url 参数以 & 链接，形如 jumptype=1&pagecode=123&id=555

|参数|说明|
|---|---|
|jumptype|跳转类型，1 为配置页面，2 为原生页面|
|pagecode|当 jumptype=1 时，配置页面的 pagecode|
|type|当 jumptype=2 时，原生页面的类型：10001：工作消息、10002：资讯消息 等|
|其他参数|跳转页面接受的其他参数|