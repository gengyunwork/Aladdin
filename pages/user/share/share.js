// pages/user/share/share.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:"cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/shareHead.jpg",
    userImg:"cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/userImg.png",
    shareBorder:"cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/shareBorder.jpg",
    erweima:"cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/erweima.png",
    name:"王建强",
    canvasHidden: true,  //设置画板的显示与隐藏，画板不隐藏会影响页面正常显示
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取用户信息，头像，昵称
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  saveImage: function () {
    wx.showLoading({
      title: '正在生成图片...',
    })
    const that = this;
    //设置画板显示，才能开始绘图
    that.setData({
      canvasHidden: false
    })
    const context = wx.createCanvasContext('share')
    //用户头像昵称
    console.log(that.data.avatarUrl, that.data.nickName)
    let userPath = that.data.avatarUrl
    let userName = that.data.nickName.slice(0, 16)
    //二维码路径
    let cardPath = "../../images/card.png"
    let bgPath = "../../images/bg.png"
    //开始绘制
    context.drawImage(bgPath, 0, 0, 1000, 1200)//白色背景
    context.drawImage(cardPath, 320, 490, 360, 360)  //二维码
    context.lineWidth = 10; //直线宽度
    context.strokeStyle = "#111"; //直线颜色
    context.moveTo(0, 60);
    context.lineTo(360, 60); //直线长度
    context.moveTo(0, 96);
    context.lineTo(300, 96);
    context.stroke(); //绘制
    context.textAlign = "center" //文字对齐方式
    context.setFontSize(72) //文字大小
    context.setFillStyle("#111") //文字颜色
    context.fillText(userName, 500, 312) //绘制用户名
    context.setFontSize(48)
    context.fillText('给你推荐了一个小程序', 500, 400) //绘制文字
    context.setFillStyle("#666")
    context.setFontSize(36)
    context.fillText('长按识别小程序', 500, 930)
    context.setFontSize(32)
    context.fillText('ZZPPFF', 500, 1100)
    //绘制圆形图案开始
    context.save(); // 先保存状态
    context.beginPath();
    context.arc(500, 670, 80, 0, Math.PI * 2, false);
    //先画圆 前两个参数确定圆心x/y坐标  第三个参数是圆的半径
    context.clip();
    context.drawImage(userPath, 420, 590, 160, 160);
    //绘制图片，前两个参数为arc中x/y-半径，后两个参数为半径*2
    context.restore(); //恢复之前保存的绘图 继续绘制
    //绘制圆形图案结束
    //把画板内容绘制成图片，并回调 画板图片路径
    context.draw(false, function () {
      wx.hideLoading()
      wx.showLoading({
        title: '保存中...',
      })
      wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: 1000,
        height: 1200,
        destWidth: 1000,
        destHeight: 1200,
        canvasId: 'share',
        success: function (res) {
          that.setData({
            shareImgPath: res.tempFilePath
          })
          if (!res.tempFilePath) {
            wx.hideLoading()
            wx.showModal({
              title: '提示',
              content: '图片绘制中，请稍后重试',
              showCancel: false
            })
          }
          //绘制成功后将图片保存到用户相册
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            //保存成功失败之后，都要隐藏画板，否则影响界面显示。
            success: (res) => {
              //console.log(res)
              wx.hideLoading()
              wx.showModal({
                title: '已成功保存至本地相册！',
                content: '',
                showCancel: false,
                success: function (res) {
                  that.setData({
                    canvasHidden: true
                  })
                  //进入预览
                  wx.previewImage({
                    current: 'that.data.shareImgPath',
                    urls: [that.data.shareImgPath]
                  })
                }
              })
            },
            fail: (err) => {
              console.log(err)
              wx.hideLoading()
              wx.showModal({
                title: '失败请重试！',
                content: '',
                showCancel: false,
                success: function (res) {
                  that.setData({
                    canvasHidden: true
                  })
                }
              })
            }
          })
        }
      })
    });
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
    const that = this
    wx.getUserInfo({
      success: function (res) {
        var nickName = res.userInfo.nickName
        wx.downloadFile({
          url: res.userInfo.avatarUrl,
          success(res) {
            that.setData({
              avatarUrl: res.tempFilePath,
              nickName: nickName,
            })
          },
          fail() {
            that.setData({
              avatarUrl: '../../images/user1.png',
              nickName: '你的小伙伴'
            }, () => {
              console.log("未获取到用户数据，使用默认名称")
            })
          }
        })
      }
    })
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