// pages/homePage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardCur: 0,
    //轮播
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
    //选项卡
    chooseList: [{
      id: "0",
      title: "周边游",
      img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/travelAround.png",
    }, {
      id: "1",
      title: "会员专享",
      img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/vip.png"
    }, {
      id: "2",
      title: "分享赚钱",
      img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/share.png"
    }, {
      id: "3",
      title: "游记",
      img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/note.png"
    }, {
      id: "4",
      title: "砍价",
      img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/bargain.png"
    }],
    // 广告
    adImg: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/ad.png",
    //超值优惠
    cheapList: [{
      id: "1",
      img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/cheap1.png",
      title: "商品详情：伊春五营+红星杜鹃花二商品详情：伊春五营+红星杜鹃花二商品详情：伊春五营+红星杜鹃花二"
    }, {
      id: "2",
      img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/cheap2.png",
      title: "商品详情：伊春五营+红星杜鹃花二商品详情：伊春五营+红星杜鹃花二商品详情：伊春五营+红星杜鹃花二"
    }, {
      id: "3",
      img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/cheap3.png",
      title: "商品详情：镜泊湖风商品详情：镜泊湖风商品详情：镜泊湖风"
    }, {
      id: "4",
      img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/cheap4.png",
      title: "商品详情：镜泊湖风商品详情：镜泊湖风商品详情：镜泊湖风"
    }, {
      id: "5",
      img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/cheap5.png",
      title: "商品详情：镜泊湖风商品详情：镜泊湖风商品详情：镜泊湖风"
    }],
    //会员部落
    vipList: [{
      img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/vip1.png",
      id: 1,
      title: "申请阿拉叮会员"
    }, {
      img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/vip2.png",
      id: 2,
      title: '成为阿拉叮合伙人'
    }, {
      img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/vip3.png",
      id: 3,
      title: "本地攻略"
    }],
    //精品活动
    qualityList: [{
      img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/goods.png",
      title: "二龙山全日游二龙山全日游二龙山全日游",
      price1: "60.00",
      price2: "1.00",
      date1: "2019-07-08",
      date2: "2019-08-20",
      id: 1
    }, {
        img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/goods.png",
      title: "二龙山全日游二龙山全日游二龙山全日游",
      price1: "60.00",
      price2: "1.00",
      date1: "2019-07-08",
      date2: "2019-08-20",
      id: 2
    }, {
        img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/goods.png",
      title: "二龙山全日游二龙山全日游二龙山全日游",
      price1: "60.00",
      price2: "1.00",
      date1: "2019-07-08",
      date2: "2019-08-20",
      id: 3
    }, {
        img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/goods.png",
      title: "二龙山全日游二龙山全日游二龙山全日游",
      price1: "60.00",
      price2: "1.00",
      date1: "2019-07-08",
      date2: "2019-08-20",
      id: 4
    }, {
        img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/goods.png",
      title: "二龙山全日游二龙山全日游二龙山全日游",
      price1: "60.00",
      price2: "1.00",
      date1: "2019-07-08",
      date2: "2019-08-20",
      id: 5
    }, ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.towerSwiper('swiperList');
  },
  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  linkToWhere: function(e) {
    //e.currentTarget.dataset.text获取点击的模块的值
    if (0 == e.currentTarget.dataset.id) {
      wx.navigateTo({
        url: 'travelAround/travelAround',
      })
    }
    if (1 == e.currentTarget.dataset.id) {
      wx.navigateTo({
        url: 'vipOnly/vipOnly',
      })
    }

    if (2 == e.currentTarget.dataset.id) {
      wx.navigateTo({
        url: 'shareMoney/shareMoney',
      })
    }
    if (3 == e.currentTarget.dataset.id) {
      wx.navigateTo({
        url: 'travelNote/note',
      })
    }
    if (4 == e.currentTarget.dataset.id) {
      wx.navigateTo({
        url: 'bargain/bargain',
      })
    }
  },
  // 会员部落跳转
  linkToVip: function(e) {
    if (1 == e.currentTarget.dataset.id) {
      wx.navigateTo({
        url: 'applyVip/apply',
      })
    }
    if (2 == e.currentTarget.dataset.id) {
      wx.navigateTo({
        url: 'applyPartner/partner',
      })
    }
    if (3 == e.currentTarget.dataset.id) {
      wx.navigateTo({
        url: 'strategy/strategy',
      })
    }

  },
  //点击搜索框
  linkToSearch:function(e){
    wx.navigateTo({
      url: 'search/search',
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
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