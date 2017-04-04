/**
 * 首页, element-ui 颜色生成工具
 * @author Perlou(perloukevin@gmail.com)
 */

import Vue from 'app/vueExt'
import { Component, Watch, Prop } from 'vue-property-decorator'
import { State, Mutation, Getter, Action} from 'vuex-class'
import * as Template from './home.vue'

@Component({
    name: 'Home',
    mixins: [Template],
    components: {
    }
})
export default class Home extends Vue {

}

