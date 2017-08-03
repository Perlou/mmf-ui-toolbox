/**
 * global background
 * @author Perlou(perloukevin@gmail.com)
 */

import Vue from 'app/vueExt'
import { Component } from 'vue-property-decorator'
import * as Template from './background.vue'
import 'particles.js/particles.js'

const particlesCfg = require('./particlesjs.json')
declare var particlesJS

@Component({
    mixins: [Template]
})
export default class Background extends Vue {
    mounted () {
        particlesJS('patricles', particlesCfg)
    }
}
