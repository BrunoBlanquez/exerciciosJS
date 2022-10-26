const pegaDados = () => {
    const nome = document.getElementById('nomeProduto').value
    const marca = document.getElementById('marcaProduto').value
    const preco = document.getElementById('precoProduto').value

    let contador = 0
    let qtdadeProdutos = document.getElementById('countProdutos')
    qtdadeProdutos.value = contador

    const tableBody = document.getElementById('tableBody')
    tableBody.innerHTML = ""

    const row = tableBody.appendChild(document.createElement('tr'))
    const createThContador = document.createElement('th')
    createThContador.innerText = contador
    row.appendChild(createThContador)

    const createThNome = document.createElement('th')
    createThNome.innerText = nome
    row.appendChild(createThNome)

    const createTdMarca = document.createElement('td')
    createTdMarca.innerText = marca
    row.appendChild(createTdMarca)

    const createTdPreco = document.createElement('td')
    createTdPreco.innerText = preco
    row.appendChild(createTdPreco)

    contador++
}