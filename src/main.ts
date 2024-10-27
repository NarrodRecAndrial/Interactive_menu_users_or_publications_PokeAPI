// Importar las funciones desde el archivo controllers
import { renderPost, renderUser } from "./controllers";
const readline = require('readline'); // Importación de readline usando require

// Configuración de readline para entrada de consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función principal que pide al usuario una opción
function askUserChoice() {
    console.log("¿Qué deseas ver? (1: Usuario, 2: Publicación)");
    rl.question('Escribe 1 o 2: ', (answer: any) => {
        console.time("post"); // Iniciar el temporizador

        if (answer === '1') {
            renderUser();
        } else if (answer === '2') {
            renderPost();
        } else {
            console.log("Opción no válida. Por favor, elige 1 o 2.");
        }

        console.timeEnd("post"); // Finalizar el temporizador
        rl.close(); // Cerrar la interfaz de readline
    });
}

// Ejecutar la función principal
askUserChoice();
