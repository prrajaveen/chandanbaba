let cal=document.getElementById('cal')
cal.addEventListener('click',chandan)

function chandan(){
    let firstvalue=Number(document.getElementById('first').value)
    let secondvalue=Number(document.getElementById('second').value)
    let result=document.getElementById('result')
    // console.log(typeof(firstvalue))
   
    let check=document.getElementsByClassName('check')
    Array.from(check).forEach(function(element){
        // console.log(element.checked)
        if(element.checked==true){
            if(element.value=='add'){
                let sum=add(firstvalue,secondvalue)
                result.innerHTML=`<h1>the sum of these two number is ${sum}</h1>`
            }else if(element.value=='substract'){
                let sub=substract(firstvalue,secondvalue)
                console.log(sub)
                result.innerHTML=`<h1>the minus of these two number is ${sub}</h1>`
            }else if(element.value=='multiply'){
                let mul=multiply(firstvalue,secondvalue)
                console.log(mul)
                result.innerHTML=`<h1>the product of these two number is ${mul}</h1>`
            }else{
                let de=devide(firstvalue,secondvalue)
                console.log(de)
                result.innerHTML=`<h1>the devide of these two number is ${de}</h1>`
            }
        }
        
    })
}


function add(a,b){
    return a+b;
}

function substract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b
}
function devide(a,b){
    return a/b;
}
