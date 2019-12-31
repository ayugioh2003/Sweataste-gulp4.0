# JS 的處理：談 gulp-babel

昨天提到，為了減少 HTTP 請求次數，會把第三方套件的程式碼捆成一大包。今天則是要處理專案開發者自己寫的 JS 程式碼。

對於專案開發者自己的 JS 碼來說，會需要經過什麼處理呢？其中一個通常會是，將 ES6 以上最新版本的 JS 語法，轉換成目前主流瀏覽器都能看懂的 ES5 版本語法。

要將 ES6 語法轉成 ES5 語法，目前很多人用的是 babel 這個套件。而在 gulp 中，轉換不同 ES 版本的需求可以搭配 gulp-babel 做到。

## Babel 巴別塔

先來說說 babel 的歷史故事好惹。傳說中，世界上所有的人都說同一種語言。後來他們想說，欸欸我們來造座聳立天際的通天塔跟造座鎮豪餔豪，這樣我們就可以名聲++、讓大家都住在這裡惹。

某天，上帝到凡間來查水表巡視，發現哇靠這群會說同一種語言的人，竟然團結起來造鎮造塔，而且塔還快蓋到上帝的腳底下了。這還得了，給你些磚塊蓋蓋家，你竟然就想以上帝模式玩模擬城市蓋高塔了。上帝森七七。

於是，上帝把高塔推到，讓這群人忽然聽不懂彼此的話、讓他們再也無法彼此溝通。於是，他們不再團結、也不再造高塔，並就此分散四處。

後來，這座高塔被稱為巴別塔。這裡巴別的意思是天堂之門，有人說這是在諷刺人們肖想以凡人之軀達到神的領域。而該鎮被稱為巴別鎮（有一說是巴比倫），這裡巴別的意思是混亂，意思是上帝讓人們打亂了人類的語言，讓人們彼此之間無法溝通。
## babel 將 ES6 轉碼成 ES5

先附上原文對 babel 的解釋
> Babel is a javascript compiler: it parses, transforms and outputs transformed code.
> Babel 是一個 JS 編譯器。它可以將程式碼詞法分析成 token、語法分析成 AST（抽象語法樹)；將 AST 重新轉換並輸出這些轉換後的程式碼。

舉個情境。ES6 語法是在 2015 年的時候出來的，當時還不是所有瀏覽器都支援 ES6 語法。如果有開發者想用箭頭函式的話，就會會有某些瀏覽器無法辨識該語法的風險。這時，就可以透過 babel，將 ES6 語法轉換成 ES5 語法，讓所有支援 ES5 語法的瀏覽器都能看得懂轉換後的程式碼。

```js
// before: ES6 語法，只有很潮的瀏覽器才看得懂
const hello = () => console.log('hello world')
hello()

// after: ES5 語法，老少咸宜，配合還未跟上腳步的瀏覽器
var hello = function () {
  console.log('hello world')
}
hello

```

## gulp-babel

在 gulp 中想使用 gup-babel 的過程，會比其他套件稍微麻煩一點。會需要先安裝三個套件、設定 .babelrc 配置檔，最後才是 gulp task 的邏輯撰寫。

一、安裝 babel 在 gulp 中的相關套件，與配置檔

```bash
npm install --save-dev @babel/core # 類似字典。babel 插件可以借用此字典，分析到 ES6+ 的語法時，就轉成對應的 ES5 語法
npm install --save-dev @babel/preset-env # 智慧型插件。直接跟字典說分析到最新的 ES 版本語法，那些轉換我全都要
npm install --save-dev gulp-babel # 調用 babel，讓 babel 能在 pipe 中使用
```

這個 babel 項目一開始是透過 babel-cli 被使用在 CLI 界面中，而 @babel/core 與 @babel/preset-env 是要使用 babel 的話，很核心的必備套件。@babel/core 就像是字典檔，它除了能分析目前檔案中有哪些 ES6+ 的語法，還有 ES6+ 語法與 ES5 語法的對應清單，最後能輸出這些對應的 ES5 語法。

不過，可能是效能或是自由度的關係，@babel/core 不會自動將 JS 程式碼轉碼從 ES6+ 語法轉換成 ES5 語法，而是要另外再透過 babel 插件設定想轉換哪些語法。要轉換 ES2015 的呢？還是要轉換 ES2016 呢？這些都要靠 babel 插件來協助。

