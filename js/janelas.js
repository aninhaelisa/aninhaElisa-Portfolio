const dadosJanelas = {
    pastaContato: {
        titulo: "Contato",
        conteudo: `
        <div class="janela-icons">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=elisaana.2019.2006@email.com"><img src="../src/icones/email.png" alt="Imagem de Contato"><p>email</p></a>
            <a href="https://github.com/aninhaelisa"><img src="../src/icones/github.png" alt="Imagem de Contato"><p>github</p></a>
            <a href="https://www.linkedin.com/in/ana-elisa-00477a3a8/"><img src="../src/icones/link.png" alt="Imagem de Contato"><p>linkedin</p></a>
            <a href="https://www.instagram.com/elisa_aninh/"><img src="../src/icones/insta.png" alt="Imagem de Contato"><p>insta</p></a>
       
            </div>    
        `,
        largura: "350px",
        altura: "250px"
    },
    
};

let zIndexAtual = 1000; 
let janelasAbertas = []; 

document.querySelectorAll('.pasta').forEach(botao => {
    botao.addEventListener('click', (e) => {
        e.preventDefault(); 
        const idJanela = botao.getAttribute('data-janela');
        criarJanela(idJanela);
    });
});

function criarJanela(id) {
    if (document.getElementById(`janela-${id}`)) {
        const janelaExistente = document.getElementById(`janela-${id}`);
        focarECentralizarJanela(janelaExistente);
        return;
    }

    const info = dadosJanelas[id];
    if (!info) return;

    if (janelasAbertas.length >= 3) {
        const idParaFechar = janelasAbertas.shift();
        fecharJanelaCompleto(idParaFechar);
    }

    janelasAbertas.push(id);

    const novaJanela = document.createElement('div');
    novaJanela.classList.add('janela');
    novaJanela.id = `janela-${id}`;
    novaJanela.style.width = info.largura;
    novaJanela.style.height = info.altura;
    novaJanela.style.zIndex = ++zIndexAtual;

    novaJanela.innerHTML = `
        <div class="janela-barra">
            <span>${info.titulo}</span>
            <button class="btn-fechar">X</button>
        </div>
        <div class="janela-conteudo">
            ${info.conteudo}
        </div>
    `;

    document.body.appendChild(novaJanela);

    focarECentralizarJanela(novaJanela);
    const containerAbas = document.getElementById('containerAbas');
    if (containerAbas) {
        const novaAba = document.createElement('button');
        novaAba.classList.add('aba-item');
        novaAba.id = `aba-${id}`;
        novaAba.textContent = info.titulo;
        novaAba.addEventListener('click', () => {
            focarECentralizarJanela(novaJanela);
        });
        
        containerAbas.appendChild(novaAba);
    }
    novaJanela.querySelector('.btn-fechar').addEventListener('click', () => {
        janelasAbertas = janelasAbertas.filter(item => item !== id);
        fecharJanelaCompleto(id);
    });
    novaJanela.addEventListener('mousedown', () => focarJanela(novaJanela));
    novaJanela.addEventListener('touchstart', () => focarJanela(novaJanela));
    configurarArrasto(novaJanela, novaJanela.querySelector('.janela-barra'));
}

function focarECentralizarJanela(janela) {
    focarJanela(janela);

    const larguraTela = window.innerWidth;
    const alturaTela = window.innerHeight;

    const larguraJanela = janela.offsetWidth || parseInt(janela.style.width);
    const alturaJanela = janela.offsetHeight || parseInt(janela.style.height);

    janela.style.left = `${(larguraTela - larguraJanela) / 2}px`;
    janela.style.top = `${(alturaTela - alturaJanela) / 2}px`;
}
function focarJanela(janela) {
    zIndexAtual++;
    janela.style.zIndex = zIndexAtual;
    document.querySelectorAll('.aba-item').forEach(aba => aba.classList.remove('ativa'));   
    const idOriginal = janela.id.replace('janela-', '');
    const abaCorrespondente = document.getElementById(`aba-${idOriginal}`);
    if (abaCorrespondente) {
        abaCorrespondente.classList.add('ativa');
    }
}

function fecharJanelaCompleto(id) {
    const janela = document.getElementById(`janela-${id}`);
    const aba = document.getElementById(`aba-${id}`);
    if (janela) janela.remove();
    if (aba) aba.remove();
}

function configurarArrasto(janela, barra) {
    let posInicialX = 0, posInicialY = 0, posAtualX = 0, posAtualY = 0;

    barra.addEventListener('mousedown', iniciarArrasto);
    barra.addEventListener('touchstart', iniciarArrasto, { passive: false });

    function iniciarArrasto(e) {
        if (e.target.classList.contains('btn-fechar')) return;
        e.preventDefault();
        const clienteX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
        const clienteY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
        posInicialX = clienteX;
        posInicialY = clienteY;
        document.addEventListener('mousemove', arrastando);
        document.addEventListener('touchmove', arrastando, { passive: false });
        document.addEventListener('mouseup', pararArrasto);
        document.addEventListener('touchend', pararArrasto);
    }

    function arrastando(e) {
        const clienteX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
        const clienteY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
        posAtualX = posInicialX - clienteX;
        posAtualY = posInicialY - clienteY;
        posInicialX = clienteX;
        posInicialY = clienteY;
        let proximoTop = janela.offsetTop - posAtualY;
        let proximoLeft = janela.offsetLeft - posAtualX;
        const larguraTela = window.innerWidth;
        const alturaTela = window.innerHeight;
        const larguraJanela = janela.offsetWidth;
        const alturaJanela = janela.offsetHeight;

        if (proximoLeft < 0) proximoLeft = 0;
        if (proximoLeft + larguraJanela > larguraTela) proximoLeft = larguraTela - larguraJanela;
        if (proximoTop < 0) proximoTop = 0;
        if (proximoTop + alturaJanela > alturaTela) proximoTop = alturaTela - alturaJanela;
        janela.style.top = proximoTop + "px";
        janela.style.left = proximoLeft + "px";
    }

    function pararArrasto() {
        document.removeEventListener('mousemove', arrastando);
        document.removeEventListener('touchmove', arrastando);
        document.removeEventListener('mouseup', pararArrasto);
        document.removeEventListener('touchend', pararArrasto);
    }
}
