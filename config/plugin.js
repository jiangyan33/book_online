'use strict';

// exports.oauth2Server = {
//   enable: true,
//   package: 'egg-oauth2-server',
// };

// exports.cors = {
//   enable: true,
//   package: 'egg-cors',
// };

// exports.mongoose = {
//   enable: true,
//   package: 'egg-mongoose',
// };
//mongo本地驱动
exports.mongo = {
  enable: true,
  package: 'egg-mongo-native'
}
//插件验证
exports.validate = {
  enable: true,
  package: 'egg-validate'
};