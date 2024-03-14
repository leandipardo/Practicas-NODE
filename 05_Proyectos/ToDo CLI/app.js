import { createInterface } from "readline";
import chalk from "chalk";
const task = [];
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});
function displayMenu(){
    console.clear();
    console.log(chalk.yellow.bold("-------ToDO App---------"));
    console.log(chalk.blueBright("Menu de opciones."));
    console.log("1. Agregar tarea.");
    console.log("2. Listar tareas.");
    console.log("3. Completar tarea.");
    console.log("4. Salir.");
}
function chooseOption(){
    rl.question("Elige una opción", (choise)=>{
        switch(choise){
            case "1":
                console.clear();
                console.log("Crear tarea");
                break;
            case "2":
                console.clear();
                console.log("Listar tareas");
                break;
            case "3":
                console.clear();
                console.log("Completar tarea");
                break;
            case "4":
                console.clear();
                console.log(chalk.red("Adios 👋😘"))
                rl.close;
                break;
            default:
                console.clear();
                console.log(chalk.red.bold("ERROR: ")+chalk.black("Opción inválida intente nuevamente."))
                displayMenu();
                chooseOption();
                break;
        }
    })
}
displayMenu();
chooseOption();