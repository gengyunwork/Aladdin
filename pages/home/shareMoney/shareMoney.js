// pages/home/shareMoney/shareMoney.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headImg: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/shareHead.png",
    items: [{
      img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/goods.png",
      place: "福建",
      title: "福州/武夷山/鼓浪屿/厦门/北海/桂林/阳朔3飞11日屿/厦门/北海/桂林/阳朔3飞11日",
      toast: "经典纯玩团0购物私家团让您满意而归经典纯玩团0购物私家团让您满意而归",
      price: "9.9",
      goods_id: 111,
    }, {
      img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/goods.png",
      place: "福建",
      title: "福州/武夷山/鼓浪屿/厦门/北海/桂林/阳朔3飞11日屿/厦门/北海/桂林/阳朔3飞11日",
      toast: "经典纯玩团0购物私家团让您满意而归经典纯玩团0购物私家团让您满意而归",
      price: "9.9",
      goods_id: 222,
    }, {
      img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/goods.png",
      place: "福建",
      title: "福州/武夷山/鼓浪屿/厦门/北海/桂林/阳朔3飞11日屿/厦门/北海/桂林/阳朔3飞11日",
      toast: "经典纯玩团0购物私家团让您满意而归经典纯玩团0购物私家团让您满意而归",
      price: "9.9",
      goods_id: 333,
    }],
    chooseBar: [{
      img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/wxIcon.png",
      text: "微信好友"
    }, {
      img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/posterIcon.png",
      text: "海报"
    }]
  },
  showModal1(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target1
    })
  },
  showModal2(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target2
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  linkToApplyPartner(e) {
    wx.navigateTo({
      url: '../applyPartner/partner',
    })
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