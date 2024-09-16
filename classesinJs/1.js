class Rectangle {
    constructor(width, height, color) {//constructor construct the object from classes;
        this.width = width;
        this.height = height;
        this.color = color; 
    }
    
    area() {
        const area = this.width * this.height;
        return area;
    }
    
    paint() {
        console.log(`Painting with color ${this.color}`);
    }
    
}
const rect = new Rectangle(2, 4,"red")//creating a reactangleObject when we have to craete a reactangleObject we should give the argguments;
// whenever we write newkeyword it construct the object and the control reaches the constructor,and when the uuser give 2 it assign the width
//of the reactangle object as 2 and so on;
// when we create a new object constructor is being called automatically because it is constructing the object;
const area = rect.area();
console.log(area)


// we can also do the same work nativvely ;
const react1={
    width:2,
    height:3,
    color:"red"
}
function area1(react){
    return react.width*react.height
}
console.log(area1(react1))

// but the class gives us the better structure of code;


// THEORY;
// Key Concepts
// Class Declaration:
// You declare a class using the class keyword.
// Inside a class, you define properties (variables) and methods (functions) that will belong to the objects created from this class.
// Constructor:
// A special method inside the class that is called when you create an instance (an object) of the class.
// It’s used to initialize the properties of the object.
// Methods:
// Functions that are defined inside the class and can be used by all instances of the class.
// Inheritance:
// Classes can inherit properties and methods from other classes, allowing you to create a new class based on an existing one.
// Static Methods:
// Methods that belong to the class itself, not to instances of the class. You call them directly on the class.
// Getters and Setters:
// Special methods that allow you to define how properties are accessed and modified.

const date=new Date();
console.log(date.getDay());//its today fiday we are using 0 base index;
// i have used the class someone wrote;
const map = new Map();
map.set('name', 'Alice');
map.set('age', 30);
console.log(map.get('name'));
// there is some class which javascript provides us;

// PROMISE CLASS***************
// the promise class gives u a promise , that i wil return u something in the future;


function printName(){
    console.log("utkarsh");
}
setTimeout(printName,3000);//call back
// it promises to call out the printName function after three second;
//defining a promise is hard but using a promise is easy;

function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    //it is the returning you the object of Promise Class
}//ye kaise built hua hai ishko niche humlog 100 lines ke baad smjhe hai;
function callback() {
    console.log("3 seconds have passed");
}
setTimeout(callback,3000)
setTimeoutPromisified(3000).then(callback)//syntactically cleaner code;
//after the promise is done call back the callback() function;
// it is another way to call assynchronous fu ction;
// another way;
setTimeoutPromisified(5000).then(function callBack(){
    console.log("5 second has passed")
})

function waitFor3sec(resolve){
    setTimeout(resolve,3000);
}
function p(){
    console.log("hii");
}
waitFor3sec(p);

// by observing the code from line-94 to 100 i can say that after three second hii willl be prinr;
//Lets understand the concept behind setTimeoutPromisified;
// function setTimeoutPromisified(){
//     return new Promise(waitFor3sec)//ye ek argument lega wait for 3sec;
// }
// function main(){
//     console.log("main is called")
// }
// setTimeoutPromisified().then(main);
//dekho kya hua ki setTimeoutPromisified ek object return kr rha hai of Promise class 
// we ek argument le rhe hai function waitforthreesecond aur sme jo argument hai nah we .then me jo argument hai we hoga;
// hence after three second main will called
// *****************whatever the function you have passed to as an argument of object ,toh ushka jo first argument hoga whenever that is called i will call jo .then ke andr hoga
  