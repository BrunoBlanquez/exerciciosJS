const conversaoMonetaria = () => {
    let valor = document.getElementById('inputValor').value
    const todosRadios = document.querySelectorAll('input[type="radio"]:checked')
    const valorConvertido = document.getElementById('valorConvertido')
    
    switch(todosRadios[0].id) {
        case 'realParaDolar':
            valor = valor * 5
            break;
        case 'dolarParaReal':
            valor = valor / 5
            break
    }

    valorConvertido.value = valor;
}