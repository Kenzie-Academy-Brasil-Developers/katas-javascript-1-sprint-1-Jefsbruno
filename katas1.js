function oneThroughTwenty() {
  
  let teste = []
  
  for (let i = 1; i <= 20; i++){
      teste+=i+" ";
    }return teste;
} console.log (oneThroughTwenty());

function evensToTwenty() {
    
  let teste = []
  
  for (let i = 2;i<=20;i++){
    num = i%2;
    if (num%2 == 0){
    teste+=i+" ";}
  }return teste
}
console.log (evensToTwenty())

function oddsToTwenty() {
  
  let teste = []
  
  for (let i = 2;i<=20;i++){
    num = i%2;
    if (num%2 != 0){
    teste+=i+" ";}
  }return teste
}
console.log(oddsToTwenty())

function multiplesOfFive() {

  let teste= []

  for(let i=0;i<100;i++){
    num = i*5
    if(num<=100){
    teste+=num + " "}
  }return teste
}
console.log(multiplesOfFive())

function squareNumbers() {

let fim = []

for(num=1;num<=10;num++){
  fim += ((num*num)+ (" "))
}return fim
}console.log(squareNumbers())
//call function squareNumbers

function countingBackwards() {
  
  let teste = []
  
  for (let i = 20; i>=1; i--){
      teste+=i+" ";
    }return teste;
} console.log(countingBackwards())

function evenNumbersBackwards() {

  let teste = []
  
  for (let i=20;i>=2;i--){
    num = i%2;
    if (num%2 == 0){
    teste+=i+" ";}
  }return teste
}console.log(evenNumbersBackwards())


function oddNumbersBackwards() {

  let teste = []
  
  for (let i=20;i>=1;i--){
    num = i%2;
    if (num%2 != 0){
    teste+=i+" ";}
  }return teste
  }console.log(oddNumbersBackwards())


function multiplesOfFiveBackwards() {
let teste = []
  for(let i=100;i>0;i--){
    num = i*5
    if(num<=100){
    teste+=num + " "}
  }return teste
}console.log(multiplesOfFiveBackwards())


function squareNumbersBackwards() {
    
  let fim = []

  for(num=10;num>0;num--){
   fim+=((num*num) + " ")
  }return fim  
}console.log(squareNumbersBackwards())

//call function squareNumbersBackwards