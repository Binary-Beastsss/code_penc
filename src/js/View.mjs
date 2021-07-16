import Element from './Element.mjs'

export default class View extends Element {
    constructor(args = {}) {
        super(args)
    }

    /**
     * @description Replaces parent content with this content
     */
    async view(app) {
        app.clear()
        app.append(this)
    }
}
