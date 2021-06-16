const app = getApp()
import { request } from '../../request/index.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    user_id: "",
    current_car_id: "",
    car_number: "",
    lot_id: "",
    lot_name: "",
    park_date: "",
    reserve_time: "",
    reserve_id: "",
    arrive_time: '',
    leave_time: '',
    columns: ['南区停车场', '西区停车场', '北区停车场'],
    time: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
    arriveshow: false,
    leaveshow: false,
    lotshow: false,
    isfinished: 0,
    minDate: new Date().getTime(),
    maxDate: new Date().getTime()+86400000*2,
  },
  showArrivePopup() {
    this.setData({ arriveshow: true });
  },
  showLeavePopup() {
    this.setData({ leaveshow: true });
  },
  showPlacePopup() {
    this.setData({ lotshow: true });
  },
  showdatePopup(){
    this.setData({ dateshow: true });
  },

  onArriveClose() {
    this.setData({ 
      arriveshow: false 
    });
  },
  onLeaveClose() {
    this.setData({ 
      leaveshow: false 
    });
  },
  onDateClose() {
    this.setData({ 
      dateshow: false 
    });
  },
  park_date(event){
    const d = event.detail.getFullYear()+'-'+event.detail.getMonth()+'-'+event.detail.getDate()
    this.setData({
      dateshow: false,
      park_date: d,
    });
  },
  
  arrive(event) {
    this.setData({
      arrive_time: event.detail.value
    });
    if(this.data.leave_time != "" && this.data.leave_time<=this.data.arrive_time){
      wx.showLoading({
        title: '时间不规范',
        icon: 'success',
        duration: 1000
      })
      this.setData({
        arrive_time: "",
      });
    }else{
      this.setData({
        arriveshow: false
      });
    }
  },

  leave(event) {
    this.setData({
      leave_time: event.detail.value,
    });
    if(this.data.arrive_time != "" && this.data.leave_time<=this.data.arrive_time){
      wx.showLoading({
        title: '时间不规范',
        icon: 'success',
        duration: 1000
      })
      this.setData({
        leave_time: "",
      });
      }else{
        this.setData({
          leaveshow: false
        });
      }
  },
  lot(event) {
    this.setData({
      lot_name: event.detail.value,
      lot_id: event.detail.index + 1,
    });
    // 对lot_id进行赋值
    this.setData({
      lotshow: false
    });
  },

  modify(){
    var d = new Date()
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var Hours = date.getHours();
    var Minutes = date.getMinutes();
    var Seconds = date.getSeconds();
    if (month < 10) {
      month = "0" + month;
    }
   if (day < 10) {
      day = "0" + day;
    }
    var d = year + '-' + month + '-' + day + ' ' + Hours + ':' + Minutes + ':' + Seconds;
    this.setData({
      reserve_time:d
    })
    request({
      url:'/modify_message',
      method: "POST",
      data: {
        reserve_id:this.data.reserve_id,
        lot_id:this.data.lot_id,
        lot_name:this.data.lot_name,
        reserve_time:this.data.reserve_time,
        arrive_time:this.data.arrive_time,
        leave_time: this.data.leave_time,
        park_date:this.data.park_date
      }
    }).then(res =>{
      console.log(res.data);
      if(res.data.issucceed){
        wx.showLoading({
          title: '修改成功',
          icon: 'success',
          duration: 2000
        })
        wx.navigateBack({
          url: '/pages/index/index',
        })
      }else{
        wx.showLoading({
          title: '修改失败',
          icon: 'fail',
          duration: 2000
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const park_date = options.park_date.substring(0,10)
    this.setData({
      reserve_id:options.reserve_id,
      park_date:park_date,
      lot_name:options.lot_name,
      lot_id:options.lot_id,
      arrive_time:options.arrive_time,
      leave_time:options.leave_time
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