var mysql = require("mysql");
var pool = mysql.createPool({
    host     : '106.12.150.72',  // 主机名
    port     : 3306, // 数据库连接的端口号 默认是3306
    database : 'test_db', // 需要查询的数据库
    user     : 'zlg', // 用户名
    password : 'zhouligang123' // 密码，我的密码是空。所以是空字符串
});

function query(sql,parmas,callback){
    pool.getConnection(function(err,connection){
        connection.query(sql,parmas, function (err,rows) {
            callback(err,rows);
            connection.release();
        });
    });
}

exports.query = query;
