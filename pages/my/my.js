// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginOK: false
  },

  // 登录成功显示
  onShow() {
    let user = wx.getStorageSync('user')
    if (user && user.name) {
      this.setData({
        loginOK: true,
        name: user.name
      })
    } else {
      this.setData({
        loginOK: false
      })
    }
  },

  //退出登陆
  loginOut() {
    wx.setStorageSync('user', null)
    let user = wx.getStorageSync('user')
    if (user && user.name) {
      this.setData({
        loginOK: true,
        name: user.name
      })

    } else {
      this.setData({
        loginOK: false
      })
    }
  },

  //每日签到
  sign_in: function () {
    wx.showModal({
      title: '签到成功！',
      content: '您已成功签到',
      showCancel: false
    })
  },

  //我的关注
  attention: function () {
    wx.showModal({
      title: '我的关注',
      content: '该功能有待开发，敬请期待！',
      showCancel: false
    })
  },

  //我的评价
  comment: function () {
    wx.showModal({
      title: '我的评价',
      content: '该功能有待开发，敬请期待！',
      showCancel: false
    })
  },

  //领券中心
  ticket: function () {
    wx.showModal({
      title: '领券中心',
      content: '该功能有待开发，敬请期待！',
      showCancel: false
    })
  },

  //关于我们
  aboutUs: function(){
    wx.showModal({
      title: '关于我们',
      content: '本系统由到手送团队搭建，祝大家使用愉快！',
      showCancel: false
    })
  },

  //退出登录
  // loginOut: function(){
  //   wx.showToast({
  //     title: '退出登录',
  //   })
  //   wx.reLaunch({
  //     url: '../my/my',
  //   })
  // },

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