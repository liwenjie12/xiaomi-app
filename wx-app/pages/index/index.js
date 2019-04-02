Page({
  request: function (url, func) {
    var res;
    wx.request({
      url: url,
      method: "GET",
      header: {
        "content-type": "application/json",
        'Accept': 'application/json'
      },
      success: func,
    });
    return res;
  },
  onLoad:function(){
    var that=this;
    wx.showLoading({
      title: '加载中...',
      mask:true
    });
    this.request("https://www.liwenjie12.tk/php/nav.php?module=shangou",everyday);
    function everyday(res){
      that.setData({everyday:res.data.shangou});
    }
    this.request("https://www.liwenjie12.tk/php/nav.php?module=tv",tv);
    function tv(res){
      that.setData({ tv: res.data.tv});
      wx.hideLoading();
    }
  },
  onShow:function(){
    var number = wx.getStorageSync("number");
    wx.setTabBarBadge({
      index: 2,
      text: number + "",
    });
  },
  data:{
    everydayMsg:"更多小米手机产品 >",
    tvMsg:"更多小米电视产品 >",
    everyday:[],
    tv:[],
    everydayImage:"/images/everyday.webp.jpg",
    tvImage:"/images/tvImage.webp.jpg"
  },
  skip:function(event){
    wx.switchTab({
      url: '/pages/search/search',
      success:function(){
        console.log("成功啦");
      }
    })
  },
});