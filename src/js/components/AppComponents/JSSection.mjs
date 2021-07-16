import Element from '../../Element.mjs'

const JsTop = new Element({
    attributes: {
        class: 'j-top',
    },
    innerHTML: `<h4><i class="fas fa-pencil-ruler"></i> JS</h4>`,
})

const JS = new Element({
    attributes: {
        class: 'js',
        contenteditable: 'true',
    },
})

export { JsTop, JS }
