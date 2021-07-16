
import Main from '../components/HomeMain.mjs'
import View from '../View.mjs'


export default class Home extends View {
    constructor(args) {
        super(args)
        this.importStyle('/src/css/style.css')
        this.setup()
    }

    setup() {
        this.append(Main)
    }
} 
