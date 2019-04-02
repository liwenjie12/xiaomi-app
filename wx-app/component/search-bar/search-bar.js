// component/search-bar/search-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    input: function (event) {
      if (event.detail.value) {
        var data = event.detail.value;
      }
      else {
        var data = event.currentTarget.dataset.value;
      }
      if (!data) {
        return false;
      }
      this.setData({
        search: data.trim()
      });
      console.log(this.data.search);
    },
    search: function () {
      wx.navigateTo({
        url: '/pages/search/list/list?keyword=' + this.data.search,
      });
      // this.request();
    }
  }
})
