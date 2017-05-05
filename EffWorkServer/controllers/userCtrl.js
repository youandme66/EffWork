var user = require('../proxys/user');
var validator = require('validator');
/**
 * 用户注册
 * @param  {req请求体}
 * @param  {res相应体}
 * @param  {Funtion}
 * @return {null}
 */
exports.register = function(req, res, next) {
	var params = {};
	params.login_name = validator.trim(req.body.login_name);
	params.phone_number = req.body.phone_number;
	params.password = validator.trim(req.body.password);
	params.signatrue = validator.trim(req.body.signature);
	params.qq_number = req.body.qq_number;
	user.findUserByPhone(params.phone_number, function(err, data) {
		if (err) {
			res.json({
				code: 500,
				msg: "注册失败"
			});
		} else {
			if (data) {
				res.json({
					code: 500,
					msg: "已有此用户"
				});
			} else {
				user.addUser(params, function(err) {
					if (err) {
						res.json({
							code: 400,
							msg: '注册失败'
						});
					} else {
						res.json({
							code: 200,
							msg: '注册成功'
						});
					}
				});
			}
		}
	});

};
/**
 * 用户登录
 * @param  {req请求体}
 * @param  {res请求体}
 * @param  {nextFunction}
 * @return {[null]}
 */
exports.login = function(req, res, next) {
	var phone_number = validator.trim(req.body.phone_number);
	var password = validator.trim(req.body.password);
	user.findUserByPhone(phone_number, function(err, user) {
		if (err) {
			res.json({
				code: 500,
				msg: '登录失败'
			});
		} else {
			if (!user) {
				res.json({
					code: 500,
					msg: "无此用户"
				});
			} else {
				if (password == user.password) {
					req.session.uid = user._id;
					res.json({
						code: 200,
						msg: "登录成功"
					});
				} else {
					res.json({
						code: 500,
						msg: "密码不正确"
					});
				}
			}
		}
	});
};
/**
 * 第三方登录
 * @param  {req请求体}
 * @param  {res相应体}
 * @param  {Function}
 * @return {[null]}
 */
exports.otherLogin = function(req,res,next){
	var qq_sign = validator.trim(req.body.qq_sign);
	user.findUserBySign(qq_sign,function(err,user){
		if(!user){
			user.addUserByqq(qq_sign,function(err){
				if(err){
					res.json({
						code:500,
						msg: '登录失败'
					});
				}else{
					user.findUserBySign(qq.sign,function(err,user){
						if(err){
							res.json({
								code:500,
								msg:'服务器错误'
							});
						}else{
							req.session.uid = user._id;
							res.json({
								code:200,
								msg:'登录成功'
							});
						}
					});
				}
			});
		}else{
			req.session.uid = user._id;
			res.json({
				code:200,
				msg:'登录成功'
			});
		}
	});
};
/**
 * 获得用户信息
 * @param  {req请求体}
 * @param  {res响应体}
 * @param  {Function}
 * @return {[null]}
 */
exports.getUserinfo = function(req,res,next){
	user.getUserAllInfo(req.session.uid,function(err,data){
		if(err){
			res.json({
				code:500,
				msg:'服务器错误'
			});
		}else{
			res.json({
				code:200,
				msg:data
			});
		}
	});
};
/**
 * 设置安全问题
 * @param  {req请求体}
 * @param  {res响应体}
 * @param  {Function}
 * @return {[null]}
 */
exports.setSafeProblem = function(req,res,next){
	var params = {};
	params.uid = req.session.uid;
	params.problem = validator.trim(req.body.problem);
	params.answer = validator.trim(req.body.answer);
	user.getUserAllInfo(req.session.uid,function(err,data){
		if(err){
			res.json({
				code:500,
				msg:'设置密保失败'
			});
		}else if(data.isSetProblem==true){
			res.json({
				code:500,
				msg:'你已经设置过密保，不需要再次设置'
			});
		}else{
			user.setSafeProblem(params,function(err){
		if(err){
			res.json({
				code:500,
				msg:'服务器出错'
			});
		}else{
			res.json({
				code:200,
				msg:'添加密保成功'
			});
		}
	});
		}
	})
};
/**
 * 修改个性签名
 * @param  {[type]}   req  [请求体]
 * @param  {[type]}   res  [相应体]
 * @param  {Function} next [下一个中间件]
 * @return {[type]}        [无返回]
 */
