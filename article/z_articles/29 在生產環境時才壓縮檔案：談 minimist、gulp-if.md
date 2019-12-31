# 在生產環境時才壓縮檔案：談 minimist、gulp-if

昨天提到，當需要將檔案放上生產環境時，才會需要壓縮檔案。那要怎樣控制什麼時候是生產環境呢？答案是透過 CLI 界面的指令。透過指令，將 env 設定成 production，再自己設定生產環境時要做什麼事情。

有些人似乎會透過 .env 檔、搭配 nodejs 在 CLI 指令接收變數的方式來操作。不過這邊是用 minimist 與 gulp-if 來操作；前者接收來自 CLI 指令的變數，後者決定生產環境時要做什麼事情。

## minimist 

其實，原生的 nodejs 就有獲得 CLI 指令參數的功能。透過 `process.argv` API，可以獲得一個 array。`array[0]` 固定是 nodejs 路徑、`array[1]` 固定是檔名路徑、接下來就會是其他接收到的參數。

```js
// test.js
console.log('process.argv = ' + process.argv)
```

```bash
> node test.js --a aaa --b 123
# process.argv = [node路徑, test.js路徑, --a, aaa, --b, ...]
```

不過，透過原生 nodejs API 獲得的參數，並不太方便使用，因為我們會希望 `--a` 這個 key 可以接到 `aaa` 這個 value，而不需要自己做另外處理。這時候 minimist 套件就派上用場了。以下是官方 npm 的例子。

可以看到，回傳的結果從陣列變成物件，可以直接透過 key 也會存取到對應的 value 了。

```js
var argv = require('minimist')(process.argv.slice(2));
console.dir(argv);
```

```bash
> node example/parse.js -a beep -b --env production 
{ _: [], a: 'beep', b: 'boop', env: 'production' }
```

比較需要注意的是，gulp 已經有內建一些對應的參數指令，需要避開。例如，`gulp -env` 會出現 gulp CLI 與目前資料夾中的 gulp 版本。如果想接收 env 這個 key 與對應值的話，就需要使用 `gulp --env xxx` 才行。


## gulp-if

顧名思義，gulp-if 與一般程式語言中的 if 用法類似，都是以條件控制流程。不過 而 if 是將條件寫在 `()` 中，而 gulp-if 是將條件、執行句都寫在參數中。

```js
// if 
if (env == 'production') {
  doSomething()
}
// gulp-if
gulp.task('task', function() {
  gulp.src('./src/*.js')
    .pipe(gulpif(env == 'production', doSomething())
    .pipe(gulp.dest('./dist/'));
});

```

## 小結

今天是「在生產環境中才壓縮檔案」的第二篇，介紹了 minimist 如何接收命令列參數、以及 gulp-if 的用法。明天將會介紹如何邊開發時，能邊看到畫面的變動。

## 參考資料
npm
* [minimist - npm](https://www.npmjs.com/package/minimist)
* [gulp-if - npm](https://www.npmjs.com/package/gulp-if)

process.argv
* [process.argv | Node.js API 文檔](http://nodejs.cn/api/process/process_argv.html)
* [process.argv 與命令行工具 - 掘金](https://juejin.im/post/5a976e87f265da4e8c453eec)
* [process.argv 這個有什麽用途？ - CNode 技術社區](https://cnodejs.org/topic/515a40836d38277306084809)
* [菜鳥工程師 肉豬: Node.js 在命令列執行時傳入參數](https://matthung0807.blogspot.com/2017/10/nodejs_29.html)
* [process 對象 -- JavaScript 標準參考教程（alpha）](https://javascript.ruanyifeng.com/nodejs/process.html#toc4)

process.env
* [process 對象 -- JavaScript 標準參考教程（alpha）](https://javascript.ruanyifeng.com/nodejs/process.html#toc4)

dependencies
* [dependencies和devDependencies的正确使用姿势 | 浅笔墨画❀琐碎小记](https://www.chenqaq.com/2017/12/29/dependencies-devDependencies/)
* [包应该放在devDependencies还是dependencies | Gu's Blog](https://guxinyan.github.io/2017/11/02/%E5%8C%85%E5%BA%94%E8%AF%A5%E6%94%BE%E5%9C%A8devDependencies%E8%BF%98%E6%98%AFdependencies/)
* [区别 dependencies、devDependencies](https://blog.zfanw.com/difference-between-dependencies-and-devdependencies/)
* [Specifying dependencies and devDependencies in a package.json file | npm Documentation](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file)
* [不再纠结devDependencies与dependencies - zDeer520的博客 - CSDN博客](https://blog.csdn.net/zDeer520/article/details/73431295)
