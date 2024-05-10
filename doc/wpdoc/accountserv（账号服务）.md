---
title: accountserv（账号服务）
date: 2020-05-25T11:31:15
---

## accountserv（账号服务）

||||||
|---|---|---|---|---|
|历史版本|发布时间|部署该版本环境|下载路径|服务说明|
|2.11.9|2023.8.31|https://xwsvn.wxchina.com/doc1/aPaaS/V5.1/5.发布阶段/程序包/accountserv.zip(1433)|新功能新增版本上传服务版本查询“功能完善，自动抓取生成对应已部署的服务版本清单，并上传@4482新增1003消息类型新增版本配置文件修复缺陷五丰安全问题，升级部分依赖包版本#5172修复部分没有userinfoid的记录无法查出的bug@37902修复复制导航节点无法删除的问题#4220增加平台状态的过滤#4223五丰安全问题，升级部分依赖包版本#9247【帐号管理】当查询条件输入'查询，直接报错。对参数userinfoname和accountname增加转义操作#4534|
|2.11.8|2023.4.27|https://xwsvn.wxchina.com/doc1/aPaaS/V5.0/5.发布阶段/程序包/accountserv.zip(1023)|新功能SFA管理员账号管理处增加职位筛选条件@4139修复缺陷兼容旧版ide保存业务confjson时tenantdbname为空的时导致的数据源引用不一致导致的事务问题修复已知bug@4139加入有效状态判断@4139修复重复帐号问题，去掉返回positionname@4139|
|2.11.7|2023.2.28|https://xwsvn.wxchina.com/doc1/aPaaS/V5.0/5.发布阶段/程序包/accountserv.zip(910)|新功能适配nacos开启认证#3366|
|2.11.6|2023.1.9|https://xwsvn.wxchina.com/doc1/aPaaS/V4.2/5.发布阶段/程序包/accountserv.zip(809)|新功能不返回全部元数据#这个标签修复缺陷消息撤回功能，修复已知bug@3306消息撤回功能@3306|
|2.11.5|2022.12.5|https://xwsvn.wxchina.com/doc1/aPaaS/V4.1/5.发布阶段/程序包/accountserv.zip(727)|新功能调度报警、调度报表帐号服务兼容调用apaasadmin获取环境编码的代码处理@3107兼容鸿蒙系统隐私限制@3012兼容3001 3002 3003兼容短信验证码红点问题修复缺陷设备绑定读写库问题@17946|
|2.11.4|2022.9.14|https://xwsvn.wxchina.com/doc1/aPaaS/V4.1/5.发布阶段/程序包/accountserv.zip(418)|修复缺陷将包下载url的nacos配置项改成在server里用ide服务加相对路径构成@2572|
|2.11.3|2022.9.13|https://xwsvn.wxchina.com/doc1/aPaaS/V4.1/5.发布阶段/程序包/accountserv.zip(402)|新功能第三方依赖包管理 需求修改 修复已知bug@2572第三方依赖包管理 需求修改@2572去掉租户限制@2572修复缺陷事务问题排查5981getRoleInfo和getGrantFuntions接口改成写库@12493修复红点消息负数问题，小于0直接等于0|
|2.11.2|2022.8.4|https://xwsvn.wxchina.com/doc1/aPaaS/V4.1/5.发布阶段/程序包/accountserv.zip(298)|新功能第三方依赖包管理@2572修复缺陷修复标记已读消息时将"1001","1002","4001"类型以外的消息也标记为已读，最后统计标记总数时超出预期数值，导致可能出现负数的问题元数据迁移临时我呢件路径问题兼容|
|2.11.1|2022.6.2|https://xwsvn.wxchina.com/doc/aPaaS/V4.0/5.发布阶段/程序包/accountserv.zip(4436)|修复缺陷升级fastjson版本到1.2.83#5172|
|2.11.0|2022.4.28|https://xwsvn.wxchina.com/doc/aPaaS/V4.0/5.发布阶段/程序包/accountserv.zip(4374)|新功能插件 - 支持资源注入、配置注入、组件连接等特性新增了OpenAuth若干接口，新增OpenEncoder类，OpenLoginController新增runadapter接口修复缺陷修复租户安装插件版本的bug，以及优化重复创建数据源的问题修复一些插件的已知bugapaas插件 解决已知的bug修复保存组织时fullname被错改问题|
|2.10.0|2022.1.7|https://xwsvn.wxchina.com/doc/aPaaS/V3.4/5.发布阶段/程序包/accountserv.zip(4234)|新功能apaas插件 mvp分库支持@1271新增分库支持@1271实现多语言@1323配置项改造:新增服务集群下的节点差异配置@831增加opencache新增了OpenAuth若干接口，新增OpenEncoder类，OpenLoginController新增runadapter接口查询文件信息@1395超级表单规则定义增加属性bug fixes@1426stability fixes@1425stability fixes@1316stability fixes@1424bug fixes@1425数据字典搜索@1316字段权限管理@1428 @1427添加启停语言功能@1323bug fixes@1423 @1426用户字段权限管理@1423 @1426增加了发送接口对红点计数消息的类型过滤特性)类型暂时在代码里写死)@1078增加了pageMessages接口参数，前端可以控制是否更新红点信息了；修复了没有传日期范围参数时默认为90天写死的bug@1078增加消息中心关键字搜索支持@1078完成web审批通知/公告通知的消息提醒的一些接口参数调整@1078完成web审批通知/公告通知的消息提醒@1078修复缺陷apaas插件 解决已知的bug修复同时登录同一帐号导致消息未读数不对的问题@1078[#749](http://183.238.58.121:17042/zentao/story-view-749.html)|
|2.8.5|2021.4.26|http://183.63.72.243:48080/svn/doc/aPaaS/V3.2/5.发布阶段/程序包/accountserv.zip(3508)|增加错误类型定义数据字典列表接口输出增加其他语言字段输出[#749](http://183.238.58.121:17042/zentao/story-view-749.html)|
|2.8.4|2021.3.26|http://183.63.72.243:48080/svn/doc/aPaaS/V3.1/5.发布阶段/程序包/accountserv.zip (3457)|新功能增加updateopname createopname处理轻表单授权增加租户lisence控制#531|
|2.8.3|2020.12.29|http://183.63.72.243:48080/svn/doc/aPaaS/V3.1/5.发布阶段/程序包/accountserv.zip （3198）|\* 【fix】修复部分异常未记录日志的问题\* 【fix】修复大量操作只读库报错的bug。|
|2.8.2|2020.9.29|养元|http://183.63.72.243:48080/svn/doc/aPaaS/V3.0/5.发布阶段/程序包/accountserv.zip (2930)|\* 【new】新增强制清除绑定功能\* 【new】新增查看账号登陆历史功能\* 【fix】升级springboot和sping-framework版本，修复安全漏洞。|
|2.8.1|2020.6.15|http://183.63.72.243:48080/svn/doc/aPaaS/V2.8/5.发布阶段/程序包/accountserv.zip(2563)|【fixed】修复测试环境导出的文件无法导入实施环境的bug；【change】移除私库依赖，内部代码全部使用项目依赖。|
|2.8.0|2020.4.8|http://183.63.72.243:48080/svn/doc/aPaaS/V2.8/5.发布阶段/程序包/accountserv.zip(2388)|\* 【fixed】 字典名字检查接口，加入父节点id检查|
|V2.7.1|2020.01.16|http://183.63.72.243:48080/svn/doc/aPaaS/V2.6/5.发布阶段/程序包/backend/backend.zip(2143)|【new】适配awss3【change】优化接口：验证码重置密码、发送验证码【new】增加LogsApsect|
|V2.6.2|2019.12.12|http://183.63.72.243:48080/svn/doc/aPaaS/V2.6/5.发布阶段/程序包/backend/backend.zip(2143)|【fix】修复发送小程序消息bug|
|2.6.1|2019.12.06|http://183.63.72.243:48080/svn/doc/aPaaS/V2.6/5.发布阶段/程序包/backend/backend.zip(2143)|【new】合并了小程序到认证服务|
|2.6.0|2019.10.10|http://183.63.72.243:48080/svn/doc/aPaaS/V2.6/5.发布阶段/程序包/backend/backend.zip(2143)|更新注意事项：role-permission内容合并进来，nginx的路由需要配合修改。不兼容性说明：无【new】合并了role-permission的租户认证接口【new】新增配置中心支持|
|V2.5.2|2019.07.31|http://183.63.72.243:48080/svn/doc/aPaaS/V2.6/5.发布阶段/程序包/backend/backend.zip(2143)|更新注意事项：cmdb更新了认证服务资源，配置文件增加了redis的配置不兼容性说明：无【new】新增短信验证接口|
|V2.5.1|2019.05.08|http://183.63.72.243:48080/svn/doc/aPaaS/V2.6/5.发布阶段/程序包/backend/backend.zip(2143)|更新注意事项：login接口返回的信息有新增字段，客户端的json解包必须是非严格模式，否则会报错。不兼容性说明：无【new】登录时，返回的租户信息加入元数据模型分类,产品还是实施.|