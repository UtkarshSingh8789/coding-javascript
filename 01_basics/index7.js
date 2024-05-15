const score=400
console.log(score)
// ye 400 output dega jishka type nuber hoga ;
// humlog chate hai aise variable bnana jo sirf number store kre mtlb pta ho ki we number rkh hai;
const newScore=new Number(100)
console.log(newScore)

console.log(newScore.toString())
console.log(newScore.toString.length)
console.log(newScore.toFixed(1))// point ke baad kitna digit--precision value


const otherNumber=123.455
console.log(otherNumber.toPrecision(3))//***return string
// point ke phle 3 value aayegai;;
// ek bar mdn pe jake pdho;
const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'))// ye indian order me omma lgayega

//***********************MATHS */

// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))// ye us number se higher integer value dega point ke baad 5 se km ho ya jada frk nhi prega;
// // output-5;
// console.log(Math.floor(4.9))// ye usse humesa chhota integer dega;
// // output-4;
// console.log(Math.sqrt(25))

// *****inportant part of maths;
console.log(Math.random())// ishka value humesa 0 se 1 aayega;
// agr humlog ko random value oi frange me chaiye toh humlog aise krenge

const min=10
const max=20
// random number ye dini ke beech me chaiye;
//bhut jrui hai ye  formula 
console.log(Math.floor(Math.random() * (max-min+1))+min)//******************** */