exports.changeSignature = function(req,res,next){
	var params = {};
	params.signature = validator.trim(req.body.signature);
	user.updateUserSignature(req.session.uid,params,function(err){
		if(err){
			res.json({
				code:500,
				msg:'修改个性签名失败'
			});
		}else{
			res.json({
				code:200,
				msg:'修改个性签名成功'
			});
		}
	});
};
/**
 * 修改系统设置
 * @param  {[type]}   req  [请求体]
 * @param  {[type]}   res  [相应体]
 * @param  {Function} next [下一个中间件]
 * @return {[type]}        [无返回]
 */
exports.updateUserSetting = function(req,res,next){
	var params = {};
	params.isOpenMusic = validator.trim(req.body.isOpenMusic);
	params.isOpenShake = validator.trim(req.body.isOpenShake);
	user.updateUserSetting(req.session.uid,params,function(err){
		if(err){
			res.json({
				code:500,
				msg:'修改设置失败'
			});
		}else{
			res.json({
				code:200,
				msg:'修改设置成功'
			});
		}
	});
};
/**
 * 修改密码
 * @param  {[type]}   req  [请求体]
 * @param  {[type]}   res  [相应体]
 * @param  {Function} next [下一个中间件]
 * @return {[type]}        [无返回]
 */
exports.updateUserPassword = function(req,res,next){
 	var params = {};
 	params.oldPassword = validator.trim(req.body.oldPassword);
 	params.newPassword = validator.trim(req.body.newPassword);
 	user.updateUserPassword(req.session.uid,params,function(err){
 		if(err==-1){
 			res.json({
 				code:500,
 				msg:'修改失败'
 			});
 		}else if(err==0){
 			res.json({
 				code:500,
 				msg:'原密码错误'
 			});
 		}else{
 			res.json({
 				code:200,
 				msg:'修改成功'
 			});
 		}
 	});
 };

/**
  * 找回密码
  * @param  {[type]}   req  [请求体]
  * @param  {[type]}   res  [相应体]
  * @param  {Function} next [下一个中间件]
  * @return {[type]}        [无返回]
  */
exports.getUserProblem =  function(req,res,next){
 	var params = {};
 	params.phone_number = validator.trim(req.body.phone_number);
 	user.getUserProblem(params,function(err,data){
 		if(err){
 			res.json({
 				code:500,
 				msg:'服务器错误'
 			});
 		}else if(data==null){
 			res.json({
 				code:500,
 				msg:'未找到此手机号'
 			});
 		}else{
 			res.json({
 				code:200,
 				msg:data
 			});
 		}
 	});
 };
exports.findUserPassword = function(req,res,next){
 	var params = {};
 	params.phone_number = req.body.phone_number;
 	var answer = req.body.answer;
 	user.findUserPassword(params,function(err,data){
 		if(err){
 			res.json({
 				code:500,
 				msg:'服务器错误'
 			});
 		}else{
 			if(answer!=data.answer){
 				res.json({
 					code:500,
 					msg:'回答问题错误'
 				});
 			}else{
 				res.json({
 					code:200,
 					msg:'问题回答正确'
 				});
 			}
 		}
 	});
 };
exports.updateUserPassword2 = function(req,res,next){
	var params = {};
	params.phone_number = req.body.phone_number;
	params.password = req.body.password;
	user.updateUserPassword2(params,function(err){
		if(err){
			res.json({
				code:500,
				msg:'密码找回失败'
			});
		}else{
			res.json({
				code:200,
				msg:'密码找回成功'
			});
		}
	});
};
/**
 * 获取用户设置
 * @param  {[type]}   req  [请求体]
 * @param  {[type]}   res  [相应体]
 * @param  {Function} next [下一个中间件]
 */
exports.getUserSetting = function(req,res,next){
	user.getUserSetting(req.session.uid,function(err,data){
		if(err){
			res.json({
				code:500,
				msg:'获取失败'
			});
		}else{
			res.json({
				code:200,
				msg:data
			});
		}
	});
};
/**
 * 退出登录
 * @param  {[type]}   req  [请求体]
 * @param  {[type]}   res  [相应体]
 * @param  {Function} next [下一个中间件]
 * @return {[type]}        [description]
 */
exports.logout = function(req,res,next){
	req.session.destroy(function(){
		res.json({
			code:200,
			msg:'退出成功'
		});
	});
};

