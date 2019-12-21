
// observaciones generales
// Excelente trabajo. Codigo claro, excelente uso de los conceptos vistos.
// Se nota el esfuerzo por hacer que la experiencia del usuario sea la mejor posible. 
// Dejo comentarios a lo largo del codigo, pero son detalles. 



// Esto es un detalle que no se si llegue a comentar en clase, 
// pero en general optamos por no hacer lineas de codigo que tengan mas que 80 o 100 caracteres
// De esta manera nadie tiene que hacer scroll horizontal para leer nuestro codigo
// La manera estandar de escribir este array seria asi:
// let usuarios = [
//   [0, 'Carla', 1545628984, 'carla@gmail.com'],
//   [1, 'Pedro', 1545251245, 'pedro@gmail.com'],
//   [2, 'Lucas', 1523357849, 'lucas@gmail.com'],
//   [3, 'Ana', 15789456, 'ana@gmail.com']
// ];

let usuarios = [[0, 'Carla', 1545628984, 'carla@gmail.com'], [1, 'Pedro', 1545251245, 'pedro@gmail.com'], [2, 'Lucas', 1523357849, 'lucas@gmail.com'], [3, 'Ana', 15789456, 'ana@gmail.com']];


// Recuerden siempre borrar los console log antes de entregar un trabajo
// Son muy importantes en el desarrollo, pero no deben estar en un producto finalizado. 
console.log(usuarios);

