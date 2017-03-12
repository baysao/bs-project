define(["promise!models/authen"], function (token) {
    var item_type = "accounts";
    var api_path = "/api/" + item_type + "?access_token=" + encodeURIComponent(token);
    return {
        $ui: {
            rows: [
                {
                    view: "form",

                    paddingX: 5,
                    paddingY: 5,
                    margin: 2,
                    rows: [
                        {view: "label", label: "Find category:"},
                        {view: "search", placeholder: "Type here..."}
                    ]
                },
                {
                    view: "list",
                    id: "accounts_list",
                    autoConfig: true,
                    select: true,
                    template: "<div class='marker status#status#'></div>#username#",
                    url: api_path,
                    save: api_path
                }
            ]
        }
    };
});