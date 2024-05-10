---
title: Attachment
date: 2020-05-20T17:06:04
---

# Attachment

附件上传和浏览

> 目前移动端的附件控件只支持下载查看，不支持上传功能。

![](http://apaas.wxchina.com:8881/wp-content/uploads/AttachmentSample1.png)

![](http://apaas.wxchina.com:8881/wp-content/uploads/AttachmentSample2.png)

## Protocol

```Json
{
    "type": "attachment",
    "code": "ctrl_attachment_contractattachment",
    "title": "附件上传",
    "readonly": "",
    "maxnumber": "1",
    "accept": "image/png,image/jpg,text/txt,",
    "maxsize": "300"
}
```

* maxnumber

  最大允许上传的附件的数量

* accept

  允许上传的附件的格式

|Type|Description|Example of typical subtypes|
|---|---|---|
|`text`|Represents any document that contains text and is theoretically human readable|`text/plain`, `text/html`, `text/css`, `text/javascript`|
|`image`|Represents any kind of images. Videos are not included, though animated images (like animated gif) are described with an image type.|`image/gif`, `image/png`, `image/jpeg`, `image/bmp`, `image/webp`|
|`audio`|Represents any kind of audio files|`audio/midi`, `audio/mpeg`, `audio/webm`, `audio/ogg`, `audio/wav`|
|`video`|Represents any kind of video files|`video/webm`, `video/ogg`|
|document||document/excel , document/word|
|`application`|Represents any kind of binary data.|`application/octet-stream`, `application/pkcs12`, `application/vnd.mspowerpoint`, `application/xhtml+xml`, `application/xml`, `application/pdf`|

* maxsize

  允许上传的附件文件大小的最大值，以 `mb` 为单位描述

## Value Format

```Json
[
    {
        "url": "http://xxx/xxx/123.png",
        "filename": "合同附件照片",
        "type": "image/png",
        "date": "13896564452214",
        "filesize": "58962",
        "storage": ""
    }
]
```

该格式为附件取值和赋值时的数据格式需求

* url

  文件的url地址。

  如果是提交数据，此处为带后缀的文件名。

  如果是加载数据，以 `http` 开头则代表为完整下载路径，直接使用该路径下载；否则，此处代表存储在oss的文件名，需要根据约定的规则，使用date 以及 storage 等字段的值组装下载路径。

* filename

  文件名，用于控件显示的文件名称。通常此处的文件名与url中的是一致的。不过当用于加载外网文件时，可以用该字段提供一个适合于显示的名称。

* type

  文件的类型

* date

  文件上传的日期，时间戳

* size

  文件的大小，单位为byte

* storage

  存储周期，由于附件通常都是长期存储的，因此该字段始终为空值，即表示默认的长期存储即可