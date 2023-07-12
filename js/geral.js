// Obtendo referência aos elementos HTML com o IDs
var comprimento = document.getElementById("pagMedida");
var peso = document.getElementById("pagPeso");
var temperatura = document.getElementById("pagTemperatura");

// Obtendo referência ao elemento HTML com o ID "enviar"
var evento = document.getElementById("enviar")
// Variável que armazena o valor do botão selecionado
var botaoSeletor = 1;
// Função que altera os valores exibidos nos elementos HTML
function alterarValor(valor1, valor2, valor3, botaoValue) {
    let unidade1 = document.querySelectorAll(".unidade1");
    let unidade2 = document.querySelectorAll(".unidade2");
    let unidade3 = document.querySelectorAll(".unidade3");

    // Atualizando o valor do botão selecionado
    botaoSeletor = botaoValue;

    // Percorrendo os elementos selecionados e atualizando seus valores
    for (let i = 0; i < unidade1.length; i++) {
        unidade1[i].innerHTML = valor1;
        unidade2[i].innerHTML = valor2;
        unidade3[i].innerHTML = valor3;
    }
}



//Evento para alterar os valores para a respectiva medida
comprimento.addEventListener("click", function () {
    alterarValor("Metros", "Centímetros", "Polegadas", 1)
});

//Evento para alterar os valores para a respectiva medida
peso.addEventListener("click", function () {
    alterarValor("Quilogramas", "Gramas", "Libras", 2)
});

//Evento para alterar os valores para a respectiva medida
temperatura.addEventListener("click", function () {
    alterarValor("Celsius", "Fahrenheit", "Kelvin", 3)
});


//Evento para converter as medidas
evento.addEventListener("click", function (event) {
    event.preventDefault()

    let valor = document.getElementById("valor-inicial").value

    if (valor == "") {
        alert("Digite um valor para ser convertido")
    } else {
        if (botaoSeletor == 1) {
            converterComprimento()
        }
        if (botaoSeletor == 2) {
            converterPeso()
        }
        if (botaoSeletor == 3) {
            converterTemperatura()
        }
    }
})

// Função para remover a vírgula e substituir por ponto
function removerVirgula(valor) {
    if (valor.indexOf(",") != -1) {
        valor = valor.replace(",", ".")
        return Number(valor)
    } else {
        return Number(valor)
    }
}