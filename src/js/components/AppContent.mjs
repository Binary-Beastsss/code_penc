import Element from '../Element.mjs'

const BodyDiv = new Element()


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
        class: 'container',
    },
})

const LeftDiv = new Element({
    attributes: {
        class: 'left',
    },
})

const RightDiv = new Element({
    attributes: {
        class: 'right',
    },
})

const Iframe = new Element({
    tag: 'iframe',
    attributes: {
        src: '',
        frameborder: '0',
    },
})

const HtmlTop = new Element({
    attributes: {
        class: 'h-top',
    },
    innerHTML: `<h4><i class="fas fa-pencil-ruler"></i> HTML</h4>`,
})

const CssTop = new Element({
    attributes: {
        class: 'c-top',
    },
    innerHTML: `<h4><i class="fas fa-pencil-ruler"></i> CSS</h4>`,
})

const JsTop = new Element({
    attributes: {
        class: 'j-top',
    },
    innerHTML: `<h4><i class="fas fa-pencil-ruler"></i> JS</h4>`,
})

const HTML = new Element({
    attributes: {
        class: 'html',
        contenteditable: 'true',
    },
})

const CSS = new Element({
    attributes: {
        class: 'css',
        contenteditable: 'true',
    },
})

const JS = new Element({
    attributes: {
        class: 'js',
        contenteditable: 'true',
    },
})

const Dragger = new Element({
    attributes: {
        class: 'dragger',
    },
})


const PopUp = new Element({
    attributes : {
        id : 'pop'
    }
})


const Button = new Element({
    tag : 'button',
    innerHTML: 'Settings',

}) 

const SaveButton = new Element({
    tag : 'button',
    innerHTML: 'Save',
    attributes : {
        class : 'save'
    }

}) 

const textarea = new Element({
    tag : 'textarea',
    attributes :{
        cols : '30',
        rows: '10'
    }
})

const textarea2 = new Element({
    tag : 'textarea',
    attributes :{
        cols : '30',
        rows: '10'
    }
})



const Span = new Element({
    tag : 'span',
    innerHTML : 'x',

})

const Linkh3 = new Element({
    tag : 'h3',
    innerHTML : 'Link'
})

const Scriptsh3 = new Element({
    tag : 'h3',
    innerHTML : 'Scripts'
})






Button.addEventListener('click', (e) => {
	PopUp.$el.classList.toggle('go-up')



})


Span.addEventListener('click', e => {
	PopUp.$el.classList.toggle('go-up') 

})




PopUp.appendMany([Linkh3, textarea, textarea2, Span, Scriptsh3])
PopUp.append(textarea)
BodyDiv.addInnerHTML('beforeend', NavBar)
BodyDiv.appendMany([PopUp, Button, SaveButton])


LeftDiv.append(Iframe)
RightDiv.appendMany([HtmlTop, HTML, CssTop, CSS, JsTop, JS, Dragger])
ContainerDiv.appendMany([LeftDiv, RightDiv])
BodyDiv.append(ContainerDiv)






export default BodyDiv
