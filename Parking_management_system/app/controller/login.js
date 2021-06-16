'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    const { ctx } = this
    // 获取传过来的data参数
    console.log(ctx.request.body);
    // 连接数据库进行判断
    const params = {
      ...ctx.request.body
    }
    // 返回结果
    // 往数据库去数据返回给客户端
    const result = await ctx.service.login.find(params)
    if (result) {
      ctx.body = {
        hasLogin: true,
        username:result[0].username,
        nickname:result[0].nickname,
        user_id:result[0].user_id,
      }
    } else {
      ctx.body = {
        hasLogin: false,
        status: 500,
        errMsg: '获取失败'
      }
    }
  }
}

module.exports = LoginController;
