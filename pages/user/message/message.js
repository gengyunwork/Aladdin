// pages/user/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msgList: [{
      title: "系统消息1",
      date: "2019-08-21/13:00:25",
      msg: "系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息",
      id: 1,
    }, {
        title: "系统消息2",
        date: "2039-08-21/13:00:25",
        msg: "系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息",
        id: 2
      }, {
        title: "系统消息3",
        date: "2029-08-21/13:00:25",
        msg: "系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息",
        id: 3
      },{
        title: "系统消息4",
        date: "2019-09-21/13:00:25",
        msg: "系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息",
        id: 4
      },{
        title: "系统消息5",
        date: "2019-11-21/13:00:25",
        msg: "系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息",
        id: 5
      }]
  },
  //点击跳转
  linkToMsgDetails:function(e){
    wx.navigateTo({
      url: 'details/index?msg_id=' + e.currentTarget.dataset.id,
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