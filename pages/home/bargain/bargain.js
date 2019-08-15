// pages/home/bargain/bargain.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headImg: 'cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/bargainImg.png',
    // id=0 时 正在砍价 id=1 时普通砍价
    bargainList: [{
        id: 0,
        list: [{
            type: 0,
            type_name: "继续砍价",
            img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/goods.png",
            place: "福建",
            title: "福州/武夷山/鼓浪屿/厦门/北海/桂林/阳朔3飞11日...",
            time: "23.00.00",
            price: "19.9",
            goods_id: 1
          },
          {
            type: 1,
            type_name: "立即兑换",
            img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/goods.png",
            place: "福建",
            title: "福州/武夷山/鼓浪屿/厦门/北海/桂林/阳朔3飞11日...",
            time: "23.00.00",
            price: "19.9",
            goods_id: 2
          }
        ]
      },
      {
        id: 1,
        list: [{
          img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/goods.png",
          title: "福州/武夷山/鼓浪屿/厦门/北海/桂林/阳朔3飞11日...",
          time: "05-06 23.00.00",
          num: "956",
          price1: "19.9",
          price2: "299",
          goods_id: 3
        }, {
          img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/goods.png",
          title: "福州/武夷山/鼓浪屿/厦门/北海/桂林/阳朔3飞11日...",
          time: "05-06 23.00.00",
          num: "956",
          price1: "19.9",
          price2: "299",
          goods_id: 4
        }, {
          img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/goods.png",
          title: "福州/武夷山/鼓浪屿/厦门/北海/桂林/阳朔3飞11日...",
          time: "05-06 23.00.00",
          num: "956",
          price1: "19.9",
          price2: "299",
          goods_id: 5
        }]
      }
    ]
  },
  //点击继续砍价
  linkToDetails: function(e) {
    wx.navigateTo({
      url: 'details/index?goods_id=' + e.currentTarget.dataset.goods_id + "&type="+0,
    })
  },
  //点击立即兑换
  linkToFinish: function(e) {
    console.log(e.currentTarget.dataset.goods_id)
    wx.navigateTo({
      url: 'finish/index',
    })
  },
  //普通商品点击立即砍价
  linkToCommodity:function(e){
    wx.navigateTo({
      url: 'details/index?type='+1,
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