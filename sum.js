function sum(arreglo) {
    let totalizador = 0;
    arreglo.array.forEach((elemento) => {
        totalizador += elemento
   
    });
    return totalizador;






}
console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0
