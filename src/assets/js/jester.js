var ContainerBuilder = require('crate-js').ContainerBuilder,
    ConfigService    = require('./services/ConfigService'),
    LoginService     = require('./services/LoginService'),
    EventEmitter     = require('events').EventEmitter,
    container        = ContainerBuilder.buildFromJson({
        parameters: {
            siteName: "Jester",
        },
        services: {
            dispatcher: {module: EventEmitter},
            configService: {module: ConfigService, args: ['%siteName%']},
            loginService: {module: LoginService, args: ['@configService']}
        }
    });

window.jester = container;
