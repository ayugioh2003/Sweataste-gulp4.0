# 十五、Bootstrap最終挑戰

## 借放

有沒有看到什麼
有看到燭火嗎 那是美新的元神 燭火怎麼樣
在閃爍 在表魂不附體
那妳要找 有沒有妳女兒的痕跡 有沒有可以通行的地方
詞姑觀音會引妳門路
有光就跟著光走 看到東西一傲養看有沒有每新的東西

傳世不是飄在水上
水勢觀音在引路
傳為百度 公頃詞姑觀音引路

何上有沙洲
沙洲誓詞姑觀音的話生 

有沒有看到特別的地方
有看到一座橋 那是冥府 快要到了

不要管橋下的人 他們在受自己的葉火

妳看到什麼 牌樓 有沒有路
有階梯 往上走 那是通天踢
公營詞姑觀音 度是零險四方

地獄懲罰罪人的地方
這邊和妳沒有關西 趕快走過去
妳女兒不再這裡

他們生前都是罪人 不用同情 只要看好自己的腳步

不要停下來 繼續走
很好 妳走出來了

妳看到什麼 樹
那是你的本命術
要看到詞姑觀音 要先內觀自己 走入自己的新

這邊看到的就是你的內心 往上的路
你要找到往妳內心的路
那邊有你的原陳工 你的元神在裡面
你要用你的元神感應詞姑觀音

看到門了嗎
進了門就要靠你自己 不要聽聲音
有什麼事情就唸詞姑觀音的名號

妳還記得那朵花嗎
我們都是作者 不是嗎

你的堅定驅逐了那些魔杖
願線我光民 解我女兒心頭陰霾
口舌 換愛女天籟歌聲

心神已經回歸
現在是最後的棋院
從哪裡開始的 就回到哪裡做結

心血 球愛女飛黃騰達

現在算是完成了
叩拜詞姑觀音
只要詞姑觀音感應到了 一切就會圓滿
大慈大悲 詞姑觀音

別擔心 要堅定 心誠則靈知道嗎

儀式本來就是清者當日 中者七日見效
讓他慢慢泡 不要開廁所門好嗎

## 說明

為了增加課程的挑戰性
最後再加上 Bootstrap 結合 Sass 才能完成的最終挑戰！

挑戰方式：以 Bootstrap 為基礎結合 Sass 完成甜點電商

