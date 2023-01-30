// 导入组件，组件必须声明 name
import cfbgcOpenApplets from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
cfbgcOpenApplets.install = function (Vue) {
  Vue.component(cfbgcOpenApplets.name, cfbgcOpenApplets)
}

// 默认导出组件
export default cfbgcOpenApplets
