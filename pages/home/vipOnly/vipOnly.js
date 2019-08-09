// pages/home/vipOnly/vipOnly.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headImg: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/vipHead.png",
    items: [{
      img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/goods.png",
      place: "福建",
      title: "福州/武夷山/鼓浪屿/厦门/北海/桂林/阳朔3飞11日屿/厦门/北海/桂林/阳朔3飞11日",
      toast: "经典纯玩团0购物私家团让您满意而归经典纯玩团0购物私家团让您满意而归",
      keyList: ["爆款", "爆款", "爆款"],
      num: "170",
      goods_id : 11,
    }, {
      img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/goods.png",
      place: "福建",
      title: "福州/武夷山/鼓浪屿/厦门/北海/桂林/阳朔3飞11日屿/厦门/北海/桂林/阳朔3飞11日",
      toast: "经典纯玩团0购物私家团让您满意而归经典纯玩团0购物私家团让您满意而归",
      keyList: ["爆款", "爆款", "爆款"],
      num: "170",
        goods_id: 22,
    }, {
      img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/goods.png",
      place: "福建",
      title: "福州/武夷山/鼓浪屿/厦门/北海/桂林/阳朔3飞11日屿/厦门/北海/桂林/阳朔3飞11日",
      toast: "经典纯玩团0购物私家团让您满意而归经典纯玩团0购物私家团让您满意而归",
      keyList: ["爆款", "爆款", "爆款"],
      num: "170",
        goods_id: 33,
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    
  },
  linkToCommodity(e) {
    console.log(e.detail)
    // goods_id 商品id link_id 1 为周边游 2 为会员专享
    wx.navigateTo({
      url: '../commodity/index?goods_id=' + e.detail + '&link_id=2',
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})