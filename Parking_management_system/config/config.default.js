/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1620988225022_1582';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };


  // 关闭csrf
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    // 白名单
    domainWhiteList: [ 'http://localhost:8080' ],
  };

  // 允许规则
  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  config.mysql={
    //database configuration 
    client:{
      //host 
      host:'localhost',
      //port 
      port:'3306',
      //username 
      user:'root',
      //password 
      password:'123456',
      //database 
      database:'parking'
    },
    //load into app,default is open //加载到应用程序，默认为打开
    app:true,
    //load into agent,default is close //加载到代理中，默认值为“关闭”
    agent:false,
  };
  config.session={ 
    key:'SESSION_ID',
    maxAge:864000,
    renew: true //延长会话有效期
  }

  return {
    ...config,
    ...userConfig,
  };
};
