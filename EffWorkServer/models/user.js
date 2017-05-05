var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
//用户schema原型
var UserSchema = new Schema({
	login_name: {
		type: String,
		required: true,
		default:'用户1'
	},
	password: {
		type: String,
	},
	phone_number: {
		type: String,
	},
	signature: {
		type: String,
	},
	qq_number: {
		type: String
	},
	create_at: {
		type: Date,
		required: true
	},
	isOpenMusic: {
		type: Boolean,
		required: true,
		default: true
	},
	isOpenShake: {
		type: Boolean,
		required: true,
		default: true
	},
	problem: {
		type: String,
	},
	answer: {
		type: String,
	},
	qq_sign:{
		type:String
	},
	isSetProblem:{
		type:Boolean,
		required:true,
		default:false
	}
}, {
	versionKey: false
});
UserSchema.index({
	_id: -1
});
mongoose.model('User', UserSchema);