但，如果是初入前端的開發者，根本不曉得要用哪些 babel 插件來協助轉碼。好在，現在有 @babel/preset-env 套件，能夠判斷目前的環境，自動載入插件，能適當地將 ES6+ 語法轉換成 ES5 語法。下載完套件後，只要在 .babelrc 中設定說插件要指定成這個 @babel/preset-env 智慧型插件，babel 就會自動挑選適合的轉碼方式惹。

```json
// babelrc
{
  "presets": ["@babel/preset-env"],
  "retainLines": true
}
```

二、gulp-babel 的使用

gulp-babel 使用方式也滿簡單的，就是先用 `gulp.src()` 讀入想轉換語法的 JS 檔，中間用 `pipe()` 將 `babel()` 傳進去，這樣就能轉換到了。中間的參數可以自訂，跟 `.babelrc` 的作用差不懂。


```js
export function babel() {
  return gulp
    .src("./source/javascripts/**/*.js")
    .pipe(
      $.babel({
        presets: ["@babel/env"]
      })
    )
    .pipe(gulp.dest("./public/javascripts"))
}
```

## 小結

今天是「JS 的處理」系列的第三篇，簡介了 babel 是什麼、用途，以及 gulp-babel 的使用。明天將會介紹能壓縮 JS 檔以縮小檔案體積的 gulp-uglify。


## 參考資料
* [Babel · The compiler for next generation JavaScript](https://babeljs.io/en/setup/#installation)
* [巴別塔 - 維基百科，自由的百科全書](https://zh.wikipedia.org/wiki/%E5%B7%B4%E5%88%A5%E5%A1%94)

babel 介紹
* [Babel 入門教程 - 阮一峰的網絡日志](http://www.ruanyifeng.com/blog/2016/01/babel.html)
* [babeljs - babel-polyfill vs babel-plugins - Stack Overflow](https://stackoverflow.com/questions/47255455/babel-polyfill-vs-babel-plugins)
* [babel-polyfill VS babel-runtime VS babel-preset-env - 掘金](https://juejin.im/post/5aefe0a6f265da0b9e64fa54)
* [你真的会用 Babel 吗？- 掘金](https://juejin.im/post/59b9ffa8f265da06710d8e89#heading-10)
[babel 7 教程](https://blog.zfanw.com/babel-js/#x3-babel-runtime)
* [Babel 全家桶・Issue #20・brunoyang/blog](https://github.com/brunoyang/blog/issues/20)
* [javascript - @babel/core 與 babel-core 有什麽區别？ - SegmentFault 思否](https://segmentfault.com/q/1010000016207460)
* [Babel 第一次接觸 - 《Chris 技術筆記》](https://dwatow.github.io/2018/03-08-babel-cli/)
* [React Day12 - Babel 介紹 - iT 邦幫忙：：一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10185730?sc=rss.qu)

babel-core
* [@babel/core · Babel](https://babeljs.io/docs/en/babel-core)

preset-env
* [@babel/preset-env · Babel](https://babeljs.io/docs/en/babel-preset-env/)

polyfill
* [@babel/polyfill · Babel](https://babeljs.io/docs/en/babel-polyfill)
* [zloirock/core-js: Standard Library](https://github.com/zloirock/core-js#babelpolyfill)
* [Babel 入門教程 - 阮一峰的網絡日志](http://www.ruanyifeng.com/blog/2016/01/babel.html)
* [babel-polyfill VS babel-runtime - 掘金](https://juejin.im/post/5a96859a6fb9a063523e2591)
* [babel-polyfill 和 babel-runtime 的區别 - 绯雨閑丸的博客 | HISAME SHIZUMARU Blog](https://www.vanadis.cn/2017/04/28/difference-between-babel-polyfill-and-babel-runtime/)
* [Babel-Polyfill vs Babel-Transform-Runtime](https://gist.github.com/CMCDragonkai/7fb6b279bb667f3c194994b2f2ccedae)
* [Babel-polyfill and babel-runtime easily explained - Codersmind](https://codersmind.com/babel-polyfill-babel-runtime-explained/)

gulp-babel
* [[ES6 - 重點紀錄] 開發環境建置 (上) - Babel 編譯工具 - iT 邦幫忙：：一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10197028)
* [gulp + babel 編譯 es6 - caimaomaocai 的博客 - CSDN 博客](https://blog.csdn.net/caimaomaocai/article/details/80396849)

其他
* [[譯] 使用基于 Babel 的 gulp – Bu・log](https://yaowenjie.github.io/front-end/using-gulp-with-babel)