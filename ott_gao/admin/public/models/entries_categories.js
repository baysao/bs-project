define(["promise!models/authen"],function(token){
	var item_type = "entries_categories";
	var api_path = "/api/" + item_type+ "?access_token=" + encodeURIComponent(token);

	var collection = new webix.DataCollection({
		url:api_path,
		save: api_path
	});
	return {
		data: collection
	};
});