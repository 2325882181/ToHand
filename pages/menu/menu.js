// pages/classtype/class/type.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 分类的变量
    classType:[
      {
        "cid": 0,
        "name": "全部"
      },
      {
        "cid":1,
        "name":"汤面"
      },
      {
        "cid": 2,
        "name": "炒面"
      },
      {
        "cid": 3,
        "name": "水饺"
      },
      {
        "cid":4,
        "name":"大盘鸡"
      }
    ],
    curIndex: 0,
    totalPrice: 0,
    // 分类后的产品列表
    productList:[],
    // 初始数据
    productAll: [
      {
        "pid": 1,
        "cid": 1,
        "pname": "牛肉拉面",
        "src": "../../images/menu/menu1.jpg",
        "price": 9,
        "classid": 1,
        "num": 0
      },
      {
        "pid": 2,
        "cid": 1,
        "pname": "鸡蛋拉面",
        "src": "../../images/menu/menu2.jpg",
        "price": 8,
        "classid": 1,
        "num": 0
      },
      {
        "pid": 3,
        "cid": 1,
        "pname": "牛肉炒刀削",
        "src": "../../images/menu/menu3.jpg",
        "price": 10,
        "classid": 2,
        "num": 0
      },
      {
        "pid": 4,
        "cid": 1,
        "pname": "鸡蛋炒刀削",
        "src": "../../images/menu/menu4.jpg",
        "price": 10,
        "classid": 2,
        "num": 0
      },
      {
        "pid": 5,
        "cid": 1,
        "pname": "水饺",
        "src": "../../images/menu/menu5.jpg",
        "price": 12,
        "classid": 3,
        "num": 0
      },
      {
        "pid": 6,
        "cid": 1,
        "pname": "大盘鸡",
        "src": "../../images/menu/menu6.jpg",
        "price": 50,
        "classid": 4,
        "num": 0
      }
    ],
  },

  //左侧分类栏
  searchTab(e){
    var p = this.data.productAll;
    var id = e.currentTarget.id;
    console.log(e);
    var list = [];
    for(var i=0;i<p.length;i++){
      if(id == 0){
        list.push(p[i])
      }
      else if(p[i].classid == id ){
        list.push(p[i])
      }
    }

    this.setData({
      productList:list,
      curIndex: e.target.dataset.index
    })
  },

  /**
   * 绑定加数量事件
   */
  addCount(e) {
    const index = e.currentTarget.dataset.index;
    let productList = this.data.productList;
    let productAll = this.data.productAll;
    if (productList.length == 0){
      let num = productAll[index].num;
      num = num + 1;
      productAll[index].num = num;
      this.setData({
        productAll: productAll
      });
      this.getTotalPrice();
    }else{
      let num = productList[index].num;
      num = num + 1;
      productList[index].num = num;
      this.setData({
        productList: productList
      });
      this.getTotalPrice();
    }
  },

  /**
   * 绑定减数量事件
   */
  minusCount(e) {
    const index = e.currentTarget.dataset.index;
    let productList = this.data.productList;
    let productAll = this.data.productAll;
    if (productList.length == 0){
      let num = productAll[index].num;
      if (num <= 0) {
        return false;
      }
      num = num - 1;
      productAll[index].num = num;
      this.setData({
        productAll: productAll
      });
      this.getTotalPrice();
    }else{
      let num = productList[index].num;
      if (num <= 0) {
        return false;
      }
      num = num - 1;
      productList[index].num = num;
      this.setData({
        productList: productList
      });
      this.getTotalPrice();
    }
  },

  /**
   * 计算总价
   */
  getTotalPrice() {
    var total = 0;
    let productList = this.data.productList;
    if (productList.length == 0){
      var product = this.data.productAll;
      for (let i = 0; i < product.length; i++) {         // 循环列表得到每个数据           
        total += product[i].num * product[i].price;   // 所有价格加起来   
      }
      this.setData({                                // 最后赋值到data中渲染到页面
        productAll: product,
        totalPrice: total.toFixed(2)
      });
    }else{
      var product = this.data.productList;
      for (let i = 0; i < product.length; i++) {         // 循环列表得到每个数据           
        total += product[i].num * product[i].price;   // 所有价格加起来   
      }
      this.setData({                                // 最后赋值到data中渲染到页面
        productList: product,
        totalPrice: total.toFixed(2)
      });
    }
  },

  /**
   * 跳转详情页面
   */
  todetail: function(e){
    var list = JSON.stringify(this.data.productAll);        //获取餐品列表
    let index = e.currentTarget.dataset.index;              //获取餐品index
    console.log("index为：" + e.currentTarget.dataset.index);     //检验是否获取成功
    wx.navigateTo({
      url: '/pages/detail/detail?index=' + index + '&productAll=' + list
    });
  },

  /**
   * 跳转支付页面
   */
  buy: function () {
    var list = JSON.stringify(this.data.productAll);
    wx.navigateTo({
      url: '/pages/pay/pay?total=' + this.data.totalPrice + '&productAll=' + list
    });
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