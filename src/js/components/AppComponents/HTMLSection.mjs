import Element from '../../Element.mjs'

const HtmlTop = new Element({
    attributes: {
        class: 'h-top',
    },
    innerHTML: `<h4><i class="fas fa-pencil-ruler"></i> HTML</h4>`,
})

const HTML = new Element({
    attributes: {
        class: 'html',
        contenteditable: 'true',
    },
})

export { HtmlTop, HTML }
