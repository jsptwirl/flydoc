---
title: excel导入导出
date: 2020-07-03T18:05:06
---

# 3.3.1. Excel导入导出

* [3.3.1. Excel导入导出](#331-excel导入导出)

  * [3.3.1.1. EXCEL导入](#3311-excel导入)

    * [3.3.1.1.1. 导入配置](#33111-导入配置)

      * [3.3.1.1.1.1. 实施专用配置（**类似java项目的properties文件**）](#331111-实施专用配置类似java项目的properties文件)
      * [3.3.1.1.1.2. web端用户专用配置（**类似java项目的properties文件**）](#331112-web端用户专用配置类似java项目的properties文件)
      * [3.3.1.1.1.3. 实施、web端共用配置（**类似存储过程的入参**）](#331113-实施web端共用配置类似存储过程的入参)
      * [3.3.1.1.1.4. 导入缓存配置](#331114-导入缓存配置)
    * [3.3.1.1.2. 数据绑定对象（**类似mybatis的resultMap**）](#33112-数据绑定对象类似mybatis的resultmap)

      * [3.3.1.1.2.1. 数据校验](#331121-数据校验)
    * [3.3.1.1.3. 特殊需求处理](#33113-特殊需求处理)
    * [3.3.1.1.4. 统计忽略导入的行](#33114-统计忽略导入的行)
    * [3.3.1.1.5. 跨表头导入](#33115-跨表头导入)
  * [3.3.1.2. EXCEL导出](#3312-excel导出)

    * [3.3.1.2.1. 导出绑定对象数组（**类似mybatis的resultMap**）](#33121-导出绑定对象数组类似mybatis的resultmap)

      * [3.3.1.2.1.1. web端用户专用配置（**类似java项目的properties文件**）](#331211-web端用户专用配置类似java项目的properties文件)
    * [3.3.1.2.2. 抽取数据库数据](#33122-抽取数据库数据)
    * [3.3.1.2.3. 导出操作](#33123-导出操作)
    * [3.3.1.2.4. 导出操作](#33124-导出操作)
    * [3.3.1.2.5. 跨列父表头](#33125-跨列父表头)
    * [3.3.1.2.6. 注意事项](#33126-注意事项)
    * [3.3.1.2.7. 导出格式扩展](#33127-导出格式扩展)
  * [3.3.1.3. EXCEL复杂结构导出方案](#3313-excel复杂结构导出方案)

## 3.3.1.1. EXCEL导入

excel导入数据是按行来导入的，每行数据都会执行一次flycode，前一行导入出错不影响后一行的导入，同一行数据导入出错的时候，会回滚该行的导入。

### 3.3.1.1.1. 导入配置

#### 3.3.1.1.1.1. 实施专用配置（**类似java项目的properties文件**）

这些配置描述导入excel的数据抽取规则，不会影响flycode的代码执行逻辑。  
实施在flycode代码开始处（不需要在ide上配置入参），必须定义“\_xlsconf”对象，该对象的属性即为实施专用配置。该对象目前有两个属性：1、startindex，表示从sheet页的第几行开始导入。2、isOrderExtract，表示将按行的顺序导入excel（会影响导入速度）。后续flycode代码中不能使用“\_xlsconf”对象。  
**注意：“\_xlsconf”对象只能一次性定义，不支持在flycode中添加、删减、修改对象属性**。

---

**示例**：

```js
var _xlsconf = {
     //指定将从sheet页的第N行开始导入。注意：第0行为列名行
    "startindex" : "N",
    // true表示顺序导入， false表示不顺序导入（默认）
    "isOrderExtract" : "true" 
}
```

---

#### 3.3.1.1.1.2. web端用户专用配置（**类似java项目的properties文件**）

这些配置描述导入excel的数据抽取规则，不会影响flycode的代码执行逻辑。  
由实施在ide配置入参，web端用户传参。参数名不能以下划线“\_”开头（参数名以下划线开头的参数有特殊用途，可见3.8.1.1.3. 实施、web端共用配置）。主要用来描述待导入的一些信息。如下所示：

```js
{
    "xls_test": {
        //指定了导入哪些sheet。传空数组表示导入全部sheet
        "sheetnames":"[\"华南sheet\",\"华北sheet\"]", 
        //导入的excel在文件系统的路径
        "excelname":"http://172.16.0.125:7000/file/img/20170522/1008199/input1.xlsx"
    }
}
```

#### 3.3.1.1.1.3. 实施、web端共用配置（**类似存储过程的入参**）

实施在flycode定义“*paramobj”全局对象作为共用配置对象，web端用户可以选择覆盖这个对象的属性（只能覆盖属性名以下划线“\\*”开头的属性）。“\_paramobj”对象可以被flycode代码引用，进而达到控制flycode执行逻辑的目的。使用方法如下：

* 步骤一：实施在flycode中一次性定义“\_paramobj”全局对象作为参数对象，**禁止实施人员在后续flycode中添加、删减、修改对象属性**。该对象可以被后续flycode代码引用。如下所示：
  ```js
  var _paramobj = {
  //重复行导入策略： 1：更新；2：追加；3：忽略
  "_dupstrategy" : "1"
  }
  ```

* 步骤二：如果web端用户想覆盖实施的定义，则需要实施在ide上配置入参，由web端用户传参，参数名必须以“\_”开头。如下所示：
  ```js
  {
  "xls_test":{
      //重复行导入策略： 1：更新；2：追加；3：忽略
      "_dupstrategy":"3"
  }
  }
  ```

  此后，在flycode执行之前，“\_paramobj”对象的\_dupstrategy属性会被平台替换成web端用户的定义，如下所示：

  ```js
  _paramobj._dupstrategy = "3";
  ```

* 步骤三：后续flycode代码中，可以直接使用“\_paramobj”对象。比如使用该对象做一些流程控制，如下所示：

  ```js
  if(_paramobj._dupstrategy == 1){
  //执行更新
  }else if(_paramobj._dupstrategy == 2){
  //执行追加
  }else if(_paramobj._dupstrategy == 3){
  //执行忽略
  }else{
  //抛出异常
  }
  ```

#### 3.3.1.1.1.4. 导入缓存配置

  为了避免导入逻辑频繁访问数据库，从而造成导入执行效率低的问题，专门为导入逻辑引入缓存配置；该缓存只对一次导入执行有效，即是局部缓存。该配置适用于小结果集的缓存，比如字典数据。
* 缓存配置
  ```js
  var _cache_brandList = select d.dictionaryid,d.dicvalue,d.keypath,d.status 
                      from kx_productbrand d RULE("pl_salearea");
  var _cache_storelevels = select d.dictionaryid,d.dicvalue,d.status 
                      from kx_storelevel d NORULE;
  ```

***注意：虽然该配置与flycode的查询语法一致，但不支持参数查询以及权限黑白名单占位符方式，必须是‘var \_cache\_xxx =’ 开头,查询结果集将会缓存到xxx中***

* 定义缓存后，缓存对象将被注入到'CTX'容器中，在flycode中的应用：

```js
//使用缓存：
if(!String.isBlank(IN.kx_storelevel.dicvalue)){
    var storelevel = null
    for(var j = 0,len = CTX.storelevels.length;j<len;j++){
        if(CTX.storelevels[j].dicvalue == IN.kx_storelevel.dicvalue){
            storelevel =  CTX.storelevels[j]
            break;
        }
    }
    if(storelevel == null){
       errMsg = errMsg + ("[终端级别]不存在！请在新增页面中，查看有效的终端级别;");
    }else if(storelevel.status == 2){
       errMsg = errMsg + ("[终端级别]已经停用;");
    }else{
         IN.kx_kq_store.storelevel = storelevel.dictionaryid;
    }
}
```

```js
// 不使用缓存：
if(!String.isBlank(IN.kx_storelevel.dicvalue)){
  var storelevels = select d.dictionaryid,d.parentdictionaryid,d.status 
                    from kx_storelevel d 
                    where d.dicvalue = {IN.kx_storelevel.dicvalue} NORULE;
  if(storelevels == null || storelevels.length == 0) {
    errMsg = errMsg + ("[终端级别]不存在！请在新增页面中，查看有效的终端级别;");
  }else if(storelevels[0].status == 2){
    errMsg = errMsg + ("[终端级别]已经停用;");
  }else{
    IN.kx_kq_store.storelevel = storelevels[0].dictionaryid;
  }
}
```

### 3.3.1.1.2. 数据绑定对象（**类似mybatis的resultMap**）

该对象决定了业务对象的列和excel的列的对应关系，指导平台生成业务对象的入参。  
命名方式："\_bind\_ + 业务对象名"，由实施人员在flycode中一次性定义，**禁止在后续flycode中添加、删减、修改对象属性**。后续flycode不能引用该对象。如下所示：  
flycode绑定对象定义:

```js
var  _bind_xls_test = { //业务对象名为“xls_test”
    "name" : "姓名",  
    "credit" : "学分",    
    "birthday" : "生日",
    "money" : "金额"
}
```

待导入的excel数据如下所示：

```js
姓名    学分     生日      金额
张三    99    2017-1-1    2.22
```

执行flycode之前，平台会根据上述配置，自动封装入参，如下所示：

```js
IN.xls_test = {
    "name" : "张三",  
    "credit" : "99",    
    "birthday" : "2017-1-1",
    "money" : "2.22"
}
```

#### 3.3.1.1.2.1. 数据校验

数据校验函数由用户自己定义。如果数据有误，则抛出异常，系统将把异常的描述信息作为错误信息excel的错误描述。  
示例：

```js
//定义了金额校验函数，金额必须大于0
function moneyValFun(param1){
    print("开始调用moneyValFun了");
    if(parseInt(param1) <= 0){
        throw new ERROR("金额必须大于0！");
    }
}
//调用校验函数
moneyValFun(IN.xls_test.money); 
```

### 3.3.1.1.3. 特殊需求处理

平台不提供特殊需求的处理，一切特殊需求都放到flycode中处理。  
比如某个特殊需求：在导入某行excel数据的时候，如果数据库中已经有该行数据，则认为该excel数据是重复数据，需要根据配置来进行更新、追加、忽略等数据库操作。flycode可以按照如下步骤进行处理：

* 步骤一：实施定义对象“\_paramobj”（只有该对象的属性名以“\_”开头的属性才能被web用户传参覆盖）的属性“\_dupstrategy”,该属性在后续flycode中决定了特殊逻辑的处理策略。
  ```js
  var _paramobj = {
  //重复行导入策略： 1：更新；2：追加；3：忽略
  "_dupstrategy" : "1"
  }
  ```
* 步骤二：定义数据绑定对象，如下所示：
  ```js
  //业务对象名为“xls_test”
  var  _bind_xls_test = {
  "name" : "姓名",  
  "credit" : "学分",    
  "birthday" : "生日",
  "money" : "金额"
  }
  ```
* 步骤三：需求中，认为name、credit都相同的数据即为重复数据。以name、credit为条件查询数据库，确认该数据是否是重复数据：
  ```js
  var xls_testdp = select count(*) num from xls_test where name={IN.xls_test.name} and credit={IN.xls_test.credit};
  if(xls_testdp==null || xls_testdp.length == 0) {
  throw new ERROR("查询xls_test的数目出错！");
  }
  if(xls_testdp[0].num == 0) {
  //不是重复数据
  }else{
  //是重复数据
  }
  ```
* 步骤四：执行重复数据处理逻辑：
  ```js
  if(xls_testdp[0].num == 0) {
  //不是重复数据，直接插入数据库
  DB.insert(IN.xls_test);
  }else {
  //该行数据是重复数据，根据重复行处理策略进行处理
  if(_xlsconf.dupstrategy == 1){
      //更新。DB.update函数的非第一个参数将作为update语句的where条件
      //在本例中，将执行sql：update xls_test set birthday=? money=? where name=? and credit=?;
      DB.update(IN.xls_test, 'name', 'credit');
  }else if(_xlsconf.dupstrategy == 2){
      //追加
      DB.insert(IN.xls_test);
  }else if(_xlsconf.dupstrategy == 3){
      //忽略
  }else{
      throw new ERROR("没有指定合法的重复行处理策略！");
  }
  }
  ```

### 3.3.1.1.4. 统计忽略导入的行

如果需要忽略某行的导入，把该行以及忽略导入原因导出到错误excel，并统计入被忽略的行总数，  
执行

```js
throw new ERROR("自定义忽略原因", "impignore");
```

### 3.3.1.1.5. 跨表头导入

如果需要做跨表头导入，例如：

|||
|---|---|
|序号|组合|
|分组1|分组2|
|1|数据1|数据2|
|2|数据3|数据4|

绑定协议配置如下:

```json
// 需要配置导入开始行做数据偏移
var _xlsconf = {
    "startindex" : "N",
}

// 字段映射使用 "-" 分隔组合字段与分组字段
var  _bind_xls_test = { //业务对象名为“xls_test”
    "id" : "序号",    
    "data1" : "组合-分组1",     
    "data2" : "组合-分组2"
}
```

## 3.3.1.2. EXCEL导出

### 3.3.1.2.1. 导出绑定对象数组（**类似mybatis的resultMap**）

该对象决定了flycode的js数据对象和excel的列的对应关系。  
命名方式："\_xlscolBind"，由实施人员在flycode中一次性定义，**禁止在后续flycode中添加、删减、修改该对象属性**。后续flycode不能使用该对象。该数组对象的每个对象都代表了一个属性名与Excel列名的映射关系，"field"代表对象属性，"column"代表excel列名, 如下所示：

```js
var _xlscolBind = [
    {
        "field": "name",
        "column": "姓名"
    },
    {
        "field": "credit",
        "column": "学分"
    },
    {
        "field": "birthday",
        "column": "生日"
    },
    {
        "field": "money",
        "column": "金额"
    }
];
```

#### 3.3.1.2.1.1. web端用户专用配置（**类似java项目的properties文件**）

这些配置描述导入excel的数据导出规则，不会影响flycode的代码执行逻辑。

```js
{
    "xls_test": {
        //导出的sheet名
        "sheetname":"制定便捷计划",
        //导出的excel名
        "filename":" 导出.xlsx"
    }
}
```

### 3.3.1.2.2. 抽取数据库数据

通过执行select语句来抽取数据库数据。  
flycode示例：

```js
var param1 = {
    "name":"张三"
}
var temp = SELECT name , credit , money  FROM xls_test WHERE name like {param1.name};
```

执行上述flycode，系统将生成对象数组：

```js
var temp = [ {name:张三, credit:99, money:22.2}, {name:张三2, credit:88, money:11.2} ];
```

### 3.3.1.2.3. 导出操作

由于flycode中“OUT”对象是默认输出对象，实施把js数据对象数组赋值给OUT.xlsdata对象即可视为完成导出操作。平台在生成导出excel的时候，会从OUT.xlsdata中抽取数据，并参照导出绑定对象（见3.8.2.1），最终生成excel文件。  
导出完整步骤如下所示：

* 步骤一：实施定义导出绑定对象  

### 3.3.1.2.4. 导出操作

  执行“OUT.\_xlsData = temp;”即可导出excel，其中temp为导出数据对象数组。  
示例：

  ```js
  var _xlscolBind = [
  {
      "field": "name",
      "column": "姓名"
  },
  {
      "field": "credit",
      "column": "学分"
  },
  {
      "field": "birthday",
      "column": "生日"
  },
  {
      "field": "money",
      "column": "金额"
  }
  ];
  ```
* 步骤二：构造js数据对象数组
  ```js
  var temp = [ {name:张三, credit:99, money:22.2}, {name:张三2, credit:88, money:11.2} ];
  ```

* 步骤三：把js数据对象数组赋值给OUT.xlsdata
  ```js
  OUT.xlsdata = temp;
  ```

  执行完该flycode后，平台参照导出绑定对象“\_xlscolBind”，最终生成如下excel：

  ```js
  姓名    学分    生日    金额
  张三    99             22.2
  张三2   88             11.2
  ```

### 3.3.1.2.5. 跨列父表头

某些需求需要导出跨列父表头，如下所示：

```js
      终端信息                费用信息 
终端编号    终端名称    费用编号    费用名称
    Z1       便利店1       F1       驻场费用
```

跨列父表头终端信息下设终端编号和终端名称，费用信息下设费用编号和费用名称。

新增“\_xlsPcol1”对象来表示跨列表头（此为临时方案，后期会在IDE里进行配置）。“\_xlsPcol1”中的“1”表示是第一行父表头，目前仅支持一行父表头。  
完整flycode如下所示：

```js
//定义跨列父表头对象
var _xlsPcol1 = [
    {
        "column": "终端信息",
        "span": "2" //表示跨两列
    },
    {
        "column": "费用信息",
        "span": "2"//表示跨两列
    }
]

//定义导出绑定对象数组
var _xlscolBind = [
    {
            "field": "zdbh",
            "column": "终端编号"
    },
    {
            "field": "zdmc",
            "column": "终端名称"
    },
    {
            "field": "fybh",
            "column": "费用编号"
    },
    {
            "field": "fymc",
            "column": "费用名称"
    }   
]

//构造js数据对象数组
var temp = [ {zdbh:Z1, zdmc:便利店1, fybh:F1, fymc:驻场费用}];

//赋值
OUT.xlsdata = temp
```

注意：跨列表头对象、导出绑定对象数组内部元素的顺序将与导出的excel列的顺序一致

### 3.3.1.2.6. 注意事项

目前导出的最大行数为20000条。  
导出时sql语句需要添加paging标记。

### 3.3.1.2.7. 导出格式扩展

导出格式支持，列宽度、数据类型、动态文本(kv映射)；在\_xlscolBind中添加以下字段  
新版导出的字段映射设置，仅支持列宽度和数据类型，动态文本可直接在flycode中处理，更加灵活。

```json
_xlscolBind = [
    {
    "field": "映射字段名",
    "column": "excel列名",
    "width":"宽度：如:100",
    "type":"数据类型,默认:string；string 文本，double 数值型(可统计)",
    "dynamictext":{ // 动态文本
      "原数据1":"映射后的新数据1",
      "原数据2":"映射后的新数据2"
    }
},
]
```

例:

```json
_xlscolBind = [
{
    "field": "storecode",
    "column": "性别",
    "width":"100",
    "type":"String",
    "dynamictext":{ // 数据中的99和88，将被映射为高分和低分。
      "99":"高分",
      "88":"低分"
    }
},
```

## 3.3.1.3. 复杂结构导出方案

对于非二维表的复杂结构导出, 比如多维数据透视表.建议仅实现二维数据导出.将复杂结构生成交由excel的宏命令去生成.

* 将复杂的结构生成事先编写excel宏命令,并保存为导出模板文件.
* 在IDE的文件管理中,上传导出模板.
* 导出服务提供 **指定模板文件** ,如下:

```js

// 在flycode可使用如下定义指定导出模板使用的文件.
var _xlscolTemplate = "文件key";
```

* 导出服务将根据以上关键字,引用导出模板,导出二维数据.并生成一个带有宏命令的excel文件.
* 使用以上方法,实现excel导出的无所不能.