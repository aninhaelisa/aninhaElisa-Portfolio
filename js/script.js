document.body.style.overflow = 'hidden';
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const menuContexto = document.getElementById('menu-contexto');
const itensDeJanela = ['menu-propriedades', 'menu-configuracoes', 'menu-contato', 'menu-sobre'];

let caixaSelecao = null;
let selecaoAtiva = false;
let startX = 0, startY = 0;

function iniciarDataEHora() {
    now = new Date();
    dayName = new Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado");
    month = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
    dataAtual = dayName[now.getDay()] + ", " + now.getDate() + " " + month[now.getMonth()] + " " + now.getFullYear();
    var data = document.querySelector(".data");
    data.textContent = dataAtual;
    function hora() {
        horaAtual = new Date();
        h = horaAtual.getHours();
        m = horaAtual.getMinutes();
        if (m < 10) {
            m = "0" + m;
        }
        if (h < 10) {
            h = "0" + h;
        }
        document.querySelector(".hora").innerHTML = h + ":" + m;
        setTimeout(hora, 500);
    }
    hora();
}

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

document.addEventListener('mousedown', (e) => {
    if (e.target.closest('.janela') || e.target.closest('footer') || e.target.closest('.pasta')) return;
    e.preventDefault();
    selecaoAtiva = true;
    startX = e.clientX;
    startY = e.clientY;

    if (!caixaSelecao) {
        caixaSelecao = document.createElement('div');
        caixaSelecao.style.position = 'fixed';
        caixaSelecao.style.border = '1px solid #0078d7';
        caixaSelecao.style.backgroundColor = 'rgba(0, 120, 215, 0.3)';
        caixaSelecao.style.pointerEvents = 'none';
        caixaSelecao.style.zIndex = '99999';
        document.body.appendChild(caixaSelecao);
    }

    caixaSelecao.style.left = `${startX}px`;
    caixaSelecao.style.top = `${startY}px`;
    caixaSelecao.style.width = '0px';
    caixaSelecao.style.height = '0px';
    caixaSelecao.style.display = 'block';
});

document.addEventListener('dragstart', (e) => {
    if (selecaoAtiva) e.preventDefault();
});

document.addEventListener('mousemove', (e) => {
    if (!selecaoAtiva || !caixaSelecao) return;
    const currentX = e.clientX;
    const currentY = e.clientY;
    const largura = Math.abs(currentX - startX);
    const altura = Math.abs(currentY - startY);
    caixaSelecao.style.left = `${Math.min(currentX, startX)}px`;
    caixaSelecao.style.top = `${Math.min(currentY, startY)}px`;
    caixaSelecao.style.width = `${largura}px`;
    caixaSelecao.style.height = `${altura}px`;
});

window.addEventListener('mouseup', () => {
    if (!selecaoAtiva) return;
    selecaoAtiva = false;
    if (caixaSelecao) {
        caixaSelecao.style.display = 'none';
    }
});


document.addEventListener('contextmenu', (e) => {
    if (e.target.closest('.janela') || e.target.closest('footer')) return;
    e.preventDefault();
    menuContexto.style.left = `${e.clientX}px`;
    menuContexto.style.top = `${e.clientY}px`;
    menuContexto.style.display = 'block';
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('#menu-contexto')) {
        menuContexto.style.display = 'none';
    }
});

document.getElementById('menu-atualizar').addEventListener('click', () => {
    window.location.reload();
});

document.getElementById('menu-tela-cheia').addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log(`Erro ao ativar tela cheia: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
    menuContexto.style.display = 'none';
});

document.getElementById('menu-copiar-url').addEventListener('click', () => {
    const urlAtual = window.location.href;
    navigator.clipboard.writeText(urlAtual).then(() => {
        const msg = document.createElement('div');
        msg.textContent = 'Copiado!';
        msg.style.position = 'fixed';
        msg.style.top = '50%';
        msg.style.left = '50%';
        msg.style.transform = 'translate(-50%, -50%)';
        msg.style.background = 'rgba(0, 0, 0, 0.8)';
        msg.style.color = '#ffffff';
        msg.style.padding = '10px 20px';
        msg.style.fontFamily = 'sans-serif';
        msg.style.fontSize = '0.9rem';
        msg.style.zIndex = '1000000';
        msg.style.transition = 'opacity 0.3s ease';
        document.body.appendChild(msg);
        setTimeout(() => {
            msg.style.opacity = '0';
            setTimeout(() => msg.remove(), 300);
        }, 1500);

    }).catch(err => {
        console.error('Erro ao copiar URL: ', err);
    });

    menuContexto.style.display = 'none';
});

itensDeJanela.forEach(idBotao => {
    const botao = document.getElementById(idBotao);
    if (botao) {
        botao.addEventListener('click', () => {
            const idJanela = botao.getAttribute('data-janela');

            if (typeof criarJanela === 'function') {
                criarJanela(idJanela);
            } else {
                console.warn(`A função criarJanela não foi encontrada para o ID: ${idJanela}`);
            }

            menuContexto.style.display = 'none';
        });
    }
});

window.onload = iniciarDataEHora;