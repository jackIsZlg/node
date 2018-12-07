var express = require('express');
var router = express.Router();
var qs = require("querystring"); // querystring模块 用于处理传来的参数串
var db = require("../config/db");

var questions=[
    {data:213,    num:444,    age:12},
    {data:456,    num:678,    age:13}]; //写个接口123

var data = {
    code: 0,
    data:[],
    msg: "success"
}

router.get('/',function(req,res){
    //console.log(req);
    db.query("select * from my_info",function(err,rows){
        if(err){
            res.json(err);
        }else {
            console.log('获取数据成功');
            data.data = rows
            res.json(data);
        }
    });
});

module.exports = router;
