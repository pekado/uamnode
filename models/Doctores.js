var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Doctores Model
 * ==========
 */

var Doctores = new keystone.List('Doctores', 
	{	autokey: { from: 'name', path: 'slug', unique: true },
});

Doctores.add({
	name: { type: String, required: true },
	
	title: { type: String },
	heroImage: { type: Types.CloudinaryImage },
	content: { type: Types.Textarea, min: 10, max: 70, wysiwyg: true, height: 400 },
	
	
	
});
Doctores.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Doctores.register();