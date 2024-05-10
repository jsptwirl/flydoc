---
title: datamanager-admin
date: 2020-09-15T15:39:12
---

## datamanager-admin

||||||
|---|---|---|---|---|
|历史版本|发布时间|部署该版本环境|下载路径|服务说明|
|v1.3.1|2022.7.1|https://xwsvn.wxchina.com/doc/BI/V1.3/5.发布阶段/datamanager-admin/datamanager-admin.zip(4501)|新功能可配置事务租户参数解析增加数据加工的事务控制配置报表侧自定义数据源, 可配置调度只作用于某租户报表侧数据 来源支持自定义切换的配置默认id生成方式为assign\_id数据源方面 增加odps解析支持动态根据任务增加系统变量 $tenantcode的解析，适用于同一任务不同租户运行的情况导入导出需要，应用分布式唯一id修复缺陷更新终止任务 级联删除fastjson 漏洞修复，引擎分布式id支持多租户缓存清理临时任务日志保留，非独立部署数据源缓存取值有误处理终止任务异常修复小问题优化-优化 @ignore脚本解析，日志报错优化|
|v1.3.0|2022.1.5|https://xwsvn.wxchina.com/doc/BI/V1.3/5.发布阶段/datamanager-admin/datamanager-admin.zip(4217)|新功能依赖调度优化，按时间顺序执行 feat: 数据血缘优化，区分血缘跟影响分析表管理其他项目录下的显示问题 feat:模型维度的字段问题修复生成模型元数据时存在失效字段也保存的问题 feat: 表备注为空时优化显示python脚本处理 feat: 数据分发初版修复缺陷导入导出时增加 退化维度的解析 feat: 列表增加 创建人、时间的展示python运行动态变量与文件缓存冲突修复1.sql执行器修复 未捕获异常的bug 2.血缘关系优化 add: 增加python3 脚本处理|
|v1.2.6|2021.9.29|恒顺|http://183.63.72.243:48080/svn/doc/BI/程序包/V1.2/5.发布阶段/datamanager-admin/datamanager-admin.zip(4005)|修复缺陷python运行动态变量与文件缓存冲突修复|
|v1.2.5|2021.8.25|养元|http://183.63.72.243:48080/svn/doc/BI/程序包/V1.2/5.发布阶段/datamanager-admin/datamanager-admin.zip(3929)|1.sql执行器修复 未捕获异常的bug2.血缘关系优化 add: 增加python3\. 脚本处理|
|v1.2.4|2021.5.17|http://183.63.72.243:48080/svn/doc/BI/程序包/V1.2/5.发布阶段/datamanager-admin/datamanager-admin.zip(3636)|\* 【fix】 1. 修复callback日志多次写问题2\. 修复租户执行情况统计有误的问题|
|v1.2.3|2021.5.7|http://183.63.72.243:48080/svn/doc/BI/程序包/V1.2/5.发布阶段/datamanager-admin/datamanager-admin.zip(3570)|【add】 1. 支持产品租户迁移【fix】 1. 修复本地数据源缓存的问题|
|v1.2.2|2021.3.4|http://183.63.72.243:48080/svn/doc/BI/程序包/V1.2/5.发布阶段/datamanager-admin/datamanager-admin.zip (3379)|【add】 1. 引入多租户概念，支持多租户划分【fix】 1. 修复执行器执行结果多次回调的bug|
|v1.2.1|2020.12.22|http://183.63.72.243:48080/svn/doc/BI/程序包/V1.2/5.发布阶段/datamanager-admin/datamanager-admin.zip (3178)|【add】 1. 新增退化维度配置功能 2.增加扩展第三方任务接入能力【fix】 1. 修复 从ide导入、导出的属性无默认值问题，增加默认值|
|v1.2.0|2020.9.15|http://183.63.72.243:48080/svn/doc/BI/程序包/V1.2/5.发布阶段/datamanager-admin/datamanager-admin.zip（2861）||