let pizza = []
const endPointDaApi = 'https://raw.githubusercontent.com/estevaovieira/PizzaMedieval/develop/data/requisicaoMassas.json'
getBuscarpizzasDaApi()
const elementoParaCadaPizza = document.getElementById('pizza')

async function getBuscarpizzasDaApi() {
    const res = await fetch(endPointDaApi)
    pizza = await res.json()
    console.table(pizza)
}