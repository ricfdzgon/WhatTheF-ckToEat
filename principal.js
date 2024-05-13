// Opciones de la ruleta
const options = ["McDonals", "Taco Bell", "Burguer King", "Dominos", "KFC","Kebab","Burrito","Urbana","Poke","Chino","Indio"];

// Función para seleccionar una opción aleatoria
function spin() {
  // Objeto para mantener un seguimiento de cuántas veces se ha repetido cada opción
  const optionCounts = {};

  // Realizar 10 sorteos
  for (let i = 0; i < 100; i++) {
    const randomIndex = Math.floor(Math.random() * options.length);
    const selectedOption = options[randomIndex];

    // Incrementar el contador de la opción seleccionada
    if (optionCounts[selectedOption]) {
      optionCounts[selectedOption]++;
    } else {
      optionCounts[selectedOption] = 1;
    }
  }

  // Encontrar la opción que se ha repetido más veces
  let mostRepeatedOption = null;
  let maxCount = 0;
  for (const option in optionCounts) {
    if (optionCounts[option] > maxCount) {
      mostRepeatedOption = option;
      maxCount = optionCounts[option];
    }
  }

  // Mostrar la opción que se ha repetido más veces
  document.getElementById('result').innerText = `La opción más repetida es: ${mostRepeatedOption}`;
}

// Asignar el evento clic al botón de girar
document.getElementById('spinButton').addEventListener('click', spin);
