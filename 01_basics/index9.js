// array 
const myArr=[0,1,"hitesh",true,5,10]
console.log(myArr[1])
console.log(myArr[3])
console.log(myArr[2])

// // another way to declare array;
const myArr2= new Array(1,2,3,4,5)

// Array methods;
// myArr.push(6)
// console.log(myArr)
// myArr.pop()

// myArr.unshift(9)// starting me add hojayega;
// myArr.shift()// starting element ht jayega;
// console.log(myArr)
// console.log(myArr.includes(9))//ye boolean type output dega;
// console.log(myArr.indexOf(3))

// const newArr= myArr.join()// string me conver krdega;
// console.log(newArr)
// console.log(typeof newArr)

//*********slice,splice */
console.log("A ", myArr)
const myn1=myArr.slice(1,3)//3 excluded
console.log(myn1)
console.log("B ", myArr)
const myn2=myArr.splice(1,3)//3 included
console.log(myn2)
console.log("C ", myArr)

// dekho interview me question aayega aur pucchhega ki slice aur splice me kya antr
// hai to majority log bolenge ki slice me last wala exclude and splice me last wala include 
// but ye adhura answer hai splice original array me change krta hai (1 se lekr 3 tk ka index hi hta degaa)


// ******************************************************************************//

const marvelHeroes=["thor","ironman","spiderman"]
const dcHeroes=["superman","flash","batman"]
// marvelHeroes.push(dcHeroes)//isse dono merge nhi hoga blki marvel heroes ke 3rd index pe dc heroes wala array ajyega
// case of array innside arry;
// console.log(marvelHeroes[3])
// console.log(marvelHeroes[3][1])

// const allHeroes=marvelHeroes.concat(dcHeroes)// it merge two arrays and produce new array
// console.log(allHeroes)

// spread operator;
const all_new_heroes=[...marvelHeroes, ...dcHeroes]
console.log(all_new_heroes)

// use of flat;
const anotherArr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const readableArr=anotherArr.flat(Infinity)// ye kya krega aggr array ke and array ho toh ushko single array bna ke easy krdega
console.log(readableArr)
console.log(Array.isArray("hitesh"))
// false aayega lkin humog array bna skte hai;
console.log(Array.from("hitesh"))//ye array bna dega
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))//return a new arrray from set of elements

// intresting and doubt;
console.log(Array.from({name:"hitesh"}))// ye nhi bnapayega isliye empty array output dega