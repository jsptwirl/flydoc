---
title: 快速入门2-API
date: 2023-07-17T17:42:40
---

# 快速入门2 - API

本文档将通过将上一篇文章中配置的集成流，包装成API对外发布，来展示API的相关概念和操作。  
通过此文档，你会学会：  
1：如何创建和管理API  
2：如何创建应用并分配API给应用

***API的创建与管理需要使用3.2以上版本***

## 1\. 基本概念

|名词概念|释义|
|:---:|:---:|
|API|API就是封装后的集成流，用于企业对外发布接口，可以对API和API用户进行权限管理和用量管理。|
|应用|应用指的是使用API的外部系统。一个企业可以建立多个应用（如OA，ERP等），一个应用可以分配多个API。|
|API Key|API Key是分配给应用的授权码，每个应用都会有一个唯一的API Key，当API使用API Key作为鉴权方式时使用。|
|OAuth|OAuth是一种开放标准的授权协议，允许应用访问用户的私有资源（如用户信息、操作权限等），而无需知道用户的凭证信息。在iPaaS系统中，可以使用OAuth进行API鉴权。【暂不支持】|

## 2\. 创建API

### 2.1 新增API

首先新增一个API。

1. 选择【API管理】模块
2. 点击【新增API】  
![](http://apaas.wxchina.com:8881/wp-content/uploads/24-1.png)
3. 选择关联集成流
4. 选择调用方法
5. 设置访问权限和请求频率
6. 填写描述
7. 点击【保存】，系统就会新增一个API  
![](http://apaas.wxchina.com:8881/wp-content/uploads/25.png)

### 2.2 创建应用

新增一个应用

1. 选择【应用管理】模块
2. 点击【新增应用】  
![](http://apaas.wxchina.com:8881/wp-content/uploads/26.png)
3. 填写应用名称
4. 点击【确认】按钮，系统就会新增一个应用  
![](http://apaas.wxchina.com:8881/wp-content/uploads/27.png)

### 2.3 分配API

1. 点击【应用名称】进入编辑页面  
![](http://apaas.wxchina.com:8881/wp-content/uploads/28.png)
2. 点击【添加API】  
![](http://apaas.wxchina.com:8881/wp-content/uploads/29.png)
3. 选择API
4. 选择鉴权方式
5. 选择API添加位置
6. 点击【保存】，完成API分配  
![](http://apaas.wxchina.com:8881/wp-content/uploads/30.png)

### 2.4 调用

1. 在postman中新建一个POST请求，并输入上方拷贝的API接口
2. 在请求头中添加API Key参数，该API Key用于调用鉴权，只要是有效的aPaaS系统API Key就行
3. 在body中填写集成流所需要的入参信息
4. 点击发送按钮
5. 成功调用后就能看到集成流返回的信息  
![](http://apaas.wxchina.com:8881/wp-content/uploads/31.png)  
![](http://apaas.wxchina.com:8881/wp-content/uploads/32.png)