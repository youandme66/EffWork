/**
 * 处理用户的错误请求
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.login = function(req,res,next){
	if(req.session.uid){
		res.json({
			code:200,
			msg:{
				islogin:true
			}
		});
	}else{
		next();
	}
};
/**
 * 判断用户是否登录
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.islogin = function(req,res,next){
	if(req.session.uid){
		next();
	}else{
		res.json({
			code:200,
			msg:'请先登录'
		});
	}
};