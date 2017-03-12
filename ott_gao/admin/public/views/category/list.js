define(["promise!models/authen"],function(token){
	//console.log(authen);
	//return authen.then(function(token){
		return {
			$ui:{
				rows:[
					{
						view: "form",

						paddingX:5,
						paddingY:5,
						margin: 2,
						rows:[
							{view: "label", label: "Find product:"},
							{view: "search", placeholder: "Type here..."}
						]
					},
					{
						view: "list",
						id: "list",
						select: true,
						template: "#name#",
						url: "/api/categories?access_token=" + encodeURIComponent(token),
						save: "/api/categories?access_token=" + encodeURIComponent(token)
					}
				]
			}
		};
	//})
});