// pages/user/private/action/changePhone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userPhone:""
  },
  //获取用户输入的手机号
  userPhoneInput: function (e) {
    this.setData({
      userPhone: e.detail.value
    })
    console.log(this.data.userPhone)
  },
  //点击确定按钮
  linkBack: function () {

    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (this.data.userPhone.length == 0) {
      wx.showToast({
        title: '手机号为空',
        image: '../../../../images/wrongIcon.png',
        duration: 1500
      })
      return false;
    } else if (this.data.userPhone.length < 11) {
      wx.showToast({
        title: '手机号有误！',
        image: '../../../../images/wrongIcon.png',
        duration: 1500
      })
      return false;
    } else if (!myreg.test(this.data.userPhone)) {
      wx.showToast({
        title: '手机号有误！',
        image: '../../../../images/wrongIcon.png',
        duration: 1500
      })
      return false;
    } else {
      wx.navigateTo({
        url: '../private?userPhone=' + this.data.userPhone,
      })
    }   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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