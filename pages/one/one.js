Page({
  data:{
    imageUrls:[
        'http:\/\/www.ufengqiu.com\/Uploads\/Picture\/2016-09\/57eb29c5ba764.png',
      'http:\/\/www.ufengqiu.com\/Uploads\/Picture\/2016-09\/57e1e5b686969.jpg',
      'http:\/\/www.ufengqiu.com\/Uploads\/Picture\/2016-04\/57209e1527fb8.jpg',
      'http:\/\/www.ufengqiu.com\/Uploads\/Picture\/2016-03\/56faf77582d8a.jpg'
    ],
    sixItems:[{
      urls:'../../pic/director@3x.png',
      name:'导演',
    },{
      urls:'../../pic/playwright@3x.png',
      name:'编剧',
    },{
      urls:'../../pic/actor_home@3x.png',
      name:'演员',
    },{
      urls:'../../pic/model_home.png',
      name:'模特',
    },{
      urls:'../../pic/latePeriod@3x.png',
      name:'后期',
    },{
      urls:'../../pic/part-timeJob@3x.png',
      name:'兼职',
    }],
    // backColors:[
    //     red,green,blue,yellow,purple,black
    // ],
    indicatorDots:true,
    autoplay:true,
    interval:4000,
    duration:1000,
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this

    //推荐数据
    wx.request({
      url:'https://api.ufengqiu.com/Api/Job/lists',
      method:'GET',
      data:{},
      header:{
        'Accept':'application/json'
      },
      success:function(res){
        that.setData({
          homeList:res.data
        })
      
      }
    })
    //模特推荐
    wx.request({
      url: 'https://api.ufengqiu.com/Api/Model/position',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        that.setData({
          modelList:res.data
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
    //名企推荐
    wx.request({
      url: 'https://api.ufengqiu.com/Api/Job/position',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        that.setData({
          companyList:res.data
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  split:function(res){
    return 
    
  }
})

