import { HTTP } from '../util/http.js'

class LikeModel extends HTTP {
    like(behavior,artID,category,sCallBack) {
        console.log(behavior)
        this.request({
            url: behavior == true ? "like" : "like/cancel",
            method: "POST",
            data: { art_id: artID, type:category },
            success: res => {
                // console.log(res)
                sCallBack(res)
            }
        })
    }
}

export { LikeModel }

