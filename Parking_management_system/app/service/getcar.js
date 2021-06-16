'use strict';

const Service = require('egg').Service;

class GetcarService extends Service {
  async carlist(params) {
    const { ctx } = this
    try {
      const result = await ctx.app.mysql.query('select * from car_info where username = ?',[params.username])
      console.log(result);
      return result;
    } catch(error) {
      console.log(error);
      return null
    }
  }
}

module.exports = GetcarService;
