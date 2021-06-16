import { request } from '../../request/index.js'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    car_number: "",
    car_brand: "",
    ischecked: 1
  },

  add() {
    request({
      url: "/addcar",
      method: "POST",
      data: {
        username: this.data.username,
        car_number: this.data.car_number,
        car_brand: this.data.car_brand,
        ischecked: this.data.ischecked
      }
    }).then(res =>{
      wx.navigateBack({
        url: '/pages/car/index'
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      username: app.globalData.username
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