let darkMode =document.getElementById("moon");
darkMode.onclick = function(){
    document.body.classList.toggle("darkMode");
    if(document.body.classList.contains("darkMode")){
        darkMode.classList.toggle('bx-sun')
    }else{
        darkMode.classList.toggle('bx-sun')
    }
}
