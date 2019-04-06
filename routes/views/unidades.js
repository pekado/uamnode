var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'unidades';

	// Load the galleries by sortOrder
	view.query('unidades', keystone.list('unidades').model.find().sort('sortOrder'));

	// Render the view
	view.render('unidades');





	

	// Render the view
	view.render('index');

};

