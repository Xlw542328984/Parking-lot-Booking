'use strict';

const Controller = require('egg').Controller;

class GetcarController extends Controller {
  async index() {
    const { ctx } = this
    // console.log(ctx.request.body);
    const params = {
      ...ctx.request.body
    }
    const result = await ctx.service.getcar.carlist(params)
    if (result) {
      ctx.body = result
    } else {
      ctx.body = {
        status: 500,
        errMsg: '获取失败'
      }
    }
  }
}

module.exports = GetcarController;
