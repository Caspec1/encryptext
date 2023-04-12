const form = document.querySelector('#form')
const text = document.querySelector('#text')
const encryptButton = document.querySelector('#encrypt')
const decryptButton = document.querySelector('#decrypt')
const render = document.querySelector('#encrypted-paragraph')
const copyButton = document.querySelector('#copy-button')
const copyDate = document.querySelector('#copy-date')

const encrypt = {
  a: 'ai',
  e: 'enter',
  i: 'imes',
  o: 'ober',
  u: 'ufat'
}

let textArea

function encryptText(textArea) {
  // Validate Text
  const validatedText = textArea.trim().toLowerCase()
  const wordsArray = validatedText.split('')
  let encryptedWords = []

  // forEach compare the vocals with dictionary and push into array
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === 'a') {
      encryptedWords.push(encrypt[wordsArray[i]])
    } else if (wordsArray[i] === 'e') {
      encryptedWords.push(encrypt[wordsArray[i]])
    } else if (wordsArray[i] === 'i') {
      encryptedWords.push(encrypt[wordsArray[i]])
    } else if (wordsArray[i] === 'o') {
      encryptedWords.push(encrypt[wordsArray[i]])
    } else if (wordsArray[i] === 'u') {
      encryptedWords.push(encrypt[wordsArray[i]])
    } else {
      encryptedWords.push(wordsArray[i])
    }
  }
  return encryptedWords.join('')
}

function decryptText(text) {
  const ai = text.replace(/ai/g, 'a')
  const enter = ai.replace(/enter/g, 'e')
  const imes = enter.replace(/imes/g, 'i')
  const ober = imes.replace(/ober/g, 'o')
  const ufat = ober.replace(/ufat/g, 'u')
  return ufat
}

encryptButton.addEventListener('click', () => {

  if (!textArea) {
    return Swal.fire({
      icon: 'warning',
      title: 'Ingrese un texto',
      text: 'Ingrese un texto para encriptar'
    })
  }

  const regex = /[a-zñ]+$/

  if (!regex.test(textArea)) {
    return Swal.fire({
      icon: 'warning',
      title: 'Ingrese un texto válido',
      text: 'EL texto no puede llevar acentos, números ni mayúsculas'
    })
  }

  const encrypted = encryptText(textArea)

  if (render.firstChild !== null) {
    render.removeChild(render.firstChild)
  }


  const paragraph = document.createElement('P')
  paragraph.textContent = encrypted
  paragraph.id = 'text-encrypted'
  paragraph.classList.add('text-encrypted')
  render.appendChild(paragraph)
})

decryptButton.addEventListener('click', () => {

  if (!textArea) {
    return Swal.fire({
      icon: 'warning',
      title: 'Ingrese un texto',
      text: 'Ingrese un texto para encriptar'
    })
  }

  const regex = /[a-zñ]+$/

  if (!regex.test(textArea)) {
    return Swal.fire({
      icon: 'warning',
      title: 'Ingrese un texto válido',
      text: 'El texto no puede llevar acentos, números ni mayúsculas'
    })
  }

  const decrypted = decryptText(textArea)
  if (render.firstChild !== null) {
    render.removeChild(render.firstChild)
  }

  const paragraph = document.createElement('P')
  paragraph.textContent = decrypted
  paragraph.id = 'text-encrypted'
  paragraph.classList.add('text-encrypted')
  render.appendChild(paragraph)
})

text.addEventListener('input', e => {
  textArea = e.target.value
})

copyButton.addEventListener('click', () => {
  const encryptedText = document.querySelector('#text-encrypted').textContent
  navigator.clipboard.writeText(encryptedText)
})

document.addEventListener('DOMContentLoaded', () => {
  const date = new Date().getFullYear()
  copyDate.textContent = date
})
