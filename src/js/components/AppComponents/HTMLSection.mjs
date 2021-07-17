import Element from '../../Element.mjs'

const HtmlTop = new Element({
    attributes: {
        class: 'h-top',
    },
    innerHTML: `<h4><i class="fas fa-pencil-ruler"></i> HTML</h4>`,
})

const HTML = new Element({
    tag: 'textarea',
    attributes: {
        class: 'html',
    },
})

export { HtmlTop, HTML }
