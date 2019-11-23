let usuarios = [[0, 'Carla', 1545628984, 'carla@gmail.com'], [1, 'Pedro', 1545251245, 'pedro@gmail.com'], [2, 'Lucas', 1523357849, 'lucas@gmail.com'], [3, 'Ana', 15789456, 'ana@gmail.com']];

console.log(usuarios);
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
      ;
    }
    else {
      alert(`La operación no se realizó.`)
    }
    
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