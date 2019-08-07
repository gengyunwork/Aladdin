// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchString: "",
    list: [],
    VerticalNavTop: 0,
    TabCur: 0,
    MainCur: 0,
    load: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // TODO:模拟导航栏数据，序重新远程获取
    let list = [{}];
    for (let i = 0; i < 26; i++) {
      list[i] = {};
      list[i].name = String.fromCharCode(65 + i);
      list[i].id = i;
      list[i].tourList = new Array(6).fill({
        imgUrl: "https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg",
        text: "ITEM"
      })
    }
    this.setData({
      list: list,
      listCur: list[0]
    })
  },
  tabSelect(e) {
    // 每个导航条高50px,以此计算导航和内容界面高度
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
  },
  VerticalMain(e) {

    let that = this;
    let list = this.data.list;
    let tabHeight = 0;
    if (this.data.load) {
      for (let i = 0; i < list.length; i++) {
        let view = wx.createSelectorQuery().select("#main-" + list[i].id);
        view.fields({
          size: true
        }, data => {
          list[i].top = tabHeight;
          tabHeight = tabHeight + data.height;
          list[i].bottom = tabHeight;
        }).exec();
      }
      that.setData({
        load: false,
        list: list
      })
    }
    let scrollTop = e.detail.scrollTop + 20;
    for (let i = 0; i < list.length; i++) {
      if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
        that.setData({
          VerticalNavTop: (list[i].id - 1) * 50,
          TabCur: list[i].id
        })
        return false
      }
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

  },
  searchChange(e) {
    this.setData({
      searchString: e.detail.value
    })
    //TODO：执行搜索任务
    console.log(this.data.searchString)
  },
})