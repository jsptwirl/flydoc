---
title: web端-表格勾选项导出
date: 2020-07-01T16:41:49
---

版本要求：web包（V9.0+）+ 导入导出服务版本（v2.6.1）

**简述：**web端支持导出事件配置目标入參，flycode接口获取web上传的勾选参数做业务逻辑相关导出操作，web端提供捕捉页面数据作为导出接口的额外参数传入，具体业务逻辑需要flycode接口处理。

### 前提：IDE建立导出类型flycode接口

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%A1%A8%E6%A0%BC%E5%8B%BE%E9%80%89%E6%95%B0%E6%8D%AE%E5%AF%BC%E5%87%BA-1.png)

### 一、 无入參导出

#### 场景：全量数据导出

##### 1、IDE - 导出接口flycode协议结构：

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%A1%A8%E6%A0%BC%E5%8B%BE%E9%80%89%E6%95%B0%E6%8D%AE%E5%AF%BC%E5%87%BA-2.png)

##### 2、web端导出接口上传参数结构：

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%A1%A8%E6%A0%BC%E5%8B%BE%E9%80%89%E6%95%B0%E6%8D%AE%E5%AF%BC%E5%87%BA-3.png)

### 二、 有入參，其中入參为对象的导出

#### 场景：依据搜索条件，导出查询结果数据

##### 1、导出接口flycode协议结构：

有附加入參，对象结构，入參字段绑定搜索条件控件

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%A1%A8%E6%A0%BC%E5%8B%BE%E9%80%89%E6%95%B0%E6%8D%AE%E5%AF%BC%E5%87%BA-4.png)

##### 2、web端导出接口上传参数结构：

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%A1%A8%E6%A0%BC%E5%8B%BE%E9%80%89%E6%95%B0%E6%8D%AE%E5%AF%BC%E5%87%BA-5.png)

### 二、 有入參，其中入參为数组的导出

#### 场景：导出列表勾选数据

##### 1、导出接口flycode协议结构：

导出事件入參只支持对象结构入参，导出勾选数据的方案是，将目标勾选数组转为字符串，存储某个入參字段作为接口数据提交，flycode进行数据处理。

Demo场景如下：

导出接口入參：

1、对象类型，tn\_ids字段存储勾选数据值

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%A1%A8%E6%A0%BC%E5%8B%BE%E9%80%89%E6%95%B0%E6%8D%AE%E5%AF%BC%E5%87%BA-6.png)  
![](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%A1%A8%E6%A0%BC%E5%8B%BE%E9%80%89%E6%95%B0%E6%8D%AE%E5%AF%BC%E5%87%BA-7.png)

2、配置数据序列化事件将目标勾选数据结构\[{tn\_id:xxx}\]转为字符类型存储在tn\_id（也可以通过UIflycode转）

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%A1%A8%E6%A0%BC%E5%8B%BE%E9%80%89%E6%95%B0%E6%8D%AE%E5%AF%BC%E5%87%BA-8.png)  
![](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%A1%A8%E6%A0%BC%E5%8B%BE%E9%80%89%E6%95%B0%E6%8D%AE%E5%AF%BC%E5%87%BA-10.png)

3、数据序列化字段

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%A1%A8%E6%A0%BC%E5%8B%BE%E9%80%89%E6%95%B0%E6%8D%AE%E5%AF%BC%E5%87%BA-11.png)

4、web端导出接口上传参数结构

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%A1%A8%E6%A0%BC%E5%8B%BE%E9%80%89%E6%95%B0%E6%8D%AE%E5%AF%BC%E5%87%BA-12.png)

效果图

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%A1%A8%E6%A0%BC%E5%8B%BE%E9%80%89%E6%95%B0%E6%8D%AE%E5%AF%BC%E5%87%BA-13.png)  
![](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%A1%A8%E6%A0%BC%E5%8B%BE%E9%80%89%E6%95%B0%E6%8D%AE%E5%AF%BC%E5%87%BA-14.png)