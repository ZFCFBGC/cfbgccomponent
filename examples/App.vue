<template>
  <div id="app">
    <cfbgc-colorPicker v-model="color"></cfbgc-colorPicker>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      color: '#409EFF'
    };
  },
  // mounted(){
  //   console.log('--2222--',openApplet)
  // },
  methods: {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
</style>
