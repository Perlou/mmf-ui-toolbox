/**
 * element-ui 颜色生成工具
 * @author Perlou(perloukevin@gmail.com)
 */

import Vue from 'app/vueExt'
import { Component, Watch, Prop } from 'vue-property-decorator'
import { State, Mutation, Getter, Action} from 'vuex-class'
import * as Template from './colorPicker.vue'
import * as Color from 'color'

const arr: any = [
    {
        name: 'Light',
        createdBy: 'primary',
        hsl: [0, 100, 67],
        components: []
    },
    {
        name: 'Dark',
        createdBy: 'primary',
        hsl: [0, 77, 49]
    },
    {
        name: 'Light Black',
        createdBy: 'baseBlack',
        hsl: [5, 27, 27]
    }
]

@Component({
    name: 'ColorPicker',
    mixins: [Template],
    components: {}
})
export default class ColorPicker extends Vue {
    // 十六进制颜色值的正则表达式
    reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/
    value = '#20a0ff'

    /**
     * computed
     */

    /**
     * color primary
     * 
     * @readonly
     * @memberof ColorPicker
     */
    get primary () {
        let color = this.getColorObj(this.value)
        if (!color) return

        return {
            name: 'Primary',
            hex: color.hex()
        }
    }

    get baseBlack () {
        if (!this.primary.hex) return
        let color = this.getColorObj(this.primary.hex, 6, 33, 18)
        if (!color) return

        return {
            name: 'Base Black',
            hex: color.hex()
        }
    }

    get colors () {
        if (!this.primary || !this.baseBlack) return
            
        let colors: any = []
        
        for (let v of arr) {
            colors.push({
                name: v.name,
                color: this.getColorObj(this[v.createdBy].hex, v.hsl[0], v.hsl[1], v.hsl[2]).hex(),
                components: v.components
            })
        }

        return colors
    }
    
    /**
     * getColor
     * 
     * @param hex 
     * @param h color to h
     * @param s color to s
     * @param l color to l
     */
    getColorObj (hex: string, h?, s?, l?) {
        if (!hex || !this.reg.test(hex)) {
            return false
        }

        let color = Color(hex).hsl()

        if (h) {
            color = color.rotate(h)
        }

        if (s) {
            color.color[1] = s
        }

        if (l) {
            color.color[2] = l
        }

        return color
    }
    
    numberFixed (num: string | number, fixed: number = 2) {
        return Number(Number(num).toFixed(fixed))
    }
    


    /**
     * 计算属性
     */
    get cBase () {
        let color = this.value
        return {
            hex: color,
            rgb: this.colorRgb(color),
            hsl: this.rgbToHsl(this.colorRgb(color))
        }
    }

    
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

            return sColorChange
            // return 'rgb(' + sColorChange.join(',') + ')'
        } else {
            return sColor
        }
    }

    /**
     * hsl to rgb
     */
    hslToRgb (hsl) {
        let r, g, b 
        let h = hsl[0]
        let s = hsl[1]
        let l = hsl[2]

        if (s == 0) {
            r = g = b =l
        } else {
            let hue2rgb = function hue2rgb (p, q, t) {
                if(t < 0) t += 1
                if(t > 1) t -= 1
                if(t < 1/6) return p + (q - p) * 6 * t
                if(t < 1/2) return q
                if(t < 2/3) return p + (q - p) * (2/3 - t) * 6
                return p
            }

            var q = l < 0.5 ? l * (1 + s) : l + s - l * s
            var p = 2 * l - q
            r = hue2rgb(p, q, h + 1/3)
            g = hue2rgb(p, q, h)
            b = hue2rgb(p, q, h - 1/3)
        }

        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
    }

    /**
     * rgb to hsl
     */
    rgbToHsl (rgb: any[]) {
        let r = rgb[0]
        let g = rgb[1]
        let b = rgb[2]
        // r /= 255, g /= 255, b /= 255
        let max = Math.max(r, g, b), min = Math.min(r, g, b)
        let h, s, l = (max + min) / 2

        if(max == min){
            h = s = 0 
        }else{
            let d = max - min
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
            switch(max){
                case r: h = (g - b) / d + (g < b ? 6 : 0); break
                case g: h = (b - r) / d + 2; break
                case b: h = (r - g) / d + 4; break
            }
            h /= 6;
        }

        return [h, s, l];
    }
}