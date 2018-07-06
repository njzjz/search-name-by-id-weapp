//index.js
//获取应用实例
var app = getApp()
var inputValue 
Page({
  data: {
    button: '查询',
    output:'请输入学号或工号！',
    userInfo: {}
  },
  bindKeyInput: function(e) {
    inputValue=e.detail.value
  },
  search:function(){
    var  page=this
    wx.request({
        url: 'https://map.zgchemicals.mobi/ecnuid/name.php',
        data: {
            id: inputValue
        },
        header: {
            'content-type': 'application/json'
        },
        success: function(res) {
            page.setData({
                output:res.data,
            })
        }
    })
  },
  onLoad: function (options) {
    inputValue=options.input
    if(inputValue!=null){
        this.search()
    }
  },
  onShareAppMessage: function() {
        return {
            title: '华东师范大学姓名查询',
            path: "/pages/index/index?input="+inputValue
        }
    }
})
