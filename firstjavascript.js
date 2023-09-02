let radius = 5
const pi = 3.14
let area;
radius = 8
//pi = 3.88 it's give a error because, in pi keyword is const, we using const keyword the variable shoult be constant
area = pi* radius*radius
console.log(area);//200.96

// why we using a typeof

let num1 = 34.6
console.log(typeof num1)//number

let nuum = 5                                        //let nuum = 5
console.log(5/"var")//NaN not a number              //console.log(typeof(5/"var"))//number

let user = 'varun'
console.log(typeof(user));//string

//Number data type

//we use hexadecimal value
let num2 = 0xf
console.log(num2)//15

let num3 = 0xff
console.log(num3)//255

let num4 = 1.5e12
console.log(num4)//1500000000000 so it the exponential, it is 1.5*10^12

let num5 = 100_00_000
console.log(num5)//In javascript we can find the values easily, we using underscope, But we not using comma over here

let num6 = 5/0
console.log(num6)//Infinity, So it is a type of number

console.log(Number.MAX_VALUE)//1.7976931348623157e+308

console.log(Number.MAX_VALUE * 10)//Infinity

//How can we use BinInt, when we using the last name n on value that is BinInt, it shows as it is values
let num7 = 1537329853298547239865846n
console.log(num7)//1537329853298547239865846n

// let num8 = 1537329853298547239865846n
// console.log(num7+2)//TypeError: Cannot mix BigInt and other types, use explicit conversions

let num8 = 1537329853298547239865846n
console.log(num7+2n)//fix this issue 1537329853298547239865848n

//String data type

//The + operate is very smart it checks weather its string or number, is it String it will concatinated
// if its number it will addition for example for String

let firstName = 'varun'
let lastName = 'kumar'
let userName = firstName + " " +lastName//+" "+ we take a space in between
console.log(userName)//varun kumar

//We understanding how we are using single cots and double cots
let userNamee = 'varun kumar "capgemini"'
console.log(userNamee)//varun kumar "capgemini"

//So which ever double cots is work in a string we using like this
let userr = "varun kumar \"capgemini\""
console.log (userr)//varun kumar "capgemini"

//escape character
user = 'Va\trun \nkumar'//Va	run   \t - give some space, \b - removing the extra character
console.log(user)//   \n - next line kumar   

//Boolean data type

let bool = 5 > 6                 //let bool = 5 < 6          //let bool = 5 < 6 
console.log(bool)// false        //console.log(bool)//true   //console.log(typeof(bool))//Boolean

//Null and undefined

let use = null                 // let use = null  its not showing any bug and error, we convey we don't have a value we can say null
console.log(use)//null         // console.log(typeof(use))//object 

let usee                       //let usee  
console.log(usee)//undefined  //console.log(typeof(usee))//undefined 

//Type Conversion and type Coercion:

//Explisite conversion
let numm = 6
console.log(numm, typeof(numm))//6 number

//we convert Number to string
let nummm = String(6)
console.log(nummm, typeof(nummm))//6 string

//we conver String to Number
let nummmb = Number("123")
console.log(nummmb, typeof(nummmb))//123 number

//Coercion
let x
console.log(x, typeof x)//undefined undefined

x = 8
console.log(x, typeof x)//8 number

x = x + ""
console.log(x, typeof x)//8 string

x = x +2
console.log(x, typeof x)//82 string

x = +x +2
console.log(x, typeof x)//84 number

x = x - 2
console.log(x, typeof x)//6 number    

x = !x
console.log(x, typeof x)//false boolean

//How to convert a boolean into number
console.log(Boolean(7))//true
console.log(Boolean(0))//false, Because o is falsy value
console.log(Boolean(null))//false, Because null is falsy value
console.log(Boolean(undefined))//false, Because undefined is falsy value
//apart from the everything is truly value like: convert object, function into boolean is gives to truly,
console.log(Boolean("varun"))//true

//ParseInt is a special function which will except a String, it will try to convert into Number
let y = parseInt("123 varun")
console.log(y)//123

//Arithmetic operator
let number1 = 6
let number2 = 8
let result = number1 + number2
console.log(result)//14

 number1 = 6
 number2 = 8
 result = number1 - number2
console.log(result)//-2

number1 = 6
number2 = 8
result = number1 / number2
console.log(result)//0.75

number1 = 6
number2 = 8
result = number1 % number2
console.log(result)//6

