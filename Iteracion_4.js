/*
Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:
*/

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(array) {
    let average = 0;
    
    for (let i =0; i<array.length; i++){
        average += array[i];
        promedio = average / array.length;
    }
    return promedio;
}
console.log(average(numbers));