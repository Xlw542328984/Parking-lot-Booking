'use strict';

const Controller = require('egg').Controller;

class AddcarController extends Controller {
  async addcar() {
    const { ctx } = this;
    const params = {
      ...ctx.request.body
    }
    console.log(params);
    const result = await ctx.service.car.add(params)
    if (result) {
      ctx.body = result
    } else {
      ctx.body = {
        status: 500,
        errMsg: '添加失败',
        data: result
      }
    }
  }
  async car_modify() {
    const { ctx } = this;
    const params = {
      ...ctx.request.body
    }
    console.log(params);
    const result = await ctx.service.car.car_modify(params)
    if (result) {
      ctx.body = result
      
    } else {
      ctx.body = {
        status: 500,
        errMsg: '修改失败',
        data: result
      }
    }
  }
  async car_delete() {
    const { ctx } = this;
    const params = {
      ...ctx.request.body
    }
    console.log(params);
    const result = await ctx.service.car.car_delete(params)
    if (result) {
      ctx.body = result
      
    } else {
      ctx.body = {
        status: 500,
        errMsg: '删除失败',
        data: result
      }
    }
  }
}

module.exports = AddcarController;
