var Mock = require('mockjs')


const data=require('./post.json')
var data1 = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})
module.exports = {
  // Support type as Object and Array
  // [`${variable}/get`] 这样也是可以的
  // "GET /api/posts": { users: [1, 2] },
  "GET /api/posts": { users: Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-20': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        // 'id|+1': 1,
        // 'name':'hello'
        // "string|3": "★★★"
        // "number|+1": 202
        // "email": Mock.Random.email()
        // "email": '@email'
        "boolean": '@boolean'
    }]
}) },
  "GET /api/posts2": (req, res) => {
    res.json({ users: [1, 2] });
  }
};
