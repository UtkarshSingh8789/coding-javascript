const form=document.querySelector('form')
// form jb bhi submit hoti hai to ushka value url me ya server ke pass chla jata hai ushko humlog ko rokna hoga kyuki form humlog server ke pass nhi bhj rhe;
//for submit in two ways-post type and get type;
//default action of form ko rokna hoga;
// const height=parseInt(document.querySelector('#height').value)//value empty
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value)//string value to int;
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')
    // agr humlog height weight ko form ke upr likhe to empty value chla jayega;
    //kyuki humlog chahte hai ki jb submit kre tb humlog read kre height weight ka value;
    if(height==='' || height<0 || isNaN(height)){
        results.innerHTML="please give a valid height"
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML="please give a valid weight"
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        results.innerHTML=`<span>${bmi}</span>`;
    }
})