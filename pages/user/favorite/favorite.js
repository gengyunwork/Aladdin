// pages/user/favorite/favorite.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    favoriteList: [{
      id: 0,
      img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/goods.png",
      place: "福建",
      title: "福州/武夷山/鼓浪屿/厦门/北海/桂林/阳朔3飞11日屿/厦门/北海/桂林/阳朔3飞11日",
      toast: "经典纯玩团0购物私家团让您满意而归经典纯玩团0购物私家团让您满意而归",
      keyList: ["爆款", "爆款", "爆款"],
      num: "170",
      price_vip: "1.00",
      price: "30.00",
      goods_id: "1",
    }, {
      id: 1,
      img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/goods.png",
      place: "福建",
      title: "福州/武夷山/鼓浪屿/厦门/北海/桂林/阳朔3飞11日屿/厦门/北海/桂林/阳朔3飞11日",
      toast: "经典纯玩团0购物私家团让您满意而归经典纯玩团0购物私家团让您满意而归",
      keyList: ["爆款", "爆款", "爆款"],
      num: "170",
      price_vip: "1.00",
      price: "30.00",
      goods_id: "2",
    }, {
      id: 2,
      img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/goods.png",
      place: "福建",
      title: "福州/武夷山/鼓浪屿/厦门/北海/桂林/阳朔3飞11日屿/厦门/北海/桂林/阳朔3飞11日",
      toast: "经典纯玩团0购物私家团让您满意而归经典纯玩团0购物私家团让您满意而归",
      keyList: ["爆款", "爆款", "爆款"],
      num: "170",
      price_vip: "10.00",
      price: "30.00",
      goods_id: "3",
    }],
    noteList: [{
      id: 0,
      type: 'image',
      title: "二龙山游记二龙山游记二龙山游记二龙山游记二龙山游记",
      alias: "春华的旅游记录",
      appreciate: "2059",
      attention: "5369",
      create_at: "2019-05-09",
      poster: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
      avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
    }, {
      id: 1,
      type: 'image',
      title: "二龙山游记二龙山游记二龙山游记二龙山游记二龙山游记",
      alias: "春华的旅游记录",
      appreciate: "2059",
      attention: "5369",
      create_at: "2019-05-09",
      poster: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
      avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
    }, {
      id: 2,
      type: 'image',
      title: "二龙山游记二龙山游记二龙山游记二龙山游记二龙山游记",
      alias: "春华的旅游记录",
      appreciate: "2059",
      attention: "5369",
      create_at: "2019-05-09",
      poster: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
      avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    }, {
      id: 3,
      type: 'image',
      title: "二龙山游记二龙山游记二龙山游记二龙山游记二龙山游记",
      alias: "春华的旅游记录",
      appreciate: "2059",
      attention: "5369",
      create_at: "2019-05-09",
      poster: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
      avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
    }, {
      id: 4,
      type: 'image',
      title: "二龙山游记二龙山游记二龙山游记二龙山游记二龙山游记",
      alias: "春华的旅游记录",
      appreciate: "2059",
      attention: "5369",
      create_at: "2019-05-09",
      poster: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
      avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
    }, {
      id: 5,
      type: 'image',
      title: "二龙山游记二龙山游记二龙山游记二龙山游记二龙山游记",
      alias: "春华的旅游记录",
      appreciate: "2059",
      attention: "5369",
      create_at: "2019-05-09",
      poster: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
      avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
    }, {
      id: 6,
      type: 'image',
      title: "二龙山游记二龙山游记二龙山游记二龙山游记二龙山游记",
      alias: "春华的旅游记录",
      appreciate: "2059",
      attention: "5369",
      create_at: "2019-05-09",
      poster: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
      avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
    }],
    showModal: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  delNote(e) {
    wx.showModal({
      title: '删除收藏' ,
      content: '是否删除收藏，删除后将无法恢复',
      success: function(e) {
        // 请求删除接口  e.target.dataset.id
      }
    })
  },
  delProduct(e) {
    wx.showModal({
      title: '删除收藏',
      content: '是否删除收藏，删除后将无法恢复',
      success: function(e) {
        // 请求删除接口 e.target.dataset.id
      }
    })
  },
  linkToCommodity(e) {
    console.log(e.detail)
    // goods_id 商品id link_id 1 为周边游 2 为会员专享
    wx.navigateTo({
      url: '../commodity/index?goods_id=' + e.detail + '&link_id=1',
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