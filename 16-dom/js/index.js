


//Sempre que for utilizar as funções de selecionar
//elementos no DOM, preciso utilizar o document.
const hello = document.getElementById("hello")
hello.innerText = "Oi, Willian";

//Retorna um HTMLCollection, similar ao um Array
//Preciso passar a posição para capturar o valor
let num = document.getElementsByClassName("num")
//console.log(num[1].innerText)
//let valorUm = num[0].innerText
//let valorDois = num[1].innerHTML

let heading = document.getElementsByTagName("h4");

//Sempre retorna um unico valor
let numDois = document.querySelector(".num")
numDois.innerText = "44"
numDois.style.color = "#331AAF"

//Sempre vai retorna um HTMLCollection/NodeList (Como array)
//let headingComplexDois = document.querySelectorAll("h1")
