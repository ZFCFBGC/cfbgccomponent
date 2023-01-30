# H5跳转小程序通用组件

### 初始化开放标签

1. https://res.wx.qq.com/open/js/jweixin-1.6.0.js 版本必须1.6.0以上
2. utils/initWxShare.js 注册微信开放标签 wx-open-launch-weapp

```js
window.wx.config({
    ...
    openTagList: ["wx-open-launch-weapp"] //增加微信开放标签
  })
```
### 传参介绍

myID    单个传可不传，多个时必传（不传存在重复ID）。

className 外层div类名。传值时对应的样式也会重置需要重新配置(有默认值和默认样式)

apptleStyle 样式，用来撑开开放标签的宽高

appletsInfo 跳转小程序的详情信息，必须包含path（小程序路径）和username（小程序名字）

### 回调事件

click（成功回调事件）  返回小程序相关详情信息

error（错误回调时机）  返回跳转错误相关信息

### 注意事项

1. 本次采用的是定位覆盖在展示内容之上，因此父标签需设置相对定位
2. 使用时必须初始化微信分享相关信息
