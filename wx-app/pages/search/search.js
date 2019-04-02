// pages/search/search.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    search:"",
    hot:["米家手持无线吸尘器","最生活毛巾","手机","电脑"]
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
    var number=wx.getStorageSync("number");
    wx.setTabBarBadge({
      index: 2,
      text: number+"",
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
  input:function(event){
    wx.navigateTo({
      url: './list/list?keyword='+event.currentTarget.dataset.value,
    });
  }
})