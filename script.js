



var contagem = 0

var interval;

function somar(){

      let h = document.getElementsByTagName ("h1")[0] 

      h.innerText = "Timer: " + contagem++

}



function iniciar (){

      contagem = 0

      let h = document.getElementsByTagName ("h1")[0]

      h.innerText = "Timer: " + contagem++

      interval = setInterval (somar, 1000)

     
}

function parar (){

      clearInterval (interval)
}

function zerar(){

      let h = document.getElementsByTagName ("h1")[0]
      clearInterval (interval)
      h.innerText = "Timer: " + 0

}
