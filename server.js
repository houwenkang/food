const express = require('express') // 使用commonjs全局引入express
const app = express()
const port = 3000 // 设置端口号
const mysql = require('mysql')
app.all("/*", function (req, res, next) {
    // 跨域处理
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next()
})
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'xiachu'
})
connection.connect()


//首页数据
app.get('/list', (req, res) => {
    connection.query(`select * from list`, function (err, result) {
        const obj = {
            status: 200,
            data: result
        }
        res.json(obj)
    })
})
//跳转详情页数据
app.get('/detail/:id', (req, res) => {
    connection.query(`select * from detail where type='${req.params.id}' and tab='${req.query.tab}'`, function (err, result) {
        const obj = {
            status: 200,
            data: result
        }
        res.json(obj)
    
        
    })
})
//轮播图跳转页数据
app.get('/video/:id', (req, res) => {
    connection.query(`select * from sheet where tab='${req.params.id}' limit 0,${req.query.page}`, function (err, result) {
        const obj = {
            status: 200,
            data: result
        }
        res.json(obj)
   
     
        
    })
})
//搜索查询后的数据
app.get('/search', (req, res) => {
    connection.query(`select * from detail where title Like '%${req.query.keyword}%' `, function (err, result) {
        const obj = {
            status: 200,
            data: result
        }
        res.json(obj)
    
     
        
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))