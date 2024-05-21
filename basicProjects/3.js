const clock=document.getElementById('clock')//we can do with query selector also;
// javascript  ka event hota hai set interval jo btata hai kitna interval baad ushko continuously run krna hai;
setInterval(function(){
    let date=new Date()
    clock.innerHTML=date.toLocaleTimeString()

},1000)//1000 taaki hr second update ho;