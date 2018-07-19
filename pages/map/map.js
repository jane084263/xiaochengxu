//logs.js
const util = require('../../utils/util.js');

Page({
  data: {
    imgSrc: "../../resource/WechatIMG63.jpeg"
  },
  onLoad: function () {
    // 页面渲染完成后执行
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  onReady: function () {
    console.log('this.route',this.route);
    //页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面卸载
  },
  onPullDownRefresh: function () {
    //  下啦 app.json 中配置enablePullDownRefresh 
    // wx.stopPullDownRefresh 可以停止页面刷新
    console.log('触发下拉');
  },
  onReachBottom: function () {
    // app.json 中可以设置触底距离
    console.log('触底');
  },
  onShareAppMessage: function () {
    console.log('shared');
    return {
      title: '分享到朋友圈',
      // path:''
    }
  },
  tapNavTo: function () {
    // 点击跳转到
    wx.navigateTo({
      url: "view"
    })
  }
})
