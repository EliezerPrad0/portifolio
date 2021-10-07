var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
});

document.querySelector("#qtde").addEventListener("change", atualizarPreço)
document.querySelector("#js").addEventListener("change", atualizarPreço)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreço)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreço)
document.querySelector("#prazo").addEventListener("change", function (){
    const prazo = document.querySelector("#prazo").value
document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreço()
})

function atualizarPreço(){   
    const qtde = document.querySelector("#qtde").value
    const temJs = document.querySelector("#js").checked
    const incluilayount = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value

    let preco = qtde * 100;
    if (temJs) preco *= 1.1
    if (incluilayount) preco += 500
    let taxaUgencia = 1 - prazo*0.1;
    preco *= 1 + taxaUgencia
    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}
