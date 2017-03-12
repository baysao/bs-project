define(["views/webix/ckeditor"], function(){

	var layout = {
		view: "form",
		id: "categories_new",
		elementsConfig:{

			labelWidth: 130
		},
		scroll: true,
		elements:[
			{view: "text", name: "id", label: "ID", readonly:true},
			{view: "text", name: "name", label: "Name"},
			{view: "checkbox", name: "is_default", label: "Default",value: 1},
			{view: "textarea", name: "desc", label: "Description",gravity:1,minHeight:80},
			{}
		]
	};

	return {
		$ui:layout
	};
	

});