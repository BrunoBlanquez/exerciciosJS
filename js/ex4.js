const pegaTotalItens = () => {
    const itens = document.getElementsByClassName('checkboxItens')
    let totalItens = document.querySelectorAll('input[type="checkbox"]:checked');
    const totalItensResultado = document.getElementById('totalItens')

    let total = 0;

    if (itens.checked) {
        total++
    }

    totalItensResultado.innerHTML = totalItens.length;
}