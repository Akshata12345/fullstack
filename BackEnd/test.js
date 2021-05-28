var express = require('express'),
router = express.Router();

const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const compRoutes = require('./routes/company');
var app = express();
mongoose.connect('mongodb://localhost:27017/configdb?readPreference=primary',
{ useNewUrlParser: true })
.then(()=>{console.log('MONGODB  Connected:' );})
.catch((v)=>{console.log('Connection to MONGODB failed');
console.log(v);})

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers",
              "Origin,X-Requested-With,Content-Type,Accept,Authorization");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    next();});

    
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.urlencoded({limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));
app.use("/api/con",compRoutes);
app.set ('port', (process.env.PORT || 5000));
app.use(express.static(__dirname+ '/routes'));
app.get('*/',(request  , response, next ) => {
   next();
});

app.listen(app.get('port'), function(){
    console.log('app runs',app.get('port'));
});

