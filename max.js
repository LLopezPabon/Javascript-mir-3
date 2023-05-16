function max(arreglo) {
    let maxvalue= 0;
    if(arreglo.length) {
        arreglo.array.forEach((elemento) => {
            if(elemento > maxvalue) maxvalue = elemento;
         });
         return maxvalue






    }
return undefined

}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined
