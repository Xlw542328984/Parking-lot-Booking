'use strict';

const Service = require('egg').Service;

class RegisterService extends Service {
  async zhuce(params) {
    const { ctx } = this
    try {
      const query = await ctx.app.mysql.query('select * from user_info where username = ?',[params.username])
      console.log(query);
      if (query.length == 0){
        const result = await ctx.app.mysql.insert('user_info',params)
        return true;
      } else {
        return false;
      }
    } catch(error) {
      console.log(error);
      return null
    }
  }
}
module.exports = RegisterService;
