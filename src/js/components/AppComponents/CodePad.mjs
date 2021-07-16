const delay = (ms) => new Promise((res) => setTimeout(res, ms))

class CodePad {
    constructor({ outputElement, htmlPad, cssPad, jsPad }) {
        this.$output = outputElement.$el
        this.$html = htmlPad.$el
        this.$css = cssPad.$el
        this.$js = jsPad.$el

        this.toggle = false

        setTimeout(() => {
            this._setupOutput()
        }, 500)
    }

    _setupOutput() {
        // setting up output body, which is app
        this.$outputEntry = document.createElement('div')
        this.$output.contentDocument.body.append(this.$outputEntry)

        // setting up style input
        this.$styleTag = document.createElement('style')
        this.$output.contentDocument.head.append(this.$styleTag)

        // setting up script input
        this.$scriptTag = document.createElement('script')
        this.$output.contentDocument.body.append(this.$scriptTag)

        this.$html.addEventListener('input', this.handleChange.bind(this))
        this.$css.addEventListener('input', this.handleChange.bind(this))
        this.$js.addEventListener('input', this.handleJSChange.bind(this))
        this.$html.addEventListener('keydown', this.filterText.bind(this))
        this.$css.addEventListener('keydown', this.filterText.bind(this))
        this.$js.addEventListener('keydown', this.filterText.bind(this))
    }

    cover() {
        if (this.toggle) return
        this.toggle = true
        setTimeout(() => {
            this.toggle = false
        }, 1000)
    }

    handleChange() {
        this.$outputEntry.innerHTML = this.$html.innerText
        this.$styleTag.innerHTML = this.$css.innerText
    }

    deleteAllChildren() {
        this.$output.contentDocument.head.innerHTML = ''
        this.$output.contentDocument.body.innerHTML = ''
    }

    async handleJSChange() {
        if (this.toggle) return
        this.cover()

        this.deleteAllChildren()
        this.$output.contentWindow.location.reload()

        await delay(500)

        this.$outputEntry = document.createElement('div')
        this.$outputEntry.innerHTML = this.$html.innerText
        this.$output.contentDocument.body.append(this.$outputEntry)

        this.$styleTag = document.createElement('style')
        this.$styleTag.innerHTML = this.$css.innerText
        this.$output.contentDocument.head.append(this.$styleTag)

        this.$scriptTag = document.createElement('script')
        this.$scriptTag.innerHTML = this.$js.innerText
        this.$output.contentDocument.body.append(this.$scriptTag)
    }

    async filterText(e) {
        if (e.key === 'Tab') {
            e.preventDefault()

            const { selectionStart } = e.target
            const start = e.target.value.slice(0, selectionStart)
            const end = e.target.value.slice(selectionStart)

            e.target.value = start + '    ' + end
            e.target.selectionStart = e.target.selectionEnd = selectionStart + 4
        }
    }
}

export { CodePad }
