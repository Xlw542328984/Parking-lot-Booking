import { request } from '../../request/index.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    password: "",
    newpassword: "",
    renewpassword: "",
    ajxtrue: ""
  },

  
  blurPhone(e) {
    var phone = e.detail.value;
    let that = this
    if (!(/^1[345789]\d{9}$/.test(phone))) {
      this.setData({
        ajxtrue: false
      })
      if (phone.length > 11) {
        wx.showToast({
          title: '手机号不规范',
          icon: 'success',
          duration: 2000
        })
      }
    } else {
      this.setData({
        ajxtrue: true
      })
      console.log('验证成功', that.data.ajxtrue)
     }
  },

  
  formSubmit: function (e) {
    let that = this
    let val = e.detail.value
    let ajxtrue = this.data.ajxtrue
    if (ajxtrue == true) {
    //表单提交进行
    } else {
      wx.showToast({
        title: '手机号有误',
        icon: 'success',
        duration: 2000
      })
      return
    }
    if(this.data.newpassword === this.data.renewpassword){
    } else {
      wx.showToast({
        title: '密码不一致',
        icon: 'success',
        duration: 2000
      })
      return
    }
    //发送注册请求
    request({
      url: '/reinstall',
      method: "POST",
      data: {
        username:this.data.username,
        password:this.data.password,
        newpassword:this.data.newpassword,
      },
    }).then(res =>{
      console.log(res.data);
      if(res.data.issucceed){
        wx.navigateBack({
          url: '/pages/login/index',
        })
      }else{
        wx.showToast({
          title: '密码错误',
          icon: 'fail',
          duration: 2000
        })
      }
    })
  },

  empty(){

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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