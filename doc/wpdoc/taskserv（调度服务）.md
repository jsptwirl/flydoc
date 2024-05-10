---
title: taskserv（调度服务）
date: 2020-05-25T14:23:56
---

## taskserv（调度服务）

||||||
|---|---|---|---|---|
|历史版本|发布时间|部署该版本环境|下载路径|服务说明|
|v2.8.12|2023.8.31|https://xwsvn.wxchina.com/doc1/aPaaS/V5.1/5.发布阶段/程序包/taskserv.zip(1439)|新功能新增版本上传服务版本查询“功能完善，自动抓取生成对应已部署的服务版本清单，并上传@4482修复缺陷五丰安全问题，升级部分依赖包版本#5172兼容新增时IDE客户端没有传inputtype字段的问题#4730五丰安全问题，升级部分依赖包版本#9247|
|v2.8.11|2023.4.27|https://xwsvn.wxchina.com/doc1/aPaaS/V5.0/5.发布阶段/程序包/taskserv.zip(1031)|修复缺陷兼容旧版ide保存业务confjson时tenantdbname为空的时导致的数据源引用不一致导致的事务问题兼容IDE没有传inputtype字段#3721|
|v2.8.10|2023.2.28|https://xwsvn.wxchina.com/doc1/aPaaS/V5.0/5.发布阶段/程序包/taskserv.zip(915)|新功能适配nacos开启认证#3366不返回全部元数据#这个标签|
|v2.8.9|2023.1.9|https://xwsvn.wxchina.com/doc1/aPaaS/V4.2/5.发布阶段/程序包/taskserv.zip(804)|新功能调度报警、调度报表调度自定义表达式、报警时限设置接口相关改动|
|v2.8.8|2022.6.2|https://xwsvn.wxchina.com/doc/aPaaS/V4.0/5.发布阶段/程序包/taskserv.zip(4440)|修复缺陷升级fastjson版本到1.2.83#5172|
|v2.8.7|2022.5.10|https://xwsvn.wxchina.com/doc/aPaaS/V4.0/5.发布阶段/程序包/taskserv.zip(4392)|修复缺陷修改调度misfire策略:错过调度时间阈值则尽快执行一次|
|v2.8.6|2022.2.24|https://xwsvn.wxchina.com/doc/aPaaS/V3.4/5.发布阶段/程序包/taskserv.zip(4297)|新功能调度服务中添加兼容)针对旧的BI调度)，继续记录调用失败的明细信息。|
|v2.8.5|2021.7.29|养元|http://183.63.72.243:48080/svn/doc/aPaaS/V3.2/5.发布阶段/程序包/taskserv.zip (3857)|新功能配置项改造:新增服务集群下的节点差异配置@831增加opencache写入优化:调整服务的写入的方法，错误信息，不写入数据库)Service V3.3 )@1105|
|v2.8.3|2021.5.6|http://183.63.72.243:48080/svn/doc/aPaaS/V3.2/5.发布阶段/程序包/taskserv.zip(3530)|新功能新增功能，发布全部调度时，仅发布启用状态下的任务#501|
|v2.8.2|2020.12.29|http://183.63.72.243:48080/svn/doc/aPaaS/V3.1/5.发布阶段/程序包/taskserv.zip (3198)||
|v2.8.1|2020.9.29|http://183.63.72.243:48080/svn/doc/aPaaS/V3.0/5.发布阶段/程序包/taskserv.zip (2930)|\* 【fix】升级springboot和sping-framework版本，修复安全漏洞。|
|v2.8.0|2020.8.4|http://183.63.72.243:48080/svn/doc/aPaaS/V2.9/5.发布阶段/程序包/taskserv.zip (2727)|\* 【change】修复logback.xml日志路径多了一个l字母|
|v2.6.1|2019.12.13|http://183.63.72.243:48080/svn/doc/aPaaS/V2.6/5.发布阶段/程序包/backend/backend.zip(2143)||
|v2.5.2|2021.8.3|http://183.63.72.243:48080/svn/doc/aPaaS/V2.5/5.发布阶段/程序包/后台服务/task-service/task-service.zip(3868)||