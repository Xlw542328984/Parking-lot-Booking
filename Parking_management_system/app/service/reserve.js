'use strict';

const Service = require('egg').Service;

class ReserveService extends Service {
  async add_reserve(params) {
    const { ctx } = this
    try {
      const result = await ctx.app.mysql.insert('reserve',params)
      console.log(result);
      if (result) {
        return result
      }
    } catch(error) {
      console.log(error);
      return null
    }
  }
}

module.exports = ReserveService;
