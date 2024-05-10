---
title: UI控件公共包使用说明
date: 2022-09-08T08:52:38
---

## UI控件公共包使用说明

### 需求背景

由于UI控件中可能会依赖于各种各样的第三方依赖，比如echarts、element-ui、ant-design-vue等。  
每个UI控件都需要单独引入然后进行打包，会存在两个问题，一是每个UI控件的包体积因为第三方依赖变得很大，  
导致UI控件加载时间边长，二是如果UI控件的常用依赖包无法被重复引用，造成浪费。

### 改造方案

单独开出另外一栏存放第三方的公共包，命名为包管理，将经常使用的公共包上传到此处。

UI控件中增加一个公共包依赖的tab，只需要对当前UI控件使用到的公共包进行勾选，就能将此公共包引入到UI控  
件中，当前UI控件就无需再自行打包第三方的公共依赖，从而减少UI控件的体积和对公共依赖的重复利用。

### 数据表sql

```
CREATE TABLE "public"."pl_pack" (
  "packcode" int8 NOT NULL,
  "chinesename" varchar(500) COLLATE "pg_catalog"."default",
  "name" varchar(500) COLLATE "pg_catalog"."default",
  "status" int4,
  "publiclevel" int4,
  "createaccountcode" int8,
  "updateaccountcode" int8,
  "createaccountname" varchar(200) COLLATE "pg_catalog"."default",
  "updateaccountname" varchar(200) COLLATE "pg_catalog"."default",
  "createtime" timestamp(0),
  "updatetime" timestamp(0),
  "tenantcode" int8 NOT NULL DEFAULT 0,
  "sourcefilename" varchar(255) COLLATE "pg_catalog"."default",
  "packfilename" varchar(255) COLLATE "pg_catalog"."default",
  CONSTRAINT "pl_pagewidget_copy1_pkey" PRIMARY KEY ("packcode", "tenantcode")
)
;

ALTER TABLE "public"."pl_pack" 
  OWNER TO "postgres";

COMMENT ON COLUMN "public"."pl_pack"."packcode" IS '编码';

COMMENT ON COLUMN "public"."pl_pack"."chinesename" IS '中文名称';

COMMENT ON COLUMN "public"."pl_pack"."name" IS '名称';

COMMENT ON COLUMN "public"."pl_pack"."status" IS '状态，1表示启用，2表示停用';

COMMENT ON COLUMN "public"."pl_pack"."publiclevel" IS '公开等级，1.公开，0.私有';

COMMENT ON COLUMN "public"."pl_pack"."tenantcode" IS '租户编码';

COMMENT ON COLUMN "public"."pl_pack"."sourcefilename" IS '源码文件名';

COMMENT ON COLUMN "public"."pl_pack"."packfilename" IS '打包文件名';

COMMENT ON TABLE "public"."pl_pack" IS '页面控件';

-- 增加依赖字段
ALTER TABLE "public"."pl_pagewidget" 
  ADD COLUMN "dependencies" varchar(300);

COMMENT ON COLUMN "public"."pl_pagewidget"."dependencies" IS '依赖的第三方包code，如有多个则用半角逗号隔开';
```

### 使用教程

1. 将常用的公共依赖按照UI控件的打包方式打成资源包

   * 1-1 在[k100-web-native](https://gitee.com/gorphensu/k100-web-native)项目中，  
src/lib/index.js引入第三方依赖包（记得npm install，依赖包可以是一个，也可以是多个）

     ```
     // 示例一，第三方依赖包全量引入
     import qs from 'qs'
     import lodash from 'lodash'

     export default {
         qs,
         lodash
     }
     ```

     ```
     // 示例二，第三方包按需引入
     // 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
     import * as echarts from 'echarts/core'
     // 引入柱状图图表，图表后缀都为 Chart
     import { BarChart } from 'echarts/charts'
     // 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
     import {
         TitleComponent,
         TooltipComponent,
         GridComponent,
         DatasetComponent,
         TransformComponent
     } from 'echarts/components'
     // 标签自动布局，全局过渡动画等特性
     import { LabelLayout, UniversalTransition } from 'echarts/features'
     // 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
     import { CanvasRenderer } from 'echarts/renderers'

     // 注册必须的组件
     echarts.use([
         TitleComponent,
         TooltipComponent,
         GridComponent,
         DatasetComponent,
         TransformComponent,
         BarChart,
         LabelLayout,
         UniversalTransition,
         CanvasRenderer
     ])

     export default {
         echarts
     }
     ```

   * 1-2 打包出依赖文件，执行打包命令
     ```
     npm run build:lib
     ```

     **高级用法：**  
src/lib/index.js的index.js可命名为其他名称，但需要在build/webpack.lib.conf.js中修改entry的文件名称

     ```
     entry: path.resolve(__dirname, '../src/lib/xxx.js')
     ```

     通过此方法可以在lib文件夹中创建多个文件，通过修改entry可以实现打出不同的第三方公共依赖包
2. 在IDE-工具-包管理中新建，填写完包的中文名称，包名称以及选择公开级别

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%85%AC%E5%85%B1%E5%8C%85%E5%9F%BA%E6%9C%AC%E4%BF%A1%E6%81%AF.png)

1. 将lib-bundle/dist/index.js以及lib-bundle/dist.zip文件传到包管理的代码管理中，然后进行保存

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%85%AC%E5%85%B1%E5%8C%85%E4%B8%8A%E4%BC%A0.png)

1. 在需要用到公共依赖的UI控件中写入引用代码

   ```
   // echarts引用实例
   <template>
   <div class="erkai-dep-erkai-demo">
       <header class="stop-row-check">
       <span style="color: blue">{{ $t('二开例子使用配置第三方库例子') }}：</span>
       <button @click="(e) => handleClicked(e)">渲染一个图表</button>
       </header>
       <section ref="ref-chart" style="width: 400px;height: 400px;">
       </section>
   </div>
   </template>

   <script>
   import XtWeb from 'xtion-web'

   // 上传包后，引入第三方包规则，getLib中的名称为包管理中的包名称
   const { qs } = XtWeb.Dynamic.getLib('package-common')
   const { echarts } = XtWeb.Dynamic.getLib('package-echarts')

   export default {
   name: 'view',
   props: {
       ctrl: Object
   },
   created () {
       // eslint-disable-next-line no-eval
       console.log('qs', qs.parse('http://localhost:9800/#/page?pagecode=1550417445091676252'))
   },
   methods: {
       handleClicked () {
       console.log('echarts', echarts)

       // 基于准备好的dom，初始化echarts实例
       let myChart = echarts.init(this.$refs['ref-chart'])

       // 指定图表的配置项和数据
       let option = {
           title: {
           text: 'ECharts 入门示例'
           },
           tooltip: {},
           legend: {
           data: ['销量']
           },
           xAxis: {
           data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
           },
           yAxis: {},
           series: [{
           name: '销量',
           type: 'bar',
           data: [5, 20, 36, 10, 10, 20]
           }]
       }

       // 使用刚指定的配置项和数据显示图表。
       myChart.setOption(option)
       }
   }
   }
   </script>
   ```
2. UI控件的打包以及代码上传（此过程省略，详情请看[http://apaas.wxchina.com:8881/2020/05/11/二开控件开发流程](http://apaas.wxchina.com:8881/2020/05/11/二开控件开发流程)）
3. UI控件在公共包依赖的tab栏中勾选用到的依赖

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%85%AC%E5%85%B1%E5%8C%85%E4%BE%9D%E8%B5%96.png)

1. 点击保存，完成！