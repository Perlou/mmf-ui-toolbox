/**
 * 梁大师御用工具箱
 * @author Perlou(perloukevin@gmail.com)
 */

import 'style/app.scss'
import Vue from 'vue'
import store from 'store'
import App from 'components/pages/app'
import router from 'app/router'
import svgicon = require('vue-svgicon')
import * as VueMaterial from 'vue-material'
import filters from 'common/filters'

// import all icons
import 'components/icons'

// vue-material style
import 'vue-material/dist/vue-material.css'

// register filters
for (let filter in filters) {
    Vue.filter(filter, filters[filter])
}

Vue.use(svgicon, {
    tagName: 'icon'
})

Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
  primary: 'blue'
})

new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
})
