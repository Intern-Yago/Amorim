let count = 1
document.getElementById("radio1").checked= true

function reiniciarIntervalo(){
    intervalo = setInterval(function(){
        nextImage()
    }, 4000)
}

var intervalo = setInterval(function(){
    nextImage()
}, 4000)

function nextImage(){
    count++
    if(count>5){
        count=1
    }
    document.getElementById("radio"+count).checked = true
}

function limparIntervalo(number){
    count = number
    clearInterval(intervalo)
    reiniciarIntervalo()
}

document.getElementById("mbtn1").addEventListener('click',()=>limparIntervalo(1))
document.getElementById("mbtn2").addEventListener('click',()=>limparIntervalo(2))
document.getElementById("mbtn3").addEventListener('click',()=>limparIntervalo(3))
document.getElementById("mbtn4").addEventListener('click',()=>limparIntervalo(4))
document.getElementById("mbtn5").addEventListener('click',()=>limparIntervalo(5))