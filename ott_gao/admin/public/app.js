/*
	App configuration
*/

define([
    "jet-core/core",
    "jet-core/plugins/menu"
    //,"jet-core/plugins/locale",
    //"jet-core/plugins/theme"
], function(core, menu
    //, locale, theme
) {


    //CKEditor requires full path
    webix.codebase = document.location.href.split("#")[0].replace("index.html", "") + "libs/webix/";

    if (!webix.env.touch && webix.ui.scrollSize && webix.CustomScroll)
        webix.CustomScroll.init();

    //configuration
    var app = core.create({
        id: "admin-demo",
        name: "Webix Admin",
        version: "0.1",
        debug: true,
        start: "/app/entries"
    });

    app.use(menu);
    //app.use(locale);
    //app.use(theme);

    return app;
});
