// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productId: "",
    productList: [],
    index: "",
    detailList: [
      {
        "id": 1,
        "name": "牛肉拉面",
        "src1": "../../images/nrlm/nrlm1.jpg",
        "src2": "../../images/nrlm/nrlm2.jpg",
        "src3": "../../images/nrlm/nrlm3.jpg",
        "price": 9
      },
      {
        "id": 2,
        "name": "鸡蛋拉面",
        "src1": "../../images/jdlm/jdlm1.jpg",
        "src2": "../../images/jdlm/jdlm2.jpg",
        "src3": "../../images/jdlm/jdlm3.jpg",
        "price": 8
      },
      {
        "id": 3,
        "name": "牛肉炒刀削",
        "src1": "../../images/nrcdx/nrcdx1.jpg",
        "src2": "../../images/nrcdx/nrcdx2.jpg",
        "src3": "../../images/nrcdx/nrcdx3.jpg",
        "price": 10
      },
      {
        "id": 4,
        "name": "鸡蛋炒刀削",
        "src1": "../../images/jdcdx/jdcdx1.jpg",
        "src2": "../../images/jdcdx/jdcdx2.jpg",
        "src3": "../../images/jdcdx/jdcdx3.jpg",
        "price": 10
      },
      {
        "id": 5,
        "name": "水饺",
        "src1": "../../images/sj/sj1.jpg",
        "src2": "../../images/sj/sj2.jpg",
        "src3": "../../images/sj/sj3.jpg",
        "price": 12
      },
      {
        "id": 6,
        "name": "大盘鸡",
        "src1": "../../images/dpj/dpj1.jpg",
        "src2": "../../images/dpj/dpj2.jpg",
        "src3": "../../images/dpj/dpj3.jpg",
        "price": 50
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var product = JSON.parse(options.productAll);           //获得数组
    var index = options.index;                              //获得餐品id
    //查看传值是否成功
    console.log(product);    
    console.log(product[index].id);                             
    this.setData({
      productList: product,
      index: index
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