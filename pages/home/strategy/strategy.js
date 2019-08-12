// pages/home/strategy/strategy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headImg: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/travelHead.png",
    travelList: [{
      id: 1,
      title: "概况",
      itemList: [{
        msg: "一张图玩遍哈尔滨",
        title_id: 1
      }, {
        msg: "必打卡景点",
        title_id: 2
      }, {
        msg: "去二龙山看日出",
        title_id: 3
      }, {
        msg: "热门旅游路线",
        title_id: 4
      }]
    }, {
      id: 2,
      title: "娱乐",
      itemList: [{
        msg: "冰城特色",
        title_id: 5
      }, {
        msg: "热门电影",
        title_id: 6
      }, {
        msg: "德云社相声",
        title_id: 7
      }]
    }, {
      id: 3,
      title: "美食",
      itemList: [{
        msg: "冰城美食",
        title_id: 8
      }, {
        msg: "餐厅推荐",
        title_id: 9
      }]
    }, {
      id: 4,
      title: "交通",
      itemList: [{
        msg: "地铁",
        title_id: 10
      }, {
        msg: "公交",
        title_id: 11
      }, {
        msg: "出租",
        title_id: 12
      }]
    }, {
      id: 5,
      title: "购物",
      itemList: [{
        msg: "哈尔滨购物指南",
        title_id: 13
      }]
    }, {
      id: 6,
      title: "住宿",
      itemList: [{
        msg: "哈尔滨住宿指南",
        title_id: 14
      }, {
        msg: "热门住宿区域",
        title_id: 15
      }]
    }]
  },
  linkToDetails:function(e){
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../strategy/details/index?title_id=' + e.currentTarget.dataset.id,
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