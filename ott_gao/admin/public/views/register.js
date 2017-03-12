define([], function () {
    var layout = {
        rows: [
            {view: "template", type: "header", template: "Register"},
            {
                view: "form", elements: [
                {view: "text", name: "username", label: "Username"},
                {view: "text", name: "email", label: "Email"},
                {view: "text", type: "password", name: "password", label: "Password"},
                {view: "text", type: "password", name: "password2", label: "Confirm"},
                {
                    margin: 10, cols: [
                    {view: "button", "label": "Cancel"},
                    {view: "button", "label": "Register", type: "form", id: 'js-register'}
                ]
                }
            ]
            }
        ]
    }
    return {
        $ui: layout,
        $oninit: function (view, scope) {
            $$('js-register').attachEvent('onItemClick', function () {
                var form = this.getFormView();
                var values = form.getValues();
                Accounts.createUser({
                    email: values.email,
                    password: values.password,
                    profile: {
                        name: values.username
                    }
                }, function (err) {
                    if (err) {
                        if (err.error === 499) {
                            webix.message("verification email sent");
                        } else {
                            webix.message({type: "error", text: err.message});
                        }
                    } else {
                        webix.message("create account successful");
                        routie.navigate('!/app/dashboard');
                    }
                });
            })
        }
    }
})