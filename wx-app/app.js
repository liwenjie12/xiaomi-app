//app.js
App({
  onLaunch:function(){
   if(wx.getStorageSync("cart")){
     return false;
   }
   else{
     wx.setStorageSync("cart", "[]");
     wx.setStorageSync("number", 0);
   }
  }
})