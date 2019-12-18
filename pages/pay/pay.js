// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {},
    hasAddress: false,
    total: 0,
    productList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var product = JSON.parse(options.productAll);     //获得数组
    //查看传值是否成功
    console.log(product);         
    let list = [];
    for (var i = 0; i < product.length; i++) {
      if (product[i].num > 0) {
        list.push(product[i])
      }
    }
    this.setData({
      total: options.total,
      productList: list
    })
    console.log(list)
  },

  // // 跳转订单页
  // toPay: function () {
  //   let list = JSON.stringify(this.data.productList);
  //   wx.navigateTo({
  //     url: '/pages/order/order?total=' + this.data.total + '&productList=' + list
  //   });
  // },

  // 跳回主页
  toPay: function() {
    wx.showModal({
      title: '提交订单',
      content: '确认提交订单?',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定'),
            wx.switchTab({
              url: '/pages/index/index'
            })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
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
    const self = this;
    wx.getStorage({
      key: 'address',
      success(res) {
        self.setData({
          address: res.data,
          hasAddress: true
        })
      }
    })
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