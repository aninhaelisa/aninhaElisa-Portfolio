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
    habilidades: {
        titulo: "Minhas Habilidades",
        conteudo: `
            <div class="janela-habilidades">
    
                <div class="habilidades-cabecalho">
                    <img src="../src/icones/computador.png" alt="Computador">
                    <div>
                        <strong>MINHAS HABILIDADES TÉCNICAS</strong>
                        <span>Conhecimentos e ferramentas</span>
                    </div>
                </div>
                <div class="habilidades-lista">
                    <div class="habilidade">
                        <span>☑</span>
                        <span>Java</span>
                    </div>
                    <div class="habilidade">
                        <span>☑</span>
                        <span>JDBC</span>
                    </div>
                    <div class="habilidade">
                        <span>☑</span>
                        <span>Spring Boot</span>
                    </div>
                    <div class="habilidade">
                        <span>☑</span>
                        <span>HTML</span>
                    </div>
                    <div class="habilidade">
                        <span>☑</span>
                        <span>CSS</span>
                    </div>
                    <div class="habilidade">
                        <span>☑</span>
                        <span>JavaScript</span>
                    </div>
                    <div class="habilidade">
                        <span>☑</span>
                        <span>MySQL</span>
                    </div>
                    <div class="habilidade">
                        <span>☑</span>
                        <span>PostgreSQL</span>
                    </div>
                    <div class="habilidade">
                        <span>☑</span>
                        <span>Git</span>
                    </div>
                    <div class="habilidade">
                        <span>☑</span>
                        <span>Linux</span>
                    </div>
                    <div class="habilidade">
                        <span>☑</span>
                        <span>Figma</span>
                    </div>
                    <div class="habilidade">
                        <span>☑</span>
                        <span>Canva</span>
                    </div>
                    <div class="habilidade">
                        <span>☑</span>
                        <span>Trello</span>
                    </div>
                </div>
                <div class="habilidades-status">
                    13 habilidades encontradas
                </div>
            </div>
        `,
        largura: "350px",
        altura: "300px"
    },
    musicas: {
        titulo: "Music Player",
        conteudo: `
            <div class="player-retro">
                <div class="player-display">
                    <div class="player-capa">
                        <img id="player-capa"
                             src="../src/icones/music.gif"
                             alt="Capa da música">
                    </div>
                    <div class="player-info">
                        <strong id="player-titulo">Lofi Midnight Club</strong>
                        <span id="player-artista">alex-morgan</span>
                        <div class="player-progresso">
                            <div class="player-progresso-barra"></div>
                        </div>
                        <div class="player-tempo">
                            <span id="tempo-atual">00:00</span>
                            <span id="tempo-total">00:00</span>
                        </div>
                    </div>
                </div>
                <div class="player-controles">
                 <button id="btn-anterior" title="Anterior">
                        ◀◀
                    </button>
                    <button id="btn-play" title="Reproduzir">
                        ▶
                    </button>
                    <button id="btn-proximo" title="Próxima">
                        ▶▶
                    </button>
    
                </div>
    
                <div class="player-volume">
                    <span>VOL</span>
                    <input
                        type="range"
                        id="volume"
                        min="0"
                        max="1"
                        step="0.01"
                        value="0.5"
                    >
    
                </div>
    
                <div class="player-playlist">
                    <div class="playlist-titulo">
                        PLAYLIST
                    </div>
                    <button class="musica-item ativa" data-musica="0">
                        <span>01</span>
                        <span>Algorithm - Sky Gienger</span>
                    </button>
                    <button class="musica-item" data-musica="1">
                        <span>02</span>
                        <span>Cheat Codes - Cinco</span>
                    </button>
                    <button class="musica-item" data-musica="2">
                        <span>03</span>
                        <span>Childhood Afternoons - Lloom</span>
                    </button>
                    <button class="musica-item" data-musica="3">
                        <span>04</span>
                        <span>Dreamin - Danijel Zambo</span>
                    </button>
                </div>
                <audio id="audio-player"></audio>
    
            </div>
        `,
        largura: "380px",
        altura: "390px"
    },
    nota: {
        titulo: "Bloco de Notas",
        conteudo: `
            <div class="bloco-notas">
                <div class="nota-menu">
                    <button class="nota-salvar" title="Salvar">
                        <img
                            src="../src/icones/salvar.png"
                            alt="Salvar"
                        >
                    </button>  
                    <span class="nota-separador"></span>
    
                    <span class="nota-titulo-menu">
                        Arquivo
                    </span>
                </div>
                <div
                    class="nota-editor"
                    contenteditable="true"
                    spellcheck="false"
                ></div>
             <div class="nota-status">
                    <span class="nota-contador">
                        0 caracteres
                    </span>
                    <span>
                        Bloco de Notas
                    </span>
                </div>
    
            </div>
        `,
        largura: "500px",
        altura: "400px"
    },
    camera: {
        titulo: "Câmera",
        conteudo: `
            <div class="camera-retro">
                <div class="camera-tela">
                    <video
                        class="camera-video"
                        autoplay
                        playsinline ></video>
                    <canvas
                        class="camera-canvas"
                        hidden
                    ></canvas>
                    <img
                        class="camera-foto"
                        alt="Foto tirada"
                        hidden >
    
                    <div class="camera-status">
                        CAMERA READY
                    </div>
                </div>
    
    
                <div class="camera-controles">
    
                    <button
                        class="camera-tirar"
                        title="Tirar foto"
                    >
                        ●
                    </button>
    
                    <button
                        class="camera-nova"
                        title="Nova foto"
                    >
                        ↻
                    </button>
    
                    <button
                        class="camera-salvar"
                        title="Salvar foto"
                        disabled
                    >
                        <img
                            src="../src/icones/salvar.png"
                            alt="Salvar"
                        >
                    </button>
    
                </div>
    
    
                <div class="camera-info">
                    <span class="camera-contador">
                        0 fotos
                    </span>
    
                    <span>
                        DIGITAL CAMERA
                    </span>
                </div>
    
            </div>
        `,
        largura: "420px",
        altura: "390px"
    },
    blog: {
        titulo: "ANINHAELISA BLOG",
        conteudo: `
            <div class="navegador-retro">
    
                <div class="browser-abas">
                    <div class="browser-aba ativa">
                        <span>🌐</span>
                        ANINHAELISA BLOG
                    </div>
    
                    <button class="browser-nova-aba">+</button>
                </div>
    
                <div class="browser-barra">
    
                    <button class="browser-botao" title="Voltar">
                        ◀
                    </button>
    
                    <button class="browser-botao" title="Avançar">
                        ▶
                    </button>
    
                    <button
                        class="browser-botao"
                        title="Atualizar"
                        onclick="document.querySelector('.browser-pagina').contentWindow.location.reload()">
                        ↻
                    </button>
    
                    <div class="browser-endereco">
                        <span>🌐</span>
                        http://aninhaelisa.local/blog.html
                    </div>
    
                </div>
    
                <iframe
                    class="browser-pagina"
                    src="blog.html"
                    title="ANINHAELISA BLOG">
                </iframe>
    
                <div class="browser-status">
                    <span>Documento concluído</span>
                    <span>🌐 Internet</span>
                </div>
    
            </div>
        `,
        largura: "420px",
        altura: "390px"
    }

};

