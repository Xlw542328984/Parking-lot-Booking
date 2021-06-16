const app = getApp()
import { request } from '../../request/index.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    used_place: "",
    car_number: "",
    start_time: "",
    end_time: "",
    username: "",
    user_id: "",
    nickname: "",
    current_car_id:"",
    car:[],
    order:[],
    hobby:[
      {
        lot_id: 1,
        used_place: "南区停车场",
        start_time: 8,
        end_time: 12
      }
    ]
  },

  reserve() {
    wx.navigateTo({
      url: '/pages/reserve/index',
    })
  },
  handle_setting() {
    wx.navigateTo({
      url: '/pages/used/index?username='+this.data.username+'&user_id='+this.data.user_id,
    })
  },
  go_reserve(){
    wx.navigateTo({
      url: '/pages/reserve/index?lot_id='+this.data.hobby[0].lot_id+'&lot_name='+this.data.hobby[0].used_place+'&arrive_time='+this.data.hobby[0].start_time+'&leave_time='+this.data.hobby[0].end_time,
    })
  },
  async going_order(){
    await request({
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
        const day = parseInt(result[item].park_date.substring(8,10)) + 1
        // console.log(day);
        result[item].park_date = result[item].park_date.substring(0,8)+day
        // console.log(result[item].park_date);
      }
      this.setData({
        order:res.data
      })
    })
  },

  async getcar(){
    await request({
      url: '/getcar',
      method: "POST",
      data: {
        username: app.globalData.username
      }
    }).then(res => {
      // console.log(res.data);
      this.setData({
        car:res.data
      })
    })
  },

  modify_order(e){
    let item = e.currentTarget.dataset['index'];
    console.log(item);
    wx.navigateTo({
      url: '/pages/modify/index?reserve_id='+item.reserve_id+'&lot_id='+item.lot_id+'&lot_name='+item.lot_name+'&park_date='+item.park_date+'&arrive_time='+item.arrive_time+'&leave_time='+item.leave_time,
    })
  },
  car(){
    wx.navigateTo({
      url: '/pages/car/index',
    })
  },
  order(){
    wx.navigateTo({
      url: '/pages/order/index',
    })
  },
  
  delete_order(e) {
    let item = e.currentTarget.dataset['index'];
    let select_reserve_id = item.reserve_id
    request({
      url: '/order_delete',
      method: "POST",
      data: {
        reserve_id:select_reserve_id
      }
    }).then(res => {
      // console.log(res.data);
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
     user_id:app.globalData.user_id,
     username:app.globalData.username
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
    this.getcar()
    setTimeout(() => {
      app.globalData.current_car_id = null,
      app.globalData.car_number = null,
      app.globalData.car = this.data.car
      for(let item=0;item<this.data.car.length;item++){
        if(this.data.car[item].ischecked == 1){
          app.globalData.current_car_id = this.data.car[item].car_id,
          app.globalData.car_number = this.data.car[item].car_number,
          app.globalData.car = this.data.car
        }
      }
    }, 500);
    request({
      url: '/get_used_place',
      method: "POST",
      data: {
        username:this.data.username
      }
    }).then(res => {
      if(res.data[0]){
        this.setData({
          hobby:res.data
        })
      }
    })
    this.going_order()
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