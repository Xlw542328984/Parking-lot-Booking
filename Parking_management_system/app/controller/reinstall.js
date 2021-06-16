'use strict';

const Controller = require('egg').Controller;

class ReinstallController extends Controller {
  async index() {
    const { ctx } = this
    console.log(ctx.request.body);
    const params = {
      ...ctx.request.body
    }
    const result = await ctx.service.reinstall.alter_pwd(params)
    if (result) {
      ctx.body = {
        issucceed: true,
      }
    } else {
      ctx.body = {
        issucceed: false,
        status: 500,
        errMsg: '获取失败'
      }
    }
  }
}

module.exports = ReinstallController;
