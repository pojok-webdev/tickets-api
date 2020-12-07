var mysql = require("promise-mysql"),
    configs = require("./configs.js");
getdata = (sql,callback) => {
    con = mysql.createConnection(configs.mysql())
    .then(cn=>{
        var result = cn.query(sql)
        cn.end();
        return result;
        })
    .then(rows=>{
        callback(rows)
    })
    .error(err=>{
        console.log('ConnectionError',err);
    })
}
module.exports = {
    getdata:getdata
}
