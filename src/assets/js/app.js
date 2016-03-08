var ContainerBuilder = require('crate-js').ContainerBuilder,
    EventEmitter = require('events').EventEmitter,
    container = ContainerBuilder.buildFromJson({
        parameters: {
            someParameterName: "foo",
            bar:               "baz" // Comments are allowed!
        },
        services: {
            dispatcher: {module: EventEmitter}
        }
    });

window.container = container;