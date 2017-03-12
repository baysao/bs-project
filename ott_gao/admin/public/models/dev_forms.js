/**
 * Created by baysao on 21/01/2016.
 */
define([], function () {
    var dev_forms_types = [
        {id: "single", value: "Single"},
        {id: "select", value: "Select"},
        {id: "multiselect", value: "Multi Select"},
    ]
    var dev_forms_collections = [
        {id: "entries", value: "Entries"},
        {id: "entries_categories", value: "Categories"},
    ]
    var new_field = function (form, sid, item) {
        var id = sid || Random.id();
        return {
            view: 'fieldset',
            label: 'Field ' + id,
            id: "dfn_fid_" + id,
            body: {
                rows: [
                    {
                        width: "100%", cols: [{}, {
                        view: "icon", icon: "remove", click: function () {
                            $$('dev_forms_new').removeView("dfn_fid_" + id);
                        }
                    }]
                    },
                    {
                        view: "text",
                        name: "dfn_flabel_" + id,
                        value: item && item["dfn_flabel_" + id] || "",
                        label: "Label"
                    },
                    {
                        view: "text", name: "dfn_fname_" + id, value: item && item["dfn_fname_" + id] || "",
                        label: "Name"
                    },
                    {
                        view: "select", name: "dfn_ftype_" + id,
                        value: item && item["dfn_ftype_" + id] || dev_forms_types[0],
                        label: "Type",
                        //value: dev_forms_types[0],
                        options: dev_forms_types
                    },
                    {
                        view: "text", name: "dfn_fvalue_" + id, value: item && item["dfn_fvalue_" + id] || "",
                        label: "Value"
                    },

                ]
            }
        }
    }
    var removeAllChilds = function (form) {
        _.chain(form.getChildViews()).reduce(function (output, cv) {
            //if(cv && cv.config && cv.config.view == 'fieldset') {
            if (cv && cv.config && /^dfn_/.test(cv.config.id)) {
                output.push(cv.config.id);
            }
            return output;
        }, []).each(function (cv) {
            form.removeView(cv);
        })
    }
    var extractIds = function (item) {
        return item && _.chain(item).keys().map(function (k) {
                var v = k.match(/(.+)_(.+)_(.+)/);
                return v && v.length > 3 && v[3];
            }).uniq().compact().value() || [];
    }
    var build_field = function (form, id, item) {
        var field = {id: id};
        var type = item["dfn_ftype_" + id];
        //console.log('type:' + type);
        var formRealValues = form.getValues();
        switch (type) {
            case 'single':
                field.view = "text";
                field.name = item && item["dfn_fname_" + id] || "";
                field.label = item && item["dfn_flabel_" + id] || "";
                field.value = formRealValues && formRealValues[field.name]
                    || item && item["dfn_fvalue_" + id] || "";
                break;
            case 'select':
            case 'multiselect':
                var options = [];
                if (item && item["dfn_fvalue_" + id]) {
                    var values = item["dfn_fvalue_" + id].split(',');
                    //console.log(values);
                    if (values && !_.isEmpty(values)) {
                        options = _.map(values, function (value) {
                            var ivalues = value.split(':');
                            return {id: ivalues[1] || ivalues[0], value: ivalues[0]};
                        })
                    }
                }
                field.view = type
                field.name = item && item["dfn_fname_" + id] || "";
                field.label = item && item["dfn_flabel_" + id] || "";
                field.options = options;
                field.value = formRealValues && formRealValues[field.name] || options[0] || "";
                break;
        }
        return field;

    }
    return {
        collections: dev_forms_collections,
        new_field: new_field,
        removeAllChilds: removeAllChilds,
        build_field: build_field,
        extractIds: extractIds
    }
})