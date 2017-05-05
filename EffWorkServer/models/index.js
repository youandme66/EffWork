var mongoose = require('mongoose');
var mongodbCfg = require('../configs/mongodbCfg');
/**
连接数据库
*/
mongoose.connect(mongodbCfg.db, {
	server: {
		poolSize: 100
	}
}, function(err) {
	if (err) {
		process.exit(1);
	} else {
		console.log('数据库连接成功');
	}
});
/**
请求对象schema
*/
require('./user');
require('./task');
/**
制作数据库model，并导出
*/
exports.user = mongoose.model('User');
exports.task = mongoose.model('Task');