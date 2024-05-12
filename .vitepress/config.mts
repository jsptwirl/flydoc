import { defineConfig } from "vitepress";
const code = "fbfeeb586a5ffa8105b72d4923fe7db1";
const code2 = `async function embedChatbot(){const chatBtnId="fastgpt-chatbot-button";const chatWindowId="fastgpt-chatbot-window";const script=document.getElementById("fastgpt-iframe");const botSrc=script?.getAttribute("data-src");const primaryColor=script?.getAttribute("data-color")||"#4e83fd";const defaultOpen=script?.getAttribute("data-default-open")==="true";if(!botSrc){console.error(\`Can't find appid\`);return}if(document.getElementById(chatBtnId)){return}const MessageIcon=\`<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1690532785664" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4132" xmlns:xlink="http://www.w3.org/1999/xlink" ><path d="M512 32C247.04 32 32 224 32 464A410.24 410.24 0 0 0 172.48 768L160 965.12a25.28 25.28 0 0 0 39.04 22.4l168-112A528.64 528.64 0 0 0 512 896c264.96 0 480-192 480-432S776.96 32 512 32z m244.8 416l-361.6 301.76a12.48 12.48 0 0 1-19.84-12.48l59.2-233.92h-160a12.48 12.48 0 0 1-7.36-23.36l361.6-301.76a12.48 12.48 0 0 1 19.84 12.48l-59.2 233.92h160a12.48 12.48 0 0 1 8 22.08z" fill=\${primaryColor} p-id="4133"></path></svg>\`;const CloseIcon=\`<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1690535441526" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6367" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024zM305.956571 370.395429L447.488 512 305.956571 653.604571a45.568 45.568 0 1 0 64.438858 64.438858L512 576.512l141.604571 141.531429a45.568 45.568 0 0 0 64.438858-64.438858L576.512 512l141.531429-141.604571a45.568 45.568 0 1 0-64.438858-64.438858L512 447.488 370.395429 305.956571a45.568 45.568 0 0 0-64.438858 64.438858z" fill=\${primaryColor} p-id="6368"></path></svg>\`;const ChatBtn=document.createElement("div");ChatBtn.id=chatBtnId;ChatBtn.style.cssText="position: fixed; bottom: 1rem; right: 1rem; width: 40px; height: 40px; cursor: pointer; z-index: 2147483647; transition: 0;";const ChatBtnDiv=document.createElement("div");ChatBtnDiv.innerHTML=MessageIcon;const iframe=document.createElement("iframe");iframe.allow="fullscreen;microphone";iframe.title="FastGPT Chat Window";iframe.id=chatWindowId;iframe.src=botSrc;iframe.style.cssText="border: none; position: fixed; flex-direction: column; justify-content: space-between; box-shadow: rgba(150, 150, 150, 0.2) 0px 10px 30px 0px, rgba(150, 150, 150, 0.2) 0px 0px 0px 1px; bottom: 4rem; right: 1rem; width: 24rem; height: 40rem; max-width: 90vw; max-height: 85vh; border-radius: 0.75rem; display: flex; z-index: 2147483647; overflow: hidden; left: unset; background-color: #F3F4F6;";iframe.style.visibility=defaultOpen?"unset":"hidden";document.body.appendChild(iframe);let chatBtnDragged=false;let chatBtnDown=false;let chatBtnMouseX;let chatBtnMouseY;ChatBtn.addEventListener("click",function(){if(chatBtnDragged){chatBtnDragged=false;return}const chatWindow=document.getElementById(chatWindowId);if(!chatWindow)return;const visibilityVal=chatWindow.style.visibility;if(visibilityVal==="hidden"){chatWindow.style.visibility="unset";ChatBtnDiv.innerHTML=CloseIcon}else{chatWindow.style.visibility="hidden";ChatBtnDiv.innerHTML=MessageIcon}});ChatBtn.addEventListener("mousedown",e=>{if(!chatBtnMouseX&&!chatBtnMouseY){chatBtnMouseX=e.clientX;chatBtnMouseY=e.clientY}chatBtnDown=true});ChatBtn.addEventListener("mousemove",e=>{if(!chatBtnDown)return;chatBtnDragged=true;const transformX=e.clientX-chatBtnMouseX;const transformY=e.clientY-chatBtnMouseY;ChatBtn.style.transform=\`translate3d(\${transformX}px, \${transformY}px, 0)\`;e.stopPropagation()});ChatBtn.addEventListener("mouseup",e=>{chatBtnDown=false});ChatBtn.addEventListener("mouseleave",e=>{chatBtnDown=false});ChatBtn.appendChild(ChatBtnDiv);document.body.appendChild(ChatBtn)}document.body.onload=embedChatbot;`;
// const base = process.env.BaseUrl
// console.log(process.env.BaseUrl)
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/flydoc",
  lang: "zh-cn",
  title: "Flydoc",
  description: "Flydoc Web Site",
  ignoreDeadLinks: true,
  head: [
    ["link", { rel: "icon", href: "https://www.wxchina.com/favicon.ico" }],
    ["script", {}, code2],
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?fbfeeb586a5ffa8105b72d4923fe7db1";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
        
        const startEmbedChatbot = setInterval(() => { 
          if(embedChatbot)
          {
            clearInterval(startEmbedChatbot); 
            embedChatbot() 
          }
        }, 1000)
      })();
     `,
    ],
    // ['script', {
    //   src: 'https://fastgpt.run/js/iframe.js',
    //   id: 'fastgpt-iframe',
    //   'data-src': "https://fastgpt.run/chat/share?shareId=4c6bej4bah0ee9h0maz7dqxk",
    //   'data-color': "#4e83fd"
    // }],
    // ['script', {
    //   src: 'https://ai.fastgpt.in/js/iframe.js',
    //   id: 'fastgpt-iframe',
    //   'data-src': "https://ai.fastgpt.in/chat/share?shareId=ndqz488jm82dd9kwva48tyg3",
    //   'data-color': "#4e83fd"
    // }],
    [
      "style",
      {
        innerHTML: `
       .language-js vp-adaptive-theme line-numbers-mode {
        height: 350px;
      }`,
      },
    ],
    // <script src="https://ai.fastgpt.in/js/iframe.js" id="fastgpt-iframe" data-src="https://ai.fastgpt.in/chat/share?shareId=ndqz488jm82dd9kwva48tyg3" data-color="#4e83fd"></script>
    // ['script', {
    //   src: 'https://jsp.dwsy.link/-----https://fastgpt.run/js/iframe.js',
    //   id: 'fastgpt-iframe',
    //   'data-src': "https://jsp.dwsy.link/-----https://fastgpt.run/chat/share?shareId=4c6bej4bah0ee9h0maz7dqxk",
    //   'data-color': "#4e83fd"
    // }]
  ],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    outline: {
      label: "目录",
      level: [2, 3],
    },
    editLink: {
      pattern: "https://github.com/Dwsy/flydoc/:path",
      text: "Edit this page on GitHub",
    },
    logo: { light: "/xwlogoblue.png", dark: "/xwlogoblue.png" },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "开发者网站文档", link: "/doc/wpdoc" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "技术能力",
        items: [
          {
            collapsed: true,
            text: "Flycode手册",
            items: [
              {
                text: "1. 简介",
                link: "/doc/wpdoc/flycode简介",
              },
              {
                text: "2. 第一行代码",
                link: "/doc/wpdoc/第一行代码helloworld",
              },
              {
                collapsed: true,
                text: "3. 参考手册",
                items: [
                  {
                    text: "参考手册",
                    link: "/doc/wpdoc/%e5%8f%82%e8%80%83%e6%89%8b%e5%86%8c",
                  },
                  {
                    collapsed: true,
                    text: "3.1. 基础",
                    items: [
                      {
                        text: "3.1.1. 业务对象/输入/输出",
                        link: "/doc/wpdoc/业务对象输入输出",
                      },
                      {
                        collapsed: true,
                        text: "3.1.2. 数据查询",
                        items: [
                          {
                            text: "3.1.2.1. 查询基础",
                            link: "/doc/wpdoc/query查询基础",
                          },
                          {
                            text: "3.1.2.2. 模板语法",
                            link: "/doc/wpdoc/template模板语法",
                          },
                          {
                            text: "3.1.2.3. 标记语法",
                            link: "/doc/wpdoc/flag标记语法",
                          },
                        ],
                      },
                      {
                        text: "3.1.3. 库引用",
                        link: "/doc/wpdoc/load库引用",
                      },
                      {
                        text: "3.1.4. 异常及提示",
                        link: "/doc/wpdoc/throw异常及提示",
                      },
                    ],
                  },
                  {
                    collapsed: true,
                    text: "3.2 核心库",
                    items: [
                      {
                        text: "核心库",
                        link: "/doc/wpdoc/核心库",
                      },
                      {
                        text: "3.2.1. 登录会话信息",
                        link: "/doc/wpdoc/session登录会话信息",
                      },
                      {
                        text: "3.2.2. 数据库操作",
                        link: "/doc/wpdoc/db数据库操作",
                      },
                      {
                        text: "3.2.3. 日期时间",
                        link: "/doc/wpdoc/datetime日期时间",
                      },
                      {
                        text: "3.2.4. 工具库",
                        link: "/doc/wpdoc/fly工具库",
                      },
                      {
                        text: "3.2.5. 原生语句操作",
                        link: "/doc/wpdoc/原生语句操作",
                      },
                    ],
                  },
                  {
                    collapsed: true,
                    text: "3.3 扩展库",
                    items: [
                      {
                        text: "扩展库",
                        link: "/doc/wpdoc/扩展库",
                      },
                      {
                        text: "3.3.1. 工作流",
                        link: "/doc/wpdoc/workflow工作流",
                      },
                      {
                        text: "3.3.2. 消息",
                        link: "/doc/wpdoc/message消息",
                      },
                      {
                        text: "3.3.3. 平台帐号管理",
                        link: "/doc/wpdoc/account平台帐号管理",
                      },
                      {
                        text: "3.3.4. 系统配置",
                        link: "/doc/wpdoc/configuration系统配置",
                      },
                      {
                        text: "3.3.5. 汉字拼音转换",
                        link: "/doc/wpdoc/pinyin汉字拼音转换",
                      },
                      {
                        text: "3.3.6. 高德地图服务",
                        link: "/doc/wpdoc/amap高德地图服务",
                      },
                      {
                        text: "3.3.7. opendata服务",
                        link: "/doc/wpdoc/opendata服务",
                      },
                    ],
                  },
                  {
                    collapsed: true,
                    text: "3.4 其他",
                    items: [
                      {
                        text: "3.4.6.流程服务Rest接口",
                        link: "/doc/wpdoc/流程服务Rest接口",
                      },
                      {
                        text: "3.4.1. Excel导入导出",
                        link: "/doc/wpdoc/excel导入导出",
                      },
                      {
                        text: "3.4.2. Mock接口",
                        link: "/doc/wpdoc/mock接口",
                      },
                      {
                        text: "3.4.3. Excel-flycode导入",
                        link: "/doc/wpdoc/3.4.3. Excel-flycode导入",
                      },
                      {
                        text: "3.4.4. Excel-flycode导出",
                        link: "/doc/wpdoc/3.4.4. Excel-flycode导出",
                      },
                      {
                        text: "3.4.5. Excel-API操作",
                        link: "/doc/wpdoc/3.4.5. Excel-API操作",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            collapsed: true,
            text: "UIFlycode",
            items: [
              {
                text: "UIFlyCode概述",
                link: "/doc/wpdoc/UIFlycode概述",
              },
              {
                collapsed: true,
                text: "UIFlyCode函数",
                items: [
                  {
                    collapsed: true,
                    text: "ArrayCtrl 数组型控件",
                    items: [
                      {
                        text: "数组控件搜索操作",
                        link: "/doc/wpdoc/数组控件搜索操作",
                      },
                      {
                        text: "简介",
                        link: "/doc/wpdoc/ArrayCtrl 数组型控件",
                      },
                      {
                        text: "属性说明",
                        link: "/doc/wpdoc/ArrayCtrl 数组型控件-属性说明",
                      },
                      {
                        text: "函数说明",
                        link: "/doc/wpdoc/ArrayCtrl 数组型控件-函数说明",
                      },
                      {
                        text: "数组型控件数据格式",
                        link: "/doc/wpdoc/ArrayCtrl 数组型控件-数组型控件数据格式",
                      },
                    ],
                  },
                  {
                    collapsed: true,
                    text: "ArrayRowCtrl 行控件",
                    items: [
                      {
                        text: "简介",
                        link: "/doc/wpdoc/ArrayRowCtrl 行控件",
                      },
                      {
                        text: "属性说明",
                        link: "/doc/wpdoc/ArrayRowCtrl 行控件-属性说明",
                      },
                      {
                        text: "函数说明",
                        link: "/doc/wpdoc/ArrayRowCtrl 行控件-函数说明",
                      },
                    ],
                  },
                  {
                    collapsed: true,
                    text: "ArraySectionHeaderCtrl",
                    items: [
                      {
                        text: "简介",
                        link: "/doc/wpdoc/ArraySectionHeaderCtrl 分组头控件",
                      },
                      {
                        text: "函数说明",
                        link: "/doc/wpdoc/ArraySectionHeaderCtrl 分组头控件-函数说明",
                      },
                    ],
                  },
                ],
              },
              {
                text: "模型对象",
                link: "/doc/wpdoc/模型对象",
              },
              {
                text: "基础控件",
                link: "/doc/wpdoc/Basic 控件基础样式",
              },
              {
                collapsed: true,
                text: "控件对象",
                items: [
                  {
                    text: "控件对象概要",
                    link: "/doc/wpdoc/控件对象",
                  },
                  {
                    text: "控件属性",
                    link: "/doc/wpdoc/控件属性",
                  },
                  {
                    text: "控件操作",
                    link: "/doc/wpdoc/控件操作",
                  },
                ],
              },
              {
                collapsed: true,
                text: "Page表单对象",
                items: [
                  {
                    text: "概要",
                    link: "/doc/wpdoc/Page 表单对象",
                  },
                  {
                    text: "表单属性",
                    link: "/doc/wpdoc/表单属性",
                  },
                  {
                    text: "表单控制",
                    link: "/doc/wpdoc/表单控制",
                  },
                  {
                    text: "表单值存取",
                    link: "/doc/wpdoc/表单值存取",
                  },
                  {
                    text: "表单事件调用",
                    link: "/doc/wpdoc/表单事件调用",
                  },
                ],
              },
              {
                collapsed: true,
                text: "选项控件对象",
                items: [
                  {
                    text: "概要",
                    link: "/doc/wpdoc/summary-选项控件对象",
                  },
                  {
                    text: "选项控件操作",
                    link: "/doc/wpdoc/选项控件操作",
                  },
                ],
              },
              {
                collapsed: true,
                text: "数组控件对象",
                items: [
                  {
                    text: "数组控件搜索操作",
                    link: "/doc/wpdoc/数组控件搜索操作",
                  },
                  {
                    text: "概要",
                    link: "/doc/wpdoc/数组控件对象",
                  },
                  {
                    text: "属性",
                    link: "/doc/wpdoc/数组控件属性",
                  },
                  {
                    text: "数据获取",
                    link: "/doc/wpdoc/数组控件数据获取操作",
                  },
                  {
                    text: "数据更新",
                    link: "/doc/wpdoc/数组控件数据更新操作",
                  },
                ],
              },
              {
                text: "系统对象",
                link: "/doc/wpdoc/系统对象",
              },
              {
                text: "位置对象",
                link: "/doc/wpdoc/位置对象",
              },
              {
                text: "离线模型对象",
                link: "/doc/wpdoc/离线模型对象",
              },
            ],
          },
          {
            collapsed: true,
            text: "iPaas",
            items: [
              {
                collapsed: true,
                text: "连接器简介",
                items: [
                  {
                    text: "逻辑组件",
                    link: "/doc/wpdoc/%e9%80%bb%e8%be%91%e7%bb%84%e4%bb%b6",
                  },
                  {
                    collapsed: true,
                    text: "系统连接器",
                    items: [
                      {
                        collapsed: true,
                        text: "数据库",
                        items: [
                          {
                            text: "操作配置-SQL",
                            link: "/doc/wpdoc/%e6%93%8d%e4%bd%9c%e9%85%8d%e7%bd%ae-sql",
                          },
                          {
                            text: "简介",
                            link: "/doc/wpdoc/%e7%ae%80%e4%bb%8b",
                          },
                          {
                            text: "操作配置-存储过程",
                            link: "/doc/wpdoc/%e6%93%8d%e4%bd%9c%e9%85%8d%e7%bd%ae-%e5%ad%98%e5%82%a8%e8%bf%87%e7%a8%8b",
                          },
                          {
                            text: "操作配置-插入",
                            link: "/doc/wpdoc/%e6%93%8d%e4%bd%9c%e9%85%8d%e7%bd%ae-%e6%8f%92%e5%85%a5",
                          },
                          {
                            text: "操作配置-更新",
                            link: "/doc/wpdoc/%e6%93%8d%e4%bd%9c%e9%85%8d%e7%bd%ae-%e6%9b%b4%e6%96%b0",
                          },
                          {
                            text: "操作配置-删除",
                            link: "/doc/wpdoc/%e6%93%8d%e4%bd%9c%e9%85%8d%e7%bd%ae-%e5%88%a0%e9%99%a4",
                          },
                          {
                            text: "操作配置-查询",
                            link: "/doc/wpdoc/%e6%93%8d%e4%bd%9c%e9%85%8d%e7%bd%ae-%e6%9f%a5%e8%af%a2",
                          },
                        ],
                      },
                      {
                        text: "加密助手",
                        link: "/doc/wpdoc/%e5%8a%a0%e5%af%86%e5%8a%a9%e6%89%8b",
                      },
                      {
                        text: "数据转换",
                        link: "/doc/wpdoc/%e6%95%b0%e6%8d%ae%e8%bd%ac%e6%8d%a2",
                      },
                      {
                        text: "脚本编辑器",
                        link: "/doc/wpdoc/%e8%84%9a%e6%9c%ac%e7%bc%96%e8%be%91%e5%99%a8",
                      },
                    ],
                  },
                ],
              },
              {
                text: "2.iPaaS-插件开发指南",
                link: "/doc/wpdoc/丝路iPaaS-插件开发指南",
              },
              {
                text: "3.iPaaS-管理平台操作手册",
                link: "/doc/玄武丝路iPaaS管理平台操作手册",
              },
              {
                collapsed: true,
                text: "iPaaS-产品介绍",
                items: [
                  {
                    text: "快速入门3-自定义连接器",
                    link: "/doc/wpdoc/%e5%bf%ab%e9%80%9f%e5%85%a5%e9%97%a83-%e8%87%aa%e5%ae%9a%e4%b9%89%e8%bf%9e%e6%8e%a5%e5%99%a8",
                  },
                  {
                    text: "快速入门1-集成流",
                    link: "/doc/wpdoc/%e5%bf%ab%e9%80%9f%e5%85%a5%e9%97%a81-%e9%9b%86%e6%88%90%e6%b5%81",
                  },
                  {
                    text: "快速入门2-API",
                    link: "/doc/wpdoc/%e5%bf%ab%e9%80%9f%e5%85%a5%e9%97%a82-api",
                  },
                  {
                    text: "1.常见的名词概念",
                    link: "/doc/wpdoc/iPaaS常见的名词概念",
                  },
                  {
                    text: "2.常见的操作步骤",
                    link: "/doc/wpdoc/常见的操作步骤",
                  },
                ],
              },
              {
                text: "iPaaS-地图服务工具类",
                link: "/doc/wpdoc/ipaas-%e5%9c%b0%e5%9b%be%e6%9c%8d%e5%8a%a1%e5%b7%a5%e5%85%b7%e7%b1%bb",
              },
              {
                text: "1.iPaaS-产品简介",
                link: "/doc/wpdoc/简介",
              },
              {
                text: "4.Corn表达式",
                link: "/doc/wpdoc/Cron表达式",
              },
            ],
          },
          {
            collapsed: true,
            text: "智慧100",
            items: [
              {
                text: "快消APP升级智慧100APP指南",
                link: "/doc/wpdoc/玄讯App迁移到智慧100App指南",
              },
              {
                collapsed: true,
                text: "产品配置中心",
                items: [
                  {
                    text: "电子协议引擎",
                    link: "/doc/wpdoc/%e7%94%b5%e5%ad%90%e5%8d%8f%e8%ae%ae%e5%bc%95%e6%93%8e",
                  },
                  {
                    text: "预算配置",
                    link: "/doc/wpdoc/预算配置说明文档",
                  },
                  {
                    text: "费用账户配置",
                    link: "/doc/wpdoc/预算费用账户配置培训",
                  },
                  {
                    text: "APP首頁配置",
                    link: "/doc/wpdoc/APP首页配置",
                  },
                  {
                    text: "目标项配置",
                    link: "/doc/wpdoc/目标项配置app首页培训",
                  },
                  {
                    text: "积分体系配置说明",
                    link: "/doc/wpdoc/积分体系配置说明文档",
                  },
                  {
                    text: "采购订单配置",
                    link: "/doc/wpdoc/采购订单配置说明文档",
                  },
                  {
                    text: "自定义地图配置",
                    link: "/doc/wpdoc/自定义地图配置说明",
                  },
                  {
                    text: "超级表单介绍及使用",
                    link: "/doc/wpdoc/超级表单介绍及使用",
                  },
                  {
                    text: "门户引擎配置说明",
                    link: "/doc/wpdoc/%e9%97%a8%e6%88%b7%e5%bc%95%e6%93%8e%e9%85%8d%e7%bd%ae%e8%af%b4%e6%98%8e",
                  },
                  {
                    text: "积分配置说明(v6.2开始)",
                    link: "/doc/wpdoc/积分配置说明文档",
                  },
                  {
                    text: "知识库水印配置说明",
                    link: "/doc/wpdoc/知识库水印、路径管理员配置说明",
                  },
                  {
                    text: "订单配置说明",
                    link: "/doc/wpdoc/采购订单配置说明文档",
                  },
                ],
              },
              {
                text: "H5基础库",
                link: "/doc/wpdoc/H5基础库使用文档",
              },
              {
                collapsed: true,
                text: "发布文档",
                items: [
                  {
                    text: "V6.1部署文档",
                    link: "/doc/wpdoc/智慧100V6.1完整部署指南",
                  },
                  {
                    text: "V6.2部署文档",
                    link: "/doc/wpdoc/智慧100V6.2部署指南（虚拟机版）",
                  },
                ],
              },
              {
                collapsed: true,
                text: "App能力分享",
                items: [
                  {
                    text: "AI拍照控件统计图片删除与调用信息",
                    link: "/doc/wpdoc/手机端拼接拍照控件主动删除图片信息及统计SDK接口调用次数",
                  },
                  {
                    text: "手机端工作时间轴配置(仅支持智慧100)",
                    link: "/doc/wpdoc/手机端工作时间轴配置(仅支持智慧100)",
                  },
                  {
                    text: "手机端拜访完整性校验",
                    link: "/doc/wpdoc/%e6%89%8b%e6%9c%ba%e7%ab%af%e6%8b%9c%e8%ae%bf%e5%ae%8c%e6%95%b4%e6%80%a7%e6%a0%a1%e9%aa%8c",
                  },
                ],
              },
              {
                collapsed: true,
                text: "AI控件支持",
                items: [
                  {
                    text: "aisplicephoto（拼接控件）",
                    link: "/doc/wpdoc/aisplicephoto（拼接控件,部分功能仅智慧100支持）",
                  },
                  {
                    text: "aiscenephoto(仅支持智慧100)",
                    link: "/doc/wpdoc/aiscenephoto(本地识别控件，仅支持智慧100)",
                  },
                  {
                    text: "识别详情轮播控件(仅支持智慧100)",
                    link: "/doc/wpdoc/%e8%af%86%e5%88%ab%e8%af%a6%e6%83%85%e8%bd%ae%e6%92%ad%e6%8e%a7%e4%bb%b6",
                  },
                  {
                    text: "aivideo(仅支持智慧100)",
                    link: "/doc/wpdoc/aivideo(智慧100支持，仅用于演示)",
                  },
                  {
                    text: "aiphoto",
                    link: "/doc/wpdoc/aiphoto",
                  },
                ],
              },
              {
                collapsed: true,
                text: "基础控件支持",
                items: [
                  {
                    text: "扫码控件支持华为扫码",
                    link: "/doc/wpdoc/Scanner配置支持华为扫码能力",
                  },
                ],
              },
              {
                collapsed: true,
                text: "服务能力",
                items: [
                  {
                    text: "手机端终端新增审批流",
                    link: "/doc/wpdoc/%e6%89%8b%e6%9c%ba%e7%ab%af%e7%bb%88%e7%ab%af%e6%96%b0%e5%a2%9e%e5%ae%a1%e6%89%b9%e6%b5%81",
                  },
                  {
                    text: "拜访管理二开控件流程文档",
                    link: "/doc/wpdoc/%e6%8b%9c%e8%ae%bf%e7%ae%a1%e7%90%86%e4%ba%8c%e5%bc%80%e6%8e%a7%e4%bb%b6%e6%b5%81%e7%a8%8b%e6%96%87%e6%a1%a3",
                  },
                  {
                    text: "拜访完整性配置文档",
                    link: "/doc/wpdoc/服务端拜访完整性配置文档",
                  },
                  {
                    text: "拜访管理技术文档",
                    link: "/doc/wpdoc/%e6%8b%9c%e8%ae%bf%e7%ae%a1%e7%90%86%e6%8a%80%e6%9c%af%e6%96%87%e6%a1%a3",
                  },
                ],
              },
            ],
          },
          {
            collapsed: true,
            text: "apaas平台发布文档",
            items: [
              {
                text: "分布式锁flycode-API说明文档",
                link: "/doc/wpdoc/%e5%88%86%e5%b8%83%e5%bc%8f%e9%94%81flycode-api%e8%af%b4%e6%98%8e%e6%96%87%e6%a1%a3",
              },
              {
                collapsed: true,
                text: "web发版文档",
                items: [
                  {
                    collapsed: true,
                    text: "V9.7.3文档",
                    items: [
                      {
                        text: "高德key使用优化",
                        link: "/doc/wpdoc/%e9%ab%98%e5%be%b7key%e4%bd%bf%e7%94%a8%e4%bc%98%e5%8c%96",
                      },
                      {
                        text: "头部导航栏主题样式以及交互优化",
                        link: "/doc/wpdoc/%e5%a4%b4%e9%83%a8%e5%af%bc%e8%88%aa%e6%a0%8f%e4%b8%bb%e9%a2%98%e6%a0%b7%e5%bc%8f%e4%bb%a5%e5%8f%8a%e4%ba%a4%e4%ba%92%e4%bc%98%e5%8c%96",
                      },
                      {
                        text: "输入型控件支持setter设置只读属性",
                        link: "/doc/wpdoc/输入型控件支持setter设置只读属性",
                      },
                    ],
                  },
                  {
                    collapsed: true,
                    text: "V9.7.4文档",
                    items: [
                      {
                        text: "搜索栏主题样式以及交互优化",
                        link: "/doc/wpdoc/%e6%90%9c%e7%b4%a2%e6%a0%8f%e4%b8%bb%e9%a2%98%e6%a0%b7%e5%bc%8f%e4%bb%a5%e5%8f%8a%e4%ba%a4%e4%ba%92%e4%bc%98%e5%8c%96",
                      },
                      {
                        text: "地址主题样式以及交互优化",
                        link: "/doc/wpdoc/地址主题样式以及交互优化",
                      },
                    ],
                  },
                ],
              },
              {
                text: "中心管理系统操作指导",
                link: "/doc/wpdoc/%e4%b8%ad%e5%bf%83%e7%ae%a1%e7%90%86%e7%b3%bb%e7%bb%9f%e6%93%8d%e4%bd%9c%e6%8c%87%e5%af%bc",
              },
              {
                text: "aPaaS 插件开发者指南",
                link: "/doc/wpdoc/丝路iPaaS-插件开发指南",
              },
              {
                collapsed: true,
                text: "项目部署相关",
                items: [
                  {
                    text: "APP从9.0升级9.1配置问题指导",
                    link: "/doc/wpdoc/APP从9.0升级9.1配置问题指导",
                  },
                  {
                    text: "多语言部署文档说明",
                    link: "/doc/wpdoc/%e5%a4%9a%e8%af%ad%e8%a8%80%e9%83%a8%e7%bd%b2%e6%96%87%e6%a1%a3%e8%af%b4%e6%98%8e",
                  },
                  {
                    text: "开发者租户新增环境操作指导",
                    link: "/doc/wpdoc/%e5%bc%80%e5%8f%91%e8%80%85%e7%a7%9f%e6%88%b7%e6%96%b0%e5%a2%9e%e7%8e%af%e5%a2%83%e6%93%8d%e4%bd%9c%e6%8c%87%e5%af%bc",
                  },
                  {
                    text: "跨域问题",
                    link: "/doc/wpdoc/%e8%b7%a8%e5%9f%9f%e9%97%ae%e9%a2%98",
                  },
                  {
                    text: "Web端消息中心部署说明",
                    link: "/doc/wpdoc/web%e7%ab%af%e6%b6%88%e6%81%af%e4%b8%ad%e5%bf%83%e9%83%a8%e7%bd%b2%e8%af%b4%e6%98%8e",
                  },
                  {
                    text: "web端-登录界面企业账户控制",
                    link: "/doc/wpdoc/web%e7%ab%af-%e7%99%bb%e5%bd%95%e7%95%8c%e9%9d%a2%e4%bc%81%e4%b8%9a%e8%b4%a6%e6%88%b7%e6%8e%a7%e5%88%b6",
                  },
                  {
                    text: "自动化部署使用手册",
                    link: "/doc/wpdoc/%e8%87%aa%e5%8a%a8%e5%8c%96%e9%83%a8%e7%bd%b2%e4%bd%bf%e7%94%a8%e6%89%8b%e5%86%8c",
                  },
                ],
              },
            ],
          },
          {
            text: "数据库读写分离",
            link: "/doc/wpdoc/%e6%95%b0%e6%8d%ae%e5%ba%93%e8%af%bb%e5%86%99%e5%88%86%e7%a6%bb",
          },
          {
            collapsed: true,
            text: "IDE操作手册",
            items: [
              {
                text: "用户字段权限配置使用说明",
                link: "/doc/wpdoc/%e7%94%a8%e6%88%b7%e5%ad%97%e6%ae%b5%e6%9d%83%e9%99%90%e9%85%8d%e7%bd%ae%e4%bd%bf%e7%94%a8%e8%af%b4%e6%98%8e",
              },
              {
                collapsed: true,
                text: "使用准备",
                items: [
                  {
                    text: "安装与升级",
                    link: "/doc/wpdoc/%e5%ae%89%e8%a3%85%e4%b8%8e%e5%8d%87%e7%ba%a7",
                  },
                  {
                    text: "登录",
                    link: "/doc/wpdoc/%e7%99%bb%e5%bd%95",
                  },
                ],
              },
              {
                collapsed: true,
                text: "快速入门",
                items: [
                  {
                    text: "创建实体",
                    link: "/doc/wpdoc/创建实体",
                  },
                  {
                    text: "准备领域接口",
                    link: "/doc/wpdoc/准备领域接口",
                  },
                  {
                    text: "配置表单",
                    link: "/doc/wpdoc/配置表单",
                  },
                  {
                    text: "导航与权限",
                    link: "/doc/wpdoc/nav-rules",
                  },
                ],
              },
            ],
          },
          {
            collapsed: true,
            text: "调试工具",
            items: [
              {
                text: "Android UIFlyCode调试介绍",
                link: "/doc/wpdoc/Android UIFlyCode调试介绍",
              },
              {
                text: "iOS数据库调试工具教程",
                link: "/doc/wpdoc/iOS数据库调试教程",
              },
              {
                text: "ios 调试工具使用教程",
                link: "/doc/wpdoc/iOS调试工具的使用",
              },
            ],
          },
          {
            collapsed: true,
            text: "控件",
            items: [
              {
                text: "控件",
                link: "/doc/wpdoc/%e6%8e%a7%e4%bb%b6-index",
              },
              {
                collapsed: true,
                text: "基础信息",
                items: [
                  {
                    text: "控件分类",
                    link: "/doc/wpdoc/OverView 控件分类",
                  },
                  {
                    text: "控件通用属性",
                    link: "/doc/wpdoc/CtrlAttributeCommon 控件通用属性",
                  },
                  {
                    text: "控件通用事件触发点",
                    link: "/doc/wpdoc/CtrlEventTrigger 控件通用事件触发点",
                  },
                  {
                    text: "控件数据存取Component摘要",
                    link: "/doc/wpdoc/CtrlComponent 控件数据存取Component摘要",
                  },
                  {
                    text: "枚举值",
                    link: "/doc/wpdoc/EnumValue 枚举值",
                  },
                  {
                    text: "图标库aPaaS Icon",
                    link: "/doc/wpdoc/aPaaS Icon",
                  },
                  {
                    text: "时间表达式",
                    link: "/doc/wpdoc/%e6%97%b6%e9%97%b4%e8%a1%a8%e8%be%be%e5%bc%8f",
                  },
                ],
              },
              {
                collapsed: true,
                text: "基础控件",
                items: [
                  {
                    collapsed: true,
                    text: "展示型控件",
                    items: [
                      {
                        text: "Ultra Web View",
                        link: "/doc/wpdoc/Ultra Web View",
                      },
                      {
                        text: "link链接按钮控件",
                        link: "/doc/wpdoc/link%e9%93%be%e6%8e%a5%e6%8c%89%e9%92%ae%e6%8e%a7%e4%bb%b6",
                      },
                      {
                        text: "button 按钮",
                        link: "/doc/wpdoc/Button",
                      },
                      {
                        text: "buttongroup 按钮组",
                        link: "/doc/wpdoc/ButtonGroup按钮组",
                      },
                      {
                        text: "dynamictext 动态文字",
                        link: "/doc/wpdoc/DynamicText",
                      },
                      {
                        text: "functionmenu 功能菜单",
                        link: "/doc/wpdoc/FunctionMenu",
                      },
                      {
                        text: "graphiccode 图形码",
                        link: "/doc/wpdoc/graphiccode",
                      },
                      {
                        text: "icon 图标",
                        link: "/doc/wpdoc/Icon",
                      },
                      {
                        text: "image 图片",
                        link: "/doc/wpdoc/image",
                      },
                      {
                        text: "interactiveWebview 交互网页",
                        link: "/doc/wpdoc/InteractiveWebView",
                      },
                      {
                        text: "text 文字",
                        link: "/doc/wpdoc/Text",
                      },
                      {
                        text: "webview 网页",
                        link: "/doc/wpdoc/WebView",
                      },
                    ],
                  },
                  {
                    collapsed: true,
                    text: "输入型控件",
                    items: [
                      {
                        text: "ShortVideo 短视频",
                        link: "/doc/wpdoc/ShortVideo 短视频",
                      },
                      {
                        text: "成员选择控件",
                        link: "/doc/wpdoc/MemberPicker 成员选择",
                      },
                      {
                        text: "address 地址",
                        link: "/doc/wpdoc/Address",
                      },
                      {
                        text: "attachment 附件",
                        link: "/doc/wpdoc/Attachment",
                      },
                      {
                        text: "calendar日历",
                        link: "/doc/wpdoc/calendar",
                      },
                      {
                        text: "datepicker日期",
                        link: "/doc/wpdoc/datetime日期时间",
                      },
                      {
                        text: "period 时期选择控件",
                        link: "/doc/wpdoc/period",
                      },
                      {
                        text: "periodicpicker 周期选择",
                        link: "/doc/wpdoc/periodicpicker",
                      },
                      {
                        text: "cascade级联筛选框",
                        link: "/doc/wpdoc/cascade",
                      },
                      {
                        text: "checkbutton 勾选按钮",
                        link: "/doc/wpdoc/checkbutton",
                      },
                      {
                        text: "currency 金额",
                        link: "/doc/wpdoc/currency",
                      },
                      {
                        text: "daterange 时间段选择",
                        link: "/doc/wpdoc/daterange",
                      },
                      {
                        text: "dropdownbox下拉框",
                        link: "/doc/wpdoc/dropdownbox",
                      },
                      {
                        text: "location定位",
                        link: "/doc/wpdoc/location",
                      },
                      {
                        text: "number数字输入",
                        link: "/doc/wpdoc/number",
                      },
                      {
                        text: "phonenumber电话号码",
                        link: "/doc/wpdoc/phonenumber",
                      },
                      {
                        text: "numberinputrange数字范围",
                        link: "/doc/wpdoc/numberinputrange",
                      },
                      {
                        text: "photo 拍照",
                        link: "/doc/wpdoc/Photo拍照",
                      },
                      {
                        text: "picklist选择列表",
                        link: "/doc/wpdoc/picklist",
                      },
                      {
                        text: "picktree选择树",
                        link: "/doc/wpdoc/picktree",
                      },
                      {
                        text: "relevance穿梭框",
                        link: "/doc/wpdoc/relevance",
                      },
                      {
                        text: "richtexteditor富文本编辑器",
                        link: "/doc/wpdoc/richtexteditor",
                      },
                      {
                        text: "selectbox选择框",
                        link: "/doc/wpdoc/selectbox",
                      },
                      {
                        text: "sortbutton排序按钮",
                        link: "/doc/wpdoc/sortbutton",
                      },
                      {
                        text: "switch开关",
                        link: "/doc/wpdoc/switch",
                      },
                      {
                        text: "Scanner扫码",
                        link: "/doc/wpdoc/scanner",
                      },
                      {
                        text: "textinput文本框",
                        link: "/doc/wpdoc/textinput",
                      },
                      {
                        text: "textinputarea大文本框",
                        link: "/doc/wpdoc/textinputarea",
                      },
                      {
                        text: "textbutton文字按钮",
                        link: "/doc/wpdoc/textbutton",
                      },
                    ],
                  },
                ],
              },
              {
                collapsed: true,
                text: "容器控件",
                items: [
                  {
                    text: "pageswitchcontainer",
                    link: "/doc/wpdoc/pageswitchcontainer容器控件",
                  },
                  {
                    collapsed: true,
                    text: "Basic Container 普通容器",
                    items: [
                      {
                        text: "cardboard",
                        link: "/doc/wpdoc/cardboard",
                      },
                      {
                        text: "filter搜索框",
                        link: "/doc/wpdoc/filter",
                      },
                      {
                        text: "filterControls",
                        link: "/doc/wpdoc/filtercontrols",
                      },
                      {
                        text: "layout布局",
                        link: "/doc/wpdoc/layout",
                      },
                      {
                        text: "panel面板",
                        link: "/doc/wpdoc/panel",
                      },
                      {
                        text: "tabboard tab面板",
                        link: "/doc/wpdoc/tabboard",
                      },
                      {
                        text: "popview弹窗",
                        link: "/doc/wpdoc/popview",
                      },
                    ],
                  },
                  {
                    collapsed: true,
                    text: "Array 数组型容器",
                    items: [
                      {
                        text: "Cardsflow 卡片流",
                        link: "/doc/wpdoc/Cardsflow 卡片流",
                      },
                      {
                        text: "accordion折叠列表",
                        link: "/doc/wpdoc/accordion",
                      },
                      {
                        text: "list列表",
                        link: "/doc/wpdoc/list",
                      },
                      {
                        text: "reorderlist排序列表",
                        link: "/doc/wpdoc/reorderlist排序列表",
                      },
                      {
                        text: "sectionlist分组列表",
                        link: "/doc/wpdoc/sectionlist",
                      },
                      {
                        text: "table表格",
                        link: "/doc/wpdoc/table",
                      },
                      {
                        text: "选项控件……选项赋值方案",
                        link: "/doc/wpdoc/%e9%80%89%e9%a1%b9%e6%8e%a7%e4%bb%b6%e5%9c%a8%e6%95%b0%e7%bb%84%e6%8e%a7%e4%bb%b6%e5%86%85%e9%83%a8%e7%9a%84%e9%80%89%e9%a1%b9%e8%b5%8b%e5%80%bc%e6%96%b9%e6%a1%88",
                      },
                      {
                        text: "控件组模板",
                        link: "/doc/wpdoc/%e6%8e%a7%e4%bb%b6%e7%bb%84%e6%a8%a1%e6%9d%bf",
                      },
                    ],
                  },
                ],
              },
              {
                collapsed: true,
                text: "Report 报表控件",
                items: [
                  {
                    text: "Report Widget 报表控件",
                    link: "/doc/wpdoc/Report",
                  },
                  {
                    text: "Report Actions报表行为",
                    link: "/doc/wpdoc/ReportAction",
                  },
                  {
                    text: "Data Structure报表数据结构",
                    link: "/doc/wpdoc/ReportDataStructure",
                  },
                  {
                    text: "FlyCode控制报表",
                    link: "/doc/wpdoc/ReportFlyCode",
                  },
                ],
              },
              {
                collapsed: true,
                text: "Xchart",
                items: [
                  {
                    text: "Xctable",
                    link: "/doc/wpdoc/xctable",
                  },
                  {
                    text: "Xchart简介",
                    link: "/doc/wpdoc/XChart",
                  },
                  {
                    collapsed: true,
                    text: "指示器",
                    items: [
                      {
                        text: "xcprogress进度条",
                        link: "/doc/wpdoc/xcprogress",
                      },
                      {
                        text: "xcstatus状态指示器",
                        link: "/doc/wpdoc/xcstatus",
                      },
                      {
                        text: "xcgauge计量指示器",
                        link: "/doc/wpdoc/xcgauge",
                      },
                      {
                        text: "xcrank排序指示器",
                        link: "/doc/wpdoc/xcrank",
                      },
                    ],
                  },
                  {
                    collapsed: true,
                    text: "图表",
                    items: [
                      {
                        text: "xcpie饼图",
                        link: "/doc/wpdoc/xcpie",
                      },
                      {
                        text: "xcline线图",
                        link: "/doc/wpdoc/xcline",
                      },
                      {
                        text: "xcbar柱形图",
                        link: "/doc/wpdoc/xcbar",
                      },
                      {
                        text: "xclinebar柱线图",
                        link: "/doc/wpdoc/xclinebar",
                      },
                      {
                        text: "xclinebarUI规则说明",
                        link: "/doc/wpdoc/xclinebarui%e8%a7%84%e5%88%99%e8%af%b4%e6%98%8e",
                      },
                      {
                        text: "xcfunnel漏斗图",
                        link: "/doc/wpdoc/xcfunnel",
                      },
                      {
                        text: "调色板",
                        link: "/doc/wpdoc/%e8%b0%83%e8%89%b2%e6%9d%bf",
                      },
                    ],
                  },
                ],
              },
              {
                collapsed: true,
                text: "业务化控件",
                items: [
                  {
                    text: "Storeinput 终端控件",
                    link: "/doc/wpdoc/Storeinput 终端控件",
                  },
                  {
                    text: "functionbar 功能按钮条",
                    link: "/doc/wpdoc/functionbar %e5%8a%9f%e8%83%bd%e6%8c%89%e9%92%ae%e6%9d%a1",
                  },
                  {
                    text: "datatree 数据树",
                    link: "/doc/wpdoc/datatree %e6%95%b0%e6%8d%ae%e6%a0%91",
                  },
                  {
                    text: "FragmentEditor 片段编辑器",
                    link: "/doc/wpdoc/fragmenteditor %e7%89%87%e6%ae%b5%e7%bc%96%e8%be%91%e5%99%a8",
                  },
                  {
                    text: "StepsManager 步骤管理器",
                    link: "/doc/wpdoc/stepsmanager %e6%ad%a5%e9%aa%a4%e7%ae%a1%e7%90%86%e5%99%a8",
                  },
                  {
                    text: "Tagselector 标签控件",
                    link: "/doc/wpdoc/tagselector %e6%a0%87%e7%ad%be%e6%8e%a7%e4%bb%b6",
                  },
                  {
                    text: "TableCell 表格单元格",
                    link: "/doc/wpdoc/tablecell %e8%a1%a8%e6%a0%bc%e5%8d%95%e5%85%83%e6%a0%bc",
                  },
                  {
                    text: "MemberPicker 人员选择",
                    link: "/doc/wpdoc/MemberPicker 成员选择",
                  },
                  {
                    text: "ObjPicker 对象选择",
                    link: "/doc/wpdoc/objpicker %e5%af%b9%e8%b1%a1%e9%80%89%e6%8b%a9",
                  },
                  {
                    text: "InfoTable 信息表格",
                    link: "/doc/wpdoc/infotable %e4%bf%a1%e6%81%af%e8%a1%a8%e6%a0%bc",
                  },
                  {
                    text: "EditorTable 编辑表格",
                    link: "/doc/wpdoc/editortable %e7%bc%96%e8%be%91%e8%a1%a8%e6%a0%bc",
                  },
                ],
              },
              {
                collapsed: true,
                text: "二开",
                items: [
                  {
                    text: "trak工作轨迹",
                    link: "/doc/wpdoc/Track",
                  },
                  {
                    text: "工作圈",
                    link: "/doc/wpdoc/%e5%b7%a5%e4%bd%9c%e5%9c%88",
                  },
                  {
                    text: "考勤二开控件",
                    link: "/doc/wpdoc/%e8%80%83%e5%8b%a4%e4%ba%8c%e5%bc%80%e6%8e%a7%e4%bb%b6",
                  },
                  {
                    text: "与原生页面交互",
                    link: "/doc/wpdoc/%e4%b8%8e%e5%8e%9f%e7%94%9f%e9%a1%b5%e9%9d%a2%e4%ba%a4%e4%ba%92",
                  },
                ],
              },
            ],
          },
          {
            collapsed: true,
            text: "事件行为",
            items: [
              {
                collapsed: true,
                text: "基础事件行为",
                items: [
                  {
                    collapsed: true,
                    text: "Data Process 数据处理",
                    items: [
                      {
                        text: "Data Process 数据处理",
                        link: "/doc/wpdoc/DataProcess",
                      },
                      {
                        text: "datarequest 数据请求",
                        link: "/doc/wpdoc/Datarequest",
                      },
                      {
                        text: "offlinemodelrequest",
                        link: "/doc/wpdoc/Offlinemodelrequest",
                      },
                      {
                        text: "cachedatarequest缓存数据请求",
                        link: "/doc/wpdoc/Cachedatarequest",
                      },
                      {
                        text: "datasubmit 数据提交",
                        link: "/doc/wpdoc/Datasubmit",
                      },
                      {
                        text: "packagesubmit 数据打包提交",
                        link: "/doc/wpdoc/Dackagesubmit",
                      },
                      {
                        text: "customrequest 自定义请求",
                        link: "/doc/wpdoc/customrequest",
                      },
                      {
                        text: "getter&amp;setter 出入参规则",
                        link: "/doc/wpdoc/gettersetter",
                      },
                      {
                        text: "数组型控件赋值取值说明",
                        link: "/doc/wpdoc/数组型控件赋值取值说明",
                      },
                      {
                        text: "Paging 分页规则",
                        link: "/doc/wpdoc/Paging",
                      },
                      {
                        text: "Sorting 排序规则",
                        link: "/doc/wpdoc/sorting",
                      },
                      {
                        text: "Nesting 分级加载规则",
                        link: "/doc/wpdoc/nesting",
                      },
                      {
                        text: "FailProcess 数据请求失败处理",
                        link: "/doc/wpdoc/failprocess",
                      },
                    ],
                  },
                  {
                    collapsed: true,
                    text: "Ctrl Management 控件处理",
                    items: [
                      {
                        text: "attributeevaluate 属性计算",
                        link: "/doc/wpdoc/attributeevaluate",
                      },
                    ],
                  },
                  {
                    collapsed: true,
                    text: "Page Functions 表单内部功能",
                    items: [
                      {
                        text: "alert 警告信息",
                        link: "/doc/wpdoc/alert",
                      },
                      {
                        text: "ctrlevent",
                        link: "/doc/wpdoc/ctrlevent",
                      },
                      {
                        text: "eventlink",
                        link: "/doc/wpdoc/eventlink",
                      },
                      {
                        text: "call",
                        link: "/doc/wpdoc/call",
                      },
                      {
                        text: "refresh刷新",
                        link: "/doc/wpdoc/refresh",
                      },
                      {
                        text: "share 分享",
                        link: "/doc/wpdoc/share",
                      },
                      {
                        text: "print 蓝牙打印",
                        link: "/doc/wpdoc/蓝牙打印",
                      },
                      {
                        text: "Receipt 收款",
                        link: "/doc/wpdoc/Receipt",
                      },
                      {
                        text: "popsubview 弹窗",
                        link: "/doc/wpdoc/popsubview",
                      },
                      {
                        text: "closesubview 关闭子视图",
                        link: "/doc/wpdoc/closesubview",
                      },
                      {
                        text: "datatransfer 数据转移",
                        link: "/doc/wpdoc/datatransfer",
                      },
                    ],
                  },
                  {
                    collapsed: true,
                    text: "Page Navigation 表单导航",
                    items: [
                      {
                        text: "link链接",
                        link: "/doc/wpdoc/link",
                      },
                      {
                        text: "receivelink接收链接事件",
                        link: "/doc/wpdoc/receivelink",
                      },
                      {
                        text: "return返回",
                        link: "/doc/wpdoc/return",
                      },
                      {
                        text: "urllink",
                        link: "/doc/wpdoc/urllink",
                      },
                    ],
                  },
                ],
              },
              {
                collapsed: true,
                text: "Particular Actions特殊行为",
                items: [
                  {
                    text: "拜访流数据提交",
                    link: "/doc/wpdoc/visitworkdatasubmit 拜访流数据提交",
                  },
                  {
                    text: "Flycode",
                    link: "/doc/wpdoc/flycode",
                  },
                  {
                    text: "Pagelistrequest",
                    link: "/doc/wpdoc/pagelistrequest",
                  },
                  {
                    text: "对象选择事件",
                    link: "/doc/wpdoc/%e5%af%b9%e8%b1%a1%e9%80%89%e6%8b%a9%e4%ba%8b%e4%bb%b6",
                  },
                ],
              },
              {
                collapsed: true,
                text: "流程行为",
                items: [
                  {
                    text: "Import 导入",
                    link: "/doc/wpdoc/import%e5%af%bc%e5%85%a5",
                  },
                  {
                    text: "Export 导出",
                    link: "/doc/wpdoc/export%e5%af%bc%e5%87%ba",
                  },
                  {
                    text: "Approval Flow 审批流程",
                    link: "/doc/wpdoc/Approval Flow Page 审批流表单",
                  },
                  {
                    text: "Report Actions 报表行为",
                    link: "/doc/wpdoc/",
                  },
                ],
              },
            ],
          },
          {
            collapsed: true,
            text: "UI协议",
            items: [
              {
                text: "UI协议",
                link: "/doc/wpdoc/UI协议",
              },
              {
                text: "Over View 简介",
                link: "/doc/wpdoc/Over View 简介",
              },
              {
                collapsed: true,
                text: "Normal Page 通用表单",
                items: [
                  {
                    text: "Page Info 表单信息",
                    link: "/doc/wpdoc/Page Info 表单信息",
                  },
                  {
                    text: "View 视图层",
                    link: "/doc/wpdoc/View 视图层",
                  },
                  {
                    collapsed: true,
                    text: "Presenter 表达层",
                    items: [
                      {
                        text: "Event",
                        link: "/doc/wpdoc/event",
                      },
                      {
                        text: "Action",
                        link: "/doc/wpdoc/action",
                      },
                      {
                        text: "Initial",
                        link: "/doc/wpdoc/initial",
                      },
                      {
                        text: "Preprocessor",
                        link: "/doc/wpdoc/preprocessor",
                      },
                      {
                        text: "Interface",
                        link: "/doc/wpdoc/interface",
                      },
                      {
                        text: "Handlers",
                        link: "/doc/wpdoc/handlers",
                      },
                    ],
                  },
                  {
                    text: "Business Model 业务模型层",
                    link: "/doc/wpdoc/Business Model 业务模型层",
                  },
                ],
              },
              {
                collapsed: true,
                text: "Feature Page 功能表单",
                items: [
                  {
                    text: "简介",
                    link: "/doc/wpdoc/Feature Page 功能表单",
                  },
                  {
                    text: "Page Flow 表单流",
                    link: "/doc/wpdoc/page-flow-%e8%a1%a8%e5%8d%95%e6%b5%81",
                  },
                  {
                    text: "Page Switch 表单切换器",
                    link: "/doc/wpdoc/page-switch-%e8%a1%a8%e5%8d%95%e5%88%87%e6%8d%a2%e5%99%a8",
                  },
                  {
                    collapsed: true,
                    text: "Approval Flow Page 审批流",
                    items: [
                      {
                        text: "Approval Flow Page 审批流",
                        link: "/doc/wpdoc/Approval Flow Page 审批流表单",
                      },
                      {
                        text: "Approval List 审批列表",
                        link: "/doc/wpdoc/Approval List 审批列表",
                      },
                      {
                        text: "Approval Type List 审批类型",
                        link: "/doc/wpdoc/Approval Type List 审批类型列表",
                      },
                      {
                        text: "Report Page 报表表单",
                        link: "/doc/wpdoc/Report Page 报表表单",
                      },
                    ],
                  },
                  {
                    text: "Configuration Page 配置表单",
                    link: "/doc/wpdoc/Configuration Page 配置表单",
                  },
                  {
                    text: "Page Render Flow 表单渲染过程",
                    link: "/doc/wpdoc/Page Render Flow 表单渲染过程",
                  },
                  {
                    text: "表单数据缓存",
                    link: "/doc/wpdoc/%e8%a1%a8%e5%8d%95%e6%95%b0%e6%8d%ae%e7%bc%93%e5%ad%98",
                  },
                ],
              },
              {
                collapsed: true,
                text: "UI布局系统",
                items: [
                  {
                    text: "简介",
                    link: "/doc/wpdoc/ui%e5%b8%83%e5%b1%80%e7%ae%80%e4%bb%8b",
                  },
                  {
                    text: "FlexBox",
                    link: "/doc/wpdoc/flexbox",
                  },
                  {
                    text: "样式控制",
                    link: "/doc/wpdoc/%e6%a0%b7%e5%bc%8f%e6%8e%a7%e5%88%b6",
                  },
                  {
                    text: "Basic 控件基础样式",
                    link: "/doc/wpdoc/Basic 控件基础样式",
                  },
                ],
              },
            ],
          },

          {
            collapsed: true,
            text: "开放能力",
            items: [
              {
                text: "重试按钮配置",
                link: "/doc/wpdoc/%e9%87%8d%e8%af%95%e6%8c%89%e9%92%ae%e9%85%8d%e7%bd%ae",
              },
              {
                text: "Infotable(信息表格)接入二开控件",
                link: "/doc/wpdoc/Infotable(信息表格)接入二开控件",
              },
              {
                text: "职位转配置-配置指导",
                link: "/doc/wpdoc/管理员 – 职位管理页面 改造成可配置化表单",
              },
              {
                text: "IDE云化跨域路由调整",
                link: "/doc/wpdoc/IDE云化跨域路由调整说明",
              },
              {
                text: "分布图支持自定义颜色配置",
                link: "/doc/wpdoc/终端分布图，渠道客户分布图，资产分布图支持自定义颜色配置",
              },
              {
                text: "分布式ID生成",
                link: "/doc/wpdoc/分布式ID生成",
              },
              {
                text: "终端分布图地图更新操作流程",
                link: "/doc/wpdoc/终端分布图地图更新操作流程",
              },
              {
                text: "新消息分类改造使用方法",
                link: "/doc/wpdoc/新消息分类改造使用方法",
              },
              {
                text: "web端-表格勾选项导出",
                link: "/doc/wpdoc/web端-表格勾选项导出",
              },
              {
                text: "任务调度接口",
                link: "/doc/wpdoc/任务调度接口",
              },
              {
                text: "二开控件接入流程",
                link: "/doc/wpdoc/二开控件开发流程",
              },
              {
                text: "已办/待办页面可配置化的配置用例",
                link: "/doc/wpdoc/以办待办页面可配置化的配置用例",
              },
              {
                text: "组织管理转配置",
                link: "/doc/wpdoc/组织管理转配置",
              },
              {
                text: "文档模板管理",
                link: "/doc/wpdoc/文档模板发布服务及脚本说明",
              },
              {
                text: "应用节点显示消息推送",
                link: "/doc/wpdoc/%e5%ba%94%e7%94%a8%e8%8a%82%e7%82%b9%e6%98%be%e7%a4%ba%e6%b6%88%e6%81%af%e6%8e%a8%e9%80%81",
              },
              {
                text: "实施项目配置AI识别",
                link: "/doc/wpdoc/%e5%ae%9e%e6%96%bd%e9%a1%b9%e7%9b%ae%e9%85%8d%e7%bd%aeai%e8%af%86%e5%88%ab",
              },
            ],
          },
          {
            collapsed: true,
            text: "异常排查及修复指导",
            items: [
              {
                text: "长整型数据转文本精度丢失指导",
                link: "/doc/wpdoc/%e9%95%bf%e6%95%b4%e5%9e%8b%e6%95%b0%e6%8d%ae%e8%bd%ac%e6%96%87%e6%9c%ac%e7%b2%be%e5%ba%a6%e4%b8%a2%e5%a4%b1%e6%8c%87%e5%af%bc",
              },
              {
                text: "web端-V9.1.x版本关于弹窗布局配置实践",
                link: "/doc/wpdoc/web端-V9.1.x版本关于弹窗布局配置实践",
              },
              {
                text: "地址丢失调度修复",
                link: "/doc/wpdoc/%e5%9c%b0%e5%9d%80%e4%b8%a2%e5%a4%b1%e8%b0%83%e5%ba%a6%e4%bf%ae%e5%a4%8d",
              },
              {
                text: "手机端极光推送失效原因排查",
                link: "/doc/wpdoc/%e6%89%8b%e6%9c%ba%e7%ab%af%e6%9e%81%e5%85%89%e6%8e%a8%e9%80%81%e5%a4%b1%e6%95%88%e5%8e%9f%e5%9b%a0%e6%8e%92%e6%9f%a5",
              },
              {
                text: "手机端消息推送验证及处理方案",
                link: "/doc/wpdoc/%e6%89%8b%e6%9c%ba%e7%ab%af%e6%b6%88%e6%81%af%e6%8e%a8%e9%80%81%e9%aa%8c%e8%af%81%e5%8f%8a%e5%a4%84%e7%90%86%e6%96%b9%e6%a1%88",
              },
            ],
          },
          {
            collapsed: true,
            text: "行业组件",
            items: [
              {
                text: "休闲食品行业",
                link: "/doc/wpdoc/%e4%bc%91%e9%97%b2%e9%a3%9f%e5%93%81%e8%a1%8c%e4%b8%9a",
              },
              {
                collapsed: true,
                text: "饮料食品行业",
                items: [
                  {
                    collapsed: true,
                    text: "SFA",
                    items: [
                      {
                        collapsed: true,
                        text: "SP-YL-BC416 拜访管理",
                        items: [
                          {
                            text: "1.SP-YL-BC416-BC4163 制定拜访计划",
                            link: "/doc/wpdoc/1-sp-yl-bc416-bc4163-%e5%88%b6%e5%ae%9a%e6%8b%9c%e8%ae%bf%e8%ae%a1%e5%88%92",
                          },
                          {
                            text: "2.SP-YL-BC416-BC4164 管理我的拜访",
                            link: "/doc/wpdoc/2-sp-yl-bc416-bc4164-%e7%ae%a1%e7%90%86%e6%88%91%e7%9a%84%e6%8b%9c%e8%ae%bf",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    text: "TPM",
                    link: "/doc/wpdoc/tpm",
                  },
                  {
                    text: "DMS",
                    link: "/doc/wpdoc/dms",
                  },
                  {
                    text: "PMM",
                    link: "/doc/wpdoc/pmm",
                  },
                  {
                    text: "其他",
                    link: "/doc/wpdoc/%e5%85%b6%e4%bb%96",
                  },
                ],
              },
              {
                text: "调味食品行业",
                link: "/doc/wpdoc/%e8%b0%83%e5%91%b3%e9%a3%9f%e5%93%81%e8%a1%8c%e4%b8%9a",
              },
              {
                text: "粮油食品行业",
                link: "/doc/wpdoc/%e7%b2%ae%e6%b2%b9%e9%a3%9f%e5%93%81%e8%a1%8c%e4%b8%9a",
              },
              {
                text: "奶粉食品行业",
                link: "/doc/wpdoc/%e5%a5%b6%e7%b2%89%e9%a3%9f%e5%93%81%e8%a1%8c%e4%b8%9a",
              },
              {
                text: "白酒酒类行业",
                link: "/doc/wpdoc/%e7%99%bd%e9%85%92%e9%85%92%e7%b1%bb%e8%a1%8c%e4%b8%9a",
              },
              {
                text: "日用品行业",
                link: "/doc/wpdoc/%e6%97%a5%e7%94%a8%e5%93%81%e8%a1%8c%e4%b8%9a",
              },
              {
                collapsed: true,
                text: "组件清单",
                items: [
                  {
                    text: "组件清单（1-20）",
                    link: "/doc/wpdoc/%e7%bb%84%e4%bb%b6%e6%b8%85%e5%8d%95%ef%bc%881-20%ef%bc%89",
                  },
                  {
                    text: "组件清单（21-40）",
                    link: "/doc/wpdoc/%e7%bb%84%e4%bb%b6%e6%b8%85%e5%8d%95%ef%bc%8821-40%ef%bc%89",
                  },
                ],
              },
              {
                collapsed: true,
                text: "通用功能组件",
                items: [
                  {
                    text: "31.小程序“今日”首页UI调整——以加多宝为例",
                    link: "/doc/wpdoc/小程序“今日”首页UI调整——以加多宝为例",
                  },
                  {
                    text: "32.外系统对接日志记录",
                    link: "/doc/wpdoc/外系统对接日志记录",
                  },
                  {
                    text: "33.职位权限信息清单",
                    link: "/doc/wpdoc/职位权限信息清单",
                  },
                  {
                    text: "34.导出图片改名及水印修改设计文档",
                    link: "/doc/wpdoc/导出图片改名及水印修改设计文档",
                  },
                  {
                    text: "35.8系项目升级（如何实现数据库8.2升级到8.5）",
                    link: "/doc/wpdoc/8系项目升级（如何实现数据库8.2升级到8.5）",
                  },
                  {
                    text: "36.商超订单管理",
                    link: "/doc/wpdoc/商超订单管理",
                  },
                  {
                    text: "37.积分管理",
                    link: "/doc/wpdoc/积分管理",
                  },
                  {
                    text: "22.同批支持产品设置",
                    link: "/doc/wpdoc/同批支持产品设置",
                  },
                  {
                    text: "1.苹果端ABM分发实现方案",
                    link: "/doc/wpdoc/苹果端ABM分发实现方案",
                  },
                  {
                    text: "4.在途流程交接",
                    link: "/doc/wpdoc/在途流程交接",
                  },
                  {
                    text: "5.地址自动获取行政区域",
                    link: "/doc/wpdoc/地址自动获取行政区域",
                  },
                  {
                    text: "6.行政区域管理",
                    link: "/doc/wpdoc/行政区域管理",
                  },
                  {
                    text: "7.企业微信推送消息",
                    link: "/doc/wpdoc/企业微信推送消息",
                  },
                  {
                    text: "8.标准化上线流程",
                    link: "/doc/wpdoc/标准化上线流程",
                  },
                  {
                    text: "9.通用AI数据抽取、转换、业务化流程组件",
                    link: "/doc/wpdoc/通用AI数据抽取、转换、业务化流程组件",
                  },
                  {
                    text: "3.富文本套打打印",
                    link: "/doc/wpdoc/富文本套打打印",
                  },
                  {
                    text: "11.AI离线识别",
                    link: "/doc/wpdoc/AI离线识别",
                  },
                  {
                    text: "10.权限规则性能优化",
                    link: "/doc/wpdoc/权限规则性能优化",
                  },
                  {
                    text: "12.小程序权限配置",
                    link: "/doc/wpdoc/小程序权限配置",
                  },
                  {
                    text: "13.基于apaas平台wordexcel设置的套打",
                    link: "/doc/wpdoc/基于apaas平台wordexcel设置的套打",
                  },
                  {
                    text: "14.调度报错通知配置",
                    link: "/doc/wpdoc/调度报错通知配置",
                  },
                  {
                    text: "15.小程序码设计",
                    link: "/doc/wpdoc/小程序码设计",
                  },
                  {
                    text: "16.项目更新现有最新行政区域",
                    link: "/doc/wpdoc/项目更新现有最新行政区域",
                  },
                  {
                    text: "17.小程序推送订阅消息组件",
                    link: "/doc/wpdoc/小程序推送订阅消息组件",
                  },
                  {
                    text: "18.小程序权限配置2.0",
                    link: "/doc/wpdoc/小程序权限",
                  },
                  {
                    text: "19.H5数据收集",
                    link: "/doc/wpdoc/H5数据收集",
                  },
                  {
                    text: "20.富文本打印2.0",
                    link: "/doc/wpdoc/富文本打印2.0",
                  },
                  {
                    text: "21.流程自定义审批人",
                    link: "/doc/wpdoc/流程自定义审批人",
                  },
                  {
                    text: "23.照片墙方案",
                    link: "/doc/wpdoc/照片墙方案",
                  },
                  {
                    text: "24.非规则表格列表的自定义导出",
                    link: "/doc/wpdoc/非规则表格列表的自定义导出",
                  },
                  {
                    text: "25.预算编制(含调整)",
                    link: "/doc/wpdoc/预算编制(含调整)",
                  },
                  {
                    text: "26.预算调整记录",
                    link: "/doc/wpdoc/预算调整记录",
                  },
                  {
                    text: "27.表格筛选数据置顶",
                    link: "/doc/wpdoc/表格筛选数据置顶",
                  },
                  {
                    text: "29.问卷调查2.0",
                    link: "/doc/wpdoc/问卷调查2.0",
                  },
                  {
                    text: "28.钉钉流程对接",
                    link: "/doc/wpdoc/钉钉流程对接",
                  },
                  {
                    text: "30.电子签章对接实现方案",
                    link: "/doc/wpdoc/电子签章对接实现方案",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    search: {
      provider: "local",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
