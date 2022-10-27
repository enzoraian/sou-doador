const btnOpenModal = document.querySelectorAll('.js-open-modal')
const btnCloseModal = document.querySelectorAll('.js-close-modal')
const modal = document.querySelectorAll('.modal')

const tabPanel = document.querySelector(".js-tabs-panel")

for (let i = 0; i < modal.length; i++) {
  function openModal(event) {
    event.preventDefault()
    modal[i].classList.add('active')
    tabPanel.classList.remove('tabs-panel')
  }
  btnOpenModal[i].addEventListener('click', openModal)

  function closeModal(event) {
    event.preventDefault()
    modal[i].classList.remove('active')
    tabPanel.classList.add('tabs-panel')
  }
  btnCloseModal[i].addEventListener('click', closeModal)

}