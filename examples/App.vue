<template>
  <div id="app">
    <cfbgc-openApplets
      :appletsInfo="appletsInfo"
      :apptleStyle="apptleStyle"
      @click="openApplet"
      @error="errorApplet"
    >
    </cfbgc-openApplets>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      appletsInfo: {
        username: "gh_1ac06b5a8f4e",
        targetPath:
          "/pages/index/index?ysschannel=NFAPP_66001_gd&navto=/gzcard/pages/index/index",
      },
      apptleStyle: {
        width: "100px",
        height: "100px",
      },
    };
  },
  // mounted(){
  //   console.log('--2222--',openApplet)
  // },
  methods: {
    // 微信环境的成功回调/非微信环境点击事件
    openApplet(info) {
      console.log("成功回调", info);
    },
    // 微信环境错误回调
    errorApplet(info) {
      console.log("失败回调", info);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
