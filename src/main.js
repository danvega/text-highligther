import Vue from 'vue'
import TextHighlighter from '@/components/TextHighlighter.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(TextHighlighter),
}).$mount('#app')
