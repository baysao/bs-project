/* Copyright (c) 2010-2014 Richard Rodger, MIT License */
"use strict";

module.exports = function (options) {
    //var db_instance = options.db;
    var seneca = this;
    var helpers = require('./helpers')(seneca);
    var plugin = 'entries';
    var prefix = '/api/v1';
    //var coll = db_instance.collection(plugin);
    //console.log(coll);

    seneca.add('role:api,cmd:entries', function( args, done ){
        console.log(args);
        done( null, args )
    })

    seneca.act('role:web', {use:{
        prefix: '/api/v1',
        pin:    'role:api,cmd:*',
        map: {
            entries: {GET:true}
        }
    }})


    //seneca.add({
    //        role: 'jsonrest-api', prefix: prefix, name: plugin, method: 'get'
    //    },
    //    function (args, done) {
    //        console.log('vao day');
    //        //coll.find().toArray(function (err, items) {
    //        //    console.log(items);
    //        //})
    //    })
    //
    //seneca.use(
    //    {name: 'jsonrest-api'},
    //    {
    //        prefix: prefix,
    //        list: {embed: 'list'},
    //        pin: {name: plugin, cmd:'test'},
    //        //startware: helpers.auth_validate,
    //        allow_id: true
    //    })

    return {name: plugin}
}
