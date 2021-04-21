const db = require('./db.js');
const { STRING, TEXT, UUID, UUIDV4 } = db.Sequelize;

const Campus = db.define('campus', {
	id: {
		type: UUID,
		primaryKey: true,
		defaultValue: UUIDV4,
	},
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