// Se que dije muchas veces que "mas variables es mejor", y "ante la duda, usen variables"
// Por eso no me parece mal la declaracion de una variable para convertir a mayusculas. 
// Pero habria que ver en una segunda revision del codigo si son realmente necesarias, 
// o si podemos decir directamente
// operacion = operacion.toUpperCase();
let operacion = "";
let operacionUpper = "";
let newArray = [];
console.log(newArray);
do {
operacion = prompt(`OPERACIONES POSIBLES
Elegí la operación que querés realizar:
----------------------------------------
  ✚  [CREAR] un usuario
  🔍  [BUSCAR] un usuario
  📝  [LISTAR] todos los usuarios
  ✒️  [MODIFICAR] un usuario
  ✂  [ELIMINAR] un usuario
  ✖️  [SALIR] del programa`);
  operacionUpper = operacion.toUpperCase();


switch (operacionUpper) {
   case "CREAR":

   // Esta variable "repetir" se repite (jeje) con distintas variaciones a lo largo de todo el switch
   // Decir "repetir2" no es muy claro, y tampoco usar distintas variables para el mismo comportamiento
   // Yo declrararia tanto repetir como repetirUpper arriba de todo
   // en cada "case" del switch, en lugar de crear una variable nueva como repetir2, repetir3, 
   // "limpiaria" la misma variable asi:
   // repetir = "";
   // repetirUpper = "";
   // asi solo usamos esa y no cinco distintas
    let repetir = "";
    let repetirUpper = "";
    do {
    let nombreUsuarioACrear = prompt("¿Qué usuario querés crear?")
    let telefonoUsuario = prompt("Ingresá el teléfono del usuario")
    let mailUsuario = prompt("Ingresá el mail del usuario")
    let confirmation = prompt(`Ingresaste los siguientes datos:
    Nombre: ${nombreUsuarioACrear}
    Teléfono: ${telefonoUsuario}
    Email: ${mailUsuario}
    --------------------------------
    ¿Querés confirmar esta operación? [SÍ/NO]`)
    if (confirmation === "SÍ" || confirmation === "sí" || confirmation === "si" || confirmation === "SI") {
      let usuarioNuevo = [(usuarios.length -1) + 1, nombreUsuarioACrear, Number(telefonoUsuario), mailUsuario];
      usuarios.push(usuarioNuevo)
      alert(`Operación realizada exitosamente.`)
      console.log(usuarios);
    }
    else {
      alert(`La operación no se realizó.`)
    }
    repetir = prompt("¿Querés repetir la operación? [SÍ/NO]");
    repetirUpper = repetir.toUpperCase();
    // la condicion de este while hace que si escribo "asdfghj" o aprieto enter en repetir operacion, 
    // me lleve a repetirla. 
    } while (repetirUpper !== "NO");
    break;

    case "BUSCAR":
      let repetir2 = "";
      let repetir2Upper = "";
      do {

        let opcionBusqueda = prompt(`Seleccioná una opción de búsqueda:
        ID, NOMBRE, TELÉFONO, EMAIL`);
        switch (opcionBusqueda.toUpperCase()) {
          case "ID":
            datoABuscar = prompt("Ingresá el valor de ID");
            // recuerden dejar espacio entre operadores
            // asi
        // for (let j = 0; j < usuarios.length; j++) {
            for (let j=0; j<usuarios.length; j++) {
            for (let m=0; m<usuarios[j].length; m++) {
            if (usuarios[j][m] == datoABuscar) {
            alert(`Encontramos el usuario que tiene el dato que buscás:
            nombre: ${usuarios[j][1]}
            teléfono: ${usuarios[j][2]}
            email: ${usuarios[j][3]}`)
            }
            // aqui tambien tendria que haber un break, ya que a veces el alert se repite
            }
            }

            // atencion al indentado aca arriba y en varios lugares mas: el if y los dos for estan en la misma posicion
            // deberian estar ubicados de tal manera que sepamos rapidamente quien esta adentro de quien
            // asi:
            // for (let j = 0; j < usuarios.length; j++) {
            //   for (let m = 0; m < usuarios[j].length; m++) {
            //     if (usuarios[j][m] == datoABuscar) {
              //
            //     }
            //   }
            // }
            
            break;
            // no creo que sea necesario hacer tres cases aca, ya que el codigo es el mismo
            // con solo preguntarle el valor de busqueda y hacer la logica, deberia funcionar el codigo
          case "NOMBRE":
            datoABuscar = prompt("Ingresá el valor de nombre");
            for (let j=0; j<usuarios.length; j++) {
            for (let m=0; m<usuarios[j].length; m++) {
            if (usuarios[j][m] == datoABuscar) {
            alert(`Encontramos el usuario que tiene el dato que buscás:
            nombre: ${usuarios[j][1]}
            teléfono: ${usuarios[j][2]}
            email: ${usuarios[j][3]}`)
            }
            }
            }
            break;
          case "TELÉFONO" || "TELEFONO":
            datoABuscar = prompt("Ingresá el valor de teléfono");
            for (let j=0; j<usuarios.length; j++) {
            for (let m=0; m<usuarios[j].length; m++) {
            if (usuarios[j][m] == datoABuscar) {
            alert(`Encontramos el usuario que tiene el dato que buscás:
            nombre: ${usuarios[j][1]}
            teléfono: ${usuarios[j][2]}
            email: ${usuarios[j][3]}`)
            }
            }
            }
            break;
          case "EMAIL":
            datoABuscar = prompt("Ingresá el valor de email");
            for (let j=0; j<usuarios.length; j++) {
            for (let m=0; m<usuarios[j].length; m++) {
            if (usuarios[j][m] == datoABuscar) {
            alert(`Encontramos el usuario que tiene el dato que buscás:
            nombre: ${usuarios[j][1]}
            teléfono: ${usuarios[j][2]}
            email: ${usuarios[j][3]}`)
            }
            }
            }
            break;
          default:
            alert("Ingresaste un valor inválido.");
            break;
      }
        repetir2 = prompt("¿Querés repetir la operación? [SÍ/NO]");
        repetir2Upper = repetir2.toUpperCase();
      } while (repetir2Upper !== "NO");
      break;

    case "LISTAR":
      let string = "";
      for (let i=0; i<usuarios.length; i++) {
      string += ` 
                  nombre: ${usuarios[i][1]}
                  teléfono: ${usuarios[i][2]}
                  email: ${usuarios[i][3]}
                  ----------------------------------`   
      }
      alert(string);
      break;

    case "MODIFICAR":
      let repetir3 = "";
      let repetir3Upper = "";
      do {
        let idParaModificar = prompt(`Ingresá el ID del registro que querés modificar:`);
        let nuevoNombre = prompt(`Ingresá el nuevo nombre:`)
        let nuevoTelefono = prompt(`Ingresá el nuevo teléfono:`)
        let nuevoEmail = prompt (`Ingresá el nuevo email:`)
        
        // Me gusta esta solucion!
        // Tambien se podria hacer con un for
        usuarios[Number(idParaModificar)].splice(0, 4, Number(idParaModificar), nuevoNombre, nuevoTelefono, nuevoEmail);
        
        alert(`Registro cambiado:
        ID: ${Number(idParaModificar)}
        nombre: ${nuevoNombre}
        teléfono: ${nuevoTelefono}
        email: ${nuevoEmail}`)
        repetir3 = prompt("¿Querés repetir la operación? [SÍ/NO]");
        repetir3Upper = repetir3.toUpperCase();
      } while (repetir3Upper !== "NO");
      break;

    case "ELIMINAR":
      let repetir4 = "";
      let repetir4Upper = "";
      do {
        let idParaEliminar = prompt(`Ingresá el ID del registro que querés eliminar:`);
        let idEnNro = Number(idParaEliminar);
        let confirmation2 = prompt(`Se eliminará el siguiente registro:
        ID: ${idEnNro}
        nombre: ${usuarios[idEnNro][1]}
        teléfono: ${usuarios[idEnNro][2]}
        email: ${usuarios[idEnNro][3]}
    --------------------------------
    ¿Querés confirmar esta operación? [SÍ/NO]`)
    if (confirmation2 === "SÍ" || confirmation2 === "sí" || confirmation2 === "si" || confirmation2 === "SI") {
      usuarios[idEnNro].splice(0, 4);
      usuarios[idEnNro] = null;
      alert(`Operación realizada exitosamente.`)
   
      console.log(usuarios);

      for (let i=0; i<usuarios.length; i++) {
        if (usuarios[i] !== null) {
          newArray.push(usuarios[i])
        }
      }
      console.log(newArray);
      usuarios = Array.from(newArray);
      console.log(usuarios);
      }
    else {
      alert(`La operación no se realizó.`)
    }

          // Me costó un poco entender la logica de esta operacion - creo que se complicaron de mas y por ese motivo
      // su codigo no es tan claro en este punto. 
      // Me parece mas sencillo
      // 1. Hacer un for adentro de un for, buscando el usuario que tiene el ID que puso el usuario (igual que en OBTENER)
      // 2. Si encuentro a ese usuario, hacer splice sobre todo el array que lo contiene
      // Asi:
      //      let idParaEliminar = prompt(`Ingresá el ID del registro que querés eliminar:`);
      //       for (i = 0; i < usuarios.length; i++) {
      //           if (usuarios[i][0] == idParaEliminar) {
      //               confirmarOperacion = prompt(`Los datos del usuario a eliminar son:
      //             ID: ${usuarios[i][0]}
      //             NOMBRE: ${usuarios[i][1]}
      //             TELEFONO: ${usuarios[i][2]}
      //             MAIL: ${usuarios[i][3]}
      //             Desea confirmar? (SI-NO)
      //             `)
      //               if (confirmarOperacion == "SI") {
      //                   usuarios.splice(i, 1);
      //                   alert("La operacion ha sido realizada exitosamente");
      //               } else {
      //                   alert("La operacion ha sido cancelada");
      //               }
    
    repetir4 = prompt("¿Querés repetir la operación? [SÍ/NO]");
    repetir4Upper = repetir4.toUpperCase();
      } while (repetir4Upper !== "NO");
      break;

    default:
      break;
  }
} while (operacionUpper !== "SALIR");

alert("¡Hasta pronto! ツ")






//https://github.com/Ada-IT/bootcamp-frontend/blob/master/integradores/Integrador%202.%20Estructuras%20de%20control.md
//https://malerey.github.io/Integrador-2/index.html 

