define([
	"webix-components/ckeditor/ckeditor"], function(){
	var form = {
		view: "form",
		id: "category_editor",
		elementsConfig:{

			labelWidth: 130
		},
		scroll: true,
		elements:[
			{view: "text", placeholder: "Category Name", name: "name", label: "Name"},
			{ view:"segmented", name: "verified", label: "Verified", options:[{id:"0", value:"Not Verified"}, {id:"1", value:"Verified"}]},
			{ view:"slider", label:"Rating", value:5, min:1, max: 10,
				name:"rating_average", type: "alt",
				title:webix.template("#value#")},
			{view: "counter", value: 0, name: "rating_total", label: "Total rating"},
			{ view: "label", label: "Full description", height:30},
			{ id:'editor', name: "desc", view:"ckeditor", value:"", editor:{language: 'en'}, minHeight: 220},

			{}
		]
	};

	var layout = form;

	return {
		$ui:layout
	};
	

});