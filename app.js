App({
  onLaunch: function () {
    wx.cloud.init({
      env: "weibo-z0z04"
    })
  },
  globaData: {
    userInfo: null
  }
})