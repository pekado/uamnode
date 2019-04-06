var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'slider';

	// Load the galleries by sortOrder
	view.query('slider', keystone.list('Slider').model.find().sort('sortOrder'));

	// Render the view
	view.render('slider');





	

	// Render the view
	view.render('slider');

};
