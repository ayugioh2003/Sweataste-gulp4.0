var ejs = require('ejs') // 引入 ejs 套件
var fs = require("fs")
var fm = require("front-matter")

var template = `
  <% if (user.friends == 0) { %>
    我，沒有朋友
  <% } %>
`

fs.readFile("./example.md", "utf8", function(err, data) {
  if (err) throw err;

  var user = fm(data);
  var html = ejs.render(template, {user: user.attributes})

  console.log(html)
});
