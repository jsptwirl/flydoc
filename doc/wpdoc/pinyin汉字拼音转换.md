---
title: pinyin汉字拼音转换
date: 2020-07-03T18:01:59
---

# 3.7. 汉字拼音转换

**API**

```js
// 模块加载
load('pinyin');
```

```js
PINYIN.get('<汉字字符串>')     // 汉字转小写拼音
PINYIN.getshort('<汉字字符串>') // 汉字转小写拼音简写 
```

---

**例**: 将汉字转换为拼音字符串

```js
// 加载拼音转换库
load('pinyin');

var pinyinName = PINYIN.get('业务模型');
var pinyinShortName = PINYIN.getshort('业务模型');

// 记录日志
FLY.log(pinyinName);
FLY.log(pingyinShortName);
```

---