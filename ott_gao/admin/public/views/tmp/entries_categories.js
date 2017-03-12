define([
		"app",
	"views/entries_categories/item_list",
	"views/entries_categories/item_new",
], function(app, item_list, item_new){

	var controls = [
		{ view: "button", css: "button_primary button_raised", type: "iconButton", icon: "plus", label: "Add order", width: 150, click: function(){
			app.show("/app/entries_category");
		}},
		{},
		{view:"richselect", id:"order_filter", value: "all", maxWidth: 400, minWidth: 250, vertical: true, labelWidth: 100, options:[
			{id:"all", value:"All"},
			{id:"new", value:"Need Invoicing"},
			{id:"ready", value:"Ready to Ship"},
			{id:"completed", value:"Completed"},
			{id:"cancelled", value:"Cancelled"}
		],  label:"Filter orders", on:{
			onChange:function(){
				//var val = this.getValue();
				//if(val=="all")
				//	$$("orderData").filter("#status#","");
				//else
				//	$$("orderData").filter("#status#",val);
			}
		}
		}
	];
	var layout = {
		type: "material",
		rows: [
			{
				height: 40,
				css:"bg_clean",
				cols: controls
			},
			{
				rows:[
					{
						margin:10,
						rows:[
							item_list
						]

					},
					{
						view: "toolbar",
						paddingX:5,
						paddingY:5,
						height:40,
						cols:[{
							view:"pager", id:"pagerA",
							template:"{common.pages()}",
							autosize:true,
							height: 35,
							group:5
						}

						]
					}
				]
			}
		]

	};

	return {
		$ui: layout
	};

});