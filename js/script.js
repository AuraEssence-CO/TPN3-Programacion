// Arreglo global
let fila = [];

// Capturar elementos
const input = document.getElementById("nombreInput");
const btnAnotar = document.getElementById("btnAnotar");
const btnAtender = document.getElementById("btnAtender");
const btnReset = document.getElementById("btnReset");
const lista = document.getElementById("lista");
const visor = document.querySelector("#visor");
const contador = document.getElementById("contador");

// Función para actualizar la lista
function actualizarLista() {
    lista.innerHTML = "";

    fila.forEach((nombre, index) => {
        let li = document.createElement("li");
        li.textContent = nombre;

        // Evento para prioridad
        li.addEventListener("click", () => {
            li.classList.toggle("prioridad");
        });

        lista.appendChild(li);
    });

    // Actualizar contador
    contador.textContent = `En espera: ${fila.length} persona${fila.length !== 1 ? "s" : ""}`;
}

// Botón Anotar
btnAnotar.addEventListener("click", () => {
    let nombre = input.value.trim();

    if (nombre !== "") {
        if (fila.includes(nombre)) {
            alert(`"${nombre}" ya está en la lista.`);
            return;
        }
        fila.push(nombre);
        input.value = "";
        actualizarLista();
    }
});

// Botón Atender
btnAtender.addEventListener("click", () => {
    if (fila.length > 0) {
        let atendido = fila.shift();
        visor.textContent = atendido;
        actualizarLista();
    } else {
        visor.textContent = "Nadie";
    }
});

// Botón Resetear
btnReset.addEventListener("click", () => {
    if (confirm("¿Estás seguro de que querés reiniciar el día?")) {
        fila = [];
        visor.textContent = "Nadie";
        actualizarLista();
    }
});