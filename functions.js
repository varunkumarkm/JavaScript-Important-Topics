//This is the way we creating the function and call the function
function greet() {
    console.log('Hello world')
}
greet();//Hello world
console.log(1)
greet();//Hello world

//How do we pass value in the function and how a function return a value

function greeting(){
    return 'Hello india'
}
let str = greeting()
console.log(str);//Hello india

function greeted(user){
    return `Hello ${user}!!`
}
let user = 'varun'
let strr = greeted(user)
console.log(strr);//Hello varun!!

//Function Expression
 
let add = function(num1, num2){//This is a ananimous function, we does'nt add the name
    return num1 + num2;
}
let result = add(5, 9)
console.log(result);//14

let adding = function(num1, num2){
    return num1 + num2;
}
let sum = adding
let results = sum(5, 9)
console.log(result);//14

let userr = 'varun' //So , user we created outside, we will call it as global variable
function greeted(usr){//usr is created inside the function, So we will call it as local variable
    let num = 5
    console.log(num)//5
    return `Hello ${usr}!!`
}
console.log(userr)// It print varun, Because it is a global variable, created as outside the block
//console.log(num);// it cannot print, Because it is a local variable, created as inside the block
let strrr = greeted(userr)
console.log(strr);//Hello varun!!

function addition(num1, num2, num3=1){
    console.log(num1, num2, num3)//12 3 1
    return (num1, num2, num3)
}
let value = addition(12, 3)
console.log(value)//undefined

//Arrow function - why arrow is use, In the future it helps to reducing the code ex:
let greeet = (user) => {
    console.log("Hello function " + user)//Hello function varun
    return 1
}
console.log(greeet('varun'))//1

//compare to the earlier code, arrow function is decreasing a lines of code ex:

let addedd = (num1, num2) => num1 + num2;
let rrr = addedd(23, 23);
console.log(rrr)//46

//How to add a function to an object (Function + Object)
let laptop = {
    cpu: '19',
    ram: 16,
    brand: 'dell',

    grreeet: function () {
        console.log('hello function')//hello function
    }
}
laptop.grreeet()

//this keyword, why it is this keyword
function getFastLaptop(laptop1, laptop2){
    if(laptop1 > laptop2) 
        console.log(laptop1)
    else 
        console.log(laptop2)// This is greater
}
let laptop1 = {
    brand: 'ausus',
    ram: 20,
    cpu: 'i7',

    compare: function(other){
        if(this.cpu > other.cpu) 
        console.log(this)
    else 
        console.log(other)
    },
    greetCongig: function(){
        console.log(this.cpu);//i7
    }
}
laptop1.greetCongig();

let laptop2 = {
    brand: 'ausus',
    ram: 20,
    cpu: 'i9',

    greetCongig: function(){
    }
}
laptop2.greetCongig();

getFastLaptop(laptop1, laptop2)//laptop 2, This is the third party function

laptop1.compare(laptop2)

//When we use constructor
function Aliean(name, tech){ //whenever we creating a constructor we use first character is capital
 this.name = name;
 this.tech = tech
}
let aliean1 = new Aliean('varun', 'java')
console.log(aliean1);//Aliean { name: 'varun', tech: 'java' }

function Alieann(name, tech){ 
    this.name = name;
    this.tech = tech

    this.work = function(){
        console.log('solving bugs');
    }
   }
   let aliean2 = new Alieann('anil', 'java')
   let aliean3 = new Alieann('kiran', 'javaScript')//Alieann { name: 'kiran', tech: 'javaScript' }
   aliean2.tech = 'aws'
   console.log(aliean2);//Alieann { name: 'anil', tech: 'aws' }
   aliean2.work();//solving bugs

   //Recurtion - The function is calling itself that is called recurtion, 
   //Where do we use this, May be for the JSON data, and factorial
//    let nuum = 1;
//    function show(){
//     console.log("Hi", nuum)
//     nuum++
//     show();
//    }
//    show();//Hi
 
   //Faciorial - ex: 5! = 5*4*3*2*1 = 120
   //I can say 5! = 5*4!

   function fact(n) {
    if(n==0)
    return 1;
else    
    return n*fact(n-1);
   }
   let numbbr = 5;
   let rresult = fact(numbbr)
   console.log(rresult)//120