number1 = true
number2 = true
result = number1 + number2
console.log(result)// we using falsy and truly value here 0-false and 1-true, that's we got 1+1 = 2

let nu = 4
//nu = 4 + 8   12 instead of using this
nu +=8
nu++ // increment number 1, this we call post increment
++nu // This will call pre increment
nu-- // decrement number 1, this we call post decrement
--nu // this is pre decrement
console.log(nu) //12

let va = 5
let v = ++va 
console.log(v, va) //6 6

 va = 5
 v = va++ 
console.log(v, va) //5 6

//We need to a cube value of 4
let numb = 4
let res = numb*numb*numb
console.log(res)//64

 numb = 4
 res = Math.pow(4, 3)
console.log(res)//64, But in es6 we have one feature

 numb = 4
 res = numb**3
console.log(res)//64 single * is multiplication, and double ** is power

//Relational Operator
let data = 7 > 6
console.log(data)//true

data = 6 <= 6
console.log(data)//true

let b = 7
let c = 7
data = b > c
console.log(data)//true

 x = "pen"
 y = "book"
data = x >= y
console.log(data)//Ascii values, For every character a unique number

x = "pen"
 y = "pencil"
data = x > y
console.log(data)//false, it will comparing character by character

// Comparing a number and String
x = "2"
 y =  1
data = x >= y
console.log(data)//true

x = 2
 y =  "3"
data = x >= y
console.log(data)//false

//Comparing a equals 

 x = 3
 y = 3
data = x == y
console.log(data)//true

 x = "3"
 y = 3
data = x == y
console.log(data)//true

//In javascript we are using to === equals

x = "3"
y = 3
data = x === y
console.log(data)//false

//Locical operators
x = 7, y = 8, z = 9
result = x > y
console.log(result)//false

x = 7, y = 8, z = 9
result = x < y && y < z
console.log(result)//true

x = 7, y = 8, z = 9
result = x < y && y > z
console.log(result)//false

x = 7, y = 8, z = 9
result = x < y || y > z
console.log(result)//true, first condition is true and second is false, it give a true

x = 7, y = 8, z = 9
result = x > y || y > z
console.log(result)//both are false it will give a false

x = 7, y = 8, z = 9
result = x < y && y > z
n = !result
console.log(result, n)//false true

x = 7, y = 8, z = 9
result = x < y || y > z
n = !result
console.log(result, n)//true false

//Conditional Statement

num1 = 6
num2 = 4
result = num1 > num2
if(result)
   console.log('num1 is greater')//num1 is greater
   console.log('Bye....') //Bye....

num1 = 3
num2 = 4
result = num1 > num2
if(result)
   console.log('num1 is greater')
else
   console.log('num2 is greater')//num2 is greater 
   console.log('yee....')//yee....
   console.log('Bye....')//Bye....

num1 = 6
num2 = 4
result = num1 > num2
if(result){
   console.log('num1 is greater')//num1 is greater
}
else{
   console.log('num2 is greater')
   console.log('yee....')
}
   console.log('Bye....')//Bye....
//The curly braces is a optional, if we have a one statement, But we have a multiple statement 
//We should use curly braces

//When we using else if
num1 = 6
num2 = 4
num3 = 8
if( num1 > num2 && num1 > num3 ){
   console.log('num1 is greatest')
}
else if (num2 > num3){
   console.log('num2 is greatest')
}else {
    console.log('num3 is greatest')//num3 is greatest
}
   console.log('Bye....')//Bye....

//We find number is even or odd using if else condition

let numberr = 5
let rresult
if(numberr%0 === 0)
   rresult = "even"
else
   rresult = "odd"
console.log(rresult)  //odd

//when we using ternary operator
num1 = 10
result = num1%2===0 ? "Even" : "Odd"
console.log(result)//Even

num1 = 11
result = num1%2===0 ? "Even" : "Odd"
console.log(result)//Odd

// Switch statement
//Ex: I want to put an alarm for based on the day
//Mon - 7am
//Tue - Thrus - 4am
//Fri - 9am
//sat - sun - 8am

let day = "Holiday"
switch(day){
    case "Monday":
        console.log("7am")
        break;
    case "Tuesday": 
    case "Wednesday":
    case "Thrusday":
        console.log("4am") 
        break;
    case "Friday":
        console.log("9am")
        break;
    case "Saterday":
    case "Sunday":
        console.log("8am")   
    default: 
       console.log("7am doing body workout")                
}
       console.log("alarm bell")

