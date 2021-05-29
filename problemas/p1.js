/**
 * Problema número 1.
 *
 * Necesitamos que obtengas los datos de ./src/input-p1.json y generes funciones que permitan:
 *
 * 1. Retornar todos los nodos que no tienen hijos.
 * 2. Retornar todos los nodos que contienen una cantidad X (parametrizable) de hijos
 * 3. Contabilizar la cantidad de nodos totales
 * 4. Retornar todas las Sedes con 4° Medio que *SI* poseen la *Oferta Tecnología* en sus *Secciones A*
 */

const data = require("./src/input-p1.json");
console.log(data);


/**************** Ejercicio Nº1 ***************/

Nodos_SinHijos = () => {
    var total = 0               //Contador de nodos que tienen 0 hijos

    const n_hijos = 0           //Constante 

for (sede of data['hijos']){           //Recorre los primeros nodos de data.
    total +=1
    if (sede['hijos'].length == n_hijos){  //Evalúa si el array 'hijo' tiene 0 elementos.
        console.log(sede)
    }
        for (curso of sede['hijos']){         //de los nodos evaluados anteriormente, nuevamente recorre al array 'hijos'.
            total +=1
            if (curso['hijos'].length == n_hijos){  //evalúa si el array 'hijo' tiene 0 elementos.
                console.log(curso)
            }
                total +=1
                for ( seccion of curso['hijos']){             //de los nodos evaluados anteriormente, nuevamente recorre al array 'hijos'.
                    if (seccion['hijos'].length == n_hijos){ //evalúa si el array 'hijo' tiene 0 elementos.
                        console.log(seccion)
                    }       
                        total +=1
                        for (oferta of seccion['hijos']){            //de los nodos evaluados anteriormente, nuevamente recorre al array 'hijos'.      
                            if (oferta['hijos'].length == n_hijos){ //evalúa si el array 'hijo' tiene 0 elementos.
                                console.log(oferta)
                            }
                        }
                }   
        }
}
return total
}


/**************** Ejercicio Nº2 ***************/

Cantidad_Hijos = (n_hijos) => {
    
for (sede of data['hijos']){           //Recorre los primeros nodos de data.
    
    if (sede['hijos'].length == n_hijos){  //evalúa si el array 'hijo' tiene X Cantidad de hijos.
        console.log(sede)
    }
        for ( curso of sede['hijos']){         //de los nodos evaluados anteriormente, nuevamente recorre al array 'hijos'.
            
            if (curso['hijos'].length == n_hijos){ //evalúa si el array 'hijo' tiene X Cantidad de hijos.
                console.log(curso)
            }
                
                for ( seccion of curso['hijos']){
                    if (seccion['hijos'].length == n_hijos){ //evalúa si el array 'hijo' tiene X Cantidad de hijos..
                        console.log(seccion)
                    }       
                        
                        for (oferta of seccion['hijos']){                  
                            if (oferta['hijos'].length == n_hijos){ //evalúa si el array 'hijo' tiene X Cantidad de hijos.
                                console.log(oferta)
                            }
                        }
                }   
        }
}
return n_hijos;                                      // Devuelve el listado de nodos con la cantidad X de hijos, enviado como parámetro en la llamada de la función mas abajo
}



/**************** Ejercicio Nº3 ***************/

Nodos_Totales = ( ) => {

var total = 0               
                            
for (sede of data['hijos']){                                // Recorre los primeros nodos de data.
        total +=1                                             // Realiza la cuenta y la almacena en la variable 'total'
        for ( curso of sede['hijos']){                       // Recorre el nivel 2 de nodos
            total +=1                                           // Realiza la cuenta y la almacena en la variable 'total'
                for ( seccion of curso['hijos']){                   // Recorre el nivel 3 de nodos
                    total +=1                                       // Realiza la cuenta y la almacena en la variable 'total'
                        for (oferta of seccion['hijos']){               // Recorre el nivel 4 de nodos  
                            total +=1                               // Realiza la cuenta y la almacena en la variable 'total'
                            } 
                }
        }
}
return total;                                                         // Devuelve el total de nodos
}



/**************** Ejercicio Nº4 ***************/

obtener_secc = () => {

    for (sede of data['hijos']){                                                // Recorre los primeros nodos de data.
        for ( curso of sede['hijos']){                                      // Recorre el nivel 2 de nodos donde se encuentra 'nombre' de 'curso'.
            if (curso['nombre'] == '4 Medio'){                                 // Se evalúa si en ese nivel se encuentra 'nombre' igual a '4 Medio'
                for ( seccion of curso['hijos']){                              // Luego recorre el nivel 3 de nodos donde 'nombre' hace referencia a 'sección'
                    if (seccion['nombre'] == 'A'){                              // Se evalúa si 'nombre' es igual a 'A'
                        for (oferta of seccion['hijos']){                        // Luego recorre el nivel 4 de nodos donde 'nombre' hace referencia a 'oferta'
                            if (oferta['nombre'] == 'Tecnología'){                  // Se evalúa si 'nombre' es igual a 'Tecnología'
                            console.log(`1.4.- La sede de ${sede['nombre']} de los ${curso['nombre']}, sección ${seccion['nombre']} tiene la oferta de ${oferta['nombre']}`)   
                            }                   
                        }                                                               // Entrega todos los datos que fueron evaluados y cumplen con las condiciones.
                }   }
        }   }  
    }
}


console.log("1.1.- Los nodos que no tienen hijos:  ", Nodos_SinHijos());  /* En consola muestra el listado de los nodos que no tienen hijos, por lo que el resultado en números 
                                                                             se muestra antes del resultado 1.2 */
console.log('1.2.- Nodos con ', Cantidad_Hijos(12),' cantidad de hijos');  /* En este ejemplo el único nodo con 12 hijos es {nombre:'las condes', tipo:'Sede', hijos[12]}, se 
                                                                              muestra listado (arriba del listado se encuentra respuesta 1.1) */
console.log('1.3.- Los nodos totales del archivo JSON son: ', Nodos_Totales());

return obtener_secc();                                                      // Muestra los datos con el número 1.4, ya que cumplen con las condiciones 3 'sedes'


