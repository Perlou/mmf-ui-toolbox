import Vue from 'app/vueExt'
import { Component } from 'vue-property-decorator'
import * as Template from './app.vue'

@Component({
    name: 'App',
    mixins: [Template]
})
export default class App extends Vue {

    openDialog (ref: string) {
        this.$refs[ref].open()
    }

}
