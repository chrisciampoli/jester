var ContainerBuilder = require('crate-js').ContainerBuilder,
    NameService = require('./services/NameService'),
    EventEmitter = require('events').EventEmitter,
    container = ContainerBuilder.buildFromJson({
        parameters: {
            someParameterName: "foo",
            bar:               "baz" // Comments are allowed!
        },
        services: {
            dispatcher: {module: EventEmitter},
            nameService: {module: NameService, args: ['%bar%']}
        }
    });

window.container = container;