var task = require('../proxys/task');
var validator = require('validator');
var mongoose = require('mongoose');
/**
 * 添加任务
 * @param {[type]}   req  [description]
 * @param {[type]}   res  [description]
 * @param {Function} next [description]
 */
exports.addTask = function(req,res,next){
	var params = {};
	params.id = req.session.uid;
	params.task_name = validator.trim(req.body.task_name);
	params.task_description = validator.trim(req.body.task_description);
	params.tomato_count = validator.trim(req.body.tomato_count);
	params.task_enddate = validator.trim(req.body.task_enddate);
	task.addTask(params,function(err){
		if(err){
			res.json({
				code:500,
				msg:'添加任务失败'
			});
		}else{
			res.json({
				code:200,
				msg:'添加任务成功'
			});
		}
	});
};
/**
 * 修改任务
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.updateTask = function(req,res,next){
	var params = {};
	var id = req.body.id;
	params.task_name = validator.trim(req.body.task_name);
	params.task_description = validator.trim(req.body.task_description);
	params.task_tomato_count = req.body.task_tomato_count;
	params.task_enddate = req.body.task_enddate;
	task.updateTask(id,params,function(err){
		if(err==0){
			res.json({
				code:200,
				msg:'没有此任务或此任务正在进行中'
			});
		}else{
			res.json({
				code:500,
				msg:'修改任务成功'
			});
		}
	});
};
/**
 * 删除任务
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.deleteTask = function(req,res,next){
	var id = req.body.id;
	task.deleteTask(id,function(err){
		if(err){
			res.json({
				code:500,
				msg:'删除任务失败'
			});
		}else{
			res.json({
				code:200,
				msg:'删除任务成功'
			});
		}
	});
};
/**
 * 查找个人的所有任务
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.findTask = function(req,res,next){
	task.findTask(req.session.uid,function(err,task){
		if(err){
			res.json({
				code:500,
				msg:'查询任务失败'
			});
		}else{
			res.json({
				code:200,
				msg:task
			});
		}
	});
};
/**
 * 更新番茄数量
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.updateTomatoCount = function(req,res,next){
	var id = req.body.id;
	task.updateTomatoCount(id,function(err){
		if(err==0){
			res.json({
				code:500,
				msg:'此任务已完成'
			});
		}else{
			res.json({
				code:200,
				msg:'更新番茄钟成功'
			});
		}
	});
};
/**
 * 更新任务状态
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.updateTaskStatus = function(req,res,next){
	var id = req.body.id;
	task.updateTaskStatus(id,function(err){
		if(err){
			res.json({
				code:500,
				msg:'更新失败'
			});
		}else{
			res.json({
				code:200,
				msg:'更新成功'
			});
		}
	});
};
/**
 * 查询未完成的任务
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.getNoDoneTask = function(req,res,next){
	task.getNoDoneTask(req.session.uid,function(err,task){
		if(err){
			res.json({
				code:500,
				msg:'查询失败'
			});
		}else{
			res.json({
				code:200,
				msg:task
			});
		}
	});
};
/**
 * 查询已完成的任务
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.getDoneTask = function(req,res,next){
	task.getNoDoneTask(req.session.uid,function(err,task){
		if(err){
			res.json({
				code:500,
				msg:'查询失败'
			});
		}else{
			res.json({
				code:200,
				msg:task
			});
		}
	});
};
/**
 * 查询正在做的任务
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.getDoingTask = function(req,res,next){
	task.getDoingTask(req.session.uid,function(err,task){
		if(err){
			res.json({
				code:500,
				msg:'查询失败'
			});
		}else{
			res.json({
				code:200,
				msg:task
			});
		}
	});
};
/**
 * 获取未完成的任务数量
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.getNoDoneCount = function(req,res,next){
	task.getNoDoneTask(req.session.uid,function(err,task){
		if(err){
			res.json({
				code:500,
				msg:'查询失败'
			});
		}else{
			res.json({
				code:200,
				msg:task.length
			});
		}
	});
};
/**
 * 获取已完成的任务数量
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.getDoneCount = function(req,res,next){
	task.getDoneTask(req.session.uid,function(err,task){
		if(err){
			res.json({
				code:500,
				msg:'查询失败'
			});
		}else{
			res.json({
				code:200,
				msg:task.length
			});
		}
	});
};
/**
 * 获取正在进行的任务数量
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.getDoingCount = function(req,res,next){
	task.getDoingTask(req.session.uid,function(err,task){
		if(err){
			res.json({
				code:500,
				msg:'查询失败'
			});
		}else{
			res.json({
				code:200,
				msg:task.length
			});
		}
	});
};