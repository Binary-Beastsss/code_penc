import All from '../components/About.mjs'
import View from '../View.mjs'

export default class Home extends View {
    constructor(args) {
        super(args)
        this.importStyle('./src/css/about.css')
        this.setup()
    }

    setup() {
        this.append(All)
    }
}

