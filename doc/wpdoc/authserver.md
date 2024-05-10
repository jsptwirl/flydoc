---
title: authserver
date: 2020-05-25T14:25:49
---

## authserver

||||||
|---|---|---|---|---|
|历史版本|发布时间|部署该版本环境|下载路径|服务说明|
|v2.10.10|2023.8.31|https://xwsvn.wxchina.com/doc1/aPaaS/V5.1/5.发布阶段/程序包/authserver.zip(1438)|新功能新增版本上传服务版本查询“功能完善，自动抓取生成对应已部署的服务版本清单，并上传@4482新增1003消息类型新增版本配置文件新增changeclienttype接口，用于切换token中的客户端类型#4648版本配置文件修复缺陷五丰安全问题，升级部分依赖包版本#5172修复部分没有userinfoid的记录无法查出的bug@37902修复复制导航节点无法删除的问题#4220增加平台状态的过滤#4223五丰安全问题，升级部分依赖包版本#9247修复多select语句问题|
|v2.10.8|2023.4.7|https://xwsvn.wxchina.com/doc1/aPaaS/V5.0/5.发布阶段/程序包/authserver.zip(973)|新功能SFA管理员账号管理处增加职位筛选条件@4139openlogin 增加username的获取@4093修复缺陷兼容旧版ide保存业务confjson时tenantdbname为空的时导致的数据源引用不一致导致的事务问题修复已知bug@4139加入有效状态判断@4139修复重复帐号问题，去掉返回positionname@4139|
|v2.10.7|2023.2.28|https://xwsvn.wxchina.com/doc1/aPaaS/V5.0/5.发布阶段/程序包/authserver.zip(914)|新功能适配nacos开启认证#3366不返回全部元数据#这个标签修复缺陷消息撤回功能，修复已知bug@3306消息撤回功能@3306|
|v2.10.6|2023.1.9|https://xwsvn.wxchina.com/doc1/aPaaS/V4.2/5.发布阶段/程序包/authserver.zip(803)|新功能调度报警、调度报表兼容3001 3002 3003支持sts华为云-天翼云对象存储适配|
|v2.10.6|2022.12.9|https://xwsvn.wxchina.com/doc1/aPaaS/V4.1/5.发布阶段/程序包/authserver.zip(732)|新功能支持sts华为云-天翼云对象存储适配|
|v2.10.5|2022.10.13|https://xwsvn.wxchina.com/doc1/aPaaS/V4.1/5.发布阶段/程序包/authserver.zip(502)|新功能帐号服务兼容调用apaasadmin获取环境编码的代码处理@3107兼容短信验证码红点问题修复缺陷设备绑定读写库问题@17946|
|v2.10.4|2022.9.30|https://xwsvn.wxchina.com/doc1/aPaaS/V4.1/5.发布阶段/程序包/authservice.zip(461)|新功能兼容鸿蒙系统隐私限制@3012修复缺陷将包下载url的nacos配置项改成在server里用ide服务加相对路径构成@2572|
|v2.10.3|2022.9.13|https://xwsvn.wxchina.com/doc1/aPaaS/V4.1/5.发布阶段/程序包/authservice.zip(407)|新功能第三方依赖包管理 需求修改 修复已知bug@2572第三方依赖包管理@2572第三方依赖包管理 需求修改@2572minio sts 支持多数据库支持@2042支持第二种获取小程序二维码的接口)无限次数)，兼容原来第一种接口，做了接口分离@17474修复缺陷事务问题排查5981getRoleInfo和getGrantFuntions接口改成写库@12493修复红点消息负数问题，小于0直接等于0修复标记已读消息时将"1001","1002","4001"类型以外的消息也标记为已读，最后统计标记总数时超出预期数值，导致可能出现负数的问题去掉多数据库支持登录:帐号输入密码错误提示语中，存在错别字。#19402|
|v2.10.2|2022.6.16|https://xwsvn.wxchina.com/doc/aPaaS/V4.0/5.发布阶段/程序包/authserver.zip(4461)|新功能适配华为云OBS对象存储@2318|
|v2.10.1|2022.6.2|https://xwsvn.wxchina.com/doc/aPaaS/V4.0/5.发布阶段/程序包/authserver.zip(4441)|修复缺陷升级fastjson版本到1.2.83#5172|
|v2.10.0|2021.9.15|http://183.63.72.243:48080/svn/doc/aPaaS/V3.3/5.发布阶段/程序包/authserver.zip(3967)|新功能配置项改造:新增服务集群下的节点差异配置@831增加opencache新增了OpenAuth若干接口，新增OpenEncoder类，OpenLoginController新增runadapter接口增加了发送接口对红点计数消息的类型过滤特性)类型暂时在代码里写死)@1078增加了pageMessages接口参数，前端可以控制是否更新红点信息了；修复了没有传日期范围参数时默认为90天写死的bug@1078增加消息中心关键字搜索支持@1078完成web审批通知/公告通知的消息提醒的一些接口参数调整@1078完成web审批通知/公告通知的消息提醒@1078OPENENCODER新增toJsonString方法新增了OpenAuth的unbind接口修复缺陷修复getAccountByTel和createAccount的多租户问题openlogin时返回的token内容加上username1；修复unbind的sql语句|
|v2.9.0|2021.6.29|http://183.63.72.243:48080/svn/doc/aPaaS/V3.2/5.发布阶段/程序包/authserver.zip(3755)|新功能密码策略、认证安全等配置项迁移到租户级应用配置，允许IDE修改。@835新增获取应用级配置项的接口tenantsettings@834修复缺陷修复微信小程序API调整后的适配问题#575|
|v2.8.5|2021.3.26|http://183.63.72.243:48080/svn/doc/aPaaS/V3.1/5.发布阶段/程序包/authserver.zip (3457)|新功能增加updateopname createopname处理轻表单授权增加租户lisence控制#531|
|v2.8.4|2021.2.25|http://183.63.72.243:48080/svn/doc/aPaaS/V3.1/5.发布阶段/程序包/authserver.zip (3362)|\*【fix】 #575 修复小程序接口调整后的不兼容问题。|
|v2.8.3|2020.12.29|http://183.63.72.243:48080/svn/doc/aPaaS/V3.1/5.发布阶段/程序包/authservice.zip (3198)|\* 【new】 异常日志的补充，以及参数校验的日志补充\* 【change】 调整密码锁定提示信息，以及锁定策略（任何一次成功都会重置计数器）\* 【change】 调整密码错误锁帐号策略，改为错误次数和锁定时间可配。\* 【fix】 修复bug——当openconfjson为空的时候和adaptertype不为1的时候openconfjson不包含appcode的错误情况判断\* 【change】 调整异常处理信息，区分用户类异常和数据库异常，避免异常被吞等日志问题。\* 【new】 新增登录密码加密|
|v2.8.2|2020.9.29|养元|http://183.63.72.243:48080/svn/doc/aPaaS/V3.0/5.发布阶段/程序包/authserver.zip (2930)|\* 【new】 新增密码过期提醒功能\* 【new】 新增授权集成js引擎相关api\* 【fixed】 升级springboot和sping-framework版本，修复安全漏洞|
|v2.8.1|2020.7.3|http://183.63.72.243:48080/svn/doc/aPaaS/V2.9/5.发布阶段/程序包/authserver.zip （2605）|\* 【new】 新增张家口的sts的endpoint\* 【new】 新增获取第三方会话接口\* 【fixed】 解决unbind(退出登录)后，查询到的手机端最后登录版本为上一次未退出的的手机端版本。|
|v2.8.0|2020.4.8|http://183.63.72.243:48080/svn/doc/aPaaS/V2.8/5.发布阶段/程序包/authservice.zip(2390)|\* 【new】 新增js引擎和第三方登录集成相关接口|
|v2.7.1|2020.3.11|http://183.63.72.243:48080/svn/doc/aPaaS/v2.7/5.发布阶段/程序包/authserver.zip(2205)|\* 【new】适配awss3\* 【change】优化接口：验证码重置密码、发送验证码\* 【new】增加LogsApsect|
|v2.6.2|2019.12.26|http://183.63.72.243:48080/svn/doc/aPaaS/V2.6/5.发布阶段/程序包/authserver/authserver.zip(2164)||
|v2.6.1|2019.12.13|http://183.63.72.243:48080/svn/doc/aPaaS/V2.6/5.发布阶段/程序包/authserver/authserver.zip(2147)||