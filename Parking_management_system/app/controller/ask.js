'use strict';

const Controller = require('egg').Controller;

class AskController extends Controller {
  async user() {
    const { ctx } = this
    const params = {
      ...ctx.request.body
    }
    const result = await ctx.service.ask.user(params)
    if (result) {
      ctx.body = {

      }
    } else {
      ctx.body = {
        status: 500,
        errMsg: '获取失败'
      }
    }
  }
  async order() {
    
  }
  async car() {
    
  }
  async lot() {
    const { ctx } = this
    const params = {
      ...ctx.request.body
    }
    const result = await ctx.service.ask.lot(params)
    if (result) {
      ctx.body = {
        result
      }
    } else {
      ctx.body = {
        status: 500,
        errMsg: '获取失败'
      }
    }
  }
}

module.exports = AskController;
