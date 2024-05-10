---
title: RMS订单配置说明文档
date: 2023-05-08T17:53:12
---

# RMS订单配置说明文档

* 编辑：刘露
* 时间：2023-05-08
* 状态：已完成

* 适用范围：智慧100V6.2  

## 一、功能介绍

  RMS订单类型目前主要包括采购订单和兑换订单。RMS订单配置目前仅支持采购订单的相关配置，该配置与产品配置中心-分销订单配置中的“终端产品授权”共同控制RMS采购订单。  
二者联合控制效果如下图：

![订单配置](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_16835394732949.png)

### 1、采购订单

#### 1)显示价格

如图所示，通过对“显示价格”进行勾选或取消勾选，并点击保存，即可应用配置。

![显示价格配置](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_16835374984476.png)

当显示价格关闭时，RMS产生的采购订单中的商品将不展示价格，仅展示产品数量。

![关闭显示价格订单-小程序](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_16835381499057.png)  
![关闭显示价格订单-web](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_16835386874641.png)

同时，RMS小程序中的商城中的商品也不会显示价格。

![关闭显示价格商城-小程序](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_16835381085249.png)

当显示价格开启时，RMS产生的采购订单中的商品将展示价格。价格依据于WEB后台-合作关系授权-区域客户价格设置/具体客户价格设置-具体终端价格设置中终端或其所属组织绑定的价格表数据。

![开启显示价格订单-小程序](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_16835390048306.png)  
![开启显示价格订单-web](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_16835390501618.png)

同时，RMS小程序中的商城中的商品也将显示价格，未关联价格表商品不会出现在商城中。

![开启显示价格商城](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_16835391123803.png)

以上设置仅对采购订单生效，兑换订单不受影响。