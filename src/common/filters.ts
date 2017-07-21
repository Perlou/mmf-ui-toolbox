/**
 * app filters
 * @author Perlou(perloukevin@gmail.com)
 */

import * as Color from 'color'

let filters:any = {
    // hex
    hex (color: any) {
        if (!color) return
        return color.hex()
    },

    // rgb
    rgb (color: any) {
        if (!color) return
        return color.rgb().string()
    },

    // hsl
    hsl (color: any) {
        if (!color) return
        return color.hsl().string()
    }
}

export default filters 