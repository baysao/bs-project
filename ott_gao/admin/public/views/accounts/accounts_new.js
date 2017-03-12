define([], function(){

	var layout = {
		view: "form",
		id: "accounts_new",
		elementsConfig:{

			labelWidth: 130
		},
		scroll: true,

		elements:[
			{
				cols: [
					{
						view: 'template',
						id: "entry_avatar_view",
						width: 100,
						height: 100,
						data: {
							src: "http://dp.gao.easyvideo.vn/storage/content/img/no_user.png",
							size: 90
						},
						template: function (obj) {
							return '<img src="' + obj.src + '" style="cursor:pointer; width:' + obj.size + 'px; height:' + obj.size + 'px;" />';
						}
					},
					{},
					{
						rows: [
							{
								view: "uploader", upload: "/upload?prefix=/image/accounts",
								multiple: false, accept: "image/png, image/gif, image/jpg",
								id: "upload_avatar",
								value: "Add avatar",
								width: 200,
								height: 40,
								css: "button_primary button_raised",
								autosend: true
							},

						]
					}
				]
			},
			{view: "text", name: "fullname", label: "Full Name"},
			{view: "text", name: "username", label: "Username"},
			{view: "text", type:"password", id:"form_pass", name: "password", label: "Password"},
			{view: "text", type:"password", id:"form_pass_conf", name: "password2", label: "Confirm"},
			{view: "text", name: "email", label: "Email"},
			{view: "checkbox", name: "enabled", label: "Enabled",value: 1},
			{view: "textarea", name: "desc", label: "Description",gravity:1,minHeight:80},
			{}
		],
		rules:{
			"username":webix.rules.isNotEmpty,
			"password":webix.rules.isNotEmpty,
			"password2":webix.rules.isNotEmpty
		},
	};

	return {
		$ui:layout,
		$oninit: function(view, scope){
			$$('form_pass_conf').attachEvent('onChange', function(pass2){
				console.log(pass2);
				var pass = $$('form_pass').getValue();
				console.log(pass);
				if(pass != pass2) {
					webix.message({type:"error", text:"Password not match"});
				}
			})
		}
	};


});
