var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Slider Model
 * =============
 */

var Slider = new keystone.List('Slider', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Slider.add({
	name: { type: String, required: true },
	images: { type: Types.CloudinaryImages },
});

Slider.register();