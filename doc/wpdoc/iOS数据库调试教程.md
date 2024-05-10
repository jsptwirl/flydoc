---
title: iOS数据库调试教程
date: 2020-06-11T11:01:24
---

## iOS数据库调试教程

#### 1\. 同时打开手机app的开发模式和开启数据库调试功能开关

* “数据库调试功能" 开关只能单独控制数据库调试功能
* "开启"开关关闭时也会数据库调试功能也会关闭

* 建议：只有在使用数据调试时才打开 "数据库调试功能" 开关，不再使用时请关闭此开关，否则可能会增加手机的负担
  ![](http://apaas.wxchina.com:8881/wp-content/uploads/IMG_9482.png)![](http://apaas.wxchina.com:8881/wp-content/uploads/IMG_9483.png)

#### 2\. 手机使用wifi，在设置里获取手机的ip地址(如：192.16.102.230)

![](http://apaas.wxchina.com:8881/wp-content/uploads/IMG_9480.png) ![](http://apaas.wxchina.com:8881/wp-content/uploads/IMG_9481.png)

#### 3\. 使用电脑浏览器输入步骤2中获取的ip+端口号(9002)(如：192.16.102.230:9002)

注意：进行此操作时，app需要在前台运行(即手机屏幕显示的为我们的app)

* Query：需要查询的语句，输入查询语句后，点击Run Query 按钮即可查询选中的数据库的数据，结果展示在Data栏

  ```
  注意：使用query要首先正确选中对应的数据库的和表，否则可能无法正确查到数据
  ```
* Databases： 对应数据库的名称
* Tables：选中数据库中的表

* Data：选中的对应的数据库中的对应的表中的数据，或者是查询的数据

  * Edit： 可以编辑选中数据库中的某一条数据

  * Delete：可以删除选中数据库中的某一条数据

    ```
    注意：
    1. 使用Ddit和Delete之前需要先使用鼠标点击选中需要操作的数据，否则Ddit和Delete按钮为灰色，
    不可点击，只有选中要操作的某条数据后方可点击。
    2. 在使用过程中手机不能锁屏，也不能退到后台，否则出现连接不到数据库的问题。
    ```

![](http://apaas.wxchina.com:8881/wp-content/uploads/IMG_9485.png)