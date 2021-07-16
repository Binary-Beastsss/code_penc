import View from '../View.mjs'
import Header from '../components/Header.mjs'
import Main from '../components/HomeMain.mjs'
import Footer from '../components/Footer.mjs'

export default class HomePage extends View {
    constructor(args) {
        super(args)
        this.importStyles(['./src/css/style.css'])

        this.setup()
    }

    setup() {
        this.appendMany([Header, Main, Footer])
    }
}
