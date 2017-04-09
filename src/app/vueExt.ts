/**
 * vue ext 基础类
 * @author Perlou(perloukevin@gmail.com)
 */

import Vue from 'vue'
import api from 'app/api'
import store from 'store'
import * as deepExtend from 'deep-extend'

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
