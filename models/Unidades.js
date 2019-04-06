var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Unidades Model
 * =============
 */

var Unidades = new keystone.List('Unidades', {

	singular: 'Unidades',
	plural: 'Unidades',
	autokey: { from: 'name', path: 'key', unique: true },
});

Unidades.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
	heroImage: { type: Types.CloudinaryImage },
	images: { type: Types.CloudinaryImages },
});

Unidades.register();
