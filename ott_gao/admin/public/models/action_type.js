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
    var action_type_select = [
        {id: 'none', value: 'None'},
        {id: 'preroll', value: 'PreRoll'},
        {id: 'midroll', value: 'MidRoll'},
        {id: 'postroll', value: 'PostRoll'}
    ]
    var action_types = [
        {id: 'rssfeed', value: 'About'},
        {id: 'custom_embeded', value: 'Custom Embeded'},
        {id: 'qrcode', value: 'QR Code'},
        {id: 'skype', value: 'Skype'},
        {id: 'google_map', value: 'Google Map'},
        {id: 'mail_forms', value: 'Mail Form'},
        {id: 'social_media', value: 'Social Media'}
    ]
    var action_categories = [
        {id: 'commerce', value: 'Commerce'},
        {id: 'email', value: 'Email'},
        {id: 'forms', value: 'Forms'},
        {id: 'info', value: 'Info'},
        {id: 'marketing', value: 'Marketing'},
        {id: 'photos', value: 'Photos'},
        {id: 'social', value: 'Social'}
    ]

    var action_element = function (e, id, action_list_select) {
        var el = {
            id: id,
            cols: [
                {
                    view: "select", name: "action_type_" + id, label: "Type", labelWidth: 100,
                    options: action_type_select
                },
                {view: 'text', label: 'Time', name: "action_time_" + id, placeholder: "seconds"},
                {
                    margin: 20, labelWidth: 100,
                    view: "select", name: "action_id_" + id, id: "action_list_" + id, label: "Action",
                    options: action_list_select
                },
                {view: 'counter', label: 'Order', name: "action_order_" + id, step: 1},
                {},
                {
                    view: 'icon', icon: 'remove', click: function () {
                    e.removeView(id);
                }
                }
            ]
        }
        console.log(el);
        return el;
    }
    var types = {
        social_media: {
          fields: [
              {"template": "Fields", "type": "section"},
              {"view": "text", "hidden": true, "name": "component", "value": "com.qoof.sdk.components.rss.SocialShare"},
              {"view": "text", "hidden": true, "name": "thumbnailWidth", "value": "32"},
              {"view": "text", "hidden": true, "name": "affiliateRegex", "value": ""},
              {view: 'text', label: 'Instructions', name: "instructions", value: "Visit our pages: "},
              {cols: [
                  { template: '<img src="http://dp.gao.easyvideo.vn/storage/content/img/zalo.png" style="cursor:pointer; width:29px;height:29px;" />', width: 50},
                  {"view": "text", "name": "link_zalo", "label": "Link", gravity: 1},
                  {"view": "text", "name": "text_zalo", "label": "Text", value:"Like us on Zalo",  "labelWidth": 130},
              ]},
              {cols: [
                  { template: '<img src="http://dp.gao.easyvideo.vn/storage/content/img/facebook.png" style="cursor:pointer; width:29px;height:29px;" />', width: 50},
                  {"view": "text", "name": "link_facebook", "label": "Link", gravity: 1},
                  {"view": "text", "name": "text_facebook", "label": "Text", value:"Like us on Facebook",  "labelWidth": 130},
              ]},
              {cols: [
                  { template: '<img src="http://dp.gao.easyvideo.vn/storage/content/img/facebook.png" style="cursor:pointer; width:29px;height:29px;" />', width: 50},
                  {"view": "text", "name": "link_facebook", "label": "Link", gravity: 1},
                  {"view": "text", "name": "text_facebook", "label": "Text", value:"Like us on Facebook",  "labelWidth": 130},
              ]},
              {cols: [
                  { template: '<img src="http://dp.gao.easyvideo.vn/storage/content/img/twitter.png" style="cursor:pointer; width:29px;height:29px;" />', width: 50},
                  {"view": "text", "name": "link_twitter", "label": "Link", gravity: 1},
                  {"view": "text", "name": "text_twitter", "label": "Text",   value:"Follow us on Twitter", "labelWidth": 130},
              ]},
              {cols: [
                  { template: '<img src="http://dp.gao.easyvideo.vn/storage/content/img/googleplus.png" style="cursor:pointer; width:29px;height:29px;" />', width: 50},
                  {"view": "text", "name": "link_googleplus", "label": "Link", gravity: 1},
                  {"view": "text", "name": "text_googleplus", "label": "Text",   value:"Follow us on Twitter", "labelWidth": 130},
              ]},
              {cols: [
                  { template: '<img src="http://dp.gao.easyvideo.vn/storage/content/img/youtube.png" style="cursor:pointer; width:29px;height:29px;" />', width: 50},
                  {"view": "text", "name": "link_youtube", "label": "Link", gravity: 1},
                  {"view": "text", "name": "text_youtube", "label": "Text",  value:"Subscribe to our YouTube", "labelWidth": 130},
              ]},
              {cols: [
                  { template: '<img src="http://dp.gao.easyvideo.vn/storage/content/img/pinterest.png" style="cursor:pointer; width:29px;height:29px;" />', width: 50},
                  {"view": "text", "name": "link_pinterest", "label": "Link", gravity: 1},
                  {"view": "text", "name": "text_pinterest", "label": "Text",  value:"Follow us on Pinterest", "labelWidth": 130},
              ]},
              {cols: [
                  { template: '<img src="http://dp.gao.easyvideo.vn/storage/content/img/linkedin.png" style="cursor:pointer; width:29px;height:29px;" />', width: 50},
                  {"view": "text", "name": "link_linkedin", "label": "Link", gravity: 1},
                  {"view": "text", "name": "text_linkedin", "label": "Text",  value:"Connect on LinkedIn", "labelWidth": 130},
              ]},
              {cols: [
                  { template: '<img src="http://dp.gao.easyvideo.vn/storage/content/img/stumble.png" style="cursor:pointer; width:29px;height:29px;" />', width: 50},
                  {"view": "text", "name": "link_stumble", "label": "Link", gravity: 1},
                  {"view": "text", "name": "text_stumble", "label": "Text",  value:"Stumble Upon Us", "labelWidth": 130},
              ]},
              {cols: [
                  { template: '<img src="http://dp.gao.easyvideo.vn/storage/content/img/tumblr.png" style="cursor:pointer; width:29px;height:29px;" />', width: 50},
                  {"view": "text", "name": "link_tumblr", "label": "Link", gravity: 1},
                  {"view": "text", "name": "text_tumblr", "label": "Text", value:"Visit us on Tumblr",  "labelWidth": 130},
              ]},
              {cols: [
                  { template: '<img src="http://dp.gao.easyvideo.vn/storage/content/img/instagram.png" style="cursor:pointer; width:29px;height:29px;" />', width: 50},
                  {"view": "text", "name": "link_instagram", "label": "Link", gravity: 1},
                  {"view": "text", "name": "text_instagram", "label": "Text", value:"Follow us on Instagram", "labelWidth": 130},
              ]}
          ],
            process: function (actions_values) {
                actions_values.lightStyle = false;
                var feedXmlString = [];
                feedXmlString.push('<feed>');
                var services = ['zalo', 'facebook', 'twitter', 'googleplus', 'youtube', 'pinterest', 'linkedin', 'stumble', 'tumblr', 'instagram'];
                var idx = 0;
                _.each(services, function(service){
                    "use strict";
                    feedXmlString.push('<entry>');
                    feedXmlString.push('<id></id>');
                    feedXmlString.push('<title></title>');
                    feedXmlString.push('<content>' + actions_values['text_' + service] + '</content>');
                    feedXmlString.push('<thumbnailUrl>http://dp.gao.easyvideo.vn/storage/content/img/' + service + '.png</thumbnailUrl>');
                    feedXmlString.push('<link>' + actions_values['link_' + service] + '</link>');
                    feedXmlString.push('<contentSnippet>' + actions_values['text_' + service] + '</contentSnippet>');
                    feedXmlString.push('<publishedDate></publishedDate>');
                    feedXmlString.push('<index>' + idx + '</index>');
                    feedXmlString.push('</entry>');
                    idx = idx + 1;
                })

                feedXmlString.push('</feed>');
                actions_values.feedXmlString = feedXmlString.join('');
                return actions_values;
            }
        },
        mail_forms: {
          fields: [
              {"template": "Fields", "type": "section"},
              {"view": "text", "hidden": true, "name": "component", "value": "com.qoof.sdk.components.forms.MailForm"},
              {"view": "text", "hidden": true, "name": "affiliateRegex", "value": ""},
              {"view": "text", "name": "emails", "label": "Send to emails", "labelWidth": 130},
              {"view": "text", "name": "from", "label": "From email", "labelWidth": 130},
              {"view": "checkbox", "name": "includeComments", "label": "Include comments field", "labelWidth": 130},
              {"view": "text", "name": "commentsLabel", "label": "Comments field label" , "labelWidth": 130},
              {"view": "checkbox", "name": "includeCheckbox", "label": "Include checkbox", "labelWidth": 130},
              {"view": "text", "name": "checkboxLabel", "label": "Checkbox label" , "labelWidth": 130},
              {"view": "text", "name": "instructions", "label": "Instructions" , "labelWidth": 130},
              {"view": "text", "name": "submitText", "label": "Submit button text" , "labelWidth": 130},
              {"view": "textarea", "name": "success", "label": "Thank you text" , "labelWidth": 130}
          ],
            process: function (actions_values) {
                "use strict";
                actions_values.lightStyle = false;
                return actions_values;
            }
        },
        google_map: {
            fields: [
                {"template": "Fields", "type": "section"},
                {"view": "text", "hidden": true, "name": "component", "value": "com.qoof.sdk.components.map.GoogleMap"},
                {"view": "text", "hidden": true, "name": "affiliateRegex", "value": ""},
                {"view": "text", "name": "address", "label": "Address", "labelWidth": 130},
                {"view": "text", "name": "title", "label": "Marker Text", "labelWidth": 130},
                { view:"slider",  name:"zoom", label:"Zoom", value:"0", min:0, max: 20, step: 1, title:webix.template("#value#")}
            ],
            process: function (actions_values) {
                "use strict";
                actions_values.lightStyle = false;
                return actions_values;
            }
        },
        skype: {
            fields: [
                {"template": "Fields", "type": "section"},
                {"view": "text", "hidden": true, "name": "component", "value": "com.qoof.sdk.components.contact.Skype"},
                {"view": "text", "hidden": true, "name": "affiliateRegex", "value": ""},
                {"view": "text", "name": "address", "label": "Skype Name", "labelWidth": 130},
                {"view": "text", "name": "instructions", "label": "Instructions", "labelWidth": 130},
            ],
            process: function (actions_values) {
                "use strict";
                actions_values.lightStyle = false;
                return actions_values;
            }
        },
        qrcode: {
            fields: [
                {"template": "Fields", "type": "section"},
                {"view": "text", "hidden": true, "name": "component", "value": "com.qoof.sdk.components.qr.QRCode"},
                {"view": "text", "hidden": true, "name": "affiliateRegex", "value": ""},
                {"view": "text", "name": "message", "label": "Message", "labelWidth": 130},
                {"view": "text", "name": "instructions", "label": "Instructions", "labelWidth": 130},
            ],
            process: function (actions_values) {
                "use strict";
                actions_values.lightStyle = false;
                return actions_values;
            }
        },
        custom_embeded: {
            fields: [
                {"template": "Fields", "type": "section"},
                {"view": "text", "hidden": true, "name": "affiliateRegex", "value": ""},
                { "view": "text", "hidden": true, "name": "component", "value": "com.qoof.sdk.components.link.CustomEmbed"},
                {"view": "textarea", "name": "text1", "label": "URL or Iframe Code", "labelWidth": 130},
            ],
            process: function (actions_values) {
                "use strict";
                actions_values.lightStyle = false;
                return actions_values;
            }
        },
        rssfeed: {
            fields: [
                {"template": "Fields", "type": "section"},
                {"view": "text", "hidden": true, "name": "component", "value": "com.qoof.sdk.components.rss.RSSItem"},
                {"view": "text", "hidden": true, "name": "affiliateRegex", "value": ""},
                {
                    cols: [
                        {
                            view: 'template',
                            id: "rssfeed_thumbnail_preview",
                            width: 100,
                            height: 100,
                            data: {src: "/assets/imgs/nothumb.jpg", size: 90},
                            template: function (obj) {
                                return '<img src="' + obj.src + '" style="cursor:pointer; width:' + obj.size + 'px; height:' + obj.size + 'px;" />';
                            }
                        },
                        {},
                        {
                            view: "button",
                            id: "rssfeed_thumbnail_button",
                            label: "Upload Image",
                            width: 200,
                            height: 40
                        }
                    ]
                },
                {
                    "view": "text",
                    "name": "thumbnailUrl",
                    "id": "thumbnailUrl",
                    "label": "Thumbnail Url",
                    "labelWidth": 130
                },
                {
                    "view": "slider",
                    "name": "thumbnailWidth",
                    "label": "Thumbnail Width",
                    title: webix.template("#value#"),
                    value: 80,
                    min: 10,
                    max: 120,
                    step: 10,
                    "labelWidth": 130
                },
                {"view": "textarea", "label": "Text", "name": "content", "height": 150, "labelWidth": 130},

            ],
            process: function (actions_values) {
                actions_values.lightStyle = false;
                actions_values.feedXmlString = "<feed><entry><id></id><title>" + escapeHtml(actions_values.title) + "</title>" +
                    "<content>" + escapeHtml(actions_values.content) + "</content>" +
                    "<thumbnailUrl>" + "</thumbnailUrl>" +
                    "<link></link>" +
                    "<contentSnippet>" + escapeHtml(actions_values.content) + "</contentSnippet>" +
                    "<publishedDate></publishedDate><index></index></entry></feed>";
                return actions_values;
            }
        }
    }
    return {
        action_element: action_element,
        action_types: action_types,
        action_categories: action_categories,
        get: function (type) {
            return types[type];
        }
    }
})
