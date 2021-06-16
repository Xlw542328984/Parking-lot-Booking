'use strict';

const Controller = require('egg').Controller;

class AlternickController extends Controller {
  async index() {
    const { ctx } = this
    console.log(ctx.request.body);
    const params = {
      ...ctx.request.body
    }
    const result = await ctx.service.alternick.alter(params)
    console.log(result);
    if (result) {
      ctx.body = {
        username:result[0].username,
        nickname:result[0].nickname,
        user_id:result[0].user_id,
      }
    } else {
      ctx.body = {
        status: 500,
        errMsg: '获取失败'
      }
    }
  }
}

module.exports = AlternickController;
