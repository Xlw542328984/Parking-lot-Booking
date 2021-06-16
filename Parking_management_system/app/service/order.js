'use strict';

const Service = require('egg').Service;

class OrderService extends Service {
  async total(params) {
    const { ctx } = this
    try {
      const result = await ctx.app.mysql.query('select * from reserve where user_id = ?',[params.user_id])
      console.log(result);
      return result;
    } catch(error) {
      console.log(error);
      return null
    }
  }
  async modify_isfinished(params) {
    const { ctx } = this
    try {
      // const query = await ctx.app.mysql.query('select * from reserve  where reserve_id = ?',[params.reserve_id])
      const result = await ctx.app.mysql.query('update reserve set isfinished = ? where reserve_id = ?',[1,params.reserve_id])
      return result;
    } catch(error) {
      console.log(error);
      return null
    }
  }
  async modify_message(params) {
    console.log(params);
    const { ctx } = this
    try {
      const str = 'update reserve set lot_id = ?,lot_name = ?,reserve_time = ?,arrive_time = ?,leave_time = ? ,park_date = ? where reserve_id = ?'
      const result = await ctx.app.mysql.query(str,[params.lot_id,params.lot_name,params.reserve_time,params.arrive_time,params.leave_time,params.park_date,params.reserve_id])
      console.log(result);
      return result
    } catch(error) {
      console.log(error);
      return null
    }
  }
  async delete(params) {
    const { ctx } = this
    try {
      const result = await ctx.app.mysql.query('delete from reserve where reserve_id = ?',[params.reserve_id])
      console.log(result);
      return result;
    } catch(error) {
      console.log(error);
      return null
    }
  }
  async finished(params) {
    const { ctx } = this
    try {
      const result = await ctx.app.mysql.query('select * from reserve where user_id = ? and isfinished = ?',[params.user_id,1])
      console.log(result);
      return result;
    } catch(error) {
      console.log(error);
      return null
    }
  }
  async notfinished(params) {
    const { ctx } = this
    try {
      const result = await ctx.app.mysql.query('select * from reserve where user_id = ? and isfinished = ?',[params.user_id,0])
      console.log(result);
      return result;
    } catch(error) {
      console.log(error);
      return null
    }
  }
}

module.exports = OrderService;
