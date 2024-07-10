import { createApp } from 'vue'
// 全局数据仓库
import { createPinia } from 'pinia'

// elementplus组件库
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'


import App from './App.vue'
import router from './router.ts'

import 'element-plus/dist/index.css'
import '@/assets/styles/main.scss'

// 语言包
import i18n from './lang/index.ts'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn
})
  .use(createPinia())
  .use(router)
  .use(i18n)

.mount('#app')

