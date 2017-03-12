var util = Npm.require("util");
var rabbusNpm = Npm.require("rabbus");
var wascallyNpm = Npm.require("wascally");
var Producer = {};
var Consumer = {};
var prod_instance = {};
var cons_instance = {};
RabbusQueue = {
    configure: wascallyNpm.configure,
    producer: function (name, type, options) {
        if (!prod_instance[name]) {
            if (!Producer[type]) {
                Producer[type] = function (rabbus) {
                    rabbusNpm[type].call(this, rabbus, options);
                }
                util.inherits(Producer[type], rabbusNpm[type]);
            }
            prod_instance[name] = new Producer[type](wascallyNpm);
        }
        return prod_instance[name];
    },
    consumer: function (name, type, options) {
        if (!prod_instance[name]) {
            if (!Consumer[type]) {
                Consumer[type] = function (rabbus) {
                    rabbusNpm[type].call(this, rabbus, options);
                }
                util.inherits(Consumer[type], rabbusNpm[type]);
            }
            cons_instance[name] = new Consumer[type](wascallyNpm);
        }
        return cons_instance[name];
    }
}
