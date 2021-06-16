'use strict';

const Service = require('egg').Service;

class ReinstallService extends Service {
  async alter_pwd(params) {
    const { ctx } = this
    try {
      const result = await ctx.app.mysql.query('select * from user_info where username = ?',[params.username])
      console.log(result);
      if (result[0].username === params.username && result[0].password === params.password){
        const query = await ctx.app.mysql.query('update user_info set password = ? where username = ?',[params.newpassword,params.username])
        return true;
      }else {
        return false;
      }
    } catch(error) {
      console.log(error);
      return null
    }
  }
}

module.exports = ReinstallService;
