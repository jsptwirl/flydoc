---
title: web端-V9.1.x版本关于弹窗布局配置实践
date: 2020-07-16T11:37:24
---

## web端-V9.1.x版本关于弹窗布局配置实践

版本要求：web包（V9.1.x）

简述：web端弹窗内容的样式布局比较灵活，早期配置人员不懂得布局样式，存在一些样式问题，包括早起产品推出的模块弹窗都是存在一些样式隐患，这里提供最佳的布局实践指导。

#### 项目环境拆分/独立部署环境修改方案：

对于原产品页面，联系平台，平台在基础元数据表单调整后，导出协议json提供项目组导入，平台仅支持原产品级表单调整;  
对于项目页面，平台提供配置改进建议，由项目组人员自行调整!

### 布局场景指导：

#### 一、 场景一：终端管理- 新增/编辑弹窗

问题截图：没有内边距  
  
![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B51.png)

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B52.png)

1、tabboard内容区域先套一层layout再放内容。  
  
![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B53.png)

2、同样设置内边距  
  
![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B54.png)

效果  
  
![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B55.png)

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B56.png)

#### 一、 场景二：产品管理- 新增/编辑弹窗

问题：（使用外边距属性而不是内边距属性的样式差异）  
  
![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B57.png)

1、删除layout的外边距  
  
![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B58.png)

1、1、 改为边距样式  
  
![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B59.png)

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B510.png)

效果  
  
![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B511.png)

#### 三、实现场景左边树导航固定，右边超长内容内部滚动的布局

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B512.png)

#### 四、月度出差管理/条码进场-费用项目

问题：弹窗 tabboard布局，内容超出弹窗高度出现双滚动条  
  
![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B513.png)

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B514.png)

新弹窗不设置height的情况下默认height为100% ， 内容高度 > 弹窗height高度则存在滚动条，  
  
上述场景的问题：  
  
由于弹窗内容总高度（表格高度500 + 按钮的高度） > 600所以显示滚动条，  
  
两种做法： 1、加弹框高度610 ； 2、内容高度表格改成flex:1自适应  
  
修改后效果：

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B515.png)

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B516.png)

#### 五、要货计划-变更审核

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B517.png)

内容加一层layout , flex:1，table控件给个最小高度300  
  
最终效果：  
  
![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B518.png)

#### 六、组织KPI设置 – 批量新增/批量设置

新版本UI解决部分多重滚动条场景，弹窗不配置高度值，则默认高度为100%  
  
对于部分详情内容少的弹窗，建议按需提供一个高度值  
  
![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B519.png)

例如列表界面，链接事件给弹窗高度值380  
  
![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B520.png)

效果  
  
![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B521.png)

#### 七、预算管理-预算编制-预算发布按钮

问题：弹窗所有layout分层都是用flex:1,导致平分高度  
  
![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B522.png)

修改：  
  
去掉按钮栏layout的弹性比例属性（flex），不配置默认会使用按钮本身高度，  
  
表格控件配置弹性比例属性（flex）为1，占满剩余高度。  
  
效果  
  
![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B523.png)

#### 八、执行/稽核管理 -条码进场陈列照片审核

问题：表单项每行的layout配置flex：1，平分了弹窗高度  
  
![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B524.png)

里对每一行layout使用了弹性比例属性为1（flex:1），表示每行平分弹窗高度值  
  
所以行与行之间的留白多  
  
调整：去掉flex:1  
  
效果  
  
![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B525.png)