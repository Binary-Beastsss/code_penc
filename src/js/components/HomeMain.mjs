import Element from '../Element.mjs'
import ImageContainer from '../components/HomeComponents/ImageContainer.mjs'
const Main = new Element({ tag: 'main' })

const Checkbox = new Element({
    tag: 'input',
    attributes: {
        id: 'slide-sidebar',
        type: 'checkbox',
        role: 'button',
    },
})

const Label = new Element({
    tag: 'label',
    attributes: { for: 'slide-sidebar' },
    innerHTML: ' <span><i class="fas fa-indent"></i></span>',
})

const Container = new Element({
    attributes: { class: 'container' },
    innerHTML: `<div><h1 style="padding: 20px 0">CODE <i class="fas fa-pencil-alt"></i></h1></div>
             <div class="h"><h3>Your work</h3></div>`,
})

const Sidebar = `
<div class="sidebar">
    <div class="pen"><i class="fas fa-pencil-ruler"></i></div>
    <a href="https://github.com/orgs/Binary-Beastsss/dashboard" target="_blank">Github</a><br/>
    <hr/>
    <a href="/app" data-link>Editor</a>
    <hr/>
</div>

`

const Footer = `
<div class="footer">
    <div class="u">
        <ul>
            <li><a href="https://github.com/orgs/Binary-Beastsss/dashboard" target="_blank"">About</a></li>
            <li><a href="https://github.com/orgs/Binary-Beastsss/dashboard" target="_blank"">Support</a></li>
        </ul>
    </div>
    <div class="c"><h1>CODE <i class="fas fa-pencil-alt"></i></h1></div>
</div>
`
Main.addInnerHTML('beforeend', [Sidebar])

Main.appendMany([Checkbox, Label])

for (let i = 0; i < 7; i++) {
    Container.append(
        new ImageContainer('./images/cv.png', {
            attributes: { class: 'f' },
        })
    )
}

Container.addInnerHTML('beforeend', Footer)

Main.append(Container)

export default Main
