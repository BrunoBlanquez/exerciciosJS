const mostraDesc = () => {
    const cidade = document.getElementById('selectCidade')
    const desc = document.getElementById('descricao')

    switch(cidade.value) {
        case 'SaoPaulo':
            desc.innerHTML = 'Desc SP'
            break;
        case 'RioJaneiro':
            desc.innerHTML = 'Desc RJ'
            break;
        case 'Curitiba':
            desc.innerHTML = 'Desc Curitiba'
            break; 
    }
}