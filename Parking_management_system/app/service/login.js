// app/service/user.js

'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async find(params) {
    const { ctx } = this
    try { 
      const result = await ctx.app.mysql.query('select * from user_info where username = ?',[params.username])
      console.log(result);
      if (result[0].username === params.username && result[0].password === params.password){
        if(result != null){
          return result;
        }
      }
      return false
    } catch(error) {
      console.log(error);
      return null
    }
  }
}

module.exports = UserService;
