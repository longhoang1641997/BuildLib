import html from '../core.js'
import {connect} from '../store.js'

const connector = connect()

function app({cars}) {
    console.log(cars)
    return html `
        <ul>
            ${cars.map(car => `<li>${car}</li>`)}
        </ul>
    `
}   

export default connector(app)
