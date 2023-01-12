
let icon = document.querySelector('.bx-menu')
let menu = document.querySelector('.main')
let header=document.querySelector('.navbar')

icon.addEventListener('click',function () {
    menu.classList.toggle('mainShow')
    
})
icon.addEventListener('click',function()
{
    icon.classList.toggle('bxs-x-circle')
})


window.addEventListener("scroll",function(){
    header.classList.toggle("scrollnav",window.scrollY>0)
})
console.log(header);