const converteHorario = () => {
    const horarioInformado = document.getElementById('horarioInformado').value
    const todosRadios = document.querySelectorAll('input[type="radio"]:checked')
    const campoResultado = document.getElementById('horarioConvertido')

    pegaDiferencaHorario(todosRadios)
    const resultadoDisplay = somaDiferencaHorario(horarioInformado, pegaDiferencaHorario(todosRadios))
    
    campoResultado.value = resultadoDisplay
}

const toTimestamp = (horario) => {
    let aux = horario.split(':'), dt = new Date();
    dt.setHours(aux[0]);
    dt.setMinutes(aux[1]);
    dt.setSeconds(0);
    return dt.getTime();
}

const somaDiferencaHorario = (horarioInformado, minutosAdd) => {
    let timeHoraFinal = toTimestamp(horarioInformado) + minutosAdd;
    let dt = new Date(timeHoraFinal);
    let result = dt.getHours() + ":" + dt.getMinutes();
    return result;
}

const pegaDiferencaHorario = (todosRadios) => {
    let minutosAdd = 0;
    switch(todosRadios[0].id) {
        case 'lisboaRadio':
            minutosAdd = 14400000
            break;
        case 'nyRadio':
            minutosAdd = -3600000 
            break;
        case 'cidMexicoRadio':
            minutosAdd = -7200000 
            break;
        case 'berlimRadio':
            minutosAdd = 18000000 
            break
    }
    return minutosAdd
}