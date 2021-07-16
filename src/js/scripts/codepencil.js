const output = document.querySelector('.output')

const html = document.querySelector('.html')
const css = document.querySelector('.css')
const js = document.querySelector('.js')

let app = document.createElement('div'),
    styleTag = document.createElement('style'),
    scriptTag = document.createElement('script')

output.contentDocument.body.append(app)
output.contentDocument.head.append(styleTag)
output.contentDocument.body.append(scriptTag)

const delay = (ms) => new Promise((res) => setTimeout(res, ms))

const handleChange = () => {
    app.innerHTML = html.value
    styleTag.innerHTML = css.value
}

let toggle = false
const cover = () => {
    if (toggle) return
    toggle = true
    setTimeout(() => {
        toggle = false
    }, 500)
}

const handleJSChange = async () => {
    if (toggle) return
    cover()

    output.contentWindow.location.reload()

    await delay(500)

    app = document.createElement('div')
    app.id = 'app'
    app.innerHTML = html.value
    output.contentDocument.body.append(app)

    styleTag = document.createElement('style')
    styleTag.innerHTML = css.value
    output.contentDocument.head.append(styleTag)

    scriptTag = document.createElement('script')
    scriptTag.type = 'application/javascript'
    scriptTag.innerHTML = js.value
    output.contentDocument.body.append(scriptTag)
}

html.addEventListener('input', handleChange)
css.addEventListener('input', handleChange)
js.addEventListener('input', handleJSChange)

const filterText = (e) => {
    if (e.key === 'Tab') {
        e.preventDefault()

        const { selectionStart } = e.target
        const start = e.target.value.slice(0, selectionStart)
        const end = e.target.value.slice(selectionStart)

        e.target.value = start + '    ' + end
        e.target.selectionStart = e.target.selectionEnd = selectionStart + 4
    }
}

html.addEventListener('keydown', filterText)
css.addEventListener('keydown', filterText)
js.addEventListener('keydown', filterText)
