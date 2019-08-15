// pages/home/travelNote/note.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchString: "",
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
    }, {
      id: 1,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
    }, {
      id: 6,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
    }],
    cardList: [{
      id: 0,
      type: 'image',
      title:"二龙山游记二龙山游记二龙山游记二龙山游记二龙山游记",
      alias:"春华的旅游记录",
      appreciate:"2059",
      attention:"5369",
      create_at:"2019-05-09",
      poster:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
      avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
    }, {
      id: 1,
      type: 'image',
      title:"二龙山游记二龙山游记二龙山游记二龙山游记二龙山游记",
      alias:"春华的旅游记录",
      appreciate:"2059",
      attention:"5369",
      create_at:"2019-05-09",
      poster:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
      avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
    }, {
      id: 2,
      type: 'image',
      title:"二龙山游记二龙山游记二龙山游记二龙山游记二龙山游记",
      alias:"春华的旅游记录",
      appreciate:"2059",
      attention:"5369",
      create_at:"2019-05-09",
      poster:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
      avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    }, {
      id: 3,
      type: 'image',
      title:"二龙山游记二龙山游记二龙山游记二龙山游记二龙山游记",
      alias:"春华的旅游记录",
      appreciate:"2059",
      attention:"5369",
      create_at:"2019-05-09",
      poster:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
      avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
    }, {
      id: 4,
      type: 'image',
      title:"二龙山游记二龙山游记二龙山游记二龙山游记二龙山游记",
      alias:"春华的旅游记录",
      appreciate:"2059",
      attention:"5369",
      create_at:"2019-05-09",
      poster:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
      avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
    }, {
      id: 5,
      type: 'image',
      title:"二龙山游记二龙山游记二龙山游记二龙山游记二龙山游记",
      alias:"春华的旅游记录",
      appreciate:"2059",
      attention:"5369",
      create_at:"2019-05-09",
      poster:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
      avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
    }, {
      id: 6,
      type: 'image',
      title:"二龙山游记二龙山游记二龙山游记二龙山游记二龙山游记",
      alias:"春华的旅游记录",
      appreciate:"2059",
      attention:"5369",
      create_at:"2019-05-09",
      poster:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
      avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
    }]

  },
  writeNote:function(e){
    wx.navigateTo({
      url: 'write/write',
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

  },
  searchInput(e) {
    this.setData({
      searchString: e.detail.value
    })
  }
 
})