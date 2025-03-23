let sum=(a,b)=>a+b
let isPosistiv=(number)=>number>=0
let randomNumber=()=>Math.random()

let multiply=(a,b)=>a*b
console.log(multiply(2,2))

let greet=(name)=>"Ваше имя"+name
console.log(greet(prompt('Введите ваше имя')))

let max=(x,y)=>Math.max(x,y)
console.log(max(6,4))

let i=2
let isEven=(+prompt('Введите число')%i==0) ?
    ()=>console.log("true"):
    ()=>console.log("false");
isEven()
    
let reverseString=(string)=>console.log(string.split("").reverse().join(''))
reverseString("Hello")

let factorial=(factorial1)=> {
    if (factorial1==0) {
        return 1;
    } else {
        return factorial1*factorial(factorial1-1);
    }
}
console.log(factorial(+prompt('Введите число:')))


function createCounter() {
    let counter=0;
    return {
        increment:()=>counter+1,
        decrement:()=>counter-1
    }
}
let count=createCounter()
console.log(count.increment())
console.log(count.decrement())