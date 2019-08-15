// pages/applyVip/vip.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // id为1 则是会员 id为0 则是非会员
    id: 1,
    cardImg: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/vipCard.png",
    date: "365",
    vipLists: [{
      icon: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/vipIcon1.png",
      text: '会员专享',
      id: 0
    }, {
      icon: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/vipIcon2.png",
      text: '会员商品',
      id: 1
    }, {
      icon: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/vipIcon3.png",
      text: '客服专项',
      id: 2
    }, {
      icon: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/vipIcon4.png",
      text: '邀请有奖',
      id: 3
    }],
    ps: '1.兑换说明兑换说明兑换说明兑换说明兑换说明兑换说明兑1.兑换说明兑换说明兑换说明兑换说明兑换说明兑换说明兑1.兑换说明兑换说明兑换说明兑换说明兑换说明兑换说明兑1.兑换说明兑换说明兑换说明兑换说明兑换说明兑换说明兑v1.兑换说明兑换说明兑换说明兑换说明兑换说明兑换说明兑'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  linkToOthers:function(e) {
    console.log(e.currentTarget.dataset.id)
    if (e.currentTarget.dataset.id == 0) {
      wx.navigateTo({
        url: '../vipOnly/vipOnly',
      })
    }
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