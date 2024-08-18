// Function declaration

// Assigments-01 harkirat singh done all;
function greet(name) {
    return "Hello, " + name;
}

// Function call
let message = greet("John"); // "Hello, John"
console.log(message)

function Sum(a,b){
    return a+b
}
let ans=Sum(1,2);
console.log(ans)
console.log(Sum(3,4))

function canVote(num){
    if(num>=18){
        return true;
    }
    else{
        return false;
    }
}
console.log(canVote(19))
console.log(canVote(15))

function findSum(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum=sum+i;
    }
    return sum;
}
console.log(findSum(5));
// let user = {
// 	name: "Harkirat",
// 	age: 19
// }

// console.log("Harkirats age is " + user.age);

// function User(objects){
//     console.log("hello,darling: your name is:- " + objects.name +" "+ "your age is:- "+objects.age)
// }
// User(user)
let user = {
	name: "Harkirat",
	age: 19,
    gender:"male"
}
function criteria(objects){
    if(objects.gender==="male"){
        console.log("Mr"+" "+objects.name)
    }
    if(objects.age>=18){
        console.log("can vote")
    }
    else if(objects.gender==='female'){
        console.log("Mrs"+" "+objects.name)
    }
    else if(objects.age<18){
        console.log("can,'t vote")
    }  
}
criteria(user)
let A = [1,2,3,4,5,6,7,8,9];
function filter(arr){
    let n=arr.length;
    for(let i=0;i<n;i++){
        if(arr[i]%2==0){
            console.log(arr[i])
        }
    }
}
filter(A)

const users = [{
    name: "Harkirat",
    age: 21
}, {
    name: "raman",
    age: 22
}
]
function age(arr){
    let n=arr.length;
    for(let i=0;i<n;i++){
        if(arr[i].age>=18){
            console.log(arr[i].name)
        }
    }
}
age(users)

