---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

titile: flydoc
titleTemplate: flydoc

hero:
  name: "FlyCode 开发者文档 "
  text: "FlyCode Dev Doc"
  tagline: Low code
  image:
    src: /xwlogo.png
    alt: apass
  actions:
    - theme: brand
      text: Flycode代码生成器
      link: /doc/rie/flycodegenerator2.md
    - theme: alt mastering-pinia
      text: 快速开始
      link: /doc/quickstart
    - theme: alt cat
      text: Flycode文档
      link: /doc/wpdoc/flycode简介
    - theme: alt cat
      text: UIFlycode文档
      link: /doc/wpdoc/UIFlycode概述

    # - theme: alt
    #   text: API Examples
    #   link: /api-examples

features:
  - title: 👍简单易用
    details: 采用javascript语法，结合sql语法，开发者只需要编写业务逻辑，无需关心平台逻辑。
  - title: ⚡部署快速
    details: 业务引擎会发布相应的服务接口，无需开发者关心服务发布，平台会自动处理多租户隔离、数据离线、数据追踪、数据权限、分页、排序等平台逻辑。
  - title: 🍥平台服务整合
    details: Flycode可以轻松调用平台级服务，如消息发送、流程处理，实现更丰富的功能。
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(135deg,#abdcff,#0396ff);

  --vp-home-hero-image-background-image: linear-gradient(135deg,#52e5e7,#130cb7 50%);
  --vp-home-hero-image-filter: blur(40px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
/* Style to get the cheat sheet link in the home page */

a.cta {
  text-align: center;
  border-radius: 8px;
}

a.cta:hover {
  border-color: #c900c9;
  background-color: #4c76c9;
}



.mastering-pinia {
  height: 100%;
  line-height: 100%;
  display: flex;
  justify-content: center;
  white-space: pre;
  min-height: 41px;
  position: relative;
}

.mastering-pinia:hover::after {
  animation: none;
}
.mastering-pinia::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: var(--vp-button-brand-border); */
  border: 1px solid #4c76c9;
  border-radius: 20px;
  animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
  z-index: -1;
}





kbd {
  display: inline-block;
  padding: 3px 5px;
  font-size: 0.65em;
  color: var(--vp-c-text-1);
  vertical-align: middle;
  background-color: var(--vp-c-bg-mute);
  border: solid 1px var(--vp-c-bg-soft-mute);
  border-radius: 6px;
  box-shadow: inset 0 -1px 0 var(--vp-c-bg-soft-mute);
  line-height: 0.95em;
}


</style>
