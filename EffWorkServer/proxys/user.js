var models = require('../models');
var User = models.user;
/**
 * 添加用户
 * @param {Object}
 * @param {Function}
 */
exports.addUser = function(params, callback) {
	var user = new User();
	var date = new Date();
	user.login_name = params.login_name;
	user.phone_number = params.phone_number;
	user.password = params.password;
	user.signature = params.signature;
	user.qq_number = params.qq_number;
	user.create_at = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
	user.save(callback);
};
/**
 * 添加用户
 * @param {Object}
 * @param {Function}
 */
exports.addUserByqq = function(qq_sign, callback) {
	var user = new User();
	var date = new Date();
	user.qq_sign = qq_sign;
	user.create_at = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
	user.save(callback);
};
/**
 * 通过手机号寻找用户
 * @param  {String}
 * @param  {Function}
 * @return {null}
 */
exports.findUserByPhone = function(phone_number, callback) {
	User.findOne({
		"phone_number": phone_number
	}, {
		"password": 1,
		"_id":1
	}, callback);
};
/**
 * 通过QQ寻找用户
 * @param  {String}
 * @param  {Function}
 * @return {null}
 */
exports.findUserByQQ = function(qq_number, callback) {
	User.findOne({
		"qq_number": qq_number
	}, callback);
};
/**
 * 是否进行了第三方登录
 * @param  {string}
 * @param  {Function}
 * @return {[null]}
 */
exports.findUserBySign = function(qq_sign,callback){
	User.findOne({
		"qq_sign":qq_sign,
	},callback);
}
/**
 * 用户是否开启音乐和震动
 * @param  {ObjectId}
 * @param  {Object}
 * @param  {Function}
 * @return {null}
 */
exports.updateUserSetting = function(id, params, callback) {
	User.findById(id, function(err, user) {
		user.isOpenMusic = params.isOpenMusic;
		user.isOpenShake = params.isOpenShake;
		user.save(callback);
	});
};
/**
 * 修改密码
 * @param  {Object}
 * @param  {Function}
 * @return {null}
 */
exports.updateUserPassword = function(id,params, callback) {
	User.findById(id, function(err, user) {
		if(err){
			callback(-1);
		}
		else if(user.password!=params.oldPassword){
			callback(0);
		}else{
		   user.password = params.newPassword;
		   user.save(callback);	
		}
	});
};
/**
 * 找回密码
 * @param  {Object}
 * @param  {Function}
 * @return {null}
 */
exports.findUserPassword = function(params, callback) {
	User.findOne({
		"phone_number": params.phone_number
	}, {
		"answer": 1
	}, callback);
};
/**
 * 修改密码
 * @param  {Object}
 * @param  {Function}
 * @return {null}
 */
exports.updateUserPassword2 = function(params, callback) {
	User.update({
		"phone_number": params.phone_number
	}, {
		"password": params.password
	}, callback);
};
/**
 * 修改签名
 * @param  {ObjectId}
 * @param  {Object}
 * @param  {Function}
 * @return {null}
 */
exports.updateUserSignature = function(id, params, callback) {
	User.findById(id, function(err, user) {
		if(err){
			callback(err);
		}else{
			user.signature = params.signature;
			user.save(callback);	
		}
	});
};
/**
 * 查询个人信息
 * @param  {ObjectId}
 * @param  {Function}
 * @return {null}
 */
exports.getUserInformation = function(id, callback) {
	User.findById(id, {
		"login_name": 1,
		"phone_number": 1,
		"signature": 1,
		"qq_number": 1,
		"create_at": 1,
	}, callback);
};
/**
 * 查询个人设置
 * @param  {ObjectId}
 * @param  {Function}
 * @return {null}
 */
exports.getUserSetting = function(id, callback) {
	User.findById(id, {
		"isOpenMusic": 1,
		"isOpenShake": 1
	}, callback);
};
/**
 * 获得用户设置的问题
 * @param  {Object}
 * @param  {Function}
 * @return {null}
 */
exports.getUserProblem = function(params, callback) {
	User.findOne({
		"phone_number": params.phone_number
	}, {
		"problem": 1
	}, callback);
};
/**
 * 设置密保
 * @param {Object}
 * @param {Function}
 */
exports.setSafeProblem = function(params,callback){
	User.findById(params.uid,function(err,user){
		if(err){
			callback(err);
		}else{
			user.problem = params.problem;
			user.answer = params.answer;
			user.isSetProblem = true;
			user.save(callback);
		}
	});
};
/**
 * 获取用户基本信息
 * @param  {Function}
 * @return {[type]}
 */
exports.getUserAllInfo = function(id,callback){
	User.findById(id,{login_name:1,phone_number:1,signature:1,qq_number:1,create_at:1,isOpenMusic:1,isOpenShake:1,isSetProblem:1},callback);
};