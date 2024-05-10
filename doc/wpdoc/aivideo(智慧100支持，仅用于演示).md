---
title: aivideo(智慧100支持，仅用于演示)
date: 2021-02-19T14:49:12
---

# aivideo(智慧100支持，仅用于演示)

本文档将介绍如何在IDE上面配置aivideo控件实现手机端录制视频并且进行视频sku识别功能。

### 在IDE上找到 AI摄像 二开控件并且熟悉他的自定义属性。

![aivideo图片1](http://apaas.wxchina.com:8881/wp-content/uploads/aivideo%E5%9B%BE%E7%89%871.png)

### 在IDE的表单内如何配置使用 AI摄像 控件

![aivideo图片2](http://apaas.wxchina.com:8881/wp-content/uploads/aivideo%E5%9B%BE%E7%89%872.png)

### AI摄像 控件的属性解析(从实施项目进行验证过的表单页面中copy出来的)

```json
{
                    "type": "aivideo",
                    "code": "native-aivideo-6264416420437535",
                    "eventlist": [
                        {
                            "trigger": "getAIVideoDetail",
                            "handler": "1300727625551056983"
                        },
                        {
                            "trigger": "jumpVideoDetail",
                            "handler": "1301199376567373908"
                        },
                        {
                            "trigger": "submitVideo",
                            "handler": "1300715342661816418"
                        }
                    ],
                    "name": "aivideo",
                    "title": "视频采集",
                    "_ide_componenttype": "photo",
                    "source": "1",
                    "compression": "1",
                    "htmlopentype": "1",
                    "playvideo": "1",
                    "opentype": "",
                    "select": "0",
                    "maxduration": "30"
                }
```

事件解析：  
1.获取视频详情(getAIVideoDetail)：  
通过调用 getAIVideoDetail 方法可以获取到手机端视频详情。  
对应flycode事件：1300727625551056983  
实际调用场景：在查看页面配置 AI摄像控件时，getAIVideoDetail事件相当于load事件，进入页面时会调用getAIVideoDetail通知客户端调用flycode接口进行数据查询。并赋值给 手机端 AI摄像控件。具体示例如下：

var fail = function (errorCode, msg) {  
Page.alert(AlertType.error, msg != null ? msg : '数据获取失败，请重试或联系管理员');  
};

var success = function (output) {  
var tempArray = output\['ai\_visit\_video\_info'\];  
var temp =JSON.stringify(tempArray\[0\])  
console.log(temp)  
Page.getCtrl("aivideo").setValue(temp, CtrlValueSetter("videodetail"));

};

//发起网络请求  
Model.requestServer('拜访采集-查询视频采集', {  
"ai\_visit\_video\_info": {  
"storeid": Page.getCtrl('storeid').getValue(),  
"submittime":Page.getCtrl('submittime').getValue(),  
}  
}, success, fail);

2.跳转识别详情（jumpVideoDetail）  
通过调用 jumpVideoDetail 执行flycode进行跳转页面。  
对应flycode事件：1301199376567373908  
实际调用场景：点击查看视频详情时会调用这个方法，具体flycode示例如下：  
var params = {  
appData:Page.getCtrl("datatemp").value,  
}  
Page.linkToPage("视频采集-识别详情",params);  
3.提交视频数据（submitVideo）  
通过调用 submitVideo执行flycode进行数据上传。  
对应flycode事件：1300715342661816418  
实际调用场景：录制视频结果并且获取到识别结果时，手机端上传数据到IDE上。此时需要对数据进行接收，示例如下：  
var appData =IN.params\[0\];  
//把数据存放在 datatemp 控件中，不管是在提交数据时或者跳转页面时都能直接获取，不需要再调用事件获取结果  
Page.getCtrl("datatemp").value=JSON.stringify(appData);

参数解析  
1."source": "1"  
当source=1时代表从 通过相机进行拍摄视频，  
当source=0时代表从 本地文件选择上传（此功能暂未开放）  
1."htmlopentype": "1",  
当htmlopentype=1时代表跳转到 IDE上配置的识别详情页面  
当htmlopentype=0时代表跳转到 AI-SDK内识别详情页面（此功能暂未开放）  
1."playvideo": "1",  
当playvideo=1时代表点击此控件时属于 拍摄 状态  
当playvideo=0时代表点击此控件时属于 播放 状态（此功能暂未开放）  
1."maxduration": "30"  
maxduration代表视频可录制最大时间，默认是30s,最大限制为120s

### IDE端相关配置

AIVideoView数据上传时触发对应的事件，可获取上传数据：  
![image-20200902022843329](http://apaas.wxchina.com:8881/wp-content/uploads/image-20200902022843329.png)

提交拜访流事件时，同时把数据插入数据库中：对应数据库表名为：**ai\_visit\_video\_info**  
![image-20200902023011752](http://apaas.wxchina.com:8881/wp-content/uploads/image-20200902023011752.png)

查看页面同理：手机端只要根据playvideo来控制即可。

### IDE上页面配置效果展示

![B8AEAABC01653A26BA996778225608D6](http://apaas.wxchina.com:8881/wp-content/uploads/B8AEAABC01653A26BA996778225608D6.jpg)  
![A5A23D9AF3EEDBF516230149A9424DB8.jpg](http://apaas.wxchina.com:8881/wp-content/uploads/A5A23D9AF3EEDBF516230149A9424DB8.jpg)  
至此，二开控件已完成。

# SDK识别详情页展示跳转配置流程

#### 修改背景：

​ 1)响应组织打造标准化产品号召，在智慧100-v5.1产品中实现可配置化的识别详情

​ 2)解决不同租户之间需要区分更新AI-SDK本地包导致无法升级的问题，减轻SDK负担

​ 3)解决和h5交互传递数据的复杂性

#### 修改方案：

​ 详细见下图  
![企业微信截图_159844146116982](http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_159844146116982.png)

#### IDE配置相关：

以端架控件为例：当手机端处理完数据执行“onvaluechange”事件时，控件对应的属性 **值改变时** 触发关联事件，在此事件中我们可以通过端架控件接收来自手机端上传的数据，同时我们需要在此事件中下发计算后的数据给手机端，手机端此时触发 获取值方法 setViewData。

**端架控件属性 值改变时 关联事件：**  
![image-20200902014733395](http://apaas.wxchina.com:8881/wp-content/uploads/image-20200902014733395.png)

**IDE通过UIFlyCode获取控件对应值方法、给控件设置值方法：**  
![image-20200902014958093](http://apaas.wxchina.com:8881/wp-content/uploads/image-20200902014958093.png)

**处理完数据以后跳转到IDE配置的识别详情页面：**  
![image-20200902015200047](http://apaas.wxchina.com:8881/wp-content/uploads/image-20200902015200047.png)

至此整个流程结束，目前以应用在智慧100-5.1产品 **铺货执行** 拜访流步骤。