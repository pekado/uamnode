var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Servicios Somos Model
 * ==========
 */

var Servicios = new keystone.List('Servicios', {
	
	autokey: { from: 'name', path: 'key', unique: true },
});

Servicios.add({
	name: { type: String, required: true },
	
	title: { type: String },
	heroImage: { type: Types.CloudinaryImage },
	content: { type: Types.Textarea, min: 10, max: 70, wysiwyg: true, height: 400 },
	
	
	
});

Servicios.register();