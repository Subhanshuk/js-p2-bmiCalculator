const form=document.querySelector('form')

form.addEventListener('submit',(ev)=>{
    ev.preventDefault();

    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#results')

    if(height === '' || height<0 || isNaN(height)){
        result.innerHTML='plese add a valid height'
    }
    else if(weight === '' || weight<0 || isNaN(weight)){
        result.innerHTML='please add a valid weight'
    }
    else{
        bmi=(weight/((height*height)/10000)).toFixed(2);
        let msg=""
        if(bmi<18.6) msg=`Under Weight`
        else if(bmi<24.9) msg='Normal Range'
        else msg='Overweight'
        result.innerHTML=`<span>${bmi}</span><span>,you are in ${msg} category</span>`
    }

})