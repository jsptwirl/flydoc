---
title: iOS调试工具的使用
date: 2020-06-11T10:59:59
---

# iOS调试工具的使用

### 一、功能概况

##### 1.刷新表单和查看页面传参

##### 2.查看网络请求的数据

##### 3.查看手机本地的数据库

##### 4.查看手机的其他信息

### 二、开关设置

侧边栏->开发设置->开发模式，打开"开启"开关即可

![](http://apaas.wxchina.com:8881/wp-content/uploads/setting1.png) ![](http://apaas.wxchina.com:8881/wp-content/uploads/setting2.png)

### 三、FLEX工具说明

* FLEX工具是一个app引入的辅助调试工具库，里面包含了很多功能，比如：查看网络请求，文件浏览等等

* 工具的启动通过手机摇一摇，可以唤出此功能，menu里包含了众多实用功能，下面会做介绍。

  ![](http://apaas.wxchina.com:8881/wp-content/uploads/FLEX1.png)![](http://apaas.wxchina.com:8881/wp-content/uploads/FLEX2.png)

### 四、工具使用举例

#### 1.刷新表单

* 说明：

  * IDE修改表单后，手机单不会立即生效，需要清除缓存或者在这里刷新表单才能生效。
  * 刷新表单会重新加载表单，执行表单的所有行为，与从上个页面跳到本界面的效果相同。

* 操作步骤：

  * 点击页面左上角的书形图标，选择“刷新表单”即可。

  ![](http://apaas.wxchina.com:8881/wp-content/uploads/refreshPage1.png)

#### 2.查看页面传参

* 说明：

  * 可以查看上个页面传到本页面的参数和具体的值。

* 操作步骤：

  * 点击页面左上角的书形图标，选择“查看传参”，即可弹出查看参数的页面，点击页面的半透明处，退出查看参数页面。

  ![](http://apaas.wxchina.com:8881/wp-content/uploads/watchParam1.png)![](http://apaas.wxchina.com:8881/wp-content/uploads/watchParam2.png)

#### 3.查看网络请求数据

* 说明：

  * 可详细查看app的网络请求数据
  * 操作步骤：
  * 手机摇一摇，唤出FLEX工具(参见第三部分)，然后点击“menu”，进入FLEX工具页面，点击“Network History”即可进入网络请求的列表界面。
  * 网络请求列表列表的是按照时间顺序排列的，最上面为最近的一次网络请求，点击你需要查看的网络请求，可以查看网络请求的详细信息
  * 其中点击“Request Body”和“Response Body”可以分别查看网络请求的入参和出参的详细信息，这里一般是我们关注的比较多的地方。
  * 页面还有网络请求的其他相关信息，这里不再一一说明。

  ![](http://apaas.wxchina.com:8881/wp-content/uploads/network1.png)![](http://apaas.wxchina.com:8881/wp-content/uploads/network2.png)

  ![](http://apaas.wxchina.com:8881/wp-content/uploads/network3.png)![](http://apaas.wxchina.com:8881/wp-content/uploads/network4.png)

  * Network的setting界面可以设置网络请求缓存大小，清除记录等操作。

  ![](http://apaas.wxchina.com:8881/wp-content/uploads/network5.png)![](http://apaas.wxchina.com:8881/wp-content/uploads/network6.png)

#### 4.查看本地数据库

* 说明：

  * 可详细查看存在手机本地的数据库的信息
  * 操作步骤：
  * 手机摇一摇，唤出FLEX工具(参见第三部分)，然后点击“menu”，进入FLEX工具页面，点击“File Browser”即可进入手机app的沙盒文件的列表界面。

  ![](http://apaas.wxchina.com:8881/wp-content/uploads/db1.png)![](http://apaas.wxchina.com:8881/wp-content/uploads/db2.png)

  * 点击"Documents"，再点击 "公有云"(此处根据自己登录的帐号不同而不同)
  * 此目录下可以看到用户的帐号信息数据库“UserInfo.db”, 在里面的userinfo表中找到"accountcode"和 "lastposition"字段的值
  * 在“公有云”页面找到以"accountcode"的值(如图中的“1151024358332960768”)命名的文件夹，点击进入
  * 在新界面中找到以“lastposition”的值(如图中的“1156469236332367872”)为结尾的文件夹，点击进入，这里才是app目前登录的帐号对应文件夹，其中BizDataBase.db数据库中存放着app的这种主要信息。

  ![](http://apaas.wxchina.com:8881/wp-content/uploads/db3.png)![](http://apaas.wxchina.com:8881/wp-content/uploads/db4.png)

  ![](http://apaas.wxchina.com:8881/wp-content/uploads/db5.png)![](http://apaas.wxchina.com:8881/wp-content/uploads/db6.png)

#### 5.查看手机的其他信息

* 说明：
  * 我们还可以通过FLEX工具查看app所下载的表单json信息，拍摄的照片信息等。

* 操作步骤：

  * 首先按照 查看本地数据库 的步骤找到当前登录帐号对应的文件夹
  * 其中"Pages"目录下存放的是app下载的表单json信息
  * "Files"目录存放有拍照控件拍摄的照片的大图等信息，"Thumbs"目录存放的是拍照控件拍摄的缩略图信息

  ![](http://apaas.wxchina.com:8881/wp-content/uploads/db8.png)