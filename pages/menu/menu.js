// pages/classtype/class/type.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 分类的变量
    classType:[
      {
       "id":1,
       "name":"面食"
      },
      {
        "id": 2,
        "name": "甜点"
      },
      {
        "id": 3,
        "name": "西餐"
      },
      {
        "id":4,
        "name":"小吃"
      }
    ],
    // 分类后的产品列表
    productList:[],
    // 初始数据
    productAll: [
      {
        "id": 1,
        "name": "老鸭面",
        "src": "../../images/menu/menu1.jpg",
        "price": 12,
        "classid":1
      },
      {
        "id": 2,
        "name": "麻婆豆腐",
        "src": "../../images/menu/menu2.jpg",
        "price": 25,
        "classid": 4
      },
      {
        "id": 3,
        "name": "西式牛排",
        "src": "../../images/menu/menu3.jpg",
        "price": 25,
        "classid":3
      },
      {
        "id": 4,
        "name": "精品甜点",
        "src": "../../images/menu/menu4.jpg",
        "price": 10,
        "classid":2
      },
      {
        "id": 5,
        "name": "三文鱼",
        "src": "../../images/menu/menu5.jpg",
        "price": 15,
        "classid":3
      },
      {
        "id": 6,
        "name": "脆皮烤鸭",
        "src": "../../images/menu/menu6.jpg",
        "price": 15,
        "classid":4
      }
      ]
  },
  searchTab(e){
    var p = this.data.productAll;
    var id = e.currentTarget.id;
    console.log(e);
    var list = []
    for(var i=0;i<p.length;i++){
        if(p[i].classid == id ){
          list.push(p[i])
        }
    }

    this.setData({
      productList:list
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