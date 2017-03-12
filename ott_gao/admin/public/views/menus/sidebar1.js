define(["models/sidebar1"], function (sidebar_data) {

    return {
        $ui: {
            width: 220,
            rows: [
                {
                    view: "tree",
                    id: "app:menu",
                    type: "menuTree2",
                    css: "menu",
                    activeTitle: true,
                    select: true,
                    tooltip: {
                        template: function (obj) {
                            return obj.$count ? "" : obj.details;
                        }
                    },
                    on: {
                        onBeforeSelect: function (id) {
                            return !this.getItem(id).$count;
                        },
                        onAfterSelect: function (id) {
                            this.$scope.show("./" + id);
                            var item = this.getItem(id);
                            //console.log(item);
                            if (item && item.value && item.details)
                                webix.$$("title").parse({title: item.value, details: item.details});
                        }
                    },
                    data: sidebar_data
                }
            ]
        }
    };

});
