const cloths = [{
    id: '123456',
    title: '衣服',
  poster: 'https://i.loli.net/2020/01/16/8eqCpgkKsYz9Otl.jpg',
    content: '红色大衣。',
    add_date: '2019秋冬'
  },
  {
    id: '111111',
    title: '衣服',
    poster: 'https://i.loli.net/2020/01/16/OclhrqpbEK2W8fZ.jpg',
    content: '蓝色卫衣',
    add_date: '2019秋'
  },
  {
    id: '222222',
    title: '衣服',
    poster: 'https://i.loli.net/2020/01/16/Wygkw4fFmjDQiPL.jpg',
    content: '棕色风衣',
    add_date: '2019春'
  }
];


// 自定义函数：获取新闻列表
function getclothsList() {
  let list = [];
  for (var i = 0; i < cloths.length; i++) {
    let obj = {};
    obj.id = cloths[i].id;
    obj.title = cloths[i].title;
    obj.add_date = cloths[i].add_date;
    obj.poster = cloths[i].poster;

    list.push(obj)
  }

  return list;
}


// 自定义函数：获取新闻内容
function getclothsDetail(clothsID) {
  let msg = {
    code: '404',
    cloths: {}
  };

  for (var i = 0; i < cloths.length; i++) {
    if (clothsID == cloths[i].id) {
      msg.code = '200';
      msg.cloths = cloths[i];
      break;
    }
  }

  return msg;

}
function getLocation(callback) { //位置信息
  wx.getLocation({
    type: 'gcj02',
    success: function (res) {
      callback(true, res.latitude, res.longitude);
    },
    fail: function () {
      callback(false);
    }
  })
}

function getWeather(latitude, longitude, callback) {  //天气信息
  var ak = "KvkmznMG85QFolaLLZb5S5Rm2kjGQdrr";//换成自己的ak
  var url = "https://api.map.baidu.com/telematics/v3/weather?location=" + longitude + "," + latitude + "&output=json&ak=" + ak; //接口请求和参数传递

  wx.request({
    url: url,
    success: function (res) {
      console.log("天气请求结果", res.data); //在打开应用即可看到
      callback(res.data);
    }

  });
}

function loadWeatherData(callback) {
  getLocation(function (success, latitude, longitude) {
    getWeather(latitude, longitude, function (weatherData) {
      callback(weatherData);
    });
  });
}

module.exports = {
  getclothsList: getclothsList,
  getclothsDetail: getclothsDetail,
  getLocaion:getLocation,
  getWeather:getWeather,
  loadWeatherData:loadWeatherData

}