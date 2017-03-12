define(["models/dev_forms"], function (dev_forms) {
    var layout = {
        id: "dev_forms_new",

        rows: [

            {
                view: "select", name: "collection", label: "Collection", value: 'entries', id: "dfn_type",
                options: dev_forms.collections
            },
            {},
            {
                cols: [
                    {
                        view: 'button',
                        id: "dfn_add_field",
                        css: "button_primary button_raised",
                        label: "Add",
                        inputWidth: 100
                    },
                ]
            }
        ]
    };

    return {
        $ui: layout,
        $oninit: function () {
            var dev_forms_new = $$('dev_forms_new');
            var dev_forms_add_field = $$('dfn_add_field');
            dev_forms_add_field.attachEvent('onItemClick', function () {
                dev_forms_new.addView(dev_forms.new_field(dev_forms_new), 1);
            })
        }
    };


});