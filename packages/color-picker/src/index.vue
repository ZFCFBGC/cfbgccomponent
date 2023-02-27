<template>
  <div
    :class="[
      'cfbgc-color-picker',
      disabled ? 'is-disabled' : '',
      size ? `cfbgc-color-picker-${size}` : '',
    ]"
  >
    <div class="cfbgc-color-picker__color" @click="handleTrigger">
      <div
        class="cfbgc-color-picker__color-inner"
        :style="{
          backgroundColor: displayedColor,
        }"
      ></div>
    </div>
    <picker-dropdown
      ref="dropdown"
      :showPopper="showPicker"
      :color="color"
      :show-alpha="showAlpha"
      :predefine="predefine"
      @pick="confirmValue"
      @clear="clearValue"
    >
    </picker-dropdown>
  </div>
</template>
<script>
import Color from "./color";
import PickerDropdown from "./components/picker-dropdown.vue";
export default {
  name: "cfbgcColorPicker",
  props: {
    disabled: Boolean,
    size: String,
    value: String,
    showAlpha: Boolean,
    colorFormat: String,
    popperClass: String,
    predefine: Array,
  },
  components: {
    PickerDropdown,
  },
  data() {
    const color = new Color({
      enableAlpha: this.showAlpha,
      format: this.colorFormat,
    });
    return {
      color,
      showPicker: false,
      showPanelColor: false,
    };
  },
  watch: {
    value(val) {
      if (!val) {
        this.showPanelColor = false;
      } else if (val && val !== this.color.value) {
        this.color.fromString(val);
      }
    },
    color: {
      deep: true,
      handler() {
        this.showPanelColor = true;
      },
    },
    displayedColor(val) {
      if (!this.showPicker) return;
      const currentValueColor = new Color({
        enableAlpha: this.showAlpha,
        format: this.colorFormat,
      });
      currentValueColor.fromString(this.value);

      const currentValueColorRgb = this.displayedRgb(
        currentValueColor,
        this.showAlpha
      );
      if (val !== currentValueColorRgb) {
        this.$emit("active-change", val);
      }
    },
  },
  computed: {
    displayedColor() {
      if (!this.value && !this.showPanelColor) {
        return "transparent";
      }
      return this.displayedRgb(this.color, this.showAlpha);
    },
    colorDisabled() {
      return this.disabled;
    },
  },
  mounted() {
    const value = this.value;
    if (value) {
      this.color.fromString(value);
    }
    this.popperElm = this.$refs.dropdown.$el;
  },
  methods: {
    handleTrigger() {
      if (this.colorDisabled) return;
      this.showPicker = !this.showPicker;
    },
    displayedRgb(color, showAlpha) {
      if (!(color instanceof Color)) {
        throw Error("color should be instance of Color Class");
      }
      const { r, g, b } = color.toRgb();
      return showAlpha
        ? `rgba(${r}, ${g}, ${b}, ${color.get("alpha") / 100})`
        : `rgb(${r}, ${g}, ${b})`;
    },
    confirmValue() {
      const value = this.color.value;
      this.$emit("input", value);
      this.$emit("change", value);
      this.showPicker = false;
    },
    clearValue() {
      this.$emit("input", null);
      this.$emit("change", null);
      this.showPanelColor = false;
      this.showPicker = false;
      this.resetColor();
    },
    resetColor() {
      this.$nextTick(() => {
        if (this.value) {
          this.color.fromString(this.value);
        } else {
          this.showPanelColor = false;
        }
      });
    },
  },
};
</script>
<style scoped>
.cfbgc-color-picker {
  position: relative;
  width: 28px;
  height: 28px;
  padding: 4px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
}
.cfbgc-color-picker__color {
  box-sizing: border-box;
  height: 28px;
  width: 28px;
  font-size: 0;
  position: relative;
  cursor: pointer;
}
.cfbgc-color-picker__color-inner {
  width: 100%;
  height: 100%;
}
</style>
