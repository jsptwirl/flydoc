---
title: 关于apaas web单点登录方案
date: 2023-06-06T10:29:52
---

[aPaaS单点登录方案](http://apaas.wxchina.com:8881/wp-content/uploads/aPaaS单点登录方案-1.pdf "aPaaS单点登录方案")

以上附件ppt为单点登录接入流程

另外扩展参数列表

* token 授权凭证串
* tokenexpires 授权凭证过期时间
* refreshtoken 刷新token凭证
* tenantcode 租户code
* productversioncode 产品版本code
* position 岗位id
* redirect 重定向的内部页面路径
* \_showmode 设置显示模式（10.0.2新增）（onlymain 只显示中间内容，hidemenu 隐藏菜单，mainandfooter 显示中间内容跟页脚）

另外10.0.2版本新增支持携带多余参数到页面。  
例如：  
[http://localhost:10000/#/loading?token=token&refreshtoken=refreshtoken&tenantcode=8009999&productversioncode=834686017469415482&position=1260041879710470144&\_showmode=onlymain&redirect=/page?pagecode=1658300482545913955&orderid=123](http://localhost:10000/#/loading?token=token&refreshtoken=refreshtoken&tenantcode=8009999&productversioncode=834686017469415482&position=1260041879710470144&_showmode=onlymain&redirect=/page?pagecode=1658300482545913955&orderid=123)

如果跳转到表单页面 则引擎会自动将其余的参数放入传参容器，需要在表单中配置接收参数行为做相对应接收， 也或者可以通过截取window.location.href的具体路径进行截取里面的query参数

如果是跳转到原生页面 则需要自行通过this.$route.query获取