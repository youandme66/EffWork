var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
//任务schema原型
var TaskSchema = new Schema({
	task_name: {
		type: String,
		required: true
	},
	task_description: {
		type: String
	},
	tomato_count: {
		type: Number,
		required: true
	},
	task_status: {
		type: Number,
		required: true,
		default: -1
	},
	task_begindate: {
		type: Date,
		required: true,
		default: Date.now
	},
	task_enddate: {
		type: Date,
		required: true
	},
	user_id: {
		type: ObjectId,
		required: true
	},
	done_tomatoconut: {
		type: Number,
		required: true,
		default: 0
	},
}, {
	versionKey: false
});
TaskSchema.index({
	_id: -1
});
mongoose.model('Task', TaskSchema);