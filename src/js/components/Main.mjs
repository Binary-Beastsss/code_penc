import Element from '../Element.mjs'

const Main = new Element({ tag: 'main' })

const MainWrap = new Element({
    attributes: { class: 'main-wrap' },
})

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
    innerHTML: ' <span>close</span>',
})

MainWrap.appendMany([Checkbox, Label])
MainWrap.addInnerHTML('beforeend',`
<div class="sidebar">
    <a href="/about" data-link>Lorem</a><br />
    <hr />
    <a href="/test" data-link>Lorem</a><br />
    <hr />
    <a href="/app" data-link>Lorem</a><br />
    <hr />
    <a href="/dfgh" data-link>Editor</a>
</div>
<div class="container">
    <div class="h"><h3>Your work</h3></div>
    <div class="f">
        <img src="/images/test.webp" alt="" />
    </div>
    <div class="f">
        <img src="/images/test.webp" alt="" />
    </div>
    <div class="f">
        <img src="/images/test.webp" alt="" />
    </div>
    <div class="f">
        <img src="/images/test.webp" alt="" />
    </div>
    <div class="f">
        <img src="/images/test.webp" alt="" />
    </div>
    <div class="f">
        <img src="/images/test.webp" alt="" />
    </div>
</div>
`)

Main.append(MainWrap)

export default Main
