import Element from '../../Element.mjs'

const CssTop = new Element({
    attributes: {
        class: 'c-top',
    },
    innerHTML: `<h4><i class="fas fa-pencil-ruler"></i> CSS</h4>`,
})

const CSS = new Element({
    attributes: {
        class: 'css',
        contenteditable: 'true',
    },
})

export { CssTop, CSS }
