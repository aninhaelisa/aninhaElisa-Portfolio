const mascote = document.querySelector(".mascote");
const mascoteImagem = document.querySelector(".mascote-personagem img");
const mascoteBalao = document.querySelector(".mascote-balao");
const mascoteFala = document.querySelector(".mascote-fala");


const expressoes = [
    {
        imagem: "../src/mascote/falando.gif",
        falas: [
            "Oi :D",
            "Bem-vindo ao meu cantinho!",
            "Você chegou até aqui :)",
            "Hmmmm...",
            "Que bom você por aqui :D"
        ]
    },

    {
        imagem: "../src/mascote/feliz.gif",
        falas: [
            "Ctrl + S e fé",
            "Que bom que você veio!",
            "Estou feliz :D",
            "if (você.gostou) { felicidade++; }",
            "Isso não é um bug, é uma feature"
        ]
    },

    {
        imagem: "../src/mascote/confuso.gif",
        falas: [
            "isso não estava no escopo...",
            "Processando...",
            "quem deixou um bug entrar?",
            "Era melhor ter feito um backup",
            "POR QUE TEM 37 DIVS?"
        ]
    },

    {
        imagem: "../src/mascote/assustado.gif",
        falas: [
            "NullPointerException jumpscare!!!",
            "Unexpected error detected...",
            "WARNING: código suspeito detectado",
            "Segmentation fault",
            "ERROR: deu ruim"
        ]
    },

    {
        imagem: "../src/mascote/sad.gif",
        falas: [
            "Esqueci de salvar :(",
            "Só mais um bug...",
            "Só descansando um pouquinho...",
            "O código venceu",
            "Meu código compilou. Eu não."
        ]
    },
    {
        imagem: "../src/mascote/morto.gif", 
        falas: [
            "404: mascote não encontrado...",
            "git push --force",
            "Stack Overflow não conseguiu me salvar...",
            "Tentando reiniciar..."
        ]
    },
    {
        imagem: "../src/mascote/dormi.gif",
        falas: [
            "O BUG SUMIU!!! ヽ(>▽<)ﾉ",
            "NÃO ACREDITO QUE FUNCIONOU!!",
            "MAIS UM BUG DERROTADO!!! >:D",
            "ACHEI O BUG!"
        ]
    }
];


function escolherAleatorio(lista) {

    const indice = Math.floor(
        Math.random() * lista.length
    );

    return lista[indice];
}


function mostrarFala() {

    const expressao = escolherAleatorio(expressoes);
    const fala = escolherAleatorio(expressao.falas);

    mascoteImagem.src = expressao.imagem;
    mascoteFala.textContent = fala;

    mascoteBalao.classList.add("visivel");

    setTimeout(() => {

        mascoteBalao.classList.remove("visivel");

    }, 5000);
}


/* Primeira fala */

setTimeout(() => {

    mostrarFala();

}, 2500);


/* Fala novamente em intervalos aleatórios */

function programarProximaFala() {

    const tempo = Math.floor(
        Math.random() * (15000 - 7000) + 7000
    );

    setTimeout(() => {

        mostrarFala();

        programarProximaFala();

    }, tempo);
}


programarProximaFala();

