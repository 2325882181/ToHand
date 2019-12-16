// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //导航菜单
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


    // 精选商家
   
   storeList: [

      {
        "id": 1,
        "name": "兰州拉面",
        "src": "../../images/store/store1.jpg",
      },
      {
        "id": 2,
        "name": "黄焖鸡米饭",
        "src": "../../images/store/store2.jpg",
      },
      {
        "id": 3,
        "name": "沙县小吃",
        "src": "../../images/store/store3.jpg",
      },
      {
        "id":4,
        "name" :"桂林米粉",
        "src": "../../images/store/store4.jpg",
      },
      {
        "id": 5,
        "name": "老爹锅贴",
        "src": "../../images/store/store5.jpg",
      },
      {
        "id": 6,
        "name": "过桥米线",
        "src": "../../images/store/store6.jpg",
      }
      ]
  },

  // navtap(e) {
  //   var navList = this.data.navList;
  //   var id = e.currentTarget.id;
  //   console.log(e);    
  //   if (navList.id == 4) {
  //     wx.showToast({
  //       icon: 'none',
  //       title: '膳食表',
  //     })
  //   }
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