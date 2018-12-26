// components/epsoide/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        index:{
            type:String,
            observer(newVal, oldVal, changePath){
                console.log('new',newVal);
                console.log('old',oldVal);
                console.log('path', changePath)
                let index = parseInt(newVal) < 10 ? "0"+ newVal : newVal;
                console.log(index);
                this.setData({ _index: index}) 
                
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        year: 0,
        month:"",
        _index:null,
        months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]
    },

    /**
     * 组件的方法列表
     */
    methods: {

    },

    // 生命周期函数
    /**
     * 
     */
    ready (){
        // this.setData({
        //     index:9
        // })
    },

    attached() 
    {
        let date = new Date();
        let year = date.getFullYear();
        let month = this.data.months[date.getMonth()];
        this.setData({year,month})
    }

})
