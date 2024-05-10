---
title: session登录会话信息
date: 2020-07-03T17:54:44
---

# 3.1.2. 登录会话信息

SESSION对象为flycode内置对象，可获取到当前登录人的一些信息。

**API**

```js
SESSION.orgcode;        // 组织编码

SESSION.usercode;       // 用户编码

SESSION.pscode;         // 岗位编码

SESSION.mbcode;         // 成员编码

SESSION.accode;         // 账号编码

SESSION.ctcode;         // 客户端类型编码(1-web管理端、2-iPhone端、3-Android)

SESSION.rpscode;        // 职位编码(模板岗位编码)

SESSION.orgdim;         // 组织维度Id

SESSION.codepath;       // code编码

SESSION.isleaforg;      // 判断当前登录人是否是组织架构叶子节点的

SESSION.appcode;        // 当前应用编码 (sales, distribution, promotion)

SESSION.appcodes : List<String>;    // 当前用户可用应用编码

SESSION.categorycode;   // 岗位类别

SESSION.subpdcodes;     // 子产品编码
```

```js

以下内容由颜潮盛 整理（202203）

--------------web端
SESSION对象为flycode内置对象，可获取到当前登录⼈的⼀些信息。
SESSION.orgcode;               // 组织编码
SESSION.usercode;             // ⽤户编码
SESSION.pscode;                 // 岗位编码
SESSION.mbcode;                 // 成员编码
SESSION.accode;                 // 账号编码
SESSION.ctcode;                 // 客户端类型编码(1-web管理端、2-iPhone端、3-Android)
SESSION.rpscode;               // 职位编码(模板岗位编码)
SESSION.orgdim;                 // 组织维度Id
SESSION.codepath;             // code编码
SESSION.isleaforg;           // 判断当前登录⼈是否是组织架构叶⼦节点的
SESSION.appcode;         // 当前应⽤编码(sales,distribution, promotion)
SESSION.appcodes : List<String>;       // 当前⽤户可⽤应⽤编码
SESSION.categorycode;      // 岗位类别
SESSION.subpdcodes;         // ⼦产品编码
  
----------------------app端
System
1. System.user() //获取用户信息
System.user().accountCode  //账号编码
System.user().userinfoName //用户名称
System.user().userinfoID //用户id
System.user().tenantName //企业名称 
System.user().tenantCode //企业编码
System.user().orgName //组织名称
System.user().orgCode //组织编码
System.user().positionID //
System.user().positionName //
System.user().mbCode // 成员编码
System.user().refpositionID //职位编码
System.user().appCode //当前登录的应⽤编码
System.user().appCodes //当前租户的应⽤列表
System.user().categoryCode //当前的职位类别
System.user().subpdCodes //当前租户⼦产品列表
2. System.context() //获取当前用户登录信息
System.context().isOffline //当前是否离线
System.context().token //当前⽤户登录的token
System.context().httpAddress // http请求url头
System.context().versionName //版本名称
System.context().versionCode //版本号
3. System.uniqueid() //获取⼀个的uniqueid
4. System.date() //获取服务端当前时间
5. System.functionCodes() //获取功能权限
6. System.functionCheck(['80998877734324']) //功能权限检测
7. System.consloe('request  is OK') //控制⽇志输出
```