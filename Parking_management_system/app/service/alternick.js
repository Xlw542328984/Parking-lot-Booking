'use strict';

const Service = require('egg').Service;

class AlternickService extends Service {
  async alter(params) {
    const { ctx } = this
    console.log(params);
    try {
      // const query = {
      //   username: params.username,
      //   otherField: 'other field value',
      //   modifiedAt: this.app.mysql.literals.now,
      // }
      const query = await ctx.app.mysql.query('update user_info set nickname = ? where username = ?',[params.nickname,params.username])
      const result = await ctx.app.mysql.query('select * from user_info where username = ?',[params.username])
      console.log(result);
      return result
    } catch(error) {
      console.log(error);
      return null
    }
  }
}

module.exports = AlternickService;
