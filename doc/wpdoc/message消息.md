---
title: message消息
date: 2020-07-03T17:58:47
---

# 3.4. 消息

**API**

```js
// 模块加载
load('message');
```

```java
/**
* 消息数据
**/
class MsgData {
    String text;        // 文本
    var detail;         // 详情，可以是 流程信息 WorkflowInfo
}
```

```java
/**
* 消息样式
**/
class MsgStyle {
    boolean showtitle;  // 显示标题: true 显示, false 不显示
    String displaytype; // 显示类型: MSG.DISPLAYTYPE_ONLYTEXT 仅文本
    boolean showdetail; // 显示详情: true 显示, false 不显示
}
```

```java
/**
* 消息请求包
**/
class MTRequest {
    String title;       // 标题
    String msgtype;     // 消息类型: MSG.TYPE_REMIND 提醒, MSG.TYPE_NOTICE 通知
    MsgStyle style;     // 显示样式，详见 MsgStyle类
    MsgData msgdata;    // 消息数据，详见 MsgData类
}
```

```js
/**
* 发送消息
**/
MSG.send(MTRequest);
```

```js
/**
* 发送短信
**/
MSG.sendsms(MTRequest);
```

---

**例**: 发送当前审批流程的待处理提醒消息

```js
// 加载模块
load('message');

// 获取当前流程节点信息
var workflowInfo = new WorkflowInfo();

// 包装消息体
var msgdata = new MsgData();
msgdata.text = "您发起的申请已经审批完成申请编号：" + workflowInfo.instanceid;
msgdata.detail = workflowInfo;

// 定义消息显示样式
var style = new MsgStyle();
style.showtitle = true;
style.displaytype = MSG.DISPLAYTYPE_ONLYTEXT;
style.showdetail = false;

// 包装消息请求
var req = new MTRequest();
req.title = "待处理提醒";
req.msgtype = MSG.TYPE_REMIND;
req.style = style;
req.msgdata = msgdata;

// 发送
MSG.send(req);
```

---

**例**: 发送短信

```js
/**
 * 时间：2018-8-13
 * 描述： 终端智能推送列表
 */
// 模块加载
load('message');

var result = [
  { 
    "type":"5001",
    "msg":"7月销量累计占比排名前50%的终端",
    "names":"7-11便利店、全家便利店、喜士多便利店、乐尔康超市、喜多多便利店、沃尔玛超市"
  },
   {
    "type":"5003",
    "msg":"7月同比销量下滑终端",
    "names":"7-11便利店、全家便利店、喜士多便利店、乐尔康超市、喜多多便利店、沃尔玛超市"
  },
    {
     "type":"5003",
    "msg":"7月产品铺货率下滑终端",
    "names":"7-11便利店、全家便利店、喜士多便利店、乐尔康超市、喜多多便利店、沃尔玛超市"
  },
    {
    "type":"5004",
    "msg":"7月生动化合格率下滑终端",
    "names":"7-11便利店、全家便利店、喜士多便利店、乐尔康超市、喜多多便利店、沃尔玛超市"
  }
];

var info = {};
info.image = [];
info.text = '199994便利店、全家便利店、喜士多便利店、乐尔康超市、喜多多便利店、沃尔玛超市';
info.param = {};
info.param.type = "5001";
info.param.datetime = (new Date()).getTime();
FLY.log(JSON.stringify(info));

var msgDetail = function(){
  var msg = {};
  msg.title = "title月销量累计占比";
  msg.summary = ""
  msg.jsondata = JSON.stringify(info);
  msg.handler = "1037268760265887744";
  msg.alertTitle = "";
  msg.alertDigest = "";
  return msg;
}

  var msgdata = new MsgData();
  msgdata.text = JSON.stringify(info);
  msgdata.detail = [];
    msgdata.jsondata = {};
  var mebercodes = ["1037268760265887744","976362040903995392","975552983515402240","978100998570643456"];
  for(var i in mebercodes){
    var detail = {"handler":mebercodes[i],"title":"","summary":""};
   // msgdata.detail.push(detail); 975552780976656384
  }
    msgdata.detail.push(msgDetail());
  FLY.log(JSON.stringify(msgdata.detail));
  // 定义消息显示样式
  var style = new MsgStyle();
  style.showtitle = true;
  style.displaytype = MSG.DISPLAYTYPE_ONLYTEXT;
  style.showdetail = true;

  // 包装消息请求
  var req = new MTRequest();
  req.title = "7月销量累计占比排名前50%的终端888";
  req.msgtype = '5001';
  req.style = style;
  req.summary ="终端表现智能推送";
  req.msgdata = msgdata;
  req.alerttitle = '终端表现智能推送';
  req.alertdigest = '您有一条终端表现智能推送消息';

  // 发送短信
  MSG.sendsms(req);
```