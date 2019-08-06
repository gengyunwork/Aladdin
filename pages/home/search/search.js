// pages/home/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchString: "",
    historyTags: ["植物园", "新上城影院", "万达广场", "金爵万象"]
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

  },
  searchInput(e) {
    this.setData({
      searchString: e.detail.value
    })
  },
  cancel() {},
  search() {
    console.log(this.data.searchString)
  }
})