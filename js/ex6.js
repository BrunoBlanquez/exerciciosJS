const pegaSigno = () => {
    const dataInformada = document.getElementById('nascimento').value
    const mes = dataInformada.substring(5).substring(0, 2)
    const dia = dataInformada.substring(8)
    let resultadoSigno = document.getElementById('resultadoSigno')
    let signo = ''

    switch(mes) {
        case '10':
            dia > 22 ? signo = 'Escorpião' : signo = 'Libra'
            break;
    }
    
    resultadoSigno.innerText = signo
}