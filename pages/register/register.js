Page({
  data: {
    name: '',
    zhanghao: '',
    mima: ''
  },
  //获取用户名
  getName(event) {
    this.setData({
      name: event.detail.value
    })
  },
  //获取手机号
  getZhangHao(event) {
    this.setData({
      zhanghao: event.detail.value
    })
  },
  // 获取密码
  getMima(event) {
    this.setData({
      mima: event.detail.value
    })
  },

  //注册
  zhuce() {
    let name = this.data.name
    let zhanghao = this.data.zhanghao
    let mima = this.data.mima
    console.log("点击了注册")
    console.log("name", name)
    console.log("zhanghao", zhanghao)
    console.log("mima", mima)
    //校验用户名
    if (name.length < 2) {
      wx.showToast({
        icon: 'none',
        title: '用户名至少2位',
      })
      return
    }
    if (name.length > 10) {
      wx.showToast({
        icon: 'none',
        title: '用户名最多10位',
      })
      return
    }
    //校验账号
    if (zhanghao.length < 4) {
      wx.showToast({
        icon: 'none',
        title: '账号至少4位',
      })
      return
    }
    //校验密码
    if (mima.length < 4) {
      wx.showToast({
        icon: 'none',
        title: '密码至少4位',
      })
      return
    }
    //注册功能的实现
    wx.cloud.database().collection('user').add({
      data: {
        name: name,
        zhanghao: zhanghao,
        mima: mima
      },
      success(res) {
        console.log('注册成功', res)
        wx.showToast({
          title: '注册成功',
        })
        wx.navigateTo({
          url: '../login/login',
        })
      },
      fail(res) {
        console.log('注册失败', res)
      }
    })
  }
})