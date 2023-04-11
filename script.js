const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

// Adding open button funtion
open.addEventListener('click', () => container.classList.add('show-nav'))

// Adding close button funtion
close.addEventListener('click', () => container.classList.remove('show-nav'))

