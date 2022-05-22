import {createStorage} from './core.js'
import reducer from './reducer.js'

const {attach, connect, dispatch} = createStorage(reducer)

window.dispatch = dispatch

export {
    attach,
    connect
}