define([], function(){

	var layout = {
		view: "form",
		id: "cc_accounts_new",
		elementsConfig:{
			labelWidth: 130
		},
		scroll: true,
		elements:[
		    {view: "text", name: "name", label: "Name"},
		    {view: "text", name: "token", label: "Token"},
		    {view: "text", name: "idSite", label: "idSite"},
		    {view: "checkbox", name: "enabled", label: "Enabled"},
            {cols: [
                { view:"counter", name: "cr_warn", label:"CR Warn", step:0.01, value:0.03},
                {},
                { view:"counter", name: "cr_crit",label:"CR Crit", step:0.01, value:0.01},
                ]},
            {cols:[
                { view:"counter", name: "pev_warn", label:"PEV Warn", step:10, value:10},
                {},
                { view:"counter", name: "pev_crit", label:"PEV Crit", step:10, value:10000}
            ]}
		]
	};

	return {
		$ui:layout
	};


});
