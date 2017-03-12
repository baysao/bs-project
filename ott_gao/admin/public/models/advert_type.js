define([], function () {
    var escapeHtml = (function () {
        'use strict';
        var chr = {'"': '&quot;', '&': '&amp;', '<': '&lt;', '>': '&gt;'};
        return function (text) {
            return text.replace(/[\"&<>]/g, function (a) {
                return chr[a];
            });
        };
    }());
    var advert_type_select = [
        {id: 'preroll', value: 'PreRoll'},
        {id: 'midroll', value: 'MidRoll'},
        {id: 'postroll', value: 'PostRoll'}
    ]
    var advert_banner_element = function (e, id, advert_list_select) {
        var el = {
            id: id,
            cols: [
                {
                    margin: 20, labelWidth: 100,
                    view: "select", name: "advert_id_" + id, id: "advert_list_" + id, label: "Advert",
                    options: advert_list_select
                },
                {view: 'text', label: 'Start Time', name: "advert_startTime_" + id, labelWidth: 100},
                {view: 'text', label: 'End Time', name: "advert_endTime_" + id, labelWidth: 100},
                {view: 'text', label: 'Max Height', name: "advert_maxHeight_" + id, labelWidth: 100},
                {
                    view: 'icon', icon: 'remove', labelWidth: 100, click: function () {
                    e.removeView(id);
                }
                }
            ]
        }
        return el;
    }
    var advert_vast_element = function (e, id, advert_list_select) {
        var el = {
            id: id,
            cols: [
                {
                    margin: 20, labelWidth: 100,
                    view: "select", name: "advert_id_" + id, id: "advert_list_" + id, label: "Advert",
                    options: advert_list_select
                },
                {
                    view: "select", name: "advert_type_" + id, label: "Type", labelWidth: 100,
                    options: advert_type_select
                },
                {view: 'text', label: 'Offset', name: "advert_offset_" + id, labelWidth: 100},
                {view: 'counter', label: 'Skip', name: "advert_skip_" + id, step: 1, value: -1, labelWidth: 100},
                {
                    view: 'icon', icon: 'remove', labelWidth: 100, click: function () {
                    e.removeView(id);
                }
                }
            ]
        }
        return el;
    }
    var types = {
        banner: {
            fields: [
                {"template": "Fields", "type": "section"},
                {"view": "checkbox", "name": "enabled", "label": "Enable"},
                {"view": "text", "name": "label", "label": "Label", "labelWidth": 150},
                {
                    cols: [
                        {
                            view: 'template',
                            id: "imageUrl_preview",
                            width: 100,
                            height: 100,
                            data: {src: "/storage/content/icon/16/details.png", size: 90},
                            template: function (obj) {
                                return '<img src="' + obj.src + '" style="cursor:pointer; width:' + obj.size + 'px; height:' + obj.size + 'px;" />';
                            }
                        },
                        {},
                        {
                            view: "button",
                            id: "imageUrl_button",
                            label: "Upload Image",
                            width: 200,
                            height: 40
                        }
                    ]
                },
                {"view": "text", "name": "imageURL","id": "imageURL", "label": "Image URL", "labelWidth": 150},
                {"view": "text", "name": "clickURL","id": "clickURL", "label": "Click URL", "labelWidth": 150},
                {
                    "view": "slider",
                    "name": "opacity",
                    "label": "Opacity",
                    title: webix.template("#value#"),
                    "labelWidth": 150
                },
                {"view": "text", "name": "startTime", "label": "Start Time", "labelWidth": 150},
                {"view": "text", "name": "endTime", "label": "End Time", "labelWidth": 150},
                {"view": "text", "name": "maxHeight", "label": "Max Height", "labelWidth": 150},
                {"view": "checkbox", "name": "closable", "label": "Closable", "labelWidth": 150}
            ],
            process: function (adverts_values) {
                return adverts_values;
            }
        },
        vast: {
            fields: [
                {"template": "Fields", "type": "section"},
                {"view": "checkbox", "name": "enabled", "label": "Enable"},
                {"view": "text", "name": "label", "label": "Label", "labelWidth": 150},
                {"view": "text", "name": "url", "id": "advert_url", "label": "Url", "labelWidth": 150},
                {
                    cols: [
                        {
                            "view": "select", "name": "offset_type", "label": "Offset", "labelWidth": 150, "options": [
                            {"id": "seconds", "value": "Seconds"},
                            {"id": "time", "value": "At Time"},
                            {"id": "percentage", "value": "Percentage"},
                            {"id": "pre", "value": "Pre"},
                            {"id": "post", "value": "Post"},
                            {"id": "position", "value": "Position"},
                        ]
                        },
                        {"view": "text", "label": "Value", "name": "offset_val"}
                    ]
                },
                {"view": "counter", "name": "skip", "label": "Skip", "step": 1, "value": -1, "labelWidth": 150},
                {"view": "text", "name": "addCompanionRequest", "label": "Companion", "labelWidth": 150}
            ],
            process: function (adverts_values) {
                var offtype = adverts_values.offset_type;
                switch (offtype) {
                    case 'pre':
                    case 'post':
                        adverts_values.offset = adverts_values.offset_type;
                        break;
                    case 'seconds':
                    case 'position':
                    case 'time':
                        adverts_values.offset = adverts_values.offset_val;
                        break;
                    case 'percentage':
                        adverts_values.offset = adverts_values.offset_val + '%';
                        break;
                }

                return adverts_values;
            }
        }
    }
    return {
        advert_vast_element: advert_vast_element,
        advert_banner_element: advert_banner_element,
        get: function (type) {
            return types[type];
        }
    }
})
