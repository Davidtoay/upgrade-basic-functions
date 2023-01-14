

/*
Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  
Puedes usar este array para probar tu función:
*/


const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];

function repeatCounter(array) {
    let repetirse=[];
    for (let i = 0; i < array.length; i++) {
        let cont=0;
        for ( let j = 0; j < array.length; j++) {
            if ( array[i]===array[j]) {
                cont++;
            }
        }
        repetirse.push(cont);
    }
    return repetirse
}

console.log(repeatCounter(counterWords));
