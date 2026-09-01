document.body.style.overflow = 'hidden';
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

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

window.onload = iniciarDataEHora;


