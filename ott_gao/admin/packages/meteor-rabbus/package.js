Package.describe({
  name: "baysao:meteor-rabbus",
  version: "0.1.0-1",
  summary: "Meteor Rabbus",
  git: "https://github.com/baysao/meteor-rabbus.git",
  documentation: "README.md"
});
Npm.depends({
    "rabbus": "0.6.2",
    "wascally": "0.2.9"
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@1.1.0.2");
  api.addFiles([
    "rabbus.js"
    ], "server");
  api.export("RabbusQueue", "server");
});

