// components/classic/music/index.js
import { classicBeh } from "../classic-beh.js"

const mMgr = wx.getBackgroundAudioManager();

Component({
    /**
     * 组件的属性列表
     */
    behaviors: [classicBeh],
    properties: {
        src:String,
        title:String
    },

    /**
     * 组件的初始数据
     */
    data: {
        playing: false,
        pauseSrc: 'images/player@pause.png',
        playSrc: 'images/player@play.png',
    },

    attached : function() {
        this._recoverStatus()
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onPlay (event) {
            if(this.properties.playing === false)
            {
                //切换图片
                this.setData({playing:true});
                //播放音乐
                mMgr.title = this.properties.title
                mMgr.src = this.properties.src
            }
            else
            {
                //切换图片
                this.setData({playing:false});
                mMgr.pause()
            }
        } ,

        _recoverStatus () {
            if(mMgr.paused){
                this.setData({playing:false});
                return ;
            }
            if(mMgr.src == this.properties.src)
            {
                this.setData({playing:true})
            }
        }
    }


    
})
