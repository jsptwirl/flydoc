---
title: 输入型控件支持setter设置只读属性
---
## 输入型控件支持setter赋值component:'readonly'设置只读属性

支持范围：重构过的ts控件

### 需求背景

编辑表格编辑数据后点击提交，提交后编辑表格部分数据不可更改，在不配置另外的只读表格的情况下，需要对编辑表格内的控件设置只读。

### Component

| name | value | meaning | 取值 | 赋值 |
| --- | --- | --- | --- | --- |
| readonly | '0' 或 '1' | 只读 | 不支持 | Web v9.7.3+支持 |

### 使用方法

#### 表单截图

编辑表格： ![](http://apaas.wxchina.com:8881/wp-content/uploads/editertable.png) 营销组织： ![](http://apaas.wxchina.com:8881/wp-content/uploads/yxzz.png) 经销商编码： ![](http://apaas.wxchina.com:8881/wp-content/uploads/jxsbm.png) 其余列类似。

#### flycode

在编辑表格加载或者按钮触发事件时，执行flycode

以下是flycode参考代码（重点在于setter.append('经销商编码只读', '经销商编码', 'readonly')，设置只读）。 当前flycode的data数据只为满足演示需要所造的数据，各位可以根据具体情况对此数据进行适当的调整。

```js
var ctrl = Page.getArrayCtrl("经销商核销")
var data = []
for(var i = 1; i <= 18; i++) {
  const flag = i % 2 === 0
  const flag2 = i % 3 === 0
  const flag3 = i % 4 === 0
  const flag4 = i % 5 === 0
    data.push({
      '营销组织': flag ? '1072004788226494464' : '1308612552846086144',
      '经销商编码': '01010100' + i,
      '经销商名称': flag2 ? '栾城区慷达糖酒销售二部' : '泊头市顺意副食经营部',
      '活动名称': flag3 ? '22.1月植物奶陈列' : '22.2月果冻陈列',
      '支付方式': flag4 ? '1' : '2',
      '提交时间': (Date.now() - ((18 - i) * 1000 * 3600 * 24)) + '',
      '经销商编码只读': flag ? '1' : '0'
  })
}

const setter = new ArrayCtrlSetter()
setter.append('营销组织', '营销组织')
setter.append('经销商编码', '经销商编码')
setter.append('经销商名称', '经销商名称')
setter.append('活动名称', '活动名称')
setter.append('支付方式', '支付方式')
setter.append('提交时间', '提交时间')
setter.append('经销商编码只读', '经销商编码', 'readonly')

ctrl.reload(data, setter)
```

### 效果展示

![](http://apaas.wxchina.com:8881/wp-content/uploads/输入型控件支持setter赋值componentreadonly设置只读属性效果展示.png)