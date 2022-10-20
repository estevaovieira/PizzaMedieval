let cardPizza = []
let cardMassa = []

const endPointDaApi = 'https://raw.githubusercontent.com/estevaovieira/PizzaMedieval/develop/data/requisicaoPizza.json'
getBuscarPizzasDaApi()
const elementoParaCadaPizza = document.getElementById('pizza')
const ul = document.getElementById('pizza')

const endPointDaApi2 = 'https://raw.githubusercontent.com/estevaovieira/PizzaMedieval/develop/data/requisicaoMassas.json'
getBuscarMassaDaApi()
const elementoParaCadaMassa = document.getElementById('massa')
const ul2 = document.getElementById('massa')

async function getBuscarPizzasDaApi() {
    const res = await fetch(endPointDaApi)
    cardPizza = await res.json()
    exibirPizzasNaTela(cardPizza)
}

async function getBuscarMassaDaApi() {
    const res2 = await fetch(endPointDaApi2)
    cardMassa = await res2.json()
    exibirMassasNaTela(cardMassa)
}

function exibirPizzasNaTela(listaDePizzas) {
    listaDePizzas.forEach(cardPizzas => {
        creatcard(cardPizzas)
    });

    function creatcard(cardPizzas) {
        let li = document.createElement('li')
        let titulo = document.createElement('h3')
        let pizzaImg = document.createElement('img')
        let description = document.createElement('p')
        let preco = document.createElement('p')

        titulo.textContent = cardPizzas.titulo;
        pizzaImg.src = cardPizzas.imagem;
        description.textContent = cardPizzas.descricao;
        preco.textContent = cardPizzas.preco;

        li.append(titulo, pizzaImg, description, preco)
        description.className = 'descricao'
        preco.className = 'preco'
        ul.appendChild(li)
    }
}

function exibirMassasNaTela(listaDeMassas) {
    listaDeMassas.forEach(cardMassas => {
        creatcard(cardMassas)
    });

    function creatcard(cardMassas) {
        let li = document.createElement('li')
        let titulo = document.createElement('h3')
        let pizzaImg = document.createElement('img')
        let description = document.createElement('p')
        let preco = document.createElement('p')

        titulo.textContent = cardMassas.titulo;
        pizzaImg.src = cardMassas.imagem;
        description.textContent = cardMassas.descricao;
        preco.textContent = cardMassas.preco;

        li.append(titulo, pizzaImg, description, preco)
        description.className = 'descricao'
        preco.className = 'preco'
        ul2.appendChild(li)
    }
}