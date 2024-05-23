//proble 1-genete a random colour;
//random color changes by hex value;
const randomColor=function(){
    //hexValues;
    const hex="0123456789ABCDEF"
    let color='#'
    for(let i=0;i<6;i++){
        color=color+hex[Math.floor(Math.random()*16)]
    }  
    return color
}
let intervalId
const startChangingColor=function(){
    if(!intervalId){
        intervalId=setInterval(changeBgColor,1000)
    }
    function changeBgColor(){
        document.body.style.backgroundColor=randomColor()
    }
    
}
const stopChangingColor=function(){
    clearInterval(intervalId)
    //for clean up code; to use less memory;
    intervalId=null//and if we do this then we have to apply conditional check on interval id;
}
document.querySelector("#start").addEventListener('click',startChangingColor)
document.querySelector("#stop").addEventListener('click',stopChangingColor)