//Selectors
const aumentoEL = document.querySelector(".aumento");
const asigEL = document.querySelector(".asig");
const resetEL = document.querySelector(".reset");
const anEL = document.querySelector(".an");
const awEL = document.querySelector(".aw");
const asEL = document.querySelector(".as");
const aaEL = document.querySelector(".aa");
const asrEL = document.querySelector(".asr");
const raEL = document.querySelector(".ra");
const crisEL = document.querySelector(".c");
const miguelEL = document.querySelector(".m");
const raymerEL = document.querySelector(".r");
const cardsEL = document.querySelectorAll(".empleados-box");
const rtareas = document.querySelectorAll(".r");

//Variables
let aumento = 0;
let valor = 0;
let current = 0;

//settings

// Elejir tarjetas

miguelEL.addEventListener("click", function () {
  cardsEL.forEach((c) => c.classList.remove("active"));
  miguelEL.classList.add("active");
});
raymerEL.addEventListener("click", function () {
  cardsEL.forEach((c) => c.classList.remove("active"));
  raymerEL.classList.add("active");
});
crisEL.addEventListener("click", function () {
  cardsEL.forEach((c) => c.classList.remove("active"));
  crisEL.classList.add("active");
});

//

// Boton asignar
asigEL.addEventListener("click", function () {
  const activeEL = document.querySelector(".active");
  const valorEL = activeEL.querySelector(".valor");
  console.log(valorEL);
  if (aumento > 0) {
    aumentoEL.textContent = `Aumento: $${aumento}`;
    valor += aumento;
    current = valor;
    valorEL.textContent = current;
  } else {
    alert("Elejir tarea");
  }
  aumento = 0;
  valor = 0;
  aumentoEL.textContent = `Aumento: $${aumento}`;
  activeEL.classList.add("off");
});

// botonos de roles

anEL.addEventListener("click", function () {
  anEL.classList.add("off");
  aumento += 8000;
  aumentoEL.textContent = `Aumento: $${aumento}`;
});
awEL.addEventListener("click", function () {
  awEL.classList.add("off");
  aumento += 6000;
  aumentoEL.textContent = `Aumento: $${aumento}`;
});
asEL.addEventListener("click", function () {
  asEL.classList.add("off");
  aumento += 7000;
  aumentoEL.textContent = `Aumento: $${aumento}`;
});
aaEL.addEventListener("click", function () {
  aaEL.classList.add("off");
  aumento += 10000;
  aumentoEL.textContent = `Aumento: $${aumento}`;
});
asrEL.addEventListener("click", function () {
  asrEL.classList.add("off");
  aumento += 5000;
  aumentoEL.textContent = `Aumento: $${aumento}`;
});
raEL.addEventListener("click", function () {
  raEL.classList.add("off");
  aumento += 10000;
  aumentoEL.textContent = `Aumento: $${aumento}`;
});

// boton Reset
const reset = function () {
  aumento = 0;
  aumentoEL.textContent = `Aumento: $${aumento}`;
  miguelEL.querySelector(".valor").textContent = 0;
  raymerEL.querySelector(".valor").textContent = 0;
  crisEL.querySelector(".valor").textContent = 0;
  miguelEL.classList.remove("off");
  raymerEL.classList.remove("off");
  crisEL.classList.remove("off");
  anEL.classList.remove("off");
  awEL.classList.remove("off");
  asEL.classList.remove("off");
  aaEL.classList.remove("off");
  asrEL.classList.remove("off");
  raEL.classList.remove("off");

  console.log("reset");
};
resetEL.addEventListener("click", function () {
  reset();
});
