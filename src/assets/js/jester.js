var ContainerBuilder = require('crate-js').ContainerBuilder,
    ConfigService    = require('./services/ConfigService'),
    LoginService     = require('./services/LoginService'),
    EventEmitter     = require('events').EventEmitter,
    Repository       = require('./utils/Repository');


export default class Jester {
  constructor() {

  }

  run() {
    this.modules   = this.buildModules();
    this.container = ContainerBuilder.buildFromJson({
          parameters: {
              siteName: "Jester",
          },
          services: {
              dispatcher: {module: EventEmitter},
              configService: {module: ConfigService, args: ['%siteName%']},
              loginService: {module: LoginService, args: ['@configService']}
          }
      });
  }

  buildModules() {
    let repository = new Repository();
  }

  getModule(name) {
    return this.modules.fetch(name);
  }
}

window.jester = new Jester();
jester.run();
