const name="utkarsh"
const repoCount=50
console.log(name+repoCount);
// ye jo trika hai we old tarkikka hai  ot a good practice;

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)//ye new version hauu ye hi use krenge;
 
// another way to declare string using object;
const gameName=new String('hitesh-choudhary-singh')
// console.log(gameName[0]);
// console.group(gameName.length)
// console.log(gameName.toUpperCase())// ye humlog ka original string ko change nhi krega kyuki string
// primitive data type hai yha pass by value hota hai copy create hota hai;
// console.log(gameName.charAt(2));
// humlog kkisi charcteer ka index bhi ta kr skte hai;
// console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,4)//(4 include nhi hoga 0 index se 3rd index tk ka substring dega;)
console.log(newString)

// const anotherString=gameName.slice(0,4);
// console.log(anotherString)

// dono me same output de rha but slice me humlog negative index bhi de skte hai;
const anotherString=gameName.slice(-8,4);
console.log(anotherString)

// ********* trim and replace in string;
const newStringOne="     hitesh   "
console.log(newStringOne)
console.log(newStringOne.trim())// sare unrequried spae ko trim krdegaa;;

const url="https://hitesh.com/hitesh%20choudhary" // browser space nhi bdh pta agr kisi wepage ka name me space hai to we %20 se replace hoga;
console.log(url.replace('%20','-'))
console.log(url.includes('hitesh'))

console.log(gameName.split('-'))// ye string ko array me change kregaa bhut jruro hai ;
// array bnayega