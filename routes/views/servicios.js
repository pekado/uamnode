var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'servicios';
	

	// Load the current quinessomos
	view.query('servicios', keystone.list('Servicios').model.find().sort('sortOrder'));

	

	// Render the view
	view.render('servicios');
};
