// pages/classic/classic.js
import { ClassicModel } from '../../models/classic.js'
import { LikeModel } from '../../models/like.js'
let classicModel = new ClassicModel();
let likeModel = new LikeModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      classicData:null,
      latest: true,
      first:false,
      likeCount:0,
      likeStatus:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      classicModel.getLatest(res=>{
          this.setData({classicData:res,likeCount:res.fav_nums,likeStatus:res.like_status});
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

    /**
     * 处理点赞
     */
    handle_sLike(event) {
        let behavior = event.detail.behavior;
        likeModel.like(behavior,this.data.classicData.id,this.data.classicData.type,res => {
            console.log(res);
        })
        
    },

    /**
     * 处理导航左键点击
     */
    onNext(event) {
        this._updateClassic('next');
    },

    /**
     * 处理导航右键点击
     */
    onPrev(event) {
        this._updateClassic('previous');
    },

    _updateClassic(nextOrPrevious){
        let index = this.data.classicData.index;
        this.setData({
            latest: classicModel.isLatest(index),
            first: classicModel.isFisrt(index)
        });
        classicModel.getClassic(index, nextOrPrevious,res => {
            this._getLikeStatus(res.id,res.type)
            this.setData({
                classicData: res
            });
        })
    },

    _getLikeStatus(artID,category){
        likeModel.getClassicLikeStatus(artID,category,res=>{
            this.setData({
                likeStatus:res.like_status,
                likeCount:res.fav_nums
            })
        })
    }


    
})