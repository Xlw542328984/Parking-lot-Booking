'use strict';

const Controller = require('egg').Controller;

class ReserveController extends Controller {
  async index() {
    const { ctx } = this
    console.log(ctx.request.body);
    const params = {
      ...ctx.request.body
    }
    const result = await ctx.service.reserve.add_reserve(params)
    if (result) {
      ctx.body = {
        issucceed:true,
        result
      }
    } else {
      ctx.body = {
        issucceed:false,
        status: 500,
        errMsg: '获取失败'
      }
    }
  }
}

module.exports = ReserveController;
