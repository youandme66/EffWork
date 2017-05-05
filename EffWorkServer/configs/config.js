var config = {
	baseCfg: {
		port: 3000
	},
	mongodbCfg: {
		host: 'localhost',
		port: '27017',
		db: 'connectSession'
	},
	sessionCfg: {
		secret:'EffectWork',
		host: 'localhost',
		port: '27017',
		db: 'connectSession'
	}
};
module.exports = config;