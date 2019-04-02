// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cart:[],
    price:0,
    checked:false,
    number:0
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
    this.data.number = wx.getStorageSync("number");
    var data = JSON.parse(wx.getStorageSync("cart"));
    this.setData({
      cart: data
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    wx.setStorageSync("cart",JSON.stringify(this.data.cart));
    wx.setStorageSync("number", this.data.number);
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
  },
  check:function(event){
    var checked=!this.data.checked;
    var cart = this.data.cart;
    var price=0;
    if(checked){
      for(var i=0;i<cart.length;i++){
        price+=(parseFloat(cart[i].price)*cart[i].num);
      }
    }
    this.setData({
      checked:checked,
      price:price
    });
  },
  compute:function(event){
    var price=0;
    var value = event.detail.value;
    for(var i=0;i<value.length;i++){
      price+=parseFloat(value[i]);
    }
    this.setData({
      price:price
    });
  },
  plus:function(event){
    var index=event.target.dataset.index;
    this.data.cart[index].num++;
    this.setData({
      cart:this.data.cart
    });
    this.data.number++;
    this.setData({
      number:this.data.number
    });
    wx.setTabBarBadge({
      index: 2,
      text: this.data.number+"",
    });
  },
  minus:function(event){
    var index = event.target.dataset.index;
    if (this.data.cart[index].num <= 1) {
      wx.showModal({
        title: '购物车提示',
        content: '最少购买一件',
      });
      return false;
    }
    this.data.cart[index].num--;
    this.setData({
      cart: this.data.cart
    });
    this.data.number--;
    wx.setTabBarBadge({
      index: 2,
      text: this.data.number + "",
    });
  },
  delect:function(event){
    var index=event.target.dataset.index;
    this.data.number-=this.data.cart[index].num;
    wx.setTabBarBadge({
      index: 2,
      text: ''+this.data.number,
    })
    this.data.cart.splice(index,1);
    this.setData({
      cart:this.data.cart,
      number:this.data.number
    });
  }
})