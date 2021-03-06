/* 登录组件 */
function login(callback, error, complete) {
  wx.login({
    success: function (res) {
      wx.request({
        url: 'https://85293008.qcloud.la/wxapp/soft/login_weChatCheck.action', // 请求登录的地址
        data: {
          code: res.code
        },
        success: function(res) {
          wx.setStorage({
            key: 'token',
            data: res.data.token
          });
          console.log('登陆成功，token为：' + res.data.token);
          callback(); // 登录成功执行的回调
        },
        fail: function() {
          console.log('登录失败');
          error();
        }
      });
      console.log('code:' + res.code);
    },
    fail: function() {
      console.log('调用登录接口失败');
      error();
    }
  });

  complete(); // 无论登录成功与否都要执行的回调
}

module.exports.login = login;