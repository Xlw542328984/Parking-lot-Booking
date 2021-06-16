import { request } from '../../request/index.js'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    nickname: "",
    user_id: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      username: app.globalData.username,
      nickname: app.globalData.nickname,
      user_id: app.globalData.user_id
    })
  },

  alter_nick() {
    request({
      url: "/alternick",
      method: "POST",
      data: {
        username: this.data.username,
        nickname: this.data.nickname
      }
    }).then(res =>{
      console.log(res.data);
      app.globalData = {
        username: res.data.username,
        nickname: res.data.nickname,
        user_id: res.data.user_id
      }
      wx.switchTab({
        url: '/pages/me/index'
      })
    })
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
    this.setData({
      username: app.globalData.username,
      nickname: app.globalData.nickname,
    })
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