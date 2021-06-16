const app = getApp()
import { request } from '../../request/index.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    user_id:"",
    car:[],
    order: []
  },
  total_order(){
    request({
      url: '/order_total',
      method: "POST",
      data: {
        user_id:this.data.user_id
      }
    }).then(res => {
      // console.log(res.data);
      const result = res.data
      for(let item = 0;item<result.length;item++){
        // console.log(result[item].park_date);
        result[item].park_date = result[item].park_date.substring(0,10)
      }
      this.setData({
        order:res.data
      })
    })
  },
  delete_order(e){
    let select_reserve_id = e.currentTarget.dataset['index'];
    console.log(select_reserve_id);
    request({
      url: '/order_delete',  
      method: "POST",
      data: {
        reserve_id:select_reserve_id
      }
    }).then(res => {
      console.log(res.data);
    })
    setTimeout(() => {
      this.onShow()
    }, 500);
  },
  radioChange(e) {
    setTimeout(() => {
      this.onShow()
    }, 500);
  },
  
  order_modify(e) {
    let select_reserve_id = e.currentTarget.dataset['index'];
    // console.log(select_reserve_id);
    request({
      url: '/order_modify',  
      method: "POST",
      data: {
        reserve_id:select_reserve_id
      }
    }).then(res => {
      // console.log(res.data);
    })
    setTimeout(() => {
      this.onLoad()
    }, 500);
  },

  finished_order(){
    request({
      url: '/order_finished',
      method: "POST",
      data: {
        user_id:this.data.user_id
      }
    }).then(res => {
      // console.log(res.data);
      const result = res.data
      for(let item = 0;item<result.length;item++){
        // console.log(result[item].park_date);
        result[item].park_date = result[item].park_date.substring(0,10)
      }
      this.setData({
        order:res.data
      })
    })
    setTimeout(() => {
      this.onShow()
    }, 500);
  },
  going_order(){
    request({
      url: '/order_notfinished',
      method: "POST",
      data: {
        user_id:this.data.user_id
      }
    }).then(res => {
      // console.log(res.data);
      const result = res.data
      for(let item = 0;item<result.length;item++){
        // console.log(result[item].park_date);
        result[item].park_date = result[item].park_date.substring(0,10)
      }
      this.setData({
        order:res.data
      })
    })
    setTimeout(() => {
      this.onShow()
    }, 500);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      username:app.globalData.username,
      user_id:app.globalData.user_id,
      car:app.globalData.car,
    })
    this.total_order()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})