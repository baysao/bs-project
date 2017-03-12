var seneca = require('seneca')()
.use('rabbitmq-transport'
  ,{
    rabbitmq: {
      timeout: 22222,
      type: 'rabbitmq',
      host: 'localhost',
      port: 5672,
      username: 'gao',
      password: 'pQMY4YW0uDvCQELiJVFEUYx0p'
    }
  }
  )
.client({type: 'rabbitmq'})

setInterval(function () {
  seneca.act('foo:1,zed:10', console.log)
}, 1111)
