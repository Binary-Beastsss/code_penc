import Element from '../../Element.mjs'

const Iframe = new Element({
    tag: 'iframe',
    attributes: {
        class: 'output',
        frameborder: '0',
    },
})

export default Iframe
