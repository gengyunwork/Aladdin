// pages/user/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentData: 0,
    // type 为0 是待使用订单 为1是已完成订单 2是退款订单
    items: [{
      type: 0,
      orderList: [{
        img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/goods.png",
        place: "福建",
        title: "福州/武夷山/鼓浪屿/厦门/北海/桂林/阳朔3飞11日屿/厦门/北海/桂林/阳朔3飞11日",
        toast: "经典纯玩团0购物私家团让您满意而归经典纯玩团0购物私家团让您满意而归",
        goods_id: "1",
      }, {
        img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/goods.png",
        place: "福建",
        title: "福州/武夷山/鼓浪屿/厦门/北海/桂林/阳朔3飞11日屿/厦门/北海/桂林/阳朔3飞11日",
        toast: "经典纯玩团0购物私家团让您满意而归经典纯玩团0购物私家团让您满意而归",
        goods_id: "1",
      }, {
        img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/goods.png",
        place: "福建",
        title: "福州/武夷山/鼓浪屿/厦门/北海/桂林/阳朔3飞11日屿/厦门/北海/桂林/阳朔3飞11日",
        toast: "经典纯玩团0购物私家团让您满意而归经典纯玩团0购物私家团让您满意而归",
        goods_id: "1",
      }]
    }, {
      type: 1,
      orderList: [{
        img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/goods.png",
        place: "福建",
        title: "福州/武夷山/鼓浪屿/厦门/北海/桂林/阳朔3飞11日屿/厦门/北海/桂林/阳朔3飞11日",
        toast: "经典纯玩团0购物私家团让您满意而归经典纯玩团0购物私家团让您满意而归",
        goods_id: "1",
      }, {
        img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/goods.png",
        place: "福建",
        title: "福州/武夷山/鼓浪屿/厦门/北海/桂林/阳朔3飞11日屿/厦门/北海/桂林/阳朔3飞11日",
        toast: "经典纯玩团0购物私家团让您满意而归经典纯玩团0购物私家团让您满意而归",
        goods_id: "1",
      }, {
        img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/goods.png",
        place: "福建",
        title: "福州/武夷山/鼓浪屿/厦门/北海/桂林/阳朔3飞11日屿/厦门/北海/桂林/阳朔3飞11日",
        toast: "经典纯玩团0购物私家团让您满意而归经典纯玩团0购物私家团让您满意而归",
        goods_id: "1",
      }]
    }, {
      type: 2,
      orderList: [{
        img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/goods.png",
        place: "福建",
        title: "福州/武夷山/鼓浪屿/厦门/北海/桂林/阳朔3飞11日屿/厦门/北海/桂林/阳朔3飞11日",
        toast: "经典纯玩团0购物私家团让您满意而归经典纯玩团0购物私家团让您满意而归",
        goods_id: "1",
      }, {
        img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/goods.png",
        place: "福建",
        title: "福州/武夷山/鼓浪屿/厦门/北海/桂林/阳朔3飞11日屿/厦门/北海/桂林/阳朔3飞11日",
        toast: "经典纯玩团0购物私家团让您满意而归经典纯玩团0购物私家团让您满意而归",
        goods_id: "1",
      }, {
        img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/goods.png",
        place: "福建",
        title: "福州/武夷山/鼓浪屿/厦门/北海/桂林/阳朔3飞11日屿/厦门/北海/桂林/阳朔3飞11日",
        toast: "经典纯玩团0购物私家团让您满意而归经典纯玩团0购物私家团让您满意而归",
        goods_id: "1",
      }]
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
  bindchange: function(e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent: function(e) {
    const that = this;

    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {

      that.setData({
        currentData: e.target.dataset.current
      })
    }
  },
  //点击核销
  linkToDetails:function(e){
    wx.navigateTo({
      url: 'details/index',
    })
  },
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