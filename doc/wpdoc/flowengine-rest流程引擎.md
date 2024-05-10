---
title: flowengine-rest流程引擎
date: 2020-05-25T14:29:37
---

## flowengine-rest流程引擎

||||||
|---|---|---|---|---|
|历史版本|发布时间|部署该版本环境|下载路径|服务说明|
|v2.12.3|2023.8.31|https://xwsvn.wxchina.com/doc1/aPaaS/V5.1/5.发布阶段/程序包/flowengine-rest.zip(1441)|新功能新增版本上传服务版本查询“功能完善，自动抓取生成对应已部署的服务版本清单，并上传@4482版本配置文件修复缺陷五丰安全问题，升级部分依赖包版本#5172五丰安全问题，升级部分依赖包版本#9247|
|v2.12.2|2023.4.27|https://xwsvn.wxchina.com/doc1/aPaaS/V5.0/5.发布阶段/程序包/flowengine-rest.zip(1035)|修复缺陷兼容旧版ide保存业务confjson时tenantdbname为空的时导致的数据源引用不一致导致的事务问题|
|v2.12.0|2023.1.9|https://xwsvn.wxchina.com/doc1/aPaaS/V4.2/5.发布阶段/程序包/flowengine-rest.zip(807)|新功能不返回全部元数据#这个标签|
|v2.11.3|2022.11.24|https://xwsvn.wxchina.com/doc1/aPaaS/V4.1/5.发布阶段/程序包/flowengine-rest.zip(653)|修复缺陷岗位输出字段的列名写错别名@24683queryPeerOrgMemberListByMemberId 语句修复|
|v2.11.2|2022.9.13|https://xwsvn.wxchina.com/doc1/aPaaS/V4.1/5.发布阶段/程序包/flowengine-rest.zip(405)|新功能第三方依赖包管理 需求修改 修复已知bug@2572第三方依赖包管理@2572登录sfa管理员账号，选择审批管理，输入不完整的流程编号，实现模糊搜索修复缺陷事务问题排查5981|
|v2.11.1|2022.6.2|https://xwsvn.wxchina.com/doc/aPaaS/V4.0/5.发布阶段/程序包/flowengine-rest.zip(4448)|修复缺陷升级fastjson版本到1.2.83#5172|
|v2.11.0|2022.4.28|https://xwsvn.wxchina.com/doc/aPaaS/V4.0/5.发布阶段/程序包/flowengine-rest.zip(4366)|新功能插件 - 支持资源注入、配置注入、组件连接等特性修复缺陷修复租户安装插件版本的bug，以及优化重复创建数据源的问题修复一些插件的已知bug修复ide流程模糊查询名字时出先错误记录的bug右侧展示列表建议优先按修改时间倒序排序@1780|
|v2.10.0|2021.9.15|益海嘉里|http://183.63.72.243:48080/svn/doc/aPaaS/V3.3/5.发布阶段/程序包/flowengine-rest.zip(3970)|新功能配置项改造:新增服务集群下的节点差异配置@831增加opencache新增了OpenAuth若干接口，新增OpenEncoder类，OpenLoginController新增runadapter接口支持非申请节点的撤回增加附件、催办、抄送等功能增加分享接口增加v3.3服务接口|
|v2.9.0|2021.6.29|http://183.63.72.243:48080/svn/doc/aPaaS/V3.2/5.发布阶段/程序包/flowengine-rest.zip(3754)|新功能增加processinstanceid查询过滤增加流程管理功能接口方法@850增加获取当前节点消息参数，消息参数增加 af\_taskcategory 输出处理不同意多退回选择问题预发起接口返回暂存功能定义暂存功能调用逻辑增加#333解决回退到申请节点后，直送的昝问题#271修改流程choice功能返回问题#271流程撤回修改#271增加流程管理功能接口方法@850需要更新数据库表脚本，增加了图标、顺序、创建人、修改人等字段。元数据增加了流程成员选择flycode，用于加签、转办、沟通使用。web端流程中心页面注册。详情看流程引擎服务v3.2更新说明.zip获取流程消息参数接口，增加了af\_taskcategory输出增加修改人、修改时间#495增加任务数数量计算接口#271流程增加获取流程定义xml数据接口#271修复缺陷判断新旧配置调整 feature(#495):增加修改人、修改时间提交行为逻辑错误获取问题下一步接口兼容出错web端，旧流程，点击同意，选择人后点击提交，前端报错兼容申请提交choice=0情况处理申请提交时获取下一步的处理问题沟通加评论处理|
|v2.8.5|2021.5.6|http://183.63.72.243:48080/svn/doc/aPaaS/V3.2/5.发布阶段/程序包/flowengine-rest.zip(3523)|新功能增加获取当前节点消息参数，消息参数增加 af\_taskcategory 输出处理不同意多退回选择问题预发起接口返回暂存功能定义暂存功能调用逻辑增加#333解决回退到申请节点后，直送的旧问题#271修改流程choice功能返回问题#271流程撤回修改#271需要更新数据库表脚本，增加了图标、顺序、创建人、修改人等字段。元数据增加了流程成员选择flycode，用于加签、转办、沟通使用。web端流程中心页面注册。详情看流程引擎服务v3.2更新说明.zip获取流程消息参数接口，增加了af\_taskcategory输出增加修改人、修改时间#495增加任务数数量计算接口#271流程增加获取流程定义xml数据接口#271修复缺陷提交行为逻辑错误获取问题下一步接口兼容出错web端，旧流程，点击同意，选择人后点击提交，前端报错兼容申请提交choice=0情况处理申请提交时获取下一步的处理问题沟通加评论处理|
|v2.8.4|2020.12.29|养元|http://183.63.72.243:48080/svn/doc/aPaaS/V3.1/5.发布阶段/程序包/flowengine-rest.zip (3198)|\* 【improve】 流程优化\* 【change】 设计器定义文件修改\* 【new】 加日志|
|v2.8.3|2020.9.29|贤哥/重庆有友|http://183.63.72.243:48080/svn/doc/aPaaS/V3.0/5.发布阶段/程序包/flowengine-rest.zip (2930)|\* 【fix】修改了兼容运行时多条记录问题\* 【fix】升级springboot和sping-framework版本，修复安全漏洞|
|v2.8.2|2020.7.3|http://183.63.72.243:48080/svn/doc/aPaaS/V2.9/5.发布阶段/程序包/flowengine-rest.zip （2605）|\* 【fix】批量审核，针对最后节点时，不用选择人bug处理\* 【fix】优化待办列表和待办数量的sql语句|
|v2.8.0|2020.4.8|恒顺|http://183.63.72.243:48080/svn/doc/aPaaS/V2.8/5.发布阶段/程序包/flowengine-rest.zip(2390)|\* 【fix】处理小程序端获取待办列表，过滤用户端的问题|
|v2.6.3|2020.4.21|http://183.63.72.243:48080/svn/doc/aPaaS/V2.6/5.发布阶段/程序包/flowengine-rest/flowengine-rest.zip(2447)|\* 【change】优化已办列表查询查询（经纳爱斯测试环境验证）|
|v2.6.2|2019.12.13|http://183.63.72.243:48080/svn/doc/aPaaS/V2.6/5.发布阶段/程序包/flowengine-rest/flowengine-rest.zip(2143)||
|v2.5.6|2020.10.26|http://183.63.72.243:48080/svn/doc/aPaaS/V2.5/5.发布阶段/程序包/后台服务/flowengine-rest/flowengine-rest.zip (3016)|\* 【fix】 提交流程加锁处理，防止重复提交\* 【fix】 兼容处理有多余任务变量报错的bug|
|v2.5.5|2020.1.17|九三|http://183.63.72.243:48080/svn/doc/aPaaS/V2.5/5.发布阶段/程序包/后台服务/flowengine-rest/flowengine-rest.zip (2195)|\* 【fix】 退回节点，选人策略为flycode时，出现异常|