//Template literal

 num1 = 8;
 num2 = 4;
 result = num1 + num2
 console.log("The addition of " + num1 + " and " + num2 + " is " + result)//The addition of 8 and 4 is 12
 console.log(`The addition of ${num1} and ${num2} is ${result}`)//The addition of 8 and 4 is 12
 //we want to print next line 
 console.log(`varun 
            kumar`)//varun next line kumar

//Loops
console.log("Hi")//Hi
//I want to print Hi 10 times
//initialize, condition, increment

//while loop - First check for the conditions
let i = 1
while(i <= 5)
{
    console.log("Hi", i)//Hi 1 Hi 2 Hi 3 Hi 4 Hi 5
    i++
}
console.log(i)//6

i = 5
while(i >= 1)
{
    console.log("Hi", i)//Hi 5 Hi 4 Hi 3 Hi 2 Hi 1 
    i--
}
console.log(i)

//Do while loop - First Execute the block then check for the conditions

 i = 5
 do
 {
    console.log("Wel", i)//Wel 5 Wel 6 Wel 7 Wel 8 Wel 9 Wel 10
    i++
 }while(i <= 10)

 //For loop - 

 for(let i = 1; i<=5; i++){
    console.log("Hello")//Hello Hello Hello Hello Hello
}
i = 1
for(; i<=5;){
    console.log("Ram")// Ram Ram Ram Ram Ram
    i++
}
//Nested for loop
for(let i = 1; i<=5; i++){
    console.log("hiii", i)//ex: it runs completly
    for(let j = 1; j<=5; j++)
         console.log("hello!!", i)//ex: it run same value 5 times
}
//Which one is the best loop compare to while loop and for loop
//Every loop is an own drawbacks and advantages

for(i = 1; i<=100; i++){
    if(i%12===0)
      console.log(i)//12 24 36 48 60 72 84 96
}
//435364747 I have this number, This numbers I need to print induvidually for reverse manner
let induvidually = 435364747
// console.log(induvidually%10)//6
// induvidually = parseInt(induvidually/10)
// console.log(induvidually)//12345

// console.log(induvidually%10)//5
// induvidually = parseInt(induvidually/10)
// console.log(induvidually)//1234
// //it will repeathing

while(induvidually > 0){
    console.log(induvidually%10)//747463534
    induvidually = parseInt(induvidually/10)
}

//Objects - its repersents the real entity
//Object literal
let aliean = {}
console.log(aliean)//{}   its key and value pair
console.log(typeof (aliean))//object

let input = 'name';
let alieann = {
    name: 'varun',
    tech: 'java',
    'work exp': 2//we have property name as two word we use space
}
console.log(alieann)//{ name: 'varun', tech: 'java' }
console.log(alieann.name);//varun
//or, Another way
console.log(alieann['name'])//varun     it depends upon the requirement we use . operator and []operator
console.log(alieann[input]);//varun

//Complex objects: it means having an object inside of that object ex
let alean = {
    name: 'varun',
    tech: 'java',
    laptop : {
        cpu: 'i5',
        ram: 4,
        brand: 'hp',
    }
}
console.log(alean);// This is the output 
// {
//     name: 'varun',
//     tech: 'java',
//     laptop: { cpu: 'i5', ram: 4, brand: 'hp' }
//   }
console.log(alean.tech)//java
console.log(alean.laptop)//{ cpu: 'i5', ram: 4, brand: 'hp' }y
console.log(alean.laptop.brand)//hp
console.log(alean.laptop.brand.length)//2
console.log(alean.laptop.brand?.length)//undefined it check available or not if not available gives undefined, 
                                       //if available gives a value for this purpose we use ? we handle the error using ?

delete alean.laptop// Javascript have a delete word
console.log(alean)// { name: 'varun', tech: 'java' }  now its not showing a laptop value, if anything we delete the property using delete                                        

 //How do we use a for in loop
 //we want to print a one by one value for ex:
 let allean = {
    name: 'varun',
    tech: 'java',
    laptop : {
        cpu: 'i5',
        ram: 4,
        brand: 'hp',
    }
}
for(let key in allean){
//console.log(key);//name tech laptop
//console.log(key, allean.tech);//name java  tech java  laptop java
console.log(key, allean[key]);//name varun
                            // tech java
                            // laptop { cpu: 'i5', ram: 4, brand: 'hp' }
 }




















