---
title: 高德key使用优化
date: 2022-06-15T07:26:18
---

# 高德key使用优化

版本： V9.7.3

## 需求背景

### 存在问题

1. web包原有内置Key流量限制已无法使用
2. 所有租户共同使用公司内置key将造成流量过载问题，租户需要能使用自己申请的key
3. 高德地图限制：2021年后高德Key基于安全性，必须搭配安全密钥一起使用

### 问题解决

1. 公司已申请新的key，替换web包默认内置key为新的高德key
2. 租户可通过IDE配置/修改部署包代码的方式配置自己申请的高德key
3. web包默认内置代理地址进行验证，同时租户亦可通过上述方法进行配置代理地址
4. **租户尽量使用自己申请的key，避免共用内置key导致流量超载问题**

## 使用方法

### 1\. 申请租户高德Web端（JS API)的Key以及安全密钥

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E7%94%B3%E8%AF%B7%E9%AB%98%E5%BE%B7key.png)

### 2\. 配置服务器代理地址

[安全密钥使用说明](https://lbs.amap.com/api/javascript-api/guide/abc/prepare "安全密钥使用说明")  
代理服务器server配置：

```
server {
      listen 7799;
      location /_AMapService/ {
         set $args "$args&jscode=816fe46b7b7bce145940b93c1e4818fa";
         proxy_pass https://restapi.amap.com/;
      }
   }
```

* jscode为申请key对应的安全密钥，代理地址为实际验证地址，以此保证密钥安全性
* 代理服务器地址，要看客户项目部署是https还是http决定
* 内外网同时要使用的情况下，需要配置内外网都可用的代理地址

### 3\. 配置key以及代理地址

tip：划分不同情境进行使用

（1）租户环境以及转移中心登录并开通租户环境配置  
IDE租户环境配置支持配置 高德Key值 + 代理服务器，配置前两步得到的key以及代理地址后保存即可生效  
![](http://apaas.wxchina.com:8881/wp-content/uploads/%E9%85%8D%E7%BD%AE%E9%AB%98%E5%BE%B7key.png)

（2）租户使用非中心登录或使用中心登录但未开通租户环境配置  
由于Key和代理服务器无法动态替换，产品包默认内置开发测试环境的Key以及代理服务器；上线租户需要替换租户Key以及代理服务器地址，只能通过替换部署包硬编码内容的方案实现。

例子：web V9.7.3  
目录路径：  
![](http://apaas.wxchina.com:8881/wp-content/uploads/%E9%83%A8%E7%BD%B2%E5%8C%85.png)

具体做法：部署包文件在js/目录下搜索GDkey，查找到截图位置，分别替换Key和代理服务器地址即可。  
![](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BF%AE%E6%94%B9%E9%83%A8%E7%BD%B2%E5%8C%85.png)

备注：基于旧web包替换文本的方案修复问题，由于hash值不变，客户浏览器需要强制刷新（or 清除缓存）生效

## 其他

### 错误提示

当使用的key或代理地址错误时会在控制台中报错  
![](http://apaas.wxchina.com:8881/wp-content/uploads/%E9%94%99%E8%AF%AF%E6%8F%90%E7%A4%BA.png)

### 生产环境

* 新Key: 找PMO部门-瑞烜获取
* 安全密钥：找PMO部门-瑞烜获取

### 开发测试环境

* key：38fa4702d240e1e6ee5cc8ca059b254f
* 安全密钥：96f2af5670b7a41a56dcd2e8b63c1e06

### web包当前内置

* key：1993ac213d2f4675ac1bffb1b03ef1f0
* 代理地址：[http://61.144.58.3:31810/\_AMapService](http://61.144.58.3:31810/_AMapService)