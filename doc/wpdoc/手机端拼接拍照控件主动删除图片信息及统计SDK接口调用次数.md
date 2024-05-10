---
title: 手机端拼接拍照控件主动删除图片信息及统计SDK接口调用次数
date: 2023-06-15T11:40:51
---

# 手机端拼接拍照控件主动删除图片信息及统计SDK接口调用次数(仅智慧100支持)

* 编辑：谭锦标
* 时间：2021-11-28

目前有接到项目反馈，有客户对目前AI平台调用次数统计存在疑问，实施团队需要统计接口的调用次数以及被用户主动删除的图片信息。

因此手机端通过新增拼接控件主动删除图片信息接口及接口调用次数接口供实施团队在IDE端进行调用，方便实施团队统计相关信息。

## 取值设计

**deleteInfo**（获取用户主动删除的图片信息）

用于获取用户主动删除本地图片(长按展示的缩略图)的信息，只在智慧100V6.0及后续版本的App中提供支持

获取用户主动删除的图片文件的信息，包括完整路径，时间戳及所携带的识别信息。

```json
[{
  "filepath": "",
  "datetime": "",
  "watermark": "广州市天河区",
  "storage": "storage",
  "isQualified": "",
  "isFake": "",
  "unqualifiedReason": "",
  "mergeId": "",
  "httpUrl": "", 
  "detectResult": "",
  "priceResult": "",
  "cameraType": "",
  "identityId": ""
}]
```

**aiSdkStatistics**（获取调用SDK接口次数信息）

用于获取当前本次操作中该用户调用SDK接口次数信息统计，只在智慧100V6.0及后续版本的App中提供支持

获取当前控件调用SDK接口次数统计的信息，包括当前控件调用翻拍/SKU识别/拼接次数，由于拼接拍照流程，拼接图片的SKU信息仅供参考。

```json
{
    "fakeNum": "3",         // 假拍检测接口调用次数
    "skuNum": "4" ,         // sku接口调用次数
    "spliceNum": "5"        // 拼接接口调用次数
}
```

## IDE 调用

我们以智慧100V6.0演示环境的“铺货执行”为例。

获取删除图片的信息

var deletePhoto = Page.getCtrl('端架').getValue(CtrlValueGetter('deleteInfo'));

获取调用SDK接口次数统计信息

var deletePhoto = Page.getCtrl('端架').getValue(CtrlValueGetter('aiSdkStatistics'));