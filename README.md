# H5跳转小程序通用组件

### 安装


`npm i cfbgcopenapplets`

### 使用

**main.js**

```js
import cfbgcOpenApplets from "cfbgcopenapplets";
Vue.use(cfbgcOpenApplets);
```

```js
<template>
  <div class="container">
    <div class="apptleBox">
      <cfbgcOpenApplets :appletsInfo="appletsInfo" :apptleStyle="apptleStyle" @click="openApplet" @error="errorApplet"></cfbgcOpenApplets>
    </div>
  </div>
</template>
<script>
export default {

  data() {
    return {
      appletsInfo: {
        username: 'xxx', //小程序username
        targetPath: 'xxx' //跳转到小程序路径
      },
      apptleStyle: {
        width: '100px',
        height: '100px'
      }
    }
  },
  methods: {
    // 微信环境的成功回调/非微信环境点击事件
    openApplet(info) {
      console.log('成功回调', info)
    },
    // 微信环境错误回调
    errorApplet(info) {
      console.log('失败回调', info)
    }
  }
}
</script>
```
### 初始化开放标签

1. https://res.wx.qq.com/open/js/jweixin-1.6.0.js 版本必须1.6.0以上
2. 必须注册微信开放标签 wx-open-launch-weapp

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


- 本次采用的是定位覆盖在展示内容之上，因此父标签需设置相对定位

- 使用时必须初始化微信分享相关信息