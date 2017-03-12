define(function(){
	return {
		$ui:{
			//view: "form",
			id: "entry_advertisements",
			//elementsConfig:{
			//	labelWidth: 130
			//},
			rows:[
				{view: "text", placeholder: "Type here...", name: "meta_title", label: "Title"},
				{view: "textarea", placeholder: "Type here...", label: "Meta Keywords",gravity:1,minHeight:80},
				{view: "textarea", placeholder: "Type here...", label: "Meta Description",gravity:1.5,minHeight:80},
				{}
			]
		}
	}
});