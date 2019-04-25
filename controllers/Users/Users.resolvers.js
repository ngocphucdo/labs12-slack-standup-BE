const db = require('../../data/dbconfig');
const UsersModel = require('./Users.model');

module.exports = {
	Users,
	User,
	UsersByRoles,
	UsersByTeam,
	UserByEmail
};

function Users(parent, args, ctx, info) {
	return UsersModel.find();
}

function User(parent, { id, email }, ctx, info) {
	const user = UsersModel.findById(id);
	return user;
}

function UsersByRoles(parent, { roles }, ctx, info) {
	return UsersModel.findBy(roles);
}

function UsersByTeam(parent, { teamId }, ctx, info) {
	const users = UsersModel.findByTeam(teamId);
	return users;
}

async function UserByEmail(parent, { email }, ctx, info) {
	const [user] = await db('users').where({ email });
	return user;
}