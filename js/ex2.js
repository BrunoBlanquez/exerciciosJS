const geraDesconto = () => {

    let valor = document.getElementById('valor').value
    const radioAVista = document.getElementById('radio1')
    const resultadoDesconto = document.getElementById('resultadoDesconto')

    if(valor >= 100 && radioAVista.checked) {
        valor = valor * 0.9
    }
    resultadoDesconto.innerText = valor
}