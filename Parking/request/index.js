export const request = (params) => {
  const baseUrl = "http://127.0.0.1:7001"
  return new Promise((resolve,reject) => {
    wx.request({
      ...params,
      url: baseUrl + params.url,
      header: {
        'content-type': 'application/json'
      },
      // dataType: 'json',
      success:(result) => {
        resolve(result);
      },
      fail:(err) => {
        reject(err);
      }
    });
  })
}


    // wx.request({
    //   url: 'http://127.0.0.1:7001/login',
    //   header: {
    //     "Content-Type": "application/json"
    //   },
    //   dataType: 'json',
    //   method: "POST",
    //   data: this.data.allvalue,
    //   success: function (res) {
    //     console.log(res.data);
    //     if (res.data == "1"){
    //       wx.switchTab({
    //         url: '../index/index'
    //       })
    //     }else{
    //       console.log("密码错误");
    //     }
    //   }
    // })