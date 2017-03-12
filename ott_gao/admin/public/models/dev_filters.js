/**
 * Created by baysao on 21/01/2016.
 */
define([], function(){
    var dev_filters_collections = [
        {id: "entries", value: "Entries"},
        {id: "entries_categories", value: "Categories"},
    ]
    var dev_filters_conds = [
        {id: "$superquery", value: "Super Query"},
        {id: "$sort", value: "Sort"},
        {id: "$range", value: "Range"},
        {id: "$contain", value: "Contain"},
        {id: "$eq", value: "Equal"},
        {id: "$eqcol", value: "Equal In Collection"},
        {id: "$lt", value: "Less"},
        {id: "$le", value: "Less Equal"},
        {id: "$gt", value: "Bigger"},
        {id: "$ge", value: "Bigger Equal"},
        {id: "$query", value: "Query"},
        {id: "$similar", value: "Similar"},
        {id: "$find", value: "Find"},
        {id: "$findone", value: "FindOne"}
    ]

    var addChild = function (form, child, pos) {
        var childViews = form.getChildViews();
        form.addView(child, childViews.length + pos);
    }
    var addAndOr = function(form, sid, label){
        addChild(form, {
            id: sid,
            cols: [
                {view: 'button', name: sid, inputWidth: 90, label: label, css: "button_primary button_raised"},{},
                {view: 'icon', icon: 'remove', click: function(){form.removeView(sid);}}
            ]
        }, -2);
    }
    var addBeginEnd = function(form, sid, label){
        addChild(form, {
            id: sid,
            cols: [
                {view: 'icon', name: sid, icon: label, css: "button_primary button_raised"},{},
                {view: 'icon', icon: 'remove', click: function(){form.removeView(sid);}}
            ]
        }, -2);
    }
    var restore_fields = function (form, item) {
        _.each(item, function(val, key){
            if(/^dfn_op_begin/.test(key)) {
                addBeginEnd(form, key, 'chevron-left');
            } else if(/^dfn_op_end/.test(key)) {
                addBeginEnd(form, key, 'chevron-right');
            } else if(/^dfn_op_or/.test(key)) {
                addAndOr(form, key, 'OR');
            } else if(/^dfn_op_and/.test(key)) {
                addAndOr(form, key, 'AND');
            } else if(/^dfn_fcond/.test(key)) {
                var mm = key.match(/^dfn_fcond_(.*)$/);
                console.log(mm);
                var id = mm[1];
                addChild(form, new_field(form, id, item), -2);
            }

        })
    }
    var new_field = function (form, sid, item) {
        var id = sid || Random.id();
        return {
            view: 'fieldset',
            label: 'Field ' + id,
            id: "dfn_fid_" + id,
            body: {
                rows: [
                    {width: "100%", cols: [{},{view: "icon", icon: "remove", click: function(){
                        form.removeView("dfn_fid_" + id);
                    }}]},
                    //{view: "text", name: "dfn_fname_" + id,
                    //    value: item && item["dfn_fname_" + id] || "",
                    //    labelWidth: 100,
                    //    label: "Property"},
                    //{
                    //    view: "select",
                    //    name: "dfn_fcoll_" + id,
                    //    value: dev_filters_collections[0].id,
                    //    label: "Collection",
                    //    labelWidth: 100,
                    //    options: dev_filters_collections
                    //},
                    {view: "text", name: "dfn_ffield_" + id,
                        value: item && item["dfn_ffield_" + id] || "",
                        labelWidth: 100,
                        label: "Field Name"},
                    {view: "select", name: "dfn_fcond_" + id,
                        label: "Condition",
                        labelWidth: 100,
                        //value: dev_filters_conds[0],
                        value: item && item["dfn_fcond_" + id] || dev_filters_conds[0],
                        options: dev_filters_conds},
                    {view: "text", name: "dfn_fvalue_" + id,
                        value: item && item["dfn_fvalue_" + id] || "",
                        label: "Field Value",
                        labelWidth: 100,
                    },

                ]
            }
        }
    }
    var removeAllChilds = function(form){
        _.chain(form.getChildViews()).reduce(function(output, cv){
            if(cv && cv.config && /^dfn_/.test(cv.config.id)) {
                output.push(cv.config.id);
            }
            return output;
        }, []).each(function(cv){
            form.removeView(cv);
        })
    }
    var extractIds = function(item){
        return item && _.chain(item).keys().map(function(k){
            var v = k.match(/(.+)_(.+)_(.+)/);
            return v && v.length > 3 &&  v[3];
        }).uniq().compact().value() || [];
    }
    //var build_field = function(id, item, form){
    //        var field = {id: id};
    //        var type = item["dfn_ftype_" + id];
    //        var formRealValues = form.getValues();
    //        switch(type) {
    //            case 'single':
    //                field.view = "text";
    //                field.name = item && item["dfn_fname_" + id] || "";
    //                field.label = item && item["dfn_flabel_" + id] || "";
    //                field.value = formRealValues && formRealValues[field.name]
    //                    || item && item["dfn_fvalue_" + id] || "";
    //                break;
    //            case 'select':
    //            case 'multiselect':
    //                var options = [];
    //                if(item && item["dfn_fvalue_" + id]) {
    //                    var values = item["dfn_fvalue_" + id].split(',');
    //                    //console.log(values);
    //                    if(values && !_.isEmpty(values)) {
    //                        options = _.map(values, function(value){
    //                            var ivalues = value.split(':');
    //                            return { id: ivalues[1] || ivalues[0], value: ivalues[0]};
    //                        })
    //                    }
    //                }
    //                field.view = type
    //                field.name = item && item["dfn_fname_" + id] || "";
    //                field.label = item && item["dfn_flabel_" + id] || "";
    //                field.options = options;
    //                field.value = formRealValues && formRealValues[field.name] || options[0] || "";
    //                break;
    //        }
    //        return field;
    //
    //}
    return {
        collections: dev_filters_collections,
        new_field: new_field,
        addChild: addChild,
        removeAllChilds:removeAllChilds,
        //build_field: build_field,
        extractIds: extractIds,
        restore_fields: restore_fields,
        addBeginEnd:addBeginEnd,
        addAndOr: addAndOr
    }
})