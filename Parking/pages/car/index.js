import { request } from '../../request/index.js'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    car: []
  },

  go_add() {
    wx.navigateTo({
      url: '/pages/addcar/index',
    })
  },

  go_modify(e) {
    let select_car_id = e.currentTarget.dataset['index'];
    request({
      url: '/car_modify',  
      method: "POST",
      data: {
        car_id:select_car_id,
        username:this.data.username
      }
    }).then(res => {
      // console.log(res.data);
    })
    app.globalData.current_car_id = select_car_id
  },

  go_delete(e){
    let select_car_id = e.currentTarget.dataset['index'];
    // console.log(select_car_id);
    request({
      url: '/car_delete',  
      method: "POST",
      data: {
        car_id:select_car_id,
        username:this.data.username
      }
    }).then(res => {
      // console.log(res.data);
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
    // this.get_car(this.data.username);
    request({
      url: '/getcar',
      method: "POST",
      data: {
        username:this.data.username
      },
    }).then(res => {
      // console.log(res.data);
      this.setData({
        car: res.data
      })
      // console.log(this.data.car);15070191817
    })
    setTimeout(() => {
      app.globalData.car = this.data.car
      app.globalData.current_car_id = null
      app.globalData.car_number = null
      for(var item=0;item< this.data.car.length;item++){
        if(this.data.car[item].ischecked === 1){
          app.globalData.current_car_id = this.data.car[item].car_id
          app.globalData.car_number = this.data.car[item].car_number
          return
        }
      }
    }, 500);
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