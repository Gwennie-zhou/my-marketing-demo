const path = require('path');
// 在node中，有全局变量process表示的是当前的node进程。process.env包含着关于系统环境的信息
const moduleName = process.env.npm_config_module; // 单模块编译,本地调试时输入npm run serve --module=模块名，其中npm_config_xxx是跟输入的npm run serve --xxx相对应的

function resolve(dir) {
    return path.join(__dirname, dir); // 拼接目录。__dirname表示当前文件所在的目录名
}
const isDevelopment = process.env.NODE_ENV === 'development'; // 开发环境


const MODULE_LIST = ['lotterySudoku','lotteryWheel']; // 每个新增的模块名都需要在这里添加(打包)

function getPages(moduleName) {
  console.log(module);
    if (isDevelopment && moduleName) { // 开发环境按传入的模块名打包（1个）
        return {
            index: {
                entry: `src/modules/${moduleName}/index.js`, // // page 的入口
                // template: 'public/index.html', // 模板来源
                // filename: 'index.html', // 在 dist/index.html 的输出
                title: `我的营销工具之${moduleName}`
            }
        };
    } else {  // 生产环境全部打包
        const modules = moduleName ? [moduleName] : MODULE_LIST;
        const pages = {};
        modules.forEach((item) => {
            pages[item] = {
                entry: `src/modules/${item}/index.js`
            };
        });
        return pages;
    }
}


module.exports = {
    outputDir: 'dist', //当运行 npm run build(打包) 时生成的生产环境构建文件的目录。
    assetsDir: isDevelopment ? 'dev' : '', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    pages: getPages(moduleName), // 多页面需要配置的选项，每个“page”应该有一个对应的 JavaScript 入口文件。
    productionSourceMap: false, // 生产禁止显示源代码
    chainWebpack: (config) => {
        config.resolve.alias
            .set('~imgPath', resolve('src/assets/images'));
    }
};

