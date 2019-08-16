// pages/user/vipCenter/vipCenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // id为1 是会员 为0 非会员
    id: 0,
    headImg: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/vipCenterHead.jpg",
    userImg: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/userImg.png",
    vipImg: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/vipCenterIcon.png",
    showList: [{
      img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/travel-view.jpg",
      name: "二龙山半日游二龙山半日二龙山半日游二龙山半日...",
      price: "1.00"
    }, {
      img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/travel-view.jpg",
      name: "二龙山半日游二龙山半日二龙山半日游二龙山半日...",
      price: "1.00"
    }, {
      img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/travel-view.jpg",
      name: "二龙山半日游二龙山半日二龙山半日游二龙山半日...",
      price: "1.00"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  linkToApplyVip:function(e){
    wx.navigateTo({
      url: '../../home/applyVip/vip',
    })
  },
  linkToCommodity:function(e){
    wx.navigateTo({
      url: '../../home/commodity/index?link_id='+1,
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