'use strict';

const Controller = require('egg').Controller;

class RegisterController extends Controller {
  async index() {
    const { ctx } = this
    console.log(ctx.request.body);
    const params = {
      ...ctx.request.body
    }
    const result = await ctx.service.register.zhuce(params)
    if (result) {
      ctx.body = {
        isOccupied: false
      }
    } else {
      ctx.body = {
        isOccupied: true,
        status: 500,
        errMsg: '获取失败'
      }
    }
  }  
}

module.exports = RegisterController;
