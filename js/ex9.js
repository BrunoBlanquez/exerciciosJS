const geraTabuada = () => {
    const numero = document.getElementById('numero').value

    const tableBody = document.getElementById('tableBody')
    tableBody.innerHTML = ""

    
    
    for (let i = 1; i <= 10; i++) {
        const row = tableBody.appendChild(document.createElement('tr'))
        const createTh = document.createElement('th')
        createTh.innerText = i
        row.appendChild(createTh)

        const createTd = document.createElement('td')
        createTd.innerText = numero
        row.appendChild(createTd)

        const createTdResultado = document.createElement('td')
        createTdResultado.innerText = i * numero
        row.appendChild(createTdResultado)
    }


}