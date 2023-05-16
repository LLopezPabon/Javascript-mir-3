function join(arreglo) {
    let cadena = "";

    arreglo.forEach((elemento) => {
        cadena += elemento + " "
         })
        return cadena.trimEnd()
    }

console.log(join(["aloja" , "planeta"])); //"aloja,planeta"
console.log(join(["make","it","real"])); // "make","it","real"
console.log(join([])); // ""
