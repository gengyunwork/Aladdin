// pages/home/commodity/index.js
const DEFAULT_PAGE = 0;
Page({
  startPageX: 0,
  currentView: DEFAULT_PAGE,

  /**
   * 页面的初始数据
   */
  data: {
    goods_id: '',
    link_id: "",
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/travel-view.jpg'
    }, {
      id: 1,
      type: 'image',
      url: 'cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/travel-view.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/travel-view.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/travel-view.jpg'
    }],
    ensureList: [{
      title: "保证品质"
    }, {
      title: "保证服务 "
    }, {
      title: "保证态度"
    }],
    name: "哈尔滨北方森林动物园",
    ps: " 哈尔滨动物园，占地面积37．25公顷，园内有猛兽、灵长类动物asdddd区和食草动物区，现在已成为野生动物展览、物种保护地..",
    price1: "60.00",
    price2: "1.00",
    num: "170",
    address: "黑龙江省哈尔滨市哈牡公路",
    distance: "1052.2Km",
    toView: `card_${DEFAULT_PAGE}`,
    list: [{
      name: "二龙山完美一日游！ 二龙山",
      ps: "二龙山是首批国家AAAA级旅游区，素有“哈尔滨东花园”之称",
      userImg: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/userImg.png",
      userName: "挨打成习惯",
      userNum: "13.5w",
      img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/travel-view.jpg",
      id: 1,
    }, {
      name: "二龙山完美一日游！ 二龙山",
      ps: "二龙山是首批国家AAAA级旅游区，素有“哈尔滨东花园”之称",
      userImg: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/userImg.png",
      userName: "挨打成习惯",
      userNum: "13.5w",
      img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/travel-view.jpg",
      id: 2,
    }, {
      name: "二龙山完美一日游！ 二龙山",
      ps: "二龙山是首批国家AAAA级旅游区，素有“哈尔滨东花园”之称",
      userImg: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/userImg.png",
      userName: "挨打成习惯",
      userNum: "13.5w",
      img: "cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/travel-view.jpg",
      id: 3,
    }],
    //点击收藏
    collected:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      goods_id: options.goods_id,
      link_id: options.link_id
    })
  },
  touchStart(e) {
    this.startPageX = e.changedTouches[0].pageX;
  },

  touchEnd(e) {
    const moveX = e.changedTouches[0].pageX - this.startPageX;
    const maxPage = this.data.list.length - 1;
    if (Math.abs(moveX) >= 150) {
      if (moveX > 0) {
        this.currentView = this.currentView !== 0 ? this.currentView - 1 : 0;
      } else {
        this.currentView = this.currentView !== maxPage ? this.currentView + 1 : maxPage;
      }
    }
    this.setData({
      toView: `card_${this.currentView}`
    });
  },
  //点击收藏
  onCollectionTap: function(e){
    this.collected = !e.currentTarget.dataset.collected;
    // console.log(e.currentTarget.dataset.collected)
    // console.log(this.collected)
    this.setData ({
      collected: !e.currentTarget.dataset.collected,
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