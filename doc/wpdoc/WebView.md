---
title: WebView
date: 2020-05-20T17:08:44
---

# Web View

web内容显示控件，支持直接显示html内容，或者显示一个URL对应的内容

## Protocol

```json
{
    "type": "webview",
    "title": "登录请求",
    "value": "http://.....",
    "displaymode": "content|link",
    "methodtype":"get",
    "contenttype":"application/json"
}
```

> 该控件为基础显示控件，具备基础显示控件的所有属性

* value

  显示内容，支持两种格式的内容，目前可通过查看是否以 `http` 开头来判断类型

|内容分类|内容示例|
|---|---|
|链接|[http://xx.xx.xx](http://xx.xx.xx)|
|json文本|一段存储了json内容的字符串，详细查看下方说明|

* displaymode（web未支持）

  显示模式

|模式值|说明|
|---|---|
|content|直接在控件内部显示出其内容，如果其值为链接，则直接显示链接对应的页面|
|link|以链接按钮的形式显示，使用title作为链接按钮的标题。点击该控件后通过链接到新的一个页面去显示其内容|

* methodtype（web未支持）

  方法类型，默认为get

|名称|取值|
|---|---|
|get|get方法，参数对应queryparams|
|post|post方法，参数对应queryparams或bodyparams|

* contenttype（web未支持）

  即post请求的Content-Type，如"application/json"、"application/x-www-form-urlencoded"，默认为"application/json"

## Json Data Structure

```json
{
    "body": "<!--IMG#0--><p>正文内容</p>",
    "images": [
        {
            "ref": "<!--IMG#0-->",
            "pixel": "250*200",
            "alt": "",
            "src": "http://xxx.xx.xx.xx/img/xxx.jpg"
        }
    ]
}
```

Web控件的值为一个json结构的数据

* body

  显示的正文，为html文本内容，其中的图片全部使用图片占位符。

* images

  文本内容中所引用的所有图片的信息

|字段名|说明|示例|
|---|---|---|
|ref|图片占位符，， `index` 为自增的正整数||
|pixel|图片的像素|250\*200|
|alt|图片替换文字|产品图|
|src|图片完整url地址|[http://xxx/xxx.jpg](http://xxx/xxx.jpg)|

  > 前端在具体解析的时候，需要先将图片占位符替换为本地的占位图片，然后再去一次下载图片，图片下载完成后，再替换占位图片。