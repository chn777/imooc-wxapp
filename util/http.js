import { CONFIG } from '../config.js'
const tips = {
    1:"内部错误",
    1005:'appk 异常',
    3000:'期刊不存在'
}
class HTTP {
    request (params) {
        wx.request({
            url: CONFIG.API_BASE_URL + params.url,
            method: params.method ? params.method : 'GET',
            data: params.data,
            header: {
                'content-type':'application/json',
                'appkey': CONFIG.APP_KEY
            },
            success: res => {
                if(res.statusCode.toString().startsWith(2))
                {
                    params.success(res.data);
                }
                else
                {
                    this._show_error(res.data.error_code)
                }
            },
            fail: fal => {
                this._show_error(1)
            }
        })
    }


    _show_error (erroCode)
    {
        if(!erroCode)
        {
            erroCode = 1;
        }
        wx.showToast({
            title: tips[erroCode],
            icon: 'none',
            duration: 3000 
        })
    }
}

export { HTTP }