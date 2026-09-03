const objetosReciclagem = [
    // PLÁSTICO
    { emoji: "🥤", tipo: "plastico", nome: "copo plástico" },
    { emoji: "🧴", tipo: "plastico", nome: "garrafa plástica" },
    { emoji: "🛍️", tipo: "plastico", nome: "sacola plástica" },
    { emoji: "🪥", tipo: "plastico", nome: "escova de dentes" },
    { emoji: "🧃", tipo: "plastico", nome: "embalagem de suco" },
    { emoji: "🪣", tipo: "plastico", nome: "balde plástico" },
    { emoji: "🥡", tipo: "plastico", nome: "embalagem plástica" },

    // PAPEL
    { emoji: "📄", tipo: "papel", nome: "folha de papel" },
    { emoji: "📰", tipo: "papel", nome: "jornal" },
    { emoji: "📖", tipo: "papel", nome: "livro" },
    { emoji: "📦", tipo: "papel", nome: "caixa de papelão" },
    { emoji: "📜", tipo: "papel", nome: "folha de papel antiga" },
    { emoji: "✉️", tipo: "papel", nome: "envelope" },
    { emoji: "📒", tipo: "papel", nome: "caderno" },
    { emoji: "🧻", tipo: "papel", nome: "papel toalha" },
    { emoji: "🎫", tipo: "papel", nome: "bilhete de papel" },
    { emoji: "🗞️", tipo: "papel", nome: "folheto" },

    // VIDRO
    { emoji: "🍾", tipo: "vidro", nome: "garrafa de vidro" },
    { emoji: "🫙", tipo: "vidro", nome: "pote de vidro" },
    { emoji: "🥂", tipo: "vidro", nome: "taça de vidro" },
    { emoji: "🍷", tipo: "vidro", nome: "copo de vidro" },
    { emoji: "🧪", tipo: "vidro", nome: "frasco de vidro" },
    { emoji: "🫗", tipo: "garrafa de vidro" },
    { emoji: "🏺", tipo: "vidro", nome: "vaso de vidro" },
    { emoji: "💡", tipo: "vidro", nome: "lâmpada de vidro" },

    // METAL
    { emoji: "🥫", tipo: "metal", nome: "lata de metal" },
    { emoji: "🔩", tipo: "metal", nome: "parafuso" },
    { emoji: "🔧", tipo: "metal", nome: "chave de metal" },
    { emoji: "🔗", tipo: "metal", nome: "corrente de metal" },
    { emoji: "🥄", tipo: "metal", nome: "colher de metal" },
    { emoji: "🍴", tipo: "metal", nome: "garfo de metal" },
    { emoji: "🔑", tipo: "metal", nome: "chave" },
    { emoji: "⚙️", tipo: "metal", nome: "engrenagem" },
    { emoji: "🧲", tipo: "metal", nome: "ímã" },
    { emoji: "🪛", tipo: "metal", nome: "chave de fenda" }
];

let ecoObjetoAtual = null;
let ecoPontos = 0;

function iniciarLixeira(janela) {
    ecoPontos = 0;
    const pontos = janela.querySelector("#eco-pontos");
    if (pontos) {
        pontos.textContent = "0";
    }
    novoObjetoReciclagem(janela);
}

function novoObjetoReciclagem(janela) {
    ecoObjetoAtual =
        objetosReciclagem[
        Math.floor(Math.random() * objetosReciclagem.length)
        ];
    const objeto = janela.querySelector("#eco-objeto");
    const mensagem = janela.querySelector("#eco-mensagem");
    if (!objeto) return;
    objeto.textContent = ecoObjetoAtual.emoji;
    mensagem.textContent =
        "Onde o " + ecoObjetoAtual.nome + " deve ser descartado?";
}

function reciclar(tipo) {
    const janela = document.getElementById("janela-lixeira");
    if (!janela || !ecoObjetoAtual) return;
    const mensagem = janela.querySelector("#eco-mensagem");
    const pontos = janela.querySelector("#eco-pontos");
    if (tipo === ecoObjetoAtual.tipo) {
        ecoPontos++;
        pontos.textContent = ecoPontos;
        mensagem.textContent =
            "✓ CORRETO! Muito bem!";

        setTimeout(() => {
            if (document.getElementById("janela-lixeira")) {
                novoObjetoReciclagem(janela);
            }
        }, 700);

    } else {
        if (ecoPontos > 0) {
            ecoPontos--;
        }
        pontos.textContent = ecoPontos;
        mensagem.textContent =
            "✗ OPS! Essa não é a lixeira correta.";
    }
}