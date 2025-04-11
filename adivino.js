// Variables
let frases=[
    "Curry con arroz",
    "Pasta boloñesa",
    "Lentejas",
    "Ensalada de garbanzos",
    "Pizza y ensalada",
    "Hamburguesa con patatas",
    "Hoy no se come",
    "Crema y sándwich",
    "Arroz a la cubana",
    "Sopita de estrellitas",
    "Poke",
    "Fideos thai",
]

// Saber cuántas frases tengo
let numFrases= frases.length
console.log(numFrases);
// Determinar el número aleatorio
let numAleatorio= Math.random() * numFrases;
console.log(numAleatorio);
numAleatorio= parseInt (numAleatorio);
// Mostrar el resultado en pantalla
document.getElementById("resultado1").textContent= frases [numAleatorio]

function activarBoton(){
    location.reload();
}


document.getElementById("probar").addEventListener("click", activarBoton);
