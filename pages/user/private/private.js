// pages/user/private/private.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userImg: 'cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/userImg.png',
    date: '请选择出生日期',
    picker: ['男', '女', '？'],
    index: null,
    name:"用户名",
    region: ['省', '市', '区'],
    phone:"请输入手机号",
    signature: "这个家伙很懒什么都没留下"
  },
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
  },
  RegionChange: function (e) {
    this.setData({
      region: e.detail.value    
    })  
  },
  linkToChangeName:function(){
    wx.navigateTo({
      url: 'action/changeName',
    })
  },
  linkToChangePhone: function () {
    wx.navigateTo({
      url: 'action/changePhone',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      name: options.userName,
      phone : options.userPhone
    })
    console.log(this.data.name)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})