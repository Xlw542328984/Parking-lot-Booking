'use strict';

const Service = require('egg').Service;

class PlaceService extends Service {
  async place(params) {
    const { ctx } = this
    try {
      const result = await ctx.app.mysql.query('select * from hobby where username = ?',[params.username])
      console.log(result);
      return result;
    } catch(error) {
      console.log(error);
      return null
    }
  }
  async modify(params) {
    const { ctx } = this
    console.log(params);
    try {
      const str1 = await ctx.app.mysql.query('select * from hobby where username = ?',[params.username])
      const str2 = await ctx.app.mysql.query('delete from hobby where username = ?',[params.username])
      const result = await ctx.app.mysql.insert('hobby',params)
      return result
      // const query = await ctx.app.mysql.query('select * from hobby where username = ?',[params.username])
      // console.log(query);
      // console.log(query == []);
      // if(query){
      //   console.log("++");
      //   const str = 'update hobby set lot_id = ?,used_place = ?,start_time = ?,end_time = ? where user_id = ?'
      //   const result = await ctx.app.mysql.query(str,[params.lot_id,params.used_place,params.start_time,params.end_time,params.user_id])
      //   return result;
      // }else{
      //   console.log("--");
      //   const result = await ctx.app.mysql.insert('hobby',params)
      //   return result;
      // }
    } catch(error) {
      console.log(error);
      return null
    }
  }
}

module.exports = PlaceService;
