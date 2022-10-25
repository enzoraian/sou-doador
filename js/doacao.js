const buttonsTab = document.querySelectorAll('.js-tabs-button li a')
const contentsTab = document.querySelectorAll('.js-tabs-panel div')

buttonsTab.forEach((buttonTab, index) => {

  buttonTab.addEventListener('click', (event) => {
    event.preventDefault()

    // Removendo botão antigo
    buttonsTab.forEach((buttonTab) => {
      buttonTab.classList.remove('active')
    })

    // Adicionando botão clicado
    buttonTab.classList.add('active')

    // Removendo conteúdo antigo
    contentsTab.forEach((contentTab) => {
      contentTab.classList.remove('active')
    })

    // Adicionando novo conteúdo
    contentsTab[index].classList.add('active')
  })
})