const playlist = [
    {
        titulo: "Algorithm",
        artista: "Sky Gienger",
        arquivo: "../src/musicas/algorithm-sky-gienger-main-version-01-28-12896.mp3"
    },
    {
        titulo: "Cheat Codes",
        artista: "Cinco",
        arquivo: "../src/musicas/cheat-codes-cinco-main-version-01-56-2929.mp3"
    },
    {
        titulo: "Childhood Afternoons",
        artista: "Lloom",
        arquivo: "../src/musicas/childhood-afternoons-lloom-main-version-25583-03-11.mp3"
    },
    {
        titulo: "Dreamin",
        artista: "Danijel Zambo",
        arquivo: "../src/musicas/dreamin-danijel-zambo-main-version-1387-01-48.mp3"
    }
];

let musicaAtual = 0;
let zIndexAtual = 1000;
let janelasAbertas = [];

document.querySelectorAll('.pasta').forEach(botao => {
    botao.addEventListener('click', (e) => {
        e.preventDefault();
        const idJanela = botao.getAttribute('data-janela');
        criarJanela(idJanela);
    });
});

document.querySelectorAll('.icones-janelas').forEach(botao => {
    botao.addEventListener('click', (e) => {
        e.preventDefault();
        const idJanela = botao.getAttribute('data-janela');
        criarJanela(idJanela);
    });
});
console.log(`
    ╔══════════════════════════════════════╗
    ║                                      ║
    ║          ★ ANINHAELISA ★            ║
    ║                                      ║
    ║       WELCOME TO MY SOURCE CODE      ║
    ║                                      ║
    ║       Have fun exploring :)          ║
    ║                                      ║
    ╚══════════════════════════════════════╝
    `);

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
    <div class="janela-redimensionar"></div>
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
    configurarRedimensionamento(novaJanela);
    if (id === "musicas") {
        iniciarPlayer();
    }
    if (id === "nota") {
        iniciarBlocoNotas();
    }
    if (id === "camera") {
        iniciarCamera();
    }
}

