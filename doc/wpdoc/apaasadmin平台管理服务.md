---
title: apaasadmin平台管理服务
date: 2020-05-25T14:35:03
---

## apaasadmin平台管理服务

|||||
|---|---|---|---|
|历史版本|发布时间|下载路径|服务说明|
|v2.10.2|2023.2.28|https://xwsvn.wxchina.com/doc1/aPaaS/V5.0/5.发布阶段/程序包/apaasadmin.zip(911)|新功能适配nacos开启认证#3366不返回全部元数据#这个标签调度报警、调度报表第三方依赖包管理 需求修改 修复已知bug@2572第三方依赖包管理@2572修复缺陷将包下载url的nacos配置项改成在server里用ide服务加相对路径构成@2572事务问题排查5981|
|v2.10.1|2022.6.2|https://xwsvn.wxchina.com/doc/aPaaS/V4.0/5.发布阶段/程序包/apaasadmin.zip(4450)|修复缺陷升级fastjson版本到1.2.83#5172|
|v2.10.0|2022.1.7|https://xwsvn.wxchina.com/doc/aPaaS/V3.4/5.发布阶段/程序包/apaasadmin.zip(4233)|新功能apaas插件 mvp分库支持@1271新增分库支持@1271实现多语言@1323修复缺陷apaas插件 解决已知的bug|
|v2.9.0|2021.9.15|http://183.63.72.243:48080/svn/doc/aPaaS/V3.3/5.发布阶段/程序包/apaasadmin.zip(3973)|新功能增加接收脚本的功能 Fix: 修复win换行符和linux换行符不同导致的bug增加日志查询功能增加导入导出统计的后台增加离线服务统计图表的功能增加业务高峰图和允许部分统计图可选择排序方式就改变日志存放位置做适配性修改 Fix: 干掉mybatis无用路径增加crontab配置脚本,日志统计脚本做适配性修改修复缺陷当存在innerport字段时，应该获取innerip。1.修改参数错误 2.修改岗位包含-引发的统计错误|
|v2.8.6|2021.3.26|http://183.63.72.243:48080/svn/doc/aPaaS/V3.1/5.发布阶段/程序包/apaasadmin.zip (3457)|新功能增加updateopname createopname处理修复缺陷当存在innerport字段时，应该获取innerip。1.修改参数错误 2.修改岗位包含-引发的统计错误租户license控制——修复启停租户的bug|
|v2.8.5|2020.12.29|http://183.63.72.243:48080/svn/doc/aPaaS/V3.1/5.发布阶段/程序包/apaasadmin.zip (3198)|\* 【fix】修复——配置中心的同步功能的bug\* 【fix】更新设置License数的脚本\* 【new】增加日志查询功能\* 【new】增加导入导出统计的后台\* 【new】增加离线服务统计图表的功能\* 【new】增加业务高峰图和允许部分统计图可选择排序方式\* 【change】就改变日志存放位置做适配性修改\* 【new】增加crontab配置脚本,日志统计脚本做适配性修改\* 【change】优先获取innerport\* 【new】增加接收脚本的功能|
|v2.8.4|2020.10.14|http://183.63.72.243:48080/svn/doc/aPaaS/V3.0/5.发布阶段/程序包/apaasadmin.zip (2963)|\*【fixed】第三方接入配置列表显示失败。|
|v2.8.3|2020.9.29|http://183.63.72.243:48080/svn/doc/aPaaS/V3.0/5.发布阶段/程序包/apaasadmin.zip (2930)|\*【new】新增业务Js\*【fixed】升级springboot和sping-framework版本，修复安全漏洞。|
|v2.8.2|2020.7.27|http://183.63.72.243:48080/svn/doc/aPaaS/V2.9/5.发布阶段/程序包/apaasadmin.zip (2692)|\*【new】新增业务Js\*【fixed】修复配置信息全部使用默认参数，相关数据库信息使用nacos和core里的信息。删除Js引擎不需要的配置参数|
|v2.8.1|2020.7.3|http://183.63.72.243:48080/svn/doc/aPaaS/V2.9/5.发布阶段/程序包/apaasadmin.zip （2605）|\*【new】新增JS引擎新增第三方授权配置新增租户管理的业务接口\*【change】租户资源换用v2.61的实现方法，从数据库取.相关sql 使用v2.61版本\*【fixed】修复识别flycode 保存的时候适配分号造成的问题解决租户管理/list接口显示多条一样的租户的bug修复租户生成管理员因为没有挂接productpackagecode默认值出现的异常修复配置数据库连接失败的bug删除开发者帐号是更新状态为2 ，没有物理删除。但是新建的时候没有校验状态，返回已存在的提示|
|v2.8.0|2020.4.8|http://183.63.72.243:48080/svn/doc/aPaaS/V2.8/5.发布阶段/程序包/apaasadmin.zip(2390)|\*【new】 最新集成js引擎的源码|