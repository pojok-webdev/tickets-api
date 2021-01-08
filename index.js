var express = require('express'),
  app = express(),
  con = require('./js/connections.js'),
  query = require('./js/queries.js'),
  bodyParser = require('body-parser');
app.engine("html",require("ejs").renderFile);
app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
	next();
});
app.use(bodyParser.json({limit:'10mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}));
app.get('/getclientbyid/:id',(req,res)=>{
  res.header("Access-Control-Allow-Origin","*")
  con.getdata(query.getClientById(req.params),result=>{
    res.send(result)
  })
})
app.get('/getticketbycode/:kdticket',(req,res)=>{
  res.header("Access-Control-Allow-Origin","*")
  con.getdata(query.getticketbycode(req.params),result=>{
      res.send(result)
  })
})
app.get('/getticketbyname/:clientname',(req,res)=>{
  res.header("Access-Control-Allow-Origin","*")
  con.getdata(query.getticketbyname(req.params),result=>{
      res.send(result)
  })
})
app.get('/removeticket/:id',(req,res)=>{
  res.header("Access-Control-Allow-Origin","*")
  con.getdata(query.removeticket(req.params),result=>{
      res.send(result)
  })
})
app.get('/backupticket/:id',(req,res)=>{
  res.header("Access-Control-Allow-Origin","*")
  con.getdata(query.backupticket(req.params),result=>{
      res.send(result)
  })
})
app.get('/tickettrash/:segment/:offset',(req,res)=>{
  res.header("Access-Control-Allow-Origin","*")
  con.getdata(query.tickettrash(req.params),result=>{
      res.send(result)
  })
})
app.get('/restoreticket/:id',(req,res)=>{
  res.header("Access-Control-Allow-Origin","*")
  con.getdata(query.restoreticket(req.params),result=>{
      res.send(result)
  })
})
app.get('/removedeletedticket/:id',(req,res)=>{
  res.header("Access-Control-Allow-Origin","*")
  con.getdata(query.removedeletedticket(req.params),result=>{
      res.send(result)
  })
})
app.get('/ticketsamount/:status',(req,res)=>{
  res.header("Access-Control-Allow-Origin","*")
  con.getdata(query.ticketsamount(req.params),result=>{
    res.send(result)
  })
})
app.get('/getdeletedticketbycode/:kdticket',(req,res)=>{
  res.header("Access-Control-Allow-Origin","*")
  con.getdata(query.getdeletedticketbycode(req.params),result=>{
      res.send(result)
  })
})
app.get('/updateticketcodebyid/:kdticket/:id',(req,res)=>{
  res.header("Access-Control-Allow-Origin","*")
  con.getdata(query.updateTicketCodeById(req.params),result=>{
      res.send(result)
  })
})
app.get('/getfu/:ticket_id',(req,res)=>{
  res.header("Access-Control-Allow-Origin","*")
  con.getdata(query.getfu(req.params),result=>{
    res.send(result)
  })
})
app.get('/backupfu/:id',(req,res)=>{
  res.header('Access-Control-Allow-Origin','*')
  con.getdata(query.backupfu(req.params),result=>{
    res.send(result)
  })
})
app.get('/removefu/:id',(req,res)=>{
  res.header('Access-Control-Allow-Origin','*')
  con.getdata(query.removefu(req.params),result=>{
    res.send(result)
  })
})
app.post('/searchclientbyname',(req,res)=>{
  con.getdata(query.searchClientByName(req.body),result=>{
    res.send(result)
  })
})
app.post('/searchupstreambyname',(req,res)=>{
  con.getdata(query.searchUpstreamByName(req.body),result=>{
    res.send(result)
  })
})
app.post('/saveticket',(req,res)=>{
  res.header('Access-Control-Allow-Origin','*')
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  con.getdata(query.saveTicket(req.body),result=>{
    res.send(result)
  })
})
app.listen(process.env.PORT||20201)
