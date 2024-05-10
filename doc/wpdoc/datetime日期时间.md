---
title: datetime日期时间
date: 2020-07-03T17:55:56
---

# 3.1.4. 日期时间

## 3.1.4.1. 当前日期

**API**

```js
// 获取当前时间字符串(返回UTC时区的时间字符串)
NOW.time();  // 当前时间，精确到毫秒 yyyy-MM-dd HH:mm:ss.fff
NOW.date();  // 当前时间，精确到天 yyyy-MM-dd
```

## 3.1.4.2. 日期格式化

**API**

```js
// 日期格式化
var datestr = [Date对象].Format("");    // 参数：表达式 yyyy-MM-dd HH:mm:ss
```

---

**例**: 返回当前的 月 日 时 分

```js
var date = new Date();
var ret = date.Format("MM dd HH mm");

// 若当前时间为 2017-08-24 11:40:28，则ret为"08 24 11 40"
```

---

## 3.1.4.3. 日期常用API

**API**

* 时间的转换

  时间戳 --> Date ： Date.parseDate(\[时间戳\]);

  Date --> 时间戳 ：\[Date对象\].getTime();

  时间字符串 --> Date：new Date(\[时间字符串\]);

  Date --> 时间字符串 ：\[Date对象\].Format(\[时间格式,如：yyyy-MM-dd HH:mm:ss\]);

  \[Date对象\].time(); -- 获取时间格式为“yyyy-MM-dd HH:mm:ss”的时间

  \[Date对象\].date(); -- 获取时间格式为“yyyy-MM-dd”的时间

* 时间段的获取

  今日：\[Date对象\].getDayBegin(); /\[Date对象\].getDayEnd();

  昨日：\[Date对象\].getLastDayBegin(); / \[Date对象\].getLastDayEnd();

  本周：\[Date对象\].getWeekBegin(); / \[Date对象\].getWeekEnd();

  上周：\[Date对象\].getLastWeekBegin(); / \[Date对象\].getLastWeekEnd;

  本月：\[Date对象\].getMonthBegin(); / \[Date对象\].getMonthEnd();

  上月：\[Date对象\].getLastMonthBegin(); / \[Date对象\].getLastMonthEnd();

  今年：\[Date对象\].getYearBegin(); / \[Date对象\].getYearEnd();

  上年：\[Date对象\].getLastYearBegin(); / \[Date对象\].getLastYearEnd();

  本季度：\[Date对象\].getQuarterBegin();/\[Date对象\].getQuarterEnd();

---

**例**:获取某个时间的当天开始时间、结束时间

```js
var dt = new Date('2018-01-01 12:12:12');
FLY.log(dt.getDayBegin());//2018-01-01 00:00:00
FLY.log(dt.getDayEnd());//2018-01-01 23:59:59
```

---