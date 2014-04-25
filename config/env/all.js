'use strict';

var path = require('path'),
	rootPath = path.normalize(__dirname + '/../..');

module.exports = {
	app: {
		title: 'shippable-mean',
		description: 'Example application for setting up Mean.js on Shippable and Heroku',
		keywords: 'example, mean, ci, testing'
	},
	root: rootPath,
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'shippable-mean',
	sessionCollection: 'sessions'
};