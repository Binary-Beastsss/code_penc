import Element from '../../Element.mjs'

const HtmlTop = new Element({
    attributes: {
        class: 'h-top',
    },
})

const H4 = new Element({
    tag: 'h4',
    innerHTML: '<i class="fas fa-pencil-ruler"></i> HTML ',
})

const CollapseButton = new Element({
    tag: 'button',
    innerHTML: '<i class="fas fa-chevron-down"></i>',
})

let collapsed = false

CollapseButton.addEventListener('click', (e) => {
    collapsed = !collapsed

    HTML.$el.style.flex = collapsed ? 0 : 1
    HTML.$el.style.padding = (collapsed ? 0 : 20) + 'px'
    e.target.style.transform = collapsed ? 'rotate(180deg)' : 'rotate(0deg)'
})

H4.append(CollapseButton)
HtmlTop.append(H4)

const HTML = new Element({
    tag: 'textarea',
    attributes: {
        class: 'html',
    },
})

export { HtmlTop, HTML }
