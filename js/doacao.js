const buttonsTab = document.querySelectorAll('.js-tabs-button li a')
const contentsTab = document.querySelectorAll('.js-tabs-panel div')

const doadores =  [
  {   
      "nome":"Vitor Hugo Gonçalves",
      "tipo": "A+",
      "telefone": "(83) 2655-5095"
  },
  {   
      "nome":"Sr. Theo da Conceição",
      "tipo": "A+",
      "telefone": "(83) 2279-6257"
  },
  {   
      "nome":"Pedro Henrique Souza",
      "tipo": "A+",
      "telefone": "(83) 3924-1269"
  },
  {   
      "nome":"Clarice Alves",
      "tipo": "A+",
      "telefone": "(83) 2533-7387"
  },
  {   
      "nome":"Isabel Silva",
      "tipo": "A+",
      "telefone": "(83) 3855-2746"
  },
  {   
      "nome":"Caroline Costela",
      "tipo": "A+",
      "telefone": "(83) 2851-8351"
  },
  {   
      "nome":"Beatriz Aragão",
      "tipo": "A-",
      "telefone": "(83) 3267-7866"
  },
  {   
      "nome":"Sr. Anthony Fogaça",
      "tipo": "A-",
      "telefone": "(83) 3812-8512"
  },
  {   
      "nome":"Luiz Miguel Lima",
      "tipo": "A-",
      "telefone": "(83) 3184-8716"
  },
  {   
      "nome":"Letícia Campos",
      "tipo": "A-",
      "telefone": "(83) 3666-7198"
  },
  {   
      "nome":"Ana Luiza Monteiro",
      "tipo": "A-",
      "telefone": "(83) 3587-7026"
  },
  {   
      "nome":"Srta. Clarice Gonçalves",
      "tipo": "A-",
      "telefone": "(83) 3242-1586"
  },
  {
      "nome":"Fernando Cardoso",
      "tipo": "B+",
      "telefone": "(83) 3868-5358"
  },
  {   
      "nome":"Luiz Fernando da Luz",
      "tipo": "B+",
      "telefone": "(83) 3439-6440"
  },
  {   
      "nome":"Melissa da Rosa",
      "tipo": "B+",
      "telefone": "(83) 2479-9802"
  },
  {   
      "nome":"Thomas Vieira",
      "tipo": "B+",
      "telefone": "(83) 2841-8865"
  },
  {   
      "nome":"Murilo Sales",
      "tipo": "B+",
      "telefone": "(83) 3558-2845"
  },
  {   
      "nome":"Otávio da Conceição",
      "tipo": "B+",
      "telefone": "(83) 3251-8566"
  },
  {   
      "nome":"Sra. Laura da Paz",
      "tipo": "B-",
      "telefone": "(83) 2651-2427"
  },
  {   
      "nome":"Valentina Vieira",
      "tipo": "B-",
      "telefone": "(83) 2725-2627"
  },
  {   
      "nome":"Melissa da Conceição",
      "tipo": "B-",
      "telefone": "(83) 3129-4211"
  },
  {   
      "nome":"Milena Cardoso",
      "tipo": "B-",
      "telefone": "(83) 3681-3523"
  },
  {   
      "nome":"Theo Porto",
      "tipo": "B-",
      "telefone": "(83) 2462-8178"
  },
  {   
      "nome":"João Miguel da Costa",
      "tipo": "B-",
      "telefone": "(83) 2177-6248"
  },
  {   
      "nome":"Melissa Sales",
      "tipo": "AB+",
      "telefone": "(83) 3515-8586"
  },
  {   
      "nome":"Manuela Farias",
      "tipo": "AB+",
      "telefone": "(83) 3399-1073"
  },
  {   
      "nome":"Laís da Luz",
      "tipo": "AB+",
      "telefone": "(83) 3288-5842"
  },
  {   
      "nome":"Davi Luiz Ferreira",
      "tipo": "AB+",
      "telefone": "(83) 2530-7668"
  },
  {   
      "nome":"Marcelo das Neves",
      "tipo": "AB+",
      "telefone": "(83) 3011-2667"
  },
  {   
      "nome":"Luiz Otávio Peixoto",
      "tipo": "AB+",
      "telefone": "(83) 3420-8313"
  },
  {   
      "nome":"Daniela da Paz",
      "tipo": "AB-",
      "telefone": "(83) 2728-2624"
  },
  {   
      "nome":"Bárbara Vieira",
      "tipo": "AB-",
      "telefone": "(83) 3782-4540"
  },
  {   
      "nome":"Gabriela Fernandes",
      "tipo": "AB-",
      "telefone": "(83) 2697-3311"
  },
  {   
      "nome":"Ana Vitória Novaes",
      "tipo": "AB-",
      "telefone": "(83) 3705-7239"
  },
  {   
      "nome":"Mariana da Rosa",
      "tipo": "AB-",
      "telefone": "(83) 2733-2227"
  },
  {   
      "nome":"Gabriel Cunha",
      "tipo": "AB-",
      "telefone": "(83) 3136-1668"
  },
  {   
      "nome":"Cecília Cardoso",
      "tipo": "O+",
      "telefone": "(83) 2332-4531"
  },
  {   
      "nome":"Srta. Ana Clara Oliveira",
      "tipo": "O+",
      "telefone": "(83) 3043-1740"
  },
  {   
      "nome":"Augusto Ribeiro",
      "tipo": "O+",
      "telefone": "(83) 3264-2495"
  },
  {   
      "nome":"Dr. Ryan Jesus",
      "tipo": "O+",
      "telefone": "(83) 2207-1596"
  },
  {   
      "nome":"Emanuelly Moura",
      "tipo": "O+",
      "telefone": "(83) 2117-2685"
  },
  {   
      "nome":"Camila Ramos",
      "tipo": "O+",
      "telefone": "(83) 2713-5314"
  },
  {   
      "nome":"Luiz Otávio Barros",
      "tipo": "O-",
      "telefone": "(83) 3863-2706"
  },
  {   
      "nome":"Marina Castro",
      "tipo": "O-",
      "telefone": "(83) 3918-2700"
  },
  {   
      "nome":"Heloísa Rodrigues",
      "tipo": "O-",
      "telefone": "(83) 3918-2700"
  },
  {   
      "nome":"Sophie Pereira",
      "tipo": "O-",
      "telefone": "(83) 3261-8320"
  },
  {   
      "nome":"Lívia Cunha",
      "tipo": "O-",
      "telefone": "(83) 3029-1041"
  },
  {   
      "nome":"Laura das Neves",
      "tipo": "O-",
      "telefone": "(83) 2188-5527"
  },
]

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

contentsTab.forEach((contentTab, index) => {
    doadores.forEach((doador) => {
        if (contentTab.id === doador.tipo) {
            let contato = document.createElement("div");
            contato.innerHTML = `
            <div class="contato tabs-panel"  style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
                <p>nome: ${doador.nome}</p>
                <p>Tipo: ${doador.tipo}</p>
                <div>
                    <button class="btn js-open-modal">Entrar em contato</button>
                    <div class="modal">
                        <!--Camada transparente atrás do modal, pra dar a sensação que ele está em cima do conteúdo-->
                        <div class="overlay"></div>

                        <!--Conteúdo-->
                        <div class="box">
                            <img style="width: 10rem; height: 10rem;" src="img/cel-phone.png" alt="">
                            <h2 style="margin-bottom: 1rem; font-size: 3.4rem;">Entre em contato!</h2>
                            <p style="font-size: 2.4rem;">${doador.telefone}</p>
                            <button class="btn-close js-close-modal">OK</button>
                        </div>
                    </div>
                </div>
            </div>
            `;
            contentTab.appendChild(contato);
        }        
    });
});