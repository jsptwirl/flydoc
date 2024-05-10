---
title: 分布式ID生成
date: 2020-12-29T17:00:33
---

aPaaS的数据库主键采用的id生成算法是：snowflake雪花算法

# 1 雪花算法

雪花算法生成的ID是纯数字，按时间趋势递增，整个分布式系统中不会产生重复id。

## 1.1 组成结构

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%88%86%E5%B8%83%E5%BC%8FID%E7%94%9F%E6%88%901.png)

64位ID由：首位无效符，时间戳差值，机器（进程）编码和序列号四部分组成。

* 时间位：用来记录时间戳（毫秒）。41位可以表示2^41-1个毫秒的值，即69年。
* 机器id位：用来记录工作机器id。适用于分布式环境下对多节点的各个节点进行标识，可以具体根据节点数和部署情况设计划分机器位10位长度，如划分5位表示进程位等。
* 序列号位：用来记录同毫秒内产生的不同id，是一系列的自增id。12位的计数序列号，支持每个节点每毫秒产生4096个ID序号。

## 1.2 使用方法

### 1.2.1 存储过程

①、创建snow\_next\_id()函数:

```sql
CREATE SEQUENCE table_id_seq increment by 1 maxvalue 99999999 minvalue 1 start 1 cycle;

CREATE OR REPLACE FUNCTION snow_next_id(OUT result bigint) AS $$
DECLARE
   our_epoch bigint := 1314220021721;
   seq_id bigint;
   now_millis bigint;
   shard_id int := 5;
BEGIN
   seq_id := nextval('table_id_seq') % 1024;
   SELECT FLOOR(EXTRACT(EPOCH FROM clock_timestamp()) * 1000) INTO now_millis;
   result := (now_millis - our_epoch) << 23;
   result := result | (shard_id << 10);
   result := result | (seq_id);
END;
$$ LANGUAGE PLPGSQL;
```

②、使用snow\_next\_id()函数生成id：

示例：

```sql
select snow_next_id() as id from dim_appver;
```

### 1.2.2 Flycode

API：

```java
FLY.genId();
```

示例：

```java
var store = BO.new('kx_store');

store.storeid = FLY.genId();
store.storename = '测试门店1';
```

## 1.3 服务分布式部署调参

服务分布式部署需要调整以下参数：workerid、datacenterid

### 1.3.1 方式一：deploy.sh

修改deploy.sh中的参数：`-Did.workerid=1 -Did.datacenterid=1`

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%88%86%E5%B8%83%E5%BC%8FID%E7%94%9F%E6%88%902.png)

* workerid：服务类型标识
* datacenterid：同一个服务集群的节点标识

`不同的服务类型，设置不同的workid，同一个服务集群的不同节点，设置不同的datacenterid`

例如：

认证服务集群部署：workerid = 1

认证服务1: datacenterid = 1

认证服务2: datacenterid = 2

离线服务集群部署：  
workerid = 2 (设置成和认证服务集群不同的标识）

离线服务1：datacenterid = 1

离线服务2：datacenterid = 2

### 1.3.2 方式二：application.properties

在 服务部署 的文件夹中新建一个application.properties文件：

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%88%86%E5%B8%83%E5%BC%8FID%E7%94%9F%E6%88%903.png)

application.properties：

```
id.workerid=1
id.datacenterid=1
```

* workerid：服务类型标识
* datacenterid：同一个服务集群的节点标识

`不同的服务类型，设置不同的workid，同一个服务集群的不同节点，设置不同的datacenterid`

例如：

认证服务集群部署：workerid = 1

认证服务1: datacenterid = 1

认证服务2: datacenterid = 2

离线服务集群部署：  
workerid = 2 (设置成和认证服务集群不同的标识）

离线服务1：datacenterid = 1

离线服务2：datacenterid = 2