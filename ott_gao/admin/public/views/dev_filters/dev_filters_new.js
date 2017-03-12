define(["models/dev_filters"], function (dev_filters) {
    var addChild = function (form, child, pos) {
        var childViews = form.getChildViews();
        form.addView(child, childViews.length + pos);
    }
    var layout = {
        id: "dev_filters_new",

        rows: [
            {view: 'text', label: "Name", name: "name"},
            {
                view: "select", name: "collection", label: "Collection",
                //value: dev_filters.collections[0].id,
                id: "collection",
                options: dev_filters.collections
            },
            {},
            {
                cols: [
                    {
                        view: 'button',
                        id: "dfn_add_filter",
                        css: "button_primary button_raised",
                        label: "Filter",
                        inputWidth: 100
                    },
                    {},
                    {
                        view: 'button',
                        id: "dfn_add_op_begin",
                        css: "button_primary button_raised",
                        label: "BEGIN",
                        inputWidth: 100,
                        click: function () {
                            var dev_filters_new = $$('dev_filters_new');
                            var id = Random.id();
                            addChild(dev_filters_new, {
                                id: 'dfn_op_begin_' + id,
                                cols: [
                                    {view: 'icon', name: 'dfn_op_begin_' + id, icon: 'chevron-left', css: "button_primary button_raised"},{},
                                    {view: 'icon', icon: 'remove', click: function(){$$('dev_filters_new').removeView('dfn_op_begin_' + id);}}
                                ]
                            }, -2);
                        }
                    },
                    {
                        view: 'button',
                        id: "dfn_add_op_end",
                        css: "button_primary button_raised",
                        label: "END",
                        inputWidth: 100,
                        click: function () {
                            var dev_filters_new = $$('dev_filters_new');
                            var id = Random.id();
                            addChild(dev_filters_new, {
                                id: 'dfn_op_end_' + id,
                                cols: [
                                    {view: 'icon', name: 'dfn_op_end_' + id, icon: 'chevron-right', css: "button_primary button_raised"},{},
                                    {view: 'icon', icon: 'remove', click: function(){$$('dev_filters_new').removeView('dfn_op_end_' + id);}}
                                ]
                            }, -2);
                        }
                    },
                    {
                        view: 'button',
                        id: "dfn_add_op_or",
                        css: "button_primary button_raised",
                        label: "OR",
                        inputWidth: 100,
                        click: function () {
                            var dev_filters_new = $$('dev_filters_new');
                            var id = Random.id();
                            addChild(dev_filters_new, {
                                id: 'dfn_op_or_' + id,
                                cols: [
                                    {view: 'button', name: 'dfn_op_or_' + id, inputWidth: 90, label: 'OR', css: "button_primary button_raised"},{},
                                    {view: 'icon', icon: 'remove', click: function(){$$('dev_filters_new').removeView('dfn_op_or_' + id);}}
                                ]
                            }, -2);
                        }
                    },
                    {
                        view: 'button',
                        id: "dfn_add_op_and",
                        css: "button_primary button_raised",
                        label: "AND",
                        inputWidth: 100,
                        click: function () {
                            var dev_filters_new = $$('dev_filters_new');
                            var id = Random.id();
                            addChild(dev_filters_new, {
                                id: 'dfn_op_and_' + id,
                                cols: [
                                    {view: 'button', name: 'dfn_op_and_' + id, inputWidth: 90, label: 'AND', css: "button_primary button_raised"},{},
                                    {view: 'icon', icon: 'remove', click: function(){$$('dev_filters_new').removeView('dfn_op_and_' + id);}}
                                ]
                            }, -2);
                        }
                    },
                    {
                        view: 'button',
                        id: "dfn_add_op_break",
                        css: "button_primary button_raised",
                        label: "BREAK",
                        inputWidth: 100,
                        click: function () {
                            var dev_filters_new = $$('dev_filters_new');
                            var id = Random.id();
                            addChild(dev_filters_new, {
                                id: 'dfn_op_break_' + id,
                                cols: [
                                    {view: 'button', name: 'dfn_op_break_' + id, inputWidth: 90, label: 'BREAK', css: "button_primary button_raised"},{},
                                    {view: 'icon', icon: 'remove', click: function(){$$('dev_filters_new').removeView('dfn_op_break_' + id);}}
                                ]
                            }, -2);
                        }
                    },
                ]
            }
        ]
    };

    return {
        $ui: layout,
        $oninit: function () {
            var dev_filters_new = $$('dev_filters_new');
            var dev_filters_add_field = $$('dfn_add_filter');

            dev_filters_add_field.attachEvent('onItemClick', function () {
                dev_filters.addChild(dev_filters_new, dev_filters.new_field(dev_filters_new), -2);
                //var childViews = dev_filters_new.getChildViews();
                //dev_filters_new.addView(dev_filters.new_field(dev_filters_new),childViews.length - 2);
            })
        }
    };


});