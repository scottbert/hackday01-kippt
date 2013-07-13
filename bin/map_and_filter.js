module.exports = (function(input){
	var parsed,
	    clips = [],
	    mappedAndFiltered,
	    filtered,
		mapping,
		objects,
		arrayify;
	
	mapping = function(input){
		var output = {
	  		"app_url": input.app_url,
	  		"full_name": input.user.full_name,
	  		"created": input.created,
	  		"url": input.url,
	  		"notes": input.notes,
	  		"list": input.list,
	  		"resource_uri": input.resource_uri
		}
		return output;
	};
	
	arrayify = function(input){
		var output = [];
		for (var key in input) {
			output.push(input[key]);
		}
		return output;
	};
	
	parsed = JSON.parse(input);
	objects = parsed.objects;
	clips = arrayify(objects);
	mappedAndFiltered = clips.map(mapping);

	return mappedAndFiltered;
});
