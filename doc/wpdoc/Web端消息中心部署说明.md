---
title: Web端消息中心部署说明
date: 2021-12-14T10:53:51
---

# Web端消息中心部署说明

## 1、服务更新

1.1、web：V9.5.0及以上版本

1.2、messageserv：2.10.0及以上版本

1.3、offline-engine：2.10.0及以上版本

## 2、租户库中执行以下SQL

```sql
ALTER TABLE "public"."pl_msgticket" ADD COLUMN "isread" int4;
```

## 3、导入业务领域

导入业务行为JSON【业务行为-通知公告详情1-消息中心.json】

SVN路径：[https://xwsvn.wxchina.com/doc/aPaaS/V3.3/文档/更新脚本.zip](https://xwsvn.wxchina.com/doc/aPaaS/V3.3/文档/更新脚本.zip)

## 4、导入表单页面

导入业务UI文件【业务UI-消息中心.json】、【业务UI-通知公告查看详情.json】

SVN路径：[https://xwsvn.wxchina.com/doc/aPaaS/V3.3/文档/更新脚本.zip](https://xwsvn.wxchina.com/doc/aPaaS/V3.3/文档/更新脚本.zip)

## 5、配置nginx

进入nginx配置文件所在路径，一般是在/usr/local/openresty/nginx/conf

打开nginx.conf并找到 listen 7000;

加上以下配置信息：

```shell
location ~^/api/teapi/message {
   set $jwtok "error";
   access_by_lua_file '/usr/local/openresty/nginx/scripts/apaas_jwtdecode_withoutcheck.lua';
   proxy_pass http://apaastomcat;
   rewrite ^/api/teapi/message/(.+) /messageserv/$1 break;
}
```

配置完成后效果如下：

![nginx配置结果截图](http://apaas.wxchina.com:8881/wp-content/uploads/nginx%E9%85%8D%E7%BD%AE%E7%BB%93%E6%9E%9C%E6%88%AA%E5%9B%BE.png)

重启nginx、backend、offline-engine，刷新前端。

另附V3.3的发布阶段的压缩包，[点此下载](http://apaas.wxchina.com:8881/wp-content/uploads/V3.3发布阶段压缩包.zip "V3.3发布阶段压缩包")。