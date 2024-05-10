---
title: MinIO部署指引
date: 2022-12-28T03:23:40
---

# MinIO

## 部署

### 磁盘挂盘

* 磁盘挂盘

  挂盘操作：可参考

  [https://blog.csdn.net/u011421988/article/details/125390561](https://blog.csdn.net/u011421988/article/details/125390561)

* 需要注意问题

  `注：集群模式时，必须使用挂载非 root 盘的目录`

否则会出现集群部署时，有报错的问题

[https://my.oschina.net/knshsg/blog/5559386](https://my.oschina.net/knshsg/blog/5559386)

**根据报错信息和源码来看，现在的 minio 版本强制要求不使用 root 根目录的磁盘。源码增加强制限制的时间是 Commits on Feb 13, 2022 (Always check for root disks unless MINIO\_CI\_CD is set)。因此要使得集群部署成功必须使用挂载非 root 盘的目录。**

### MinIO 部署

可参考

[https://blog.csdn.net/zhiboqingyun/article/details/122915081](https://blog.csdn.net/zhiboqingyun/article/details/122915081)

* 关闭防火墙

```bash
systemctl stop firewalld
systemctl disable firewalld
systemctl status firewalld
```

* 修改主机名

根据需要，调整主机名信息，以便集群之间局域网互通 (视具体情况而写)

```bash
/ect/hosts
```

* 下载MinIO

```bash
--进入指定目录。如

wget https://dl.min.io/server/minio/release/linux-amd64/minio
chmod +x minio
```

* 单机模式

  `starth.sh`

```bash
#! /bin/sh
export MINIO_ROOT_USER=admin
export MINIO_ROOT_PASSWORD=admin123

#集群部署 server为服务器主机名称 /mnt/minio/data 为磁盘挂载下的目录 我将磁盘挂载在/mnt目录
nohup minio server --address   --console-address ":9001" http://minio/mnt/minio/data  > /usr/local/minio/minio.log 2>&1 &
```

启动脚本

* 集群模式

  编写启动脚本,每台机器都需要

`starth.sh`

```bash
#!/bin/bash

export MINIO_ROOT_USER=admin
export MINIO_ROOT_PASSWORD=admin123

nohup minio server  --config-dir /usr/local/minio --address ":9000" --console-address ":9001" \
http://192.168.72.35/data/minio/data1 http://192.168.72.85/data/minio/data2  > /usr/local/minio/minio.log 2>&1 &
```

启动脚本

### nginx

解决缩略图以及集群部署 (以下是集群情况下的nginx的配置)，仅作参考

nginx.conf

**需要根据环境实际情况而调整**

```bash
user  root;
worker_processes  auto;
error_log  logs/error.log;
#load_module /usr/local/openresty/nginx/modules/ngx_http_image_filter_module.so;
#pid        logs/nginx.pid;
events {
    worker_connections  4096;
}

http {
    more_clear_headers Server;
    include       mime.types;
    default_type  application/octet-stream;

    underscores_in_headers on;

    log_format  main   '$remote_addr [$time_local] '
                      '"$request" $request_time $body_bytes_sent $status "$http_referer" "$http_user_agent" '
                      '$upstream_addr $upstream_response_time $upstream_status';

    access_log  logs/access.log  main;

    expires -1;
    sendfile        on;

    lua_socket_pool_size 5;

    keepalive_timeout  120;

    client_max_body_size 64M;
    #加大缓冲区
    client_body_buffer_size 8M;
    client_header_timeout 300s;

    proxy_connect_timeout 120;
    proxy_read_timeout 120;
    proxy_send_timeout 120;
    proxy_http_version 1.1;
    proxy_set_header Connection "";

    gzip  on;
    gzip_http_version 1.0;
    gzip_min_length  102480;
    gzip_buffers     4 8k;
    gzip_types       text/plain application/x-JavaScript text/css application/xml application/json application/javascript application/octet-stream;

 upstream minio-server {
   server 192.168.72.35:9000;
   server 192.168.72.85:9000;
   keepalive 100;
}

upstream minio-console {
   server 192.168.72.35:9001;
   server 192.168.72.85:9001;
}

 server {
      listen 19001;
      location / {
        proxy_pass http://minio-console;
      }
   }

   server {
      listen 19000;

      location / {
        if ( $request_method = GET ) {
          proxy_pass http://127.0.0.1:8080;
        }
        proxy_set_header Host $http_host;
        proxy_pass http://minio-server;
      }
   }

   server {
      listen 8080;
      location ~* \.(jpg|jpeg|png|jfif|gif)$ {
        # -表示不改变
        set $height -;
        set $width -;
        #
        if ($arg_x-oss-process ~* image(.*)resize(.*)w_(\d+)(.*)h_(\d+)) {
            set $height $5;
            set $width $3;
        }
        add_header Access-Control-Allow-Headers "content-type,content-md5,token,x-oss-security-token,x-oss-date,x-oss-user-agent,$http_access_control_allow_headers";
        #压缩图片
        image_filter resize $width $height;
        #默认buffer大小为1M 如果不够大的话也会报415的错误
        image_filter_buffer 50M;
        #配置图片质量，最大推荐为95，默认是75
        image_filter_jpeg_quality 75;
        if ($args ~ "^(.*)(x-oss-process=.*)(&*.*)$") {
                     set $args $1$3;
                }
        proxy_set_header Host $http_host;
        proxy_pass http://minio-server;
      }
      location / {
        proxy_set_header Host $http_host;
        proxy_pass http://minio-server;
      }
    }
}
```

## MinIO使用

* 登录MinIO的控制台地址

* 管理员帐号

  默认生成的帐号密码为： minioadmin \\ minioadmin 。如果部署时，有指定，按指定进行登录

  ```json
  admin
  admin123
  ```

* 云存储用户 （用来作为sts和后端上传下载使用的帐号）

  ```json
  aPaaSMinioUser
  aPaaSMinio!@#456Pass

  --密钥
  zQeEmc3peBmOHoDh
  g3fDIud5xUV0C2JXqhrz9GHlmkkYFggo
  ```

![image-20220819105130260](http://apaas.wxchina.com:8881/wp-content/uploads/minio_users.png)

* 创建存储桶

​ 按照项目上存储，建立 storage| storage-1d | storage-1y | storage-3m 存储桶。可以共用一个桶

![image-20220825105239813](http://apaas.wxchina.com:8881/wp-content/uploads/minio_buckets.png)

可以给桶设置访问策略

![image-20220825105947964](http://apaas.wxchina.com:8881/wp-content/uploads/minio_bucket_access.png)

按照项目上可以设置为读时不用密钥，公开模式

1. 直接设置Access Policy -》 public

2. 通过access rules 增加保存， Access Policy -》 custom

   ![image-20220825110319675](http://apaas.wxchina.com:8881/wp-content/uploads/minio_bucket_access_rules.png)

## 套餐配置

* 环境套餐数据 (STS数据增加)

```sql
--xw-platform库 也可以通过9018站点，配置增加
--cmdb_resourcegroup
INSERT INTO "public"."cmdb_resourcegroup" ("resourcegroupid", "resourcegroupname", "resourcegroupkey") VALUES (1559005895084609536, 'MinioSTS', 'sts');

--cmdb_resource
INSERT INTO "public"."cmdb_resource" ("resourceid", "resourcename", "resourcegroupid", "resourcekey", "resourcetype") VALUES (1559006048759713792, '提供商', 1559005895084609536, 'provider', 0);
INSERT INTO "public"."cmdb_resource" ("resourceid", "resourcename", "resourcegroupid", "resourcekey", "resourcetype") VALUES (1559007064850829312, '接口EndPoints', 1559005895084609536, 'endpoint', 0);
INSERT INTO "public"."cmdb_resource" ("resourceid", "resourcename", "resourcegroupid", "resourcekey", "resourcetype") VALUES (1559007356631781376, 'accessKeyId', 1559005895084609536, 'accessKeyId', 0);
INSERT INTO "public"."cmdb_resource" ("resourceid", "resourcename", "resourcegroupid", "resourcekey", "resourcetype") VALUES (1559007424956993536, 'accessKeySecret', 1559005895084609536, 'accessKeySecret', 0);
```

* 租户套餐数据配置

  主要配置 STS、storage、 storage-1d 、 storage-1y 、 storage-3m 等资源的数据值

  ```
  1. 实施模式，利用9018站点，套餐管理页面配置
  ```

​ STS 配置 (示例图)

​ ![image-20220825111536251](http://apaas.wxchina.com:8881/wp-content/uploads/resource_sts_conf.png)

​ Storage配置 （示例图）(storage-1d 、 storage-1y 、 storage-3m 等配置等同配置，用各自定义的bucket，或共用bucket)

![image-20220825112024232](http://apaas.wxchina.com:8881/wp-content/uploads/resource_storage_conf.png)

填写数据例子

![image-20221227182224275](http://apaas.wxchina.com:8881/wp-content/uploads/minio-resource-client.png)

![image-20221227182320123](http://apaas.wxchina.com:8881/wp-content/uploads/minio-resouce-server.png)

根据实际部署情况，以及minio控制台上的帐号密钥和桶的信息，填写具体的值