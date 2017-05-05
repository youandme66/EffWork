var express = require('express');
var userRouter = express.Router();
var user = require('../controllers/userCtrl');
var auth = require('../middlewares/auth');
/**
 * 用户注册路由
 */
userRouter.post('/register',user.register);
/**
 * 用户登录路由
 */
userRouter.post('/login',user.login);
/**
 * 第三方登录路由
 */
userRouter.post('/otherLogin',user.otherLogin);
/**
 * 获取用户信息路由
 */
userRouter.post('/getUserinfo',auth.islogin,user.getUserinfo);
/**
 * 设置密保路由
 */
userRouter.post('/setSafeProblem',auth.islogin,user.setSafeProblem);
/**
 * 设置个性签名路由
 */
userRouter.post('/changeSignature',auth.islogin,user.changeSignature);
/**
 * 更改用户设置路由
 */
userRouter.post('/updateUserSetting',auth.islogin,user.updateUserSetting);
/**
 * 修改密码路由
 */
userRouter.post('/updatePassword',auth.islogin,user.updateUserPassword);
/**
 * 获得用户密保问题路由
 */
userRouter.post('/getProblem',user.getUserProblem);
/**
 * 验证密保问题路由
 */
userRouter.post('/validator',user.findUserPassword);
/**
 * 找回密码路由
 */
userRouter.post('/findPassword',user.updateUserPassword2);
/**
 * 获得用户设置路由
 */
userRouter.post('/getInfo',auth.islogin,user.getUserSetting);
/**
 * 退出登录路由
 */
userRouter.post('/logout',auth.islogin,user.logout);
module.exports = userRouter;

