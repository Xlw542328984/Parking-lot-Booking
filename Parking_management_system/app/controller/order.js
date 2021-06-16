'use strict';

const Controller = require('egg').Controller;

class OrderController extends Controller {
  async total() {
    const { ctx } = this
    console.log(ctx.request.body);
    const params = {
      ...ctx.request.body
    }
    const result = await ctx.service.order.total(params)
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
    const result = await ctx.service.order.modify_isfinished(params)
    if (result) {
      ctx.body = result
    } else {
      ctx.body = {
        status: 500,
        errMsg: '获取失败',
        result
      }
    }
  }
  async message() {
    const { ctx } = this
    console.log(ctx.request.body,"+++++++++++++++");
    const params = {
      ...ctx.request.body
    }
    const result = await ctx.service.order.modify_message(params)
    if (result) {
      ctx.body = {
        issucceed:true,
        result
      }
    } else {
      ctx.body = {
        issucceed:false,
        status: 500,
        errMsg: '获取失败',
        result
      }
    }
  }
  async delete() {
    const { ctx } = this
    console.log(ctx.request.body);
    const params = {
      ...ctx.request.body
    }
    const result = await ctx.service.order.delete(params)
    if (result) {
      ctx.body = result
    } else {
      ctx.body = {
        status: 500,
        errMsg: '获取失败'
      }
    }
  }
  async finished() {
    const { ctx } = this
    console.log(ctx.request.body);
    const params = {
      ...ctx.request.body
    }
    const result = await ctx.service.order.finished(params)
    if (result) {
      ctx.body = result
    } else {
      ctx.body = {
        status: 500,
        errMsg: '获取失败'
      }
    }
  }
  async notfinished() {
    const { ctx } = this
    console.log(ctx.request.body);
    const params = {
      ...ctx.request.body
    }
    const result = await ctx.service.order.notfinished(params)
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

module.exports = OrderController;
