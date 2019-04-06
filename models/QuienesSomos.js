var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Quines Somos Model
 * ==========
 */

var QuienesSomos = new keystone.List('QuienesSomos', {
	
	autokey: { from: 'name', path: 'key', unique: true },
});

QuienesSomos.add({
	name: { type: String, required: true },
	content: { type: Types.Text, wysiwyg: true, height: 400 },
	images: { type: Types.CloudinaryImages },
	
});

QuienesSomos.register();