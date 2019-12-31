var fs = require("fs");

/*\
|*| readable stream
\*/

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

console.log("程序執行完畢");


