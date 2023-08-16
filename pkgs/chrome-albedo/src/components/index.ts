import { Button, Card } from 'ant-design-vue'
import { App } from 'vue'
import 'ant-design-vue/dist/reset.css';
export default {
  install(Vue: App) {
    [Button, Card].forEach(Vue.use.bind(Vue))
  },
}
