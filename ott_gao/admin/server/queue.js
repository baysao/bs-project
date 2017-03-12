/**
 * Created by baysao on 06/01/2016.
 */
//var queueConfig = Meteor.settings.rabbitmq;
var queueServer = Meteor.settings.queueServer;

QueueSeneca = seneca()
    //.use('rabbitmq-transport',queueServer)
    .use('redis-transport',queueServer)
    .client({type: 'redis'});
    //.client({type: 'rabbitmq'});
