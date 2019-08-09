// pages/home/travelNote/write/write.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    editorCtx: "",
    date: "",
    dest: "",
    people: "",
    average: "",
    title: "",
    showBaseEditor: false
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
  onEditorReady() {
    const that = this
    wx.createSelectorQuery().select('#editor').context(function(res) {
      that.editorCtx = res.context
    }).exec()
  },
  insertImage() {
    var FSM = wx.getFileSystemManager();
    let $this = this;
    //获取图片
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths[0];
        //将得到的图片转换为Base64
        let base64 = "data: image/jpg;base64," + FSM.readFileSync(tempFilePaths, "base64");
        $this.editorCtx.insertImage({
          src: base64
        });
        $this.editorCtx.insertText({
          text: `
        `
        });
      },
    });
  },
  publish() {
    this.editorCtx.getContents({
      success: (res) => {
        // 获取富文本内的HTML代码
        console.log(res.html)
      }
    })
  },
  titleChange(e) {
    this.setData({
      title: e.detail.value
    })
  },
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  peopleChange(e) {
    this.setData({
      people: e.detail.value
    });
    console.log(this.data, e)
  },
  averageChange(e) {
    this.setData({
      average: e.detail.value
    })
  },
  destChange(e) {
    this.setData({
      dest: e.detail.value
    })
    console.log(e)
  },
  editBaseMsg() {
    this.setData({
      showBaseEditor: true
    });
  },
  confirm() {
    this.setData({
      showBaseEditor: false
    });
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