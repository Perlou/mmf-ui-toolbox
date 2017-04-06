/**
 * element-ui 颜色生成工具
 * @author Perlou(perloukevin@gmail.com)
 */

import Vue from 'app/vueExt'
import { Component, Watch, Prop } from 'vue-property-decorator'
import { State, Mutation, Getter, Action} from 'vuex-class'
import * as Template from './colorPicker.vue'

@Component({
    name: 'ColorPicker',
    mixins: [Template],
    components: {
    }
})
export default class ColorPicker extends Vue {
    // 十六进制颜色值的正则表达式
    reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/

    /**
     * RGB 颜色转换为 16进制
     */
    colorHex (val: string | number) {
        let res: any = val
        if(/^(rgb|RGB)/.test(res)) {
            let aColor = res.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',')
            let strHex = '#'

            for (let i = 0; i < aColor.length; i++) {
                let hex = Number(aColor[i]).toString(16)
                if (hex === '0') {
                    hex += hex
                }
                strHex += hex
            }

            if (strHex.length != 7) {
                strHex = res
            }

            return strHex
        } else if (this.reg.test(res)) {
            let aNum = res.replace(/#/,'').split('')
            
            if (aNum.length == 6) {
                return res
            } else if (aNum.length == 3) {
                let numHex = '#'

                for (let i = 0; i < aNum.length; i++) {
                    numHex += (aNum[i] + aNum[i])
                }
                
                return numHex
            } else {
                return res
            }
        }
    }

    /**
     * 16进制颜色转换成 RGB
     */
    colorRgb (val: string | number) {
        let res: any = val
        let sColor = res.toLowerCase()

        if (sColor && this.reg.test(sColor)) {
            if (sColor.length == 4) {
                let sColorNew = '#'

                for (let i = 1; i < 4; i++) {
                    sColor += sColor.slice(i, i+1).concat(sColor.slice(i, i+1))
                }

                sColor = sColorNew
            }

            let sColorChange: any[] = []

            for (let i = 1; i < 7; i += 2) {
                sColorChange.push(parseInt('0x' + sColor.slice(i, i+2)))
            }

            return 'rgb(' + sColorChange.join(',') + ')'
        } else {
            return sColor
        }
    }
}