
const botaoTema = document.getElementById("botaoTema");
const body = document.querySelector("body");
const imgBotaoTema = document.querySelector(".imagemBotao");

botaoTema.addEventListener("click", () =>{
    const verificarTema = body.classList.contains("darkmode"); 

    body.classList.toggle("darkmode");
    if(verificarTema){
        imgBotaoTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        imgBotaoTema.setAttribute("src", "./src/imagens/moon.png");
    }
})