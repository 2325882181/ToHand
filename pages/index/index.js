// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [
      {"id": 1,
      "name": "新品商家",
      "src": "../../images/c1.png",
      },
      {
        "id": 2,
        "name": "营养搭配",
        "src": "../../images/c2.png",
      },
      {
        "id": 3,
        "name": "智能推荐",
        "src": "../../images/c3.png",
      },
      {
        "id": 4,
        "name": "膳食表",
        "src": "../../images/c4.png",
      },
      {
        "id": 5,
        "name": "新品商家",
        "src": "../../images/c5.png",
      },
      {
        "id": 6,
        "name": "营养搭配",
        "src": "../../images/c6.png",
      },
      {
        "id": 7,
        "name": "智能推荐",
        "src": "../../images/c7.png",
      },
      {
        "id": 8,
        "name": "膳食表",
        "src": "../../images/c8.png",
      }
    ],


    // 产品
   
   productList: [

      {
        "id": 1,
        "name": "老鸭面",
        "src": "../../images/menu/menu1.jpg",
        "price": 12
      },
      {
        "id": 2,
        "name": "麻婆豆腐",
        "src": "../../images/menu/menu2.jpg",
        "price": 25
      },
      {
        "id": 3,
        "name": "西式牛排",
        "src": "../../images/menu/menu3.jpg",
        "price": 25
      },
      {
        "id":4,
        "name" :"精品甜点",
        "src": "../../images/menu/menu4.jpg",
        "price": 10
      },
      {
        "id": 5,
        "name": "三文鱼",
        "src": "../../images/menu/menu5.jpg",
        "price": 15
      },
      {
        "id": 6,
        "name": "脆皮烤鸭",
        "src": "../../images/menu/menu6.jpg",
        "price": 15
      },
      {
        "id": 7,
        "name": "老鸭面",
        "src": "../../images/menu/menu1.jpg",
        "price": 20
      },
      {
        "id": 8,
        "name": "麻婆豆腐",
        "src": "../../images/menu/menu2.jpg",
        "price": 12

      },
      {
        "id": 9,
        "name": "西式牛排",
        "src": "../../images/menu/menu3.jpg",
        "price": 25
      },
      {
        "id": 10,
        "name": "精品甜点",
        "src": "../../images/menu/menu4.jpg",
        "price": 10,
        checked: true
      }
      ]
  },
  getNavList: function () {
    let that = this;
    wx.request({
      url: 'http://www.hengyishun.cn/login/navlist',
      success(res) {
        that.setData({
          navList: res.data
        })
      }
    })

  },
  getProductList: function () {
    let that = this;
    wx.request({
      url: 'http://www.hengyishun.cn/login/getProductList',
      success(res) {
        that.setData({
          productList: res.data
        })
      }
    })

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