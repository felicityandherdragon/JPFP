const db = require('./db.js');
const { STRING, TEXT } = db.Sequelize;

const Campus = db.define('campus', {
	name: {
		type: STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	imageUrl: {
		type: STRING,
		defaultValue:
			'https://180dc.org/wp-content/uploads/2017/11/profile-placeholder.png',
	},
	address: {
		type: STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	description: {
		type: TEXT,
	},
});

module.exports = Campus;
