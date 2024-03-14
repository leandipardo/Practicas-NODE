import { readFileSync, writeFileSync } from "fs";
import { createInterface } from "readline";
import chalk from "chalk";
const tasks = [];
const DB_FILE = "tasks.txt";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});
function displayMenu(){
    console.log(chalk.yellow.bold("-------ToDO App---------"));
    console.log(chalk.blueBright("Menu de opciones."));
    console.log("1. Agregar tarea.");
    console.log("2. Listar tareas.");
    console.log("3. Completar tarea.");
    console.log("4. Eliminar tarea.");
    console.log(chalk.bgRed("5. Salir."));
    console.log("\n \n \n \n \n");
}

function loadTasks(){
    try {
        const data = readFileSync(DB_FILE, "utf-8"),
        lines = data.split("\n");
        tasks.length = 0;
        lines.forEach(line=>{
            if (line.trim() !== ""){
            const [task, completedStr] = line.split("|"),
            completed = completedStr === "true";
            tasks.push({task, completed});
        }
        })
        console.log(chalk.green.bold("Las tareas se han cargado desde la BD"));
    } catch (err) {
        console.log(chalk.bgRed.bold("no hay tareas por cargar o hubo un error."));
    }
}

function saveTask(){
    const data = tasks.map(task=> `${task.task}|${task.completed}`).join("\n");
    writeFileSync(DB_FILE, data, "utf-8");
    console.log(chalk.green.bold("Tarea agregada a la BD con éxito. \n"))
}

function addTask(){
    rl.question(chalk.blueBright("Escribe la tarea: "), (task)=>{
        tasks.push({task: task, completed: false});
        console.log(chalk.green.bold("Tarea agregada con éxito."));
        saveTask();
        displayMenu();
        chooseOption();
    });
}

function listTasks(){
    console.log(chalk.yellow.bold("\n-----Lista de tareas----\n"));
    if (tasks.length === 0){
        console.log(chalk.bgRed("No hay tareas por hacer.👌🏻2")); 
        displayMenu();
        chooseOption();
    }else{
    tasks.forEach((task, i)=>{
        (task.completed || task.completed === "true") ?console.log(chalk.bgGreenBright(`${i + 1}.${task.task}`)) :console.log(chalk.bgRedBright(`${i + 1}.${task.task}`));
    })
    displayMenu();
    chooseOption();
}
}

function completeTask(){
    console.log(chalk.yellow.bold("\n-----Lista de tareas----\n"));
    tasks.forEach((task,i) =>{
        (task.completed)?console.log(chalk.bgGreenBright(`${i + 1}.${task.task}`)) :console.log(chalk.bgRedBright(`${i + 1}.${task.task}`));
    })
    rl.question(chalk.blueBright("Escribe el numero de la tarea a completar \n"),
    (tasknumber)=>{
        const index = parseInt(tasknumber) - 1;
        if(index >= 0 && index < tasks.length){
            (tasks[index].completed)?tasks[index].completed=false :tasks[index].completed = true;
            saveTask();
            console.log(chalk.green.bold("Tarea marcada con éxito\n"));
        }else{
            console.log(chalk.bgRed.bold("Número de tarea inválido \n \n"));
        }
        listTasks();
    });
}

function deleteTask(){
    console.log(chalk.yellow.bold("\n-----Lista de tareas----\n"));
    tasks.forEach((task,i) =>{
        (task.completed)?console.log(chalk.bgGreenBright(`${i + 1}.${task.task}`)) :console.log(chalk.bgRedBright(`${i + 1}.${task.task}`));
    })
    rl.question(chalk.blueBright("Escribe el numero de la tarea a borrar. \n"),
    (tasknumber)=>{
        const index = parseInt(tasknumber) - 1;
        if(index >= 0 && index < tasks.length){
            tasks.splice(index,1);
            saveTask();
            console.log(chalk.green.bold("Tarea eliminada con éxito.\n"));
        }else{
            console.log(chalk.bgRed.bold("Número de tarea inválido \n \n"));
        }
        listTasks();
    });
}

function chooseOption(){
    rl.question("Elige una opción \n", (choise)=>{
        console.clear();
        switch(choise){
            case "1":
                addTask();
                break;
            case "2":
                listTasks();
                break;
            case "3":
                completeTask();
                break;
            case "4":
                deleteTask();
                break;
            case "5":
                console.clear();
                console.log(chalk.red("Adios 👋😘"))
                rl.close;
                break;
            default:
                console.clear();
                console.log(chalk.bgRed.bold("ERROR: ")+chalk.black("Opción inválida intente nuevamente."))
                displayMenu();
                chooseOption();
                break;
        }
    })
}
loadTasks();
displayMenu();
chooseOption();