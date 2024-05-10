---
title: web端-登录界面企业账户控制
date: 2020-07-09T15:55:50
---

## web端-登录界面企业账户控制

---

版本要求：web包（V9.0+）

简述：web端登录界面存在企业账户输入框，通过获取管理企业账户得到企业配置信息，用于开放性功能控制，如：短信验证码登录，登录修改初始密码等。

前提：web包打包需要配置环境变量进行企业账户控制。  
  
![](http://apaas.wxchina.com:8881/wp-content/uploads/web%E7%AB%AF-%E7%99%BB%E5%BD%95%E7%95%8C%E9%9D%A2%E4%BC%81%E4%B8%9A%E8%B4%A6%E6%88%B7%E6%8E%A7%E5%88%B6-1.png)

#### 一、 场景一：显示登录界面企业账户输入框

1. 配置方式：web包（V9.0+）
   1. web包（V9.0+）默认显示企业账户输入框（非必填）；
   2. 进行web包打包，环境变量 “VUE\_APP\_BUSINESS\_NAME” : “”，配置为空；则登录界面显示空内容的企业账户输入框。
2. web端效果展示  
  
![](http://apaas.wxchina.com:8881/wp-content/uploads/web%E7%AB%AF-%E7%99%BB%E5%BD%95%E7%95%8C%E9%9D%A2%E4%BC%81%E4%B8%9A%E8%B4%A6%E6%88%B7%E6%8E%A7%E5%88%B6-2.png)

#### 二、 场景二：隐藏登录界面企业账户输入框

1. 配置方式：web包（V9.0+）
   1. 进行web包打包，环境变量 “VUE\_APP\_BUSINESS\_NAME” : “测试企业”，配置不为空；则登录界面不显示企业账户输入框，但默认以环境变量配置的企业名请求企业信息。

   备注：上线生产环境需要确保打包配置的环境变量-企业信息名正确。
2. web端效果展示  
  
![](http://apaas.wxchina.com:8881/wp-content/uploads/web%E7%AB%AF-%E7%99%BB%E5%BD%95%E7%95%8C%E9%9D%A2%E4%BC%81%E4%B8%9A%E8%B4%A6%E6%88%B7%E6%8E%A7%E5%88%B6-3.png)

非标准功能：  
  
配置方式：web包（V9.1+）  
  
web打包，环境变量没有配置，但又需要使用企业账户输入，则可以修改url参数值加入参数businessname=xxx企业，临时开启企业账户输入(适用于公有环境)  
  
![](http://apaas.wxchina.com:8881/wp-content/uploads/web%E7%AB%AF-%E7%99%BB%E5%BD%95%E7%95%8C%E9%9D%A2%E4%BC%81%E4%B8%9A%E8%B4%A6%E6%88%B7%E6%8E%A7%E5%88%B6-4.png)