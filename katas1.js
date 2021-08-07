function oneThroughTwenty() {
  
  let teste = []
  
  for (let i = 1; i <= 20; i++){
      console.log(i);
    }return teste;
} console.log (oneThroughTwenty());

function evensToTwenty() {
    
  let cont = 2;
  let meuretorno = [];

  while (cont<=20) {
    console.log(cont);
    cont = cont+2;}
    return meuretorno
}
console.log (evensToTwenty())

function oddsToTwenty() {
  
 let cont = 1;
 let teste = []; 

  while (cont<=20){
    console.log(cont);
    cont = cont+2;
  }return teste
}
console.log(oddsToTwenty())

function multiplesOfFive() {

  let i = 5
  let teste = []

  while (i <=100){
    console.log(i);
    i = i+5;
  }return teste
}
console.log(multiplesOfFive())

function squareNumbers() {

let fim = []

for(num=1;num<=10;num++){
  console.log((num*num))
}return fim
}console.log(squareNumbers())
//call function squareNumbers

function countingBackwards() {
  
  let num = 20
  let teste = []
  
  for (let i = 1; i <= 20; i++){
      console.log(num);
      num = num-1
    }return teste
} console.log(countingBackwards())

function evenNumbersBackwards() {

  let num = 20
  let teste = []

  while (num >1) {
    console.log(num);
    num = num-2;}
    return teste
}console.log(evenNumbersBackwards())


function oddNumbersBackwards() {

let num = 19
let fim = []

while (num>=1){
  console.log(num);
  num = num-2;}
  return fim
}console.log(oddNumbersBackwards())


function multiplesOfFiveBackwards() {

  let num = 100
  let fim = []

while (num>=5){
  console.log(num);
  num = num-5;}
  return fim
}console.log(multiplesOfFiveBackwards())


function squareNumbersBackwards() {
    
  let fim = []

  for(num=10;num>0;num--){
    console.log((num*num))
  }return fim  
}console.log(squareNumbersBackwards())

//call function squareNumbersBackwards