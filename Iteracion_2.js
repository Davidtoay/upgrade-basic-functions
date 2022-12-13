/*
Completa la función que tomando un array de strings como argumento devuelva el más largo, 
en caso de que dos strings tenga la misma longitud deberá devolver el primero.
*/

//const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(array) {
    let longest = array[0];

    for ( let heros of array){
        console.log("miro si "+heros+ " es el string más largo");
        console.log("para eso lo comparo con "+longest+ " que es el string más largo que he encontrado");
        if (heros.length > longest.length){
            console.log(heros+ " es más largo que "+longest);
            longest = heros;
        }
        console.log("es más largo "+longest);
    }
    return longest;
}

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
console.log("el string más largo es -->"+findLongestWord(avengers));