console.log(
   `
> SYSTEM STATUS: ONLINE
> SOURCE CODE: ACCESSIBLE
> USER: CURIOUS
> SECRET: FOUND
`
);

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

function configurarRedimensionamento(janela) {

    const alca = janela.querySelector('.janela-redimensionar');

    let inicioX = 0;
    let inicioY = 0;
    let larguraInicial = 0;
    let alturaInicial = 0;

    alca.addEventListener('mousedown', iniciarResize);
    alca.addEventListener('touchstart', iniciarResize, { passive: false });

    function iniciarResize(e) {

        e.preventDefault();
        e.stopPropagation();

        const clienteX = e.type === 'touchstart'
            ? e.touches[0].clientX
            : e.clientX;

        const clienteY = e.type === 'touchstart'
            ? e.touches[0].clientY
            : e.clientY;

        inicioX = clienteX;
        inicioY = clienteY;

        larguraInicial = janela.offsetWidth;
        alturaInicial = janela.offsetHeight;

        document.addEventListener('mousemove', redimensionando);
        document.addEventListener('touchmove', redimensionando, {
            passive: false
        });

        document.addEventListener('mouseup', pararResize);
        document.addEventListener('touchend', pararResize);
    }


    function redimensionando(e) {

        e.preventDefault();

        const clienteX = e.type === 'touchmove'
            ? e.touches[0].clientX
            : e.clientX;

        const clienteY = e.type === 'touchmove'
            ? e.touches[0].clientY
            : e.clientY;

        const diferencaX = clienteX - inicioX;
        const diferencaY = clienteY - inicioY;

        let novaLargura = larguraInicial + diferencaX;
        let novaAltura = alturaInicial + diferencaY;

        const larguraMinima = 200;
        const alturaMinima = 120;

        if (novaLargura < larguraMinima) {
            novaLargura = larguraMinima;
        }

        if (novaAltura < alturaMinima) {
            novaAltura = alturaMinima;
        }

        if (janela.offsetLeft + novaLargura > window.innerWidth) {
            novaLargura = window.innerWidth - janela.offsetLeft;
        }

        if (janela.offsetTop + novaAltura > window.innerHeight) {
            novaAltura = window.innerHeight - janela.offsetTop;
        }

        janela.style.width = novaLargura + 'px';
        janela.style.height = novaAltura + 'px';
    }

    function pararResize() {

        document.removeEventListener('mousemove', redimensionando);
        document.removeEventListener('touchmove', redimensionando);
        document.removeEventListener('mouseup', pararResize);
        document.removeEventListener('touchend', pararResize);
    }
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

function iniciarPlayer() {

    const audio = document.getElementById("audio-player");

    if (!audio) return;

    const btnPlay = document.getElementById("btn-play");
    const btnAnterior = document.getElementById("btn-anterior");
    const btnProximo = document.getElementById("btn-proximo");
    const titulo = document.getElementById("player-titulo");
    const artista = document.getElementById("player-artista");
    const progresso = document.querySelector(
        ".player-progresso-barra"
    );

    const tempoAtual = document.getElementById("tempo-atual");
    const tempoTotal = document.getElementById("tempo-total");
    const volume = document.getElementById("volume");
    const itens = document.querySelectorAll(".musica-item");
    function carregarMusica(indice, tocar = false) {

        musicaAtual = indice;
        const musica = playlist[musicaAtual];
        audio.src = musica.arquivo;
        titulo.textContent = musica.titulo;
        artista.textContent = musica.artista;
        progresso.style.width = "0%";
        itens.forEach(item => {
            item.classList.remove("ativa");
        });

        if (itens[musicaAtual]) {
            itens[musicaAtual].classList.add("ativa");
        }

        if (tocar) {
            audio.play();
            btnPlay.textContent = "❚❚";
        } else {
            btnPlay.textContent = "▶";
        }
    }


    btnPlay.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            btnPlay.textContent = "❚❚";
        } else {
            audio.pause();
            btnPlay.textContent = "▶";
        }

    });


    btnAnterior.addEventListener("click", () => {
        musicaAtual--;
        if (musicaAtual < 0) {
            musicaAtual = playlist.length - 1;
        }
        carregarMusica(musicaAtual, true);
    });


    btnProximo.addEventListener("click", () => {
        musicaAtual++;
        if (musicaAtual >= playlist.length) {
            musicaAtual = 0;
        } carregarMusica(musicaAtual, true);

    });


    itens.forEach(item => {
        item.addEventListener("click", () => {
            const indice = Number(
                item.dataset.musica
            );
            carregarMusica(indice, true);
        });
    });


    audio.addEventListener("timeupdate", () => {
        if (!audio.duration) return;
        const porcentagem =
            (audio.currentTime / audio.duration) * 100;
        progresso.style.width =
            porcentagem + "%";
        tempoAtual.textContent =
            formatarTempo(audio.currentTime);
    });


    audio.addEventListener("loadedmetadata", () => {
        tempoTotal.textContent =
            formatarTempo(audio.duration);
    });


    audio.addEventListener("ended", () => {
        musicaAtual++;
        if (musicaAtual >= playlist.length) {
            musicaAtual = 0;
        }
        carregarMusica(musicaAtual, true);
    });

    volume.addEventListener("input", () => {
        audio.volume = volume.value;
    });
    carregarMusica(0);

    function formatarTempo(segundos) {
        if (!segundos || isNaN(segundos)) {
            return "00:00";
        }
        const minutos =
            Math.floor(segundos / 60);
        const segundosRestantes =
            Math.floor(segundos % 60);
        return (
            String(minutos).padStart(2, "0") +
            ":" +
            String(segundosRestantes).padStart(2, "0")
        );
    }
}

