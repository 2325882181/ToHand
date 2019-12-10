// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product:[],
    productList: [
      {
        "id": 1,
        "name": "老鸭面",
        "src": "../../images/menu/menu1.jpg",
        "price": 12
      }
  ],
      price:0
  },
   //获取产品对象
   getPorduct(){

     var productId = wx.getStorageSync("id");
     var p = this.data.productList;
     for(var i=0;i < p.length ;i++){
       if(p[i].id==productId){
         this.setData({
           product:p[i]
         })
       }
     }
     console.log(this.data.product.src);
   },
   //合并付款事件
   //change
  checkboxChange(e){
  
    var priceSum=0;
    var id = e.currentTarget.id;
    var num = e.detail.value;
    var p = this.data.productList;
    if(num != ''){
       for(var i=0;i<p.length;i++){
         if(p[i].id == id){
           priceSum = this.data.price + p[i].price
         }
       }
    }
    else{
      for (var i = 0; i < p.length; i++) {
        if (p[i].id == id) {
          priceSum = this.data.price - p[i].price
        }
      }
    }
     console.log(priceSum)
    this.setData({
      price:priceSum
    })
    
  },
   
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPorduct();
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
    this.getPorduct();
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