define([
	"views/category/list",
	"views/category/editor",

	"views/modules/product_upload",
	"views/modules/product_meta"
], function(category_list,editor,upload,meta){
	//return search.then(function(category_list){
	//return webix.promise.all([search],function(deps){
	//	var category_list = deps[0];
		var layout = {
			type: "material",
			cols:[
				category_list,
				{
					gravity: 2.2,
					type: "line",
					rows:[
						{ rows: [{
							view: "tabbar", multiview: true, optionWidth: 100,
							options:[
								{id: "category_editor", value: "Main"},
								//{id: "imagesView", value: "Images"},
								//{id: "metaView", value: "Meta"}
							]
						}]
						},
						{
							cells:[
								editor,
								//upload,
								//meta
							]
						},
						{

							view: "form",
							id: "category_form",
							css: "highlighted_header header6",
							paddingX:5,
							paddingY:5,
							height:40,

							cols:[
								{ view: "button", id: "category_button_save", css: "button_primary button_raised", type: "form", icon: "plus", label: "Save", width: 150},
								{ view: "button", id: "category_button_save_new", css: "button_primary button_raised", type: "form", icon: "plus", label: "Save as New", width: 150},
								{ view: "button", id: "category_button_reset", css: "button2", icon: "angle-left", label: "Reset", width: 150},

								{},
								{ view: "button", id: "category_button_delete", css: "button_danger button0", icon: "times", label: "Delete", width: 150}
							]
						}
					]
				}
			]
		};


		return {
			$ui:layout,
			$oninit:function(){
				var category_list = $$('list');
				var category_editor = $$('category_editor');
				$$("category_editor").bind($$("list"));
				$$("category_button_reset").attachEvent("onItemClick", function(){
					category_editor.clear();
				})
				$$("category_button_delete").attachEvent("onItemClick", function(){
					if(category_list.getSelectedId()) {
						category_list.remove(category_list.getSelectedId());
					} else {
						webix.message("No item to remove");
					}
				})
				$$("category_button_save").attachEvent("onItemClick", function(){
					category_editor.save();
				})
				$$("category_button_save_new").attachEvent("onItemClick", function(){
					var category_editor_values = $$('category_editor').getValues();
					$$("list").add(_.omit(category_editor_values, "id") , 0);
				})
			}
		}
	//})
});