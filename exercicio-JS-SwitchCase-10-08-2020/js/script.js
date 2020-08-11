function inciciaConversor() {
    let res = document.getElementById('res')
    let escolha = document.getElementById('select-converter').value
    let input = document.getElementById('input-converter')
    if(input.value == 0) {
        alert('[ERRO!] Por favor, digite um número!')
        document.getElementById('res').style.background = '#f00'
        document.getElementById('res').style.borderRadius = '2rem 1rem'
        document.getElementById('res').style.textAlign = 'center'
        document.getElementById('res').style.color = '#fff'
        res.innerHTML = `[ERRO!!]`
    }else{
        let num = Number(input.value)
        // Converter Celsius pra Fahrenheit
        let celsiusF = num * 9/5 + 32
        // Conveter Fahrenheit para Celsius
        // O método Math.trunc() vai truncar o número, ou seja, vai tirar todos os números depois da vírgula.
        let fahrenheitC = Math.trunc((num - 32) * 5/9)
        // Kelvin para Fahrenheit
        let kelvinF = (num - 273.15) * 9/5 + 32
        let fahrenheitK = (num - 32) * 5/9 + 273.15 
        res.innerHTML = ``
        switch(escolha) {
            case '1':
                document.getElementById('res').style.background = '#005800'
                document.getElementById('res').style.color = '#fff'
                document.getElementById('res').style.borderRadius = '2rem 1rem'
                document.getElementById('res').style.textAlign = 'center'
                res.innerHTML = `${num}°C = ${celsiusF}°F.`
            break

            case '2':
                document.getElementById('res').style.background = '#005800'
                document.getElementById('res').style.color = '#fff'
                document.getElementById('res').style.borderRadius = '2rem 1rem'
                document.getElementById('res').style.textAlign = 'center'
                res.innerHTML = `${num}°F = ${fahrenheitC}°C.`
            break

            case '3':
                document.getElementById('res').style.background = '#005800'
                document.getElementById('res').style.color = '#fff'
                document.getElementById('res').style.borderRadius = '2rem 1rem'
                document.getElementById('res').style.textAlign = 'center'
                res.innerHTML = `${num}K = ${kelvinF}°F.`
            break

            case '4':
                document.getElementById('res').style.background = '#005800'
                document.getElementById('res').style.color = '#fff'
                document.getElementById('res').style.borderRadius = '2rem 1rem'
                document.getElementById('res').style.textAlign = 'center'
                res.innerHTML = `${num}°F = ${fahrenheitK}K.`
            break

            default:
                alert('Por favor, preencha o campo!')
                document.getElementById('res').style.background = '#f00'
                document.getElementById('res').style.color = '#fff'
                document.getElementById('res').style.borderRadius = '5px'
                document.getElementById('res').style.textAlign = 'center'
                res.innerHTML = `Opção inválida. Tente novamente.`
            break
        }
    }
}
function iniciaComentario() {
    let comentar = document.getElementById('article-comentarios')
    let textArea = document.getElementById('comentarios')
    let nome = document.getElementById('nome')
    if(textArea.value == 0 || nome.value == 0) {
        alert('[ERRO!] Por favor, digite algo antes de apertar o botão.')
        document.getElementById('article-comentarios').style.background = '#f00'
        document.getElementById('article-comentarios').style.color = '#fff'
        document.getElementById('article-comentarios').style.borderRadius = '2rem 1rem'
        document.getElementById('article-comentarios').style.textAlign = 'center'
        comentar.innerHTML = `[ERRO!]`
    }else{
        let comentarios = String(textArea.value)
        let name = String(nome.value).toUpperCase()
        // Criar um paragrafo
        let create = document.createElement('p')
        document.getElementById('article-comentarios').style.background = '#005800'
        document.getElementById('article-comentarios').style.color = '#fff'
        document.getElementById('article-comentarios').style.borderRadius = '2rem 1rem'
        document.getElementById('article-comentarios').style.textAlign = 'center'
        create.innerHTML = `${name}: ${comentarios}`
        document.getElementById('article-comentarios').appendChild(create)
    }
}
function iniciaSwitchCase() {
    let res_switch = document.getElementById('res-switch')
    let opcoes = document.getElementById('opcoes').value
    // let input = document.getElementById('cardapio')
   // let cardapio = Number(input.value)
    switch(opcoes) {
        case '100':
            document.getElementById('res-switch').style.background = '#005800'
            document.getElementById('res-switch').style.color = '#fff'
            document.getElementById('res-switch').style.borderRadius = '5px'
            document.getElementById('res-switch').style.textAlign = 'center'
            res_switch.innerHTML = `O cachorro quente custa R$1.70.`
        break

        case '101':
            document.getElementById('res-switch').style.background = '#005800'
            document.getElementById('res-switch').style.color = '#fff'
            document.getElementById('res-switch').style.borderRadius = '5px'
            document.getElementById('res-switch').style.textAlign = 'center'
            res_switch.innerHTML = `O Bauru com ovo custa R$2,60.`
        break

        case '102':
            document.getElementById('res-switch').style.background = '#005800'
            document.getElementById('res-switch').style.color = '#fff'
            document.getElementById('res-switch').style.borderRadius = '5px'
            document.getElementById('res-switch').style.textAlign = 'center'
            res_switch.innerHTML = `O Bauru Simples custa R$2,30.`
        break

        case '103':
            document.getElementById('res-switch').style.background = '#005800'
            document.getElementById('res-switch').style.color = '#fff'
            document.getElementById('res-switch').style.borderRadius = '5px'
            document.getElementById('res-switch').style.textAlign = 'center'
            res_switch.innerHTML = `O Hamburguer custa R$2,40.`
        break

        case '104':
            document.getElementById('res-switch').style.background = '#005800'
            document.getElementById('res-switch').style.color = '#fff'
            document.getElementById('res-switch').style.borderRadius = '5px'
            document.getElementById('res-switch').style.textAlign = 'center'
            res_switch.innerHTML = `O Cheeseburguer custa R$2,50.`
        break

        case '105':
            document.getElementById('res-switch').style.background = '#005800'
            document.getElementById('res-switch').style.color = '#fff'
            document.getElementById('res-switch').style.borderRadius = '5px'
            document.getElementById('res-switch').style.textAlign = 'center'
            res_switch.innerHTML = `O Refrigerante custa R$1,00.`
        break

        default:
            alert('[ERRO!] Opção inválida.')
            document.getElementById('res-switch').style.background = '#f00'
            document.getElementById('res-switch').style.color = '#fff'
            document.getElementById('res-switch').style.borderRadius = '5px'
            document.getElementById('res-switch').style.textAlign = 'center'
            res_switch.innerHTML = `[ERRO!] Opção inválida.`
        break
    } 
}