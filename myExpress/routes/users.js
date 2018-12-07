var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

var questions=[
    {data:213,    num:444,    age:12},
    {data:456,    num:678,    age:13}]; //写个接口123

var data = {
    code: 0,
    data:questions,
    msg: "success"
}

var Error = {
    code: 101,
    msg:"参数不正确"
}


router.get('/get',function(req,res){
    res.status(200);
    res.json(questions)
});

router.post('/post',function(req,res){
    if(req.body.value) {
        res.status(200);
        res.json(data)
    }else {
        res.status(200);
        res.json(Error)
    }
    console.log(req.body);

});

module.exports = router;
