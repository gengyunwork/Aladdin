// pages/home/strategy/details/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title_id: "",
    title: "必打卡景点",
    icon: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/generalIcon.png",
    generalList: [{
      title: "二龙山",
      content: "景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍",
      cardMsg: {
        img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/goods.png",
        place: "福建",
        title: "福州/武夷山/鼓浪屿/厦门/北海/桂林/阳朔3飞11日屿/厦门/北海/桂林/阳朔3飞11日",
        toast: "经典纯玩团0购物私家团让您满意而归经典纯玩团0购物私家团让您满意而归",
        price1: "99.9",
        price2: "1.00"
      }
    }, {
      title: "二龙山",
      content: "景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍",
        cardMsg: {
          img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/goods.png",
          place: "福建",
          title: "福州/武夷山/鼓浪屿/厦门/北海/桂林/阳朔3飞11日屿/厦门/北海/桂林/阳朔3飞11日",
          toast: "经典纯玩团0购物私家团让您满意而归经典纯玩团0购物私家团让您满意而归",
          price1: "99.9",
          price2: "1.00"
        }
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      title_id: options.title_id,
    })
    console.log(options.title_id)
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