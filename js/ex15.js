const c = console.log.bind(document)
let tentativasLogin = 0;
let produtosStorage = []

const login = () => {
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    let login = false;

    if (!autenticar(email, senha)) {
        tentativasLogin++
    } else {
        login = true
        tentativasLogin = 0
    }

    if(login) {
        document.getElementById('botoes').classList.remove("ocultadas")
    }

    if(tentativasLogin >= 3) {
        document.getElementById("loginBtn").classList.add("disabled")
        c('bloqueado')
        setTimeout(() => {
            c('contando')
            document.getElementById("loginBtn").classList.remove("disabled"); 
            tentativasLogin = 0
        }, 15000);
    }
    
    preencheTabela()
}

const autenticar = (email, senha) => {
    const objArmazenado = JSON.parse(localStorage.getItem('login'))

    if(email == objArmazenado.email && senha == objArmazenado.senha) {
       return true
    } 
}


const removeClassMarca = () => {
    const teste = document.getElementById('formMarca')
    c(teste)
    document.getElementById('formMarca').classList.toggle("ocultadas")
    c('entrou')
}

const removeClassProduto = () => {
    document.getElementById('formProduto').classList.toggle("ocultadas")
}

const pegaDadosProdutos = () => {
    const nomeInput = document.getElementById('nomeProduto').value
    const marca = document.getElementById('marcaProduto').value
    const preco = document.getElementById('precoProduto').value

    let produtosCadastrados = JSON.parse(localStorage.getItem('Produtos'))

    let objProdutos = {
        descricao: nomeInput,
        marca: marca,
        preco: preco
    }

    produtosStorage.push(objProdutos)
    localStorage.setItem('Produtos', JSON.stringify(produtosStorage))
    preencheTabela()
}

const preencheTabela = () => {
    let qtdProdCadastrados = document.getElementById('prodCadastrados')
    let produtos = []

    if (localStorage.getItem('Produtos') != null) {
        produtos = JSON.parse(localStorage.getItem('Produtos'))
    }
    
    let txt = ''
    for (let i = 0; i < produtos.length; i++) {
        txt += `<tr>
        <td>${produtos[i].descricao}</td>
        <td>${produtos[i].marca}</td>
        <td>${produtos[i].preco}</td>
        </tr>`
    }
    document.getElementsByTagName('tbody')[0].innerHTML = txt;
    qtdProdCadastrados.innerHTML = produtos.length
  }