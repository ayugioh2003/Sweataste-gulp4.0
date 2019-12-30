#  iT 邦幫忙鐵人賽題目之「試著把切版專案升級到 gulp4.0 吧 系列」的範例專案

此專案是以 gulp4.0 為主題，撰寫鐵人賽文章時用到的範例專案。該系列文可以在 iT 邦幫忙看到：
* [試著把切版專案升級到 gulp4.0 吧：：第 11 屆 iT 邦幫忙鐵人賽](https://ithelp.ithome.com.tw/users/20104132/ironman/2921)


## 原先練習的專案

Sweetast 甜點電商

> 由六角學院提供設計稿的切版練習。

![首頁截圖](https://i.imgur.com/j988j4s.png)


## Demo
https://ayugioh2003.github.io/Sweataste-gulp4.0/

## 設計稿
來源：[The F2E - 前端修練精神時光屋](https://www.facebook.com/groups/173311386703334/permalink/247893602578445/)


## 使用技術/練習技術

此次鐵人賽主要練習 gulp4.0

原專案練習的技術
* EJS
* Bootstrap 4
* CSS 效果
* SCSS
* Gulp
* Material icons 引用


## 安裝與執行

```bash
# 安裝環境
npm install gulp -g

# Clone 專案
git clone git@github.com:ayugioh2003/Sweataste4.0.git

# 執行
npm install
gulp

# 其他
gulp build # 生成靜態網頁（未壓縮）
gulp build --env pro # 生成靜態網頁（壓縮）
gulp build --env production
gulp buildPro
gulp deploy # 將靜態網頁佈署到 gh-pages
```


## 聲明

設計稿為[六角學院](https://www.facebook.com/groups/173311386703334/permalink/247893602578445/)所有。印象中是採 CC 授權的樣子（不確定）

此專案為個人練習 gulp4.0 與切版的作品