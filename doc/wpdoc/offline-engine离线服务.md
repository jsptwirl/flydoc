---
title: offline-engine离线服务
date: 2020-05-25T14:31:16
---

## offline-engine离线服务

||||||
|---|---|---|---|---|
|历史版本|发布时间|部署该版本环境|下载路径|服务说明|
|v2.11.7|2023.8.31|https://xwsvn.wxchina.com/doc1/aPaaS/V5.1/5.发布阶段/程序包/offline-engine.zip(1442)|新功能新增版本上传服务版本查询“功能完善，自动抓取生成对应已部署的服务版本清单，并上传@4482新增1003消息类型新增版本配置文件flycode引擎新增分布式锁能力#4581【优化】PLUGIN.load 方法不指定插件版本时，应加载当前租户安装的最新版本插件@3481修复缺陷五丰安全问题，升级部分依赖包版本#5172修复因缺少括号导致数据权限or规则扩大的问题修复war包启动不了的问题五丰安全问题，升级部分依赖包版本#9247修复序列化时异常问题修复getWidgets没有返回公共包详情的bug|
|v2.11.6|2023.4.27|https://xwsvn.wxchina.com/doc1/aPaaS/V5.0/5.发布阶段/程序包/offline-engine.zip(1039)|修复缺陷兼容旧版ide保存业务confjson时tenantdbname为空的时导致的数据源引用不一致导致的事务问题修复地图key获取问题@34453注释掉事务排查的日志|
|v2.11.5|2023.2.28|https://xwsvn.wxchina.com/doc1/aPaaS/V5.0/5.发布阶段/程序包/offline-engine.zip(912)|新功能适配nacos开启认证#3366扩展导出支持@3411修复缺陷修复校验实体方法的已知bug|
|v2.11.4|2023.1.9|https://xwsvn.wxchina.com/doc1/aPaaS/V4.2/5.发布阶段/程序包/offline-engine.zip(812)|新功能不返回全部元数据#这个标签调度报警、调度报表兼容3001 3002 3003兼容短信验证码红点问题修复缺陷将包下载url的nacos配置项改成在server里用ide服务加相对路径构成@2572岗位输出字段的列名写错别名@24683消息撤回功能，修复已知bug@3306消息撤回功能@3306修复红点消息负数问题，小于0直接等于0消息撤回功能，修无法指定消息id发送的bug@3306列顺序按照sql语句排序@23006修复getWidgets没有返回公共包详情的bug|
|v2.11.3|2022.9.13|https://xwsvn.wxchina.com/doc1/aPaaS/V4.1/5.发布阶段/程序包/offline-engine.zip(406)|新功能第三方依赖包管理 需求修改 修复已知bug@2572新增插件redis支持2461修复缺陷事务问题排查5981|
|v2.11.2|2022.6.2|https://xwsvn.wxchina.com/doc/aPaaS/V4.0/5.发布阶段/程序包/offline-engine.zip(4446)|修复缺陷升级fastjson版本到1.2.83#5172修复同时导出引起导出文件url一致问题|
|v2.11.1|2022.3.29|https://xwsvn.wxchina.com/doc/aPaaS/V3.4/5.发布阶段/程序包/offline-engine.zip(4330)|新功能插件 - 支持资源注入、配置注入、组件连接等特性apaas插件 mvp分库支持@1271新增分库支持@1271实现多语言@1323原生语句支持超级表单的规则导入导出flycode支持分库获取用户字段权限的flycode方法@1488flycode支持超级表单规则listSimple接口增加updatetime时间戳返回@1785修复缺陷apaas插件 解决已知的bug右侧展示列表建议优先按修改时间倒序排序@1780修复同时登录同一帐号导致消息未读数不对的问题@1078|
|v2.11.0|2022.1.7|https://xwsvn.wxchina.com/doc/aPaaS/V3.4/5.发布阶段/程序包/offline-engine.zip(4237)|新功能apaas插件 mvp分库支持@1271新增分库支持@1271实现多语言@1323原生语句支持超级表单的规则导入导出flycode支持分库获取用户字段权限的flycode方法@1488flycode支持超级表单规则二开控件查询@1401下载控件列表，输出updatetime@1270修复缺陷apaas插件 解决已知的bug修复同时登录同一帐号导致消息未读数不对的问题@1078解决读写库延迟获取用户设置接口数据问题|
|v2.10.1|2021.10.13|http://183.63.72.243:48080/svn/doc/aPaaS/V3.3/5.发布阶段/程序包/offline-engine.zip(4065)|新功能下载控件列表，输出updatetime@1270修复缺陷fix a bug which no limit size for the list of LimiterManager@705|
|v2.10.0|2021.9.15|http://183.63.72.243:48080/svn/doc/aPaaS/V3.3/5.发布阶段/程序包/offline-engine.zip(3972)|新功能配置项改造:新增服务集群下的节点差异配置@831增加opencache新增了OpenAuth若干接口，新增OpenEncoder类，OpenLoginController新增runadapter接口支持非申请节点的撤回增加附件、催办、抄送等功能增加了发送接口对红点计数消息的类型过滤特性)类型暂时在代码里写死)@1078增加了pageMessages接口参数，前端可以控制是否更新红点信息了；修复了没有传日期范围参数时默认为90天写死的bug@1078增加消息中心关键字搜索支持@1078完成web审批通知/公告通知的消息提醒的一些接口参数调整@1078完成web审批通知/公告通知的消息提醒@1078去掉对金色的支持@1188新增excelapi对多种新颜色的支持@1188增加userinfoname tenantcode增加审批管理flycode工具方法 execute等业务引擎增加流程分布式锁解决消息的分享，获取协议，不需要授权。 接口增加参数 \_\_noauthpass修复缺陷引用型导入导出的IDE日志的logiccode处理，解决导入导出日志无法输出的BUG@6858|
|v2.9.0|2021.6.29|http://183.63.72.243:48080/svn/doc/aPaaS/V3.2/5.发布阶段/程序包/offline-engine.zip(3765)|新功能完成元数据迁移需求@823提供通用的多语言数据请求标准，在flycode中可以通过FLY.getLang() 获取当前会话使用的语言@886实现sql查询和http请求业务的内存限制功能#705修复缺陷flycode匿名函数包装结尾增加换行操作，避免结尾注释引发错误保存flycode时，结尾自动加入换行，避免一些注释行的处理错误。#4784修复在业务实体新增字段，保存之后不发布，列表查询select\*报错的问题。#1409|
|v2.8.5|2021.5.6|http://183.63.72.243:48080/svn/doc/aPaaS/V3.2/5.发布阶段/程序包/offline-engine.zip(3538)|新功能增加错误类型定义增加updateopname createopname处理实现行数的实时显示，实现文件大小的提前显示，历史任务列表实现滚动更新，大小为1000，提供历史任务清除接口#703增加导入导出任务监控埋点接口#703导出支持设置单元格宽度设置#499增加获取当前节点消息参数，消息参数增加 af\_taskcategory 输出处理不同意多退回选择问题预发起接口返回暂存功能定义暂存功能调用逻辑增加#333解决回退到申请节点后，直送的昝问题#271修改流程choice功能返回问题#271流程撤回修改#271增加getFlowMsgParam方法，用于返回流程消息参数，且增加af\_taskcategory输出增加导入导出任务监控埋点的新版代码#703增加导入导出任务监控埋点接口，此处提交是为了编写新版导入导出的埋点代码#703入参增加IN.\_\_approvaldataflycode新增多项SQL高级语法支持。#1160opendata模块的httpcall新增DELETE,PATCH方法,新增http状态码code的返回#1163 #1164修复缺陷提交行为逻辑错误获取问题下一步接口兼容出错web端，旧流程，点击同意，选择人后点击提交，前端报错兼容申请提交choice=0情况处理申请提交时获取下一步的处理问题沟通加评论处理增加flyql的字段关键字过滤器，自动为关键字加入双引号#5290 #5293flycode匿名函数包装结尾增加换行操作，避免结尾注释引发错误保存flycode时，结尾自动加入换行，避免一些注释行的处理错误。#4784修复在业务实体新增字段，保存之后不发布，列表查询select\*报错的问题。#1409|
|v2.8.4|2020.12.29|http://183.63.72.243:48080/svn/doc/aPaaS/V3.1/5.发布阶段/程序包/offline-engine.zip (3198)||
|v2.8.3|2020.9.29|养元|http://183.63.72.243:48080/svn/doc/aPaaS/V3.0/5.发布阶段/程序包/offline-engine.zip (2930)|\* 【fix】升级springboot和sping-framework版本，修复安全漏洞|
|v2.8.2|2020.9.18|加多宝|http://183.63.72.243:48080/svn/doc/aPaaS/V2.9/5.发布阶段/程序包/offline-engine.zip （2881）|\* 【new】调整了flycode离线数据获取，读取数据库链接根据flycode配置\* 【new】优化了日志，以便统计|
|v2.8.1|2020.7.3|http://183.63.72.243:48080/svn/doc/aPaaS/V2.9/5.发布阶段/程序包/offline-engine.zip (2605)|\* 【new】flycode新增原生SQL的语法支持\* 【new】flycode新增支持调用第三方http,webservice,db等的OpenDataAPI.|
|v2.8.0|2020.4.8|http://183.63.72.243:48080/svn/doc/aPaaS/V2.8/5.发布阶段/程序包/offline-engine.zip(2390)|\* 【new 】增加接口，获取自定义控件协议。web端使用|
|v2.6.1|2019.12.13|http://183.63.72.243:48080/svn/doc/aPaaS/V2.6/5.发布阶段/程序包/offline-engine/offline-engine.zip(2143)||