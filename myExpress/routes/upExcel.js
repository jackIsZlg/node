var express = require('express');
var router = express.Router();
var xlsx = require('node-xlsx');
var db = require("../config/db");
var multer = require('multer');//上传文件
var upload = multer({dest:'./public/upload/'}).single('file'); // 设置文件上传的目录

router.post('/',upload,function(req,res){
    var bodyData =  req.body; // 展示formData 额外带来的参数(只有最外层获取)
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            // 发生错误
        } else if (err) {
            // 发生错误
            res.json(err)
        }
        req.body = bodyData;
        console.log(req.body); // 展示formData 额外带来的参数
        console.log(req.file.path);
        var obj = xlsx.parse(req.file.path); //解析excel
        var excelObj = obj[0].data;
        res.send(excelObj);
    })
});

module.exports = router;
