/*\
|*| writable stream
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

console.log("程序執行完畢");
