// pages/search/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search:[],
    value:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中..',
      mask:true
    })
    this.setData({
      value:options.keyword
    });
    this.request(options.keyword);
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

  },
  request: function (e) {
    var that = this;
    wx.request({
      url: 'https://www.liwenjie12.tk/mobile/app.php?keyword=' + e,
      type: "GET",
      header: {
        "content-type": "application/json"
      },
      success: function (result) {
        that.setData({
          search:result.data
        });
        wx.hideLoading();
      }
    })
  },
  skip:function(event){
    console.log(event);
    wx.navigateTo({
      url: '/pages/detail/detail?id='+event.currentTarget.dataset.value,
    });
  }
})