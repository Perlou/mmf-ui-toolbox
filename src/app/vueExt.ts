/**
 * vue ext 基础类
 * @author Perlou(perloukevin@gmail.com)
 */

import Vue from 'vue'
import api from 'app/api'
import store from 'store'
import * as deepExtend from 'deep-extend'

// light: 0, 100, 67,
// dark: 0, 77, 49
// base-black: 6, 33, 18,
// light-black: 5, 27, 27
// extra-light-black: 2, 19, 35
// base-silver: 3, 16, 58
// light-silver: 3, 23, 67
// extra-light-silver: 0, 26, 80
// base-gray: 0, 28, 86
// light-gray: 10, 33 ,92,
// extra-light-gray: 6, 33, 95

export default class VueExt extends Vue {

    state = store.state

    get api () {
        return api
    }

    /**
     * Check obj is Error instance
     * @param {*} obj
     * @returns {boolean}
     *
     * @memberOf VueExt
     */
    isError (obj: any): boolean {
        return obj instanceof Error
    }
        
    extends<T, U> (soure: T, target: U): T & U {
        return deepExtend(this.clone(soure), target)
    }

    clone<T>(soure: T): T{
        if(Array.isArray(soure)) {
            return (soure as any).slice(0)
        }
        return deepExtend({}, soure)
    }
}
