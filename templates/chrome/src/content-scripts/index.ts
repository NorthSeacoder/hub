import { createApp } from 'vue'
import App from './App.vue'
import Component from '../components'

createApp(App).use(Component).mount(createRootElement())

function createRootElement() {
  const root = document.createElement('div')

  root.id = 'crx-app'
  document.body.append(root)

  return root
}
