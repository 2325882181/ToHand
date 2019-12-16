// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {},
    hasAddress: false,
    total: 0,
    productList: [{
      "id": 1,
      "name": "老鸭面",
      "image": "../../images/menu/menu1.jpg",
      "price": 12 
    },
      {
        "id": 2,
        "name": "麻婆豆腐",
        "image": "../../images/menu/menu2.jpg",
        "price": 25
      },
      {
        "id": 3,
        "name": "西式牛排",
        "image": "../../images/menu/menu3.jpg",
        "price": 25
      },
      {
        "id": 4,
        "name": "精品甜点",
        "image": "../../images/menu/menu4.jpg",
        "price": 10
      }
    ]
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