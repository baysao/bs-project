define([], function(){

	var layout = {
		view: "form",
		id: "campaigns_new",
		elementsConfig:{
			labelWidth: 130
		},
		scroll: true,
		elements:[
			{view: "text", name: "cc_id", label: "ID", readonly:true},
			{view: "text", name: "idSite", label: "ID Site"},
			{view: "text", name: "name", label: "Name"},
			{view: "text", name: "status", label: "Status"},
			{view: "text", name: "type", label: "Type"},
			{view: "datepicker", name: "start_date", label: "Start Date"},
			{view: "datepicker", name: "end_date", label: "End Date"},
			{view: "text", name: "spendings_limit", label: "Spendings Limit"},
			{view: "checkbox", name: "tracking_enabled", label: "Tracking Enabled",
				id: "campaigns_new_trackEnabled"
			},
			{}
		]
	};

	return {
		$ui:layout,
		$oninit: function(view, scope){
			//$$('campaigns_new').attachEvent('onBindRequest', function(data){
			//	console.log(data);
			//})
			//$$('campaigns_new').attachEvent('onBeforeLoad', function(data){
			//	console.log(data);
			//})
			//$$('campaigns_new_trackEnabled').attachEvent('onBeforeRender', function(data){
			//	console.log(data);
			//})
		}
	};
	

});