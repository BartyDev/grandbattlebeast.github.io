//funciones
function initial(jugador) {
    let nuevoIngreso = prompt(jugador);
    while (nuevoIngreso <= 0 || nuevoIngreso > 3 || nuevoIngreso == null || nuevoIngreso == "") {
        alert("INGRERSA DATO CORRECTO");
        nuevoIngreso = prompt(jugador);
    }
    return jugadorvar = nuevoIngreso;
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function playGame(jugadas) {
    let election = "";
    jugadas == 1 ? election = "🪨" : jugadas == 2 ? election = "📄" : jugadas == 3 ? election = "✂️" : "";
    return election;
}

function combat() {
    jugadorvar == pc ? alert("EMPATE") : (jugadorvar == 1 && pc == 3 || jugadorvar == 2 && pc == 1 || jugadorvar == 3 && pc == 2) ? win++ + alert("GANASTE") : lose++ + alert("PERDISTE");
}

function ganador() {
    win > lose ? alert(`ganadas => ${win} , perdidas => ${lose}`) + alert("YOU WIN 🏆") : lose > win ? alert(`ganadas => ${win} , perdidas => ${lose}`) + alert("YOU LOSE 💀") : "";
}

//variables
let jugador = "elige:  1) para 🪨  2) para 📄  3) para ✂️"
let jugadorvar = 0;
let win = 0;
let lose = 0;


// inicializando
while (win < 3 && lose < 3) {
    pc = aleatorio(1, 3);
    initial(jugador);
    alert(`Pc elegiste ${playGame(pc)}`);
    alert(`elegiste  ${playGame(jugadorvar)}`);
    combat();
}
ganador();