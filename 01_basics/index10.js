// object literals;
const mySym=Symbol("key1")// bhut bar interview me puchhega i ek symbol lo ushko object ke keys me use krke ushko print krdo
const jsUser={
    name:"Hitsh",//ye string ki trh ishko smjh rha name ek trh ka string hai;
    "full name":"utkarsh Rajpoot",
    [mySym]: "myKey1",//ye syntax hai ishko yaad rkhna
    age: 18,
    location:"jaipur",
    email: "hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays: ["monday","saurday"]
}

// how to accesss;
// console.log(jsUser.email)
// another way==
// console.log(jsUser["email"])// ye trika bbi bhut jruri hai,
// ab dekho jaise humlog ko bolega full name access kro toh humlog dot operator se kr hi nhhii skte ha ishke liye humlog ko square bracket wala hi use krna hoga
// console.log(jsUser["full name"])
// agr humlog ko symbol datatype ko bhi access krna hoga toh bhi humlog ko bracket wala use krna hoga;
// console.log(jsUser[mySym])

// note-- humlog jaante hai ki generaaly .(dot) use krke object ke key ko acess krte hai but bhut baar humlog ko square bracket ka use krna hoga jo interviewer question puchhega

jsUser.email="utkarshkumarsingh42@gmail.com"// is trh equal to dekar humlog change bhi kr skte hai
// console.log(jsUser.email)

// agr humlog chae toh freeze bhi kr skte hai mtlb updation rok skte hai;
// Object.freeze(jsUser)
jsUser.email="yahoo.com"
// console.log(jsUser)

// humlog object me fuction bhi declare kr skte hai;
jsUser.greeting=function(){
    console.log("hello utkarsh")
}
console.log(jsUser.greeting)//ishme function execute nhi hoga fuction ka refrence aayega important concept aage jaake use hoga ishka
// console.log(jsUser.greeting())

jsUser.greeting2=function(){
    console.log(`hello jsuser ${this.name}`)
}
// console.log(jsUser.greeting2())

//************************************************ */
//CONTINUATION OF OBJECTS;

// const tinderUser= new Object()//singleton object
const tinderuser={}//non singletonObject
// dono trike se object acess kr skte hai ;;
tinderuser.id="123abc"
tinderuser.name="sammy"
tinderuser.isLoggedIn=false


// nested objects;
const regularUser={
    email:"utkarsh@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)

// combination of objects;
const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
// const obj3={obj1,obj2}
// console.log(obj3)//ishme bhi array wala problem aayega object ke andr object ayega dono merge nhi hoga

// const obj3=Object.assign({},obj1,obj2)//best practice;
// console.log(obj3)

//a nother way;
const obj3={...obj1, ...obj2}//generally ye use krte hai
// console.log(obj3)

console.log(tinderuser)

// dekho bhut humlog ko jb database pe kaam krenge aur project me toh humloh objects ke keys ya value ko array me change krenge;
console.log(Object.keys(tinderuser))//ishka output ek array hoga;
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))// ye array ke andr array dega key value array
console.log(tinderuser.hasOwnProperty('isLoggedIn'))
console.log(tinderuser.hasOwnProperty('notLoggedIn'))

//*************************************************** */
// Continuation of objets;
// object destructuring;


const course={
    courseName:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
console.log(course.courseInstructor)//suppose ye humlog ko tin bar ya jada baar print krna ho to baar aisa krna bulkier ho jayega;
const {courseInstructor}=course
console.log(courseInstructor)
// suppose humlog ko courseinstructor ek bra bulkier name lg rha toh humlog ushko change bhi kr skte hai apne maan se destruct kr skte hai;
const {courseInstructor:instructor}=course
console.log(instructor)


