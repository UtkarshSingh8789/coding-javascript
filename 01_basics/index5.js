// primitive data type-- call by value;
// 7types-- string,number,boolean,null,undefined,symbol,BigInt
const id=Symbol('123')
const anotherid=Symbol('123')// ye dno ka value same nhi hoga kyuki symbol dono ko alg bna dega agr same value denge to bhi equal nhi hoga
console.log(id==anotherid)// false aayyega


// refrence datatype
// arrays,Object,functions;

const heros=["shaktiman","naagraj","doga"]// array
let myObj={
    name: "utkarsh",
    age: 21,
}
 
const myFunction=function(){
    onslotchange.log("Hello world");
}
console.log(typeof myFunction)

//*********************************************** */

//MEMORY;
// two type
//Stack(primitive),Heap(Non-primitive);
