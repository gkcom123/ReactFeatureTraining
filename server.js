const express = require('express'), 
bodyParser = require('body-parser');
var delay = require('express-delay');


const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(bodyParser.json());
const appEventRouter = express.Router();

appEventRouter.route('/')
.get((req,res)=>{
    res.send('Index');  

})
app.use(delay(4000));

app.use('/api', appEventRouter);
app.get('/api/userList', ((req,res)=>{
    console.log(req.body);
    const result = {
        "status": "success",
        data: [{userName:'Saab'},{userName:'Volvo'},{userName:'BMW'}]
    }
    res.send(result);
}));
app.post('/api/updateUser', ((req,res)=>{
    var reqObj = req.body;
    console.log(reqObj);
    var emailId = reqObj["emailId"];
    var userName = reqObj["userName"];
    const result = {
        "status": "success",
        data: [{userName:'Saab'},{userName:'Volvo'},{userName:'BMW'}]
    }
    res.send(result);
}));
app.delete('/api/user/:id',((req,res)=>{
    var reqObj = req.body;
    //req.params.id
    const result = {
        "status": "success",
        "message":"Deleted Successfully"
    }
    res.send(result);
}));
app.put('/api/updateName',((req,res)=>{
    var reqObj = req.body;
    //req.params.id
    const result = {
        "status": "success",
        "message":"updated Successfully"
    }
    res.send(result);
}));

app.listen(port, ()=> {
    console.log(`Server started on port ${port}`);
});