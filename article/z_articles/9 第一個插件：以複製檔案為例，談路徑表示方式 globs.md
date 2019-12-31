# 第一個插件：以清除暫存為例，談路徑表示方式 globs

Gulp 官方文件是這麼形容 globs 的：
> A glob is a string of literal and/or wildcard characters used to match filepaths. Globbing is the act of locating files on a filesystem using one or more globs.
> 
> glob 是由普通字符和 / 或通配字符組成的字符串，用于匹配文件路徑。可以利用一個或多個 glob 在文件系統中定位文件。

也就是說，globs 這個字符串，主要用途就是表示檔案的路徑。在前面的 `src()` 與 `dest()` API 中，第一個參數就是用來放 globs 這個代表檔案路徑的字符串。

類似於正則表達式，globs 也有一些特殊的匹配符號。以下簡單列出常用的符號。

## 轉義 `\\`

`*` 星號本來是有其他匹配意義的，但透過 `\\` 兩個斜線就變成只是個星號而已。
```bash
'glob_with_uncommon_\\*_character.js'
```

## 在單一字串中匹配任意數量 `*`
`*` 星號可以用來匹配該目錄下所有的檔名。例如，`*.js` 就可以匹配到 `index.js`，但無法匹配到 `all.css`、`script/main.js`

```bash
'*.js'
```

## 在多個字串中匹配任意數量 `**`
如果說 `*` 經常用在匹配檔名的話，`**` 則經常用在匹配目錄名稱。例如，`scripts/**/*.js` 這個 globs，可以匹配到 `scripts/index.js`、`scripts/nested/index.js`。

## 取消匹配 `!`
`src()`、`dest()` 等 API 第一個參數除了能接受 globs 字串外，也能接受由 globs 字串所組成的陣列。以底下的例子來說，除了在 `node_modules/` 資料夾底下的 js 外，其他所有路徑底下的 js 都會被匹配到。

```bash
['**/*.js', '!node_modules/']
```

## 小結

本文是「以複製檔案為例」系列的第三篇，簡單提及了 globs 是什麼以及一些匹配字串的符號。明天將會去瞭解 node.js 中的 stream 觀念以及它的 pipe() API。


## 參考資料

官方
* [API Concepts · gulp.js](https://gulpjs.com/docs/en/api/concepts#globs)
* [API Concepts · gulp.js 中文文档](https://www.gulpjs.com.cn/docs/api/concepts/#globs)
* [gulp.js - 基于流的自动化构建工具。 | gulp.js 中文网](https://v3.gulpjs.com.cn/docs/api/)
* [Explaining Globs · gulp.js](https://gulpjs.com/docs/en/getting-started/explaining-globs)
* [Glob 详解 · gulp.js 中文文档](https://www.gulpjs.com.cn/docs/getting-started/explaining-globs/)

其他
* [精通 gulp 的關鍵：文件路徑匹配模式 globs](https://yangbo5207.github.io/gulp/2016/08/10/new.html)
* [Gulp 學習筆記 - Glob 篇 | 格物致知](https://amobiz.github.io/2015/11/14/gulp-glob/)
* [精通 gulp 的關鍵：檔案路徑匹配模式 globs - IT 閱讀](https://www.itread01.com/content/1549835473.html)
[gulp 核心知識點 | 媛媛的小窩](http://zyy1217.com/2017/05/12/gulp%E6%A0%B8%E5%BF%83%E7%9F%A5%E8%AF%86%E7%82%B9/)