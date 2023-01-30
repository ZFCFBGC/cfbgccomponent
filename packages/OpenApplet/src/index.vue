<template>
  <div :class="className">
    <wx-open-launch-weapp
      v-if="isWx"
      :id="myID"
      class="ui-jump-report jump-weapp-btn"
      :username="jumpWeappOptions.username"
      :path="jumpWeappOptions.path"
      @launch="handleClick"
      @error="handleError"
    >
    </wx-open-launch-weapp>
    <div v-else class="ui-jump-report" :style="apptleStyle" @click="handleClick"></div>
  </div>
</template>
<script>
import { renderJumpWeappHtml } from './index'
export default {
  name: 'cfbgcOpenApplets',
  props: {
    // ID名
    myID: {
      type: String,
      require: true,
      default: 'launch-btn'
    },
    // 类名
    className: {
      default: 'openAppletBox'
    },
    // 样式宽高
    apptleStyle: {
      type: Object,
      require: true,
      default: () => {
        return {
          width: '100%',
          height: '100%'
        }
      }
    },
    // 跳转小程序详细信息
    appletsInfo: {
      type: Object,
      require: true,
      default: () => {}
    }
  },
  data() {
    return {
      jumpWeappOptions: {},
      isWx: false
    }
  },
  async mounted() {
    this.isWx = navigator.userAgent.toLocaleLowerCase().indexOf('micromessenger') > -1
    this.init()
  },
  methods: {
    init() {
      this.jumpWeappOptions.path = `${this.appletsInfo.targetPath}${this.qsJumpWeappParams(this.appletsInfo.params)}`
      this.jumpWeappOptions.username = this.appletsInfo.username
      if (this.isWx) {
        this.initJumpWeappHtml()
      }
    },
    handleClick() {
      this.$emit('click', this.appletsInfo)
    },
    handleError(error) {
      this.$emit('error', error)
    },
    qsJumpWeappParams(params) {
      if (!params) {
        return ''
      }
      let qsParams = Object.keys(params)
        .map((key) => {
          return `${key}=${params[key]}`
        })
        .join('&')
      qsParams = encodeURIComponent(qsParams)
      return qsParams ? `?scene=${qsParams}` : ''
    },
    initJumpWeappHtml() {
      let that = this
      this.$nextTick(() => {
        const jumpWeappTag = document.getElementById(that.myID)
        jumpWeappTag.innerHTML = renderJumpWeappHtml(that.apptleStyle)
      })
    }
  }
}
</script>
<style scoped>
.openAppletBox {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.ui-jump-report {
  width: 100%;
  height: 100%;
}
</style>
