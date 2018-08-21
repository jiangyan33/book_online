'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1534757564118_9645';

  // add your config here
  config.middleware = [];

  // config.oauth2Server = {
  //   //grants: [ 'password', 'client_credentials' ],
  // };
//关闭csrf安全性校验
  config.security = {
    csrf: {
      enable: false
    }
  };
  // config.cors = {
  //   allowMethods: 'GET,POST,PUT,DELETE',
  //   credentials: true
  // }
  // config.mongoose = {
  //   url: process.env.EGG_MONGODB_URL || 'mongodb://127.0.0.1:27017/book_online',
  //   options: {
  //     // server: {
  //     //   poolSize: 20
  //     // },
  //     "poolSize": 100,
  //     "socketOptions": {
  //       "autoReconnect": true,
  //       "noDelay": true,
  //       "connectTimeoutMS": 3600000,
  //       "keepAlive": 3600000,
  //       "socketTimeoutMS": 3600000
  //     },
  //     "reconnectTries": 60,
  //     "reconnectInterval": 2000,
  //     "useUTC": true
  //   }
  // };
  exports.mongo = {
    //  配置单个数据库
    client: {
      host: 'localhost',
      port: 27017,
      name: 'book_online',
      options: {
        "poolSize": 100,
        "socketOptions": {
          "autoReconnect": true,
          "noDelay": true,
          "connectTimeoutMS": 3600000,
          "keepAlive": 3600000,
          "socketTimeoutMS": 3600000
        },
        "reconnectTries": 60,
        "reconnectInterval": 2000,
        "useUTC": true
      }
    }
  }
  return config;
};
