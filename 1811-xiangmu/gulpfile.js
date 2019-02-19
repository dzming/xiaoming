//任务1:sass->css:
//1.引入包
//（1）引入gulp包,返回值为对象
// (2) 引入gulp-sass包，返回值为函数
var gulp = require("gulp");
var sass = require("gulp-sass");
// const htmlmin = require('gulp-htmlmin');



//2.开启gulp任务 gulp.task(任务名,函数)
gulp.task("compileSass",function(){
    //2.1 拿到文件流gulp.src()
    return gulp.src(["./src/sass/*.scss","!./src/sass/var.scss"])
    //2.2通过管道运输gulp.pipe()，运输过程中，进行sass编译 sass()
    //*忽略错误，继续编译
    .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError)) 
   
    //2.3通过管道gulp.pipe()运输到指定目录下gulp.dest()
    .pipe(gulp.dest("./src/css/"))
})
// 任务2：监听a.scss

gulp.task("jt",function(){
    gulp.watch("./src/sass/*.scss",gulp.series("compileSass"))
})

 // 任务3：压缩html
// gulp.task('minify', () => {
//   return gulp.src('src/**/*.html')
//     .pipe(htmlmin({ collapseWhitespace: true }))
//     .pipe(gulp.dest('dist/'));
// });

// 任务4：合并js
// var concat = require('gulp-concat');
// gulp.task('scripts', function() {
//   return gulp.src('./src/js/*.js')
//     .pipe(concat('all.js'))
//     .pipe(gulp.dest('./dist/js/'));
// });

// 任务5：压缩js
// var uglify = require('gulp-uglify');
// var pump = require('pump');
// gulp.task('compress', function () {
//     pump([
//         gulp.src('./dist/js/all.js'),
//         uglify(),
//         gulp.dest('dist/js/')
//     ],
  
//   );
// });

// all.js====>all.min.js
// 任务5：合并js、压缩js、改名字min.js
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var pump = require('pump');
var rename = require("gulp-rename");

gulp.task('jsmin', function () {
    pump([
        gulp.src('./src/js/*.js'),
        concat('all.js'),
        gulp.dest('./dist/js/'),
        
        uglify(),
        // // 改名字
        rename({suffix: ".min"}),
        gulp.dest('dist/js/')
    ]);
});

// 任务6： 开启浏览器同步测试。
var browserSync = require("browser-sync");
// 静态服务器:没有语言解析器
gulp.task('server',()=>{
    browserSync({
        // 服务器路径
        // server:'./src/',
        // 代理服务器，必须绑定到当前服务器路径一致
        proxy:'http://localhost:1505',
        // 端口
        port:666,
        // 监听文件修改，自动刷新
        files:['./src/**/*.html','./src/css/*.css','./src/api/*.php']
    });
    // 监听sass文件修改，并自动编译
    gulp.watch("./src/sass/*.scss",gulp.series("compileSass"))
})
//监听的文件修改，页面html对应修改。通过brower-sync服务只能看到页面修改