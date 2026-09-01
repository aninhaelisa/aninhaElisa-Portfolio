const mascote = document.querySelector(".mascote");
const mascoteImagem = document.querySelector(".mascote-personagem img");
const mascoteBalao = document.querySelector(".mascote-balao");
const mascoteFala = document.querySelector(".mascote-fala");


const expressoes = [
    {
        imagem: "../src/mascote/falando.gif",
        falas: [
            "System.out.print(''HELLO WORLD'');",
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
            "Esqueci de salvar...",
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
        imagem: "../src/mascote/empolgado.gif",
        falas: [
            "O BUG SUMIU!!! ヽ(>▽<)ﾉ",
            "NÃO ACREDITO QUE FUNCIONOU!!",
            "MAIS UM BUG DERROTADO!!! >:D",
            "ACHEI O BUG!"
        ]
    },
    {
        imagem: "../src/mascote/escrevendo.gif",
        falas: [
            "Anotando uma ideia... ✎",
            "Escrevendo o código... no papel",
            "Documentação é importante! :D",
            "Escrevendo uma solução brilhante... talvez"
        ]
    },
    {
        imagem: "../src/mascote/procurar.gif",
        falas: [
            "Onde você está o bug?",
            "Analisando o código...",
            "Eu vou encontrar esse bug",
            "Onde foi parar esse ponto e vírgula?"
        ]
    },
    {
        imagem: "../src/mascote/tchau.gif",
        falas: [
            "Hello World! ",
            "Um commit de boas-vindas!",
            "Aceno.exe iniciado com sucesso!",
            "pspsps..."
        ]
    },
    {
        imagem: "../src/mascote/sono.gif",
        falas: [
            "Zzzzz...",
            "Meu cérebro deu timeout",
            "Sleep();",
            "while(true) { dormir(); }"
        ]
    },
    {
        imagem: "../src/mascote/cantando.gif",
        falas: [
            "Eu inventei essa música agora",
            "Não interrompa o show",
            "♪ Não tem bug quando eu canto ♪",
            "♪ Meu código tem ritmo ♪"
        ]
    },
    {
        imagem: "../src/mascote/dormi.gif",
        falas: [
            "Erro 503: energia temporariamente indisponível",
            "RAM: ocupada com sono",
            "Energia: 1%",
            "Sistema operacional: boa noite"
        ]
    }

];

let filaFalas = [];


function criarFilaFalas() {

    filaFalas = [];

    expressoes.forEach(expressao => {

        expressao.falas.forEach(fala => {

            filaFalas.push({
                imagem: expressao.imagem,
                fala: fala
            });

        });

    });


    // Embaralha a fila
    for (let i = filaFalas.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [filaFalas[i], filaFalas[j]] =
            [filaFalas[j], filaFalas[i]];

    }
}


criarFilaFalas();

function mostrarFala() {

    if (filaFalas.length === 0) {

        criarFilaFalas();

    }

    const proxima = filaFalas.pop();


    mascoteImagem.src = proxima.imagem;

    mascoteFala.textContent = proxima.fala;

    mascoteBalao.classList.add("visivel");


    setTimeout(() => {

        mascoteBalao.classList.remove("visivel");

    }, 5000);
}

setTimeout(() => {

    mostrarFala();

}, 4000);

function programarProximaFala() {

    const tempo = Math.floor(
        Math.random() * (20000 - 10000) + 10000
    );


    setTimeout(() => {

        mostrarFala();

        programarProximaFala();

    }, tempo);
}


programarProximaFala();

