var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var config = require('./configs/config');
var userRouter = require('./routers/userRouter');
var adminRouter = require('./routers/taskRouter');
var auth = require('./middlewares/auth');
var MongoStore = require('connect-mongo')(session);
var app = express();
/**
解析json和form表单请求体
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
// 跨域请求
app.use(function(req, res, next) {    
    res.setHeader('Access-Control-Allow-Origin', '*');    
    res.header('Access-Control-Allow-Credentials', true);    
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");    
    next();    
});
/**
设置cookie和session
*/
app.use(session({
	secret:'EffectWork',
	resave:true,
	cookie:{maxAge:1000*60*60*24*30},
	saveUninitialized:true,
	store:new MongoStore({url:'mongodb://127.0.0.1:27017/session'})
}));
/**
配置路由
*/
//app.use('/user/login',auth.login);
//app.use('/user/otherLogin',auth.login);
app.use('/task', adminRouter);
app.use('/user', userRouter);
/**
捕捉开发时，404错误
*/
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 400;
	next(err);
});
/**
处理错误
*/
app.use(function(err, req, res, next) {
	res.json({
		status: 400,
		msg: '请求未找到'
	});
});
/**
监听端口
*/
app.listen(config.baseCfg.port);
console.log('正在监听' + config.baseCfg.port);