let li=document.querySelector(" ul li")

function setFun(){
setTimeout(()=>{
li.textContent="Front Student"


},0);

setTimeout(()=>{
    li.textContent="Self Learner"
    
    
    },4000);
    

    setTimeout(()=>{
        li.textContent="Good Worker "
        
        
        },8000)
        
    



}
setFun()
 setInterval( setFun, 12000);
 // for menu
 let iconMenu=document.querySelector('.ico')
 let left=document.querySelector('.left-part')
 let right=document.querySelector('.right-part')
 let icon=document.querySelector('.ico2 i')
 iconMenu.addEventListener("click",function(){

 left.style.width="100%"
 right.style.display="none"
 })
 icon.addEventListener("click",function(){
    left.style.width="0%"
    right.style.width="100%"
 right.style.display="flex"
 })