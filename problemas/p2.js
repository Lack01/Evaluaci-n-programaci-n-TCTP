/**
 * Problema número 2.
 * 
 * Genera un script/algoritmo/función que sea capaz de transformar los datos de input-p2.csv
 * en un arból de estructura similar al problema de p1 utilizando la estructura de Nodo.js
 */

const Nodo = require("./src/Nodo.js");
const raiz = new Nodo("root", "Raíz");


//Agregar a raiz toda la estructura solicitada.
//...

const fs = require("fs");
const parse = require ("csv-parse/lib/sync"); /*La API 'sync' expone una función que espera como entrada un conjunto de datos completo como texto y que 
                                                devuelve el conjunto de resultados completo como una matriz o un objeto, mas información - https://csv.js.org/parse/api/sync/.
                                                */
const file_name = './src/input-p2.csv';
var csv_data = fs.readFileSync(file_name).toString();
const records = parse(csv_data, {delimiter: ',', skip_empty_lines: true}); //Se convierten las filas del archivo .CSV en arrays.

Convertir_CSV = (csvArray) => {
    const csvData = csvArray; 
    const types = csvData.shift();  //Se elimina la cabecera del archivo .CSV para establecer nuestro propio formato.

    const result = [];
    const arbol = {result};

    csvData.forEach(row => {

        row.reduce((nodo, nombre, index) => {   //Se establece 'nombre' como key para formato.
            if (nodo[nombre] == null) {         //Evalúa si la key 'nombre' es igual a nulo, comienza a crear los 'hijos' mediante asignaciones de valores ya definidos.
                nodo_actual = {nombre}
                nodo[nombre] = {result: []}
                nodo_actual.tipo = types[index]   //Se evalúa los indices de types, siendo 4 niveles, al igual que el formato del problema 1. 
                nodo_actual.hijos = nodo[nombre].result
                nodo.result.push(nodo_actual)       // Con el push se comienza a dar forma al arreglo result 
                }

            return nodo[nombre]
        }, arbol)                                 //El objeto 'arbol' sirve como base para estructurar el array result
    });

    return result;
  }

raiz.hijos = Convertir_CSV(records);   
fs.writeFileSync("src/input-p2.json", JSON.stringify(raiz), "utf-8") /* Al ejecutar 'node p2.js' se genera un archivo con el nombre 'input-p2.json' dentro de la carpeta 'src' con
                                                                        el formato solicitado. */




