<template>
  <transition name="cfbgc-zoom-in-top">
    <div class="cfbgc-color-dropdown" v-show="showPopper">
      <div class="cfbgc-color-dropdown__main-wrapper">
        <hue-slider
          ref="hue"
          :color="color"
          vertical
          style="float: right"
        ></hue-slider>
        <sv-panel ref="sl" :color="color"></sv-panel>
      </div>
      <alpha-slider v-if="showAlpha" ref="alpha" :color="color"></alpha-slider>
      <div class="cfbgc-color-dropdown__btns">
        <div class="cfbgc-color-dropdown__value">
          <input
            class="cfbgc-color-dropdown-input__inner"
            type="text"
            @keyup.enter="handleConfirm"
            @blur="handleConfirm"
            v-model="customInput"
          />
        </div>
        <div class="cfbgc-color-dropdown__btns__box">
          <div class="cfbgc-color-dropdown__link-btn" @click="$emit('clear')">
            清空
          </div>
          <div class="cfbgc-color-dropdown__btn" @click="confirmValue">
            确认
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import SvPanel from "./sv-panel";
import HueSlider from "./hue-slider";
import AlphaSlider from "./alpha-slider";
export default {
  props: {
    color: {
      required: true,
    },
    showAlpha: Boolean,
    showPopper: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    SvPanel,
    HueSlider,
    AlphaSlider,
  },
  data() {
    return {
      customInput: "",
    };
  },
  watch: {
    showPopper(val) {
      if (val === true) {
        this.$nextTick(() => {
          const { sl, hue, alpha } = this.$refs;
          sl && sl.update();
          hue && hue.update();
          alpha && alpha.update();
        });
      }
    },

    currentColor: {
      immediate: true,
      handler(val) {
        this.customInput = val;
      },
    },
  },
  computed: {
    currentColor() {
      const parent = this.$parent;
      console.log("----", parent.value, parent.showPanelColor);
      return !parent.value && !parent.showPanelColor ? "" : parent.color.value;
    },
  },
  mounted() {
    this.$parent.popperElm = this.popperElm = this.$el;
    this.referenceElm = this.$parent.$el;
  },
  methods: {
    confirmValue() {
      this.$emit("pick");
    },
    handleConfirm() {
      this.color.fromString(this.customInput);
    },
  },
};
</script>
<style scoped>
.cfbgc-color-dropdown {
  transform-origin: center top;
  z-index: 2003;
  position: absolute;
  padding: 6px;
  box-sizing: content-box;
  background-color: #fff;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  width: 300px;
  /* height: 214px; */
  top: 32px;
  left: 0;
}
.cfbgc-color-dropdown__main-wrapper {
  width: 300px;
  height: 180px;
  margin-bottom: 6px;
}
.cfbgc-color-dropdown__btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
}
.cfbgc-color-dropdown__btns__box {
  display: flex;
  align-items: center;
}
.cfbgc-color-dropdown-input__inner {
  appearance: none;
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 28px;
  line-height: 28px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  font-size: 12px;
  width: 160px;
}
.cfbgc-color-dropdown__link-btn {
  background: transparent;
  padding-left: 0;
  padding-right: 0;
  font-size: 12px;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  color: #409eff;
  margin-right: 12px;
}
.cfbgc-color-dropdown__link-btn:hover {
  color: #66b1ff;
  border-color: transparent;
  background-color: transparent;
}
.cfbgc-color-dropdown__btn {
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
  padding: 7px 15px;
  font-size: 12px;
  border-radius: 3px;
}
.cfbgc-color-dropdown__btn:hover {
  background: #fff;
  border-color: #409eff;
  color: #409eff;
}
</style>
