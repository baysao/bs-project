Package.describe({
  name: "baysao:meteor-senecajs",
  version: "0.1.0-1",
  summary: "Meteor SenecaJs",
  git: "https://github.com/baysao/meteor-senecajs.git",
  documentation: "README.md"
});
Npm.depends({
  "seneca": "0.9.3",
  "seneca-redis-transport": "0.3.0",
  //"seneca-rabbitmq-transport": "https://github.com/baysao/seneca-rabbitmq-transport/archive/ff7ca079128ca0c7cf9594ced21155965459d434.tar.gz"
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@1.1.0.2");
  api.addFiles([
    //"rabbus.js"
      "seneca.js"
    ], "server");
  api.export("seneca", "server");
});

