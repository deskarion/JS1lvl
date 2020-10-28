class Task {
  text = ''
  done = false
  el = null

  constructor (text) {
    this.text = text
    this.render()
  }

  onBtnClicked () {
    console.log('Called')
    this.done = true
    this.render()
  }

  createButton () {
    const btn = document.createElement('a')
    btn.classList.add('btn')
    btn.innerHTML = 'Done!'

    btn.addEventListener('click', this.onBtnClicked.bind(this))

    return btn
  }

  render () {
    if (!this.el) {
      this.el = document.createElement('div')
    }

    this.el.innerHTML = this.text

    let place = null
    if (this.done) {
      place = document.querySelector('#done .content')
    } else {
      place = document.querySelector('#todo .content')
      this.el.appendChild(this.createButton())
    }

    place.appendChild(this.el)
  }
}

const form = document.querySelector('form')
form.addEventListener('submit', function (event) {
  event.preventDefault()

  const input = form.querySelector('input')
  new Task(input.value)
  input.value = ''
})
