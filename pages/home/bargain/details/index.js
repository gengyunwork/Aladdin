// pages/home/bargain/details/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // type为0 时用户 为1时新用户进入
    type: "",
    goods_id: "",
    userImg: 'cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/userImg.png',
    userName: "王自强",
    goods_img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/goods.png",
    goods_name: "商品名称商品名称商品名称商品名称商品名称",
    goods_details: "商品详情商品详情商品详情商品详情",
    // 原价
    goods_price1: 888.00,
    // 最终价格
    goods_price2: 19.99,
    //已经砍价
    goods_price3: 66.66,
    //剩余价格
    goods_price4: 13.99,
    goods_time: "23.00.00",
    helpList: [{
        img: 'cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/userImg.png',
        name: "好友1",
        price: "19.99"
      }, {
        img: 'cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/userImg.png',
        name: "好友2",
        price: "19.199"
      },
      {
        img: 'cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/userImg.png',
        name: "好友3",
        price: "19.199"
      },
      {
        img: 'cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/userImg.png',
        name: "好友4",
        price: "119.99"
      },
      {
        img: 'cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/userImg.png',
        name: "好友1",
        price: "19.99"
      }
    ],
    showImg: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/goods.png",
    showName: "哈尔滨北方森林动物园",
    showPlace: "位于黑龙江省哈尔滨市哈牡公路46公里处",
    toastImg: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/toastImg.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      goods_id: options.goods_id,
      type: options.type,
    })
    console.log(this.data.type)
  },
  //新用户点击我要参加 跳转到疯狂砍价页面
  linkToBargain: function(e) {
    wx.navigateTo({
      url: '../bargain',
    })
  },
  //新用户点击帮砍一刀 弹出框
  //点击弹出框
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
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