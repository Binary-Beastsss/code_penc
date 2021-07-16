import View from '../View.mjs'
import Header from '../components/Header.mjs'
import Main from '../components/Main.mjs'
import Footer from '../components/Footer.mjs'

export default class HomePage extends View {
    constructor(args) {
        super(args)
        this.setup()
    }

    setup() {
        this.appendMany([Header, Main, Footer])
    }
}
