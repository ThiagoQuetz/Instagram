let imagem = document.getElementById("troca-imagem")

console.log("To aqui")

function trocaImagem() {
    if (imagem.style.opacity == 0) {
        imagem.style.opacity = 1
    } else {
        imagem.style.opacity = 0
    }

}

setInterval(() => {
    trocaImagem()
}, 3000);