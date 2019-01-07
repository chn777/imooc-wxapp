import { CONFIG } from '../config.js'
const tips = {
    1:"内部错误",
    1005:'appk 异常',
    3000:'期刊不存在'
}
class HTTP {
    request ({url,data={},method="GET"}) {
        return new Promise((resolve,reject) => {
            this._request(url, resolve, reject, data, method);
        })
    }

    _request(url, resolve, reject, data={}, method="GET") {
        wx.request({
            url: CONFIG.API_BASE_URL + url,
            method: method,
            data: data,
            header: {
                'content-type':'application/json',
                'appkey': CONFIG.APP_KEY
            },
            success: res => {
                if(res.statusCode.toString().startsWith(2))
                {
                    resolve(res.data);
                }
                else
                {
                    reject();
                    this._show_error(res.data.error_code);
                }
            },
            fail: fal => {
                reject();
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
        const tip = tips[erroCode];
        wx.showToast({
            title: tip ? tip : "未知错误：" + erroCode,
            icon: 'none',
            duration: 3000 
        })
    }
}

export { HTTP }