var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	locals.filters = {
		category: req.params.category,
	};
	locals.data = {
		posts: [],
		categories: [],
	};

	// Load the current quinessomos
	view.query('doctores', keystone.list('Doctores').model.find().sort('sortOrder'));

	// Load the current quinessomos
	view.query('quienessomos', keystone.list('QuienesSomos').model.find().where('name', 'QS'));
	
	// Load the current quinessomos
	view.query('servicios', keystone.list('Servicios').model.find().sort('sortOrder'));

	// Load the galleries by sortOrder
	view.query('slider', keystone.list('Slider').model.find().sort('sortOrder'));

	// Load the galleries by sortOrder

	view.query('galleries', keystone.list('Gallery').model.find().where( 'name', 'galeria'));
	view.query('unidades', keystone.list('Unidades').model.find().sort('sortOrder'));

	// Load all categories
	view.on('init', function (next) {




		keystone.list('PostCategory').model.find().sort('name').exec(function (err, results) {

			if (err || !results.length) {
				return next(err);
			}

			locals.data.categories = results;

			// Load the counts for each category
			async.each(locals.data.categories, function (category, next) {

				keystone.list('Post').model.count(1).where('categories').in([category.id]).exec(function (err, count) {
					category.postCount = count;
					next(err);
				});

			}, function (err) {
				next(err);
			});
		});
	});

	// Load the current category filter
	view.on('init', function (next) {

		if (req.params.category) {
			keystone.list('PostCategory').model.findOne({ key: locals.filters.category }).exec(function (err, result) {
				locals.data.category = result;
				next(err);
			});
		} else {
			next();
		}
	});

	exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	

	

	

};

	// Load the posts
	view.on('init', function (next) {

		var q = keystone.list('Post').paginate({
			page: req.query.page || 1,
			perPage: 4,
			maxPages: 4,
			filters: {
				state: 'published',

			},
		})
			.sort('-publishedDate')
			.populate('author categories');

		if (locals.data.category) {
			q.where('categories').in([locals.data.category]);
		}

		q.exec(function (err, results) {
			locals.data.posts = results;
			next(err);
		});
	});



	// Render the view
	view.render('index');

};
