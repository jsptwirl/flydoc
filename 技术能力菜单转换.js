// 我现在有这样一段ts定义：interface oldSidebarItem {
//     term_id: number;
//     name: string;
//     slug: string;
//     term_group: number;
//     term_taxonomy_id: number;
//     taxonomy: string;
//     description: string;
//     parent: number;
//     count: number;
//     filter: string;
//     term_order: string;
//     cat_ID: number;
//     category_count: number;
//     category_description: string;
//     cat_name: string;
//     category_nicename: string;
//     category_parent: number;
//     contentId: number;
//     children: SidebarItem;
// }



// export type newSidebarItem = {
//   /**
//    * The text label of the item.
//    */
//   text?: string

//   /**
//    * The link of the item.
//    */
//   link?: string

//   /**
//    * The children of the item.
//    */
//   items?: SidebarItem[]

//   /**
//    * If not specified, group is not collapsible.
//    *
//    * If `true`, group is collapsible and collapsed by default
//    *
//    * If `false`, group is collapsible but expanded by default
//    */
//   collapsed?: boolean
// }
// 如果json数据中oldSidebarItem中 children为空也就是[]那么代表这是一个页面 它的name是url最后的路径
// 我将输入这样的json数组数据
// base usl 为 localhost:3000/wp/doc/{name}
// 请编写一段js脚本处理菜单数据newSidebarItem

// 示例的菜单数据
const fs = require('fs');

// 读取 JSON 文件
const filePath = './技术能力目录.json'; // 请根据文件实际路径进行设置
const rawData = fs.readFileSync(filePath, 'utf-8');
const menuData = JSON.parse(rawData);

// 定义一个函数，用于将 oldSidebarItem 转换为 newSidebarItem
function convertToNewSidebarItem(oldItem, baseUrl = '/doc/wpdoc') {
    const newSidebarItem = {};

    // 如果 children 为空，代表这是一个页面，设置 text 和 link
    if (!oldItem.children || oldItem.children.length === 0) {
        newSidebarItem.text = oldItem.name;
        newSidebarItem.link = `${baseUrl}/${oldItem.slug}`;

    } else {
        newSidebarItem.collapsed = true
        // 如果有子菜单项，设置 text 和 items
        newSidebarItem.text = oldItem.name;
        newSidebarItem.items = oldItem.children.map((child) => convertToNewSidebarItem(child, baseUrl));
    }

    return newSidebarItem;
}

// 示例用法：
const oldSidebarData = [
    {
        term_id: 1,
        name: 'Page1',
        slug: 'page1',
        children: [],
    },
    {
        term_id: 2,
        name: 'Page2',
        slug: 'page2',
        children: [
            {
                term_id: 3,
                name: 'SubPage1',
                slug: 'subpage1',
                children: [],
            },
            {
                term_id: 4,
                name: 'SubPage2',
                slug: 'subpage2',
                children: [],
            },
        ],
    },
];

const newSidebarData = menuData.map((oldItem) => convertToNewSidebarItem(oldItem));
console.log(newSidebarData);
const path = require('path');
// 将 JSON 数据导出为 JSON 文件
const outputPath = path.join(__dirname, 'vitepress技术能力目录.json'); // 指定导出文件的路径
const jsonString = JSON.stringify(newSidebarData, null, 2); // 格式化 JSON 数据

fs.writeFileSync(outputPath, jsonString, 'utf-8'); // 写入 JSON 文件
