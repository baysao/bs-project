define([], function () {
    var login_form = {
        view: "form",
        //    id: "userForm",
        //    width:300,
        //    css: "comp_center",
        elementsConfig: {
            labelWidth: 120
        },
        elements: [
            {view: "text", name: "email", label: "Email"},
            {view: "text", type: "password", name: "password", label: "Password"},
            {
                margin: 10,
                paddingX: 2,
                borderless: true,
                cols: [
                    //{view: "button", css: "button_danger", label: "Delete", type: "form", align: "left"},
                    {},
                    {view: "button", css: "", label: "Reset", align: "right"},
                    {
                        view: "button",
                        id: 'js-login',
                        css: "button_primary button_raised",
                        label: "Login",
                        type: "form",
                        align: "right"
                    }
                ]
            }

        ]

    }
    var layout = {
        type: 'material',
        //width: 400,
        cols: [
            {
                width: 400,
                rows: [
                    {
                        view: "toolbar",
                        css: "highlighted_header header1",
                        paddingX: 5,
                        paddingY: 5,
                        height: 40,
                        cols: [
                            {
                                "template": "<span class='webix_icon fa-male'></span>Login",
                                "css": "sub_title2",
                                borderless: true
                            },
                            //{
                            //    view: "button", css: "button_transparent", label: "Close", width: 80
                            //}
                        ]
                    },
                    login_form
                ]
            }
        ]


    }
    return {
        $ui: layout,
        $oninit: function (view, scope) {
            $$('js-login').attachEvent('onItemClick', function () {
                var form = this.getFormView();
                var values = form.getValues();
                if (values && values.email && values.password) {
                    Meteor.loginWithPassword(values.email, values.password, function (err) {
                        if (err) {
                            webix.message({type: "error", text: err.message});
                            return false;
                        } else {
                            routie.navigate('!/app/dashboard');
                        }
                    })
                } else {
                    webix.message({type: "error", text: "Form invalid"});
                }
            })
        }
    }
})