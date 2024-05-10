---
title: IDE云化跨域路由调整说明
date: 2022-04-27T11:25:36
---

# IDE云化后，中心路由与环境路由的跨域调整说明

### 术语说明

中心路由是指开发者网站的路由，默认端口是51074的  
环境路由是指具体租户环境的路由，常有端口是7000,7001,8000,8001等

### 环境说明

本次调整是在路由V3.4的基础上操作的

### 具体步骤

#### 中心路由部分

一般只需要调整一次，增加以下跨域字段，修改nginx.conf

```
    ...
    listen 51074;

    # IDE云化 start
    add_header Access-Control-Allow-Headers app_id,ctcode,idetoken,metamodeltype,pdcode,pscode,pvcode,req_id,tecode,tenantname,usercode,userinfonamee,username,version;
    # IDE云化 end

    location / {
        try_files $uri $uri/ /index.html;
        root /home/apaas/morelove;
    }
    ...
```

#### 环境路由部分

* nginx.conf端口8001部分

  ```
  server {
  listen       8001;

  # IDE云化start
  add_header Access-Control-Allow-Methods *;
  add_header Access-Control-Allow-Headers app_id,content-type,idetoken,req_id,pdcode,pscode,pvcode,tenantname,token,usercode,userinfoname,username,version,debug,ctcode,dynamicId,idecode,metamodeltype,update,Authorization,tecode,x-requested-with,version;
  add_header Access-Control-Expose-Headers Content-Disposition,*;
  # IDE云化end

  include "/usr/local/openresty/nginx/scripts/config/ide_location.conf";
  }
  ```

* ide\_location.conf部分。 由于调度服务没有做跨域处理，需要在nginx做处理，内容如下:

  ```
  location /task/ {
  # IDE云化 start
  if ( $upstream_http_Access-Control-Allow-Origin = ''){
    more_set_headers "Access-Control-Allow-Origin *";
  }
  # IDE云化 end
  proxy_pass http://apaastomcat/taskserv/;
  }
  ```
* apaas\_location.conf部分。 由于业务引擎做的跨域不完整，需要添加调整,内容如下:
  ```
  location ~^/api/teapi/dy-biz/ {
  # IDE云化 start OPTIONS请求
  if ( $request_method = 'OPTIONS' ) {
    return 204;
  }
  # IDE云化 start OPTIONS请求
  set $jwtok "error";
  set $ss_tenant_code '';
  set $ss_account_code '';
  access_by_lua_file '/usr/local/openresty/nginx/scripts/apaas_jwtdecode_withoutcheck.lua';
  proxy_set_header Host $host:$server_port;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $remote_addr;
  proxy_set_header Request-Url $request_uri;
  # IDE 云化 start Access-Control-Allow-Origin
  if ( $upstream_http_Access-Control-Allow-Origin = '' ){
    more_set_headers "Access-Control-Allow-Origin *";
  }
  # IDE 云化 end Access-Control-Allow-Origin
  proxy_pass http://bizserv;
  rewrite ^/api/teapi/dy-biz/(.+)/(.+) /biz/run?mocode=$1&lgcode=$2 break;
  }
  ```