import fs from "fs";
import path from "path";
// export default {
// 方法1
// // Support type as Object and Array
// 'GET /api/users': { users: [1, 2] },
// // Support type as Object and Array
// 'GET /api/posts': { users: [1, 2] },

// // Method like GET or POST can be omitted
// '/api/users/1': { id: 1 },

// // Support for custom functions, the API is the same as express@4
// 'POST /api/users/create': (req, res) => { res.end('OK'); },

// 方法2
// 引入的方式
// ...require("./mock/user"),
// ...require("./mock/post")

// };
// 方法3 遍历的方式
const mock = {};
fs.readdirSync(path.join(__dirname + "/mock")).forEach(function(file) {
  if (file.match(/\.js$/)) {
    Object.assign(mock, require("./mock/" + file));
  }
});
// console.log(mock)
export default mock;
