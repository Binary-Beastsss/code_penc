import Element from '../Element.mjs'

const BodyDiv = new Element();

const NavBar = `
<div class="nav">

<div class="ul-con">
    <ul>
        <li><a href="/" data-link>Home</a></li>
    </ul>
</div>

<div><h1>CODE <i class="fas fa-pencil-alt"></i></h1></div>

</div>
`


const ContainerDiv = new Element({

    attributes: {
        class: 'container'
    }
})


const LeftDiv = new Element({
    attributes: {
        class: 'left'
    },
})

const RightDiv = new Element({
    attributes: {
        class: 'right'
    },
})

const Iframe = new Element({
    tag: 'iframe',
    attributes : {
        src : "",
        frameborder: '0'
    }
})




const HtmlTop = new Element({
    attributes: {
        class: 'h-top'
    },
    innerHTML : `<h4><i class="fas fa-pencil-ruler"></i> HTML</h4>`
})

const CssTop = new Element({
    attributes: {
        class: 'c-top'
    },
    innerHTML : `<h4><i class="fas fa-pencil-ruler"></i> CSS</h4>`
})

const JsTop = new Element({
    attributes: {
        class: 'j-top'
    },
    innerHTML : `<h4><i class="fas fa-pencil-ruler"></i> JS</h4>`
})

const HTML = new Element({
    attributes: {
        class: 'html',
        contenteditable: 'true'
    },

})

const CSS = new Element({
    attributes: {
        class: 'css',
        contenteditable: 'true'
    },
})

const JS = new Element({
    attributes: {
        class: 'js',
        contenteditable: 'true'
    },
})


const Dragger = new Element({
    attributes: {
        class: 'dragger',
    },
})

BodyDiv.addInnerHTML('beforeend', NavBar)
LeftDiv.append(Iframe)
RightDiv.appendMany([HtmlTop, HTML, CssTop, CSS, JsTop, JS, Dragger])
ContainerDiv.appendMany([LeftDiv, RightDiv])
BodyDiv.append(ContainerDiv)


export default BodyDiv