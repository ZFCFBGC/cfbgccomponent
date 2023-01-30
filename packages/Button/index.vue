<template>
  <button
    class="cfbgc-button"
    v-on="$listeners"
    :class="[type ? `cfbgc-button--${type}` : '']"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "cfbgc-button",
  props: {
    type: String,
  },
};
</script>
<style>
.cfbgc-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  appearance: none;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.cfbgc-button:focus,
.cfbgc-button:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
.cfbgc-button:active {
  color: #3a8ee6;
  border-color: #3a8ee6;
  outline: none;
}
.cfbgc-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
.cfbgc-button--primary:focus,
.cfbgc-button--primary:hover {
  background: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
}
.cfbgc-button--primary.is-active,
.cfbgc-button--primary:active {
  background: #3a8ee6;
  border-color: #3a8ee6;
  color: #fff;
}
</style>