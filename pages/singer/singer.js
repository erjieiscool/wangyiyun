// pages/singer/singer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    singer:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url:'http://wx.yinyueping.com:7002/singer', //请求歌手表
      success:(res)=>{
        this.setData({
          singer:res.data
        });
      }
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

  },
  /*点击歌手,跳转歌手主页*/
  singer:function(event){
    var e = event.currentTarget.dataset;
    var id = e.id;
    var singer=e.singer;
    wx.navigateTo({
      url: '/pages/details/details?singer=' + singer +'&id='+id,
    });
  }
})