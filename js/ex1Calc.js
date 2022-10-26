const soma = () => {
    document.addEventListener("click", (e) => e.preventDefault())
    const n1 = document.getElementById('n1')
    const n2 = document.getElementById('n2')

    let resultado = document.getElementById('resultado')
    resultado.innerText = parseInt(n1.value) + parseInt(n2.value)
}