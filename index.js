var express = require('express'),
  app = express(),
  con = require('./js/connections.js'),
  query = require('./js/queries.js'),
  bodyParser = require('body-parser');
app.engine("html",require("ejs").renderFile);
app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin","*");
	next();
});
app.use(bodyParser.json({limit:'10mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}));
app.get('/getticketbycode/:kdticket',(req,res)=>{
  con.getdata(query.getticketbycode(req.params),result=>{
  res.send(result);
  });
});
app.get('/getclientbyid/:id',(req,res)=>{
  res.header("Access-Control-Allow-Origin","*")
  con.getdata(query.getClientById(req.params),result=>{
    res.send(result)
  })
})

app.listen(process.env.PORT||20201)
