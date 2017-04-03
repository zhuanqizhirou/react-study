var path = require('path');

module.exports={
    entry:'./app/index.js',//json,所以多文件可以是entry:['./app/index.js','./app/sec.js'],
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'./dist')//只能是./dist 直接/dist无效
    }
}