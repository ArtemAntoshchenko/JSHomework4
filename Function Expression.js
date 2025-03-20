let greet = function(name) {
    return console.log('Ваше имя'+name)
}
greet(prompt('Введите ваше имя'))

function calculate(a,b,oper) {
    return console.log(oper(a,b))
}
let oper = function(a,b) {
    return a+b
}
calculate(3,4,oper)

let age=16
if (age<18) {
    var welcome = function() {
        console.log("Привет!")
    }
} else {
    var welcome = function() {
        console.log("Здравствуйте!")
    }
}
welcome()

let age1=16
let welcome1 = function(){
    if (age1<18) {
        console.log("Привет")
    } else {
        console.log("Здравствуйте")
    }
}
welcome1()

function createCalculator(x,y,z) {
    switch(z) {
        case '+':
            plus(x,y);
            break;
        case '-':
            minus(x,y);
            break;
        case '*':
            multiply(x,y);
            break;
        case '/':
            divide(x,y);
            break;
    }
}
let plus = function(x,y){
    return console.log(x+y)
}
let multiply = function(x,y){
    return console.log(x*y)
}
let minus = function(x,y){
    return console.log(x-y)
}
let divide = function(x,y){
    return console.log(x/y)
}
createCalculator(5,5,prompt("Введите оператор","+,-,*,/"))