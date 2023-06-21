var comprimento = document.getElementById("pagMedida")
var peso = document.getElementById("pagPeso")
var temperatura =  document.getElementById("pagTemperatura")
var evento = document.getElementById("enviar")

var botaoSeletor = 1


function alterarValor(valor1, valor2, valor3, botaoValue){
    let unidade1 = document.querySelectorAll(".unidade1")
    let unidade2 = document.querySelectorAll(".unidade2")
    let unidade3 = document.querySelectorAll(".unidade3")

    botaoSeletor = botaoValue
    for(let i = 0; i < unidade1.length; i++){
        unidade1[i].innerHTML = valor1
        unidade2[i].innerHTML = valor2
        unidade3[i].innerHTML = valor3
    }
}

comprimento.addEventListener("click", function(){
    alterarValor("Metros", "Centímetros", "Polegadas", 1)
});

peso.addEventListener("click", function(){
    alterarValor("Quilogramas", "Gramas", "Libras", 2)
});

temperatura.addEventListener("click", function(){
    alterarValor("Celsius", "Fahrenheit", "Kelvin", 3)
});

evento.addEventListener("click", function (event) {
    event.preventDefault()
    if (botaoSeletor == 1) {
        converterComprimento()
    }
    if (botaoSeletor == 2) {
        converterPeso()
    } 
    if (botaoSeletor == 3){
        converterTemperatura()
    }
})