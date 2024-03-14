import { readFileSync } from "fs";
console.log("Inicio del programa");
const data = readFileSync("archivo.txt","utf-8");
console.log(data);
console.log("Fin del programa.");
