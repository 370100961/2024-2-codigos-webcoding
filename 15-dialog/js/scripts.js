//Exibir mensagem simples para o usuário
//alert("Essa é minha mensagem para o usuário")

//Permite o usuário escolher entre Cancelar(false) e OK(true)
//let escolha = confirm("Deseja realmente continuar?")
//if (escolha){
//    alert("Você apertou em OK")
//}else{
//    alert("Você apertou em CANCELAR")
//}

//Permite receber uma entrada de texto do usuário
//let nome = prompt("Qual seu nome?")
//let cidade = prompt("Onde você mora?")

let idade = prompt("Qual sua idade?")
let idadeInt = parseInt( idade )
alert ( idadeInt + 1 )

let peso = prompt("Qual seu peso?")
let pesoFloat = parseFloat( peso )
alert ( pesoFloat * 10 )

let saldoConta = prompt("Qual o valor você tem guardado no banco?")
let saldo = Number( saldoConta )
alert ( saldo )

''

//Se passar uma string, por exemplo "Rangel", o resultado é NaN = Not-A-Number