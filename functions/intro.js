
let num = 1

// function powers2(){
//     //code goes here
// }
//
// let powers2() = function(){
//     //code goes here
// }
//
// let powers2lambda = ()=>{
//     //arrow function
// }

// let a = 5

//impure function
function puresquareA(){
    a *= a
}
//pure functions only return values and edit nothing outside
function puresquareA(a){
    return a *= a
}

let arrowsquare = ()=>{
    a*=a
}

// defaults to 2 for exponent
function power(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

function powers2object(length){
    let num = 1
    let arr = []
    for (let i=0;i<length;i++){
        arr.push(num)
        num*=2
    }
    return arr
}

//recursion!
function rec2s(num) {
    console.log(num)
    num *=2
    if (num<256) {
        rec2s(num)
    }
}

function powers2recursion(exponent){
    if(exponent == 0) {
        return 1
    } else {
        return 2*powers2recursion(exponent - 1)
    }
}

function replaceAll(string, char, rep){
    if(string.indexOf(char) < 0){
        return string
    } else {
        string = string.replace(char, rep)
        return replaceAll(string, char, rep)
    }
}

//this doesnt work bc java needs a return at any branch of a recursive function
function replaceAll2(string, char, rep){
    if(string.indexOf(char) < 0){
        return string
    } else {
        string = string.replace(char, rep)
        if(string.indexOf(char) >= 0) {
            replaceAll2(string, char, rep)
        } else {
            return string
        }
    }
}

//higher order function takes a function as an argument
function repeat(num, func){
    for(i=0;i<num;i++){
        func(i)
    }
}
function sayHi(num){
    console.log(`hello for the ${num} time!`)

function startsWthA(string){
        if(string[0]=="A"){
            return true
        } else {
            return false
        }
}

function hasPrefix(string){
    if(string.indexOf('Mr.')>=0 || string.indexOf('Ms.')>=0 || string.indexOf('Mrs.')>=0){
        return true
    } else {
        return false
    }
}

function filter(arr,func){
    let passed = []
    for (let i=0;i<arr.length;i++){
        if(func(arr[i])){
            passed.push(arr[i])
        }
    }
    return passed
}

let faculty = ["boo", "boo", "Mr. Boo"]
let docs = filter(faculty, hasPrefix)

let x = startsWthA("Anna")

repeat(4,sayHi)
console.log(replaceAll("oooo","o","i"))
