// EJERCICIO FUNCIÒN: realizar una funciòn para saludar coders y clan involucrado, tambien otra funciòn para despedirlos y llamar ambas funciones.

function saludarCoders(nombre, clan) {
    console.info("hola", nombre, "tu clan es", clan)
}

function despedirCoders(nombre, clan) {
    console.info("feliz dìa", nombre, "del clan", clan, "que te vaya muy bien")
}

saludarCoders("Simon", "Gates")
despedirCoders("Simon", "Gates")


//FUNCION DECLARATIVA: Si se puede llamar antes de ejecutarse

function mostrarUnHolaMundo() {
    console.log("hola mundo")
}

// FUNCIÒN EXPRESIVA: No se puede llamar antes de ejecutarse.

const mostrarUnHolaMundo = function () {
    console.log("hola mundo")
}

mostrarUnHolaMundo()

function sumarDosNumeros(numero1, numero2) {
    let respuesta = numero1 + numero2
    return respuesta
}

let primeraSuma = sumarDosNumeros(10, 20)

console.log(primeraSuma)

//METODO DATE

let isDate = new Date()
console.log(isDate);
let isDate2 = new Date("03/05/1992") // mm/dd/yyyy
console.log(isDate2)

// Getter

let dia = isDate.getDate() // 1-30
console.log(dia);

let mes = isDate.getMonth() + 1 // nos entrega el mes anterior por eso se debe sumar 1.
console.log(mes);

let dayWeek = isDate.getDay() // 0-6
console.log(dayWeek);

let year = isDate.getFullYear() // yyyy actual
console.log(year);

let hour = isDate.getHours() // 0-59
console.log(hour);

let minute = isDate.getMinutes() // 0-59
console.log(minute);

let seg = isDate.getSeconds() // 0-59
console.log(seg);

let mil = isDate.getMilliseconds() // 0-999
console.log(mil);

console.log(isDate.getHours(), isDate.getMinutes(), isDate.getSeconds);

// SETTERS

// console.log("Setters");
// console.log(isDate.setDate(2,4));
// console.log(isDate.setFullYear(1996));

// REPRESENTACIÒN DE FECHAS

console.log(isDate);
console.log(isDate.toDateString());
console.log(isDate.toLocaleDateString());
console.log(isDate.toISOString());
console.log(isDate.toJSON());
console.log(isDate.toString());

// EJERCICIO: Ingresar fecha mediante un promt, mostrar por medio de un alert, a que dìa de la semana corresponde con un alert.

let fecha = new Date(prompt("ingrese la fecha en formato mm/dd/yyyy"))
console.log(fecha);

let dia1 = fecha.getDay()
console.log(dia1);

switch (dia1) {
    case 0:
        alert("tu dìa es Domingo")
        break;
    case 1:
        alert("tu dìa es Lunes")
        break;
    case 2:
        alert("tu dìa es Martes")
        break;
    case 3:
        alert("tu dìa es Miercoles")
        break;
    case 4:
        alert("tu dìa es Jueves")
        break;
    case 5:
        alert("tu dìa es Viernes")
        break;

    default:
        alert("tu dìa es Sabado")
        break;

}