var express = require('express');
var router = express.Router();
var request = require('request');

/* 获取第三方接口 */
router.get('/', function(req, res, next) {
    request('http://www.baidu.com', function (error, response, body) {
        //console.log('error:', error); // Print the error if one occurred
        //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        //console.log('body:', body); // Print the HTML for the Google homepage.
        res.send(body)
    });
});

module.exports = router;


// var request = require('request');
// var url="请求url";
// var requestData="上送的数据";
// request({
//     url: url,
//     method: "POST",
//     json: true,
//     headers: {
//         "content-type": "application/json",
//     },
//     body: JSON.stringify(requestData)
// }, function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log(body) // 请求成功的处理逻辑
//     }
// });

