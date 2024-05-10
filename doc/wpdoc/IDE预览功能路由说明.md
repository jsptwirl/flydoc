---
title: IDE预览功能路由说明
date: 2023-03-31T15:32:29
---

# 文档目的

说明IDE中心路由增加UI预览后的路由适配

# 场景描述

原来的IDE路由只是nginx的简单代理。如下方显示

```
...
   server {
      listen 9000;

      location / {
        root /path/to/idewe;
        try_files $uri $uri/ /index.html;
      }
   }
...
```

UI预览功能改造后，预定uipreview的请求需要插入特定js，并且请求需要发送到具体的环境。  
**约定规定如下:**  
1.插入js由ideweb提供，路径和名称是规定的，在DOM中before.js需要在after.js前面  
/static/preview-script/preview\_script\_before.js  
/static/preview-script/preview\_script\_after.js  
2./uipreview/schema\_host\_port*subpath*/请求uri  
记录说明: 调试的环境是http://120.46.182.226:7000/，对应在ideweb上请求的地址是/uipreview/http\_120.46.182.226*7000*/\_/请求uri

路由配置如下:

```
...
   server {
      listen  9000;

      # K8S环境才需要配置，去解析域名的。
      #resolver 114.114.114.114 ipv6=off;

      absolute_redirect off;

      location ~ ^/uipreview/(.*)_(.*)_(\d*)_(.*)_/(.*) {
        proxy_pass $1://$2:$3;
        sub_filter '</noscript>' '</noscript><script src="/static/preview-script/preview_script_before.js"></script>';
        sub_filter '</body>' '<script src="/static/preview-script/preview_script_after.js"></script></body>';
        rewrite ^/uipreview/(.*)_(.*)_(\d*)_(.*)_/(.*) $4/$5 break;
      }

      location / {
          root   /usr/share/nginx/html;
          try_files $uri $uri/ /index.html;
      }
   }
...
```

**不适用情况说明:**  
web端在子路径，后台接口在跟路径上。  
例子: 调试地址是http://120.46.182.226:7000/V9.8.0/，而登录接口是http://120.46.182.226:7000/api/auth/login，这种情况是不行；  
必须要求web端的路径和后台接口在同一个分段上。如果想让例子的情况可行，后台接口是http://120.46.182.226:7000/V9.8.0/xxx这种情况才行。