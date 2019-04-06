var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'quienessomos';
	

	// Load the current quinessomos
	view.query('quienessomos', keystone.list('QuienesSomos').model.find().sort('sortOrder'));

	

	// Render the view
	view.render('quienessomos');
};
