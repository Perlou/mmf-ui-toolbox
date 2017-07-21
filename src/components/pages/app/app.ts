import Vue from 'app/vueExt'
import { Component } from 'vue-property-decorator'
import * as Template from './app.vue'

@Component({
    name: 'App',
    mixins: [Template]
})
export default class App extends Vue {

    openDialog (ref: string) {
        (this.$refs[ref] as any).open()
    }

    closeDialog (ref: string) {
        (this.$refs[ref] as any).close()
    }

    toAuthorGithub () {
        this.closeDialog('authorDialog')
        window.location.href = 'https://github.com/Perlou'
    }

    toCode () {
        window.location.href = 'https://github.com/Perlou/mmf-ui-toolbox'
    }
}
