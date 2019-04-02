// component/shop-cate/shop-cate.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    more:String,
    dataList:Array,
    image:String
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
    skip:function(event){
      wx.navigateTo({
        url: '/pages/detail/detail?id='+event.currentTarget.dataset.id,
      })
      console.log(event.currentTarget);
    }
  }
})
