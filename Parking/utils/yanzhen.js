module.exports  = {
  yanzhen() {
    var phone = this.data.username;
    let that = this
    if (!(/^1[345789]\d{9}$/.test(phone))) {
      this.setData({
        ajxtrue: false
      })
      if (phone.length > 11) {
        wx.showToast({
          title: '请输入正确的手机号码',
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
  }
}
