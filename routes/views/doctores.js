var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.filters = {
		doctores: req.params.doctores,
	};
	locals.data = {
		doctores: [],
	};

	// Load the current doctores
	view.on('init', function (next) {

		var q = keystone.list('doctores').model.findOne({
			
			slug: locals.filters.doctores,
		});


	});

	

	// Render the view
	view.render('doctores');
};
