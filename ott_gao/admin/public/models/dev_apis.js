/**
 * Created by baysao on 21/01/2016.
 */
define([], function () {
    var new_field = function (form, filters, sid, item) {
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
                            form.removeView("dfn_fid_" + id);
                        }
                    }]
                    },
                    {
                        view: "text", name: "dfn_fname_" + id,
                        value: item && item["dfn_fname_" + id] || "",
                        label: "Name"
                    },
                    {
                        view: "select", name: "dfn_ffilter_" + id, id: "dfn_ffilter_" + id,
                        label: "Filter",
                        //value: filters[0],
                        value: item && item["dfn_ffilter_" + id] || filters[0],
                        options: filters
                    },
                    //{
                    //    view: "text", name: "dfn_fvalue_" + id,
                    //    value: item && item["dfn_fvalue_" + id] || "",
                    //    label: "Override"
                    //},

                ]
            }
        }
    }
    var addChild = function (form, child, pos) {
        var childViews = form.getChildViews();
        form.addView(child, childViews.length + pos);
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
    var restore_fields = function (form, filters, item) {
        _.each(item, function (val, key) {
            //if(/^dfn_op_begin/.test(key)) {
            //    addBeginEnd(form, key, 'chevron-left');
            //} else if(/^dfn_op_end/.test(key)) {
            //    addBeginEnd(form, key, 'chevron-right');
            //} else if(/^dfn_op_or/.test(key)) {
            //    addAndOr(form, key, 'OR');
            //} else if(/^dfn_op_and/.test(key)) {
            //    addAndOr(form, key, 'AND');
            //} else
            if (/^dfn_fname_/.test(key)) {
                var mm = key.match(/^dfn_fname_(.*)$/);
                //console.log(mm);
                var id = mm[1];
                addChild(form, new_field(form, filters, id, item), -2);
            }
        })
    }
    return {
        removeAllChilds: removeAllChilds,
        new_field: new_field,
        extractIds: extractIds,
        addChild: addChild,
        restore_fields: restore_fields
    }
})