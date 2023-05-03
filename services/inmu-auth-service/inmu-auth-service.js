/**
* @name Inmu-auth
* @summary Inmu-auth Hydra Express service entry point
* @description user auth for the inmu app
*/
'use strict';

const version = require('./package.json').version;
const hydraExpress = require('hydra-express');


const HydraExpressLogger = require('fwsp-logger').HydraExpressLogger;
hydraExpress.use(new HydraExpressLogger());

let config = require('fwsp-config');

/**
* Load configuration file and initialize hydraExpress app
*/
config.init('./config/config.json')
  .then(() => {
    config.version = version;
    return hydraExpress.init(config.getObject(), version, () => {
      hydraExpress.registerRoutes({
        '/v1/inmu-auth': require('./routes/inmu-auth-v1-routes')
      });
    });
  })
  .then(serviceInfo => console.log('serviceInfo', serviceInfo))
  .catch(err => console.log('err', err));
