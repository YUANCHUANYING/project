// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 收藏新闻总数
    num: 0
  },

  /**
   * 自定义函数--获取用户信息
   */
  getMyInfo: function(e) {
    // console.log(e.detail.userInfo)

    let info = e.detail.userInfo

    this.setData({
      isLogin: true,
      src: info.avatarUrl,
      nickName: info.nickName
    })

    // 获取收藏列表
    this.getMyFavorites()

  },

  /**
   * 自定义函数--获取收藏列表
   */
  getMyFavorites: function() {
    // 读取本地缓存信息
    let info = wx.getStorageInfoSync()
    // 获取全部的key信息
    let keys = info.keys

    // 获取新闻总数量
    let num = keys.length

    let myList = []
    for (var i = 0; i < num; i++) {
      let obj = wx.getStorageSync(keys[i])
      myList.push(obj)
    }

    // 更新新闻列表
    this.setData({
      newsList: myList,
      num: num
    })


  },

  /**
   * 自定义函数--跳转新页面浏览新闻内容
   */
  goToDetail: function(e) {
    // 获取新闻id
    let id = e.currentTarget.dataset.id

    // 跳转新页面
    wx.navigateTo({
      url: '../detail/detail?id=' + id,
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
    // 如果已经登录
    if (this.data.isLogin) {
      // 更新收藏列表
      this.getMyFavorites()
    }

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