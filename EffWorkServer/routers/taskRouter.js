var express = require('express');
var taskRouter = express.Router();
var task = require('../controllers/taskCtrl');
var auth = require('../middlewares/auth');
/**
 * 添加任务路由
 */
taskRouter.post('/addTask',auth.islogin,task.addTask);
/**
 * 更新任务路由
 */
taskRouter.post('/updatetask',auth.islogin,task.updateTask);
/**
 * 删除任务路由
 */
taskRouter.post('/deleteTask',auth.islogin,task.deleteTask);
/**
 * 查询任务路由
 */
taskRouter.post('/findtask',auth.islogin,task.findTask);
/**
 * 更新番茄钟数量路由
 */
taskRouter.post('/updateTomatoCount',auth.islogin,task.updateTomatoCount);
/**
 * 更新任务状态路由
 */
taskRouter.post('/updateTaskStatus',auth.islogin,task.updateTaskStatus);
/**
 * 获得未完成任务
 */
taskRouter.post('/getNoDoneTask',auth.islogin,task.getNoDoneTask);
/**
 * 获得已完成任务
 */
taskRouter.post('/getDoneTask',auth.islogin,task.getDoneTask);
/**
 * 获得正在进行的任务
 */
taskRouter.post('/getDoingTask',auth.islogin,task.getDoingTask);
/**
 * 获得未完成任务数量
 */
taskRouter.post('/getNoDoneCount',auth.islogin,task.getNoDoneCount);
/**
 * 获得完成任务的数量
 */
taskRouter.post('/getDoneCount',auth.islogin,task.getDoneCount);
/**
 * 获得正在进行中的任务数量
 */
taskRouter.post('/getDoingCount',auth.islogin,task.getDoingCount);
module.exports = taskRouter;