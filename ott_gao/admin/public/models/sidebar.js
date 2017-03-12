define([], function () {
    var data = [
        // {
        //     id: "dashboard", value: "Dashboard",  icon: "bar-chart",
        //     $css: "dashboard", details: "summary report"
        // },
        {
            id: "upload_group", value: "Upload", open: true, data: [
            {
                id: "uploads", value: "Upload", icon: "upload",
                $css: "dashboard", details: "all uploads"
            }
        ]
        },
        {
            id: "entries_group", value: "Entries", open: true, data: [
            {
                id: "entries", value: "All Entries", icon: "video-camera",
                $css: "dashboard", details: "all entries"
            },
            {
                id: "entries_categories", value: "Categories", icon: "folder",
                $css: "dashboard", details: "categories"
            },
            {
                id: "entries_tags", value: "Tags", icon: "tags",
                $css: "dashboard", details: "tags"
            }
        ]
        },
        {
            id: "actions_group", value: "Actions", open: true, data: [
            {
                id: "actions", value: "Call to Action", icon: "columns",
                $css: "dashboard", details: "all action"
            },
            {
                id: "adverts", value: "Advertising", icon: "adn",
                $css: "dashboard", details: "advertising"
            }
        ]
        },
        {
            id: "players_group", value: "Players", open: true, data: [
            {
                id: "players", value: "Players", icon: "youtube-play",
                $css: "dashboard", details: "config players"
            }]
        },
        {
            id: "accounts_group", value: "Accounts", open: true, data: [
            {
                id: "accounts", value: "Accounts", icon: "users",
                $css: "dashboard", details: "User management"
            }]
        },
        {
            id: "settings", value: "Settings", open: true, data: [
            {
                id: "flavors", value: "Encoding", icon: "retweet",
                $css: "dashboard", details: "flavors"
            }
        ]
        },
        {
            id: "develop", value: "Developer", open: true, data: [
            {
                id: "api_managers", value: "Credentials APIs", icon: "key",
                $css: "dashboard", details: "APIs access"
            },
            {
                id: "dev_forms", value: "Custom Data", icon: "database",
                $css: "dashboard", details: "custom fields"
            },
            {
                id: "dev_filters", value: "Custom Filters", icon: "filter",
                $css: "dashboard", details: "custom filters"
            },
            {
                id: "dev_apis", value: "Custom APIs", icon: "exchange",
                $css: "dashboard", details: "custom apis"
            }
        ]
        }

    ]
    return data;
})