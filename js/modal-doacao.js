const btnOpenModal = document.querySelectorAll('.js-open-modal')
const btnCloseModal = document.querySelectorAll('.js-close-modal')
const modal = document.querySelectorAll('.modal')


for (let i = 0; i < modal.length; i++) {
  function openModal(event) {
    event.preventDefault()
    modal[i].classList.add('active')
  }
  btnOpenModal[i].addEventListener('click', openModal)
  
  
  function closeModal(event) {
    event.preventDefault()
    modal[i].classList.remove('active')
  }
  btnCloseModal[i].addEventListener('click', closeModal)
}