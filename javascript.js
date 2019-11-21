let usuarios = [[0, 'Carla', 1545628984, 'carla@gmail.com'], [1, 'Pedro', 1545251245, 'pedro@gmail.com'], [2, 'Lucas', 1523357849, 'lucas@gmail.com'], [3, 'Ana', 15789456, 'ana@gmail.com']];

console.log(usuarios);


let operacion = prompt(`OPERACIONES:
-------------------
[CREAR] un usuario
[BUSCAR] un usuario
[LISTAR] todos los usuarios
[MODIFICAR] un usuario
[ELIMINAR] un usuario
[SALIR] del programa`);


switch (operacion) {
   case "CREAR":
    let repetir;
    for (let i=0; repetir !=="NO"; i++) {
    let nombreUsuarioACrear = prompt("¿Qué usuario querés crear?")
    let telefonoUsuario = prompt("Ingresá el teléfono del usuario")
    let mailUsuario = prompt("Ingresá el mail del usuario")
    let confirmation = prompt(`Has ingresado los siguientes datos:
    Nombre: ${nombreUsuarioACrear}
    Teléfono: ${telefonoUsuario}
    Email: ${mailUsuario}
    --------------------------------
    ¿Desea confirmar esta operación? [SÍ/NO]`)
    if (confirmation === "SÍ") {
      let usuarioNuevo = [nombreUsuarioACrear, Number(telefonoUsuario), mailUsuario];
      usuarios.push(usuarioNuevo)
      alert(`Operación realizada exitosamente.`)
      console.log(usuarios);
    } 
    else {
      alert(`La operación no se ha realizado.`)
    }
    repetir = prompt("¿Desea repetir la operación? [SÍ/NO]");
    if (repetir === "SÍ") {
    } 
  }
  break;

  case "BUSCAR":
  let repetir2;
    for (let i=0; repetir2 !=="NO"; i++) {
      let opcionBusqueda = prompt(`Seleccioná una opción de búsqueda:
      ID, NOMBRE, TELÉFONO, EMAIL`);
      
      if (opcionBusqueda === "ID") {
        datoABuscar = prompt("Ingresá el valor de ID")
      }
      else if (opcionBusqueda === "NOMBRE") {
        datoABuscar = prompt("Ingresá el valor de nombre")
      }
      else if (opcionBusqueda === "TELÉFONO") {
        datoABuscar = prompt("Ingresá el valor de teléfono")
      }
      else if (opcionBusqueda === "EMAIL") {
        datoABuscar = prompt("Ingresá el valor de email")
      }
      else {
        alert("Ingresaste un valor inválido.")
      }


      for (let j=0; j<usuarios.length; j++) {
        for (let m=0; m<usuarios[j].length; m++) {
          if (usuarios[j][m] == datoABuscar) {
            alert(`Encontramos el usuario ${usuarios[j]} que tiene el dato que buscás`)
          }
        }

      }

    
    repetir2 = prompt("¿Desea repetir la operación? [SÍ/NO]");
    if (repetir2 === "SÍ") {
    }
  }
  break;

  default:
  break;

}


