'use strict';

const Controller = require('egg').Controller;

class UsedController extends Controller {
  async place() {
    const { ctx } = this
    console.log(ctx.request.body);
    const params = {
      ...ctx.request.body
    }
    const result = await ctx.service.used.place(params)
    if (result) {
      ctx.body = result
    } else {
      ctx.body = {
        status: 500,
        errMsg: '获取失败'
      }
    }
  }
  async modify() {
    const { ctx } = this
    console.log(ctx.request.body);
    const params = {
      ...ctx.request.body
    }
    const result = await ctx.service.used.modify(params)
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

module.exports = UsedController;
