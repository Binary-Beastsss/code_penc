


import AppContent from '../components/AppContent.mjs'
import View from '../View.mjs'

export default class Home extends View {
    constructor(args) {
        super(args)
        this.importStyle('./src/css/app.css')
        this.setup()
    }

    setup() {
        this.append(AppContent)
    }
}
