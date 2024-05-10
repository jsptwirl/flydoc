// nodejs
// 读取当前文件夹 doc\wpdoc 下的所有md文件
// 在开头添加
// ---
// title: 文件名
// ---
const fs = require('fs');
const path = require('path');

// 读取当前文件夹下的所有 .md 文件
const folderPath = path.join(__dirname, 'doc', 'wpdoc');
const mdFiles = fs.readdirSync(folderPath).filter(file => file.endsWith('.md'));

// 遍历每个 .md 文件
mdFiles.forEach(fileName => {
    const filePath = path.join(folderPath, fileName);

    // 读取文件内容
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // 构建新的文件内容，添加 title 属性
    const newContent = `---
title: ${path.parse(fileName).name}
---
${fileContent}`;

    // 写入新的文件内容
    fs.writeFileSync(filePath, newContent, 'utf-8');

    console.log(`已添加 title 属性至文件 ${fileName}`);
});
