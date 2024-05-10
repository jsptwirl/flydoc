---
title: StepsManager 步骤管理器
date: 2020-05-20T14:31:29
---

![](http://apaas.wxchina.com:8881/wp-content/uploads/StepEditorSample.png)

![](http://apaas.wxchina.com:8881/wp-content/uploads/StepEditorSample_mobile.png)

> 只读状态下的UI，直接使用tab页签替代导航区域。

# StepsManagerPage

```json
{
    "pageinfo": {
        "code": "新增搭赠费用方案",
        "type": "300"

    },
    "stepsinfo": {
        "loadlogiccode": "", 
        "savelogiccode": "", 
        "onsaving": "", 
        "oncomplete": "", 
        "pages": [
            {
                "id": "1",
                "pagecode": "",//引用的pagecode
                "title": "",//引用的page的title
                "functioncode": "234234233234",
                "icon": "",
                "hidden": "fly: ..."
            }
        ]
    }
}
```

## 属性说明

### loadlogiccode

加载数据逻辑,通常用来配置查看时需要加载的数据.

### savelogiccode

最终汇总上传所有数据的业务行为的code，该行为的入参将会被忽略，直接根据各个stepPage上报的数据，依次组装上传。可以不配置，而是用oncomplate来进行定制化的上传操作。

### oncomplate

配置点击完成按钮后执行的事件，通常如果不需要对数据进行特殊处理时，只要配置savelogiccode就会自动组装数据上传。但如果有特殊情况要处理数据，或者要在上传前做一些操作的话，就可以在此处配置事件处理。该事件处理完成后，再执行savelogiccode所关联的行为。

## 下一步

下一步按钮点击时会将会通知当前显示的StepPage执行oncomplete事件，然后等待当前的StepPage上报数据；当上报数据完成后，才会自动切换到下一个StepPage，然后通知下一个StepPage进行初始化。

## 只读模式

接受通过 \_\_pagestatus 参数控制是否是只读显示。

1. 只读时，会将只读参数传递给StepPage
2. 步骤标签可以自由切换，不显示图标
3. 下方的上一步和下一步按钮将会被隐藏

# StepPage

```json
{
    "pageinfo": {
        "code": "投方范围",
        "type": "301"
    },
    "stepinfo": {
        "onactive": "",
        "onupload": "",
        "oncomplete": "",
        "loadparam": [
            {
                "datatype": "0",
                "name": "__linkparam",
                "properties": [
                    {
                        "name": "name",
                        "alias": "storeid",
                        "ctrl": {
                            "component": "",
                            "code": "namectrl"
                        }
                    }
                    .....
                ]
            }
        ],
        "uploaddata": [
            {
                "name": "basicinfo",
                "datatype": "0",
                "ctrl": {
                    "code": "",
                    "scope": ""
                },
                "properties": [
                    {
                        "name": "storename",
                        "value": "",
                        "ctrl": {
                            "code": "namecontrol",
                            "component": ""
                        }
                    }
                ]
            }
        ]
    }
}
```

## 属性说明

### loadparam

每次从上一步骤完成跳转到本步骤时，每次都会根据从manager重新获取一次loadparam，更新初始参数

loadparam将在表单自身的onload事件执行完毕后自动执行。

### onactive

如果配置了对应的事件，将会在更新完参数后，调用指定的事件

> 该事件中就可以配置校验逻辑，当前面的表单的关键值发生变化后，可以在此处对已有的数据进行调整。

onactive将在loadparam数据获取完成后自动执行。

### uploaddata

点击下一步时自动向 StepsManagerPage 上报的数据

uploaddata将会在oncomplete事件成功执行后执行。

### oncomplete

当前步骤完成时调用的事件。

点击下一步时，将先调用该事件，成功后，将会自动根据 uploaddata 中定义的数据进行上报到manager

在执行该事件之前，要自动进行表单数据合法性校验。

## 只读模式

接受通过 \_\_pagestatus 参数控制是否是只读显示。

1. 只读时，自动将所有控件设置为只读
2. 只读时，自动将最外层的layout的显示模式mode设置为compact
3. 只读时，不会触发onactive事件

# 执行顺序说明

![](http://apaas.wxchina.com:8881/wp-content/uploads/StepsManager.png)

1. Load Manager Page

   当进入到步骤管理表单时,加载 Manager Page, 首先会执行所有 Page 通用的加载步骤:**receivelike** 和 **onload** .

   以上步骤执行完毕后,如果manager page表单的 *\_\_pagestatus == 2* , 也就是只读状态, 并且 **loadlogiccode** 配置了对应的业务逻辑code, 就会自动执行该业务行为. 该业务行为的出参将会存储在 Manager Page 的缓存值中.

2. Load Step Page

   真正加载 step page 之前,会依次检测每一个步骤是否有效,检查的顺序是根据配置顺序,依次看是否有权限 **functioncode**, 然后计算隐藏属性 **hidden** , 如果需要隐藏的, 则需要再导航栏去掉该步骤.

   > 由于每次进入加载下一步骤时都会执行检查逻辑,为了优化,可以约定每次只检查当前步骤之后的步骤.

   然后开始正式加载当前需要显示的 step page , 如果当前的 step page 是第一次加载,那么一样会执行表单通用的事件 **receivelike** 和 **onload** .

   然后 Step Page 将会执行其特有的加载参数逻辑 **loadparam** 从 Manager Page 的缓存值中获取所需的参数.

   以上步骤执行完毕后,如果表单不是只读的状态,并且 step page 的 **onactive** 属性又配置对应的事件时,则会自动触发该事件.

3. Saving Step Page

   当 Manager Page 的 **下一步按钮(完成按钮)** 被点击时,将会执行数据存储的逻辑.

   Manager Page 将会通知当前的 Step Page 进入到数据存储状态, 接收到该通知的 Step Page 会先执行 **oncomplate** 事件(如果有配置的话), 在该事件被成功执行完毕后, 将会执行 **uploaddata** , 将必要的数据存储到 Manager Page 的缓存值中.

   在以上步骤执行完毕后, 如果还有下一个步骤, 则 Manager Page 会自动进行下一个步骤的加载,也就是进入到 **第2步** ; 如果当前已经是最后一个步骤, 则 Manager Page 会自动进入到 **第4步** 进行最终的数据存储.

   > 只读状态下,将会不会有下一步按钮,因此只读状态下不会执行到第3步以及第4步.

4. Saving Data

   当所有的 Step Page 的数据都成功存储到 Manager Page 的缓存值后, Manager Page 就会触发其自身的 **oncomplete** 事件.

   该事件执行完毕后, 如果配置了 **savelogiccode** 就会接着执行该业务逻辑, 该逻辑应该从 Manager Page 的缓存值中获取数据并提交数据.

   如果配置了 **savelogiccode** 并成功执行完毕后,将会弹出成功提示,然后自动执行返回.