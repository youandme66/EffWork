var models = require('../models');
var Task = models.task;
/**
 * 添加任务
 * @param {ObjectId}
 * @param {Object}
 * @param {Function}
 * @return {null} 
 */
exports.addTask = function(params, callback) {
	var date = new Date();
	var task = new Task();
	task.user_id = params.id;
	task.task_name = params.task_name;
	task.task_description = params.task_description;
	task.tomato_count = params.tomato_count;
	task.task_begindate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
	task.task_enddate = params.task_enddate;
	task.save(callback);
};
/**
 * 修改任务
 * @param  {ObjectId}
 * @param  {Object}
 * @param  {Function}
 * @return {null}
 */
exports.updateTask = function(id, params, callback) {
	Task.find({"_id": id,"task_status": -1}, function(err, task) {
		if (!task) {
			return callback(0);
		} else {
			task[0].task_name = params.task_name;
			task[0].task_description = params.task_description;
			task[0].tomato_count = params.task_tomato_count;
			task[0].task_enddate = params.task_enddate;
			task[0].save(callback);
		}
	});
};
/**
 * 删除任务
 * @param  {ObjectId}
 * @param  {Function}
 * @return {null}
 */
exports.deleteTask = function(id, callback) {
	Task.remove({
		"_id": id,
		"task_status": -1
	}, callback);
};
/**
 * 查询任务
 * @param  {Function}
 * @return {null}
 */
exports.findTask = function(id,callback) {
	Task.find({"user_id":id}, callback);
};
/**
 * 添加已完成的番茄数
 * @param  {ObjectID}
 * @param  {Function}
 * @return {null}
 */
exports.updateTomatoCount = function(id, callback) {
	Task.findById(id, function(err, task) {
		if(task.task_status==1){
			callback(0);
		}else{
			task.done_tomatoconut++;
			task.task_status = 0;
			task.save(callback);
		}	
	});
};
/**
 * 完成任务
 * @param  {ObjectId}
 * @param  {Function}
 * @return {null}
 */
exports.updateTaskStatus = function(id, callback) {
	Task.findById(id, function(err, task) {
		task.task_status = 1;
		task.save(callback);
	});
};
/**
 * 获得未完成任务
 * @param  {[type]}   id       [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
exports.getNoDoneTask = function(id,callback){
	Task.find({"user_id":id,"task_status":-1},callback);
};
/**
 * 获得已完成任务
 * @param  {[type]}   id       [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
exports.getDoneTask = function(id,callback){
	Task.find({"user_id":id,"task_status":1},callback);
};
/**
 * 获得正在进行中的任务
 * @param  {[type]}   id       [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
exports.getDoingTask = function(id,callback){
	Task.find({"user_id":id,"task_status":0},callback);
};