甜點電商設計稿：[https://lihi.cc/LAfsC](https://lihi.cc/LAfsC)

---

如果不清楚該如何執行
可參考以下資源（以下資源包含完整原始碼，可斟酌參考）

* 教學影片：<https://www.youtube.com/watch?v=qWrp4CrObyE>
* 完成網站：<https://wcc723.github.io/F2E-PK/>
* 完整原始碼：<https://github.com/Wcc723/F2E-PK>
（挑戰請自行完成，盡可能不要複製原始碼的內容）

完成後一樣繳交至問答區即可喔 :D


---

## git 問題收集

npm install update
* [npm 基本指令 | DreamersLab](http://dreamerslab.com/blog/tw/npm-basic-commands/)

.gitignore 失效
* [解決.gitignore 文件忽略規則無效 git 依然跟蹤修改的問題 - 十有三博客](https://shiyousan.com/post/636470505667009340)
* [.gitignore 無效解決辦法 - 簡書](https://www.jianshu.com/p/bc135b986d3f)

gulp deploy 失敗

```bash
git init

git config user.name 名稱
git config user.email email

git remote add origin girRepoUrl # 遠程位置

git status # 查看 git 狀態
git add .
git commit -m "first"

git branch # 查看分支
git master # 選擇分支

git push origin master
gulp deploy
```

.gitignore 添加
* .publish 
* package-lock-json
* .xd


## 建置環境

開一個 source，寫簡單的 HTML

開 package.json，直接下載王的範例
npm install

開 gulpfile.js，從頭建制
* 引入 require，抄王的
* 變數，抄 gulp 課程自己改的
* 手動區，測試用 copyHTML，複製 BS4 的 _variable.scss

自動區
* browser-sync
* watch
* YAML-layout 抄王的 layout，編譯 ejs 用
* sass
* vendorJS
* babel
* image-min
    * [gulp-imagemin - npm](https://www.npmjs.com/package/gulp-imagemin)
* clean
* copy (我應該不需要)

輸出區
* defalut
* bulid
* deploy

html 模板
* [gulp-layout - npm](https://www.npmjs.com/package/gulp-layout)
* [合並 html 頭尾 - 基礎支持 - 用 gulp 搭建前后分離的開發環�? - KK 之家](http://www.kkh86.com/it/gulp-build-dev-env/guide-base-wrap-layout.html)
* [rogeriopvl/gulp-ejs: 🎨 Gulp plugin for ejs templates](https://github.com/rogeriopvl/gulp-ejs) 沒用到
* [Swig 以及 YAML front-matter 模板 - gulp.js 中文文檔 | gulp.js 中文網](https://www.gulpjs.com.cn/docs/recipes/templating-with-swig-and-yaml-front-matter/)
* [gulp-front-matter__practice/gulpfile.babel.js at master · yuyake0084/gulp-front-matter__practice](https://github.com/yuyake0084/gulp-front-matter__practice/blob/master/gulpfile.babel.js)
* [gulp 構建項目（六）：gulp-html-tpl 處理公用模板 - 猿始森林 - CSDN 博客](https://blog.csdn.net/guang_s/article/details/84675106)

gulp-watch 設定有點難，先放著
* [gulp-watch - npm](https://www.npmjs.com/package/gulp-watch)
* [嘴对嘴教你使用 Gulp - 掘金](https://juejin.im/post/5bfcc1e9e51d453d776b9a87)
* [gulp 構建專案（三）：gulp-watch 監聽檔案改變、新增、刪除 - IT 閱讀](https://www.itread01.com/content/1543644662.html)
* [gulp 構建項目（三）：gulp-watch 監聽文件改變、新增、删除 - 猿始森林 - CSDN 博客](https://blog.csdn.net/guang_s/article/details/84672449)
* [使用 Gulp 為前端開發伺服器 « AndyYou's Blog](http://andyyou.logdown.com/posts/223484-using-gulp-for-front-end-development-server)
* [Gulp 學習紀錄_Part 3 - 一起來使用 Livereload 做前端吧！！| sqz777 der 技術小本本 - 點部落](https://dotblogs.com.tw/im_sqz777/2017/07/14/001638)
* [gulp.watch 的兩種使用方法 - 簡書](https://www.jianshu.com/p/6f85a44d01f4)

---

## 頁面結構

* [layout](./stylesheets/pages/_layout.scss)
    * head
    * navbar
    * subscribe
    * footer
* index
    * [header](./stylesheets/components/_header.scss)
        * rectangle-section
    * reason-1
        * reason-title
        * reason-img
        * reason-text
    * reason-2
        * reason-title
        * reason-img
        * reason-text
    * reason-3
        * reason-title
    * card-list
        * item-card
            * card-img
            * card-name
            * card-price
            * card-btn
* product
    * aside-bar
    * item-card
        * card-img
        * card-name
        * card-price
        * card-btn
        * card-favarite
        * card-tag
    * navigator
* register / login
    * member-login
        * member-name
        * member-account
        * member-password
        * save-me
        * login-btn
    * social-login
        * social-name
* carts
    * 您的購物車
        * 清單
            * img
            * name
            * price
            * - 2 +
            * total-price
            * trash-btn
    * 訂單摘要
        * 小計
        * 運費
        * 總計
        * 結帳btn
* checkout-1 
    * 運送問卷
        * 進度條
    * 訂單摘要
    * 購物清單
        * img name price
* checkout-2 
    * 付款問卷
    * 訂單摘要
    * 購物清單
* checkout-3
    * checkout-3-1 電子發票
    * checkout-3-2 郵寄
    * 訂單摘要
    * 購物清單
* checkout-success
    * banner btn

---

## layout

navbar 的購物車，要怎麼跟 brand 排一起，而不會被放到折疊選單
* order-last
* [Grid system 網格系統・Bootstrap 4 繁體中文手冊 [六角學院譯]](http://bootstrap.hexschool.com/docs/4.0/layout/grid/#order-classes)
* [F2E-PK/layout.ejs at master · Wcc723/F2E-PK](https://github.com/Wcc723/F2E-PK/blob/master/source/layout.ejs#L33)

切換頁面時，連結深淺也跟著換
* ejs 的 `<% if %>` 語法
* [F2E-PK/layout.ejs at master · Wcc723/F2E-PK](https://github.com/Wcc723/F2E-PK/blob/master/source/layout.ejs#L37)

subscribe input 放大
* BS 有內建 class，但好像沒有很大
* [Input 群組 (Input group)・Bootstrap 4 繁體中文手冊 [六角學院譯]](http://bootstrap.hexschool.com/docs/4.0/components/input-group/#sizing)

Favicon 無法svg
* [Favicon - 維基百科，自由的百科全書](https://zh.wikipedia.org/wiki/Favicon)
* [網站瀏覽器 logo 製作超 easy - 「Favicon.ico」簡介](http://www.cc.ntu.edu.tw/chinese/epaper/0046/20180920_4602.html)
* [幫網頁標題欄 title 加上 logo (icon) 圖示](https://www.webdesigns.com.tw/webdesign_favicon.asp)


---





## p-index 

只要格線系統的 RWD，不要 row 的左右 padding
* [Grid system 網格系統・Bootstrap 4 繁體中文手冊 [六角學院譯]](http://bootstrap.hexschool.com/docs/4.0/layout/grid/#no-gutters)

垂直書寫
* `writing-mode: vertical-rl`
* [(CSS3) 用 CSS 讓字體可以變成直書 writing-mode ~ Budget Programmer](https://budget-programmer.blogspot.com/2018/01/css3-css-writing-mode.html)
* [改變 CSS 世界縱橫規則的 writing-mode 屬性 « 張鑫旭 - 鑫空間 - 鑫生活](https://www.zhangxinxu.com/wordpress/2016/04/css-writing-mode/)

模糊效果
* `filter:blur(3px)`
* [CSS 濾鏡效果 - 簡單究好 Simple is Best 簡單究好 Simple is Best](http://blog.shihshih.com/css-filter/)

圖片正方形
* [css 來控制 img 正方形自適應 - 董慶賀的專欄 - CSDN 博客](https://blog.csdn.net/u012536005/article/details/52784633)
* [css 如何將一張圖片截取爲一個正方形？- SegmentFault 思否](https://segmentfault.com/q/1010000004147850)
* [保持正圓或正方形的圖片 – zoneless](https://zoneless.blog/2017/06/17/css-responsive-circle-or-square-image/)
* [[css]裁切圖片-利用overflow或clip:rect @ 小 春 日 和 :: 痞客邦 ::](http://cabuchi.pixnet.net/blog/post/37503134-%5Bcss%5D%E8%A3%81%E5%88%87%E5%9C%96%E7%89%87-%E5%88%A9%E7%94%A8overflow%E6%88%96clip%3Arect)
* [css 實現未知寬度的正方形需求 - 練小習的前端技術筆記](https://www.chengrang.com/css-square.html)
* [css – 如何自動裁剪和居中圖像 - 代碼日志](https://codeday.me/bug/20170617/28385.html)


BS 的 breakpoint 樣式設定
`@include media-breakpoint-up(md)`
* [Overview · Bootstrap](https://getbootstrap.com/docs/4.3/layout/overview/#responsive-breakpoints)

回填 container 的 padding
* `margin: 0 -15px;`

checkbox 應用
* [CSS 沒有極限 - Checkbox 的妙用 | 卡斯伯 Blog - 前端，沒有極限](https://wcc723.github.io/css/2013/10/07/css-chechbox/)
* [F2E-PK/_interactive.scss at master · Wcc723/F2E-PK](https://github.com/Wcc723/F2E-PK/blob/master/source/stylesheets/components/_interactive.scss)

icon 字體
* [鐵人賽：網頁設計 - Icon fonts 的常見資源 | 卡斯伯 Blog - 前端，沒有極限](https://wcc723.github.io/design/2018/10/31/icon-fonts/)



## p-product

list-group 顏色配置
* list-group-active
* [F2E-PK/_variables.scss at master · Wcc723/F2E-PK](https://github.com/Wcc723/F2E-PK/blob/master/source/stylesheets/helpers/_variables.scss#L865)

html 轉義字符 `&laquo;` «
* left-pointing double angle quotation mark = left pointing guillemet
* [&laquo; 在下面代碼里是什麽意思？_慕課問答](https://www.imooc.com/qadetail/111004)
* [Html 特殊符號 - 張龍豪 - 博客園](http://www.cnblogs.com/knowledgesea/archive/2013/07/24/3210703.html)
* [What is '&laquo' in HTML? I know there are many of those things that start with '&.' What are they? - Quora](https://www.quora.com/What-is-laquo-in-HTML-I-know-there-are-many-of-those-things-that-start-with-What-are-they)
* [HTML 4 Entities](https://www.w3schools.com/charsets/ref_html_entities_4.asp)


flex justify-content-md-center
* [Flex・Bootstrap 4 繁體中文手冊 [六角學院譯]](http://bootstrap.hexschool.com/docs/4.0/utilities/flex/#justify-content)



## p-carts
material icons 的 outlined 引用
* [How to use the new Material Design Icon themes: Outlined, Rounded, Two-Tone and Sharp? - Stack Overflow](https://stackoverflow.com/questions/50303454/how-to-use-the-new-material-design-icon-themes-outlined-rounded-two-tone-and)

BS4 的 media queries 的 Sass mixins
* @include media-breakpoint-up(md) { ... }
* [概觀 (Overview)・Bootstrap 4 繁體中文手冊 [六角學院譯]](http://bootstrap.hexschool.com/docs/4.0/layout/overview/#responsive-breakpoints)

## p-checkout-1 
form
* form-row 讓 gutter 變窄
* form-group 團體間有距離
* form-custom form-control-lg 變好看 變大

process-step
* [Steps Process](https://codepen.io/ahmmu15/pen/OjmJRe)

## p-checkout-2 
input-group
* [Input 群組 (Input group)・Bootstrap 4 繁體中文手冊 [六角學院譯]](http://bootstrap.hexschool.com/docs/4.0/components/input-group/)

cvv2 信用卡安全碼
* [cvv2 - Google 搜尋](https://www.google.com/search?q=cvv2&oq=cvv2&aqs=chrome..69i57&sourceid=chrome&ie=UTF-8)

## p-checkout-3 
vat-number 統一編號
* [vat-number - Google 搜尋](https://www.google.com/search?q=vat-number&oq=vat-number&aqs=chrome..69i57&sourceid=chrome&ie=UTF-8)


## SCSS

官網
* [主題化 Bootstrap・Bootstrap 4 繁體中文手冊 [六角學院譯]](https://bootstrap.hexschool.com/docs/4.0/getting-started/theming/#sass)
* [bootstrap/scss at v4-dev · twbs/bootstrap](https://github.com/twbs/bootstrap/tree/v4-dev/scss)

& 用法
* [Sass 中連體符（&）的運用_Preprocessor, Sass, SCSS 教程_w3cplus](https://www.w3cplus.com/preprocessor/use-ampersand-in-selector-name-with-Sass.html)


---

## EJS

參考王的架構
* layout.ejs, 有YAML的 index.html
* [F2E-PK/source at master · Wcc723/F2E-PK](https://github.com/Wcc723/F2E-PK/tree/master/source)

EJS 官網
* [EJS -- 嵌入式 JavaScript 模板引擎 | EJS 中文文檔](https://ejs.bootcss.com/)
* `<%- include('user/show', {user: user}); %>`

gulp-ejs
* [使用 gulp+ejs 模塊化 html | Yusen's Blog | 學習彎道超車的技巧！](https://imys.net/20150908/gulp-ejs-module.html#%E5%AE%8C%E6%95%B4Demo)
* [gulp-ejs-demo/templates at master · yscoder/gulp-ejs-demo](https://github.com/yscoder/gulp-ejs-demo/tree/master/templates)
* [Gulp 前端自動化之 ejs 插件使用 - 姜絲的博客 - CSDN 博客](https://blog.csdn.net/itpinpai/article/details/49157541)

其他
* [nodejs：用 ejs 模板和 gulp 實現前端組件化 - 簡書](https://www.jianshu.com/p/6be272e6327b)
* [前端開發工程化探討 -- 基礎篇（長文） - Coding 博客](https://blog.coding.net/blog/frontend-engineering)

---

## 王志誠
* [(445) 使用 Bootstrap 結合 Sass 製作版型 - 甜點電商 - YouTube](https://www.youtube.com/watch?v=qWrp4CrObyE)
* [001 直播：使用 Bootstrap 結合 Sass 製作版型 – Dropbox Paper](https://paper.dropbox.com/doc/001-Bootstrap-Sass--AWkiQEujsJyyD3ZV4cf3yrq~Ag-B51w60KvhjjgSPoXyJ08j)
* [Wcc723/F2E-PK](https://github.com/Wcc723/F2E-PK)


初階工具
* sass compiler
* live server


進階工具 gulp (webpack)
* html ejs
* css scss postcss
* js babel bundle 
* watch
* server



```bash
npm init
npm install bootstrap --save
```

資料夾結構
* public
    * images
    * js
    * stylesheets/
        * all.scss
        * components/ 
            * 區塊 header, section, carts
            * 元件 form-square, process-steps, item-card, interactive, custom-bs4
            * 通用 utilities 
        * helpers/
            * _varaible.scss
    * index.html
    * products
    * register
    * carts
    * checkout-1 
    * checkout-2
    * checkout-3
    * success
    * layout.ejs
* gulpfile.js
* package.json
* README.md


CSS 編寫
OOCSS
BEM 
Atomic BS4


---

## 廖洧傑
* [電商網頁版型開發教學 - YouTube](https://www.youtube.com/watch?v=17UlDx4UOqk)
* [甜點電商 CSS guideline - Quip](https://quip.com/1zuNARsbxGe0)

格線
* susy
* 940 

CSS
* BEM
* 前綴詞

SASS 資料夾結構
* col
* config
* element
* helper
* layout
* module
* page
* all.sass

取色名
colorhexa

哈好學生小宇宙
腦袋進水知識分享

---

## 設計師設計流程
* [(458) 網頁設計流程大揭密 - 網頁切版 PK 戰 - YouTube](https://www.youtube.com/watch?v=nXDLnOXvEM0)


### 了解設計需求

設計需求
* 電子商務網頁
* 主題可依照素材種類來挑選
* 版型規劃以 CSS 排版為主要考量
* 可採用 BS4 規範設計介面

頁面需求
* 首頁
* 產品列表頁
* 登入頁 (須提供社群平台登入)
* 購物車頁 (以表格來設計)
* 結帳頁 * 3
* 結帳成功頁

主題考量
* 免費圖片資源好不好取得
* 需求的六個頁面好不好發揮

隱藏需求
* 有難度、具挑戰性
* 新手老手都能同樂
* 排版盡量不要重複


### 資料去哪收集

免費圖庫 unsplash
* 相簿整理 collections
* 不同風格 亮與暗
* 挑選技巧: 風格一致, 主體在正中間

版型靈感 Pinterest
* 相簿整理 Board
* 直式文字 japanese web design
* 類似風格 more like this
* 長條式整頁瀏覽

版型靈感 Awwwards
* 相簿整理 Collections
* 風格篩選 E-commerce, 電商需要的區塊
* 參考重點 特殊的排版
* 網頁排版與動態

其他
* dribble 網頁動態與配色
* behance 完整專案介紹

### 開始繪製草稿

繪製要點
* 確定網格系統數值
    * 12 col, 920px
* 使用單色色塊排版 去除顏色干擾
* 選擇網站主要色彩 三種藍色

選色技巧
* Assets Colors, XD 中的全域色彩
    * primary, secondary, accent
* 從圖片擷取色彩
    * 抹茶色、淡一點、對比色
* 配色靈感 Adobe Color CC
    * 彩度想高，拉外面
    * 飽和度想低，拉裡面
    * 網站喜歡選單色
    * 有帳戶，可在網站儲存色票，在 XD 用


### 完稿階段，各區塊細節

繪製要點
* 視覺動線流暢
* 預留資訊增減空間
* 響應式排版

設計細節
* 直式文字
* 區塊疊合
* 不對稱設計
* 毛玻璃特效
* 思考
* 合理、做不做得到、是否獨特

設計標注
* 物件尺寸與間距
* 網頁標準色色票
* 字體樣式
* 格線欄位

下載
* download 頁面
* assert
* 短網址

---

### 設計心得分享

* [THE F2E 前端挑戰：設計心得分享](https://www.slideshare.net/JunIWu1/the-f2e)
    * [The Boat | SBS](http://www.sbs.com.au/theboat/)
    * [2018 網頁設計流行趨勢：插畫的力量 Web Design Trend: The Power of Illustrations](https://medium.com/uxeastmeetswest/2018-%E7%B6%B2%E9%A0%81%E8%A8%AD%E8%A8%88%E6%B5%81%E8%A1%8C%E8%B6%A8%E5%8B%A2-%E6%8F%92%E7%95%AB%E7%9A%84%E5%8A%9B%E9%87%8F-the-power-of-illustrations-90e2c03900bc)


設計稿流程
* User Story
* 參考資料
* 草稿
* 難易度調整
* 單頁單色稿
* 確定設計樣式
* 完稿




## 問題

gulp 的打包 venderjs，是否能用 import 模組取代
* [Bower 宣告終止開發？(18 Nov 2015 updated: Bower is alive, looking for contributors)・Ruby China](https://ruby-china.org/topics/28060)
* [前端包管理器爭端，只不過是構建工具的牙縫菜_唐霜的博客](https://www.tangshuang.net/2974.html)
* Browserify
    * [代码模块化：<script>、RequireJS、Browserify 与 webpack · Issue #27 · lmk123/blog](https://github.com/lmk123/blog/issues/27)
    * [Browserify 入門 « 關於網路那些事...](https://adon988.logdown.com/posts/2910237-browserify-tutorial)
    * [Browserify：瀏覽器加載 Node.js 模塊 -- JavaScript 標準參考教程（alpha）](https://javascript.ruanyifeng.com/tool/browserify.html)
    * [前端模塊及依賴管理的新選擇：Browserify - 庭院茶 - SegmentFault 思否](https://segmentfault.com/a/1190000002941361)
    * [Browserify 使用指南 | 趙達的個人網站 - Zhao Da’s Personal Website](https://zhaoda.net/2015/10/16/browserify-guide/)
    * [Browserify: 取代 RequireJS ?](http://josephj.com/entry.php?id=394)
    * [一看就懂的 React 開發環境建置與 Webpack 入門教學 | TechBridge 技術共筆部落格](https://blog.techbridge.cc/2016/07/30/react-dev-enviroment-webpack-browserify/)
    * [通過 Browserify 在瀏覽器中使用 NodeJS 模塊](https://www.ibm.com/developerworks/cn/web/1501_chengfu_browserify/index.html)
* Webpack
    * [一看就懂的 React 開發環境建置與 Webpack 入門教學 | TechBridge 技術共筆部落格](https://blog.techbridge.cc/2016/07/30/react-dev-enviroment-webpack-browserify/)
* ES6 Module
    * [import - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/import)
    * [Module 的語法 - ECMAScript 6 入門](http://es6.ruanyifeng.com/#docs/module)
    * [萬歲，瀏覽器原生支持 ES6 export 和 import 模塊啦！ « 張鑫旭 - 鑫空間 - 鑫生活](https://www.zhangxinxu.com/wordpress/2018/08/browser-native-es6-export-import-module/)
* Babel
    * [Babel 入門教程 - 阮一峰的網絡日志](http://www.ruanyifeng.com/blog/2016/01/babel.html)
    * [babel 原理及插件开发 - 掘金](https://juejin.im/post/5af302e4f265da0b745229bb)
    * [深入理解 Babel 原理及其使用，babel 把 ES6 轉成 ES5 的原理是什麽？](http://www.fly63.com/article/detial/197)
* CSS @import
    * [CSS @import Rule Import Style Sheet Tutorial - YouTube](https://www.youtube.com/watch?v=IjDSAbb-IZo)
    * [了解 CSS 中的 @import - 我的技術博客 - SegmentFault 思否](https://segmentfault.com/a/1190000000369549)
    * [高性能網站設計：不要使用 @import](https://www.qianduan.net/high-performance-web-site-do-not-use-import/)
* 模塊化
    * [前端模塊化開發那點历史・Issue #588・seajs/seajs](https://github.com/seajs/seajs/issues/588)
    * [JavaScript 模塊化七日談 - 黃玄的博客 | Hux Blog](http://huangxuan.me/2015/07/09/js-module-7day/)
    * [Javascript 的模塊機制 s・Issue #25・zz1211/Doraemon](https://github.com/zz1211/Doraemon/issues/25)
    * [前端模塊化詳解・Issue #1・lesonwu/Blog](https://github.com/lesonwu/Blog/issues/1)
    * [前端模塊化詳解 (完整版)・Issue #48・ljianshu/Blog](https://github.com/ljianshu/Blog/issues/48)
    * [JavaScript 模塊化發展的演進历史 CommonJS、AMD、CMD、ES6 模塊的演進历史・Issue #122・JesseZhao1990/blog](https://github.com/JesseZhao1990/blog/issues/122)