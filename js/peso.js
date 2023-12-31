function converterPeso() {
    // Variáveis que armazenam os valores dos elementos HTML
    let medidaOriginal = document.getElementById("selecao").value
    let medidaConvertida = document.getElementById("selecaoFinal").value
    let valor = String(document.getElementById("valor-inicial").value)
    let resposta = document.getElementById("resultado")

    // Removendo a vírgula e substituindo por ponto
    valor = removerVirgula(valor)

    // Verificando a medida de origem e a final para realizar a conversão
    if (medidaOriginal == medidaConvertida) {
        resposta.innerHTML = `Resposta: ${valor}`
    } else if (medidaOriginal == 1 && medidaConvertida == 2) {
        let resultado = valor * 1000
        resposta.innerHTML = `Resposta: ${resultado.toFixed(2)} g`
    } else if (medidaOriginal == 1 && medidaConvertida == 3) {
        let resultado = valor * 2.205
        resposta.innerHTML = `Resposta: ${resultado.toFixed(2)} lb`
    } else if (medidaOriginal == 2 && medidaConvertida == 1) {
        let resultado = valor / 1000
        resposta.innerHTML = `Resposta: ${resultado.toFixed(2)} kg`
    } else if (medidaOriginal == 2 && medidaConvertida == 3) {
        let resultado = valor / 453.6
        resposta.innerHTML = `Resposta: ${resultado.toFixed(2)} lb`
    } else if (medidaOriginal == 3 && medidaConvertida == 1) {
        let resultado = valor / 2.205
        resposta.innerHTML = `Resposta: ${resultado.toFixed(2)} kg`
    } else if (medidaOriginal == 3 && medidaConvertida == 2) {
        let resultado = valor * 453.6
        resposta.innerHTML = `Resposta: ${resultado.toFixed(2)} g`
    }
}
