# 第一個插件：以清除暫存為例，談 gullp 的插件黑名單

昨天提到，在 gulp 中使用清除檔案的插件時，我用的本來是 gulp clean，但現在換成了 npm 套件 del，這是因為重新 npm install 時，看到了 CLI 給的回饋。其實，這個建議來自 gulp 的插件黑名單機制。

gulp 除了有自己的 gulp 插件生態外，還有一個不推薦的黑名單插件機制。這個審核機制是，如果該插件不符合 gulp 規範，或是已經有效能更好的同類型插件，或是 npm 套件本身就足以完成任務的話，就會把非最佳選擇的插件納入黑名單。

想確認目前使用的 gulp 套件中有沒有黑名單的話，可以在 CLI 透過指令 `gulp --verify ` 來查詢，或是到 gulp 的 Github 去查詢黑名單清單。

## 小結

今天是「以清除暫存為例」的第三篇文。明天將談要怎麼用 gulp 來處理 HTML/ejs 檔。



官方 
* [plugins/blackList.json at master · gulpjs/plugins](https://github.com/gulpjs/plugins/blob/master/src/blackList.json) 
* [--verify to validate package.json against the blacklist · Issue #535 · gulpjs/gulp](https://github.com/gulpjs/gulp/issues/535)