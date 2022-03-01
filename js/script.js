let colorPicker;
let colorPredeterminado = "#FFFFFF";

let texto = document.getElementsByClassName("texto");
let nombre;

let formTarjeta = document.getElementById('formTarjeta');
let generarTarjeta = document.getElementById('boton');
let tarjeta = document.getElementById('tarjeta');

window.addEventListener("load", startup, false);

function startup() {
    colorPicker = document.querySelector("#colorPicker");
    colorPicker.value = colorPredeterminado;
    colorPicker.addEventListener("input", updateFirst, false);
    colorPicker.addEventListener("change", updateAll, false);
    colorPicker.select();
};

function updateFirst(event) {
    if (texto) {
        texto.style.color = event.target.value;
    };
};

function updateAll(event) {
    document.querySelectorAll("h2").forEach(function(texto) {
        texto.style.color = event.target.value;
    });
};

formTarjeta.addEventListener('submit', (e) => {
    e.preventDefault()
    nombre = document.getElementById('nombre').value;
});

generarTarjeta.addEventListener('click', () => {
    tarjeta.innerHTML = `
    <div class="container-fluid tarjeta">
        <h2 class="texto">Feliz Navidad, ${nombre}</h2>
    </div>`
})