<template>
  <div id="app">
    <cfbgc-colorPicker v-model="color" :show-alpha="true"></cfbgc-colorPicker>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      color: 'rgba(19, 206, 102, 0.8)'
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
