import AppContent from '../components/AppContent.mjs'
import View from '../View.mjs'

export default class Home extends View {
    constructor(args) {
        super(args)
        this.importStyle('./src/css/app.css')
    }

    async view(app) {
        this.append(AppContent)
        app.clear()
        app.append(this)
    }
}
