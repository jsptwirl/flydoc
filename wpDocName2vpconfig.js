// items: [
//     { text: 'Markdown Examples', link: '/markdown-examples' },
//     { text: 'Runtime API Examples', link: '/api-examples' }
//   ]

// 读取当前文件夹 doc\wpdoc 下的所有md文件
// 生成{ text: '文件名', link: 'docwpdoc\文件名' }格式的json数组

const fs = require('fs');
const path = require('path');

// 读取当前文件夹下的所有.md文件
const folderPath = path.join(__dirname, 'doc', 'wpdoc');
const mdFiles = fs.readdirSync(folderPath).filter(file => file.endsWith('.md'));

// 生成 JSON 数组
const jsonResult = mdFiles.map(fileName => {
    const text = fileName.replace('.md', '');
    const link = path.join('doc', 'wpdoc', fileName);
    return { text, link };
});

// 将 JSON 数据导出为 JSON 文件
const outputPath = path.join(__dirname, 'output.json'); // 指定导出文件的路径
const jsonString = JSON.stringify(jsonResult, null, 2); // 格式化 JSON 数据

fs.writeFileSync(outputPath, jsonString, 'utf-8'); // 写入 JSON 文件

console.log('JSON 文件已成功导出到', outputPath);
