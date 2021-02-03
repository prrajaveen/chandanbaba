let navItem=document.getElementsByTagName("li")
Array.from(navItem).forEach(function(element){
    element.addEventListener("click",()=>{
        console.log(element)
        
        Array.from(navItem).forEach(function(chandan){
            
            if(element.className==chandan.className){
                chandan.classList.remove('active')
            }
            element.classList.add('active')
        })
    })

})




let toggle=document.getElementById('toggle')
let menu=document.getElementById('menu')
let close=document.getElementById('close')
console.log(menu,close)

menu.addEventListener('click',menuscroll)
close.addEventListener('click',closeitem)


function menuscroll(){
 classname=toggle.classList[1]
 if(classname=='hide'){
    toggle.classList.remove('hide')
    toggle.classList.add('show')
 }else{
    toggle.classList.add('hide')
    toggle.classList.remove('show')
 }
}
function closeitem(){
   toggle.classList.add('hide')
   toggle.classList.remove('show')
}

