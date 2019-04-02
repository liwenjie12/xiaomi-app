// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:0,
    list:[],
    region: ['四川省', '成都市', '金牛区'],
    number:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.showLoading({
      title: '加载中...',
      mask:true
    });
    wx.request({
      url: 'https://www.liwenjie12.tk/mobile/app.php?id='+options.id,
      type:"GET",
      header:{
        "content-type":"application/json"
      },
      success:function(result){
        result.data[0].list=[result.data[0].title];
        that.setData({
          list:result.data[0]
        });
        wx.hideLoading();
      }
    });
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
    var number=wx.getStorageSync("number");
    this.setData({
      number:number
    });
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

  },
  pickerChange:function(event){
    this.setData({
      index:event.detail.value
    })
  },
  location:function(event){
    this.setData({
      region: event.detail.value
    })
  },
  loading:function(){
    wx.showLoading({
      title: '加购成功',
      mask:true
    });
    setTimeout(function(){
      wx.hideLoading();
    },1000)
  },
  cart:function(){
    var cart = JSON.parse(wx.getStorageSync("cart"));
    var list=this.data.list;
    var number=1;
    for(var item in cart){
      if(cart[item].id==list.id){
        number=cart[item].num;
        number++;
        cart[item].num=number;
        wx.setStorageSync("cart", JSON.stringify(cart));
        this.number();
        this.loading();
        return false;
      }
    }
    cart.push({id:list.id,pic:list.pic,title:list.title,content:list.content,               price:list.newprice,num:number});
    wx.setStorageSync("cart", JSON.stringify(cart));
    this.number();
    this.loading();
  },
  number:function(){
    var number=wx.getStorageSync("number");
    number++;
    wx.setStorageSync("number",number);
    this.setData({
      number:number
    });
  },
  skip:function(){
    wx.switchTab({
      url: '/pages/cart/cart',
    });
  }
})