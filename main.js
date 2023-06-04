function calcular () {
    var altura = document.getElementById('altura')
    var peso = document.getElementById('peso')
    var IMC = Number(peso.value) / (Number(altura.value)**2)
    res.innerHTML = `Seu IMC é de ${IMC.toFixed(2)}`
    if (IMC < 18.5){
        res2.innerHTML = `Você está abaixo do peso.`
    } else if (IMC < 24.9) {
        res2.innerHTML = `Você está no peso ideal.`
    } else if (IMC < 29.9) {
        res2.innerHTML = `Você está em obesidade grau I.`
    } else if (IMC < 34.9) {
        res2.innerHTML = `Você está em obesidade grau II (severa).`
    } else {
        res2.innerHTML = `Você está em obesidade grau III (mórbida).`
    }
}