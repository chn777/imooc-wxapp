import { HTTP } from '../util/http.js'

class ClassicModel extends HTTP{
    getLatest(sCallBack){
        this.request({
            url: 'classic/latest',
            success: res => {
                this._setLatestIndex(res.index);
                sCallBack(res);
            }
        })
    }

    

    getClassic(index, nextOrPrevious ,sCallBack){
        this.request({
            url: `classic/${index}/${nextOrPrevious}`,
            success: res => {
                sCallBack(res);
            }
        });
    }

    

    isFisrt(index){
        return index == 1;
    }

    isLatest(currIndex){
        return currIndex == this._getLatestIndex();
    }

    _setLatestIndex(index) {
        wx.setStorageSync("latestIndex", index);
    }

    _getLatestIndex(){
        return wx.getStorageSync('latestIndex');
    }
}

export { ClassicModel}

