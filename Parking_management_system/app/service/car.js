'use strict';

const Service = require('egg').Service;

class AddcarService extends Service {
  async add(params) {
    const { ctx } = this
    try {
      const query = await ctx.app.mysql.query('select * from car_info where username = ?',[params.username])
      // console.log(query);
      for(let item =0;item < query.length;item++){
        // console.log(query[item].ischecked,"++++")
        const temp = await ctx.app.mysql.query('update car_info set ischecked = ? where car_id = ?',[0,query[item].car_id])
      }
      const result = await ctx.app.mysql.insert('car_info',params)
      // console.log(result);
      if (result) {
        return result
      }
    } catch(error) {
      console.log(error);
      return null
    }
  }
  async car_modify(params) {
    const { ctx } = this
    try {
      const query = await ctx.app.mysql.query('select * from car_info where username = ?',[params.username])
      // console.log(query);
      for(let item =0;item < query.length;item++){
        // console.log(query[item].ischecked,"++++")
        const temp = await ctx.app.mysql.query('update car_info set ischecked = ? where car_id = ?',[0,query[item].car_id])
      }
      const result = await ctx.app.mysql.query('update car_info set ischecked = ? where car_id = ?',[1,params.car_id])
      // console.log(result);
      if (result) {
        return result
      }
    } catch(error) {
      console.log(error);
      return null
    }
  }
  async car_delete(params) {
    const { ctx } = this
    try {
      const result = await ctx.app.mysql.query('delete from car_info where car_id = ?',[params.car_id])
      // console.log(result);
      if (result) {
        return result
      }
    } catch(error) {
      console.log(error);
      return null
    }
  }
}

module.exports = AddcarService;
