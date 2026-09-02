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
        largura: "350px",
        altura: "300px"
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
        largura: "350px",
        altura: "300px"
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
        largura: "350px",
        altura: "300px"
    },
    paint: {
        titulo: "Paint",
        conteudo: `
            <div class="paint-retro">
                <div class="paint-menu">
                    <span>Arquivo</span>
                    <span>Editar</span>
                    <span>Exibir</span>
                    <span>Imagem</span>
                    <span>Cores</span>
                    <span>Ajuda</span>
                </div>
                <div class="paint-ferramentas">
                    <button class="paint-ferramenta ativa" data-ferramenta="pincel" title="Pincel">
                        ✎
                    </button>
                    <button class="paint-ferramenta" data-ferramenta="borracha" title="Borracha">
                        ▱
                    </button>
                    <button class="paint-ferramenta" data-ferramenta="limpar" title="Limpar">
                        ✕
                    </button>
                    <div class="paint-separador"></div>
                    <label class="paint-tamanho">
                        Tamanho:
                        <select class="paint-tamanho-select">
                            <option value="2">2px</option>
                            <option value="4" selected>4px</option>
                            <option value="8">8px</option>
                            <option value="12">12px</option>
                            <option value="20">20px</option>
                        </select>
                    </label>
                </div>
                <div class="paint-area">
                    <canvas class="paint-canvas"></canvas>
                </div>
                <div class="paint-cores">   
                    <div class="paint-cor-atual"></div>
                  <button class="paint-cor" data-cor="#000000" style="background:#000000"></button>
                    <button class="paint-cor" data-cor="#ffffff" style="background:#ffffff"></button>
                   <button class="paint-cor" data-cor="#808080" style="background:#808080"></button>
                    <button class="paint-cor" data-cor="#c0c0c0" style="background:#c0c0c0"></button>  
                    <button class="paint-cor" data-cor="#800000" style="background:#800000"></button>
                    <button class="paint-cor" data-cor="#ff0000" style="background:#ff0000"></button>
                    <button class="paint-cor" data-cor="#808000" style="background:#808000"></button>
                    <button class="paint-cor" data-cor="#ffff00" style="background:#ffff00"></button>
                    <button class="paint-cor" data-cor="#008000" style="background:#008000"></button>
                    <button class="paint-cor" data-cor="#00ff00" style="background:#00ff00"></button>
                    <button class="paint-cor" data-cor="#008080" style="background:#008080"></button>
                    <button class="paint-cor" data-cor="#00ffff" style="background:#00ffff"></button>
                    <button class="paint-cor" data-cor="#000080" style="background:#000080"></button>
                    <button class="paint-cor" data-cor="#0000ff" style="background:#0000ff"></button>
                    <button class="paint-cor" data-cor="#800080" style="background:#800080"></button>
                    <button class="paint-cor" data-cor="#ff00ff" style="background:#ff00ff"></button>
                    <button class="paint-cor" data-cor="#ffa500" style="background:#ffa500"></button>
                    <button class="paint-cor" data-cor="#a52a2a" style="background:#a52a2a"></button>
                    <button class="paint-cor" data-cor="#ffc0cb" style="background:#ffc0cb"></button>
                    <button class="paint-cor" data-cor="#0080ff" style="background:#0080ff"></button> 
                  <label class="paint-cor-personalizada">
                        +
                        <input type="color" class="paint-color-picker" value="#000000">
                    </label>  
                </div>
                <div class="paint-status">
                    <span class="paint-status-text">Pronto</span>
                    <span class="paint-coordenadas">0, 0</span>
                </div>
                <div class="paint-salvar-area">
                    <button class="paint-salvar">
                        💾 Salvar
                    </button>
                </div>
            </div>
        `,
        largura: "350px",
        altura: "300px"
    },
    propriedades: {
        titulo: "Propriedades do Sistema",
        conteudo: `
            <div class="propriedades-retro">
    
                <div class="prop-cabecalho">
                    <div class="prop-logo">▣</div>
    
                    <div>
                        <div class="prop-titulo">
                            Propriedades do Sistema
                        </div>
    
                        <div class="prop-subtitulo">
                            ANINHAELISA SYSTEM
                        </div>
                    </div>
                </div>
    
                <div class="prop-linha"></div>
    
                <div class="prop-conteudo">
    
                    <div class="prop-secao">
                        <strong>Informações do computador</strong>
    
                        <div class="prop-item">
                            <span>Nome da máquina:</span>
                            <b>ANINHA-PC</b>
                        </div>
    
                        <div class="prop-item">
                            <span>Usuário:</span>
                            <b>VISITANTE</b>
                        </div>
    
                        <div class="prop-item">
                            <span>Sistema:</span>
                            <b>AninhaOS 98 SE</b>
                        </div>
    
                        <div class="prop-item">
                            <span>Processador:</span>
                            <b>Pentium III 800 MHz</b>
                        </div>
    
                        <div class="prop-item">
                            <span>Memória:</span>
                            <b>128 MB RAM</b>
                        </div>
                    </div>
    
                    <div class="prop-secao">
                        <strong>Informações de rede</strong>
    
                        <div class="prop-item">
                            <span>Endereço IP:</span>
                            <b>192.168.0.42</b>
                        </div>
    
                        <div class="prop-item">
                            <span>Gateway:</span>
                            <b>192.168.0.1</b>
                        </div>
    
                        <div class="prop-item">
                            <span>Status:</span>
                            <b class="prop-online">ONLINE</b>
                        </div>
                    </div>
    
                    <div class="prop-secao">
                        <strong>Informações do navegador</strong>
    
                        <div class="prop-item">
                            <span>Navegador:</span>
                            <b class="prop-navegador">Detectando...</b>
                        </div>
    
                        <div class="prop-item">
                            <span>Idioma:</span>
                            <b class="prop-idioma">Detectando...</b>
                        </div>
    
                        <div class="prop-item">
                            <span>Resolução:</span>
                            <b class="prop-resolucao">Detectando...</b>
                        </div>
                    </div>
    
                </div>
    
                <div class="prop-aviso">
                    ⚠ SISTEMA MONITORADO PELO ADMINISTRADOR
                </div>
    
                <div class="prop-botoes">
                    <button class="prop-ok">OK</button>
                </div>
    
            </div>
        `,
        largura: "350px",
        altura: "300px"
    },
    configuracoes: {
        titulo: "Configurações",
        conteudo: `
    <div class="config-retro">
        <div class="config-menu">
            <span>Configurações</span>
            <span>Exibir</span>
            <span>Sistema</span>
            <span>Ajuda</span>
        </div>
    
        <div class="config-corpo">
            <div class="config-sidebar">
                <button class="config-item ativo" data-config="aparencia">🖥 Aparência</button>
                <button class="config-item" data-config="efeitos">✨ Efeitos</button>
                <button class="config-item" data-config="som">🔊 Som</button>
                <button class="config-item" data-config="sistema">⚙ Sistema</button>
            </div>
    
            <div class="config-painel">
                <!-- APARÊNCIA -->
                <div class="config-pagina ativa" data-pagina="aparencia">
                    <h3>Aparência</h3>
    
                    <div class="config-grupo">
                        <strong>Tema da interface</strong>
                        <label><input type="radio" name="tema-config" value="retro" checked> Retrô clássico</label>
                        <label><input type="radio" name="tema-config" value="rosa"> Rosa Aninha</label>
                        <label><input type="radio" name="tema-config" value="azul"> Azul clássico</label>
                    </div>
    
                    <div class="config-grupo">
                        <strong>Cor de destaque</strong>
                        <div class="config-cores">
                            <button class="config-cor" data-cor="#000080" style="background:#000080"></button>
                            <button class="config-cor" data-cor="#800080" style="background:#800080"></button>
                            <button class="config-cor" data-cor="#800000" style="background:#800000"></button>
                            <button class="config-cor" data-cor="#008080" style="background:#008080"></button>
                            <button class="config-cor" data-cor="#008000" style="background:#008000"></button>
                        </div>
                    </div>
                </div>
    
                <!-- EFEITOS -->
                <div class="config-pagina" data-pagina="efeitos">
                    <h3>Efeitos visuais</h3>
    
                    <div class="config-grupo">
                        <label class="config-checkbox">
                            <input type="checkbox" class="config-animacoes" checked>
                            Ativar animações
                        </label>
    
                        <label class="config-checkbox">
                            <input type="checkbox" class="config-som-janelas" checked>
                            Sons das janelas
                        </label>
    
                        <label class="config-checkbox">
                            <input type="checkbox" class="config-brilho">
                            Efeito CRT
                        </label>
    
                        <label class="config-checkbox">
                            <input type="checkbox" class="config-pixel" checked>
                            Renderização pixelada
                        </label>
                    </div>
    
                    <div class="config-grupo">
                        <strong>Velocidade das animações</strong>
                        <select class="config-velocidade">
                            <option value="slow">Lenta</option>
                            <option value="normal" selected>Normal</option>
                            <option value="fast">Rápida</option>
                        </select>
                    </div>
                </div>
    
                <!-- SOM -->
                <div class="config-pagina" data-pagina="som">
                    <h3>Som</h3>
    
                    <div class="config-grupo">
                        <strong>Volume geral</strong>
    
                        <div class="config-volume">
                            <span>🔈</span>
                            <input type="range" class="config-volume-range" min="0" max="100" value="70">
                            <span>🔊</span>
                        </div>
    
                        <div class="config-volume-valor">70%</div>
                    </div>
    
                    <div class="config-grupo">
                        <label class="config-checkbox">
                            <input type="checkbox" class="config-mudo">
                            Silenciar todos os sons
                        </label>
                    </div>
                </div>
    
                <!-- SISTEMA -->
                <div class="config-pagina" data-pagina="sistema">
                    <h3>Sistema</h3>
    
                    <div class="config-grupo">
                        <div class="config-info">
                            <span>Versão:</span>
                            <strong>AninhaOS 98</strong>
                        </div>
    
                        <div class="config-info">
                            <span>Build:</span>
                            <strong>98.09.2026</strong>
                        </div>
    
                        <div class="config-info">
                            <span>Kernel:</span>
                            <strong>ANX-KERNEL 1.0</strong>
                        </div>
    
                        <div class="config-info">
                            <span>Status:</span>
                            <strong class="config-online">ONLINE</strong>
                        </div>
                    </div>
    
                    <div class="config-grupo config-aviso">
                        <strong>⚠ AVISO</strong>
                        <p>
                            Algumas configurações são apenas
                            experimentais e podem não funcionar
                            em todos os navegadores.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    
        <div class="config-rodape">
            <button class="config-aplicar">Aplicar</button>
            <button class="config-fechar">OK</button>
        </div>
    </div>
        `,
        largura: "350px",
        altura: "300px"
    },
    curriculo: {
        titulo: "Currículo - Ana Elisa",
        conteudo: `
    <div class="curriculo-retro">
        <div class="curriculo-menu">
            <span>Arquivo</span>
            <span>Editar</span>
            <span>Exibir</span>
            <span>Ajuda</span>
        </div>
    
        <div class="curriculo-ferramentas">
            <button class="curriculo-btn" title="Imprimir">🖨</button>
            <button class="curriculo-btn curriculo-salvar" title="Salvar">💾</button>
            <div class="curriculo-separador"></div>
            <span class="curriculo-status-top">DOCUMENTO: CURRICULO.TXT</span>
        </div>
    
        <div class="curriculo-pagina">
            <header class="curriculo-cabecalho">
            <img src="../src/icones/eu.jpg" alt="Eu" class="curriculo-foto">
                <div>
                    <h1>ANA ELISA</h1>
                    <p class="curriculo-cargo">DESENVOLVEDORA JAVA</p>
                </div>
    
                <div class="curriculo-id">
                    <span>ANINHA-PC</span>
                    <span>CURRÍCULO.EXE</span>
                </div>
            </header>
    
            <div class="curriculo-linha"></div>
    
            <section class="curriculo-secao">
                <h2>01. PERFIL</h2>
                <p>
                    Estudante de Engenharia de Software com foco
                    em desenvolvimento Java e interesse em
                    desenvolvimento backend.
                </p>
                <p>
                    Tenho experiência prática com Java, bancos
                    de dados, APIs, desenvolvimento web e
                    versionamento de código.
                </p>
            </section>
    
            <section class="curriculo-secao">
                <h2>02. FORMAÇÃO</h2>
                <div class="curriculo-item">
                    <div>
                        <strong>Engenharia de Software</strong>
                        <p>UNIPAR — Universidade Paranaense</p>
                    </div>
                    <span>2025 — ATUAL</span>
                </div>
            </section>
    
            <section class="curriculo-secao">
                <h2>03. CONHECIMENTOS</h2>
    
                <div class="curriculo-grid">
                    <div>
                        <strong>PROGRAMMING</strong>
                        <p>Java</p>
                        <p>JavaScript</p>
                        <p>HTML</p>
                        <p>CSS</p>
                    </div>
    
                    <div>
                        <strong>BACKEND</strong>
                        <p>JDBC</p>
                        <p>Spring Boot</p>
                        <p>JPA</p>
                        <p>APIs REST</p>
                    </div>
    
                    <div>
                        <strong>DATABASE</strong>
                        <p>MySQL</p>
                        <p>PostgreSQL</p>
                        <p>SQL</p>
                    </div>
    
                    <div>
                        <strong>TOOLS</strong>
                        <p>Git</p>
                        <p>GitHub</p>
                        <p>Linux</p>
                        <p>VS Code</p>
                    </div>
                </div>
            </section>
    
            <section class="curriculo-secao">
                <h2>04. PROJETOS</h2>
    
                <div class="curriculo-projeto">
                    <strong>JAVA LEARNING</strong>
                    <p>
                        Repositório de estudos e exercícios
                        desenvolvidos durante minha aprendizagem
                        de Java.
                    </p>
                    <span>JAVA / GIT / GITHUB</span>
                </div>
    
                <div class="curriculo-projeto">
                    <strong>CONTROLE DE GLICEMIA</strong>
                    <p>
                        Aplicação Java para registro, consulta
                        e análise de dados armazenados em
                        arquivos.
                    </p>
                    <span>JAVA / FILES / CSV / TXT</span>
                </div>
    
                <div class="curriculo-projeto">
                    <strong>PORTFÓLIO ANINHAELISA</strong>
                    <p>
                        Portfólio pessoal desenvolvido com uma
                        interface inspirada em computadores
                        antigos.
                    </p>
                    <span>HTML / CSS / JAVASCRIPT</span>
                </div>
            </section>
    
            <section class="curriculo-secao">
                <h2>05. FERRAMENTAS</h2>
    
                <div class="curriculo-tags">
                    <span>JAVA</span>
                    <span>SPRING</span>
                    <span>MYSQL</span>
                    <span>POSTGRESQL</span>
                    <span>GIT</span>
                    <span>LINUX</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JAVASCRIPT</span>
                    <span>FIGMA</span>
                    <span>CANVA</span>
                </div>
            </section>
    
            <section class="curriculo-secao">
                <h2>06. CONTATO</h2>
    
                <div class="curriculo-contato">
                    <p>EMAIL: elisaana.2019.2006@email.com</p>
                    <p>GITHUB: github.com/aninhaelisa</p>
                    <p>LINKEDIN: linkedin.com/in/ana-elisa-00477a3a8</p>
                </div>
            </section>
    
            <footer class="curriculo-footer">
                <span>★ ANINHAELISA SYSTEM ★</span>
                <span>CURRÍCULO.TXT</span>
                <span>© 2026</span>
            </footer>
        </div>
    
        <div class="curriculo-status">
            <span>Documento concluído</span>
            <span>Página 1</span>
            <span>UTF-8</span>
        </div>
    </div>
        `,
        largura: "350px",
        altura: "300px"
    },
    compilador: {
        titulo: "Java Compiler",
        conteudo: `
            <div class="compilador-retro">
                <div class="compilador-cabecalho">
                     ANINHA JAVA DEVELOPMENT ENVIRONMENT
                </div>
    
                <div class="compilador-editor">
                    <iframe
                        src="https://onecompiler.com/embed/java"
                        frameborder="0">
                    </iframe>
                </div>
    
                <div class="compilador-status">
                    Pronto.
                </div>
            </div>
        `,
        largura: "350px",
        altura: "300px"
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
    function fecharEstaJanela() {
        janelasAbertas = janelasAbertas.filter(item => item !== id);
        fecharJanelaCompleto(id);
    }

    novaJanela.querySelector('.btn-fechar').addEventListener('click', fecharEstaJanela);

    if (id === "propriedades") {
        novaJanela.querySelector('.prop-ok').addEventListener('click', fecharEstaJanela);
    }
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
    if (id === "paint") {
        iniciarPaint(novaJanela);
    }
    if (id === "propriedades") {
        iniciarPropriedades(novaJanela);
    }
    if (id === "configuracoes") {
        iniciarConfiguracoes(novaJanela);
    }
    if (id === "curriculo") {
        iniciarCurriculo(novaJanela);
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

    requestAnimationFrame(() => {
        const larguraTela = window.innerWidth;
        const alturaTela = window.innerHeight;
        const larguraJanela = janela.offsetWidth || parseInt(janela.style.width) || 350;
        const alturaJanela = janela.offsetHeight || parseInt(janela.style.height) || 300;

        janela.style.left = `${(larguraTela - larguraJanela) / 2}px`;
        janela.style.top = `${(alturaTela - alturaJanela) / 2}px`;
    });
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

function iniciarPaint(janela) {
    const canvas = janela.querySelector(".paint-canvas");
    const contexto = canvas.getContext("2d");
    const botoesCor = janela.querySelectorAll(".paint-cor");
    const picker = janela.querySelector(".paint-color-picker");
    const corAtualElemento = janela.querySelector(".paint-cor-atual");
    const botoesFerramenta = janela.querySelectorAll(".paint-ferramenta");
    const tamanhoSelect = janela.querySelector(".paint-tamanho-select");
    const salvar = janela.querySelector(".paint-salvar");
    const status = janela.querySelector(".paint-status-text");
    const coordenadas = janela.querySelector(".paint-coordenadas");

    let desenhando = false;
    let corAtual = "#000000";
    let tamanho = 4;
    let ferramenta = "pincel";

    function prepararCanvas() {
        const largura = canvas.clientWidth;
        const altura = canvas.clientHeight;
        if (!largura || !altura) return;
        const imagemAnterior = canvas.width && canvas.height
            ? contexto.getImageData(0, 0, canvas.width, canvas.height)
            : null;
        canvas.width = largura;
        canvas.height = altura;
        contexto.fillStyle = "#ffffff";
        contexto.fillRect(0, 0, canvas.width, canvas.height);

        if (imagemAnterior) {
            contexto.putImageData(imagemAnterior, 0, 0);
        }
    }

    prepararCanvas();

    function obterPosicao(e) {
        const rect = canvas.getBoundingClientRect();
        const escalaX = canvas.width / rect.width;
        const escalaY = canvas.height / rect.height;
        return {
            x: (e.clientX - rect.left) * escalaX,
            y: (e.clientY - rect.top) * escalaY
        };
    }

    function desenhar(e) {
        if (!desenhando) return;
        const posicao = obterPosicao(e);
        if (ferramenta === "borracha") {
            contexto.strokeStyle = "#ffffff";
        } else {
            contexto.strokeStyle = corAtual;
        }
        contexto.lineWidth = tamanho;
        contexto.lineCap = "round";
        contexto.lineJoin = "round";
        contexto.lineTo(posicao.x, posicao.y);
        contexto.stroke();
        contexto.beginPath();
        contexto.moveTo(posicao.x, posicao.y);
        coordenadas.textContent =
            `${Math.round(posicao.x)}, ${Math.round(posicao.y)}`;
    }

    canvas.addEventListener("pointerdown", (e) => {
        desenhando = true;
        canvas.setPointerCapture(e.pointerId);
        const posicao = obterPosicao(e);
        contexto.beginPath();
        contexto.moveTo(posicao.x, posicao.y);
        contexto.strokeStyle =
            ferramenta === "borracha"
                ? "#ffffff"
                : corAtual;
        contexto.lineWidth = tamanho;
        contexto.lineCap = "round";
        contexto.lineJoin = "round";
        contexto.lineTo(posicao.x + 0.1, posicao.y + 0.1);
        contexto.stroke();
        contexto.beginPath();
        contexto.moveTo(posicao.x, posicao.y);
        status.textContent = "Desenhando...";
    });
    canvas.addEventListener("pointermove", desenhar);
    canvas.addEventListener("pointerup", () => {
        desenhando = false;
        contexto.closePath();
        status.textContent = "Pronto";
    });

    canvas.addEventListener("pointerleave", () => {
        if (!desenhando) {
            coordenadas.textContent = "0, 0";
        }
    });

    botoesCor.forEach(botao => {
        botao.addEventListener("click", () => {
            corAtual = botao.dataset.cor;
            corAtualElemento.style.background = corAtual;
            ferramenta = "pincel";
            botoesFerramenta.forEach(botao =>
                botao.classList.remove("ativa")
            );
            const pincel = janela.querySelector(
                '[data-ferramenta="pincel"]'
            );
            pincel.classList.add("ativa");
            status.textContent = `Cor: ${corAtual}`;
        });

    });

    picker.addEventListener("input", () => {
        corAtual = picker.value;
        corAtualElemento.style.background = corAtual;
        ferramenta = "pincel";
        botoesFerramenta.forEach(botao =>
            botao.classList.remove("ativa")
        );
        janela
            .querySelector('[data-ferramenta="pincel"]')
            .classList.add("ativa");
        status.textContent = `Cor: ${corAtual}`;
    });
    botoesFerramenta.forEach(botao => {

        botao.addEventListener("click", () => {
            ferramenta = botao.dataset.ferramenta;
            botoesFerramenta.forEach(botao =>
                botao.classList.remove("ativa")
            );
            botao.classList.add("ativa");
            if (ferramenta === "pincel") {
                status.textContent = "Pincel";
            }
            if (ferramenta === "borracha") {
                status.textContent = "Borracha";
            }
            if (ferramenta === "limpar") {
                const confirmar =
                    confirm("Limpar toda a imagem?");

                if (confirmar) {
                    contexto.fillStyle = "#ffffff";
                    contexto.fillRect(
                        0,
                        0,
                        canvas.width,
                        canvas.height
                    );
                    status.textContent = "Imagem limpa";
                }
                ferramenta = "pincel";
                botoesFerramenta.forEach(botao =>
                    botao.classList.remove("ativa")
                );
                janela
                    .querySelector('[data-ferramenta="pincel"]')
                    .classList.add("ativa");
            }
        });
    });

    tamanhoSelect.addEventListener("change", () => {
        tamanho = Number(tamanhoSelect.value);
        status.textContent =
            `Pincel: ${tamanho}px`;
    });
    salvar.addEventListener("click", () => {
        const link = document.createElement("a");
        link.download =
            `aninhaelisa-paint-${Date.now()}.png`;
        link.href = canvas.toDataURL("image/png");
        document.body.appendChild(link);
        link.click();
        link.remove();
        status.textContent = "Imagem salva!";
    });

}

function iniciarPropriedades(janela) {
    const navegador =
        janela.querySelector(".prop-navegador");
    const idioma =
        janela.querySelector(".prop-idioma");
    const resolucao =
        janela.querySelector(".prop-resolucao");

    const ua = navigator.userAgent;
    let nomeNavegador = "Navegador desconhecido";
    if (ua.includes("Chrome")) {
        nomeNavegador = "Google Chrome";
    } else if (ua.includes("Firefox")) {
        nomeNavegador = "Mozilla Firefox";
    } else if (ua.includes("Edg")) {
        nomeNavegador = "Microsoft Edge";
    }

    navegador.textContent = nomeNavegador;
    idioma.textContent =
        navigator.language || "pt-BR";
    resolucao.textContent =
        `${window.screen.width} × ${window.screen.height}`;
}

function iniciarConfiguracoes(janela) {
    const itens = janela.querySelectorAll(".config-item");
    const paginas = janela.querySelectorAll(".config-pagina");
    const volume = janela.querySelector(".config-volume-range");
    const volumeValor = janela.querySelector(".config-volume-valor");
    const mudo = janela.querySelector(".config-mudo");
    const aplicar = janela.querySelector(".config-aplicar");
    const fechar = janela.querySelector(".config-fechar");

    itens.forEach(item => {
        item.addEventListener("click", () => {
            const config = item.dataset.config;

            itens.forEach(i => i.classList.remove("ativo"));
            paginas.forEach(pagina => pagina.classList.remove("ativa"));

            item.classList.add("ativo");

            const pagina = janela.querySelector(`[data-pagina="${config}"]`);

            if (pagina) {
                pagina.classList.add("ativa");
            }
        });
    });

    volume.addEventListener("input", () => {
        volumeValor.textContent = `${volume.value}%`;
    });

    mudo.addEventListener("change", () => {
        volume.disabled = mudo.checked;

        if (mudo.checked) {
            volumeValor.textContent = "MUDO";
        } else {
            volumeValor.textContent = `${volume.value}%`;
        }
    });

    janela.querySelectorAll(".config-cor").forEach(botao => {
        botao.addEventListener("click", () => {
            const cor = botao.dataset.cor;

            document.documentElement.style.setProperty(
                "--cor-destaque",
                cor
            );
        });
    });

    aplicar.addEventListener("click", () => {
        aplicar.classList.add("ativo");

        setTimeout(() => {
            aplicar.classList.remove("ativo");
        }, 150);
    });

    fechar.addEventListener("click", () => {
        janelasAbertas = janelasAbertas.filter(
            item => item !== "configuracoes"
        );

        fecharJanelaCompleto("configuracoes");
    });
}
function iniciarCurriculo(janela) {
    const salvar = janela.querySelector(".curriculo-salvar");

    salvar.addEventListener("click", () => {
        const conteudo = janela.querySelector(".curriculo-pagina").innerText;

        const arquivo = new Blob([conteudo], {
            type: "text/plain;charset=utf-8"
        });

        const link = document.createElement("a");

        link.href = URL.createObjectURL(arquivo);
        link.download = "Ana-Elisa-Curriculo.txt";
        link.click();

        URL.revokeObjectURL(link.href);
    });
}

