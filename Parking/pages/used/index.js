const app = getApp()
import { request } from '../../request/index.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    user_id: "",
    lot_id: "",
    used_place: null,
    start_time: null,
    end_time: null,
    columns: ['南区停车场', '西区停车场', '北区停车场'],
    time: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
    arriveshow: false,
    leaveshow: false,
    lotshow: false,
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
  
    start(event) {
      this.setData({
        start_time: event.detail.value
      });
      if(this.data.end_time != null && this.data.end_time<=this.data.start_time){
        wx.showLoading({
          title: '时间不规范',
          icon: 'success',
          duration: 1000
        })
        this.setData({
          start_time: null,
        });
      }else{
        this.setData({
          arriveshow: false
        });
      }
    },
  
    end(event) {
      this.setData({
        end_time: event.detail.value,
      });
      if(this.data.start_time != null && this.data.end_time<=this.data.start_time){
        wx.showLoading({
          title: '时间不规范',
          icon: 'success',
          duration: 1000
        })
        this.setData({
          end_time: null,
        });
        }else{
          this.setData({
            leaveshow: false
          });
        }
    },
    used(event) {
      this.setData({
        used_place: event.detail.value,
        lot_id: event.detail.index + 1,
      });
      // 对lot_id进行赋值
      this.setData({
        lotshow: false
      });
    },

    define(){
      request({
        url: '/modify_used_place',
        method: "POST",
        data: {
          username: this.data.username,
          user_id: this.data.user_id,
          used_place: this.data.used_place,
          lot_id: this.data.lot_id,
          start_time: this.data.start_time,
          end_time: this.data.end_time
        }
      }).then(res => {
        console.log(res.data);
        wx.navigateBack({
          url: '/pages/index/index',
        })
      })

    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
     this.setData({
       username:options.username,
       user_id:options.user_id
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