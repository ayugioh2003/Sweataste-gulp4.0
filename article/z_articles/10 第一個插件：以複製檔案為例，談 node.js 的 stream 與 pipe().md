# 第一個插件：以複製檔案為例，談 node.js 的 stream 與 pipe()

在「以複製檔案為例」系列的第一天，曾經貼過這個範例 task：
```js
import gulp from 'gulp'

export function copyHTML() {
  return gulp.src('./source/**/*.html')
    .pipe(gulp.dest('./public'))
}
```
`src()` 和 `dest()` 這兩支 Gulp 提供的 API 以在前天介紹過了，但 `pipe()` 還沒有。不過，`pipe()` 不是 Gulp 的 API ，而是由 Node.js 提供的。但為了瞭解 `pipe()`，就需要先瞭解 Node.js 中用來讀寫資料的方式，以及其中一種機制：stream。


## Node.js 同步讀取資料

雖然 client 端的 JavaScript 沒有處理本地端檔案的能力，但到了 Node.js 之後，JavaScript 就被賦予了能讀寫本地端檔案的超能力。以下是簡易的用 Node.js 讀寫檔案的範例。首先是讀檔案到 console 上

```js
// read.js 
// 讀 input.txt 檔案，內容是"麥克風測試"
var fs = require('fs')

var data = fs.readFileSync('input.txt')
console.log(data.toString())
```
```bash
> node read

麥克風測試
```

接著是寫檔案到 output.txt
```js
// write.js
// 新建 output.txt，將字串寫進去
var fs = require('fs')
fs.writeFileSync('output2.txt', 'write 麥克風測試', function(){})
```
```bash
> tree .
└── write.js

> node write
> tree .
├── output.txt
└── write.js

# win 平台用 touch 顯示檔案內容，unix like 平台用 cat/more
> touch output.txt 
write 麥克風測試
```

以現實生活比喻讀寫檔案過程的話，就像是購物的情境一樣：我從商品陳架上看到一瓶礦泉水，那我就 read 到一個檔案；如果我將一瓶礦泉水放進我的購物車中，那我就 write 進一個檔案。

不過，同步讀寫檔案有一個壞處，就是當檔案太大時，程式就需要花很多時間在讀取這個檔案，沒辦法做其他事情；又或者記憶體的空間沒這麼多，沒辦法一次寫入這麼大的檔案。因此，Node.js 有其他的方式因應這種狀況：非同步讀寫、以及 stream 機制。以下將介紹 stream。


## Node.js 讀寫資料的其中一種機制：stream

如果說同步讀寫就像是一次拿一瓶礦泉水的話，用 stream 就像是打開水龍頭接水一樣。舉個例子，我們日常生活用的水是這麼來的：水庫接雨水、然後水庫的水會送往污水處理場，接著到社區的大水塔、大樓的水塔，最後在家裡打開水龍頭就能接到水。順序大概是這樣：

> 下雨 → 水庫 → 污水處理場 → 社區水塔 → 大樓水塔 → 打開水龍頭接水

因此，我們不用自己到外面接雨水來用、也不用一次使用水庫大量的水（就像洩洪時那樣），而是直接打開水龍頭接水，用的是大樓水塔暫存起來的水。

stream 的概念就是這樣。它並不是一次讀入全部的檔案內容，而是將檔案拆成好幾個 chunk，然後放入 buffer 中。等到部份的 chunk 讀寫完後，再從 buffer 中抓一些 chunk 出來讀寫。有點少量多餐的概念。以下是範例程式碼。

建立一個 readable stream，然後在 console 顯示出 input.txt 的內容
```js
/*\
|*| readstream.js
\*/
var fs = require("fs");


var inputdata = "";

// 創建可讀流
var readerStream = fs.createReadStream("input.txt");

// 設置編碼爲 utf8。
readerStream.setEncoding("UTF8");

// 處理流事件 --> inputdata, end, and error
readerStream.on("data", function(chunk) {
  inputdata += chunk;
});

readerStream.on("end", function() {
  console.log(inputdata);
});

readerStream.on("error", function(err) {
  console.log(err.stack);
});
```
在 CLI 操作 readstream.js
```bash
> node readstream.js

麥克風測試 # input.txt 的內容
```

建立一個 writable stream，將字串內容寫進 output.txt 中
```js
/*\
|*| writestream.js
\*/
var fs = require("fs");

var outputdata = "輸出的資料";

// 創建一個可以寫入的流，寫入到文件 output.txt 中
var writerStream = fs.createWriteStream("output.txt");

// 使用 utf8 編碼寫入數據
writerStream.write(outputdata, "UTF8");

// 標記文件末尾
writerStream.end();

// 處理流事件 --> data, end, and error
writerStream.on("finish", function() {
  console.log("寫入完成。");
});

writerStream.on("error", function(err) {
  console.log(err.stack);
});
```
在 CLI 操作 writestream.js
```bash
> tree .   
└── writestream.js

> node writestream.js
寫入完成

> tree . 
├── output.txt
└── write.js

> type output.txt
輸出的資料
```

> 用 win 的 CLI 的 `type` 指令印出來會亂碼 orz。不過用 bash 的 `cat` 指令可以成功印出檔案的中文內容 

## stream 的 pipe() API

前面有提到，stream 就是資料流的概念，一次只讀取所有檔案 chunks 的一部分。而 `pipe()` 能讓開發者在處理資料流時更加方便。

舉個一樣是用水的例子。前面提到，雨水接到水庫後，除了會經過單純蓄水的水塔外，其中還會經過淨水處理，像是泥沙沈澱、消毒等等。寫成偽代碼的話，就像是這樣的過程：

```js
下雨了()
.pipe(水庫)
.pipe(泥沙沈澱)
.pipe(消毒)
.pipe(社區大樓水塔)
.pipe(水龍頭打開接到水)
```

以下是在 Node.js 使用 `pipe()` 的範例。透過內建的 zilb 函式庫，將 input.txt 檔案壓縮成 input.txt.gz

```js
// pipecompress.js
var fs = require("fs");
var zlib = require('zlib');

// 壓縮 input.txt 文件爲 input.txt.gz
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));
  
console.log("文件壓縮完成。");
```

用 CLI 操作 pipecompress.js
```js
> tree . 
├── input.txt 
└── pipecompress.js

> node pipecompress
文件壓縮完成

> tree . 
├── input.txt 
├── input.txt.gz
└── write.js
```

## 小結

今天是「以複製檔案為例」的第四篇，談到了 node.js stream 的觀念，以及 `pipe()` API 的使用方式。至此為止，gulp 常用的 API 差不多都介紹完了。明天開始將介紹插件/套件的使用。

## 參考資料
官方
* [Stream | Node.js v12.10.0 Documentation](https://nodejs.org/api/stream.html)

其他
* [Node.js Stream (流) | 菜鳥教程](http://www.runoob.com/nodejs/nodejs-stream.html)
 * [海納百川：Node.js Streams | E.E. Breakdown](https://www.eebreakdown.com/2016/10/nodejs-streams.html)
* [Node.js 流（stream）：你需要知道的一切 - 知乎](https://zhuanlan.zhihu.com/p/36728655)
* [stream | Node.js API 文檔](http://nodejs.cn/api/stream.html)

read and write
* [Node.js 文件系統 | 菜鳥教程](http://www.runoob.com/nodejs/nodejs-fs.html)
* [File System | Node.js v12.11.0 Documentation](https://nodejs.org/api/fs.html#fs_fs_writefilesync_file_data_options)
* [fs 模塊 -- JavaScript 標準參考教程（alpha）](http://javascript.ruanyifeng.com/nodejs/fs.html)
