---
title: messageserv（消息服务）
date: 2020-05-25T14:22:09
---

## messageserv（消息服务）

||||||
|---|---|---|---|---|
|历史版本|发布时间|部署该版本环境|下载路径|服务说明|
|v2.12.4|2023.8.31|https://xwsvn.wxchina.com/doc1/aPaaS/V5.1/5.发布阶段/程序包/messageserv.zip(1436)|新功能新增1003消息类型新增版本配置文件新增版本上传服务版本查询“功能完善，自动抓取生成对应已部署的服务版本清单，并上传@4482修复缺陷五丰安全问题，升级部分依赖包版本#9247五丰安全问题，升级部分依赖包版本#5172|
|v2.12.2|2023.4.27|https://xwsvn.wxchina.com/doc1/aPaaS/V5.0/5.发布阶段/程序包/messageserv.zip(1027)|修复缺陷兼容旧版ide保存业务confjson时tenantdbname为空的时导致的数据源引用不一致导致的事务问题|
|v2.12.1|2023.2.28|https://xwsvn.wxchina.com/doc1/aPaaS/V5.0/5.发布阶段/程序包/messageserv.zip(916)|新功能适配nacos开启认证#3366|
|v2.12.0|2023.1.9|https://xwsvn.wxchina.com/doc1/aPaaS/V4.2/5.发布阶段/程序包/messageserv.zip(808)|新功能不返回全部元数据#这个标签修复缺陷消息撤回功能，修复已知bug@3306消息撤回功能@3306|
|v2.11.9|2022.11.23|https://xwsvn.wxchina.com/doc1/aPaaS/V4.1/5.发布阶段/程序包/messageserv.zip(644)|新功能兼容3001 3002 3003调度报警、调度报表|
|v2.11.8|2022.10.13|https://xwsvn.wxchina.com/doc1/aPaaS/V4.1/5.发布阶段/程序包/messageserv.zip(504)|新功能兼容短信验证码红点问题修复缺陷将包下载url的nacos配置项改成在server里用ide服务加相对路径构成@2572|
|v2.11.6|2022.9.13|https://xwsvn.wxchina.com/doc1/aPaaS/V4.1/5.发布阶段/程序包/messageserv.zip(398)|新功能第三方依赖包管理 需求修改 修复已知bug@2572修复缺陷修复红点消息负数问题，小于0直接等于0事务问题排查5981|
|v2.11.4|2022.8.12|https://xwsvn.wxchina.com/doc1/aPaaS/V4.1/5.发布阶段/程序包/messageserv.zip(354)|新功能第三方依赖包管理@2572修复缺陷修复标记已读消息时将"1001","1002","4001"类型以外的消息也标记为已读，最后统计标记总数时超出预期数值，导致可能出现负数的问题|
|v2.11.2|2022.6.2|https://xwsvn.wxchina.com/doc/aPaaS/V4.0/5.发布阶段/程序包/messageserv.zip(4437)|修复缺陷升级fastjson版本到1.2.83#5172|
|v2.10.0|2021.9.15|http://183.63.72.243:48080/svn/doc/aPaaS/V3.3/5.发布阶段/程序包/messageserv.zip(3966)|新功能增加了发送接口对红点计数消息的类型过滤特性)类型暂时在代码里写死)@1078增加了pageMessages接口参数，前端可以控制是否更新红点信息了；修复了没有传日期范围参数时默认为90天写死的bug@1078增加消息中心关键字搜索支持@1078完成web审批通知/公告通知的消息提醒的一些接口参数调整@1078完成web审批通知/公告通知的消息提醒@1078|
|v2.8.2|2020.12.29|http://183.63.72.243:48080/svn/doc/aPaaS/V3.1/5.发布阶段/程序包/messageserv.zip (3198)||
|v2.8.1|2020.9.29|养元|http://183.63.72.243:48080/svn/doc/aPaaS/V3.0/5.发布阶段/程序包/messageserv.zip (2930)|\* 【fixed】 升级springboot和sping-framework版本，修复安全漏洞。|
|v2.7.1|2020.3.12|福临门/恒顺|http://183.63.72.243:48080/svn/doc/aPaaS/v2.7/5.发布阶段/程序包/message-rest.zip(2205)|\* 【change】将ios和安卓的appKey、masterKey分离\* 【new】新增getMsgTicketById1接口|
|v2.6.1|2019.12.13|http://183.63.72.243:48080/svn/doc/aPaaS/V2.6/5.发布阶段/程序包/backend/backend.zip(2143)||