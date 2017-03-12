define([
	//"views/webix/ckeditor"
], function(){

	var form = {
		//view: "form",
		id: "entries_distribution",
		//elementsConfig:{
        //
		//	labelWidth: 130
		//},
		//scroll: true,
		rows:[
			{view: "text", placeholder: "Name", name: "name", label: "Name"},
			{view: "multiselect", placeholder: "Select here...", name: "category", label:"Category", vertical: true, options:[
				{id:2, value: "Home furniture"},
				{id:3, value: "Office furniture"},
				{id:1, value: "Wood furniture"}
			]},
			{view: "multiselect", placeholder: "Select here...", name: "tags", label:"Category", vertical: true, options:[
				{id:2, value: "Home furniture"},
				{id:3, value: "Office furniture"},
				{id:1, value: "Wood furniture"}
			]},
			//{view:"richselect", placeholder: "Select here...", name:"status", value: "all",label: "Status", options:[
			//	{id:"1", value:"Published"},
			//	{id:"2", value:"Not published"},
			//	{id:"0", value:"Deleted"}
			//]},
			//{view: "checkbox", name: "in_stock", label: "In stock",value: 1},
			//{ view: "label", label: "Full description", height:30},
			//{ id:'editor', view:"ckeditor", value:"", name:"Description", editor:{language: 'en'}, minHeight: 220},
			{}
		]
	};

	var layout = form;

	return {
		$ui:layout
	};
	

});