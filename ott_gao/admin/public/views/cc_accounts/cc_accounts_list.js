define(["promise!models/authen"], function (token) {
    var item_type = "cc_accounts";
    var api_path = "/api/v2/" + item_type + "?access_token=" + encodeURIComponent(token);
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
                    id: "cc_accounts_list",
                    autoConfig: true,
                    select: true,
                    template: "<div class='marker status#status#'></div>#name#",
                    url: api_path,
                    save: api_path
                }
            ]
        }
    };
});
