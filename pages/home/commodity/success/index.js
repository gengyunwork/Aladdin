// pages/home/commodity/success/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/success.png",
    goods_name:"哈尔滨五日游哈尔滨五日游",
    goods_date:"3"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //点击继续购物 跳转到首页
  linkToHome:function(e){
    wx.redirectTo({
      url: "../../../../pages/home/home",

    })
    console.log("1")
  },
  //点击查看订单 跳转到订单页
  linkToOrder:function(e){
    wx.navigateTo({
      url: '../../../user/order/order',
    })
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