function iniciarBlocoNotas() {
    const editor = document.querySelector(".nota-editor");
    if (!editor) return;
    const salvar = document.querySelector(".nota-salvar");
    const contador = document.querySelector(".nota-contador");
    function atualizarContador() {
        const texto = editor.innerText || "";
        contador.textContent =
            `${texto.length} caracteres`;
    }

    editor.addEventListener(
        "input",
        atualizarContador
    );
    salvar.addEventListener(
        "click",
        salvarNota
    );
    function salvarNota() {
        const conteudo = editor.innerText;
        const blob = new Blob(
            [conteudo],
            {
                type: "text/plain;charset=utf-8"
            }
        );
        const url =
            URL.createObjectURL(blob);
        const link =
            document.createElement("a");
        link.href = url;
        link.download =
            "minha-nota.txt";
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
    }


    atualizarContador();
}

function iniciarCamera() {
    const video = document.querySelector(".camera-video");
    const canvas = document.querySelector(".camera-canvas");
    const foto = document.querySelector(".camera-foto");
    const tirar = document.querySelector(".camera-tirar");
    const nova = document.querySelector(".camera-nova");
    const salvar = document.querySelector(".camera-salvar");
    const status = document.querySelector(".camera-status");
    const contador = document.querySelector(".camera-contador");

    let stream = null;
    let fotoAtual = null;
    let quantidadeFotos = 0;
    async function abrirCamera() {

        try {
            stream =
                await navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: false
                });
            video.srcObject = stream;
            status.textContent =
                "CAMERA READY";

        } catch (erro) {
            console.error(erro);
            status.textContent =
                "CAMERA ERROR";
            alert(
                "Não foi possível acessar a câmera. " +
                "Verifique se o navegador possui permissão."
            );
        }
    }

    tirar.addEventListener("click", () => {
        if (!stream) return;
        const largura = video.videoWidth;
        const altura = video.videoHeight;
        if (!largura || !altura) {
            alert("A câmera ainda não está pronta. Tente novamente.");
            return;
        }
        canvas.width = largura;
        canvas.height = altura;
        const contexto = canvas.getContext("2d");
        contexto.save();
        contexto.translate(largura, 0);
        contexto.scale(-1, 1);
        contexto.drawImage(video, 0, 0, largura, altura);
        contexto.restore();
        fotoAtual = canvas.toDataURL("image/png");
        foto.src = fotoAtual;
        video.style.display = "none";
        foto.style.display = "block";
        salvar.disabled = false;
        quantidadeFotos++;
        contador.textContent =
            `${quantidadeFotos} foto${quantidadeFotos !== 1 ? "s" : ""}`;

        status.textContent = "PHOTO CAPTURED";
    });

    nova.addEventListener("click", () => {
        foto.src = "";
        fotoAtual = null;
        foto.style.display = "none";
        video.style.display = "block";
        salvar.disabled = true;
        status.textContent = "CAMERA READY";
    });

    salvar.addEventListener("click", () => {
        if (!fotoAtual) return;
        const link = document.createElement("a");
        link.href = fotoAtual;
        link.download = `foto-camera-${Date.now()}.png`;
        document.body.appendChild(link);
        link.click();
        link.remove();
        status.textContent =
            "PHOTO SAVED";
    });

    abrirCamera();
}