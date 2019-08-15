// pages/user/distribution/record/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recordList: [{
        id: 0,
        cash: 120,
        time: "2019-03-04 15:34",
        state: 0
      },
      {
        id: 1,
        cash: 120,
        time: "2019-03-04 15:34",
        state: 1
      },
      {
        id: 2,
        cash: 120,
        time: "2019-03-04 15:34",
        state: 0
      },
      {
        id: 3,
        cash: 120,
        time: "2019-03-04 15:34",
        state: 1
      },
      {
        id: 4,
        cash: 120,
        time: "2019-03-04 15:34",
        state: 0
      },
      {
        id: 5,
        cash: 120,
        time: "2019-03-04 15:34",
        state: 1
      }
    ],
    showingRecordList: [],
    state:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let state = this.data.state;
    this.setData({
      showingRecordList: this.data.recordList.filter(item => item.state == state)
    });
  },
  recordChange(e) {
    let state = e.target.dataset.state;
    this.setData({ 'state': state})
    this.setData({
      showingRecordList: this.data.recordList.filter(item => item.state == state)
    });
    // 提现中
    if (state) {
      // this.setData({
      //   showingRecordList: this.recordList.filter(item => item.state == state)
      // });
    } else {
      // 已提现
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