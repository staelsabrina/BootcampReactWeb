function clicou(){
    document.getElementById("agredecimento").innerHTML = "Obrigada por clicar"
    //alert('obrigada por clicar')
}

function redirecionar(){
    window.open('https://www.google.com.br') //abre uma nova aba ou janela
    window.location.href="https://www.google.com.br" //abre na mesma página
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado por passar o mouse"
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    //alert('página carregada')
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/* Ala 4

function soma (n1, n2){
    return n1 + n2
}

function validaIdade(idade){
    var validar
    if(idade >= 18){
        validar=true
    } else {
        validar=false
    }   
    return validar 
}

var idade = prompt('Qual sua idade?')

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

console.log(soma(5,10))
console.log(setReplace("Vai japão", "japão", "brasil"))
*/

/* Aula 3
var d = new Date();
console.log(d.getDay())
console.log(d.getMinutes())
console.log(d)

for(var count=0; count <=5; count++){
    console.log(count)}


var count = 0
while(count <= 5){
    console.log(count)
    count++
}


var idade = prompt('Qual sua idade?')

if (idade >= 18){
    console.log('maior de idade')
}else{
    console.log('menor de idade')
}
*/



/* Aula 2

var frutas = [{nome:'maçã', cor:'vermelha'}, {nome:'uva', cor:'roxa'}]
console.log(frutas);
alert(frutas[1].nome)

//var fruta = {nome:'maçã', cor:'vermelha'}
//console.log(fruta)

//var lista = ['maçã', 'pera', 'laranja']
//lista.push('uva')
//lista.pop()

console.log(lista.length)
console.log(lista.reverse())
console.log(lista.toString())
console.log(lista.join(' - '))

*/




/* Aula 01 

var nome = "Stael Sabrina"
var idade = 33
var idade2 = 10
var frase = "Japão tem o melhor yakissoba do mundo"
var n1 = 5
var n2 = 3

//alert('Meu primeiro JS')
//alert(`Bem vinda ${nome}, você tem ${idade} anos`)
//alert(idade + idade2)

console.log(nome);
console.log(idade+idade2)
console.log(frase.replace("Japão", "China"))
//alert(frase.replace('Japão', 'China'))
console.log((frase.replace("Japão", "China").toUpperCase()))
console.log(frase.toLowerCase())

console.log(n1 * n2)

*/