
/*
Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
en caso que existan los elimina para retornar un array sin los elementos duplicados. 
Puedes usar este array para probar tu función:
*/

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];
function removeDuplicates(array) {
    for ( let i = 0; i < array.length; i++){
        const alimentos = array[i];
        for (let j = 0; j < array.length; j++){
            const repetidos = array[j];
            if ( alimentos == repetidos && i!==j){
                array.splice(j,1);
            }
        }
    } return array
}
console.log(removeDuplicates(duplicates));