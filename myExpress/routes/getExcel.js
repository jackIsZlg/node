var express = require('express');
var router = express.Router();
var xlsx = require('node-xlsx');
var db = require("../config/db");


router.get('/',function(req,res){
    //读取文件内容
    //console.log(req.files[0].filename);
    var obj = xlsx.parse('./public/upload/myExcel.xlsx');
    var excelObj = obj[0].data;
    excelObj = excelObj.slice(1,excelObj.length);
    console.log(excelObj)

    db.query("INSERT INTO my_info (name, age, sex, year) VALUES ?",[excelObj],function(err,rows){
        if(err){
            res.json(err);
        }else {
            console.log('插入数据成功');
            db.query("select * from my_info",{},function(err,rows){
                if(err){
                    res.json(err);
                }else {
                    console.log('获取数据成功');
                    res.json(rows);
                }
            });
        }
    });
    //res.send(excelObj);
    //res.send('kaishi');
});

module.exports = router;
